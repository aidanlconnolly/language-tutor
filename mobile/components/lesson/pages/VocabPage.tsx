import { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import type { Vocab } from "@/lib/content/types";
import type { Lang } from "@/lib/lang";
import { SpeakButton } from "@/components/shared/SpeakButton";
import { C } from "@/lib/theme";

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
  heading: { fontSize: 20, fontWeight: "700", color: C.text, marginBottom: 8 },
  intro: { fontSize: 15, color: C.textMuted, marginBottom: 16 },
  card: { backgroundColor: C.card, borderRadius: 12, padding: 20, marginBottom: 10, borderWidth: 1, borderColor: C.border },
  cardFlipped: { borderColor: C.primary },
  cardFrontRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  cardL1: { fontSize: 22, fontWeight: "700", color: C.text, flex: 1 },
  cardFront: { fontSize: 18, color: C.primary, fontWeight: "600" },
  note: { fontSize: 13, color: C.textMuted, marginTop: 4, fontStyle: "italic" },
  cardHint: { fontSize: 11, color: C.textFaint, marginTop: 8 },
  btn: { backgroundColor: C.primary, borderRadius: 12, paddingVertical: 15, alignItems: "center", marginTop: 16 },
  btnDisabled: { backgroundColor: C.border },
  btnText: { color: C.primaryText, fontSize: 16, fontWeight: "600" },
});
