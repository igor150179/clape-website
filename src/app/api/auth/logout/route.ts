import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SESSION_COOKIE } from "@/lib/calculadora-auth/constants";
import { deleteSession, getSession } from "@/lib/calculadora-auth/redis";
import { clearSessionCookie } from "@/lib/calculadora-auth/session-cookie";

export async function POST(request: NextRequest) {
  try {
    const sessionId = request.cookies.get(SESSION_COOKIE)?.value;
    if (sessionId) {
      const session = await getSession(sessionId);
      if (session) {
        await deleteSession(session.email, sessionId);
      }
    }
    await clearSessionCookie();
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[auth/logout]", error);
    return NextResponse.json({ ok: true });
  }
}
