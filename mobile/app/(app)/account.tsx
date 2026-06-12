import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../_layout";
import { getToken, clearAuth } from "@/lib/auth";
import { apiDeleteAccount } from "@/lib/api";
import { C } from "@/lib/theme";

const API_BASE = process.env.EXPO_PUBLIC_API_BASE ?? "https://language-tutor-silk.vercel.app";

export default function AccountScreen() {
  const { user, setUser } = useAuth();
  const router = useRouter();
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);

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

  function confirmDelete() {
    Alert.alert(
      "Delete account?",
      "This permanently erases your account and all progress — lessons, streaks, saved words, and review history across every language. This cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete account", style: "destructive", onPress: runDelete },
      ],
    );
  }

  async function runDelete() {
    setDeleting(true);
    try {
      await apiDeleteAccount();
      await clearAuth();
      setUser(null);
    } catch (err) {
      Alert.alert("Error", (err as Error).message);
      setDeleting(false);
    }
  }

  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.title}>Account</Text>
      <Text style={s.email}>{user?.email}</Text>

      <Text style={s.sectionTitle}>Change password</Text>
      <TextInput style={s.input} placeholder="Current password" value={current} onChangeText={setCurrent} secureTextEntry placeholderTextColor={C.textMuted} />
      <TextInput style={s.input} placeholder="New password" value={next} onChangeText={setNext} secureTextEntry placeholderTextColor={C.textMuted} />
      <TextInput style={s.input} placeholder="Confirm new password" value={confirm} onChangeText={setConfirm} secureTextEntry placeholderTextColor={C.textMuted} />

      <TouchableOpacity style={s.btn} onPress={handleChangePassword} disabled={loading}>
        {loading ? <ActivityIndicator color={C.primaryText} /> : <Text style={s.btnText}>Update password</Text>}
      </TouchableOpacity>

      <TouchableOpacity style={[s.btn, s.logoutBtn]} onPress={handleLogout}>
        <Text style={s.logoutText}>Sign out</Text>
      </TouchableOpacity>

      <View style={s.dangerZone}>
        <Text style={s.dangerTitle}>Danger zone</Text>
        <Text style={s.dangerHint}>
          Permanently delete your account and all progress. This cannot be undone.
        </Text>
        <TouchableOpacity style={s.deleteBtn} onPress={confirmDelete} disabled={deleting}>
          {deleting ? <ActivityIndicator color={C.danger} /> : <Text style={s.deleteText}>Delete account</Text>}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: C.bg },
  content: { padding: 24, paddingTop: 60 },
  title: { fontSize: 26, fontWeight: "700", color: C.text, marginBottom: 4 },
  email: { fontSize: 14, color: C.textMuted, marginBottom: 32 },
  sectionTitle: { fontSize: 16, fontWeight: "600", color: C.text, marginBottom: 16 },
  input: {
    backgroundColor: C.inset, borderRadius: 10, paddingHorizontal: 16, paddingVertical: 14,
    color: C.text, fontSize: 16, marginBottom: 12, borderWidth: 1, borderColor: C.border,
  },
  btn: { backgroundColor: C.primary, borderRadius: 10, paddingVertical: 15, alignItems: "center", marginTop: 8 },
  btnText: { color: C.primaryText, fontSize: 16, fontWeight: "600" },
  logoutBtn: { backgroundColor: "transparent", borderWidth: 1, borderColor: C.borderStrong, marginTop: 40 },
  logoutText: { color: C.textSecondary, fontSize: 16, fontWeight: "600" },
  dangerZone: { marginTop: 48, borderTopWidth: 1, borderTopColor: C.border, paddingTop: 24 },
  dangerTitle: { fontSize: 14, fontWeight: "700", color: C.dangerText, marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 },
  dangerHint: { fontSize: 13, color: C.textMuted, lineHeight: 19, marginBottom: 16 },
  deleteBtn: { backgroundColor: C.dangerTint, borderRadius: 10, paddingVertical: 15, alignItems: "center", borderWidth: 1, borderColor: C.dangerBorder },
  deleteText: { color: C.dangerText, fontSize: 16, fontWeight: "700" },
});
