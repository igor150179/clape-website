import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SESSION_COOKIE } from "@/lib/calculadora-auth/constants";
import { validateSession } from "@/lib/calculadora-auth/validate-session";

export async function GET(request: NextRequest) {
  try {
    const sessionId = request.cookies.get(SESSION_COOKIE)?.value;
    const result = await validateSession(sessionId);
    if (!result.ok) {
      return NextResponse.json({ ok: false, reason: result.reason }, { status: 401 });
    }
    return NextResponse.json({ ok: true, email: result.email });
  } catch (error) {
    console.error("[auth/session]", error);
    return NextResponse.json({ ok: false, reason: "expired" }, { status: 500 });
  }
}
