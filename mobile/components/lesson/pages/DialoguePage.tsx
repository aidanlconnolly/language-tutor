import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import type { Dialogue } from "@/lib/content/types";
import type { Lang } from "@/lib/lang";
import { SpeakButton } from "@/components/shared/SpeakButton";

export function DialoguePage({ page, lang, onNext }: { page: Dialogue; lang: Lang; onNext: () => void }) {
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.heading}>{page.heading}</Text>
      {page.setup && <Text style={s.setup}>{page.setup}</Text>}
      {page.lines.map((line, i) => (
        <View key={i} style={s.line}>
          <Text style={s.speaker}>{line.speaker}</Text>
          <View style={s.bubble}>
            <View style={s.bubbleRow}>
              <Text style={s.l1}>{line.l1}</Text>
              <SpeakButton text={line.l1} lang={lang} size={18} />
            </View>
            <Text style={s.en}>{line.en}</Text>
          </View>
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
  heading: { fontSize: 20, fontWeight: "700", color: "#f8fafc", marginBottom: 8 },
  setup: { fontSize: 14, color: "#94a3b8", marginBottom: 16, fontStyle: "italic" },
  line: { marginBottom: 14 },
  speaker: { fontSize: 12, fontWeight: "700", color: "#64748b", marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.5 },
  bubble: { backgroundColor: "#1e293b", borderRadius: 12, padding: 14, borderLeftWidth: 2, borderLeftColor: "#818cf8" },
  bubbleRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  l1: { fontSize: 17, fontWeight: "600", color: "#f8fafc", flex: 1 },
  en: { fontSize: 14, color: "#94a3b8", marginTop: 6, fontStyle: "italic" },
  btn: { backgroundColor: "#818cf8", borderRadius: 12, paddingVertical: 15, alignItems: "center", marginTop: 16 },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
