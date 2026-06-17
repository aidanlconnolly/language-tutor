import type { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { db, schema } from "@/lib/db/client";
import { createApiToken, apiError, readJson, isBadRequestError } from "@/lib/api-auth";

// A real bcrypt(cost 12) hash compared against on the no-user path so the
// missing-email and wrong-password branches take comparable time (defeats
// email enumeration via response timing).
const FAKE_HASH = "$2b$12$KtV8EbH90Rd6dwoeUbbuYec8.YB9sReUMdmA84/dPa8bnbXghzltC";

export async function POST(request: NextRequest): Promise<Response> {
  try {
    const body = await readJson<{ email?: string; password?: string }>(request);
    const email = ((body.email as string) ?? "").trim().toLowerCase();
    const password = (body.password as string) ?? "";

    if (!email || !password) return apiError("Email and password are required");

    const rows = await db
      .select()
      .from(schema.users)
      .where(eq(schema.users.email, email))
      .limit(1);
    if (rows.length === 0) {
      await bcrypt.compare(password, FAKE_HASH); // constant-time dummy compare
      return apiError("Invalid email or password", 401);
    }

    const user = rows[0];
    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return apiError("Invalid email or password", 401);

    const token = await createApiToken(user.id, user.email);
    return Response.json({ ok: true, token, user: { id: user.id, email: user.email } });
  } catch (err) {
    if (isBadRequestError(err)) return apiError(err.message, 400);
    return apiError(err instanceof Error ? err.message : "Server error", 500);
  }
}
