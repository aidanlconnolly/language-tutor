import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { isValidLang } from "@/lib/lang";
import { apiGetDeck, apiDeleteCard } from "@/lib/api";
import { SpeakButton } from "@/components/shared/SpeakButton";
import type { Lang } from "@/lib/lang";
import { C } from "@/lib/theme";

type DeckEntry = { card: { id: string; sourceSentence: string; fsrsDue: number }; word: { lemma: string; translation: string; pos: string; gender: string | null } };

export default function DeckScreen() {
  const { lang: langParam } = useLocalSearchParams<{ lang: string }>();
  const lang = isValidLang(langParam) ? langParam : null;
  const [deck, setDeck] = useState<DeckEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!lang) return;
    let active = true;
    apiGetDeck(lang)
      .then(({ cards }) => { if (active) setDeck(cards as DeckEntry[]); })
      .catch(() => { if (active) setError(true); })
      .finally(() => { if (active) setLoading(false); }); // always clear the spinner
    return () => { active = false; };
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

  if (!lang) return <Text style={{ color: C.danger, padding: 20 }}>Invalid language</Text>;
  if (loading) return <ActivityIndicator color={C.primary} style={{ marginTop: 80 }} />;
  if (error) return <Text style={{ color: C.danger, padding: 20 }}>Couldn't load your deck. Check your connection and try again.</Text>;

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
  list: { flex: 1, backgroundColor: C.bg },
  count: { fontSize: 14, color: C.textMuted, padding: 16, paddingBottom: 8 },
  empty: { color: C.textMuted, textAlign: "center", padding: 40 },
  card: { backgroundColor: C.card, marginHorizontal: 12, marginBottom: 8, borderRadius: 12, padding: 14, borderWidth: 1, borderColor: C.border },
  cardTop: { flexDirection: "row", marginBottom: 8 },
  lemmaRow: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 2 },
  lemma: { fontSize: 20, fontWeight: "700", color: C.text },
  translation: { fontSize: 15, color: C.primary, fontWeight: "500" },
  pos: { fontSize: 12, color: C.textMuted, marginTop: 2 },
  right: { alignItems: "flex-end", gap: 8 },
  dueBadge: { backgroundColor: C.inset, borderRadius: 6, paddingHorizontal: 8, paddingVertical: 3 },
  dueBadgeText: { fontSize: 11, color: C.primary, fontWeight: "700" },
  deleteBtn: { padding: 4 },
  deleteBtnText: { color: C.textMuted, fontSize: 16 },
  source: { fontSize: 13, color: C.textFaint, fontStyle: "italic" },
});
