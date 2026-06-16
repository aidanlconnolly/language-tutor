import { notFound } from "next/navigation";
import Link from "next/link";
import { db, schema } from "@/lib/db/client";
import { getSession } from "@/lib/auth";
import { LANG_LABELS, SUPPORTED_LANGS, type Lang } from "@/lib/lang";

// Always render fresh — this is a live dashboard, never cache it.
export const dynamic = "force-dynamic";

// Who may view this page. Comma-separated emails via ADMIN_EMAIL, falling back
// to the owner account.
const ADMIN_EMAILS = (process.env.ADMIN_EMAIL ?? "aidanlconnolly@gmail.com")
  .split(",")
  .map((s) => s.trim().toLowerCase())
  .filter(Boolean);

function dayKey(ms: number): string {
  return new Date(ms).toISOString().slice(0, 10); // YYYY-MM-DD (UTC)
}

export default async function AdminPage() {
  const session = await getSession();
  // Defense in depth: middleware already requires auth; this restricts to admins.
  if (!session || !ADMIN_EMAILS.includes(session.email.toLowerCase())) {
    notFound();
  }

  const [users, progress] = await Promise.all([
    db
      .select({ id: schema.users.id, email: schema.users.email, createdAt: schema.users.createdAt })
      .from(schema.users),
    db
      .select({ userId: schema.lessonProgress.userId, language: schema.lessonProgress.language })
      .from(schema.lessonProgress),
  ]);

  // userId -> set of languages they've started a lesson in
  const langsByUser = new Map<string, Set<string>>();
  for (const p of progress) {
    if (!langsByUser.has(p.userId)) langsByUser.set(p.userId, new Set());
    langsByUser.get(p.userId)!.add(p.language);
  }

  const sorted = [...users].sort((a, b) => Number(b.createdAt) - Number(a.createdAt));

  // Server component (force-dynamic): reading the clock at request time is correct here.
  // eslint-disable-next-line react-hooks/purity
  const now = Date.now();
  const DAY = 86_400_000;
  const last24h = users.filter((u) => now - Number(u.createdAt) < DAY).length;
  const last7d = users.filter((u) => now - Number(u.createdAt) < 7 * DAY).length;

  // Per-language active learners (started ≥1 lesson)
  const activeByLang: Record<string, number> = {};
  for (const lang of SUPPORTED_LANGS) activeByLang[lang] = 0;
  for (const set of langsByUser.values()) {
    for (const lang of set) if (lang in activeByLang) activeByLang[lang]++;
  }

  // 14-day signup chart
  const days: { key: string; label: string; count: number }[] = [];
  for (let i = 13; i >= 0; i--) {
    const ms = now - i * DAY;
    const key = dayKey(ms);
    days.push({ key, label: new Date(ms).toLocaleDateString("en-US", { month: "short", day: "numeric" }), count: 0 });
  }
  const dayIndex = new Map(days.map((d, i) => [d.key, i]));
  for (const u of users) {
    const idx = dayIndex.get(dayKey(Number(u.createdAt)));
    if (idx !== undefined) days[idx].count++;
  }
  const maxDay = Math.max(1, ...days.map((d) => d.count));

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 font-sans sm:px-6 sm:py-10">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <Link href="/" className="mb-4 inline-block text-xs text-zinc-400 hover:text-amber-700">
            ← Home
          </Link>
          <h1 className="text-2xl font-bold tracking-tight">Signups</h1>
          <p className="mt-1 text-sm text-zinc-500">Live from the user database.</p>
        </div>
      </header>

      {/* Stat cards */}
      <section className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "Total users", value: users.length },
          { label: "Last 24h", value: last24h },
          { label: "Last 7 days", value: last7d },
          { label: "Started a lesson", value: langsByUser.size },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="text-2xl font-bold tabular-nums">{s.value}</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500">{s.label}</div>
          </div>
        ))}
      </section>

      {/* 14-day chart */}
      <section className="mb-10">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
          Signups · last 14 days
        </h2>
        <div className="flex h-32 items-end gap-1.5">
          {days.map((d) => (
            <div key={d.key} className="flex flex-1 flex-col items-center gap-1">
              <div className="text-[10px] tabular-nums text-zinc-400">{d.count || ""}</div>
              <div
                className="w-full rounded-t bg-amber-500/80"
                style={{ height: `${(d.count / maxDay) * 100}%`, minHeight: d.count ? 4 : 0 }}
                title={`${d.label}: ${d.count}`}
              />
              <div className="text-[9px] text-zinc-400">{d.label.split(" ")[1]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Per-language */}
      <section className="mb-10">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
          Active learners by language
        </h2>
        <div className="flex flex-wrap gap-3">
          {SUPPORTED_LANGS.map((lang) => (
            <div
              key={lang}
              className="rounded-lg border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-800"
            >
              <span className="font-semibold">{activeByLang[lang]}</span>{" "}
              <span className="text-zinc-500">{LANG_LABELS[lang as Lang]}</span>
            </div>
          ))}
        </div>
      </section>

      {/* User table */}
      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
          All users ({users.length})
        </h2>
        <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-50 text-xs uppercase tracking-wider text-zinc-500 dark:bg-zinc-900">
              <tr>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Signed up</th>
                <th className="px-4 py-3 font-medium">Learning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {sorted.map((u) => {
                const langs = [...(langsByUser.get(u.id) ?? [])]
                  .map((l) => LANG_LABELS[l as Lang] ?? l)
                  .join(", ");
                return (
                  <tr key={u.id}>
                    <td className="px-4 py-3 font-medium">{u.email}</td>
                    <td className="px-4 py-3 tabular-nums text-zinc-500">
                      {new Date(Number(u.createdAt)).toLocaleString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="px-4 py-3 text-zinc-500">{langs || "—"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
