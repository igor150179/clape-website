import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  sessionCookieForProduct,
  type CalcProduct,
} from "@/lib/calculadora-auth/constants";
import {
  loginPathForProduct,
  productFromPathname,
  readSessionCookieFromHeader,
} from "@/lib/calculadora-auth/session-cookie";
import { validateSession } from "@/lib/calculadora-auth/validate-session";

const PUBLIC_SUFFIX = "/acesso";

function isPublicPath(pathname: string): boolean {
  return pathname.endsWith(PUBLIC_SUFFIX);
}

function homePath(product: CalcProduct): string {
  return product === "biga" ? "/calculadora-biga" : "/calculadora";
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const product = productFromPathname(pathname);
  if (!product) return NextResponse.next();

  const cookieName = sessionCookieForProduct(product);
  const sessionId =
    request.cookies.get(cookieName)?.value ??
    readSessionCookieFromHeader(request.headers.get("cookie"), product);

  if (isPublicPath(pathname)) {
    if (sessionId) {
      try {
        const result = await validateSession(product, sessionId);
        if (result.ok) {
          return NextResponse.redirect(new URL(homePath(product), request.url));
        }
      } catch {
        // Redis indisponível
      }
    }
    return NextResponse.next();
  }

  try {
    const result = await validateSession(product, sessionId);
    if (result.ok) {
      return NextResponse.next();
    }

    const login = new URL(loginPathForProduct(product), request.url);
    if (result.reason === "kicked") {
      login.searchParams.set("reason", "kicked");
    }
    login.searchParams.set("next", pathname);
    return NextResponse.redirect(login);
  } catch {
    const login = new URL(loginPathForProduct(product), request.url);
    login.searchParams.set("reason", "unavailable");
    return NextResponse.redirect(login);
  }
}

export const config = {
  matcher: [
    "/calculadora-biga",
    "/calculadora-biga/:path*",
    "/calculadora",
    "/calculadora/:path*",
  ],
};
