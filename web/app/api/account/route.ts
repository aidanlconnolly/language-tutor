import type { NextRequest } from "next/server";
import { getApiUserId, apiOk, apiError, isAuthError } from "@/lib/api-auth";
import { deleteUserData } from "@/lib/db/helpers";

/**
 * DELETE /api/account — permanently delete the authenticated user and all
 * their data across every language. Called from the mobile app's account
 * screen; satisfies App Store Guideline 5.1.1(v) (in-app account deletion).
 */
export async function DELETE(request: NextRequest): Promise<Response> {
  try {
    const userId = await getApiUserId(request);
    await deleteUserData(userId);
    return apiOk({});
  } catch (err) {
    if (isAuthError(err)) return apiError("Unauthorized", 401);
    return apiError(err instanceof Error ? err.message : "Server error", 500);
  }
}
