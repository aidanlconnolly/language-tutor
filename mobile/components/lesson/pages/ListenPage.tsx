import { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import type { Listen } from "@/lib/content/types";
import type { Lang } from "@/lib/lang";
import { SpeakButton } from "@/components/shared/SpeakButton";
import { C } from "@/lib/theme";

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
                <Text style={[s.optionText, (isCorrect || isWrong) && { color: C.text }]}>{opt}</Text>
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
  heading: { fontSize: 20, fontWeight: "700", color: C.text, marginBottom: 8 },
  intro: { fontSize: 15, color: C.textMuted, marginBottom: 16 },
  question: { marginBottom: 20, backgroundColor: C.inset, borderRadius: 12, padding: 14 },
  listenRow: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 10 },
  l1: { fontSize: 16, fontWeight: "600", color: C.text, flex: 1 },
  en: { fontSize: 13, color: C.textMuted, fontStyle: "italic", marginBottom: 10 },
  option: { backgroundColor: C.card, borderRadius: 8, padding: 12, marginBottom: 6, borderWidth: 1, borderColor: C.border },
  optionSelected: { borderColor: C.selectedBorder, backgroundColor: C.selectedBg },
  optionCorrect: { backgroundColor: C.correctBg, borderColor: C.correctBorder },
  optionWrong: { backgroundColor: C.wrongBg, borderColor: C.wrongBorder },
  optionText: { fontSize: 14, color: C.text },
  score: { fontSize: 18, fontWeight: "700", color: C.text, textAlign: "center", marginBottom: 12 },
  btn: { backgroundColor: C.primary, borderRadius: 12, paddingVertical: 15, alignItems: "center", marginTop: 8 },
  btnDisabled: { backgroundColor: C.border },
  btnText: { color: C.primaryText, fontSize: 16, fontWeight: "600" },
});
