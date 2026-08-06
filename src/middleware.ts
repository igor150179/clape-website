import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SESSION_COOKIE } from "@/lib/calculadora-auth/constants";
import { readSessionCookieFromHeader } from "@/lib/calculadora-auth/session-cookie";
import { validateSession } from "@/lib/calculadora-auth/validate-session";

const PUBLIC_PATHS = new Set(["/calculadora/acesso"]);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_PATHS.has(pathname)) {
    const sessionId = request.cookies.get(SESSION_COOKIE)?.value;
    if (sessionId) {
      try {
        const result = await validateSession(sessionId);
        if (result.ok) {
          return NextResponse.redirect(new URL("/calculadora", request.url));
        }
      } catch {
        // Redis indisponível — deixa entrar na tela de login
      }
    }
    return NextResponse.next();
  }

  const sessionId =
    request.cookies.get(SESSION_COOKIE)?.value ??
    readSessionCookieFromHeader(request.headers.get("cookie"));

  try {
    const result = await validateSession(sessionId);
    if (result.ok) {
      return NextResponse.next();
    }

    const login = new URL("/calculadora/acesso", request.url);
    if (result.reason === "kicked") {
      login.searchParams.set("reason", "kicked");
    }
    login.searchParams.set("next", pathname);
    return NextResponse.redirect(login);
  } catch {
    const login = new URL("/calculadora/acesso", request.url);
    login.searchParams.set("reason", "unavailable");
    return NextResponse.redirect(login);
  }
}

export const config = {
  matcher: ["/calculadora", "/calculadora/:path*"],
};
