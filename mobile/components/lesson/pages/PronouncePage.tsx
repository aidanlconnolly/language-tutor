import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import type { Pronounce } from "@/lib/content/types";
import type { Lang } from "@/lib/lang";
import { SpeakButton } from "@/components/shared/SpeakButton";

export function PronouncePage({ page, lang, onNext }: { page: Pronounce; lang: Lang; onNext: () => void }) {
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.heading}>{page.heading}</Text>
      {page.intro && <Text style={s.intro}>{page.intro}</Text>}
      {page.items.map((item, i) => (
        <View key={i} style={s.card}>
          <View style={s.cardTop}>
            <Text style={s.l1}>{item.l1}</Text>
            <SpeakButton text={item.l1} lang={lang} size={26} />
          </View>
          <Text style={s.en}>{item.en}</Text>
          {item.tip && (
            <View style={s.tip}>
              <Text style={s.tipText}>💡 {item.tip}</Text>
            </View>
          )}
        </View>
      ))}
      <Text style={s.hint}>Tap 🔊 to hear each phrase, then practice saying it aloud.</Text>
      <TouchableOpacity style={s.btn} onPress={onNext}>
        <Text style={s.btnText}>Done practising →</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20, paddingBottom: 40 },
  heading: { fontSize: 20, fontWeight: "700", color: "#f8fafc", marginBottom: 8 },
  intro: { fontSize: 15, color: "#94a3b8", marginBottom: 16 },
  card: { backgroundColor: "#1e293b", borderRadius: 12, padding: 16, marginBottom: 10 },
  cardTop: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 6 },
  l1: { fontSize: 22, fontWeight: "700", color: "#f8fafc", flex: 1 },
  en: { fontSize: 14, color: "#94a3b8", fontStyle: "italic" },
  tip: { backgroundColor: "#0f172a", borderRadius: 8, padding: 10, marginTop: 8 },
  tipText: { fontSize: 13, color: "#94a3b8" },
  hint: { fontSize: 14, color: "#64748b", textAlign: "center", marginBottom: 16, fontStyle: "italic" },
  btn: { backgroundColor: "#818cf8", borderRadius: 12, paddingVertical: 15, alignItems: "center" },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
