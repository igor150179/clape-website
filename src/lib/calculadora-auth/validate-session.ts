import {
  getActiveSessionId,
  getSession,
} from "./store";
import type { CalcProduct } from "./constants";

export type SessionValidation =
  | { ok: true; email: string; sessionId: string }
  | { ok: false; reason: "missing" | "expired" | "kicked" };

export async function validateSession(
  product: CalcProduct,
  sessionId: string | undefined,
): Promise<SessionValidation> {
  if (!sessionId) {
    return { ok: false, reason: "missing" };
  }

  const session = await getSession(product, sessionId);
  if (!session) {
    return { ok: false, reason: "expired" };
  }

  const active = await getActiveSessionId(product, session.email);
  if (active !== sessionId) {
    return { ok: false, reason: "kicked" };
  }

  return { ok: true, email: session.email, sessionId };
}
