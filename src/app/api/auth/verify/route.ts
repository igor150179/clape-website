import { NextResponse } from "next/server";
import {
  generateSessionId,
  normalizeEmail,
  parseProduct,
} from "@/lib/calculadora-auth/constants";
import {
  createSession,
  deleteOtp,
  getOtp,
} from "@/lib/calculadora-auth/store";
import { setSessionCookie } from "@/lib/calculadora-auth/session-cookie";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: string;
      code?: string;
      product?: string;
    };
    const product = parseProduct(body.product);
    const email = normalizeEmail(body.email ?? "");
    const code = (body.code ?? "").trim();

    if (!email || !code) {
      return NextResponse.json(
        { error: "Informe e-mail e código." },
        { status: 400 },
      );
    }

    const expected = await getOtp(product, email);
    if (!expected || expected !== code) {
      return NextResponse.json(
        { error: "Código inválido ou expirado." },
        { status: 401 },
      );
    }

    await deleteOtp(product, email);

    const sessionId = generateSessionId();
    await createSession(product, email, sessionId);
    await setSessionCookie(product, sessionId);

    const redirect =
      product === "biga" ? "/calculadora-biga" : "/calculadora";

    return NextResponse.json({ ok: true, redirect });
  } catch (error) {
    console.error("[auth/verify]", error);
    return NextResponse.json(
      { error: "Não foi possível concluir o login." },
      { status: 500 },
    );
  }
}
