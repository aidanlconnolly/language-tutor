import { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, RefreshControl } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../_layout";
import { clearAuth } from "@/lib/auth";
import { apiGetProgress } from "@/lib/api";
import { SUPPORTED_LANGS, LANG_LABELS, LANG_FLAGS } from "@/lib/lang";
import type { Lang } from "@/lib/lang";

const ACCENT: Record<Lang, string> = { italian: "#f59e0b", french: "#3b82f6", spanish: "#ef4444" };

export default function HomeScreen() {
  const { user, setUser } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState<Record<Lang, { lessonStreak: number; readStreak: number; unitsCompleted: number } | null>>({
    italian: null, french: null, spanish: null,
  });
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadStats = useCallback(async () => {
    const results = await Promise.allSettled(
      SUPPORTED_LANGS.map(async (lang) => {
        const data = await apiGetProgress(lang);
        const lessonStreak = data.streaks.find((s) => s.kind === "lesson")?.current ?? 0;
        const readStreak = data.streaks.find((s) => s.kind === "read")?.current ?? 0;
        const passed = new Set(data.checkpoints.filter((c) => c.passed).map((c) => c.unitSlug));
        return { lang, lessonStreak, readStreak, unitsCompleted: passed.size };
      }),
    );
    const s: typeof stats = { italian: null, french: null, spanish: null };
    for (const r of results) {
      if (r.status === "fulfilled") s[r.value.lang] = r.value;
    }
    setStats(s);
  }, []);

  useEffect(() => {
    loadStats().finally(() => setLoading(false));
  }, [loadStats]);

  async function onRefresh() {
    setRefreshing(true);
    await loadStats();
    setRefreshing(false);
  }

  async function handleLogout() {
    await clearAuth();
    setUser(null);
  }

  return (
    <ScrollView style={s.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#818cf8" />}>
      <View style={s.header}>
        <Text style={s.greeting}>Welcome back</Text>
        <Text style={s.email}>{user?.email}</Text>
      </View>

      <Text style={s.sectionLabel}>Choose a language</Text>

      {loading ? (
        <ActivityIndicator color="#818cf8" style={{ marginTop: 40 }} />
      ) : (
        SUPPORTED_LANGS.map((lang) => {
          const st = stats[lang];
          return (
            <TouchableOpacity key={lang} style={[s.card, { borderTopColor: ACCENT[lang], borderTopWidth: 3 }]}
              onPress={() => router.push(`/(app)/${lang}` as never)}>
              <View style={s.cardHeader}>
                <Text style={s.flag}>{LANG_FLAGS[lang]}</Text>
                <Text style={s.langName}>{LANG_LABELS[lang]}</Text>
              </View>
              {st ? (
                <View style={s.cardStats}>
                  <StatChip label="🔥" value={`${st.lessonStreak}d streak`} />
                  <StatChip label="✅" value={`${st.unitsCompleted} units done`} />
                </View>
              ) : (
                <Text style={s.cardSub}>Tap to begin</Text>
              )}
            </TouchableOpacity>
          );
        })
      )}

      <TouchableOpacity style={s.logoutBtn} onPress={handleLogout}>
        <Text style={s.logoutText}>Sign out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function StatChip({ label, value }: { label: string; value: string }) {
  return (
    <View style={s.chip}>
      <Text style={s.chipText}>{label} {value}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f172a" },
  header: { paddingHorizontal: 20, paddingTop: 60, paddingBottom: 24 },
  greeting: { fontSize: 26, fontWeight: "700", color: "#f8fafc" },
  email: { fontSize: 14, color: "#94a3b8", marginTop: 4 },
  sectionLabel: { fontSize: 13, fontWeight: "600", color: "#64748b", paddingHorizontal: 20, marginBottom: 12, letterSpacing: 0.5, textTransform: "uppercase" },
  card: {
    backgroundColor: "#1e293b", marginHorizontal: 16, marginBottom: 12,
    borderRadius: 14, padding: 18, borderWidth: 1, borderColor: "#334155",
    overflow: "hidden",
  },
  cardHeader: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  flag: { fontSize: 28, marginRight: 12 },
  langName: { fontSize: 20, fontWeight: "700", color: "#f8fafc" },
  cardStats: { flexDirection: "row", gap: 8 },
  cardSub: { fontSize: 14, color: "#64748b" },
  chip: { backgroundColor: "#0f172a", borderRadius: 20, paddingHorizontal: 10, paddingVertical: 5 },
  chipText: { fontSize: 13, color: "#94a3b8" },
  logoutBtn: { margin: 20, marginTop: 8, padding: 16, alignItems: "center" },
  logoutText: { color: "#ef4444", fontSize: 15 },
});
