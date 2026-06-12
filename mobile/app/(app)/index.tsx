import { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, RefreshControl } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../_layout";
import { clearAuth } from "@/lib/auth";
import { apiGetProgress } from "@/lib/api";
import { SUPPORTED_LANGS, LANG_LABELS, LANG_FLAGS } from "@/lib/lang";
import { C } from "@/lib/theme";
import type { Lang } from "@/lib/lang";

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
    <ScrollView style={s.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={C.primary} />}>
      <View style={s.header}>
        <Text style={s.greeting}>Welcome back</Text>
        <Text style={s.email}>{user?.email}</Text>
      </View>

      <Text style={s.sectionLabel}>Choose a language</Text>

      {loading ? (
        <ActivityIndicator color={C.primary} style={{ marginTop: 40 }} />
      ) : (
        SUPPORTED_LANGS.map((lang) => {
          const st = stats[lang];
          return (
            <TouchableOpacity key={lang} style={[s.card, s.shadow]}
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
  container: { flex: 1, backgroundColor: C.bg },
  shadow: { shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 6, shadowOffset: { width: 0, height: 2 }, elevation: 2 },
  header: { paddingHorizontal: 20, paddingTop: 60, paddingBottom: 24 },
  greeting: { fontSize: 26, fontWeight: "700", color: C.text },
  email: { fontSize: 14, color: C.textMuted, marginTop: 4 },
  sectionLabel: { fontSize: 13, fontWeight: "600", color: C.textMuted, paddingHorizontal: 20, marginBottom: 12, letterSpacing: 0.5, textTransform: "uppercase" },
  card: {
    backgroundColor: C.card, marginHorizontal: 16, marginBottom: 12,
    borderRadius: 14, padding: 18, borderWidth: 1, borderColor: C.border,
    borderTopColor: C.accent, borderTopWidth: 3,
  },
  cardHeader: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  flag: { fontSize: 28, marginRight: 12 },
  langName: { fontSize: 20, fontWeight: "700", color: C.text },
  cardStats: { flexDirection: "row", gap: 8 },
  cardSub: { fontSize: 14, color: C.textMuted },
  chip: { backgroundColor: C.inset, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 5 },
  chipText: { fontSize: 13, color: C.textSecondary },
  logoutBtn: { margin: 20, marginTop: 8, padding: 16, alignItems: "center" },
  logoutText: { color: C.danger, fontSize: 15 },
});
