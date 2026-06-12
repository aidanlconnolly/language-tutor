import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import type { Intro } from "@/lib/content/types";
import { RichText } from "@/components/shared/RichText";
import { C } from "@/lib/theme";

export function IntroPage({ page, onNext }: { page: Intro; onNext: () => void }) {
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.heading}>{page.heading}</Text>
      {page.body.map((line, i) => (
        <RichText key={i} text={line} style={s.body} />
      ))}
      {page.tip && (
        <View style={s.tip}>
          <Text style={s.tipLabel}>{page.tip.label}</Text>
          <RichText text={page.tip.body} style={s.tipBody} />
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
  heading: { fontSize: 22, fontWeight: "700", color: C.text, marginBottom: 20 },
  body: { fontSize: 16, color: C.textSecondary, lineHeight: 26, marginBottom: 12 },
  tip: { backgroundColor: C.inset, borderRadius: 10, padding: 16, marginTop: 8, marginBottom: 12, borderLeftWidth: 3, borderLeftColor: C.primary },
  tipLabel: { fontSize: 12, fontWeight: "700", color: C.primary, marginBottom: 4, textTransform: "uppercase" },
  tipBody: { fontSize: 15, color: C.textSecondary },
  keyPoint: { backgroundColor: C.inset, borderWidth: 1, borderColor: C.primary, borderRadius: 10, padding: 14, marginTop: 8, marginBottom: 12 },
  keyPointText: { fontSize: 15, color: C.primary, fontStyle: "italic" },
  btn: { backgroundColor: C.primary, borderRadius: 12, paddingVertical: 15, alignItems: "center", marginTop: 16 },
  btnText: { color: C.primaryText, fontSize: 16, fontWeight: "600" },
});
