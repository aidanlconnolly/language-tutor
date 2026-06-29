import { Stack } from "expo-router";
import { C } from "@/lib/theme";

export default function AppLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: C.headerBg },
        headerTintColor: C.primary,
        headerTitleStyle: { fontWeight: "600", color: C.text },
        contentStyle: { backgroundColor: C.bg },
      }}
    >
      {/* Language picker — its own in-page header, no native title bar */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* The [lang] group renders its own header; hide this outer one so
          "[lang]" doesn't show as a redundant bar above it. */}
      <Stack.Screen name="[lang]" options={{ headerShown: false }} />
      {/* Geography group renders its own header stack */}
      <Stack.Screen name="geography" options={{ headerShown: false }} />
      <Stack.Screen name="account" options={{ title: "Account" }} />
    </Stack>
  );
}
