import { useState } from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import type { Translate } from "@/lib/content/types";
import type { Lang } from "@/lib/lang";
import { apiGrade } from "@/lib/api";
import { SpeakButton } from "@/components/shared/SpeakButton";

export function TranslatePage({ page, lang, onNext }: { page: Translate; lang: Lang; onNext: () => void }) {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState<{ score: number; feedback: string; corrected?: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const showL1 = page.direction === "en-to-l1";
  const promptLang = showL1 ? "en" : lang;

  async function handleGrade() {
    if (!answer.trim()) return;
    setLoading(true);
    try {
      const { grade } = await apiGrade(lang, page.direction, page.prompt, page.reference, answer);
      setResult(grade);
    } catch {
      setResult({ score: 0, feedback: "Could not grade — check your connection." });
    } finally {
      setLoading(false);
    }
  }

  const scoreColor = result?.score === 2 ? "#22c55e" : result?.score === 1 ? "#f59e0b" : "#ef4444";

  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.heading}>{page.heading}</Text>
      <Text style={s.dirLabel}>{page.direction === "l1-to-en" ? "Translate to English" : "Translate to target language"}</Text>

      <View style={s.promptBox}>
        <View style={s.promptRow}>
          <Text style={s.prompt}>{page.prompt}</Text>
          {page.direction === "l1-to-en" && <SpeakButton text={page.prompt} lang={lang} size={20} />}
        </View>
        {page.hint && <Text style={s.hint}>Hint: {page.hint}</Text>}
      </View>

      <TextInput
        style={s.input}
        placeholder="Type your translation..."
        placeholderTextColor="#475569"
        value={answer}
        onChangeText={setAnswer}
        multiline
        editable={!result}
        autoCapitalize="none"
        autoCorrect={false}
      />

      {!result ? (
        <TouchableOpacity style={[s.btn, (!answer.trim() || loading) && s.btnDisabled]} onPress={handleGrade} disabled={!answer.trim() || loading}>
          {loading ? <ActivityIndicator color="#fff" /> : <Text style={s.btnText}>Grade →</Text>}
        </TouchableOpacity>
      ) : (
        <View>
          <View style={[s.resultBox, { borderColor: scoreColor }]}>
            <Text style={[s.scoreLabel, { color: scoreColor }]}>
              {result.score === 2 ? "✓ Correct" : result.score === 1 ? "~ Close" : "✗ Try again"}
            </Text>
            <Text style={s.feedback}>{result.feedback}</Text>
            {result.corrected && <Text style={s.corrected}>Better: {result.corrected}</Text>}
            <Text style={s.reference}>Reference: {page.reference}</Text>
          </View>
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
  heading: { fontSize: 20, fontWeight: "700", color: "#f8fafc", marginBottom: 4 },
  dirLabel: { fontSize: 13, color: "#64748b", marginBottom: 16, textTransform: "uppercase", letterSpacing: 0.5, fontWeight: "600" },
  promptBox: { backgroundColor: "#1e293b", borderRadius: 12, padding: 16, marginBottom: 16 },
  promptRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  prompt: { fontSize: 20, fontWeight: "700", color: "#f8fafc", flex: 1 },
  hint: { fontSize: 13, color: "#64748b", marginTop: 8, fontStyle: "italic" },
  input: {
    backgroundColor: "#1e293b", borderRadius: 12, padding: 16, color: "#f8fafc", fontSize: 16,
    minHeight: 100, textAlignVertical: "top", borderWidth: 1, borderColor: "#334155", marginBottom: 16,
  },
  btn: { backgroundColor: "#818cf8", borderRadius: 12, paddingVertical: 15, alignItems: "center" },
  btnDisabled: { backgroundColor: "#334155" },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  resultBox: { borderRadius: 12, borderWidth: 1, padding: 16, marginBottom: 16 },
  scoreLabel: { fontSize: 18, fontWeight: "700", marginBottom: 8 },
  feedback: { fontSize: 15, color: "#cbd5e1", lineHeight: 22, marginBottom: 8 },
  corrected: { fontSize: 14, color: "#f59e0b", fontStyle: "italic", marginBottom: 8 },
  reference: { fontSize: 13, color: "#64748b", fontStyle: "italic" },
});
