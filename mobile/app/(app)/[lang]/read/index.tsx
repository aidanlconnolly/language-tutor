import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { apiGetProgress } from "@/lib/api";
import { pickTodaysRead } from "@/lib/content";
import { isValidLang } from "@/lib/lang";
import { C } from "@/lib/theme";

export default function ReadIndexScreen() {
  const { lang: langParam } = useLocalSearchParams<{ lang: string }>();
  const router = useRouter();
  const lang = isValidLang(langParam) ? langParam : null;

  useEffect(() => {
    if (!lang) return;
    apiGetProgress(lang).then((data) => {
      const completedCount = data.reads.length;
      const read = pickTodaysRead(lang, completedCount);
      router.replace(`/(app)/${lang}/read/${read.slug}` as never);
    });
  }, [lang]);

  return (
    <View style={{ flex: 1, backgroundColor: C.bg, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator color={C.primary} size="large" />
    </View>
  );
}
