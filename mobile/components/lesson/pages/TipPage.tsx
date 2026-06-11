import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import type { Tip } from "@/lib/content/types";
import type { Lang } from "@/lib/lang";
import { SpeakButton } from "@/components/shared/SpeakButton";

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
  chip: { fontSize: 12, fontWeight: "700", color: "#818cf8", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5 },
  heading: { fontSize: 22, fontWeight: "700", color: "#f8fafc", marginBottom: 16 },
  bodyBox: { backgroundColor: "#1e293b", borderRadius: 12, padding: 16, marginBottom: 16, borderLeftWidth: 3, borderLeftColor: "#818cf8" },
  body: { fontSize: 16, color: "#cbd5e1", lineHeight: 26 },
  exampleBox: { backgroundColor: "#0f172a", borderRadius: 12, padding: 16, borderWidth: 1, borderColor: "#334155" },
  exampleLabel: { fontSize: 12, fontWeight: "700", color: "#64748b", marginBottom: 8, textTransform: "uppercase" },
  exampleRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  exampleL1: { fontSize: 18, fontWeight: "600", color: "#f8fafc", flex: 1 },
  exampleEn: { fontSize: 14, color: "#94a3b8", marginTop: 4, fontStyle: "italic" },
  btn: { backgroundColor: "#818cf8", borderRadius: 12, paddingVertical: 15, alignItems: "center", marginTop: 20 },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
