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

export async function getApiUserId(request: NextRequest): Promise<string> {
  const header = request.headers.get("authorization");
  if (!header?.startsWith("Bearer ")) throw new Error("Missing or invalid Authorization header");
  const token = header.slice(7);
  const { payload } = await jwtVerify(token, getSecret());
  const userId = payload.userId as string;
  if (!userId) throw new Error("Invalid token payload");
  return userId;
}

export function apiOk<T extends object>(data: T, status = 200): Response {
  return Response.json({ ok: true, ...data }, { status });
}

export function apiError(message: string, status = 400): Response {
  return Response.json({ ok: false, error: message }, { status });
}

export function isAuthError(err: unknown): boolean {
  return (err as Error)?.message?.includes("Missing or invalid") ?? false;
}
