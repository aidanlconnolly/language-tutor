import { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet,
  KeyboardAvoidingView, Platform, ActivityIndicator, Alert,
} from "react-native";
import { Link } from "expo-router";
import { apiRegister } from "@/lib/api";
import { saveAuth } from "@/lib/auth";
import { useAuth } from "../_layout";

export default function RegisterScreen() {
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    if (!email || !password) { Alert.alert("Error", "Please fill all fields"); return; }
    if (password.length < 8) { Alert.alert("Error", "Password must be at least 8 characters"); return; }
    if (password !== confirm) { Alert.alert("Error", "Passwords do not match"); return; }
    setLoading(true);
    try {
      const { token, user } = await apiRegister(email.trim().toLowerCase(), password);
      await saveAuth(token, user);
      setUser(user);
    } catch (err) {
      Alert.alert("Registration failed", (err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView style={s.container} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <View style={s.card}>
        <Text style={s.title}>Create account</Text>
        <Text style={s.subtitle}>Start learning today</Text>

        <TextInput style={s.input} placeholder="Email" value={email} onChangeText={setEmail}
          autoCapitalize="none" keyboardType="email-address" placeholderTextColor="#94a3b8" />
        <TextInput style={s.input} placeholder="Password (min 8 chars)" value={password}
          onChangeText={setPassword} secureTextEntry placeholderTextColor="#94a3b8" />
        <TextInput style={s.input} placeholder="Confirm password" value={confirm}
          onChangeText={setConfirm} secureTextEntry placeholderTextColor="#94a3b8" />

        <TouchableOpacity style={s.btn} onPress={handleRegister} disabled={loading}>
          {loading ? <ActivityIndicator color="#fff" /> : <Text style={s.btnText}>Create account</Text>}
        </TouchableOpacity>

        <Link href="/(auth)/login" style={s.link}>Already have an account? Sign in</Link>
      </View>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f172a", justifyContent: "center", padding: 24 },
  card: { backgroundColor: "#1e293b", borderRadius: 16, padding: 28 },
  title: { fontSize: 28, fontWeight: "700", color: "#f8fafc", textAlign: "center", marginBottom: 4 },
  subtitle: { fontSize: 15, color: "#94a3b8", textAlign: "center", marginBottom: 28 },
  input: {
    backgroundColor: "#0f172a", borderRadius: 10, paddingHorizontal: 16, paddingVertical: 14,
    color: "#f8fafc", fontSize: 16, marginBottom: 12, borderWidth: 1, borderColor: "#334155",
  },
  btn: { backgroundColor: "#4f46e5", borderRadius: 10, paddingVertical: 15, alignItems: "center", marginTop: 8 },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  link: { color: "#818cf8", textAlign: "center", marginTop: 20, fontSize: 15 },
});
