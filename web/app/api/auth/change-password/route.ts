import type { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { db, schema } from "@/lib/db/client";
import { getApiUserId, apiError, isAuthError } from "@/lib/api-auth";

export async function POST(request: NextRequest): Promise<Response> {
  try {
    const userId = await getApiUserId(request);
    const { current, new: next, confirm } = await request.json();

    if (!current || !next || !confirm) return apiError("All fields are required");
    if ((next as string).length < 8) return apiError("New password must be at least 8 characters");
    if (next !== confirm) return apiError("Passwords do not match");

    const rows = await db.select().from(schema.users).where(eq(schema.users.id, userId)).limit(1);
    if (rows.length === 0) return apiError("Account not found", 404);

    const valid = await bcrypt.compare(current, rows[0].passwordHash);
    if (!valid) return apiError("Current password is incorrect", 401);

    const passwordHash = await bcrypt.hash(next as string, 12);
    await db.update(schema.users).set({ passwordHash }).where(eq(schema.users.id, userId));
    return Response.json({ ok: true });
  } catch (err) {
    if (isAuthError(err)) return apiError("Unauthorized", 401);
    return apiError(err instanceof Error ? err.message : "Server error", 500);
  }
}
