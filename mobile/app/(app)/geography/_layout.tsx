import { Stack, useRouter } from "expo-router";
import { TouchableOpacity, Text } from "react-native";
import { C } from "@/lib/theme";

export default function GeographyLayout() {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: C.headerBg },
        headerTintColor: C.primary,
        headerTitleStyle: { fontWeight: "600", color: C.text },
        contentStyle: { backgroundColor: C.bg },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Geography 🌍",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => (router.canGoBack() ? router.back() : router.replace("/(app)" as never))}
              accessibilityLabel="Back to home"
              hitSlop={8}
              style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 4 }}
            >
              <Text style={{ fontSize: 26, color: C.primary, marginRight: 1, marginTop: -2 }}>‹</Text>
              <Text style={{ fontSize: 16, color: C.primary }}>Home</Text>
            </TouchableOpacity>
          ),
        }}
      />
      {/* The quiz is full-bleed and draws its own controls — no native header. */}
      <Stack.Screen name="[game]" options={{ headerShown: false }} />
    </Stack>
  );
}
