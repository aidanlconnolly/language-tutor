import * as SecureStore from "expo-secure-store";

const TOKEN_KEY = "lt_auth_token";
const USER_KEY = "lt_auth_user";

export type AuthUser = { id: string; email: string };

export async function saveAuth(token: string, user: AuthUser): Promise<void> {
  await Promise.all([
    SecureStore.setItemAsync(TOKEN_KEY, token),
    SecureStore.setItemAsync(USER_KEY, JSON.stringify(user)),
  ]);
}

export async function getToken(): Promise<string | null> {
  return SecureStore.getItemAsync(TOKEN_KEY);
}

export async function getUser(): Promise<AuthUser | null> {
  const raw = await SecureStore.getItemAsync(USER_KEY);
  if (!raw) return null;
  try { return JSON.parse(raw) as AuthUser; } catch { return null; }
}

export async function clearAuth(): Promise<void> {
  await Promise.all([
    SecureStore.deleteItemAsync(TOKEN_KEY),
    SecureStore.deleteItemAsync(USER_KEY),
  ]);
}

export async function isAuthenticated(): Promise<boolean> {
  const token = await getToken();
  return !!token;
}
