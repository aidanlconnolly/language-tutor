"use server";

import { gradeTranslation, type TranslationGrade } from "@/lib/anthropic";
import type { Lang } from "@/lib/lang";

export type GradeResult =
  | { ok: true; grade: TranslationGrade }
  | { ok: false; error: string };

export async function gradeTranslationAction(args: {
  direction: "l1-to-en" | "en-to-l1";
  prompt: string;
  reference: string;
  learner: string;
  lang: Lang;
}): Promise<GradeResult> {
  if (!args.learner.trim()) {
    return { ok: false, error: "Empty answer" };
  }
  try {
    const grade = await gradeTranslation({
      direction: args.direction,
      prompt: args.prompt.normalize("NFC"),
      reference: args.reference.normalize("NFC"),
      learner: args.learner.trim().normalize("NFC"),
      lang: args.lang,
    });
    return { ok: true, grade };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}
