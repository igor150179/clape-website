import { cookies } from "next/headers";
import {
  type CalcProduct,
  CALC_PRODUCTS,
  SESSION_TTL_SECONDS,
  sessionCookieForProduct,
} from "./constants";

export function sessionCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  };
}

export async function setSessionCookie(
  product: CalcProduct,
  sessionId: string,
): Promise<void> {
  const jar = await cookies();
  jar.set(sessionCookieForProduct(product), sessionId, sessionCookieOptions());
}

export async function clearSessionCookie(product: CalcProduct): Promise<void> {
  const jar = await cookies();
  jar.delete(sessionCookieForProduct(product));
}

export function readSessionCookieFromHeader(
  cookieHeader: string | null,
  product: CalcProduct,
): string | undefined {
  if (!cookieHeader) return undefined;
  const name = sessionCookieForProduct(product);
  const match = cookieHeader
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${name}=`));
  if (!match) return undefined;
  return decodeURIComponent(match.slice(name.length + 1));
}

export function productFromPathname(pathname: string): CalcProduct | null {
  if (pathname.startsWith("/calculadora-biga")) return "biga";
  if (pathname.startsWith("/calculadora")) return "farinha";
  return null;
}

export function loginPathForProduct(product: CalcProduct): string {
  return CALC_PRODUCTS[product].loginPath;
}
