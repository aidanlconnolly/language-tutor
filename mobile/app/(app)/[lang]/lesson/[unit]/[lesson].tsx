import { useLocalSearchParams, useRouter } from "expo-router";
import { findLesson, findUnit } from "@/lib/content";
import { isValidLang } from "@/lib/lang";
import { LessonPlayer } from "@/components/lesson/LessonPlayer";
import { Text, View } from "react-native";

export default function LessonScreen() {
  const { lang: langParam, unit: unitSlug, lesson: lessonSlug } = useLocalSearchParams<{ lang: string; unit: string; lesson: string }>();
  const router = useRouter();
  const lang = isValidLang(langParam) ? langParam : null;

  if (!lang) return <Text style={{ color: "#ef4444", padding: 20 }}>Invalid language</Text>;

  const found = findLesson(lang, unitSlug, lessonSlug);
  if (!found) return <Text style={{ color: "#ef4444", padding: 20 }}>Lesson not found</Text>;

  const { unit, lessonIndex } = found;
  const lesson = unit.lessons[lessonIndex];
  const nextLesson = unit.lessons[lessonIndex + 1];

  function handleComplete() {
    if (nextLesson) {
      router.replace(`/(app)/${lang}/lesson/${unitSlug}/${nextLesson.slug}` as never);
    } else {
      router.replace(`/(app)/${lang}/checkpoint/${unitSlug}` as never);
    }
  }

  return (
    <LessonPlayer
      lang={lang}
      unit={unit}
      lesson={lesson}
      lessonIndex={lessonIndex}
      onComplete={handleComplete}
      onBack={() => router.back()}
    />
  );
}
