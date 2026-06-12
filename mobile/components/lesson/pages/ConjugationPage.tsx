import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import type { Conjugation } from "@/lib/content/types";
import type { Lang } from "@/lib/lang";
import { SpeakButton } from "@/components/shared/SpeakButton";
import { C } from "@/lib/theme";

export function ConjugationPage({ page, lang, onNext }: { page: Conjugation; lang: Lang; onNext: () => void }) {
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.heading}>{page.heading}</Text>
      <View style={s.verbRow}>
        <Text style={s.verb}>{page.verb}</Text>
        <SpeakButton text={page.verb} lang={lang} size={20} />
      </View>
      <Text style={s.meaning}>{page.meaning}</Text>
      {page.intro && <Text style={s.intro}>{page.intro}</Text>}
      {page.tenses.map((tense, ti) => (
        <View key={ti} style={s.tenseCard}>
          <Text style={s.tenseName}>{tense.name}</Text>
          {tense.forms.map((form, fi) => (
            <View key={fi} style={[s.formRow, fi % 2 === 1 && s.formRowAlt]}>
              <Text style={s.person}>{form.person}</Text>
              <Text style={s.form}>{form.form}</Text>
              {form.en && <Text style={s.formEn}>{form.en}</Text>}
            </View>
          ))}
        </View>
      ))}
      <TouchableOpacity style={s.btn} onPress={onNext}>
        <Text style={s.btnText}>Next →</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20, paddingBottom: 40 },
  heading: { fontSize: 20, fontWeight: "700", color: C.text, marginBottom: 12 },
  verbRow: { flexDirection: "row", alignItems: "center", marginBottom: 4, gap: 10 },
  verb: { fontSize: 26, fontWeight: "700", color: C.primary },
  meaning: { fontSize: 15, color: C.textMuted, marginBottom: 12, fontStyle: "italic" },
  intro: { fontSize: 14, color: C.textSecondary, marginBottom: 16 },
  tenseCard: { backgroundColor: C.card, borderRadius: 12, padding: 16, marginBottom: 12 },
  tenseName: { fontSize: 13, fontWeight: "700", color: C.primary, marginBottom: 10, textTransform: "uppercase", letterSpacing: 0.5 },
  formRow: { flexDirection: "row", paddingVertical: 8, paddingHorizontal: 4 },
  formRowAlt: { backgroundColor: C.inset, borderRadius: 6 },
  person: { width: 120, fontSize: 14, color: C.textMuted },
  form: { flex: 1, fontSize: 16, fontWeight: "600", color: C.text },
  formEn: { flex: 1, fontSize: 13, color: C.textMuted, textAlign: "right" },
  btn: { backgroundColor: C.primary, borderRadius: 12, paddingVertical: 15, alignItems: "center", marginTop: 16 },
  btnText: { color: C.primaryText, fontSize: 16, fontWeight: "600" },
});
