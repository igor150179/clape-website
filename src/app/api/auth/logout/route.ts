import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  parseProduct,
  sessionCookieForProduct,
} from "@/lib/calculadora-auth/constants";
import { deleteSession, getSession } from "@/lib/calculadora-auth/store";
import { clearSessionCookie } from "@/lib/calculadora-auth/session-cookie";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json().catch(() => ({}))) as {
      product?: string;
    };
    const product = parseProduct(body.product);
    const cookieName = sessionCookieForProduct(product);
    const sessionId = request.cookies.get(cookieName)?.value;
    if (sessionId) {
      const session = await getSession(product, sessionId);
      if (session) {
        await deleteSession(product, session.email, sessionId);
      }
    }
    await clearSessionCookie(product);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[auth/logout]", error);
    return NextResponse.json({ ok: true });
  }
}
