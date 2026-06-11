import { db, schema } from "@/lib/db/client";
import { nanoid } from "nanoid";

export const dynamic = "force-dynamic";

type Probe =
  | { ok: true; insertedLemma: string; totalRows: number }
  | { ok: false; error: string };

async function probe(): Promise<Probe> {
  try {
    const lemma = `__debug-${nanoid(6)}`;
    await db.insert(schema.words).values({
      id: nanoid(),
      lemma,
      pos: "debug",
      translation: "debug row — safe to delete",
      definition: "Inserted by /debug to verify the Turso connection works.",
      lookedUpAt: Date.now(),
    });
    const rows = await db.select().from(schema.words);
    return { ok: true, insertedLemma: lemma, totalRows: rows.length };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

export default async function DebugPage() {
  const result = await probe();

  return (
    <main className="mx-auto max-w-2xl px-6 py-16 font-sans">
      <h1 className="text-2xl font-semibold tracking-tight">DB connection probe</h1>
      <p className="mt-2 text-sm text-zinc-500">
        Inserts a throwaway row into <code>words</code> and reads them all back.
      </p>

      {result.ok ? (
        <div className="mt-8 rounded-lg border border-emerald-300 bg-emerald-50 p-5 text-emerald-900 dark:border-emerald-700 dark:bg-emerald-950 dark:text-emerald-100">
          <p className="font-medium">✓ DB OK</p>
          <p className="mt-2 text-sm">
            Inserted lemma <code className="font-mono">{result.insertedLemma}</code>.
          </p>
          <p className="text-sm">
            Total rows in <code>words</code>: <strong>{result.totalRows}</strong>.
          </p>
          <p className="mt-3 text-xs text-emerald-700 dark:text-emerald-300">
            To clean up: <code>turso db shell italian-tutor</code> →{" "}
            <code>DELETE FROM words WHERE lemma LIKE &apos;__debug-%&apos;;</code>
          </p>
        </div>
      ) : (
        <div className="mt-8 rounded-lg border border-rose-300 bg-rose-50 p-5 text-rose-900 dark:border-rose-700 dark:bg-rose-950 dark:text-rose-100">
          <p className="font-medium">✗ DB error</p>
          <pre className="mt-2 overflow-x-auto whitespace-pre-wrap text-xs">
            {result.error}
          </pre>
          <p className="mt-3 text-xs">
            Check that <code>TURSO_DATABASE_URL</code> and{" "}
            <code>TURSO_AUTH_TOKEN</code> are set in <code>.env.local</code>, and
            that you&apos;ve run <code>npx drizzle-kit push</code>.
          </p>
        </div>
      )}
    </main>
  );
}
