import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import type { Tip } from "@/lib/content/types";
import type { Lang } from "@/lib/lang";
import { SpeakButton } from "@/components/shared/SpeakButton";
import { C } from "@/lib/theme";

export function TipPage({ page, lang, onNext }: { page: Tip; lang: Lang; onNext: () => void }) {
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.chip}>Grammar tip</Text>
      <Text style={s.heading}>{page.heading}</Text>
      <View style={s.bodyBox}>
        <Text style={s.body}>{page.body}</Text>
      </View>
      {page.example && (
        <View style={s.exampleBox}>
          <Text style={s.exampleLabel}>Example</Text>
          <View style={s.exampleRow}>
            <Text style={s.exampleL1}>{page.example.l1}</Text>
            <SpeakButton text={page.example.l1} lang={lang} size={18} />
          </View>
          <Text style={s.exampleEn}>{page.example.en}</Text>
        </View>
      )}
      <TouchableOpacity style={s.btn} onPress={onNext}>
        <Text style={s.btnText}>Next →</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20, paddingBottom: 40 },
  chip: { fontSize: 12, fontWeight: "700", color: C.primary, marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5 },
  heading: { fontSize: 22, fontWeight: "700", color: C.text, marginBottom: 16 },
  bodyBox: { backgroundColor: C.inset, borderRadius: 12, padding: 16, marginBottom: 16, borderLeftWidth: 3, borderLeftColor: C.primary },
  body: { fontSize: 16, color: C.textSecondary, lineHeight: 26 },
  exampleBox: { backgroundColor: C.card, borderRadius: 12, padding: 16, borderWidth: 1, borderColor: C.border },
  exampleLabel: { fontSize: 12, fontWeight: "700", color: C.textMuted, marginBottom: 8, textTransform: "uppercase" },
  exampleRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  exampleL1: { fontSize: 18, fontWeight: "600", color: C.text, flex: 1 },
  exampleEn: { fontSize: 14, color: C.textMuted, marginTop: 4, fontStyle: "italic" },
  btn: { backgroundColor: C.primary, borderRadius: 12, paddingVertical: 15, alignItems: "center", marginTop: 20 },
  btnText: { color: C.primaryText, fontSize: 16, fontWeight: "600" },
});
