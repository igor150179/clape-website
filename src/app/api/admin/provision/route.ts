import { NextResponse } from "next/server";
import {
  generatePassword,
  normalizeEmail,
} from "@/lib/calculadora-auth/constants";
import { sendWelcomeAccess } from "@/lib/calculadora-auth/email";
import { hashPassword } from "@/lib/calculadora-auth/password";
import { getUser, saveUser } from "@/lib/calculadora-auth/redis";

type Body = {
  email?: string;
  password?: string;
  sendEmail?: boolean;
};

function authorized(request: Request): boolean {
  const secret = process.env.CALCULADORA_ADMIN_SECRET;
  if (!secret) return false;
  const header = request.headers.get("authorization");
  return header === `Bearer ${secret}`;
}

/** Cadastra ou reativa comprador (uso manual ou integração Hotmart). */
export async function POST(request: Request) {
  if (!authorized(request)) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  }

  try {
    const body = (await request.json()) as Body;
    const email = normalizeEmail(body.email ?? "");
    if (!email) {
      return NextResponse.json({ error: "E-mail obrigatório." }, { status: 400 });
    }

    const plainPassword = body.password?.trim() || generatePassword();
    const passwordHash = await hashPassword(plainPassword);
    const existing = await getUser(email);

    await saveUser(email, {
      passwordHash,
      active: true,
      createdAt: existing?.createdAt ?? new Date().toISOString(),
    });

    if (body.sendEmail !== false) {
      await sendWelcomeAccess(email, plainPassword);
    }

    return NextResponse.json({
      ok: true,
      email,
      password: body.password ? undefined : plainPassword,
    });
  } catch (error) {
    console.error("[admin/provision]", error);
    return NextResponse.json(
      { error: "Falha ao provisionar usuário." },
      { status: 500 },
    );
  }
}

/** Desativa acesso (ex.: reembolso Hotmart). */
export async function DELETE(request: Request) {
  if (!authorized(request)) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  }

  try {
    const body = (await request.json()) as { email?: string };
    const email = normalizeEmail(body.email ?? "");
    if (!email) {
      return NextResponse.json({ error: "E-mail obrigatório." }, { status: 400 });
    }

    const existing = await getUser(email);
    if (!existing) {
      return NextResponse.json({ error: "Usuário não encontrado." }, { status: 404 });
    }

    await saveUser(email, { ...existing, active: false });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[admin/provision DELETE]", error);
    return NextResponse.json({ error: "Falha ao desativar." }, { status: 500 });
  }
}
