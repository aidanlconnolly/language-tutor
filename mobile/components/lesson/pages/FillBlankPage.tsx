import { useState } from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import type { FillBlank } from "@/lib/content/types";

export function FillBlankPage({ page, onNext }: { page: FillBlank; onNext: () => void }) {
  const [answers, setAnswers] = useState<string[]>(page.items.map(() => ""));
  const [submitted, setSubmitted] = useState(false);
  const allFilled = answers.every((a) => a.trim().length > 0);
  const score = answers.filter((a, i) => a.trim().toLowerCase() === page.items[i].answer.toLowerCase()).length;

  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.heading}>{page.heading}</Text>
      {page.intro && <Text style={s.intro}>{page.intro}</Text>}
      {page.items.map((item, i) => {
        const isCorrect = submitted && answers[i].trim().toLowerCase() === item.answer.toLowerCase();
        const isWrong = submitted && !isCorrect;
        const [before, after] = item.template.split("___");
        return (
          <View key={i} style={s.item}>
            <Text style={s.en}>{item.en}</Text>
            <View style={s.fillRow}>
              <Text style={s.sentence}>{before}</Text>
              {item.options ? (
                <View style={s.options}>
                  {item.options.map((opt, oi) => (
                    <TouchableOpacity
                      key={oi}
                      style={[s.option, answers[i] === opt && s.optionSelected, submitted && opt === item.answer && s.optionCorrect, submitted && answers[i] === opt && opt !== item.answer && s.optionWrong]}
                      onPress={() => { if (!submitted) setAnswers((prev) => prev.map((a, j) => j === i ? opt : a)); }}
                    >
                      <Text style={s.optionText}>{opt}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              ) : (
                <TextInput
                  style={[s.input, isCorrect && s.inputCorrect, isWrong && s.inputWrong]}
                  value={answers[i]}
                  onChangeText={(t) => setAnswers((prev) => prev.map((a, j) => j === i ? t : a))}
                  editable={!submitted}
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholderTextColor="#475569"
                  placeholder="..."
                />
              )}
              <Text style={s.sentence}>{after}</Text>
            </View>
            {submitted && <Text style={[s.reveal, isCorrect ? s.correctText : s.wrongText]}>{isCorrect ? "✓ Correct" : `✗ Answer: ${item.answer}`}</Text>}
          </View>
        );
      })}
      {!submitted ? (
        <TouchableOpacity style={[s.btn, !allFilled && s.btnDisabled]} onPress={() => setSubmitted(true)} disabled={!allFilled}>
          <Text style={s.btnText}>Check</Text>
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
  item: { backgroundColor: "#1e293b", borderRadius: 12, padding: 14, marginBottom: 12 },
  en: { fontSize: 14, color: "#94a3b8", marginBottom: 8, fontStyle: "italic" },
  fillRow: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 4 },
  sentence: { fontSize: 16, color: "#f8fafc" },
  input: { borderBottomWidth: 2, borderBottomColor: "#818cf8", paddingHorizontal: 8, paddingVertical: 4, color: "#f8fafc", fontSize: 16, minWidth: 80 },
  inputCorrect: { borderBottomColor: "#22c55e" },
  inputWrong: { borderBottomColor: "#ef4444" },
  options: { flexDirection: "row", flexWrap: "wrap", gap: 6, marginTop: 6, width: "100%" },
  option: { backgroundColor: "#0f172a", borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8, borderWidth: 1, borderColor: "#334155" },
  optionSelected: { borderColor: "#818cf8", backgroundColor: "#1e1b4b" },
  optionCorrect: { backgroundColor: "#166534", borderColor: "#22c55e" },
  optionWrong: { backgroundColor: "#7f1d1d", borderColor: "#ef4444" },
  optionText: { color: "#e2e8f0", fontSize: 14 },
  reveal: { fontSize: 13, fontWeight: "600", marginTop: 8 },
  correctText: { color: "#22c55e" },
  wrongText: { color: "#ef4444" },
  score: { fontSize: 18, fontWeight: "700", color: "#f8fafc", textAlign: "center", marginBottom: 12 },
  btn: { backgroundColor: "#818cf8", borderRadius: 12, paddingVertical: 15, alignItems: "center", marginTop: 8 },
  btnDisabled: { backgroundColor: "#334155" },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
