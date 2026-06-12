import { Stack } from "expo-router";

export default function AppLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#1e293b" },
        headerTintColor: "#f8fafc",
        headerTitleStyle: { fontWeight: "600" },
        contentStyle: { backgroundColor: "#0f172a" },
      }}
    >
      {/* Language picker — its own in-page header, no native title bar */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* The [lang] group renders its own header; hide this outer one so
          "[lang]" doesn't show as a redundant bar above it. */}
      <Stack.Screen name="[lang]" options={{ headerShown: false }} />
      <Stack.Screen name="account" options={{ title: "Account" }} />
    </Stack>
  );
}
