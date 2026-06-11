import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, ActivityIndicator } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { isValidLang } from "@/lib/lang";
import { apiGetReview, apiRateCard } from "@/lib/api";
import type { ReviewCard, ReviewStats } from "@/lib/api";
import { SpeakButton } from "@/components/shared/SpeakButton";
import type { Lang } from "@/lib/lang";

export default function ReviewScreen() {
  const { lang: langParam } = useLocalSearchParams<{ lang: string }>();
  const router = useRouter();
  const lang = isValidLang(langParam) ? langParam : null;

  const [cards, setCards] = useState<ReviewCard[]>([]);
  const [stats, setStats] = useState<ReviewStats | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(false);

  useEffect(() => {
    if (!lang) return;
    apiGetReview(lang).then(({ cards, stats }) => {
      setCards(cards);
      setStats(stats);
      setLoading(false);
    });
  }, [lang]);

  if (!lang) return <Text style={{ color: "#ef4444", padding: 20 }}>Invalid language</Text>;
  if (loading) return <ActivityIndicator color="#818cf8" style={{ marginTop: 80 }} />;

  if (cards.length === 0 || currentIndex >= cards.length) {
    return (
      <SafeAreaView style={s.container}>
        <View style={s.empty}>
          <Text style={s.emptyEmoji}>🎉</Text>
          <Text style={s.emptyTitle}>All caught up!</Text>
          {stats && (
            <View style={s.statsBox}>
              <StatRow label="Cards reviewed today" value={String(stats.reviewedToday)} />
              <StatRow label="Deck size" value={String(stats.deckSize)} />
              {stats.retention7d !== null && (
                <StatRow label="7-day retention" value={`${Math.round(stats.retention7d * 100)}%`} />
              )}
            </View>
          )}
          <TouchableOpacity style={s.btn} onPress={() => router.back()}>
            <Text style={s.btnText}>Done</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const current = cards[currentIndex];
  const { word } = current;

  async function rate(r: number) {
    setRating(true);
    await apiRateCard(lang!, current.card.id, r).catch(() => {});
    setCurrentIndex((i) => i + 1);
    setRevealed(false);
    setRating(false);
  }

  return (
    <SafeAreaView style={s.container}>
      <View style={s.header}>
        <Text style={s.counter}>{currentIndex + 1} / {cards.length}</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={s.closeBtn}>✕</Text>
        </TouchableOpacity>
      </View>

      <View style={s.progressBar}>
        <View style={[s.progressFill, { width: `${(currentIndex / cards.length) * 100}%` }]} />
      </View>

      <ScrollView style={s.cardScroll} contentContainerStyle={s.cardContent}>
        <View style={s.card}>
          <Text style={s.source}>{current.card.sourceSentence}</Text>
          <View style={s.wordRow}>
            <Text style={s.surface}>{current.card.sourceSurface}</Text>
            <SpeakButton text={current.card.sourceSurface} lang={lang} size={22} />
          </View>

          {!revealed ? (
            <TouchableOpacity style={s.revealBtn} onPress={() => setRevealed(true)}>
              <Text style={s.revealText}>Tap to reveal</Text>
            </TouchableOpacity>
          ) : (
            <View style={s.revealed}>
              <Text style={s.translation}>{word.translation}</Text>
              <Text style={s.pos}>{word.pos}{word.gender ? ` · ${word.gender}` : ""}</Text>
              <Text style={s.definition}>{word.definition}</Text>
              {word.examples?.[0] && (
                <View style={s.example}>
                  <Text style={s.exL1}>{word.examples[0].l1}</Text>
                  <Text style={s.exEn}>{word.examples[0].en}</Text>
                </View>
              )}
            </View>
          )}
        </View>
      </ScrollView>

      {revealed && (
        <View style={s.ratingBar}>
          {([1, 2, 3, 4] as const).map((r) => (
            <TouchableOpacity key={r} style={[s.rateBtn, ratingColor(r)]} onPress={() => rate(r)} disabled={rating}>
              <Text style={s.rateBtnLabel}>{ratingLabel(r)}</Text>
              <Text style={s.rateInterval}>{current.intervals[r]}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </SafeAreaView>
  );
}

function ratingLabel(r: number): string {
  return ["Again", "Hard", "Good", "Easy"][r - 1];
}

function ratingColor(r: number): object {
  const colors = ["#7f1d1d", "#78350f", "#14532d", "#1e3a5f"];
  return { backgroundColor: colors[r - 1] };
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={s.statRow}>
      <Text style={s.statLabel}>{label}</Text>
      <Text style={s.statValue}>{value}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f172a" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 16 },
  counter: { fontSize: 15, color: "#64748b", fontWeight: "600" },
  closeBtn: { color: "#94a3b8", fontSize: 20 },
  progressBar: { height: 3, backgroundColor: "#1e293b", marginHorizontal: 16, borderRadius: 2 },
  progressFill: { height: 3, backgroundColor: "#818cf8", borderRadius: 2 },
  cardScroll: { flex: 1 },
  cardContent: { padding: 16 },
  card: { backgroundColor: "#1e293b", borderRadius: 16, padding: 20, minHeight: 200 },
  source: { fontSize: 13, color: "#64748b", fontStyle: "italic", marginBottom: 12 },
  wordRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20 },
  surface: { fontSize: 28, fontWeight: "700", color: "#f8fafc", flex: 1 },
  revealBtn: { backgroundColor: "#0f172a", borderRadius: 10, paddingVertical: 16, alignItems: "center", borderWidth: 1, borderColor: "#334155" },
  revealText: { color: "#94a3b8", fontSize: 16 },
  revealed: { borderTopWidth: 1, borderTopColor: "#334155", paddingTop: 16 },
  translation: { fontSize: 24, fontWeight: "700", color: "#a5b4fc", marginBottom: 6 },
  pos: { fontSize: 13, color: "#64748b", marginBottom: 12 },
  definition: { fontSize: 15, color: "#cbd5e1", lineHeight: 22, marginBottom: 12 },
  example: { backgroundColor: "#0f172a", borderRadius: 8, padding: 12 },
  exL1: { fontSize: 14, fontWeight: "600", color: "#e2e8f0", marginBottom: 4 },
  exEn: { fontSize: 13, color: "#64748b", fontStyle: "italic" },
  ratingBar: { flexDirection: "row", padding: 12, gap: 8, backgroundColor: "#0f172a" },
  rateBtn: { flex: 1, borderRadius: 10, paddingVertical: 12, alignItems: "center" },
  rateBtnLabel: { color: "#fff", fontSize: 13, fontWeight: "700" },
  rateInterval: { color: "rgba(255,255,255,0.7)", fontSize: 11, marginTop: 2 },
  empty: { flex: 1, alignItems: "center", justifyContent: "center", padding: 32 },
  emptyEmoji: { fontSize: 56, marginBottom: 16 },
  emptyTitle: { fontSize: 26, fontWeight: "700", color: "#f8fafc", marginBottom: 24 },
  statsBox: { backgroundColor: "#1e293b", borderRadius: 12, padding: 16, width: "100%", marginBottom: 24 },
  statRow: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: "#334155" },
  statLabel: { fontSize: 14, color: "#94a3b8" },
  statValue: { fontSize: 14, fontWeight: "700", color: "#f8fafc" },
  btn: { backgroundColor: "#818cf8", borderRadius: 12, paddingHorizontal: 40, paddingVertical: 15, alignItems: "center" },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
