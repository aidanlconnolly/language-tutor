import Link from "next/link";
import { GEO_GAMES, type GeoGame } from "@/lib/geo/games";

export const metadata = { title: "Geography · Allora" };

export default function GeographyHome() {
  const continents = GEO_GAMES.filter((g) => g.region === "continent");
  const countries = GEO_GAMES.filter((g) => g.region === "country");
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

        <Section title="Continents" games={continents} />
        <Section title="Cities" games={countries} />
      </div>
    </main>
  );
}

function Section({ title, games }: { title: string; games: GeoGame[] }) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {games.map((g) => (
          <Link
            key={g.id}
            href={`/geography/${g.id}`}
            className="block rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all hover:border-sky-700 hover:bg-slate-800"
          >
            <div className="text-4xl">{g.emoji}</div>
            <div className="mt-3 text-lg font-semibold text-white">{g.title}</div>
            <div className="mt-0.5 text-sm text-slate-400">{g.subtitle}</div>
            <div className="mt-3 text-xs font-medium text-slate-500">
              {g.count} {g.kind === "cities" ? "cities" : "countries"}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
