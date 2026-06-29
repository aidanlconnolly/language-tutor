import Link from "next/link";
import { GEO_GAMES } from "@/lib/geo/games";

export const metadata = { title: "Geography · Allora" };

export default function GeographyHome() {
  return (
    <main className="min-h-screen bg-slate-950 font-sans text-slate-100">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <header className="mb-8">
          <Link href="/" className="text-sm text-slate-400 hover:text-slate-200">
            ← Home
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white">Geography 🌍</h1>
          <p className="mt-1 text-sm text-slate-400">
            Learn not just the language, but the countries.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2">
          {GEO_GAMES.map((g) => {
            const count =
              g.kind === "cities" ? `${g.cities.length} cities` : `${g.geo.features.length} countries`;
            return (
              <Link
                key={g.id}
                href={`/geography/${g.id}`}
                className="block rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all hover:border-sky-700 hover:bg-slate-800"
              >
                <div className="text-4xl">{g.emoji}</div>
                <div className="mt-3 text-lg font-semibold text-white">{g.title}</div>
                <div className="mt-0.5 text-sm text-slate-400">{g.subtitle}</div>
                <div className="mt-3 text-xs font-medium text-slate-500">{count}</div>
              </Link>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-slate-600">
          More countries and continents coming soon.
        </p>
      </div>
    </main>
  );
}
