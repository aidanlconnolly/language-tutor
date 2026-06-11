import { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, RefreshControl } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { apiGetProgress } from "@/lib/api";
import { getUnits, getStages, getReads, pickTodaysRead } from "@/lib/content";
import { isValidLang, LANG_FLAGS } from "@/lib/lang";
import type { Lang } from "@/lib/lang";
import type { ProgressData } from "@/lib/api";

const ACCENT: Record<Lang, string> = { italian: "#f59e0b", french: "#3b82f6", spanish: "#ef4444" };

export default function LangHomeScreen() {
  const { lang: langParam } = useLocalSearchParams<{ lang: string }>();
  const router = useRouter();
  const lang = isValidLang(langParam) ? langParam : null;

  const [progress, setProgress] = useState<ProgressData | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    if (!lang) return;
    const data = await apiGetProgress(lang);
    setProgress(data);
  }, [lang]);

  useEffect(() => { load().finally(() => setLoading(false)); }, [load]);

  async function onRefresh() { setRefreshing(true); await load(); setRefreshing(false); }

  if (!lang) return <Text style={{ color: "#ef4444", padding: 20 }}>Invalid language</Text>;
  if (loading) return <ActivityIndicator color="#818cf8" style={{ marginTop: 80 }} />;

  const units = getUnits(lang);
  const stages = getStages(lang);
  const passedUnits = new Set(progress?.checkpoints.filter((c) => c.passed).map((c) => c.unitSlug) ?? []);
  const completedLessons = new Set(progress?.lessons.map((l) => l.lessonSlug) ?? []);
  const completedReads = new Set(progress?.reads.map((r) => r.readSlug) ?? []);
  const lessonStreak = progress?.streaks.find((s) => s.kind === "lesson")?.current ?? 0;
  const readStreak = progress?.streaks.find((s) => s.kind === "read")?.current ?? 0;
  const reads = getReads(lang);
  const todaysRead = pickTodaysRead(lang, completedReads.size);
  const accent = ACCENT[lang];

  return (
    <ScrollView style={s.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#818cf8" />}>
      {/* Streak bar */}
      <View style={s.streakBar}>
        <View style={s.streakItem}>
          <Text style={s.streakNum}>{lessonStreak}</Text>
          <Text style={s.streakLabel}>lesson streak</Text>
        </View>
        <View style={s.streakDivider} />
        <View style={s.streakItem}>
          <Text style={s.streakNum}>{readStreak}</Text>
          <Text style={s.streakLabel}>read streak</Text>
        </View>
        <View style={s.streakDivider} />
        <View style={s.streakItem}>
          <Text style={s.streakNum}>{passedUnits.size}</Text>
          <Text style={s.streakLabel}>units done</Text>
        </View>
      </View>

      {/* Daily read CTA */}
      <TouchableOpacity style={[s.readCta, { borderLeftColor: accent }]}
        onPress={() => router.push(`/(app)/${lang}/read/${todaysRead.slug}` as never)}>
        <Text style={s.readCtaLabel}>📖 Daily Read</Text>
        <Text style={s.readCtaTitle}>{todaysRead.titleEn}</Text>
        <Text style={s.readCtaL1}>{todaysRead.titleL1}</Text>
        {completedReads.has(todaysRead.slug) && <Text style={s.readCtaDone}>✓ Completed today</Text>}
      </TouchableOpacity>

      {/* Tools row */}
      <View style={s.tools}>
        <ToolBtn label="🃏 Review" onPress={() => router.push(`/(app)/${lang}/tools/review` as never)} />
        <ToolBtn label="📚 Deck" onPress={() => router.push(`/(app)/${lang}/tools/deck` as never)} />
      </View>

      {/* Roadmap by stage */}
      <Text style={s.sectionLabel}>Roadmap</Text>
      {stages.map((stage) => {
        const stageUnits = units.filter((u) => u.stage === stage.number);
        return (
          <View key={stage.number} style={s.stageSection}>
            <Text style={s.stageTitle}>Stage {stage.number} — {stage.title}</Text>
            {stageUnits.map((unit) => {
              const passed = passedUnits.has(unit.slug);
              const unitLessons = unit.lessons.map((l) => l.slug);
              const doneCount = unitLessons.filter((ls) => completedLessons.has(ls)).length;
              const pct = unitLessons.length ? Math.round((doneCount / unitLessons.length) * 100) : 0;
              return (
                <TouchableOpacity key={unit.slug} style={[s.unitCard, passed && s.unitCardDone]}
                  onPress={() => router.push(`/(app)/${lang}/lesson/${unit.slug}/${unit.lessons[0]?.slug}` as never)}>
                  <View style={s.unitRow}>
                    <Text style={s.unitIcon}>{unit.icon}</Text>
                    <View style={s.unitMeta}>
                      <Text style={s.unitTitle}>{unit.title}</Text>
                      <Text style={s.unitTagline}>{unit.tagline}</Text>
                    </View>
                    {passed ? <Text style={s.checkmark}>✓</Text> : <Text style={s.pct}>{pct}%</Text>}
                  </View>
                  {!passed && pct > 0 && (
                    <View style={s.progressBar}>
                      <View style={[s.progressFill, { width: `${pct}%`, backgroundColor: accent }]} />
                    </View>
                  )}
                  {!passed && doneCount === unit.lessons.length && (
                    <TouchableOpacity style={[s.checkpointBtn, { backgroundColor: accent }]}
                      onPress={(e) => { e.stopPropagation(); router.push(`/(app)/${lang}/checkpoint/${unit.slug}` as never); }}>
                      <Text style={s.checkpointBtnText}>Take checkpoint →</Text>
                    </TouchableOpacity>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        );
      })}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

function ToolBtn({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <TouchableOpacity style={s.toolBtn} onPress={onPress}>
      <Text style={s.toolBtnText}>{label}</Text>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f172a" },
  streakBar: { flexDirection: "row", backgroundColor: "#1e293b", margin: 16, borderRadius: 12, padding: 16, justifyContent: "space-around" },
  streakItem: { alignItems: "center" },
  streakNum: { fontSize: 22, fontWeight: "700", color: "#f8fafc" },
  streakLabel: { fontSize: 11, color: "#64748b", marginTop: 2 },
  streakDivider: { width: 1, backgroundColor: "#334155" },
  readCta: {
    marginHorizontal: 16, marginBottom: 12, backgroundColor: "#1e293b",
    borderRadius: 12, padding: 16, borderLeftWidth: 4,
  },
  readCtaLabel: { fontSize: 12, color: "#64748b", fontWeight: "600", letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 6 },
  readCtaTitle: { fontSize: 18, fontWeight: "700", color: "#f8fafc" },
  readCtaL1: { fontSize: 14, color: "#94a3b8", marginTop: 2, fontStyle: "italic" },
  readCtaDone: { fontSize: 12, color: "#22c55e", marginTop: 8, fontWeight: "600" },
  tools: { flexDirection: "row", paddingHorizontal: 16, gap: 10, marginBottom: 20 },
  toolBtn: { flex: 1, backgroundColor: "#1e293b", borderRadius: 10, padding: 14, alignItems: "center", borderWidth: 1, borderColor: "#334155" },
  toolBtnText: { color: "#e2e8f0", fontSize: 14, fontWeight: "600" },
  sectionLabel: { fontSize: 13, fontWeight: "600", color: "#64748b", paddingHorizontal: 20, marginBottom: 12, letterSpacing: 0.5, textTransform: "uppercase" },
  stageSection: { marginHorizontal: 16, marginBottom: 24 },
  stageTitle: { fontSize: 13, fontWeight: "700", color: "#64748b", marginBottom: 10, textTransform: "uppercase", letterSpacing: 0.5 },
  unitCard: { backgroundColor: "#1e293b", borderRadius: 12, padding: 14, marginBottom: 8, borderWidth: 1, borderColor: "#334155" },
  unitCardDone: { borderColor: "#22c55e", opacity: 0.8 },
  unitRow: { flexDirection: "row", alignItems: "center" },
  unitIcon: { fontSize: 22, marginRight: 12 },
  unitMeta: { flex: 1 },
  unitTitle: { fontSize: 15, fontWeight: "600", color: "#f8fafc" },
  unitTagline: { fontSize: 12, color: "#64748b", marginTop: 2 },
  checkmark: { fontSize: 18, color: "#22c55e", fontWeight: "700" },
  pct: { fontSize: 13, color: "#64748b", fontWeight: "600" },
  progressBar: { height: 3, backgroundColor: "#334155", borderRadius: 2, marginTop: 10 },
  progressFill: { height: 3, borderRadius: 2 },
  checkpointBtn: { marginTop: 10, borderRadius: 8, paddingVertical: 8, alignItems: "center" },
  checkpointBtnText: { color: "#fff", fontSize: 13, fontWeight: "600" },
});
