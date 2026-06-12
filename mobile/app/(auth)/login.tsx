import { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet,
  KeyboardAvoidingView, Platform, ActivityIndicator, Alert,
} from "react-native";
import { Link } from "expo-router";
import { apiLogin } from "@/lib/api";
import { saveAuth } from "@/lib/auth";
import { C, SUN } from "@/lib/theme";
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
      <View style={s.logoWrap}>
        <View style={s.logoBubble}>
          <Text style={s.logoA}>A</Text>
          <View style={s.logoTail} />
        </View>
        <Text style={s.title}>Allora</Text>
        <Text style={s.tagline}>Ciao · Bonjour · Hola</Text>
      </View>

      <View style={[s.card, s.shadow]}>
        <TextInput
          style={s.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholderTextColor={SUN.sub}
        />
        <TextInput
          style={s.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor={SUN.sub}
        />

        <TouchableOpacity style={s.btn} onPress={handleLogin} disabled={loading}>
          {loading ? <ActivityIndicator color={C.primaryText} /> : <Text style={s.btnText}>Sign in</Text>}
        </TouchableOpacity>
      </View>

      <Link href="/(auth)/register" style={s.link}>
        No account? Register
      </Link>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: SUN.bg, justifyContent: "center", padding: 24 },
  logoWrap: { alignItems: "center", marginBottom: 28 },
  logoBubble: {
    width: 68, height: 60, borderRadius: 20, backgroundColor: SUN.ink,
    alignItems: "center", justifyContent: "center", marginBottom: 14,
  },
  logoA: { color: "#ffffff", fontSize: 32, fontWeight: "700" },
  logoTail: {
    position: "absolute", bottom: -8, left: 16,
    width: 0, height: 0,
    borderLeftWidth: 7, borderRightWidth: 7, borderTopWidth: 10,
    borderLeftColor: "transparent", borderRightColor: "transparent", borderTopColor: SUN.ink,
  },
  title: { fontSize: 32, fontWeight: "700", color: SUN.ink },
  tagline: { fontSize: 15, color: SUN.sub, marginTop: 4 },
  shadow: { shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 14, shadowOffset: { width: 0, height: 5 }, elevation: 3 },
  card: { backgroundColor: SUN.card, borderRadius: 22, padding: 22, borderWidth: 1, borderColor: SUN.cardBorder },
  input: {
    backgroundColor: SUN.inputFill, borderRadius: 14, paddingHorizontal: 18, paddingVertical: 15,
    color: SUN.ink, fontSize: 16, marginBottom: 12,
  },
  btn: {
    backgroundColor: C.primary, borderRadius: 999, paddingVertical: 16,
    alignItems: "center", marginTop: 6,
  },
  btnText: { color: C.primaryText, fontSize: 16, fontWeight: "600" },
  link: { color: C.primary, textAlign: "center", marginTop: 24, fontSize: 15 },
});
