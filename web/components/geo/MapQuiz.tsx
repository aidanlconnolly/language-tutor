"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { geoMercator, geoPath } from "d3-geo";
import type { Feature, FeatureCollection } from "geojson";
import { findGame, type GeoGame, type GeoData } from "@/lib/geo/games";

type Status = "correct" | "missed";
type View = { k: number; x: number; y: number };
type Pt = { x: number; y: number };

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
const REVEAL = "#f59e0b"; // amber — shows where the answer was on a miss

const MAX_TRIES = 3;
// Points earned by how many wrong clicks preceded the correct one.
const POINTS = [100, 60, 30];
const MAX_ZOOM = 8;

/** Resolves the game + lazily loads its GeoJSON client-side (keeps the large
 *  data out of the RSC payload and out of sibling routes). */
export function MapQuiz({ gameId }: { gameId: string }) {
  const game = findGame(gameId);
  const [geo, setGeo] = useState<GeoData | null>(null);
  useEffect(() => {
    if (!game) return;
    let live = true;
    game.load().then((g) => {
      if (live) setGeo(g);
    });
    return () => {
      live = false;
    };
  }, [game]);
  if (!game) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-950 text-slate-300">
        Game not found.
      </div>
    );
  }
  if (!geo) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#dfe3df] text-sm font-semibold text-slate-600">
        Loading map…
      </div>
    );
  }
  return <MapQuizGame game={game} geo={geo} />;
}

