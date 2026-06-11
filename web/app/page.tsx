import Link from "next/link";
import { getDailyStats } from "@/lib/actions/review";
import { getRoadmapSummary } from "@/lib/actions/progress";
import { SUPPORTED_LANGS, LANG_LABELS, LANG_FLAGS, type Lang } from "@/lib/lang";
import { getUnits } from "@/lib/content";

export const dynamic = "force-dynamic";

type LangStats = {
  lang: Lang;
  lessonsCompleted: number;
  totalLessons: number;
  lessonStreak: number;
  dueCards: number;
  deckSize: number;
};

async function getLangStats(lang: Lang): Promise<LangStats> {
  const units = getUnits(lang);
  const totalLessons = units.reduce((s, u) => s + u.lessons.length, 0);
  try {
    const [summary, stats] = await Promise.all([
      getRoadmapSummary(lang),
      getDailyStats(lang),
    ]);
    return {
      lang,
      lessonsCompleted: summary.totalLessons,
      totalLessons,
      lessonStreak: summary.lessonStreak,
      dueCards: stats.dueNow,
      deckSize: stats.deckSize,
    };
  } catch {
    return { lang, lessonsCompleted: 0, totalLessons, lessonStreak: 0, dueCards: 0, deckSize: 0 };
  }
}

export default async function Home() {
  const langStats = await Promise.all(SUPPORTED_LANGS.map(getLangStats));

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Allora
          </h1>
          <p className="mt-2 text-slate-400 text-sm">
            A0 → B1 in Italian, French and Spanish. Ten minutes a day.
          </p>
        </header>

        <div className="space-y-4">
          {langStats.map((s) => (
            <LangCard key={s.lang} stats={s} />
          ))}
        </div>
      </div>
    </main>
  );
}

function LangCard({ stats }: { stats: LangStats }) {
  const { lang, lessonsCompleted, totalLessons, lessonStreak, dueCards, deckSize } = stats;
  const pct = totalLessons > 0 ? Math.round((lessonsCompleted / totalLessons) * 100) : 0;
  const flag = LANG_FLAGS[lang];
  const label = LANG_LABELS[lang];

  return (
    <Link
      href={`/${lang}`}
      className="block rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all hover:border-sky-700 hover:bg-slate-800"
    >
      <div className="flex items-center gap-4">
        <div className="text-4xl">{flag}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between gap-2">
            <span className="font-semibold text-white text-lg">{label}</span>
            <span className="text-xs text-slate-400 shrink-0">{pct}% complete</span>
          </div>

          {/* Progress bar */}
          <div className="mt-2 h-1.5 w-full rounded-full bg-slate-700">
            <div
              className="h-1.5 rounded-full bg-sky-500 transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>

          {/* Mini stats */}
          <div className="mt-3 flex gap-5 text-xs text-slate-400">
            <span>
              <span className="font-medium text-slate-200">{lessonsCompleted}</span>
              <span className="text-slate-500">/{totalLessons}</span> lessons
            </span>
            {lessonStreak > 0 && (
              <span>
                <span className="font-medium text-slate-200">{lessonStreak}</span> day streak 🔥
              </span>
            )}
            {dueCards > 0 && (
              <span>
                <span className="font-medium text-amber-400">{dueCards}</span> cards due
              </span>
            )}
            {deckSize > 0 && (
              <span>
                <span className="font-medium text-slate-200">{deckSize}</span> in deck
              </span>
            )}
          </div>
        </div>
        <div className="text-slate-500 text-sm shrink-0">→</div>
      </div>
    </Link>
  );
}
