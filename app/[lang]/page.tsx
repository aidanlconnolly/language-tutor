import Link from "next/link";
import { notFound } from "next/navigation";
import { getDailyStats } from "@/lib/actions/review";
import { getAllReadProgress, getRoadmapSummary } from "@/lib/actions/progress";
import { findRead, pickTodaysRead, getStages, getUnitOutline, getUnits } from "@/lib/content";
import { Roadmap } from "@/components/Roadmap";
import { isValidLang, LANG_LABELS, LANG_FLAGS } from "@/lib/lang";

export const dynamic = "force-dynamic";

export default async function LangHome({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  if (!isValidLang(langParam)) notFound();

  type StatsBlock = Awaited<ReturnType<typeof getDailyStats>>;
  type SummaryBlock = Awaited<ReturnType<typeof getRoadmapSummary>>;
  let stats: StatsBlock | { error: string } | null = null;
  let summary: SummaryBlock | { error: string } | null = null;
  try {
    stats = await getDailyStats(langParam);
  } catch (err) {
    stats = { error: err instanceof Error ? err.message : String(err) };
  }
  try {
    summary = await getRoadmapSummary(langParam);
  } catch (err) {
    summary = { error: err instanceof Error ? err.message : String(err) };
  }

  let pastReads: { slug: string; titleL1: string; titleEn: string; completedAt: number; score: number }[] = [];
  try {
    const rows = await getAllReadProgress(langParam);
    pastReads = rows
      .map((r) => {
        const meta = findRead(langParam, r.readSlug);
        if (!meta) return null;
        return {
          slug: r.readSlug,
          titleL1: meta.titleL1,
          titleEn: meta.titleEn,
          completedAt: r.completedAt,
          score: r.comprehensionScore,
        };
      })
      .filter((r): r is NonNullable<typeof r> => r !== null)
      .sort((a, b) => b.completedAt - a.completedAt);
  } catch {
    pastReads = [];
  }

  const readsCompleted =
    summary && !("error" in summary) ? summary.readsCompleted.size : 0;
  const todaysRead = pickTodaysRead(langParam, readsCompleted);
  const readDoneToday =
    summary && !("error" in summary)
      ? summary.readsCompleted.has(todaysRead.slug)
      : false;

  const flag = LANG_FLAGS[langParam];
  const label = LANG_LABELS[langParam];

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 font-sans sm:px-6 sm:py-10">
      <header className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <Link href="/" className="text-xs text-zinc-500 hover:text-amber-700 dark:hover:text-amber-500 mb-1 inline-block">
            ← All languages
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">{flag} {label}</h1>
          <p className="mt-1 text-sm text-zinc-500">
            A0 to B1, ten minutes a day.
          </p>
        </div>
        <nav className="-mx-1 flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-zinc-500">
          <Link href={`/${langParam}/read`} className="px-1 py-1 hover:text-amber-700">
            Daily read
          </Link>
          <Link href={`/${langParam}/tools/reader`} className="px-1 py-1 hover:text-amber-700">
            Reader
          </Link>
          <Link href={`/${langParam}/tools/review`} className="px-1 py-1 hover:text-amber-700">
            Review
          </Link>
          <Link href={`/${langParam}/tools/deck`} className="px-1 py-1 hover:text-amber-700">
            Deck
          </Link>
        </nav>
      </header>

      {/* Stats strip */}
      <section className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-5">
        <StatCard
          label="Lesson streak"
          value={
            summary && !("error" in summary) ? `${summary.lessonStreak}🔥` : "—"
          }
        />
        <StatCard
          label="Lessons done"
          value={
            summary && !("error" in summary)
              ? `${summary.totalLessons} / ${summary.totalAuthoredLessons}`
              : "—"
          }
        />
        <StatCard
          label="Read streak"
          value={
            summary && !("error" in summary) ? `${summary.readStreak}📖` : "—"
          }
        />
        <StatCard
          label="Due cards"
          value={stats && !("error" in stats) ? `${stats.dueNow}` : "—"}
        />
        <StatCard
          label="Deck size"
          value={stats && !("error" in stats) ? `${stats.deckSize}` : "—"}
        />
      </section>

      {/* Today's read CTA */}
      <section className="mb-10">
        <Link
          href={`/${langParam}/read/${todaysRead.slug}`}
          className="block rounded-2xl border border-amber-300 bg-gradient-to-br from-amber-50 to-white p-5 transition-shadow hover:shadow-lg dark:border-amber-800 dark:from-amber-950/30 dark:to-zinc-950"
        >
          <div className="flex items-start gap-4">
            <div className="text-3xl">📖</div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">
                <span>
                  Today&apos;s 10-minute read {readDoneToday ? "· ✓ done" : ""}
                </span>
                <DifficultyBadge value={todaysRead.difficulty} />
              </div>
              <div className="mt-1 font-serif text-lg font-semibold">
                {todaysRead.titleL1}
              </div>
              <div className="text-xs italic text-zinc-500">
                {todaysRead.titleEn}
              </div>
              <div className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
                Side-by-side {label} and English. Tap any word to save it.
              </div>
            </div>
            <div className="hidden text-xs font-semibold text-amber-700 dark:text-amber-400 sm:block">
              {readDoneToday ? "Re-read →" : "Start →"}
            </div>
          </div>
        </Link>
      </section>

      {/* Past reads */}
      {pastReads.length > 0 && (
        <details className="group mb-10">
          <summary className="flex cursor-pointer list-none items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-amber-700">
            <span className="transition-transform group-open:rotate-90">▸</span>
            Past reads · {pastReads.length}
          </summary>
          <ul className="mt-3 divide-y divide-zinc-200 rounded-lg border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-950">
            {pastReads.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/${langParam}/read/${r.slug}`}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-amber-50 dark:hover:bg-amber-950/20"
                >
                  <span className="text-emerald-600 dark:text-emerald-400">✓</span>
                  <span className="flex-1 min-w-0">
                    <span className="block truncate font-serif">
                      {r.titleL1}
                    </span>
                    <span className="block truncate text-[11px] italic text-zinc-500">
                      {r.titleEn}
                    </span>
                  </span>
                  <span className="shrink-0 text-[11px] text-zinc-500">
                    {formatDate(r.completedAt)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </details>
      )}

      {/* Errors */}
      {stats && "error" in stats && (
        <div className="mb-6 rounded-lg border border-amber-300 bg-amber-50 p-4 text-xs text-amber-900 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-200">
          <strong>Stats unavailable:</strong> {stats.error}
        </div>
      )}
      {summary && "error" in summary && (
        <div className="mb-6 rounded-lg border border-amber-300 bg-amber-50 p-4 text-xs text-amber-900 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-200">
          <strong>Progress unavailable:</strong> {summary.error}
        </div>
      )}

      {/* Roadmap */}
      <Roadmap
        lang={langParam}
        stages={getStages(langParam)}
        unitOutline={getUnitOutline(langParam)}
        builtUnits={getUnits(langParam)}
        data={{
          unitsCompleted:
            summary && !("error" in summary)
              ? Array.from(summary.unitSlugsCompleted)
              : [],
          lessonsCompleted:
            summary && !("error" in summary)
              ? Array.from(summary.lessonsCompleted)
              : [],
        }}
      />
    </main>
  );
}

function DifficultyBadge({ value }: { value: number }) {
  const tone =
    value <= 5
      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300"
      : value <= 7
        ? "bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300"
        : "bg-rose-100 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300";
  const formatted = value % 1 === 0 ? value.toFixed(0) : value.toFixed(1);
  return (
    <span
      className={["rounded-full px-2 py-0.5 text-[10px] font-bold", tone].join(" ")}
      title={`Difficulty: ${formatted} / 10`}
    >
      {formatted}/10
    </span>
  );
}

function formatDate(ts: number): string {
  const d = new Date(ts);
  const now = new Date();
  const sameYear = d.getFullYear() === now.getFullYear();
  return d.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    ...(sameYear ? {} : { year: "numeric" }),
  });
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-3 text-center dark:border-zinc-800 dark:bg-zinc-950">
      <div className="font-serif text-2xl font-semibold">{value}</div>
      <div className="mt-0.5 text-[10px] uppercase tracking-wider text-zinc-500">
        {label}
      </div>
    </div>
  );
}
