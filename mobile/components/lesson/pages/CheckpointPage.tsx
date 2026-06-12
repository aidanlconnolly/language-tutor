import { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import type { Checkpoint } from "@/lib/content/types";
import { C } from "@/lib/theme";

export function CheckpointPageComponent({ page, onNext }: { page: Checkpoint; onNext: () => void }) {
  const [answers, setAnswers] = useState<(number | null)[]>(page.questions.map(() => null));
  const [submitted, setSubmitted] = useState(false);
  const allAnswered = answers.every((a) => a !== null);
  const score = answers.filter((a, i) => a === page.questions[i].correct).length;

  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.chip}>Mini checkpoint</Text>
      <Text style={s.heading}>{page.heading}</Text>
      {page.intro && <Text style={s.intro}>{page.intro}</Text>}
      {page.questions.map((q, qi) => (
        <View key={qi} style={s.question}>
          <Text style={s.q}>{qi + 1}. {q.q}</Text>
          {q.qL1 && <Text style={s.qL1}>{q.qL1}</Text>}
          {q.options.map((opt, oi) => {
            const isSelected = answers[qi] === oi;
            const isCorrect = submitted && oi === q.correct;
            const isWrong = submitted && isSelected && oi !== q.correct;
            return (
              <TouchableOpacity key={oi}
                style={[s.option, isSelected && s.optionSelected, isCorrect && s.optionCorrect, isWrong && s.optionWrong]}
                onPress={() => { if (!submitted) setAnswers((prev) => prev.map((a, i) => i === qi ? oi : a)); }}>
                <Text style={[s.optionText, (isCorrect || isWrong) && { color: C.text }]}>{opt}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
      {!submitted ? (
        <TouchableOpacity style={[s.btn, !allAnswered && s.btnDisabled]} onPress={() => setSubmitted(true)} disabled={!allAnswered}>
          <Text style={s.btnText}>Submit</Text>
        </TouchableOpacity>
      ) : (
        <View>
          <Text style={s.score}>{score}/{page.questions.length} — {Math.round((score / page.questions.length) * 100)}%</Text>
          <TouchableOpacity style={s.btn} onPress={onNext}><Text style={s.btnText}>Continue →</Text></TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20, paddingBottom: 40 },
  chip: { fontSize: 12, fontWeight: "700", color: C.accent, marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5 },
  heading: { fontSize: 20, fontWeight: "700", color: C.text, marginBottom: 8 },
  intro: { fontSize: 15, color: C.textMuted, marginBottom: 16 },
  question: { marginBottom: 20 },
  q: { fontSize: 16, fontWeight: "600", color: C.text, marginBottom: 4 },
  qL1: { fontSize: 14, color: C.textMuted, marginBottom: 8, fontStyle: "italic" },
  option: { backgroundColor: C.card, borderRadius: 10, padding: 14, marginBottom: 8, borderWidth: 1, borderColor: C.border },
  optionSelected: { borderColor: C.selectedBorder, backgroundColor: C.selectedBg },
  optionCorrect: { backgroundColor: C.correctBg, borderColor: C.correctBorder },
  optionWrong: { backgroundColor: C.wrongBg, borderColor: C.wrongBorder },
  optionText: { fontSize: 15, color: C.text },
  score: { fontSize: 20, fontWeight: "700", color: C.text, textAlign: "center", marginBottom: 12 },
  btn: { backgroundColor: C.primary, borderRadius: 12, paddingVertical: 15, alignItems: "center" },
  btnDisabled: { backgroundColor: C.border },
  btnText: { color: C.primaryText, fontSize: 16, fontWeight: "600" },
});
