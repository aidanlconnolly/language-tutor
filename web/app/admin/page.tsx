import { notFound } from "next/navigation";
import Link from "next/link";
import { eq } from "drizzle-orm";
import { db, schema } from "@/lib/db/client";
import { getSession } from "@/lib/auth";
import { getUnitOutline } from "@/lib/content";
import { LANG_LABELS, SUPPORTED_LANGS, type Lang } from "@/lib/lang";

// Always render fresh — this is a live dashboard, never cache it.
export const dynamic = "force-dynamic";

// Who may view this page. Comma-separated emails via ADMIN_EMAIL, falling back
// to the owner account.
const ADMIN_EMAILS = (process.env.ADMIN_EMAIL ?? "aidanlconnolly@gmail.com")
  .split(",")
  .map((s) => s.trim().toLowerCase())
  .filter(Boolean);

const DAY = 86_400_000;

function dayKey(ms: number): string {
  return new Date(ms).toISOString().slice(0, 10); // YYYY-MM-DD (UTC)
}

function relTime(ms: number, now: number): string {
  const diff = now - ms;
  if (diff < 0) return "just now";
  if (diff < 60_000) return "just now";
  if (diff < 3_600_000) return `${Math.floor(diff / 60_000)}m ago`;
  if (diff < DAY) return `${Math.floor(diff / 3_600_000)}h ago`;
  if (diff < 30 * DAY) return `${Math.floor(diff / DAY)}d ago`;
  return new Date(ms).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default async function AdminPage() {
  const session = await getSession();
  // Defense in depth: middleware already requires auth; this restricts to admins.
  if (!session || !ADMIN_EMAILS.includes(session.email.toLowerCase())) {
    notFound();
  }

  const [users, lessons, reads, checkpoints, cardsRows, reviewRows] = await Promise.all([
    db
      .select({ id: schema.users.id, email: schema.users.email, createdAt: schema.users.createdAt })
      .from(schema.users),
    db
      .select({
        userId: schema.lessonProgress.userId,
        language: schema.lessonProgress.language,
        unitSlug: schema.lessonProgress.unitSlug,
        completedAt: schema.lessonProgress.completedAt,
      })
      .from(schema.lessonProgress),
    db
      .select({
        userId: schema.readProgress.userId,
        language: schema.readProgress.language,
        completedAt: schema.readProgress.completedAt,
      })
      .from(schema.readProgress),
    db
      .select({
        userId: schema.checkpointAttempts.userId,
        language: schema.checkpointAttempts.language,
        takenAt: schema.checkpointAttempts.takenAt,
      })
      .from(schema.checkpointAttempts),
    db
      .select({
        userId: schema.cards.userId,
        language: schema.cards.language,
        createdAt: schema.cards.createdAt,
      })
      .from(schema.cards),
    db
      .select({
        userId: schema.cards.userId,
        language: schema.cards.language,
        reviewedAt: schema.reviews.reviewedAt,
      })
      .from(schema.reviews)
      .innerJoin(schema.cards, eq(schema.reviews.cardId, schema.cards.id)),
  ]);

  // Server component (force-dynamic): reading the clock at request time is correct here.
  // eslint-disable-next-line react-hooks/purity
  const now = Date.now();

  // ── Per-user activity model ─────────────────────────────────────────────
  // An "activity" is any lesson/read/checkpoint completion, card save, or review.
  const activeDays = new Map<string, Set<string>>(); // userId -> set of YYYY-MM-DD
  const lastActive = new Map<string, number>(); // userId -> max activity ms
  const maxActivityMs = new Map<string, number>(); // userId -> max activity ms (same as lastActive)
  const langUsers: Record<string, Set<string>> = {}; // language -> users with any activity
  for (const lang of SUPPORTED_LANGS) langUsers[lang] = new Set();

  function track(userId: string, language: string | null, ms: number) {
    const n = Number(ms);
    if (!Number.isFinite(n)) return;
    if (!activeDays.has(userId)) activeDays.set(userId, new Set());
    activeDays.get(userId)!.add(dayKey(n));
    if (n > (lastActive.get(userId) ?? 0)) lastActive.set(userId, n);
    if (language && language in langUsers) langUsers[language].add(userId);
  }
  for (const r of lessons) track(r.userId, r.language, Number(r.completedAt));
  for (const r of reads) track(r.userId, r.language, Number(r.completedAt));
  for (const r of checkpoints) track(r.userId, r.language, Number(r.takenAt));
  for (const r of cardsRows) track(r.userId, r.language, Number(r.createdAt));
  for (const r of reviewRows) track(r.userId, r.language, Number(r.reviewedAt));
  for (const [u, ms] of lastActive) maxActivityMs.set(u, ms);

  // ── Headline retention metrics ──────────────────────────────────────────
  const totalUsers = users.length;
  const activated = activeDays.size; // did at least one activity ever
  const active24h = [...lastActive.values()].filter((ms) => now - ms < DAY).length;
  const active7d = [...lastActive.values()].filter((ms) => now - ms < 7 * DAY).length;
  // Returned = active on 2+ distinct calendar days
  const returned = [...activeDays.values()].filter((s) => s.size >= 2).length;

  // D1 / D7 return: among users old enough to qualify, did they have any activity
  // at least 1 / 7 days after signup?
  let d1Elig = 0,
    d1Ret = 0,
    d7Elig = 0,
    d7Ret = 0;
  for (const u of users) {
    const su = Number(u.createdAt);
    const age = now - su;
    const gap = (maxActivityMs.get(u.id) ?? 0) - su; // how long after signup they were last active
    if (age >= DAY) {
      d1Elig++;
      if (gap >= DAY) d1Ret++;
    }
    if (age >= 7 * DAY) {
      d7Elig++;
      if (gap >= 7 * DAY) d7Ret++;
    }
  }
  const pct = (n: number, d: number) => (d === 0 ? "—" : `${Math.round((n / d) * 100)}%`);

  const sorted = [...users].sort((a, b) => Number(b.createdAt) - Number(a.createdAt));

  // ── 14-day signup + activity charts ─────────────────────────────────────
  const days: { key: string; label: string; signups: number; active: number }[] = [];
  for (let i = 13; i >= 0; i--) {
    const ms = now - i * DAY;
    days.push({
      key: dayKey(ms),
      label: new Date(ms).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      signups: 0,
      active: 0,
    });
  }
  const dayIndex = new Map(days.map((d, i) => [d.key, i]));
  for (const u of users) {
    const idx = dayIndex.get(dayKey(Number(u.createdAt)));
    if (idx !== undefined) days[idx].signups++;
  }
  // Distinct active users per day (each user contributes ≤1 per day via their day-set)
  for (const set of activeDays.values()) {
    for (const k of set) {
      const idx = dayIndex.get(k);
      if (idx !== undefined) days[idx].active++;
    }
  }
  const maxSignup = Math.max(1, ...days.map((d) => d.signups));
  const maxActive = Math.max(1, ...days.map((d) => d.active));

  // ── Roadmap drop-off funnel (distinct users who completed ≥1 lesson per unit) ──
  const lessonUnitUsers = new Map<string, Map<string, Set<string>>>(); // lang -> unitSlug -> users
  for (const l of lessons) {
    if (!lessonUnitUsers.has(l.language)) lessonUnitUsers.set(l.language, new Map());
    const m = lessonUnitUsers.get(l.language)!;
    if (!m.has(l.unitSlug)) m.set(l.unitSlug, new Set());
    m.get(l.unitSlug)!.add(l.userId);
  }
  const funnels = SUPPORTED_LANGS.map((lang) => {
    const m = lessonUnitUsers.get(lang);
    if (!m || m.size === 0) return null;
    const outline = [...getUnitOutline(lang as Lang)].sort((a, b) => a.order - b.order);
    const rows = outline.map((u) => ({
      slug: u.slug,
      order: u.order,
      title: u.title,
      count: m.get(u.slug)?.size ?? 0,
    }));
    // Trim to the furthest unit anyone has reached
    let lastIdx = -1;
    rows.forEach((r, i) => {
      if (r.count > 0) lastIdx = i;
    });
    if (lastIdx < 0) return null;
    return { lang, rows: rows.slice(0, lastIdx + 1) };
  }).filter(Boolean) as { lang: string; rows: { slug: string; order: number; title: string; count: number }[] }[];

  const statCards = [
    { label: "Total users", value: totalUsers },
    { label: "Activated", value: activated, hint: "did ≥1 activity" },
    { label: "Active 24h", value: active24h },
    { label: "Active 7d", value: active7d },
    { label: "Returned", value: returned, hint: "active on 2+ days" },
    { label: "D1 return", value: pct(d1Ret, d1Elig), hint: `${d1Ret}/${d1Elig} eligible` },
    { label: "D7 return", value: pct(d7Ret, d7Elig), hint: `${d7Ret}/${d7Elig} eligible` },
    { label: "Lessons done", value: lessons.length },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 font-sans sm:px-6 sm:py-10">
      <header className="mb-8">
        <Link href="/" className="mb-4 inline-block text-xs text-zinc-400 hover:text-amber-700">
          ← Home
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">Growth &amp; retention</h1>
        <p className="mt-1 text-sm text-zinc-500">Live from the user database.</p>
      </header>

      {/* Stat cards */}
      <section className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {statCards.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="text-2xl font-bold tabular-nums">{s.value}</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500">{s.label}</div>
            {s.hint && <div className="mt-0.5 text-[10px] text-zinc-400">{s.hint}</div>}
          </div>
        ))}
      </section>

      {/* Signups + active charts */}
      <section className="mb-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Signups · last 14 days
          </h2>
          <div className="flex h-32 items-end gap-1.5">
            {days.map((d) => (
              <div key={d.key} className="flex flex-1 flex-col items-center gap-1">
                <div className="text-[10px] tabular-nums text-zinc-400">{d.signups || ""}</div>
                <div
                  className="w-full rounded-t bg-amber-500/80"
                  style={{ height: `${(d.signups / maxSignup) * 100}%`, minHeight: d.signups ? 4 : 0 }}
                  title={`${d.label}: ${d.signups}`}
                />
                <div className="text-[9px] text-zinc-400">{d.label.split(" ")[1]}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Active users · last 14 days
          </h2>
          <div className="flex h-32 items-end gap-1.5">
            {days.map((d) => (
              <div key={d.key} className="flex flex-1 flex-col items-center gap-1">
                <div className="text-[10px] tabular-nums text-zinc-400">{d.active || ""}</div>
                <div
                  className="w-full rounded-t bg-emerald-500/80"
                  style={{ height: `${(d.active / maxActive) * 100}%`, minHeight: d.active ? 4 : 0 }}
                  title={`${d.label}: ${d.active} active`}
                />
                <div className="text-[9px] text-zinc-400">{d.label.split(" ")[1]}</div>
              </div>
            ))}
          </div>
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
              <span className="font-semibold">{langUsers[lang].size}</span>{" "}
              <span className="text-zinc-500">{LANG_LABELS[lang as Lang]}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap drop-off funnel */}
      {funnels.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-1 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Roadmap drop-off
          </h2>
          <p className="mb-4 text-xs text-zinc-400">
            Distinct learners who completed ≥1 lesson in each unit, in order. Watch where the bars fall off.
          </p>
          <div className="space-y-6">
            {funnels.map((f) => {
              const top = Math.max(1, ...f.rows.map((r) => r.count));
              return (
                <div key={f.lang}>
                  <div className="mb-2 text-xs font-medium text-zinc-500">{LANG_LABELS[f.lang as Lang]}</div>
                  <div className="space-y-1">
                    {f.rows.map((r) => (
                      <div key={r.slug} className="flex items-center gap-2 text-xs">
                        <div className="w-28 shrink-0 truncate text-zinc-500" title={r.title}>
                          {r.order}. {r.title}
                        </div>
                        <div className="h-3.5 flex-1 rounded bg-zinc-100 dark:bg-zinc-800">
                          <div
                            className="h-3.5 rounded bg-sky-500/80"
                            style={{ width: `${(r.count / top) * 100}%`, minWidth: r.count ? 6 : 0 }}
                          />
                        </div>
                        <div className="w-6 shrink-0 text-right tabular-nums text-zinc-400">{r.count}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

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
                <th className="px-4 py-3 font-medium">Last active</th>
                <th className="px-4 py-3 font-medium">Learning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {sorted.map((u) => {
                const langs = SUPPORTED_LANGS.filter((l) => langUsers[l].has(u.id))
                  .map((l) => LANG_LABELS[l as Lang])
                  .join(", ");
                const la = lastActive.get(u.id);
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
                    <td className="px-4 py-3 tabular-nums text-zinc-500">
                      {la ? relTime(la, now) : "—"}
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
