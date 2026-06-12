import { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, RefreshControl } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { apiGetProgress } from "@/lib/api";
import { getUnits, getStages, getUnitOutline, pickTodaysRead } from "@/lib/content";
import { isValidLang, LANG_FLAGS, LANG_LABELS } from "@/lib/lang";
import type { Lang } from "@/lib/lang";
import type { ProgressData } from "@/lib/api";
import type { Unit, UnitPreview } from "@/lib/content/types";

type Router = ReturnType<typeof useRouter>;

const ACCENT: Record<Lang, string> = { italian: "#f59e0b", french: "#3b82f6", spanish: "#ef4444" };
const EMERALD = "#10b981";

// Time-of-day greeting in the target language — a small immersive touch.
const GREETINGS: Record<Lang, [string, string, string]> = {
  italian: ["Buongiorno", "Buon pomeriggio", "Buonasera"],
  french: ["Bonjour", "Bon après-midi", "Bonsoir"],
  spanish: ["Buenos días", "Buenas tardes", "Buenas noches"],
};

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

  const stages = getStages(lang);
  const outline = getUnitOutline(lang);
  const builtUnits = getUnits(lang);
  const builtSlugs = new Set(builtUnits.map((u) => u.slug));

  const passedUnits = new Set(progress?.checkpoints.filter((c) => c.passed).map((c) => c.unitSlug) ?? []);
  const completedLessons = new Set(progress?.lessons.map((l) => l.lessonSlug) ?? []);
  const completedReads = new Set(progress?.reads.map((r) => r.readSlug) ?? []);
  const lessonStreak = progress?.streaks.find((s) => s.kind === "lesson")?.current ?? 0;
  const readStreak = progress?.streaks.find((s) => s.kind === "read")?.current ?? 0;
  const todaysRead = pickTodaysRead(lang, completedReads.size);
  const readDoneToday = completedReads.has(todaysRead.slug);
  const accent = ACCENT[lang];
  const flag = LANG_FLAGS[lang];
  const label = LANG_LABELS[lang];

  const hour = new Date().getHours();
  const greeting = GREETINGS[lang][hour < 12 ? 0 : hour < 18 ? 1 : 2];
  const subline = lessonStreak > 0
    ? `You're on a ${lessonStreak}-day streak. Keep it going.`
    : `Ten minutes of ${label} today is all it takes.`;

  // Stage N unlocks once every unit in stage N-1 is checkpoint-passed.
  const stageUnlocked: Record<number, boolean> = { 1: true };
  for (const stage of stages) {
    if (stage.number === 1) continue;
    const prevUnits = outline.filter((u) => u.stage === stage.number - 1);
    stageUnlocked[stage.number] = prevUnits.every((u) => passedUnits.has(u.slug));
  }

  return (
    <ScrollView style={s.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#818cf8" />}>
      {/* Hero — greeting in the target language */}
      <View style={s.hero}>
        <Text style={[s.heroEyebrow, { color: accent }]}>{flag}  A0–B1 · 10 minutes a day</Text>
        <Text style={s.heroTitle}>{greeting}</Text>
        <Text style={s.heroSub}>{subline}</Text>
      </View>

      {/* Metrics */}
      <View style={s.metrics}>
        <Metric value={`${lessonStreak}`} unit="🔥" label="lesson streak" color={accent} />
        <Metric value={`${passedUnits.size}`} unit="" label="units done" color={EMERALD} />
        <Metric value={`${readStreak}`} unit="📖" label="read streak" color="#f8fafc" />
      </View>

      {/* Today's read — the featured action */}
      <TouchableOpacity activeOpacity={0.85} style={[s.readCta, { borderColor: accent }]}
        onPress={() => router.push(`/(app)/${lang}/read/${todaysRead.slug}` as never)}>
        <View style={[s.readIcon, { backgroundColor: accent + "26" }]}>
          <Text style={{ fontSize: 22 }}>📖</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[s.readEyebrow, { color: accent }]}>
            Today's 10-min read{readDoneToday ? " · ✓ done" : ""}
          </Text>
          <Text style={s.readTitle} numberOfLines={1}>{todaysRead.titleEn}</Text>
          <Text style={s.readL1} numberOfLines={1}>{todaysRead.titleL1}</Text>
        </View>
        <View style={[s.readPill, { backgroundColor: accent }]}>
          <Text style={s.readPillText}>{readDoneToday ? "Re-read" : "Start"}</Text>
        </View>
      </TouchableOpacity>

      {/* Tools */}
      <View style={s.tools}>
        <ToolCard emoji="🃏" label="Review" sub="Cards due" onPress={() => router.push(`/(app)/${lang}/tools/review` as never)} />
        <ToolCard emoji="📚" label="Deck" sub="Saved words" onPress={() => router.push(`/(app)/${lang}/tools/deck` as never)} />
      </View>

      {/* Roadmap — zig-zag down a central spine, one section per stage */}
      <View style={s.roadmapHead}>
        <Text style={s.sectionLabel}>Roadmap</Text>
        <Text style={s.sectionSub}>{builtUnits.length} units · A0 → B1</Text>
      </View>
      {stages.map((stage) => {
        const stageUnits = outline.filter((u) => u.stage === stage.number);
        const unlocked = stageUnlocked[stage.number];
        return (
          <View key={stage.number} style={s.stageSection}>
            <View style={[s.stageHeader, { borderLeftColor: unlocked ? accent : "#475569" }, !unlocked && s.dim]}>
              <Text style={[s.stageKicker, { color: unlocked ? accent : "#64748b" }]}>Stage {stage.number}</Text>
              <Text style={s.stageTitle}>{stage.title}{!unlocked ? "  🔒" : ""}</Text>
              <Text style={s.stageBlurb}>{stage.blurb}</Text>
            </View>

            <View style={s.zig}>
              <View style={[s.spine, { backgroundColor: accent + "40" }]} />
              {stageUnits.map((unit, i) => (
                <UnitNode
                  key={unit.slug}
                  unit={unit}
                  side={i % 2 === 0 ? "left" : "right"}
                  isBuilt={builtSlugs.has(unit.slug)}
                  isCompleted={passedUnits.has(unit.slug)}
                  isUnlocked={unlocked && (i === 0 || passedUnits.has(stageUnits[i - 1].slug))}
                  completedLessons={completedLessons}
                  builtUnits={builtUnits}
                  accent={accent}
                  lang={lang}
                  router={router}
                />
              ))}
            </View>
          </View>
        );
      })}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

function Metric({ value, unit, label, color }: { value: string; unit: string; label: string; color: string }) {
  return (
    <View style={s.metric}>
      <Text style={[s.metricValue, { color }]}>{value}{unit ? <Text style={s.metricUnit}> {unit}</Text> : null}</Text>
      <Text style={s.metricLabel}>{label}</Text>
    </View>
  );
}

function ToolCard({ emoji, label, sub, onPress }: { emoji: string; label: string; sub: string; onPress: () => void }) {
  return (
    <TouchableOpacity activeOpacity={0.85} style={s.toolCard} onPress={onPress}>
      <View style={s.toolIcon}><Text style={{ fontSize: 18 }}>{emoji}</Text></View>
      <View style={{ flex: 1 }}>
        <Text style={s.toolLabel}>{label}</Text>
        <Text style={s.toolSub}>{sub}</Text>
      </View>
    </TouchableOpacity>
  );
}

function UnitNode({
  unit, side, isBuilt, isCompleted, isUnlocked, completedLessons, builtUnits, accent, lang, router,
}: {
  unit: UnitPreview;
  side: "left" | "right";
  isBuilt: boolean;
  isCompleted: boolean;
  isUnlocked: boolean;
  completedLessons: Set<string>;
  builtUnits: Unit[];
  accent: string;
  lang: Lang;
  router: Router;
}) {
  const built = isBuilt ? builtUnits.find((b) => b.slug === unit.slug) : undefined;
  const lessons = built?.lessons ?? [];
  const doneCount = lessons.filter((l) => completedLessons.has(l.slug)).length;
  const allDone = lessons.length > 0 && doneCount === lessons.length;

  const status: "complete" | "active" | "available" | "locked" | "preview" =
    isCompleted ? "complete"
      : !isBuilt ? "preview"
      : !isUnlocked ? "locked"
      : doneCount > 0 ? "active"
      : "available";

  let route: string | null = null;
  if (isBuilt && isUnlocked && built) {
    if (isCompleted) {
      route = `/(app)/${lang}/lesson/${unit.slug}/${lessons[0].slug}`;
    } else if (allDone) {
      route = `/(app)/${lang}/checkpoint/${unit.slug}`;
    } else {
      const next = lessons.find((l) => !completedLessons.has(l.slug)) ?? lessons[lessons.length - 1];
      route = `/(app)/${lang}/lesson/${unit.slug}/${next.slug}`;
    }
  }

  const border = status === "complete" ? EMERALD : status === "active" ? accent : "#334155";
  const iconBg = status === "complete" ? "rgba(16,185,129,0.16)" : status === "active" ? accent + "26" : "#0f172a";
  const nodeColor = status === "complete" ? EMERALD : status === "active" ? accent : "#475569";
  const dim = status === "locked" || status === "preview";

  const card = (
    <View style={[s.unitCard, { borderColor: border }, dim && s.dim]}>
      <View style={s.unitTop}>
        <View style={[s.iconTile, { backgroundColor: iconBg }]}>
          <Text style={s.unitIcon}>{unit.icon}</Text>
        </View>
        {status === "complete" && <Text style={s.cmEmerald}>✓</Text>}
        {status === "locked" && <Text style={s.lockEmoji}>🔒</Text>}
        {status === "preview" && <Text style={s.soon}>soon</Text>}
      </View>
      <Text style={s.unitKicker}>Unit {unit.order}</Text>
      <Text style={s.unitTitle} numberOfLines={2}>{unit.title}</Text>
      <Text style={s.unitTagline} numberOfLines={2}>{unit.tagline}</Text>

      {lessons.length > 0 && (
        <View style={s.dotsRow}>
          {lessons.map((l) => (
            <View key={l.slug} style={[s.dot, { backgroundColor: completedLessons.has(l.slug) ? EMERALD : "#334155" }]} />
          ))}
          <Text style={s.dotsCount}>{doneCount > 0 ? `${doneCount}/${lessons.length}` : `${lessons.length}`}</Text>
        </View>
      )}

      {status === "complete" && <Text style={[s.footer, { color: EMERALD }]}>✓ Complete</Text>}
      {status === "active" && <Text style={[s.footer, { color: accent }]}>{allDone ? "Take checkpoint →" : "Continue →"}</Text>}
      {status === "available" && <Text style={[s.footer, { color: "#cbd5e1" }]}>Start →</Text>}
    </View>
  );

  return (
    <View style={s.zigRow}>
      <View style={[s.node, { backgroundColor: nodeColor }]} />
      <View style={[s.cardWrap, side === "left" ? s.cardLeft : s.cardRight]}>
        {route ? (
          <TouchableOpacity activeOpacity={0.85} onPress={() => router.push(route as never)}>
            {card}
          </TouchableOpacity>
        ) : (
          card
        )}
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f172a" },

  hero: { paddingHorizontal: 20, paddingTop: 18, paddingBottom: 6 },
  heroEyebrow: { fontSize: 11, fontWeight: "700", textTransform: "uppercase", letterSpacing: 1.2 },
  heroTitle: { fontSize: 32, fontWeight: "800", color: "#f8fafc", letterSpacing: -0.5, marginTop: 6 },
  heroSub: { fontSize: 15, color: "#94a3b8", marginTop: 6, lineHeight: 21, maxWidth: 320 },

  metrics: { flexDirection: "row", gap: 10, paddingHorizontal: 16, marginTop: 16 },
  metric: { flex: 1, backgroundColor: "#1e293b", borderRadius: 14, paddingVertical: 14, paddingHorizontal: 12, borderWidth: 1, borderColor: "#334155", alignItems: "center" },
  metricValue: { fontSize: 24, fontWeight: "800" },
  metricUnit: { fontSize: 14 },
  metricLabel: { fontSize: 10, color: "#64748b", marginTop: 3, textTransform: "uppercase", letterSpacing: 0.6, textAlign: "center" },

  readCta: {
    flexDirection: "row", alignItems: "center", gap: 12,
    marginHorizontal: 16, marginTop: 14,
    backgroundColor: "#1e293b", borderRadius: 16, padding: 14, borderWidth: 1,
  },
  readIcon: { width: 46, height: 46, borderRadius: 12, alignItems: "center", justifyContent: "center" },
  readEyebrow: { fontSize: 11, fontWeight: "700", textTransform: "uppercase", letterSpacing: 0.8 },
  readTitle: { fontSize: 16, fontWeight: "700", color: "#f8fafc", marginTop: 3 },
  readL1: { fontSize: 13, color: "#94a3b8", marginTop: 1, fontStyle: "italic" },
  readPill: { borderRadius: 999, paddingHorizontal: 16, paddingVertical: 9 },
  readPillText: { color: "#fff", fontSize: 13, fontWeight: "700" },

  tools: { flexDirection: "row", paddingHorizontal: 16, gap: 10, marginTop: 12 },
  toolCard: { flex: 1, flexDirection: "row", alignItems: "center", gap: 10, backgroundColor: "#1e293b", borderRadius: 14, padding: 12, borderWidth: 1, borderColor: "#334155" },
  toolIcon: { width: 38, height: 38, borderRadius: 10, backgroundColor: "#0f172a", alignItems: "center", justifyContent: "center" },
  toolLabel: { color: "#f8fafc", fontSize: 15, fontWeight: "700" },
  toolSub: { color: "#64748b", fontSize: 11, marginTop: 1 },

  roadmapHead: { paddingHorizontal: 20, marginTop: 28, marginBottom: 14 },
  sectionLabel: { fontSize: 13, fontWeight: "700", color: "#cbd5e1", letterSpacing: 0.5, textTransform: "uppercase" },
  sectionSub: { fontSize: 12, color: "#64748b", marginTop: 2 },

  stageSection: { marginHorizontal: 16, marginBottom: 28 },
  stageHeader: { borderLeftWidth: 4, paddingLeft: 12, marginBottom: 16 },
  stageKicker: { fontSize: 10, fontWeight: "700", textTransform: "uppercase", letterSpacing: 1.5 },
  stageTitle: { fontSize: 18, fontWeight: "700", color: "#f8fafc", marginTop: 2 },
  stageBlurb: { fontSize: 12, color: "#64748b", marginTop: 3, lineHeight: 16 },

  zig: { position: "relative" },
  spine: { position: "absolute", left: "50%", marginLeft: -1, top: 14, bottom: 14, width: 2, borderRadius: 1 },
  zigRow: { position: "relative", marginBottom: 16 },
  node: { position: "absolute", left: "50%", marginLeft: -7, top: 16, width: 14, height: 14, borderRadius: 7, borderWidth: 3, borderColor: "#0f172a", zIndex: 2 },
  cardWrap: { width: "47%" },
  cardLeft: { alignSelf: "flex-start" },
  cardRight: { alignSelf: "flex-end" },

  unitCard: { backgroundColor: "#1e293b", borderRadius: 12, borderWidth: 2, padding: 11 },
  dim: { opacity: 0.55 },
  unitTop: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", minHeight: 38 },
  iconTile: { width: 38, height: 38, borderRadius: 9, alignItems: "center", justifyContent: "center" },
  unitIcon: { fontSize: 20 },
  cmEmerald: { color: EMERALD, fontSize: 16, fontWeight: "700" },
  lockEmoji: { fontSize: 13 },
  soon: { fontSize: 9, fontWeight: "700", color: "#64748b", textTransform: "uppercase", letterSpacing: 1 },
  unitKicker: { fontSize: 9, fontWeight: "700", color: "#64748b", textTransform: "uppercase", letterSpacing: 1, marginTop: 8 },
  unitTitle: { fontSize: 13, fontWeight: "700", color: "#f8fafc", marginTop: 2, lineHeight: 17 },
  unitTagline: { fontSize: 11, color: "#94a3b8", marginTop: 4, lineHeight: 15 },
  dotsRow: { flexDirection: "row", alignItems: "center", gap: 4, marginTop: 8, flexWrap: "wrap" },
  dot: { width: 7, height: 7, borderRadius: 4 },
  dotsCount: { fontSize: 9, color: "#64748b", marginLeft: 2, textTransform: "uppercase", letterSpacing: 0.5 },
  footer: { fontSize: 11, fontWeight: "700", marginTop: 8 },
});
