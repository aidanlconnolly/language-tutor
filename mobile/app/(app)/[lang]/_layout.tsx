import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { TouchableOpacity, Text } from "react-native";
import { LANG_LABELS, LANG_FLAGS, isValidLang } from "@/lib/lang";
import { C } from "@/lib/theme";

export default function LangLayout() {
  const { lang } = useLocalSearchParams<{ lang: string }>();
  const router = useRouter();
  const label = isValidLang(lang) ? `${LANG_FLAGS[lang]} ${LANG_LABELS[lang]}` : "Language";

  // Account/profile entry point — shown top-right on every language page,
  // matching the button on the home screen.
  const profileButton = () => (
    <TouchableOpacity
      onPress={() => router.push("/(app)/account" as never)}
      accessibilityLabel="Account and settings"
      hitSlop={8}
      style={{ paddingHorizontal: 4 }}
    >
      <Text style={{ fontSize: 20 }}>👤</Text>
    </TouchableOpacity>
  );

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: C.headerBg },
        headerTintColor: C.primary,
        headerTitleStyle: { fontWeight: "600", color: C.text },
        contentStyle: { backgroundColor: C.bg },
        headerRight: profileButton,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: label,
          // index is the root of this nested stack, so it gets no default back
          // button — add one that returns to the language picker (outer home).
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => (router.canGoBack() ? router.back() : router.replace("/(app)" as never))}
              accessibilityLabel="Back to languages"
              hitSlop={8}
              style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 4 }}
            >
              <Text style={{ fontSize: 26, color: C.primary, marginRight: 1, marginTop: -2 }}>‹</Text>
              <Text style={{ fontSize: 16, color: C.primary }}>Languages</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="lesson/[unit]/[lesson]" options={{ title: "Lesson" }} />
      <Stack.Screen name="checkpoint/[unit]" options={{ title: "Unit Checkpoint" }} />
      <Stack.Screen name="read/[slug]" options={{ title: "Daily Read" }} />
      <Stack.Screen name="tools/review" options={{ title: "Review" }} />
      <Stack.Screen name="tools/deck" options={{ title: "My Deck" }} />
      <Stack.Screen name="tools/reader" options={{ title: "Reader" }} />
    </Stack>
  );
}
