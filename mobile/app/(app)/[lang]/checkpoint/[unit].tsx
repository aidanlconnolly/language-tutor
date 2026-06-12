import { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, SafeAreaView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { findUnit } from "@/lib/content";
import { isValidLang } from "@/lib/lang";
import { apiRecordCheckpoint } from "@/lib/api";
import { C } from "@/lib/theme";

export default function CheckpointScreen() {
  const { lang: langParam, unit: unitSlug } = useLocalSearchParams<{ lang: string; unit: string }>();
  const router = useRouter();
  const lang = isValidLang(langParam) ? langParam : null;
  const unit = lang ? findUnit(lang, unitSlug) : null;

  const [answers, setAnswers] = useState<(number | null)[]>(unit?.checkpoint.questions.map(() => null) ?? []);
  const [submitted, setSubmitted] = useState(false);
  const [passed, setPassed] = useState<boolean | null>(null);
  const [saving, setSaving] = useState(false);

  if (!lang || !unit) return <Text style={{ color: C.dangerText, padding: 20 }}>Unit not found</Text>;

  const allAnswered = answers.every((a) => a !== null);
  const score = answers.filter((a, i) => a === unit.checkpoint.questions[i].correct).length;
  const pct = Math.round((score / unit.checkpoint.questions.length) * 100);

  async function handleSubmit() {
    setSaving(true);
    const result = await apiRecordCheckpoint(lang!, unitSlug, pct).catch(() => ({ passed: pct >= unit!.checkpoint.passingPct }));
    setPassed(result.passed);
    setSaving(false);
    setSubmitted(true);
  }

  if (submitted && passed !== null) {
    return (
      <SafeAreaView style={s.container}>
        <View style={s.result}>
          <Text style={s.resultEmoji}>{passed ? "🎉" : "📚"}</Text>
          <Text style={s.resultTitle}>{passed ? "Checkpoint passed!" : "Keep practising"}</Text>
          <Text style={s.resultScore}>{pct}% — {score}/{unit.checkpoint.questions.length}</Text>
          <Text style={s.resultSub}>Passing: {unit.checkpoint.passingPct}%</Text>
          <TouchableOpacity style={[s.btn, { marginTop: 24 }]} onPress={() => router.back()}>
            <Text style={s.btnText}>{passed ? "Continue →" : "Try again"}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.title}>{unit.icon} {unit.title}</Text>
      <Text style={s.subtitle}>Unit checkpoint — pass at {unit.checkpoint.passingPct}%</Text>

      {unit.checkpoint.questions.map((q, qi) => (
        <View key={qi} style={s.question}>
          <Text style={s.q}>{qi + 1}. {q.q}</Text>
          {q.qL1 && <Text style={s.qL1}>{q.qL1}</Text>}
          {q.options.map((opt, oi) => (
            <TouchableOpacity key={oi}
              style={[s.option, answers[qi] === oi && s.optionSelected]}
              onPress={() => setAnswers((prev) => prev.map((a, i) => i === qi ? oi : a))}>
              <Text style={[s.optionText, answers[qi] === oi && s.optionTextSelected]}>{opt}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}

      <TouchableOpacity style={[s.btn, (!allAnswered || saving) && s.btnDisabled]} onPress={handleSubmit} disabled={!allAnswered || saving}>
        {saving ? <ActivityIndicator color={C.primaryText} /> : <Text style={s.btnText}>Submit checkpoint</Text>}
      </TouchableOpacity>
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: C.bg },
  content: { padding: 20 },
  title: { fontSize: 22, fontWeight: "700", color: C.text, marginBottom: 4 },
  subtitle: { fontSize: 14, color: C.textMuted, marginBottom: 24 },
  question: { marginBottom: 20 },
  q: { fontSize: 16, fontWeight: "600", color: C.text, marginBottom: 4 },
  qL1: { fontSize: 14, color: C.textMuted, marginBottom: 8, fontStyle: "italic" },
  option: { backgroundColor: C.inset, borderRadius: 10, padding: 14, marginBottom: 8, borderWidth: 1, borderColor: C.border },
  optionSelected: { borderColor: C.selectedBorder, backgroundColor: C.selectedBg },
  optionText: { fontSize: 15, color: C.text },
  optionTextSelected: { color: C.accentText, fontWeight: "600" },
  btn: { backgroundColor: C.primary, borderRadius: 12, paddingVertical: 15, alignItems: "center", marginTop: 8 },
  btnDisabled: { backgroundColor: C.borderStrong },
  btnText: { color: C.primaryText, fontSize: 16, fontWeight: "600" },
  result: { flex: 1, alignItems: "center", justifyContent: "center", padding: 32 },
  resultEmoji: { fontSize: 56, marginBottom: 16 },
  resultTitle: { fontSize: 26, fontWeight: "700", color: C.text, marginBottom: 12 },
  resultScore: { fontSize: 36, fontWeight: "700", color: C.primary },
  resultSub: { fontSize: 14, color: C.textMuted, marginTop: 4 },
});
