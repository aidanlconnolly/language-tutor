import { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { useRouter, useSegments } from "expo-router";
import { isAuthenticated, getUser } from "@/lib/auth";
import type { AuthUser } from "@/lib/auth";
import { setSessionExpiredHandler } from "@/lib/api";

export type AuthCtx = { user: AuthUser | null; setUser: (u: AuthUser | null) => void };
import { createContext, useContext } from "react";
export const AuthContext = createContext<AuthCtx>({ user: null, setUser: () => {} });
export function useAuth() { return useContext(AuthContext); }

export default function RootLayout() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [ready, setReady] = useState(false);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    (async () => {
      const authed = await isAuthenticated();
      if (authed) setUser(await getUser());
      setReady(true);
    })();
  }, []);

  // Any API 401 (expired/invalid token) clears auth state → redirect effect
  // below bounces to login.
  useEffect(() => {
    setSessionExpiredHandler(() => setUser(null));
    return () => setSessionExpiredHandler(null);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const inAuth = segments[0] === "(auth)";
    if (!user && !inAuth) router.replace("/(auth)/login");
    if (user && inAuth) router.replace("/(app)");
  }, [user, ready, segments]);

  if (!ready) return null;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Stack screenOptions={{ headerShown: false }} />
    </AuthContext.Provider>
  );
}
