import { NextResponse } from "next/server";
import {
  generateOtp,
  normalizeEmail,
  parseProduct,
} from "@/lib/calculadora-auth/constants";
import { sendLoginCode } from "@/lib/calculadora-auth/email";
import { verifyPassword } from "@/lib/calculadora-auth/password";
import { getUser, setOtp } from "@/lib/calculadora-auth/store";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: string;
      password?: string;
      product?: string;
    };
    const product = parseProduct(body.product);
    const email = normalizeEmail(body.email ?? "");
    const password = body.password ?? "";

    if (!email || !password) {
      return NextResponse.json(
        { error: "Informe e-mail e senha." },
        { status: 400 },
      );
    }

    const user = await getUser(product, email);
    if (!user?.active) {
      return NextResponse.json(
        { error: "E-mail não autorizado. Use o e-mail da compra." },
        { status: 403 },
      );
    }

    const valid = await verifyPassword(password, user.passwordHash);
    if (!valid) {
      return NextResponse.json(
        { error: "Senha incorreta." },
        { status: 401 },
      );
    }

    const code = generateOtp();
    await setOtp(product, email, code);
    await sendLoginCode(email, code, product);

    return NextResponse.json({
      ok: true,
      message: "Código enviado para o seu e-mail.",
    });
  } catch (error) {
    console.error("[auth/request-code]", error);
    return NextResponse.json(
      { error: "Não foi possível enviar o código. Tente novamente." },
      { status: 500 },
    );
  }
}
