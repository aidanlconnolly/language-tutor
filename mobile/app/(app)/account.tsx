import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../_layout";
import { getToken, clearAuth } from "@/lib/auth";

const API_BASE = process.env.EXPO_PUBLIC_API_BASE ?? "https://language-tutor-silk.vercel.app";

export default function AccountScreen() {
  const { user, setUser } = useAuth();
  const router = useRouter();
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleChangePassword() {
    if (!current || !next || !confirm) { Alert.alert("Error", "All fields required"); return; }
    if (next.length < 8) { Alert.alert("Error", "New password must be at least 8 characters"); return; }
    if (next !== confirm) { Alert.alert("Error", "Passwords do not match"); return; }
    setLoading(true);
    try {
      const token = await getToken();
      const res = await fetch(`${API_BASE}/api/auth/change-password`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ current, new: next, confirm }),
      });
      const json = await res.json();
      if (!json.ok) throw new Error(json.error ?? "Failed");
      Alert.alert("Success", "Password updated");
      setCurrent(""); setNext(""); setConfirm("");
    } catch (err) {
      Alert.alert("Error", (err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    await clearAuth();
    setUser(null);
  }

  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.title}>Account</Text>
      <Text style={s.email}>{user?.email}</Text>

      <Text style={s.sectionTitle}>Change password</Text>
      <TextInput style={s.input} placeholder="Current password" value={current} onChangeText={setCurrent} secureTextEntry placeholderTextColor="#94a3b8" />
      <TextInput style={s.input} placeholder="New password" value={next} onChangeText={setNext} secureTextEntry placeholderTextColor="#94a3b8" />
      <TextInput style={s.input} placeholder="Confirm new password" value={confirm} onChangeText={setConfirm} secureTextEntry placeholderTextColor="#94a3b8" />

      <TouchableOpacity style={s.btn} onPress={handleChangePassword} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={s.btnText}>Update password</Text>}
      </TouchableOpacity>

      <TouchableOpacity style={[s.btn, s.logoutBtn]} onPress={handleLogout}>
        <Text style={s.logoutText}>Sign out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f172a" },
  content: { padding: 24, paddingTop: 60 },
  title: { fontSize: 26, fontWeight: "700", color: "#f8fafc", marginBottom: 4 },
  email: { fontSize: 14, color: "#94a3b8", marginBottom: 32 },
  sectionTitle: { fontSize: 16, fontWeight: "600", color: "#e2e8f0", marginBottom: 16 },
  input: {
    backgroundColor: "#1e293b", borderRadius: 10, paddingHorizontal: 16, paddingVertical: 14,
    color: "#f8fafc", fontSize: 16, marginBottom: 12, borderWidth: 1, borderColor: "#334155",
  },
  btn: { backgroundColor: "#4f46e5", borderRadius: 10, paddingVertical: 15, alignItems: "center", marginTop: 8 },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  logoutBtn: { backgroundColor: "transparent", borderWidth: 1, borderColor: "#ef4444", marginTop: 40 },
  logoutText: { color: "#ef4444", fontSize: 16, fontWeight: "600" },
});
