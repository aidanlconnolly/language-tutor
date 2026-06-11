import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import type { Intro } from "@/lib/content/types";

export function IntroPage({ page, onNext }: { page: Intro; onNext: () => void }) {
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.heading}>{page.heading}</Text>
      {page.body.map((line, i) => (
        <Text key={i} style={s.body}>{line}</Text>
      ))}
      {page.tip && (
        <View style={s.tip}>
          <Text style={s.tipLabel}>{page.tip.label}</Text>
          <Text style={s.tipBody}>{page.tip.body}</Text>
        </View>
      )}
      {page.keyPoint && (
        <View style={s.keyPoint}>
          <Text style={s.keyPointText}>{page.keyPoint}</Text>
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
  heading: { fontSize: 22, fontWeight: "700", color: "#f8fafc", marginBottom: 20 },
  body: { fontSize: 16, color: "#cbd5e1", lineHeight: 26, marginBottom: 12 },
  tip: { backgroundColor: "#1e293b", borderRadius: 10, padding: 16, marginTop: 8, marginBottom: 12, borderLeftWidth: 3, borderLeftColor: "#818cf8" },
  tipLabel: { fontSize: 12, fontWeight: "700", color: "#818cf8", marginBottom: 4, textTransform: "uppercase" },
  tipBody: { fontSize: 15, color: "#cbd5e1" },
  keyPoint: { backgroundColor: "#0f172a", borderWidth: 1, borderColor: "#4f46e5", borderRadius: 10, padding: 14, marginTop: 8, marginBottom: 12 },
  keyPointText: { fontSize: 15, color: "#a5b4fc", fontStyle: "italic" },
  btn: { backgroundColor: "#818cf8", borderRadius: 12, paddingVertical: 15, alignItems: "center", marginTop: 16 },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
