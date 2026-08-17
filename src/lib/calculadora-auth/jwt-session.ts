import { SignJWT, jwtVerify } from "jose";
import {
  type CalcProduct,
  normalizeEmail,
  SESSION_TTL_SECONDS,
} from "./constants";

function secretKey(): Uint8Array {
  const secret =
    process.env.CALCULADORA_JWT_SECRET ??
    process.env.CALCULADORA_ADMIN_SECRET ??
    "dev-only-change-me";
  return new TextEncoder().encode(secret);
}

export type JwtSessionPayload = {
  email: string;
  product: CalcProduct;
  sessionId: string;
};

export async function signSessionToken(
  payload: JwtSessionPayload,
): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_TTL_SECONDS}s`)
    .sign(secretKey());
}

export async function verifySessionToken(
  token: string,
): Promise<JwtSessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secretKey());
    const email = payload.email;
    const product = payload.product;
    const sessionId = payload.sessionId;
    if (
      typeof email !== "string" ||
      (product !== "farinha" && product !== "biga") ||
      typeof sessionId !== "string"
    ) {
      return null;
    }
    return { email, product, sessionId };
  } catch {
    return null;
  }
}

/** Aceita igor1501 ou igor1501@gmail.com */
export function resolveLoginEmail(raw: string): string {
  const trimmed = raw.trim().toLowerCase();
  if (trimmed && !trimmed.includes("@")) {
    return `${trimmed}@gmail.com`;
  }
  return normalizeEmail(trimmed);
}

export function isOwnerLogin(
  email: string,
  password: string,
  product: CalcProduct,
): boolean {
  const ownerEmail = process.env.CALCULADORA_OWNER_EMAIL;
  const ownerPassword = process.env.CALCULADORA_OWNER_PASSWORD;
  const ownerProducts =
    process.env.CALCULADORA_OWNER_PRODUCTS ?? "farinha,biga";

  if (!ownerEmail || !ownerPassword) return false;
  if (normalizeEmail(email) !== normalizeEmail(ownerEmail)) return false;
  if (password !== ownerPassword) return false;
  return ownerProducts.split(",").map((p) => p.trim()).includes(product);
}

export function redisConfigured(): boolean {
  return Boolean(
    process.env.UPSTASH_REDIS_REST_URL &&
      process.env.UPSTASH_REDIS_REST_TOKEN,
  );
}
