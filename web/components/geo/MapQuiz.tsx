"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { geoMercator, geoPath } from "d3-geo";
import type { Feature } from "geojson";
import { findGame, type GeoGame } from "@/lib/geo/games";

type Status = "correct" | "missed";

function shuffle<T>(arr: T[]): T[] {
  const r = [...arr];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

function fmtTime(secs: number): string {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

const LAND = "#3f8a52";
const LAND_HOVER = "#4ea564";
const CORRECT = "#22c55e";
const MISSED = "#dc2626";

/** Resolves the game client-side (keeps the large GeoJSON out of the RSC payload). */
export function MapQuiz({ gameId }: { gameId: string }) {
  const game = findGame(gameId);
  if (!game) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-950 text-slate-300">
        Game not found.
      </div>
    );
  }
  return <MapQuizGame game={game} />;
}

function MapQuizGame({ game }: { game: GeoGame }) {
  const router = useRouter();
  const [w, h] = game.viewBox;

  // Projection + path generator, fit to the viewBox.
  const { pathFor, project, features } = useMemo(() => {
    const projection = geoMercator();
    projection.fitExtent(
      [
        [24, 24],
        [w - 24, h - 24],
      ],
      game.geo as Parameters<typeof projection.fitExtent>[1],
    );
    const gp = geoPath(projection);
    const feats: Feature[] =
      game.kind === "countries" ? (game.geo.features as Feature[]) : [game.geo];
    return {
      pathFor: (f: Feature) => gp(f) ?? "",
      project: (c: [number, number]) => projection(c),
      features: feats,
    };
  }, [game, w, h]);

  // The full list of prompt names.
  const targets = useMemo(
    () =>
      game.kind === "cities"
        ? game.cities.map((c) => c.name)
        : game.geo.features.map((f) => (f.properties?.name as string) ?? ""),
    [game],
  );

  const [order, setOrder] = useState<string[]>([]);
  const [idx, setIdx] = useState(0);
  const [statuses, setStatuses] = useState<Record<string, Status>>({});
  const [elapsed, setElapsed] = useState(0);
  const [hover, setHover] = useState<string | null>(null);

  // Start (shuffle in an effect to avoid SSR/hydration mismatch from Math.random).
  useEffect(() => {
    setOrder(shuffle(targets));
    setIdx(0);
    setStatuses({});
    setElapsed(0);
  }, [targets]);

  const started = order.length > 0;
  const finished = started && idx >= order.length;
  const current = started && !finished ? order[idx] : null;

  // Timer.
  useEffect(() => {
    if (!started || finished) return;
    const t = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(t);
  }, [started, finished]);

  function answer(clicked: string) {
    if (!current) return;
    setStatuses((s) => ({ ...s, [current]: clicked === current ? "correct" : "missed" }));
    setIdx((i) => i + 1);
  }
  function skip() {
    if (!current) return;
    setStatuses((s) => ({ ...s, [current]: "missed" }));
    setIdx((i) => i + 1);
  }
  function restart() {
    setOrder(shuffle(targets));
    setIdx(0);
    setStatuses({});
    setElapsed(0);
  }

  const answered = Object.keys(statuses).length;
  const correct = Object.values(statuses).filter((v) => v === "correct").length;
  const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;

  function fillForCountry(name: string): string {
    const st = statuses[name];
    if (st === "correct") return CORRECT;
    if (st === "missed") return MISSED;
    return hover === name ? LAND_HOVER : LAND;
  }

  return (
    <div className="flex h-screen flex-col bg-slate-950 font-sans text-slate-100">
      {/* Header */}
      <header className="flex items-center gap-3 border-b border-slate-800 bg-slate-900 px-3 py-2.5 sm:gap-4 sm:px-5">
        <div className="shrink-0 rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
          {Math.min(idx + (finished ? 0 : 1), order.length)} / {order.length || targets.length}
          <span className="mx-1.5 text-slate-600">·</span>
          {accuracy}%
        </div>
        <div className="flex min-w-0 flex-1 items-center justify-center gap-2">
          <span className="hidden text-sm text-slate-400 sm:inline">Find</span>
          <span className="truncate rounded-lg border border-sky-500/40 bg-slate-800 px-3 py-1 text-base font-bold text-white">
            {current ?? (finished ? "Done!" : "…")}
          </span>
          <button
            onClick={skip}
            disabled={!current}
            title="Skip"
            className="shrink-0 rounded-md px-1.5 py-1 text-slate-400 hover:bg-slate-800 hover:text-slate-200 disabled:opacity-40"
          >
            ⏭
          </button>
        </div>
        <div className="shrink-0 rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold tabular-nums text-slate-300">
          {fmtTime(elapsed)}
        </div>
        <button
          onClick={() => router.push("/geography")}
          title="Close"
          className="shrink-0 rounded-md p-1 text-slate-400 hover:bg-slate-800 hover:text-white"
        >
          ✕
        </button>
      </header>

      {/* Map */}
      <div className="relative flex-1 overflow-hidden bg-[#dfe3df]">
        <svg
          viewBox={`0 0 ${w} ${h}`}
          preserveAspectRatio="xMidYMid meet"
          className="h-full w-full"
        >
          {game.kind === "countries"
            ? features.map((f, i) => {
                const name = (f.properties?.name as string) ?? "";
                return (
                  <path
                    key={name || i}
                    d={pathFor(f)}
                    fill={fillForCountry(name)}
                    stroke="#dfe3df"
                    strokeWidth={0.5}
                    className="cursor-pointer transition-colors"
                    onClick={() => answer(name)}
                    onMouseEnter={() => setHover(name)}
                    onMouseLeave={() => setHover((hn) => (hn === name ? null : hn))}
                  />
                );
              })
            : (
                <>
                  <path d={pathFor(game.geo)} fill={LAND} stroke="#2f6b3f" strokeWidth={0.75} />
                  {game.cities.map((c) => {
                    const xy = project(c.coordinates);
                    if (!xy) return null;
                    const st = statuses[c.name];
                    const fill = st === "correct" ? CORRECT : st === "missed" ? MISSED : "#ffffff";
                    return (
                      <circle
                        key={c.name}
                        cx={xy[0]}
                        cy={xy[1]}
                        r={6}
                        fill={fill}
                        stroke="#1e293b"
                        strokeWidth={1.5}
                        className="cursor-pointer transition-colors hover:stroke-sky-500"
                        onClick={() => answer(c.name)}
                      />
                    );
                  })}
                </>
              )}
        </svg>

        {/* End-of-game overlay */}
        {finished && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
            <div className="w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
              <div className="text-5xl">{accuracy >= 80 ? "🏆" : accuracy >= 50 ? "👏" : "📚"}</div>
              <h2 className="mt-3 text-xl font-bold text-white">{game.title}</h2>
              <p className="mt-2 text-slate-300">
                You got <span className="font-bold text-emerald-400">{correct}</span> / {order.length}
                <span className="text-slate-500"> ({accuracy}%)</span> in {fmtTime(elapsed)}
              </p>
              <div className="mt-6 flex flex-col gap-2">
                <button
                  onClick={restart}
                  className="rounded-xl bg-sky-600 px-4 py-2.5 font-semibold text-white hover:bg-sky-500"
                >
                  Play again
                </button>
                <button
                  onClick={() => router.push("/geography")}
                  className="rounded-xl border border-slate-700 px-4 py-2.5 font-semibold text-slate-300 hover:bg-slate-800"
                >
                  Back to games
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
