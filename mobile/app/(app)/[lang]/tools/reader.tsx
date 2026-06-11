import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Modal, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { isValidLang } from "@/lib/lang";
import { apiLookupWord, apiSaveCard } from "@/lib/api";
import { SpeakButton } from "@/components/shared/SpeakButton";
import type { Lang } from "@/lib/lang";

type WordInfo = { id: string; lemma: string; translation: string; definition: string; pos: string; gender: string | null; examples: { l1: string; en: string }[]; conjugation: Record<string, Record<string, string>> | null };

function tokenize(text: string): string[] {
  return text.split(/(\s+|[,;:!?.()"«»—–])/).filter(Boolean);
}

export default function ReaderScreen() {
  const { lang: langParam } = useLocalSearchParams<{ lang: string }>();
  const lang = isValidLang(langParam) ? langParam : null;
  const [rawText, setRawText] = useState("");
  const [tokens, setTokens] = useState<string[]>([]);
  const [selected, setSelected] = useState<{ word: string; sentence: string } | null>(null);
  const [wordInfo, setWordInfo] = useState<WordInfo | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  const [looking, setLooking] = useState(false);
  const [saving, setSaving] = useState(false);

  if (!lang) return <Text style={{ color: "#ef4444", padding: 20 }}>Invalid language</Text>;

  function handleLoad() {
    if (rawText.trim()) setTokens(tokenize(rawText));
  }

  async function handleTap(token: string) {
    if (!/\p{L}/u.test(token)) return;
    setSelected({ word: token, sentence: rawText });
    setWordInfo(null);
    setLooking(true);
    try {
      const result = await apiLookupWord(lang!, token, rawText);
      setWordInfo(result.word as WordInfo);
      setIsSaved(result.isSaved);
    } catch { }
    setLooking(false);
  }

  async function handleSave() {
    if (!wordInfo || isSaved) return;
    setSaving(true);
    await apiSaveCard(lang!, wordInfo.id, selected!.word, selected!.sentence).catch(() => {});
    setIsSaved(true);
    setSaving(false);
  }

  return (
    <View style={s.container}>
      {tokens.length === 0 ? (
        <View style={s.inputArea}>
          <Text style={s.hint}>Paste any text to make it tappable</Text>
          <TextInput
            style={s.textarea}
            value={rawText}
            onChangeText={setRawText}
            multiline
            placeholder="Paste text here..."
            placeholderTextColor="#475569"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TouchableOpacity style={[s.loadBtn, !rawText.trim() && s.btnDisabled]} onPress={handleLoad} disabled={!rawText.trim()}>
            <Text style={s.loadBtnText}>Load text →</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView style={s.textArea} contentContainerStyle={s.textContent}>
          <TouchableOpacity style={s.resetBtn} onPress={() => { setTokens([]); setRawText(""); }}>
            <Text style={s.resetText}>← New text</Text>
          </TouchableOpacity>
          <View style={s.tokenContainer}>
            {tokens.map((t, i) => {
              const isWord = /\p{L}/u.test(t);
              return (
                <TouchableOpacity key={i} onPress={() => handleTap(t)} disabled={!isWord}>
                  <Text style={[s.token, isWord && s.tokenWord]}>{t}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      )}

      <Modal visible={!!selected} transparent animationType="slide" onRequestClose={() => setSelected(null)}>
        <TouchableOpacity style={s.overlay} activeOpacity={1} onPress={() => setSelected(null)}>
          <View style={s.popover} onStartShouldSetResponder={() => true}>
            {looking ? (
              <ActivityIndicator color="#818cf8" style={{ padding: 32 }} />
            ) : wordInfo ? (
              <>
                <View style={s.popoverHeader}>
                  <Text style={s.popoverLemma}>{wordInfo.lemma}</Text>
                  <SpeakButton text={wordInfo.lemma} lang={lang} size={22} />
                </View>
                <Text style={s.popoverPos}>{wordInfo.pos}{wordInfo.gender ? ` · ${wordInfo.gender}` : ""}</Text>
                <Text style={s.popoverTranslation}>{wordInfo.translation}</Text>
                <Text style={s.popoverDef}>{wordInfo.definition}</Text>
                {wordInfo.examples[0] && (
                  <View style={s.popoverExample}>
                    <Text style={s.exL1}>{wordInfo.examples[0].l1}</Text>
                    <Text style={s.exEn}>{wordInfo.examples[0].en}</Text>
                  </View>
                )}
                <TouchableOpacity style={[s.saveBtn, isSaved && s.savedBtn]} onPress={handleSave} disabled={isSaved || saving}>
                  {saving ? <ActivityIndicator color="#fff" size="small" /> : <Text style={s.saveBtnText}>{isSaved ? "✓ Saved" : "Save to deck"}</Text>}
                </TouchableOpacity>
              </>
            ) : null}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f172a" },
  inputArea: { flex: 1, padding: 20 },
  hint: { fontSize: 14, color: "#64748b", marginBottom: 12, textAlign: "center" },
  textarea: {
    flex: 1, backgroundColor: "#1e293b", borderRadius: 12, padding: 16, color: "#f8fafc", fontSize: 16,
    textAlignVertical: "top", borderWidth: 1, borderColor: "#334155", marginBottom: 16,
  },
  loadBtn: { backgroundColor: "#818cf8", borderRadius: 12, paddingVertical: 15, alignItems: "center" },
  btnDisabled: { backgroundColor: "#334155" },
  loadBtnText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  textArea: { flex: 1 },
  textContent: { padding: 20 },
  resetBtn: { marginBottom: 16 },
  resetText: { color: "#818cf8", fontSize: 14 },
  tokenContainer: { flexDirection: "row", flexWrap: "wrap" },
  token: { fontSize: 18, color: "#94a3b8", lineHeight: 32 },
  tokenWord: { color: "#f8fafc" },
  overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "flex-end" },
  popover: { backgroundColor: "#1e293b", borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 24, maxHeight: "80%" },
  popoverHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 4 },
  popoverLemma: { fontSize: 26, fontWeight: "700", color: "#f8fafc" },
  popoverPos: { fontSize: 13, color: "#64748b", marginBottom: 8 },
  popoverTranslation: { fontSize: 20, fontWeight: "600", color: "#a5b4fc", marginBottom: 8 },
  popoverDef: { fontSize: 15, color: "#cbd5e1", lineHeight: 22, marginBottom: 12 },
  popoverExample: { backgroundColor: "#0f172a", borderRadius: 8, padding: 12, marginBottom: 16 },
  exL1: { fontSize: 14, fontWeight: "600", color: "#e2e8f0", marginBottom: 4 },
  exEn: { fontSize: 13, color: "#64748b", fontStyle: "italic" },
  saveBtn: { backgroundColor: "#818cf8", borderRadius: 10, paddingVertical: 14, alignItems: "center" },
  savedBtn: { backgroundColor: "#166534" },
  saveBtnText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
