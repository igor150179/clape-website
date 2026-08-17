import type { CalcProduct } from "./constants";

function userKey(product: CalcProduct, email: string): string {
  return `user:${product}:${email}`;
}

function otpKey(product: CalcProduct, email: string): string {
  return `otp:${product}:${email}`;
}

function sessionKey(product: CalcProduct, sessionId: string): string {
  return `session:${product}:${sessionId}`;
}

function activeKey(product: CalcProduct, email: string): string {
  return `active:${product}:${email}`;
}

export type StoredUser = {
  passwordHash: string;
  active: boolean;
  createdAt: string;
};

export type StoredSession = {
  sessionId: string;
  email: string;
  product: CalcProduct;
  createdAt: string;
};

export async function getUser(
  product: CalcProduct,
  email: string,
): Promise<StoredUser | null> {
  const { getRedis } = await import("./redis-client");
  const redis = getRedis();
  const current = await redis.get<StoredUser>(userKey(product, email));
  if (current) return current;
  if (product === "farinha") {
    return redis.get<StoredUser>(`user:${email}`);
  }
  return null;
}

export async function saveUser(
  product: CalcProduct,
  email: string,
  user: StoredUser,
): Promise<void> {
  const { getRedis } = await import("./redis-client");
  await getRedis().set(userKey(product, email), user);
}

export async function setOtp(
  product: CalcProduct,
  email: string,
  code: string,
): Promise<void> {
  const { OTP_TTL_SECONDS } = await import("./constants");
  const { getRedis } = await import("./redis-client");
  await getRedis().set(otpKey(product, email), code, { ex: OTP_TTL_SECONDS });
}

export async function getOtp(
  product: CalcProduct,
  email: string,
): Promise<string | null> {
  const { getRedis } = await import("./redis-client");
  return getRedis().get<string>(otpKey(product, email));
}

export async function deleteOtp(
  product: CalcProduct,
  email: string,
): Promise<void> {
  const { getRedis } = await import("./redis-client");
  await getRedis().del(otpKey(product, email));
}

export async function createSession(
  product: CalcProduct,
  email: string,
  sessionId: string,
): Promise<void> {
  const { SESSION_TTL_SECONDS } = await import("./constants");
  const { getRedis } = await import("./redis-client");
  const redis = getRedis();

  const previous = await redis.get<string>(activeKey(product, email));
  if (previous && previous !== sessionId) {
    await redis.del(sessionKey(product, previous));
  }

  const session: StoredSession = {
    sessionId,
    email,
    product,
    createdAt: new Date().toISOString(),
  };

  await redis.set(sessionKey(product, sessionId), session, {
    ex: SESSION_TTL_SECONDS,
  });
  await redis.set(activeKey(product, email), sessionId, {
    ex: SESSION_TTL_SECONDS,
  });
}

export async function getSession(
  product: CalcProduct,
  sessionId: string,
): Promise<StoredSession | null> {
  const { getRedis } = await import("./redis-client");
  const current = await getRedis().get<StoredSession>(
    sessionKey(product, sessionId),
  );
  if (current) return current;
  if (product === "farinha") {
    return getRedis().get<StoredSession>(`session:${sessionId}`);
  }
  return null;
}

export async function getActiveSessionId(
  product: CalcProduct,
  email: string,
): Promise<string | null> {
  const { getRedis } = await import("./redis-client");
  const current = await getRedis().get<string>(activeKey(product, email));
  if (current) return current;
  if (product === "farinha") {
    return getRedis().get<string>(`active:${email}`);
  }
  return null;
}

export async function deleteSession(
  product: CalcProduct,
  email: string,
  sessionId: string,
): Promise<void> {
  const { getRedis } = await import("./redis-client");
  const redis = getRedis();
  await redis.del(sessionKey(product, sessionId));
  const active = await redis.get<string>(activeKey(product, email));
  if (active === sessionId) {
    await redis.del(activeKey(product, email));
  }
  if (product === "farinha") {
    await redis.del(`session:${sessionId}`);
    const legacyActive = await redis.get<string>(`active:${email}`);
    if (legacyActive === sessionId) {
      await redis.del(`active:${email}`);
    }
  }
}
