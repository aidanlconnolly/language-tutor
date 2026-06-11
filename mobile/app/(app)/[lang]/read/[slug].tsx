import { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { findRead } from "@/lib/content";
import { isValidLang } from "@/lib/lang";
import { apiMarkReadDone } from "@/lib/api";
import { SpeakButton } from "@/components/shared/SpeakButton";

export default function ReadScreen() {
  const { lang: langParam, slug } = useLocalSearchParams<{ lang: string; slug: string }>();
  const router = useRouter();
  const lang = isValidLang(langParam) ? langParam : null;
  const read = lang ? findRead(lang, slug) : null;

  const [showEn, setShowEn] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(read?.comprehension.map(() => null) ?? []);
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);

  if (!lang || !read) return <Text style={{ color: "#ef4444", padding: 20 }}>Read not found</Text>;

  const score = answers.filter((a, i) => a === read.comprehension[i].correct).length;
  const pct = Math.round((score / read.comprehension.length) * 100);

  async function handleSubmit() {
    setSaving(true);
    await apiMarkReadDone(lang!, slug, pct).catch(() => {});
    setSaving(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <View style={s.container}>
        <View style={s.result}>
          <Text style={s.resultEmoji}>✓</Text>
          <Text style={s.resultTitle}>Read complete!</Text>
          <Text style={s.resultScore}>{pct}% comprehension</Text>
          <TouchableOpacity style={[s.btn, { marginTop: 24 }]} onPress={() => router.back()}>
            <Text style={s.btnText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.difficulty}>Difficulty {read.difficulty}/10</Text>
      <Text style={s.titleL1}>{read.titleL1}</Text>
      <Text style={s.titleEn}>{read.titleEn}</Text>
      <Text style={s.intro}>{read.intro}</Text>

      <TouchableOpacity style={s.toggleBtn} onPress={() => setShowEn(!showEn)}>
        <Text style={s.toggleBtnText}>{showEn ? "Hide English" : "Show English"}</Text>
      </TouchableOpacity>

      {read.paragraphs.map((para, i) => (
        <View key={i} style={s.para}>
          <View style={s.paraRow}>
            <Text style={s.paraL1}>{para.l1}</Text>
            <SpeakButton text={para.l1} lang={lang} size={18} />
          </View>
          {showEn && <Text style={s.paraEn}>{para.en}</Text>}
        </View>
      ))}

      {read.vocabSpotlight && read.vocabSpotlight.length > 0 && (
        <View style={s.vocab}>
          <Text style={s.vocabTitle}>Vocab spotlight</Text>
          {read.vocabSpotlight.map((v, i) => (
            <Text key={i} style={s.vocabItem}><Text style={s.vocabL1}>{v.l1}</Text> — {v.en}</Text>
          ))}
        </View>
      )}

      <Text style={s.sectionTitle}>Comprehension</Text>
      {read.comprehension.map((q, qi) => (
        <View key={qi} style={s.question}>
          <Text style={s.q}>{q.q}</Text>
          {q.options.map((opt, oi) => (
            <TouchableOpacity key={oi}
              style={[s.option, answers[qi] === oi && s.optionSelected]}
              onPress={() => { if (!submitted) setAnswers((prev) => prev.map((a, i) => i === qi ? oi : a)); }}>
              <Text style={[s.optionText, answers[qi] === oi && s.optionTextSelected]}>{opt}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}

      <TouchableOpacity
        style={[s.btn, (!answers.every((a) => a !== null) || saving) && s.btnDisabled]}
        onPress={handleSubmit}
        disabled={!answers.every((a) => a !== null) || saving}
      >
        {saving ? <ActivityIndicator color="#fff" /> : <Text style={s.btnText}>Submit</Text>}
      </TouchableOpacity>
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f172a" },
  content: { padding: 20 },
  difficulty: { fontSize: 12, color: "#64748b", fontWeight: "600", marginBottom: 4 },
  titleL1: { fontSize: 24, fontWeight: "700", color: "#f8fafc", marginBottom: 4 },
  titleEn: { fontSize: 15, color: "#94a3b8", fontStyle: "italic", marginBottom: 8 },
  intro: { fontSize: 15, color: "#cbd5e1", marginBottom: 20 },
  toggleBtn: { backgroundColor: "#1e293b", borderRadius: 8, paddingHorizontal: 14, paddingVertical: 8, alignSelf: "flex-start", marginBottom: 20, borderWidth: 1, borderColor: "#334155" },
  toggleBtnText: { color: "#818cf8", fontSize: 14, fontWeight: "600" },
  para: { marginBottom: 16 },
  paraRow: { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", gap: 8 },
  paraL1: { fontSize: 16, color: "#f8fafc", lineHeight: 26, flex: 1 },
  paraEn: { fontSize: 14, color: "#64748b", lineHeight: 22, marginTop: 6, fontStyle: "italic" },
  vocab: { backgroundColor: "#1e293b", borderRadius: 12, padding: 16, marginBottom: 24 },
  vocabTitle: { fontSize: 13, fontWeight: "700", color: "#818cf8", marginBottom: 10, textTransform: "uppercase" },
  vocabItem: { fontSize: 15, color: "#cbd5e1", marginBottom: 6 },
  vocabL1: { fontWeight: "700", color: "#f8fafc" },
  sectionTitle: { fontSize: 18, fontWeight: "700", color: "#f8fafc", marginBottom: 16 },
  question: { marginBottom: 16 },
  q: { fontSize: 15, fontWeight: "600", color: "#f8fafc", marginBottom: 8 },
  option: { backgroundColor: "#1e293b", borderRadius: 10, padding: 14, marginBottom: 6, borderWidth: 1, borderColor: "#334155" },
  optionSelected: { borderColor: "#818cf8", backgroundColor: "#1e1b4b" },
  optionText: { fontSize: 14, color: "#e2e8f0" },
  optionTextSelected: { color: "#a5b4fc", fontWeight: "600" },
  btn: { backgroundColor: "#818cf8", borderRadius: 12, paddingVertical: 15, alignItems: "center", marginTop: 8 },
  btnDisabled: { backgroundColor: "#334155" },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  result: { flex: 1, alignItems: "center", justifyContent: "center", padding: 32 },
  resultEmoji: { fontSize: 56, marginBottom: 16 },
  resultTitle: { fontSize: 26, fontWeight: "700", color: "#f8fafc", marginBottom: 12 },
  resultScore: { fontSize: 28, fontWeight: "700", color: "#818cf8" },
});
