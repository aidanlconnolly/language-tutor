import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Modal, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { isValidLang } from "@/lib/lang";
import { apiLookupWord, apiSaveCard } from "@/lib/api";
import { SpeakButton } from "@/components/shared/SpeakButton";
import type { Lang } from "@/lib/lang";
import { C } from "@/lib/theme";

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

  if (!lang) return <Text style={{ color: C.danger, padding: 20 }}>Invalid language</Text>;

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
            placeholderTextColor={C.textFaint}
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
              <ActivityIndicator color={C.primary} style={{ padding: 32 }} />
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
                  {saving ? <ActivityIndicator color={C.primaryText} size="small" /> : <Text style={[s.saveBtnText, isSaved && s.savedBtnText]}>{isSaved ? "✓ Saved" : "Save to deck"}</Text>}
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
  container: { flex: 1, backgroundColor: C.bg },
  inputArea: { flex: 1, padding: 20 },
  hint: { fontSize: 14, color: C.textMuted, marginBottom: 12, textAlign: "center" },
  textarea: {
    flex: 1, backgroundColor: C.inset, borderRadius: 12, padding: 16, color: C.text, fontSize: 16,
    textAlignVertical: "top", borderWidth: 1, borderColor: C.border, marginBottom: 16,
  },
  loadBtn: { backgroundColor: C.primary, borderRadius: 12, paddingVertical: 15, alignItems: "center" },
  btnDisabled: { backgroundColor: C.borderStrong },
  loadBtnText: { color: C.primaryText, fontSize: 16, fontWeight: "600" },
  textArea: { flex: 1 },
  textContent: { padding: 20 },
  resetBtn: { marginBottom: 16 },
  resetText: { color: C.primary, fontSize: 14 },
  tokenContainer: { flexDirection: "row", flexWrap: "wrap" },
  token: { fontSize: 18, color: C.textMuted, lineHeight: 32 },
  tokenWord: { color: C.text },
  overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "flex-end" },
  popover: { backgroundColor: C.card, borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 24, maxHeight: "80%", borderWidth: 1, borderColor: C.border },
  popoverHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 4 },
  popoverLemma: { fontSize: 26, fontWeight: "700", color: C.text },
  popoverPos: { fontSize: 13, color: C.textMuted, marginBottom: 8 },
  popoverTranslation: { fontSize: 20, fontWeight: "600", color: C.primary, marginBottom: 8 },
  popoverDef: { fontSize: 15, color: C.textSecondary, lineHeight: 22, marginBottom: 12 },
  popoverExample: { backgroundColor: C.inset, borderRadius: 8, padding: 12, marginBottom: 16 },
  exL1: { fontSize: 14, fontWeight: "600", color: C.text, marginBottom: 4 },
  exEn: { fontSize: 13, color: C.textMuted, fontStyle: "italic" },
  saveBtn: { backgroundColor: C.primary, borderRadius: 10, paddingVertical: 14, alignItems: "center" },
  savedBtn: { backgroundColor: C.completeTint },
  saveBtnText: { color: C.primaryText, fontSize: 16, fontWeight: "600" },
  savedBtnText: { color: C.completeText },
});
