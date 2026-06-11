import { useState, useCallback } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import type { OrderWords } from "@/lib/content/types";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function OrderWordsPage({ page, onNext }: { page: OrderWords; onNext: () => void }) {
  const [current, setCurrent] = useState(0);
  const item = page.items[current];
  const [pool, setPool] = useState<string[]>(() => shuffle(item.tokens));
  const [picked, setPicked] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = submitted && picked.join(" ") === item.tokens.join(" ");

  function reset() {
    const next = current + 1 < page.items.length ? current + 1 : current;
    setCurrent(next);
    setPool(shuffle(page.items[next].tokens));
    setPicked([]);
    setSubmitted(false);
  }

  function pickToken(i: number) {
    if (submitted) return;
    const token = pool[i];
    setPool((p) => p.filter((_, j) => j !== i));
    setPicked((p) => [...p, token]);
  }

  function unpick(i: number) {
    if (submitted) return;
    const token = picked[i];
    setPicked((p) => p.filter((_, j) => j !== i));
    setPool((p) => [...p, token]);
  }

  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.heading}>{page.heading}</Text>
      <Text style={s.counter}>{current + 1}/{page.items.length}</Text>
      <Text style={s.en}>{item.en}</Text>

      <View style={s.pickedBox}>
        {picked.length === 0 ? <Text style={s.placeholder}>Tap words to build the sentence</Text> : (
          <View style={s.tokenRow}>
            {picked.map((t, i) => (
              <TouchableOpacity key={i} style={s.pickedToken} onPress={() => unpick(i)}>
                <Text style={s.tokenText}>{t}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      <View style={s.poolRow}>
        {pool.map((t, i) => (
          <TouchableOpacity key={i} style={s.poolToken} onPress={() => pickToken(i)}>
            <Text style={s.tokenText}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {submitted && (
        <Text style={[s.feedback, isCorrect ? s.correct : s.wrong]}>
          {isCorrect ? "✓ Correct!" : `✗ Correct: ${item.tokens.join(" ")}`}
        </Text>
      )}

      {!submitted ? (
        <TouchableOpacity style={[s.btn, picked.length === 0 && s.btnDisabled]} onPress={() => setSubmitted(true)} disabled={picked.length === 0}>
          <Text style={s.btnText}>Check</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={s.btn} onPress={() => { if (current + 1 < page.items.length) reset(); else onNext(); }}>
          <Text style={s.btnText}>{current + 1 < page.items.length ? "Next sentence →" : "Next →"}</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20, paddingBottom: 40 },
  heading: { fontSize: 20, fontWeight: "700", color: "#f8fafc", marginBottom: 4 },
  counter: { fontSize: 13, color: "#64748b", marginBottom: 12 },
  en: { fontSize: 16, color: "#94a3b8", marginBottom: 20, fontStyle: "italic" },
  pickedBox: { backgroundColor: "#1e293b", borderRadius: 12, minHeight: 60, padding: 12, marginBottom: 16, justifyContent: "center" },
  placeholder: { color: "#475569", fontSize: 14, textAlign: "center" },
  tokenRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  poolRow: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 20 },
  pickedToken: { backgroundColor: "#4f46e5", borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8 },
  poolToken: { backgroundColor: "#334155", borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8 },
  tokenText: { color: "#f8fafc", fontSize: 16, fontWeight: "500" },
  feedback: { fontSize: 15, fontWeight: "600", textAlign: "center", marginBottom: 12 },
  correct: { color: "#22c55e" },
  wrong: { color: "#ef4444" },
  btn: { backgroundColor: "#818cf8", borderRadius: 12, paddingVertical: 15, alignItems: "center" },
  btnDisabled: { backgroundColor: "#334155" },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
