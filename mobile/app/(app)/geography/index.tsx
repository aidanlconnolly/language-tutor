import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { GEO_GAMES } from "@/lib/geo/games";
import { SUN } from "@/lib/theme";

export default function GeographyHome() {
  const router = useRouter();
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.tagline}>Learn not just the language, but the countries.</Text>

      {GEO_GAMES.map((g) => {
        const count =
          g.kind === "cities" ? `${g.cities.length} cities` : `${g.geo.features.length} countries`;
        return (
          <TouchableOpacity
            key={g.id}
            style={s.card}
            onPress={() => router.push(`/(app)/geography/${g.id}` as never)}
          >
            <Text style={s.emoji}>{g.emoji}</Text>
            <Text style={s.title}>{g.title}</Text>
            <Text style={s.subtitle}>{g.subtitle}</Text>
            <Text style={s.count}>{count}</Text>
          </TouchableOpacity>
        );
      })}

      <Text style={s.footer}>More countries and continents coming soon.</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: SUN.bg },
  content: { padding: 16, paddingBottom: 40 },
  tagline: { fontSize: 14, color: SUN.sub, marginBottom: 16, paddingHorizontal: 4 },
  card: {
    backgroundColor: SUN.card,
    borderColor: SUN.cardBorder,
    borderWidth: 1,
    borderRadius: 18,
    padding: 18,
    marginBottom: 12,
  },
  emoji: { fontSize: 34 },
  title: { fontSize: 18, fontWeight: "700", color: SUN.ink, marginTop: 10 },
  subtitle: { fontSize: 14, color: SUN.sub, marginTop: 2 },
  count: { fontSize: 12, fontWeight: "600", color: SUN.sub, marginTop: 10 },
  footer: { textAlign: "center", color: SUN.sub, fontSize: 12, marginTop: 16 },
});
