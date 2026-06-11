import { useState, useCallback } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import type { Unit, Lesson, LessonPage } from "@/lib/content/types";
import type { Lang } from "@/lib/lang";
import { apiMarkLessonDone } from "@/lib/api";
import { IntroPage } from "./pages/IntroPage";
import { VocabPage } from "./pages/VocabPage";
import { DialoguePage } from "./pages/DialoguePage";
import { ConjugationPage } from "./pages/ConjugationPage";
import { MultipleChoicePage } from "./pages/MultipleChoicePage";
import { FillBlankPage } from "./pages/FillBlankPage";
import { OrderWordsPage } from "./pages/OrderWordsPage";
import { TranslatePage } from "./pages/TranslatePage";
import { ListenPage } from "./pages/ListenPage";
import { PronouncePage } from "./pages/PronouncePage";
import { TipPage } from "./pages/TipPage";
import { CheckpointPageComponent } from "./pages/CheckpointPage";

type Props = {
  lang: Lang;
  unit: Unit;
  lesson: Lesson;
  lessonIndex: number;
  onComplete: () => void;
  onBack: () => void;
};

export function LessonPlayer({ lang, unit, lesson, lessonIndex, onComplete, onBack }: Props) {
  const [pageIndex, setPageIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [saving, setSaving] = useState(false);

  const page = lesson.pages[pageIndex];
  const totalPages = lesson.pages.length;
  const progress = (pageIndex / totalPages) * 100;

  const handleNext = useCallback(async () => {
    if (pageIndex + 1 < totalPages) {
      setPageIndex((i) => i + 1);
    } else {
      setSaving(true);
      try {
        await apiMarkLessonDone(lang, unit.slug, lesson.slug, 100);
      } catch { /* non-fatal */ }
      setSaving(false);
      setDone(true);
    }
  }, [pageIndex, totalPages, lang, unit.slug, lesson.slug]);

  if (done) {
    return (
      <SafeAreaView style={s.container}>
        <View style={s.completionCard}>
          <Text style={s.completionEmoji}>🎉</Text>
          <Text style={s.completionTitle}>Lesson complete!</Text>
          <Text style={s.completionSub}>{lesson.title}</Text>
          <TouchableOpacity style={s.doneBtn} onPress={onComplete}>
            <Text style={s.doneBtnText}>Continue →</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={s.container}>
      {/* Progress */}
      <View style={s.progressBar}>
        <View style={[s.progressFill, { width: `${progress}%` }]} />
      </View>

      {/* Header */}
      <View style={s.header}>
        <TouchableOpacity onPress={onBack} style={s.backBtn}>
          <Text style={s.backText}>✕</Text>
        </TouchableOpacity>
        <Text style={s.lessonTitle} numberOfLines={1}>{lesson.title}</Text>
        <Text style={s.pageCounter}>{pageIndex + 1}/{totalPages}</Text>
      </View>

      {/* Page content */}
      <PageRenderer page={page} lang={lang} onNext={handleNext} saving={saving} />
    </SafeAreaView>
  );
}

function PageRenderer({ page, lang, onNext, saving }: { page: LessonPage; lang: Lang; onNext: () => void; saving: boolean }) {
  switch (page.type) {
    case "intro": return <IntroPage page={page} onNext={onNext} />;
    case "vocab": return <VocabPage page={page} lang={lang} onNext={onNext} />;
    case "dialogue": return <DialoguePage page={page} lang={lang} onNext={onNext} />;
    case "conjugation": return <ConjugationPage page={page} lang={lang} onNext={onNext} />;
    case "multipleChoice": return <MultipleChoicePage page={page} onNext={onNext} />;
    case "fillBlank": return <FillBlankPage page={page} onNext={onNext} />;
    case "orderWords": return <OrderWordsPage page={page} onNext={onNext} />;
    case "translate": return <TranslatePage page={page} lang={lang} onNext={onNext} />;
    case "listen": return <ListenPage page={page} lang={lang} onNext={onNext} />;
    case "pronounce": return <PronouncePage page={page} lang={lang} onNext={onNext} />;
    case "tip": return <TipPage page={page} lang={lang} onNext={onNext} />;
    case "checkpoint": return <CheckpointPageComponent page={page} onNext={onNext} />;
    default: return (
      <View style={s.fallback}>
        <Text style={s.fallbackText}>Unknown page type</Text>
        <TouchableOpacity style={s.doneBtn} onPress={onNext}>
          <Text style={s.doneBtnText}>Next →</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f172a" },
  progressBar: { height: 3, backgroundColor: "#1e293b" },
  progressFill: { height: 3, backgroundColor: "#818cf8" },
  header: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12 },
  backBtn: { width: 36, height: 36, alignItems: "center", justifyContent: "center" },
  backText: { color: "#94a3b8", fontSize: 18 },
  lessonTitle: { flex: 1, color: "#f8fafc", fontSize: 15, fontWeight: "600", marginHorizontal: 8 },
  pageCounter: { color: "#64748b", fontSize: 13 },
  completionCard: { flex: 1, alignItems: "center", justifyContent: "center", padding: 32 },
  completionEmoji: { fontSize: 56, marginBottom: 16 },
  completionTitle: { fontSize: 26, fontWeight: "700", color: "#f8fafc", marginBottom: 8 },
  completionSub: { fontSize: 15, color: "#94a3b8", marginBottom: 32 },
  doneBtn: { backgroundColor: "#818cf8", borderRadius: 12, paddingHorizontal: 32, paddingVertical: 16 },
  doneBtnText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  fallback: { flex: 1, alignItems: "center", justifyContent: "center", gap: 20 },
  fallbackText: { color: "#94a3b8", fontSize: 16 },
});
