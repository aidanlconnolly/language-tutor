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
    />
  );
}
