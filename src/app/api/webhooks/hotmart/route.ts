import { NextResponse } from "next/server";
import {
  generatePassword,
  normalizeEmail,
  parseProduct,
} from "@/lib/calculadora-auth/constants";
import { sendWelcomeAccess } from "@/lib/calculadora-auth/email";
import { hashPassword } from "@/lib/calculadora-auth/password";
import { getUser, saveUser } from "@/lib/calculadora-auth/store";

function productFromPayload(payload: Record<string, unknown>): "farinha" | "biga" {
  const custom =
    (payload?.data as Record<string, unknown>)?.product ??
    payload?.product ??
    process.env.HOTMART_DEFAULT_PRODUCT;
  return parseProduct(custom);
}

/** Webhook Hotmart — configure um webhook por produto ou passe product no payload. */
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
    const payload = (await request.json()) as Record<string, unknown>;
    const data = payload?.data as Record<string, unknown> | undefined;
    const event = payload?.event ?? data?.event;
    const buyerEmail =
      (data?.buyer as Record<string, unknown>)?.email ??
      (payload?.buyer as Record<string, unknown>)?.email ??
      payload?.email;

    if (!buyerEmail) {
      return NextResponse.json({ ok: true, skipped: "sem e-mail" });
    }

    const email = normalizeEmail(String(buyerEmail));
    const product = productFromPayload(payload);

    if (
      event === "PURCHASE_REFUNDED" ||
      event === "PURCHASE_CHARGEBACK" ||
      event === "SUBSCRIPTION_CANCELLATION"
    ) {
      const existing = await getUser(product, email);
      if (existing) {
        await saveUser(product, email, { ...existing, active: false });
      }
      return NextResponse.json({ ok: true, action: "deactivated", product });
    }

    if (
      event === "PURCHASE_APPROVED" ||
      event === "PURCHASE_COMPLETE" ||
      !event
    ) {
      const plainPassword = generatePassword();
      const passwordHash = await hashPassword(plainPassword);
      const existing = await getUser(product, email);

      await saveUser(product, email, {
        passwordHash,
        active: true,
        createdAt: existing?.createdAt ?? new Date().toISOString(),
      });

      await sendWelcomeAccess(email, plainPassword, product);
      return NextResponse.json({ ok: true, action: "provisioned", product });
    }

    return NextResponse.json({ ok: true, skipped: event ?? "evento ignorado" });
  } catch (error) {
    console.error("[webhook/hotmart]", error);
    return NextResponse.json({ error: "Erro no webhook." }, { status: 500 });
  }
}
