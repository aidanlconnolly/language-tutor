import { jwtVerify, SignJWT } from "jose";
import type { NextRequest } from "next/server";

function getSecret(): Uint8Array {
  const s = process.env.AUTH_SECRET;
  if (!s) throw new Error("AUTH_SECRET not configured");
  return new TextEncoder().encode(s);
}

export async function createApiToken(userId: string, email: string): Promise<string> {
  return new SignJWT({ userId, email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(getSecret());
}

/** Thrown for every auth failure (missing header, expired/tampered/invalid token). */
export class AuthError extends Error {
  constructor(message = "Unauthorized") {
    super(message);
    this.name = "AuthError";
  }
}

export async function getApiUserId(request: NextRequest): Promise<string> {
  const header = request.headers.get("authorization");
  if (!header?.startsWith("Bearer ")) throw new AuthError("Missing or invalid Authorization header");
  const token = header.slice(7);
  let payload;
  try {
    ({ payload } = await jwtVerify(token, getSecret()));
  } catch {
    // jose throws its own errors for expired/bad-signature/malformed tokens —
    // normalize them all to AuthError so callers return 401, not 500.
    throw new AuthError("Invalid or expired token");
  }
  const userId = payload.userId as string;
  if (!userId) throw new AuthError("Invalid token payload");
  return userId;
}

export function apiOk<T extends object>(data: T, status = 200): Response {
  return Response.json({ ok: true, ...data }, { status });
}

export function apiError(message: string, status = 400): Response {
  return Response.json({ ok: false, error: message }, { status });
}

export function isAuthError(err: unknown): boolean {
  return err instanceof AuthError;
}

/** Thrown when a request body is missing or not valid JSON. Callers map it to 400. */
export class BadRequestError extends Error {
  constructor(message = "Request body must be valid JSON") {
    super(message);
    this.name = "BadRequestError";
  }
}

/**
 * Parse a JSON request body, normalizing empty/malformed input to BadRequestError (→ 400, not 500).
 * Defaults to `any` to match the ergonomics of the `request.json()` it replaces; callers that want
 * type safety pass an explicit shape, e.g. `readJson<{ email?: string }>(request)`.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function readJson<T = any>(request: NextRequest): Promise<T> {
  try {
    return (await request.json()) as T;
  } catch {
    throw new BadRequestError();
  }
}

export function isBadRequestError(err: unknown): err is BadRequestError {
  return err instanceof BadRequestError;
}
