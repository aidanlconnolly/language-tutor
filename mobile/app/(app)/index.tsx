import { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, RefreshControl } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../_layout";
import { apiGetProgress } from "@/lib/api";
import { getUnits } from "@/lib/content";
import { SUPPORTED_LANGS, LANG_LABELS, LANG_FLAGS } from "@/lib/lang";
import { SUN, LANG_TINT } from "@/lib/theme";
import type { Lang } from "@/lib/lang";

type LangStats = { lessonStreak: number; readStreak: number; unitsCompleted: number };

export default function HomeScreen() {
  const { user } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState<Record<Lang, LangStats | null>>({
    italian: null, french: null, spanish: null, portuguese: null, english: null, german: null,
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
    const s: typeof stats = { italian: null, french: null, spanish: null, portuguese: null, english: null, german: null };
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

  return (
    <ScrollView style={s.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={SUN.sub} />}>
      <View style={s.header}>
        <View style={s.headerText}>
          <Text style={s.greeting}>Welcome back</Text>
          <Text style={s.email}>{user?.email}</Text>
        </View>
        <TouchableOpacity
          style={s.accountBtn}
          onPress={() => router.push("/(app)/account" as never)}
          accessibilityLabel="Account and settings"
        >
          <Text style={s.accountIcon}>👤</Text>
        </TouchableOpacity>
      </View>

      <Text style={s.sectionLabel}>Choose a language</Text>

      {loading ? (
        <ActivityIndicator color={SUN.sub} style={{ marginTop: 40 }} />
      ) : (
        SUPPORTED_LANGS.map((lang) => {
          const st = stats[lang];
          const tint = LANG_TINT[lang];
          const totalUnits = getUnits(lang).length;
          const done = st?.unitsCompleted ?? 0;
          const pct = totalUnits > 0 ? Math.min(100, Math.round((done / totalUnits) * 100)) : 0;
          return (
            <TouchableOpacity
              key={lang}
              style={[s.card, { backgroundColor: tint.bg, borderColor: tint.border }]}
              onPress={() => router.push(`/(app)/${lang}` as never)}
            >
              <View style={s.cardHeader}>
                <View style={s.flagTile}>
                  <Text style={s.flag}>{LANG_FLAGS[lang]}</Text>
                </View>
                <Text style={[s.langName, { color: tint.text }]}>{LANG_LABELS[lang]}</Text>
                {st && st.lessonStreak > 0 && (
                  <View style={s.streakChip}>
                    <Text style={[s.streakText, { color: tint.sub }]}>🔥 {st.lessonStreak}d</Text>
                  </View>
                )}
              </View>
              <View style={s.track}>
                <View style={[s.fill, { width: `${pct}%`, backgroundColor: tint.bar }]} />
              </View>
              <Text style={[s.caption, { color: tint.sub }]}>
                {st ? `${done} of ${totalUnits} units` : "Tap to begin"}
              </Text>
            </TouchableOpacity>
          );
        })
      )}

      <Text style={s.footer}>A language a day…</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: SUN.bg },
  header: { flexDirection: "row", alignItems: "center", paddingHorizontal: 20, paddingTop: 60, paddingBottom: 24 },
  headerText: { flex: 1 },
  greeting: { fontSize: 26, fontWeight: "700", color: SUN.ink },
  email: { fontSize: 14, color: SUN.sub, marginTop: 4 },
  accountBtn: {
    width: 44, height: 44, borderRadius: 22, backgroundColor: SUN.card,
    borderWidth: 1, borderColor: SUN.cardBorder, alignItems: "center", justifyContent: "center",
  },
  accountIcon: { fontSize: 20 },
  sectionLabel: {
    fontSize: 13, fontWeight: "600", color: SUN.sub, paddingHorizontal: 20,
    marginBottom: 12, letterSpacing: 0.5, textTransform: "uppercase",
  },
  card: { marginHorizontal: 16, marginBottom: 12, borderRadius: 18, padding: 16, borderWidth: 1 },
  cardHeader: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  flagTile: {
    width: 38, height: 38, borderRadius: 19, backgroundColor: SUN.card,
    alignItems: "center", justifyContent: "center", marginRight: 12,
  },
  flag: { fontSize: 20 },
  langName: { fontSize: 20, fontWeight: "700", flex: 1 },
  streakChip: { backgroundColor: SUN.card, borderRadius: 14, paddingHorizontal: 10, paddingVertical: 5 },
  streakText: { fontSize: 13, fontWeight: "600" },
  track: { height: 6, borderRadius: 3, backgroundColor: SUN.card, marginBottom: 8 },
  fill: { height: 6, borderRadius: 3 },
  caption: { fontSize: 13 },
  footer: { textAlign: "center", color: SUN.sub, fontSize: 13, marginTop: 12, marginBottom: 32 },
});
