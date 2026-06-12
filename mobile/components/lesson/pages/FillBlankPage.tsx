import { useState } from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import type { FillBlank } from "@/lib/content/types";
import { C } from "@/lib/theme";

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
                  placeholderTextColor={C.textFaint}
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
  heading: { fontSize: 20, fontWeight: "700", color: C.text, marginBottom: 8 },
  intro: { fontSize: 15, color: C.textMuted, marginBottom: 16 },
  item: { backgroundColor: C.card, borderRadius: 12, padding: 14, marginBottom: 12 },
  en: { fontSize: 14, color: C.textMuted, marginBottom: 8, fontStyle: "italic" },
  fillRow: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 4 },
  sentence: { fontSize: 16, color: C.text },
  input: { borderBottomWidth: 2, borderBottomColor: C.primary, paddingHorizontal: 8, paddingVertical: 4, color: C.text, fontSize: 16, minWidth: 80 },
  inputCorrect: { borderBottomColor: C.correctBorder },
  inputWrong: { borderBottomColor: C.wrongBorder },
  options: { flexDirection: "row", flexWrap: "wrap", gap: 6, marginTop: 6, width: "100%" },
  option: { backgroundColor: C.inset, borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8, borderWidth: 1, borderColor: C.border },
  optionSelected: { borderColor: C.selectedBorder, backgroundColor: C.selectedBg },
  optionCorrect: { backgroundColor: C.correctBg, borderColor: C.correctBorder },
  optionWrong: { backgroundColor: C.wrongBg, borderColor: C.wrongBorder },
  optionText: { color: C.text, fontSize: 14 },
  reveal: { fontSize: 13, fontWeight: "600", marginTop: 8 },
  correctText: { color: C.correctText },
  wrongText: { color: C.wrongText },
  score: { fontSize: 18, fontWeight: "700", color: C.text, textAlign: "center", marginBottom: 12 },
  btn: { backgroundColor: C.primary, borderRadius: 12, paddingVertical: 15, alignItems: "center", marginTop: 8 },
  btnDisabled: { backgroundColor: C.border },
  btnText: { color: C.primaryText, fontSize: 16, fontWeight: "600" },
});