function MapQuizGame({ game, geo }: { game: GeoGame; geo: GeoData }) {
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
    if (game.rotate) projection.rotate(game.rotate);
    projection.fitExtent(
      [
        [pad, pad],
        [size.w - pad, size.h - pad],
      ],
      geo as Parameters<typeof projection.fitExtent>[1],
    );
    const gp = geoPath(projection);
    const feats: Feature[] =
      game.kind === "countries" ? ((geo as FeatureCollection).features as Feature[]) : [geo as Feature];
    return {
      pathFor: (f: Feature) => gp(f) ?? "",
      project: (c: [number, number]) => projection(c),
      features: feats,
    };
  }, [game, geo, size]);

  // Stable ref: a bare `game.cities ?? []` makes a fresh [] every render, which
  // invalidates the `targets` memo → the `[targets]` effect re-runs resetGame →
  // infinite render loop (breaks countries games, which have no `cities`).
  const cities = useMemo(() => game.cities ?? [], [game]);
  const targets = useMemo(
    () =>
      game.kind === "cities"
        ? cities.map((c) => c.name)
        : (geo as FeatureCollection).features.map((f) => (f.properties?.name as string) ?? ""),
    [game, geo, cities],
  );

  const [order, setOrder] = useState<string[]>([]);
  const [idx, setIdx] = useState(0);
  const [results, setResults] = useState<Record<string, Status>>({});
  const [score, setScore] = useState(0);
  const [wrongPicks, setWrongPicks] = useState<string[]>([]); // wrong clicks for the current target
  const [reveal, setReveal] = useState<string | null>(null); // briefly show the answer after a miss
  const [flash, setFlash] = useState<{ pts: number; key: number } | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [hover, setHover] = useState<string | null>(null);
  const revealTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ---- Zoom & pan ----
  const [view, setView] = useState<View>({ k: 1, x: 0, y: 0 });
  const pointers = useRef<Map<number, Pt>>(new Map());
  const pinchRef = useRef<{ dist: number; cx: number; cy: number } | null>(null);
  const downRef = useRef<Pt | null>(null);
  const movedRef = useRef(false);

  const clampN = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));
  function clampView(v: View): View {
    return { k: v.k, x: clampN(v.x, (1 - v.k) * size.w, 0), y: clampN(v.y, (1 - v.k) * size.h, 0) };
  }
  function zoomAbout(v: View, factor: number, px: number, py: number): View {
    const k = clampN(v.k * factor, 1, MAX_ZOOM);
    const rf = k / v.k;
    return clampView({ k, x: px - rf * (px - v.x), y: py - rf * (py - v.y) });
  }
  const dist = (a: Pt, b: Pt) => Math.hypot(a.x - b.x, a.y - b.y);

  // Wheel / trackpad-pinch zoom (non-passive so we can prevent browser zoom).
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    function onWheel(e: WheelEvent) {
      e.preventDefault();
      const factor = e.deltaY < 0 ? 1.12 : 1 / 1.12;
      setView((v) => zoomAbout(v, factor, e.clientX, e.clientY));
    }
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size.w, size.h]);

  function onPointerDown(e: React.PointerEvent) {
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.current.size === 1) {
      downRef.current = { x: e.clientX, y: e.clientY };
      movedRef.current = false;
    } else if (pointers.current.size === 2) {
      const p = [...pointers.current.values()];
      pinchRef.current = { dist: dist(p[0], p[1]), cx: (p[0].x + p[1].x) / 2, cy: (p[0].y + p[1].y) / 2 };
    }
  }
  function onPointerMove(e: React.PointerEvent) {
    const prev = pointers.current.get(e.pointerId);
    if (!prev) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const n = pointers.current.size;
    if (n === 1) {
      if (downRef.current && Math.hypot(e.clientX - downRef.current.x, e.clientY - downRef.current.y) > 6) {
        movedRef.current = true;
      }
      if (movedRef.current) {
        const dx = e.clientX - prev.x;
        const dy = e.clientY - prev.y;
        setView((v) => clampView({ ...v, x: v.x + dx, y: v.y + dy }));
      }
    } else if (n === 2 && pinchRef.current) {
      movedRef.current = true;
      const p = [...pointers.current.values()];
      const nd = dist(p[0], p[1]);
      const ncx = (p[0].x + p[1].x) / 2;
      const ncy = (p[0].y + p[1].y) / 2;
      const factor = nd / pinchRef.current.dist;
      const panX = ncx - pinchRef.current.cx;
      const panY = ncy - pinchRef.current.cy;
      setView((v) => {
        const k = clampN(v.k * factor, 1, MAX_ZOOM);
        const rf = k / v.k;
        return clampView({ k, x: ncx - rf * (ncx - v.x) + panX, y: ncy - rf * (ncy - v.y) + panY });
      });
      pinchRef.current = { dist: nd, cx: ncx, cy: ncy };
    }
  }
  function endPointer(e: React.PointerEvent) {
    pointers.current.delete(e.pointerId);
    if (pointers.current.size < 2) pinchRef.current = null;
    if (pointers.current.size === 0) downRef.current = null;
  }

  function resetGame() {
    if (revealTimer.current) clearTimeout(revealTimer.current);
    setOrder(shuffle(targets));
    setIdx(0);
    setResults({});
    setScore(0);
    setWrongPicks([]);
    setReveal(null);
    setFlash(null);
    setElapsed(0);
    setView({ k: 1, x: 0, y: 0 });
  }

  useEffect(() => {
    resetGame();
    return () => {
      if (revealTimer.current) clearTimeout(revealTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targets]);

  const started = order.length > 0;
  const finished = started && idx >= order.length;
  const current = started && !finished ? order[idx] : null;
  const triesLeft = MAX_TRIES - wrongPicks.length;

  useEffect(() => {
    if (!started || finished) return;
    const t = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(t);
  }, [started, finished]);

  function advance() {
    setWrongPicks([]);
    setIdx((i) => i + 1);
  }

  function answer(clicked: string) {
    if (movedRef.current) return; // a pan/pinch just happened — not a guess
    if (!current || reveal) return; // locked while revealing the previous answer
    if (clicked === current) {
      const pts = POINTS[Math.min(wrongPicks.length, POINTS.length - 1)];
      setScore((s) => s + pts);
      setResults((r) => ({ ...r, [current]: "correct" }));
      setFlash({ pts, key: idx });
      advance();
      return;
    }
    // Wrong click — record it; flash red. Out of tries → reveal & move on.
    const usedAfter = wrongPicks.includes(clicked) ? wrongPicks.length : wrongPicks.length + 1;
    setWrongPicks((w) => (w.includes(clicked) ? w : [...w, clicked]));
    if (usedAfter >= MAX_TRIES) {
      setResults((r) => ({ ...r, [current]: "missed" }));
      setFlash({ pts: 0, key: idx });
      setReveal(current);
      revealTimer.current = setTimeout(() => {
        setReveal(null);
        advance();
      }, 1100);
    }
  }

  function skip() {
    if (!current || reveal) return;
    setResults((r) => ({ ...r, [current]: "missed" }));
    setFlash({ pts: 0, key: idx });
    setReveal(current);
    revealTimer.current = setTimeout(() => {
      setReveal(null);
      advance();
    }, 1000);
  }

  const correctCount = Object.values(results).filter((v) => v === "correct").length;
  const dotR = Math.max(5, Math.min(size.w, size.h) / 95);
  const transform = `translate(${view.x} ${view.y}) scale(${view.k})`;

  function fillForCountry(name: string): string {
    if (reveal === name) return REVEAL;
    const st = results[name];
    if (st === "correct") return CORRECT;
    if (st === "missed") return MISSED;
    if (wrongPicks.includes(name)) return MISSED; // wrong tries this round
    return hover === name ? LAND_HOVER : LAND;
  }

  function fillForCity(name: string): string {
    if (reveal === name) return REVEAL;
    const st = results[name];
    if (st === "correct") return CORRECT;
    if (st === "missed") return MISSED;
    if (wrongPicks.includes(name)) return MISSED;
    return "#ffffff";
  }

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endPointer}
      onPointerCancel={endPointer}
      className="fixed inset-0 touch-none select-none overflow-hidden bg-[#dfe3df] font-sans"
    >
      {/* Full-bleed map */}
      {size.w > 0 && (
        <svg
          width={size.w}
          height={size.h}
          viewBox={`0 0 ${size.w} ${size.h}`}
          className="absolute inset-0 h-full w-full"
        >
          <g transform={transform}>
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
                      vectorEffect="non-scaling-stroke"
                      className="cursor-pointer transition-colors"
                      onClick={() => answer(name)}
                      onMouseEnter={() => setHover(name)}
                      onMouseLeave={() => setHover((hn) => (hn === name ? null : hn))}
                    />
                  );
                })
              : (
                  <>
                    <path
                      d={pathFor(geo as Feature)}
                      fill={LAND}
                      stroke="#2f6b3f"
                      strokeWidth={1}
                      vectorEffect="non-scaling-stroke"
                    />
                    {cities.map((c) => {
                      const xy = project(c.coordinates);
                      if (!xy) return null;
                      const isReveal = reveal === c.name;
                      return (
                        <circle
                          key={c.name}
                          cx={xy[0]}
                          cy={xy[1]}
                          r={(isReveal ? dotR * 1.6 : dotR) / view.k}
                          fill={fillForCity(c.name)}
                          stroke="#1e293b"
                          strokeWidth={1.5}
                          vectorEffect="non-scaling-stroke"
                          className="cursor-pointer transition-all hover:stroke-sky-500"
                          onClick={() => answer(c.name)}
                        />
                      );
                    })}
                  </>
                )}
          </g>
        </svg>
      )}

      {/* Top-left: progress + score */}
      <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-slate-900/85 px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-sm">
        {Math.min(idx + (finished ? 0 : 1), order.length)} / {order.length || targets.length}
        <span className="mx-1.5 text-slate-500">·</span>
        {score} pts
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

      {/* Zoom controls (bottom-right) */}
      <div className="absolute bottom-4 right-3 flex flex-col gap-2">
        <button
          onClick={() => setView((v) => zoomAbout(v, 1.5, size.w / 2, size.h / 2))}
          title="Zoom in"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/85 text-xl font-bold text-white shadow-lg backdrop-blur-sm hover:bg-slate-800"
        >
          +
        </button>
        <button
          onClick={() => setView((v) => zoomAbout(v, 1 / 1.5, size.w / 2, size.h / 2))}
          title="Zoom out"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/85 text-xl font-bold text-white shadow-lg backdrop-blur-sm hover:bg-slate-800"
        >
          −
        </button>
        {view.k > 1.01 && (
          <button
            onClick={() => setView({ k: 1, x: 0, y: 0 })}
            title="Reset zoom"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/85 text-xs font-bold text-white shadow-lg backdrop-blur-sm hover:bg-slate-800"
          >
            1:1
          </button>
        )}
      </div>

      {/* Center prompt — pops up over the map */}
      {current && (
        <div className="pointer-events-none absolute inset-x-0 top-[16%] flex flex-col items-center gap-3 px-4">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-700/80">
            Find
          </div>
          <div className="relative">
            <div
              key={current}
              className="geo-pop max-w-[90vw] truncate rounded-2xl bg-slate-900/90 px-7 py-3.5 text-center text-3xl font-extrabold text-white shadow-2xl ring-1 ring-white/10 sm:text-4xl"
            >
              {current}
            </div>
            {flash && (
              <div
                key={flash.key}
                className={`geo-rise pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 text-lg font-extrabold ${
                  flash.pts > 0 ? "text-emerald-500" : "text-red-500"
                }`}
              >
                {flash.pts > 0 ? `+${flash.pts}` : "Missed"}
              </div>
            )}
          </div>
          {/* Chances remaining */}
          <div className="flex items-center gap-1.5" aria-label={`${triesLeft} tries left`}>
            {Array.from({ length: MAX_TRIES }).map((_, i) => (
              <span
                key={i}
                className={`h-2.5 w-2.5 rounded-full ${i < triesLeft ? "bg-slate-900/80" : "bg-slate-900/20"}`}
              />
            ))}
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
            <div className="text-5xl">
              {correctCount / order.length >= 0.8 ? "🏆" : correctCount / order.length >= 0.5 ? "👏" : "📚"}
            </div>
            <h2 className="mt-3 text-xl font-bold text-white">{game.title}</h2>
            <p className="mt-2 text-3xl font-extrabold text-emerald-400">{score} pts</p>
            <p className="mt-1 text-slate-300">
              <span className="font-bold text-white">{correctCount}</span> / {order.length} correct
              <span className="text-slate-500"> · {fmtTime(elapsed)}</span>
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <button
                onClick={resetGame}
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
