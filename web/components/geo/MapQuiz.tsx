"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  // Measure the viewport so the map fills the screen on any size/orientation.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const r = entries[0].contentRect;
      setSize({ w: Math.round(r.width), h: Math.round(r.height) });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Fit the projection to the measured pixel size — recomputed on resize.
  const { pathFor, project, features } = useMemo(() => {
    if (!size.w || !size.h) {
      return {
        pathFor: (_f: Feature) => "",
        project: (_c: [number, number]) => null as [number, number] | null,
        features: [] as Feature[],
      };
    }
    const pad = 10;
    const projection = geoMercator();
    projection.fitExtent(
      [
        [pad, pad],
        [size.w - pad, size.h - pad],
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
  }, [game, size]);

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

  useEffect(() => {
    setOrder(shuffle(targets));
    setIdx(0);
    setStatuses({});
    setElapsed(0);
  }, [targets]);

  const started = order.length > 0;
  const finished = started && idx >= order.length;
  const current = started && !finished ? order[idx] : null;

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
  const dotR = Math.max(5, Math.min(size.w, size.h) / 95);

  function fillForCountry(name: string): string {
    const st = statuses[name];
    if (st === "correct") return CORRECT;
    if (st === "missed") return MISSED;
    return hover === name ? LAND_HOVER : LAND;
  }

  return (
    <div ref={containerRef} className="fixed inset-0 select-none overflow-hidden bg-[#dfe3df] font-sans">
      {/* Full-bleed map */}
      {size.w > 0 && (
        <svg
          width={size.w}
          height={size.h}
          viewBox={`0 0 ${size.w} ${size.h}`}
          className="absolute inset-0 h-full w-full"
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
                    strokeWidth={0.6}
                    className="cursor-pointer transition-colors"
                    onClick={() => answer(name)}
                    onMouseEnter={() => setHover(name)}
                    onMouseLeave={() => setHover((hn) => (hn === name ? null : hn))}
                  />
                );
              })
            : (
                <>
                  <path d={pathFor(game.geo)} fill={LAND} stroke="#2f6b3f" strokeWidth={1} />
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
                        r={dotR}
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
      )}

      {/* Top-left: progress */}
      <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-slate-900/85 px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-sm">
        {Math.min(idx + (finished ? 0 : 1), order.length)} / {order.length || targets.length}
        <span className="mx-1.5 text-slate-500">·</span>
        {accuracy}%
      </div>

      {/* Top-right: timer + close */}
      <div className="absolute right-3 top-3 flex items-center gap-2">
        <div className="rounded-full bg-slate-900/85 px-3 py-1.5 text-xs font-bold tabular-nums text-white shadow-lg backdrop-blur-sm">
          {fmtTime(elapsed)}
        </div>
        <button
          onClick={() => router.push("/geography")}
          title="Close"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/85 text-white shadow-lg backdrop-blur-sm hover:bg-slate-800"
        >
          ✕
        </button>
      </div>

      {/* Center prompt — pops up over the map */}
      {current && (
        <div className="pointer-events-none absolute inset-x-0 top-[16%] flex flex-col items-center gap-3 px-4">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-700/80">
            Find
          </div>
          <div
            key={current}
            className="geo-pop max-w-[90vw] truncate rounded-2xl bg-slate-900/90 px-7 py-3.5 text-center text-3xl font-extrabold text-white shadow-2xl ring-1 ring-white/10 sm:text-4xl"
          >
            {current}
          </div>
          <button
            onClick={skip}
            className="pointer-events-auto mt-1 rounded-full bg-white/85 px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-lg backdrop-blur-sm hover:bg-white"
          >
            Skip ⏭
          </button>
        </div>
      )}

      {/* End-of-game overlay */}
      {finished && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center text-slate-100">
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
  );
}
