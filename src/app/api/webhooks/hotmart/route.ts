import { NextResponse } from "next/server";
import {
  generatePassword,
  normalizeEmail,
} from "@/lib/calculadora-auth/constants";
import { sendWelcomeAccess } from "@/lib/calculadora-auth/email";
import { hashPassword } from "@/lib/calculadora-auth/password";
import { getUser, saveUser } from "@/lib/calculadora-auth/redis";

/** Webhook Hotmart — ajuste o parser conforme o payload real do seu produto. */
export async function POST(request: Request) {
  const secret = process.env.HOTMART_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "Webhook não configurado." }, { status: 503 });
  }

  const token =
    request.headers.get("x-hotmart-hottok") ??
    request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");

  if (token !== secret) {
    return NextResponse.json({ error: "Token inválido." }, { status: 401 });
  }

  try {
    const payload = await request.json();
    const event = payload?.event ?? payload?.data?.event;
    const buyerEmail =
      payload?.data?.buyer?.email ??
      payload?.buyer?.email ??
      payload?.email;

    if (!buyerEmail) {
      return NextResponse.json({ ok: true, skipped: "sem e-mail" });
    }

    const email = normalizeEmail(String(buyerEmail));

    if (
      event === "PURCHASE_REFUNDED" ||
      event === "PURCHASE_CHARGEBACK" ||
      event === "SUBSCRIPTION_CANCELLATION"
    ) {
      const existing = await getUser(email);
      if (existing) {
        await saveUser(email, { ...existing, active: false });
      }
      return NextResponse.json({ ok: true, action: "deactivated" });
    }

    if (
      event === "PURCHASE_APPROVED" ||
      event === "PURCHASE_COMPLETE" ||
      !event
    ) {
      const plainPassword = generatePassword();
      const passwordHash = await hashPassword(plainPassword);
      const existing = await getUser(email);

      await saveUser(email, {
        passwordHash,
        active: true,
        createdAt: existing?.createdAt ?? new Date().toISOString(),
      });

      await sendWelcomeAccess(email, plainPassword);
      return NextResponse.json({ ok: true, action: "provisioned" });
    }

    return NextResponse.json({ ok: true, skipped: event ?? "evento ignorado" });
  } catch (error) {
    console.error("[webhook/hotmart]", error);
    return NextResponse.json({ error: "Erro no webhook." }, { status: 500 });
  }
}
