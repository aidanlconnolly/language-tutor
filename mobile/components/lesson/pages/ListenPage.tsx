import { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import type { Listen } from "@/lib/content/types";
import type { Lang } from "@/lib/lang";
import { SpeakButton } from "@/components/shared/SpeakButton";

export function ListenPage({ page, lang, onNext }: { page: Listen; lang: Lang; onNext: () => void }) {
  const [answers, setAnswers] = useState<(number | null)[]>(page.items.map(() => null));
  const [submitted, setSubmitted] = useState(false);
  const allAnswered = answers.every((a) => a !== null);
  const score = answers.filter((a, i) => a === page.items[i].correct).length;

  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.heading}>{page.heading}</Text>
      {page.intro && <Text style={s.intro}>{page.intro}</Text>}
      {page.items.map((item, qi) => (
        <View key={qi} style={s.question}>
          <View style={s.listenRow}>
            <SpeakButton text={item.l1} lang={lang} size={22} />
            <Text style={s.l1}>{item.l1}</Text>
          </View>
          {submitted && <Text style={s.en}>{item.en}</Text>}
          {item.options.map((opt, oi) => {
            const isSelected = answers[qi] === oi;
            const isCorrect = submitted && oi === item.correct;
            const isWrong = submitted && isSelected && oi !== item.correct;
            return (
              <TouchableOpacity
                key={oi}
                style={[s.option, isSelected && s.optionSelected, isCorrect && s.optionCorrect, isWrong && s.optionWrong]}
                onPress={() => { if (!submitted) setAnswers((prev) => prev.map((a, i) => i === qi ? oi : a)); }}
              >
                <Text style={[s.optionText, (isCorrect || isWrong) && { color: "#fff" }]}>{opt}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
      {!submitted ? (
        <TouchableOpacity style={[s.btn, !allAnswered && s.btnDisabled]} onPress={() => setSubmitted(true)} disabled={!allAnswered}>
          <Text style={s.btnText}>Check answers</Text>
        </TouchableOpacity>
      ) : (
        <View>
          <Text style={s.score}>{score}/{page.items.length} correct</Text>
          <TouchableOpacity style={s.btn} onPress={onNext}><Text style={s.btnText}>Next →</Text></TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20, paddingBottom: 40 },
  heading: { fontSize: 20, fontWeight: "700", color: "#f8fafc", marginBottom: 8 },
  intro: { fontSize: 15, color: "#94a3b8", marginBottom: 16 },
  question: { marginBottom: 20, backgroundColor: "#1e293b", borderRadius: 12, padding: 14 },
  listenRow: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 10 },
  l1: { fontSize: 16, fontWeight: "600", color: "#f8fafc", flex: 1 },
  en: { fontSize: 13, color: "#64748b", fontStyle: "italic", marginBottom: 10 },
  option: { backgroundColor: "#0f172a", borderRadius: 8, padding: 12, marginBottom: 6, borderWidth: 1, borderColor: "#334155" },
  optionSelected: { borderColor: "#818cf8", backgroundColor: "#1e1b4b" },
  optionCorrect: { backgroundColor: "#166534", borderColor: "#22c55e" },
  optionWrong: { backgroundColor: "#7f1d1d", borderColor: "#ef4444" },
  optionText: { fontSize: 14, color: "#e2e8f0" },
  score: { fontSize: 18, fontWeight: "700", color: "#f8fafc", textAlign: "center", marginBottom: 12 },
  btn: { backgroundColor: "#818cf8", borderRadius: 12, paddingVertical: 15, alignItems: "center", marginTop: 8 },
  btnDisabled: { backgroundColor: "#334155" },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
