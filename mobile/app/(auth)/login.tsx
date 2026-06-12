import { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet,
  KeyboardAvoidingView, Platform, ActivityIndicator, Alert,
} from "react-native";
import { Link } from "expo-router";
import { apiLogin } from "@/lib/api";
import { saveAuth } from "@/lib/auth";
import { C } from "@/lib/theme";
import { useAuth } from "../_layout";

export default function LoginScreen() {
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!email || !password) { Alert.alert("Error", "Please enter email and password"); return; }
    setLoading(true);
    try {
      const { token, user } = await apiLogin(email.trim().toLowerCase(), password);
      await saveAuth(token, user);
      setUser(user);
    } catch (err) {
      Alert.alert("Login failed", (err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView style={s.container} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <View style={[s.card, s.shadow]}>
        <Text style={s.title}>Allora</Text>
        <Text style={s.subtitle}>Sign in to continue</Text>

        <TextInput
          style={s.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholderTextColor={C.textFaint}
        />
        <TextInput
          style={s.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor={C.textFaint}
        />

        <TouchableOpacity style={s.btn} onPress={handleLogin} disabled={loading}>
          {loading ? <ActivityIndicator color={C.primaryText} /> : <Text style={s.btnText}>Sign in</Text>}
        </TouchableOpacity>

        <Link href="/(auth)/register" style={s.link}>
          No account? Register
        </Link>
      </View>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: C.bg, justifyContent: "center", padding: 24 },
  shadow: { shadowColor: "#000", shadowOpacity: 0.06, shadowRadius: 12, shadowOffset: { width: 0, height: 4 }, elevation: 3 },
  card: { backgroundColor: C.card, borderRadius: 16, padding: 28, borderWidth: 1, borderColor: C.border },
  title: { fontSize: 28, fontWeight: "700", color: C.text, textAlign: "center", marginBottom: 4 },
  subtitle: { fontSize: 15, color: C.textMuted, textAlign: "center", marginBottom: 28 },
  input: {
    backgroundColor: C.white, borderRadius: 10, paddingHorizontal: 16, paddingVertical: 14,
    color: C.text, fontSize: 16, marginBottom: 12, borderWidth: 1, borderColor: C.borderStrong,
  },
  btn: {
    backgroundColor: C.primary, borderRadius: 10, paddingVertical: 15,
    alignItems: "center", marginTop: 8,
  },
  btnText: { color: C.primaryText, fontSize: 16, fontWeight: "600" },
  link: { color: C.primary, textAlign: "center", marginTop: 20, fontSize: 15 },
});
