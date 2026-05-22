import Link from "next/link";
import { getDailyStats } from "@/lib/actions/review";

export const dynamic = "force-dynamic";

const links = [
  { href: "/reader", label: "Reader", desc: "Paste Italian text → tap words" },
  { href: "/review", label: "Review", desc: "Today's due flashcards" },
  { href: "/deck", label: "Deck", desc: "Browse saved words" },
  { href: "/debug", label: "Debug", desc: "Verify Turso connection" },
];

export default async function Home() {
  let stats:
    | Awaited<ReturnType<typeof getDailyStats>>
    | { error: string }
    | null = null;
  try {
    stats = await getDailyStats();
  } catch (err) {
    stats = { error: err instanceof Error ? err.message : String(err) };
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-16 font-sans">
      <h1 className="text-3xl font-semibold tracking-tight">Italian Tutor</h1>
      <p className="mt-2 text-sm text-zinc-500">
        Personal A2–B1 reading + spaced repetition.
      </p>

      {stats && "error" in stats ? (
        <div className="mt-8 rounded-lg border border-amber-300 bg-amber-50 p-4 text-xs text-amber-900 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-200">
          <strong>Stats unavailable:</strong> {stats.error}
          <div className="mt-1 opacity-70">
            (Set up Turso credentials in <code>.env.local</code> — see{" "}
            <code>.env.local.example</code>.)
          </div>
        </div>
      ) : stats ? (
        <Stats stats={stats} />
      ) : null}

      <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {links.map(({ href, label, desc }) => (
          <li key={href}>
            <Link
              href={href}
              className="block rounded-lg border border-zinc-300 p-4 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              <div className="text-base font-medium">{label}</div>
              <div className="mt-1 text-xs text-zinc-500">{desc}</div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

function Stats({
  stats,
}: {
  stats: Awaited<ReturnType<typeof getDailyStats>>;
}) {
  const cells = [
    { label: "Due now", value: stats.dueNow },
    { label: "Reviewed today", value: stats.reviewedToday },
    { label: "Deck size", value: stats.deckSize },
    {
      label: "7d retention",
      value:
        stats.retention7d === null
          ? "—"
          : `${Math.round(stats.retention7d * 100)}%`,
    },
  ];
  return (
    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {cells.map(({ label, value }) => (
        <div
          key={label}
          className="rounded-lg border border-zinc-200 bg-white p-3 text-center dark:border-zinc-800 dark:bg-zinc-950"
        >
          <div className="font-serif text-2xl font-semibold">{value}</div>
          <div className="mt-0.5 text-[10px] uppercase tracking-wider text-zinc-500">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
