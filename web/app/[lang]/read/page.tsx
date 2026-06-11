import { notFound, redirect } from "next/navigation";
import { pickTodaysRead } from "@/lib/content";
import { getRoadmapSummary } from "@/lib/actions/progress";
import { isValidLang } from "@/lib/lang";

export const dynamic = "force-dynamic";

export default async function ReadIndex({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  if (!isValidLang(langParam)) notFound();

  let completedCount = 0;
  try {
    const summary = await getRoadmapSummary(langParam);
    completedCount = summary.readsCompleted.size;
  } catch {
    completedCount = 0;
  }
  const today = pickTodaysRead(langParam, completedCount);
  redirect(`/${langParam}/read/${today.slug}`);
}
