import { TouchableOpacity, Text, StyleSheet } from "react-native";
import * as Speech from "expo-speech";
import { LANG_SPEECH_CODE } from "@/lib/lang";
import type { Lang } from "@/lib/lang";

type Props = { text: string; lang: Lang; size?: number; color?: string };

export function SpeakButton({ text, lang, size = 22, color = "#94a3b8" }: Props) {
  function speak() {
    Speech.stop();
    Speech.speak(text, { language: LANG_SPEECH_CODE[lang], rate: 0.85 });
  }
  return (
    <TouchableOpacity onPress={speak} style={s.btn} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
      <Text style={{ fontSize: size, color }}>🔊</Text>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({ btn: { padding: 4 } });
