import { notFound } from "next/navigation";
import { findRead } from "@/lib/content";
import { DailyReadView } from "@/components/DailyRead";
import { isValidLang } from "@/lib/lang";

export const dynamic = "force-dynamic";

export default async function ReadPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: langParam, slug } = await params;
  if (!isValidLang(langParam)) notFound();
  const read = findRead(langParam, slug);
  if (!read) notFound();
  return <DailyReadView read={read} lang={langParam} />;
}
