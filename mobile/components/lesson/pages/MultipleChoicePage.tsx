import { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import type { MultipleChoice } from "@/lib/content/types";

export function MultipleChoicePage({ page, onNext }: { page: MultipleChoice; onNext: () => void }) {
  const [answers, setAnswers] = useState<(number | null)[]>(page.questions.map(() => null));
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = answers.every((a) => a !== null);
  const score = answers.filter((a, i) => a === page.questions[i].correct).length;

  function pick(qi: number, opt: number) {
    if (submitted) return;
    setAnswers((prev) => prev.map((a, i) => (i === qi ? opt : a)));
  }

  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
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
              <TouchableOpacity
                key={oi}
                style={[s.option, isSelected && s.optionSelected, isCorrect && s.optionCorrect, isWrong && s.optionWrong]}
                onPress={() => pick(qi, oi)}
              >
                <Text style={[s.optionText, (isCorrect || isWrong) && { color: "#fff" }]}>{opt}</Text>
              </TouchableOpacity>
            );
          })}
          {submitted && q.fb && <Text style={s.fb}>{q.fb}</Text>}
        </View>
      ))}
      {!submitted ? (
        <TouchableOpacity style={[s.btn, !allAnswered && s.btnDisabled]} onPress={() => setSubmitted(true)} disabled={!allAnswered}>
          <Text style={s.btnText}>Check answers</Text>
        </TouchableOpacity>
      ) : (
        <View>
          <Text style={s.score}>{score}/{page.questions.length} correct</Text>
          <TouchableOpacity style={s.btn} onPress={onNext}>
            <Text style={s.btnText}>Next →</Text>
          </TouchableOpacity>
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
  question: { marginBottom: 20 },
  q: { fontSize: 16, fontWeight: "600", color: "#f8fafc", marginBottom: 4 },
  qL1: { fontSize: 14, color: "#94a3b8", marginBottom: 8, fontStyle: "italic" },
  option: { backgroundColor: "#1e293b", borderRadius: 10, padding: 14, marginBottom: 8, borderWidth: 1, borderColor: "#334155" },
  optionSelected: { borderColor: "#818cf8", backgroundColor: "#1e1b4b" },
  optionCorrect: { backgroundColor: "#166534", borderColor: "#22c55e" },
  optionWrong: { backgroundColor: "#7f1d1d", borderColor: "#ef4444" },
  optionText: { fontSize: 15, color: "#e2e8f0" },
  fb: { fontSize: 13, color: "#94a3b8", fontStyle: "italic", marginTop: 4, paddingLeft: 4 },
  score: { fontSize: 18, fontWeight: "700", color: "#f8fafc", textAlign: "center", marginBottom: 12 },
  btn: { backgroundColor: "#818cf8", borderRadius: 12, paddingVertical: 15, alignItems: "center", marginTop: 8 },
  btnDisabled: { backgroundColor: "#334155" },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
