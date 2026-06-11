import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { isValidLang } from "@/lib/lang";
import { apiGetDeck, apiDeleteCard } from "@/lib/api";
import { SpeakButton } from "@/components/shared/SpeakButton";
import type { Lang } from "@/lib/lang";

type DeckEntry = { card: { id: string; sourceSentence: string; fsrsDue: number }; word: { lemma: string; translation: string; pos: string; gender: string | null } };

export default function DeckScreen() {
  const { lang: langParam } = useLocalSearchParams<{ lang: string }>();
  const lang = isValidLang(langParam) ? langParam : null;
  const [deck, setDeck] = useState<DeckEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!lang) return;
    apiGetDeck(lang).then(({ cards }) => { setDeck(cards as DeckEntry[]); setLoading(false); });
  }, [lang]);

  async function handleDelete(cardId: string, lemma: string) {
    Alert.alert("Remove card", `Remove "${lemma}" from your deck?`, [
      { text: "Cancel", style: "cancel" },
      {
        text: "Remove", style: "destructive",
        onPress: async () => {
          await apiDeleteCard(lang!, cardId).catch(() => {});
          setDeck((prev) => prev.filter((d) => d.card.id !== cardId));
        },
      },
    ]);
  }

  if (!lang) return <Text style={{ color: "#ef4444", padding: 20 }}>Invalid language</Text>;
  if (loading) return <ActivityIndicator color="#818cf8" style={{ marginTop: 80 }} />;

  const now = Date.now();

  return (
    <FlatList
      style={s.list}
      data={deck}
      keyExtractor={(d) => d.card.id}
      ListHeaderComponent={<Text style={s.count}>{deck.length} saved word{deck.length !== 1 ? "s" : ""}</Text>}
      ListEmptyComponent={<Text style={s.empty}>No cards saved yet. Tap words while reading to save them.</Text>}
      renderItem={({ item }) => {
        const isDue = item.card.fsrsDue <= now;
        return (
          <View style={s.card}>
            <View style={s.cardTop}>
              <View style={{ flex: 1 }}>
                <View style={s.lemmaRow}>
                  <Text style={s.lemma}>{item.word.lemma}</Text>
                  <SpeakButton text={item.word.lemma} lang={lang} size={18} />
                </View>
                <Text style={s.translation}>{item.word.translation}</Text>
                <Text style={s.pos}>{item.word.pos}{item.word.gender ? ` · ${item.word.gender}` : ""}</Text>
              </View>
              <View style={s.right}>
                {isDue && <View style={s.dueBadge}><Text style={s.dueBadgeText}>due</Text></View>}
                <TouchableOpacity onPress={() => handleDelete(item.card.id, item.word.lemma)} style={s.deleteBtn}>
                  <Text style={s.deleteBtnText}>✕</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={s.source} numberOfLines={2}>{item.card.sourceSentence}</Text>
          </View>
        );
      }}
    />
  );
}

const s = StyleSheet.create({
  list: { flex: 1, backgroundColor: "#0f172a" },
  count: { fontSize: 14, color: "#64748b", padding: 16, paddingBottom: 8 },
  empty: { color: "#64748b", textAlign: "center", padding: 40 },
  card: { backgroundColor: "#1e293b", marginHorizontal: 12, marginBottom: 8, borderRadius: 12, padding: 14, borderWidth: 1, borderColor: "#334155" },
  cardTop: { flexDirection: "row", marginBottom: 8 },
  lemmaRow: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 2 },
  lemma: { fontSize: 20, fontWeight: "700", color: "#f8fafc" },
  translation: { fontSize: 15, color: "#a5b4fc", fontWeight: "500" },
  pos: { fontSize: 12, color: "#64748b", marginTop: 2 },
  right: { alignItems: "flex-end", gap: 8 },
  dueBadge: { backgroundColor: "#1e1b4b", borderRadius: 6, paddingHorizontal: 8, paddingVertical: 3 },
  dueBadgeText: { fontSize: 11, color: "#818cf8", fontWeight: "700" },
  deleteBtn: { padding: 4 },
  deleteBtnText: { color: "#64748b", fontSize: 16 },
  source: { fontSize: 13, color: "#475569", fontStyle: "italic" },
});
