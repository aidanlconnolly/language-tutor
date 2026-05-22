import Link from "next/link";
import { getAllCards } from "@/lib/actions/deck";
import { DeckList } from "@/components/DeckList";

export const dynamic = "force-dynamic";

export default async function DeckPage() {
  const rows = await getAllCards();

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 font-sans">
      <div className="mb-8 flex items-baseline justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Deck</h1>
          <p className="mt-1 text-sm text-zinc-500">
            {rows.length === 0
              ? "No saved words yet. Head to the Reader and tap something."
              : `${rows.length} word${rows.length === 1 ? "" : "s"} saved.`}
          </p>
        </div>
        <Link
          href="/"
          className="text-xs text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
        >
          ← Home
        </Link>
      </div>

      <DeckList rows={rows} />
    </main>
  );
}
