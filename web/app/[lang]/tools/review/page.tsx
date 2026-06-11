import { notFound } from "next/navigation";
import Link from "next/link";
import { ReviewSession } from "@/components/ReviewSession";
import { fetchInitialReviewBatch } from "@/lib/actions/review";
import { isValidLang } from "@/lib/lang";

export const dynamic = "force-dynamic";

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  if (!isValidLang(langParam)) notFound();
  const initial = await fetchInitialReviewBatch(langParam);

  return (
    <main className="mx-auto max-w-2xl px-6 py-12 font-sans">
      <div className="mb-8 flex items-baseline justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-zinc-400">Tools</div>
          <h1 className="text-2xl font-semibold tracking-tight">Review</h1>
        </div>
        <Link
          href={`/${langParam}`}
          className="text-xs text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
        >
          ← Roadmap
        </Link>
      </div>
      <ReviewSession initial={initial} lang={langParam} />
    </main>
  );
}
