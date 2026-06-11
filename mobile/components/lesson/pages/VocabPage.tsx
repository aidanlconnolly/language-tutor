import { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import type { Vocab } from "@/lib/content/types";
import type { Lang } from "@/lib/lang";
import { SpeakButton } from "@/components/shared/SpeakButton";

export function VocabPage({ page, lang, onNext }: { page: Vocab; lang: Lang; onNext: () => void }) {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());
  const allFlipped = flipped.size === page.items.length;

  function toggle(i: number) {
    setFlipped((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.heading}>{page.heading}</Text>
      {page.intro && <Text style={s.intro}>{page.intro}</Text>}
      {page.items.map((item, i) => {
        const isFlipped = flipped.has(i);
        return (
          <TouchableOpacity key={i} style={[s.card, isFlipped && s.cardFlipped]} onPress={() => toggle(i)}>
            {isFlipped ? (
              <View>
                <Text style={s.cardFront}>{item.en}</Text>
                {item.note && <Text style={s.note}>{item.note}</Text>}
              </View>
            ) : (
              <View style={s.cardFrontRow}>
                <Text style={s.cardL1}>{item.l1}</Text>
                <SpeakButton text={item.l1} lang={lang} size={20} />
              </View>
            )}
            <Text style={s.cardHint}>{isFlipped ? "← tap to flip back" : "tap to reveal →"}</Text>
          </TouchableOpacity>
        );
      })}
      <TouchableOpacity
        style={[s.btn, !allFlipped && s.btnDisabled]}
        onPress={onNext}
        disabled={!allFlipped}
      >
        <Text style={s.btnText}>{allFlipped ? "Next →" : `Flip all cards (${flipped.size}/${page.items.length})`}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20, paddingBottom: 40 },
  heading: { fontSize: 20, fontWeight: "700", color: "#f8fafc", marginBottom: 8 },
  intro: { fontSize: 15, color: "#94a3b8", marginBottom: 16 },
  card: { backgroundColor: "#1e293b", borderRadius: 12, padding: 20, marginBottom: 10, borderWidth: 1, borderColor: "#334155" },
  cardFlipped: { borderColor: "#818cf8" },
  cardFrontRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  cardL1: { fontSize: 22, fontWeight: "700", color: "#f8fafc", flex: 1 },
  cardFront: { fontSize: 18, color: "#a5b4fc", fontWeight: "600" },
  note: { fontSize: 13, color: "#64748b", marginTop: 4, fontStyle: "italic" },
  cardHint: { fontSize: 11, color: "#475569", marginTop: 8 },
  btn: { backgroundColor: "#818cf8", borderRadius: 12, paddingVertical: 15, alignItems: "center", marginTop: 16 },
  btnDisabled: { backgroundColor: "#334155" },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
