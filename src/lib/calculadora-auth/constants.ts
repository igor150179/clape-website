export const SESSION_COOKIE = "calc_session";
export const SESSION_TTL_SECONDS = 3 * 24 * 60 * 60; // 3 dias
export const OTP_TTL_SECONDS = 15 * 60; // código por e-mail
export const OTP_LENGTH = 6;

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function generateOtp(): string {
  const max = 10 ** OTP_LENGTH;
  const n = crypto.getRandomValues(new Uint32Array(1))[0]! % max;
  return n.toString().padStart(OTP_LENGTH, "0");
}

export function generatePassword(length = 10): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
  const bytes = crypto.getRandomValues(new Uint8Array(length));
  return Array.from(bytes, (b) => chars[b % chars.length]).join("");
}

export function generateSessionId(): string {
  return crypto.randomUUID();
}
