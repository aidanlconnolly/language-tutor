import { notFound } from "next/navigation";
import { LessonPlayer } from "@/components/LessonPlayer";
import { findLesson } from "@/lib/content";
import { isValidLang } from "@/lib/lang";

export const dynamic = "force-dynamic";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ lang: string; unit: string; lesson: string }>;
}) {
  const { lang: langParam, unit: unitSlug, lesson: lessonSlug } = await params;
  if (!isValidLang(langParam)) notFound();
  const found = findLesson(langParam, unitSlug, lessonSlug);
  if (!found) notFound();
  const { unit, lessonIndex } = found;
  const lesson = unit.lessons[lessonIndex];
  const nextLesson = unit.lessons[lessonIndex + 1];

  return (
    <LessonPlayer
      unit={unit}
      lesson={lesson}
      lang={langParam}
      nextLessonSlug={nextLesson ? `/${langParam}/lesson/${unit.slug}/${nextLesson.slug}` : null}
    />
  );
}
