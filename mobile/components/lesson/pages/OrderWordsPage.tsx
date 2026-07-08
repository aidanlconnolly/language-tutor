import { useState, useCallback } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import type { OrderWords } from "@/lib/content/types";
import { C } from "@/lib/theme";

/** Retries allowed before we reveal the answer and let the learner move on. */
const MAX_ATTEMPTS = 5;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Join tokens into a display sentence, dropping the space before punctuation. */
function joinTokens(tokens: string[]): string {
  return tokens.join(" ").replace(/\s+([,.!?;:])/g, "$1");
}

export function OrderWordsPage({ page, onNext }: { page: OrderWords; onNext: () => void }) {
  const [current, setCurrent] = useState(0);
  const item = page.items[current];
  const [pool, setPool] = useState<string[]>(() => shuffle(item.tokens));
  const [picked, setPicked] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const answer = picked.join(" ");
  const accepted = [item.tokens, ...(item.alts ?? [])].map((seq) => seq.join(" "));
  const isCorrect = submitted && accepted.includes(answer);
  // Ran out of retries — reveal the answer and let them move on.
  const revealed = submitted && !isCorrect && attempts >= MAX_ATTEMPTS;
  // Wrong, but retries remain.
  const retryable = submitted && !isCorrect && !revealed;

  function reset() {
    const next = current + 1 < page.items.length ? current + 1 : current;
    setCurrent(next);
    setPool(shuffle(page.items[next].tokens));
    setPicked([]);
    setSubmitted(false);
    setAttempts(0);
  }

  function check() {
    const correct = accepted.includes(picked.join(" "));
    if (!correct) setAttempts((a) => a + 1);
    setSubmitted(true);
  }

  function tryAgain() {
    // Back to an empty slate for another attempt (attempt count preserved).
    setPool(shuffle(item.tokens));
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
          {isCorrect
            ? "✓ Correct!"
            : revealed
              ? `✗ Correct: ${joinTokens(item.tokens)}`
              : `Not quite — try again. (Attempt ${attempts} of ${MAX_ATTEMPTS})`}
        </Text>
      )}

      {!submitted ? (
        <TouchableOpacity style={[s.btn, picked.length === 0 && s.btnDisabled]} onPress={check} disabled={picked.length === 0}>
          <Text style={s.btnText}>Check</Text>
        </TouchableOpacity>
      ) : retryable ? (
        <TouchableOpacity style={s.btn} onPress={tryAgain}>
          <Text style={s.btnText}>Try again</Text>
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
  heading: { fontSize: 20, fontWeight: "700", color: C.text, marginBottom: 4 },
  counter: { fontSize: 13, color: C.textMuted, marginBottom: 12 },
  en: { fontSize: 16, color: C.textMuted, marginBottom: 20, fontStyle: "italic" },
  pickedBox: { backgroundColor: C.inset, borderRadius: 12, minHeight: 60, padding: 12, marginBottom: 16, justifyContent: "center" },
  placeholder: { color: C.textFaint, fontSize: 14, textAlign: "center" },
  tokenRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  poolRow: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 20 },
  pickedToken: { backgroundColor: C.selectedBg, borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8 },
  poolToken: { backgroundColor: C.inset, borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8 },
  tokenText: { color: C.text, fontSize: 16, fontWeight: "500" },
  feedback: { fontSize: 15, fontWeight: "600", textAlign: "center", marginBottom: 12 },
  correct: { color: C.correctText },
  wrong: { color: C.wrongText },
  btn: { backgroundColor: C.primary, borderRadius: 12, paddingVertical: 15, alignItems: "center" },
  btnDisabled: { backgroundColor: C.border },
  btnText: { color: C.primaryText, fontSize: 16, fontWeight: "600" },
});
