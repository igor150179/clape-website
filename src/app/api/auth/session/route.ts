import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  parseProduct,
  sessionCookieForProduct,
} from "@/lib/calculadora-auth/constants";
import { validateSession } from "@/lib/calculadora-auth/validate-session";

export async function GET(request: NextRequest) {
  try {
    const product = parseProduct(request.nextUrl.searchParams.get("product"));
    const sessionId = request.cookies.get(
      sessionCookieForProduct(product),
    )?.value;
    const result = await validateSession(product, sessionId);
    if (!result.ok) {
      return NextResponse.json({ ok: false, reason: result.reason }, { status: 401 });
    }
    return NextResponse.json({ ok: true, email: result.email, product });
  } catch (error) {
    console.error("[auth/session]", error);
    return NextResponse.json({ ok: false, reason: "expired" }, { status: 500 });
  }
}
