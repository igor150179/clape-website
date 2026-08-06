import { Redis } from "@upstash/redis";

let redis: Redis | null = null;

export function getRedis(): Redis {
  if (!redis) {
    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;
    if (!url || !token) {
      throw new Error(
        "UPSTASH_REDIS_REST_URL e UPSTASH_REDIS_REST_TOKEN são obrigatórios",
      );
    }
    redis = new Redis({ url, token });
  }
  return redis;
}

export type StoredUser = {
  passwordHash: string;
  active: boolean;
  createdAt: string;
};

export type StoredSession = {
  sessionId: string;
  email: string;
  createdAt: string;
};

export async function getUser(email: string): Promise<StoredUser | null> {
  return getRedis().get<StoredUser>(`user:${email}`);
}

export async function saveUser(email: string, user: StoredUser): Promise<void> {
  await getRedis().set(`user:${email}`, user);
}

export async function setOtp(email: string, code: string): Promise<void> {
  const { OTP_TTL_SECONDS } = await import("./constants");
  await getRedis().set(`otp:${email}`, code, { ex: OTP_TTL_SECONDS });
}

export async function getOtp(email: string): Promise<string | null> {
  return getRedis().get<string>(`otp:${email}`);
}

export async function deleteOtp(email: string): Promise<void> {
  await getRedis().del(`otp:${email}`);
}

export async function createSession(
  email: string,
  sessionId: string,
): Promise<void> {
  const { SESSION_TTL_SECONDS } = await import("./constants");
  const redis = getRedis();

  const previous = await redis.get<string>(`active:${email}`);
  if (previous && previous !== sessionId) {
    await redis.del(`session:${previous}`);
  }

  const session: StoredSession = {
    sessionId,
    email,
    createdAt: new Date().toISOString(),
  };

  await redis.set(`session:${sessionId}`, session, {
    ex: SESSION_TTL_SECONDS,
  });
  await redis.set(`active:${email}`, sessionId, { ex: SESSION_TTL_SECONDS });
}

export async function getSession(
  sessionId: string,
): Promise<StoredSession | null> {
  return getRedis().get<StoredSession>(`session:${sessionId}`);
}

export async function getActiveSessionId(email: string): Promise<string | null> {
  return getRedis().get<string>(`active:${email}`);
}

export async function deleteSession(
  email: string,
  sessionId: string,
): Promise<void> {
  const redis = getRedis();
  await redis.del(`session:${sessionId}`);
  const active = await redis.get<string>(`active:${email}`);
  if (active === sessionId) {
    await redis.del(`active:${email}`);
  }
}
