import { Stack, useLocalSearchParams } from "expo-router";
import { LANG_LABELS, LANG_FLAGS, isValidLang } from "@/lib/lang";

export default function LangLayout() {
  const { lang } = useLocalSearchParams<{ lang: string }>();
  const label = isValidLang(lang) ? `${LANG_FLAGS[lang]} ${LANG_LABELS[lang]}` : "Language";
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#1e293b" },
        headerTintColor: "#f8fafc",
        headerTitleStyle: { fontWeight: "600" },
        contentStyle: { backgroundColor: "#0f172a" },
      }}
    >
      <Stack.Screen name="index" options={{ title: label }} />
      <Stack.Screen name="lesson/[unit]/[lesson]" options={{ title: "Lesson" }} />
      <Stack.Screen name="checkpoint/[unit]" options={{ title: "Unit Checkpoint" }} />
      <Stack.Screen name="read/[slug]" options={{ title: "Daily Read" }} />
      <Stack.Screen name="tools/review" options={{ title: "Review" }} />
      <Stack.Screen name="tools/deck" options={{ title: "My Deck" }} />
      <Stack.Screen name="tools/reader" options={{ title: "Reader" }} />
    </Stack>
  );
}
