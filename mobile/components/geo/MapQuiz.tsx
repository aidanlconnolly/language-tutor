import { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Animated,
  type LayoutChangeEvent,
} from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GestureDetector, Gesture, GestureHandlerRootView } from "react-native-gesture-handler";
import Svg, { Path, Circle, G } from "react-native-svg";
import { geoMercator, geoPath } from "d3-geo";
import type { Feature } from "geojson";
import { findGame, type GeoGame } from "@/lib/geo/games";

type Status = "correct" | "missed";
type ViewT = { k: number; x: number; y: number };

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
const CORRECT = "#22c55e";
const MISSED = "#dc2626";
const REVEAL = "#f59e0b"; // amber — shows where the answer was on a miss
const BG = "#dfe3df";

const MAX_TRIES = 3;
// Points earned by how many wrong clicks preceded the correct one.
const POINTS = [100, 60, 30];
const MAX_ZOOM = 8;

/** Resolves the game client-side (keeps the large GeoJSON out of route params). */
export function MapQuiz({ gameId }: { gameId: string }) {
  const game = findGame(gameId);
  if (!game) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundText}>Game not found.</Text>
      </View>
    );
  }
  return <MapQuizGame game={game} />;
}

function MapQuizGame({ game }: { game: GeoGame }) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [size, setSize] = useState({ w: 0, h: 0 });

  function onLayout(e: LayoutChangeEvent) {
    const { width, height } = e.nativeEvent.layout;
    setSize({ w: Math.round(width), h: Math.round(height) });
  }

  // Fit the projection to the measured pixel size — recomputed on layout/rotate.
  const { pathFor, project, features } = useMemo(() => {
    if (!size.w || !size.h) {
      return {
        pathFor: (_f: Feature) => "",
        project: (_c: [number, number]) => null as [number, number] | null,
        features: [] as Feature[],
      };
    }
    const pad = 12;
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
  const [results, setResults] = useState<Record<string, Status>>({});
  const [score, setScore] = useState(0);
  const [wrongPicks, setWrongPicks] = useState<string[]>([]); // wrong clicks for the current target
  const [reveal, setReveal] = useState<string | null>(null); // briefly show the answer after a miss
  const [flash, setFlash] = useState<{ pts: number; key: number } | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const revealTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ---- Zoom & pan ----
  const [view, setView] = useState<ViewT>({ k: 1, x: 0, y: 0 });
  const lastScale = useRef(1);
  const lastPan = useRef({ x: 0, y: 0 });

  const clampN = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));
  function clampView(v: ViewT): ViewT {
    return { k: v.k, x: clampN(v.x, (1 - v.k) * size.w, 0), y: clampN(v.y, (1 - v.k) * size.h, 0) };
  }
  function applyZoom(factor: number, fx: number, fy: number) {
    setView((v) => {
      const k = clampN(v.k * factor, 1, MAX_ZOOM);
      const rf = k / v.k;
      return clampView({ k, x: fx - rf * (fx - v.x), y: fy - rf * (fy - v.y) });
    });
  }
  function panBy(dx: number, dy: number) {
    setView((v) => clampView({ ...v, x: v.x + dx, y: v.y + dy }));
  }

  const pinch = Gesture.Pinch()
    .runOnJS(true)
    .onBegin(() => {
      lastScale.current = 1;
    })
    .onUpdate((e) => {
      const factor = e.scale / lastScale.current;
      lastScale.current = e.scale;
      applyZoom(factor, e.focalX, e.focalY);
    });
  const pan = Gesture.Pan()
    .runOnJS(true)
    .minDistance(8) // a tap stays under this → falls through to the Svg press
    .onBegin(() => {
      lastPan.current = { x: 0, y: 0 };
    })
    .onUpdate((e) => {
      panBy(e.translationX - lastPan.current.x, e.translationY - lastPan.current.y);
      lastPan.current = { x: e.translationX, y: e.translationY };
    });
  const gesture = Gesture.Simultaneous(pinch, pan);

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

  // The prompt chip springs in each time the target changes.
  const pop = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    if (!current) return;
    pop.setValue(0.85);
    Animated.spring(pop, {
      toValue: 1,
      useNativeDriver: true,
      friction: 5,
      tension: 140,
    }).start();
  }, [current, pop]);

  // The "+100" / "Missed" feedback floats up and fades.
  const rise = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (!flash) return;
    rise.setValue(0);
    Animated.timing(rise, { toValue: 1, duration: 900, useNativeDriver: true }).start();
  }, [flash, rise]);

  function advance() {
    setWrongPicks([]);
    setIdx((i) => i + 1);
  }

  function answer(clicked: string) {
    if (!current || reveal) return; // locked while revealing the previous answer
    if (clicked === current) {
      const pts = POINTS[Math.min(wrongPicks.length, POINTS.length - 1)];
      setScore((s) => s + pts);
      setResults((r) => ({ ...r, [current]: "correct" }));
      setFlash({ pts, key: idx });
      advance();
      return;
    }
    // Wrong tap — record it; flash red. Out of tries → reveal & move on.
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
  const dotR = Math.max(7, Math.min(size.w, size.h) / 55);

  function fillForCountry(name: string): string {
    if (reveal === name) return REVEAL;
    const st = results[name];
    if (st === "correct") return CORRECT;
    if (st === "missed") return MISSED;
    if (wrongPicks.includes(name)) return MISSED; // wrong tries this round
    return LAND;
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
    <GestureHandlerRootView style={styles.root}>
      <GestureDetector gesture={gesture}>
        <View style={styles.root} onLayout={onLayout}>
          {/* Full-bleed map */}
          {size.w > 0 && (
            <Svg width={size.w} height={size.h}>
              <G transform={`translate(${view.x}, ${view.y}) scale(${view.k})`}>
                {game.kind === "countries"
                  ? features.map((f, i) => {
                      const name = (f.properties?.name as string) ?? "";
                      return (
                        <Path
                          key={name || i}
                          d={pathFor(f)}
                          fill={fillForCountry(name)}
                          stroke={BG}
                          strokeWidth={0.6}
                          vectorEffect="non-scaling-stroke"
                          onPress={() => answer(name)}
                        />
                      );
                    })
                  : (
                      <>
                        <Path
                          d={pathFor(game.geo)}
                          fill={LAND}
                          stroke="#2f6b3f"
                          strokeWidth={1}
                          vectorEffect="non-scaling-stroke"
                        />
                        {game.cities.map((c) => {
                          const xy = project(c.coordinates);
                          if (!xy) return null;
                          const isReveal = reveal === c.name;
                          return (
                            <Circle
                              key={c.name}
                              cx={xy[0]}
                              cy={xy[1]}
                              r={(isReveal ? dotR * 1.6 : dotR) / view.k}
                              fill={fillForCity(c.name)}
                              stroke="#1e293b"
                              strokeWidth={1.5}
                              vectorEffect="non-scaling-stroke"
                              onPress={() => answer(c.name)}
                            />
                          );
                        })}
                      </>
                    )}
              </G>
            </Svg>
          )}

          {/* Top-left: progress + score */}
          <View style={[styles.pill, styles.topLeft, { top: insets.top + 8 }]}>
            <Text style={styles.pillText}>
              {Math.min(idx + (finished ? 0 : 1), order.length)} / {order.length || targets.length}
              {"  ·  "}
              {score} pts
            </Text>
          </View>

          {/* Top-right: timer + close */}
          <View style={[styles.topRight, { top: insets.top + 8 }]}>
            <View style={styles.pill}>
              <Text style={styles.pillText}>{fmtTime(elapsed)}</Text>
            </View>
            <Pressable onPress={() => router.back()} accessibilityLabel="Close" style={styles.closeBtn}>
              <Text style={styles.closeText}>✕</Text>
            </Pressable>
          </View>

          {/* Zoom controls (bottom-right) */}
          <View style={styles.zoomCol}>
            <Pressable
              onPress={() => applyZoom(1.5, size.w / 2, size.h / 2)}
              style={styles.zoomBtn}
              accessibilityLabel="Zoom in"
            >
              <Text style={styles.zoomText}>＋</Text>
            </Pressable>
            <Pressable
              onPress={() => applyZoom(1 / 1.5, size.w / 2, size.h / 2)}
              style={styles.zoomBtn}
              accessibilityLabel="Zoom out"
            >
              <Text style={styles.zoomText}>－</Text>
            </Pressable>
            {view.k > 1.01 && (
              <Pressable
                onPress={() => setView({ k: 1, x: 0, y: 0 })}
                style={styles.zoomBtn}
                accessibilityLabel="Reset zoom"
              >
                <Text style={styles.zoomReset}>1:1</Text>
              </Pressable>
            )}
          </View>

          {/* Center prompt — pops up over the map */}
          {current && (
            <View style={[styles.promptWrap, { top: size.h * 0.16 }]} pointerEvents="box-none">
              <Text style={styles.findLabel}>FIND</Text>
              <View>
                <Animated.View style={[styles.promptChip, { transform: [{ scale: pop }] }]}>
                  <Text style={styles.promptText} numberOfLines={1}>
                    {current}
                  </Text>
                </Animated.View>
                {flash && (
                  <Animated.Text
                    key={flash.key}
                    style={[
                      styles.flash,
                      { color: flash.pts > 0 ? "#16a34a" : "#dc2626" },
                      {
                        opacity: rise.interpolate({ inputRange: [0, 0.2, 1], outputRange: [0, 1, 0] }),
                        transform: [
                          { translateY: rise.interpolate({ inputRange: [0, 1], outputRange: [6, -16] }) },
                        ],
                      },
                    ]}
                  >
                    {flash.pts > 0 ? `+${flash.pts}` : "Missed"}
                  </Animated.Text>
                )}
              </View>
              {/* Chances remaining */}
              <View style={styles.dots}>
                {Array.from({ length: MAX_TRIES }).map((_, i) => (
                  <View key={i} style={[styles.dot, { opacity: i < triesLeft ? 0.8 : 0.18 }]} />
                ))}
              </View>
              <Pressable onPress={skip} style={styles.skipBtn}>
                <Text style={styles.skipText}>Skip ⏭</Text>
              </Pressable>
            </View>
          )}

          {/* End-of-game overlay */}
          {finished && (
            <View style={styles.endOverlay}>
              <View style={styles.endCard}>
                <Text style={styles.endEmoji}>
                  {correctCount / order.length >= 0.8 ? "🏆" : correctCount / order.length >= 0.5 ? "👏" : "📚"}
                </Text>
                <Text style={styles.endTitle}>{game.title}</Text>
                <Text style={styles.endScore}>{score} pts</Text>
                <Text style={styles.endStats}>
                  <Text style={styles.endStrong}>{correctCount}</Text> / {order.length} correct ·{" "}
                  {fmtTime(elapsed)}
                </Text>
                <Pressable onPress={resetGame} style={styles.primaryBtn}>
                  <Text style={styles.primaryBtnText}>Play again</Text>
                </Pressable>
                <Pressable onPress={() => router.back()} style={styles.secondaryBtn}>
                  <Text style={styles.secondaryBtnText}>Back to games</Text>
                </Pressable>
              </View>
            </View>
          )}
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: BG },
  notFound: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#020617" },
  notFoundText: { color: "#cbd5e1", fontSize: 16 },

  pill: {
    backgroundColor: "rgba(15,23,42,0.85)",
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  pillText: { color: "#ffffff", fontSize: 12, fontWeight: "700" },
  topLeft: { position: "absolute", left: 12 },
  topRight: { position: "absolute", right: 12, flexDirection: "row", alignItems: "center", gap: 8 },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(15,23,42,0.85)",
    alignItems: "center",
    justifyContent: "center",
  },
  closeText: { color: "#ffffff", fontSize: 15, fontWeight: "700" },

  zoomCol: { position: "absolute", right: 12, bottom: 28, gap: 8 },
  zoomBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(15,23,42,0.85)",
    alignItems: "center",
    justifyContent: "center",
  },
  zoomText: { color: "#ffffff", fontSize: 22, fontWeight: "700", lineHeight: 24 },
  zoomReset: { color: "#ffffff", fontSize: 12, fontWeight: "700" },

  promptWrap: { position: "absolute", left: 0, right: 0, alignItems: "center", gap: 12, paddingHorizontal: 16 },
  findLabel: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 3,
    color: "rgba(51,65,85,0.8)",
  },
  promptChip: {
    maxWidth: "90%",
    backgroundColor: "rgba(15,23,42,0.92)",
    borderRadius: 18,
    paddingHorizontal: 28,
    paddingVertical: 14,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
  },
  promptText: { color: "#ffffff", fontSize: 30, fontWeight: "800", textAlign: "center" },
  flash: {
    position: "absolute",
    top: -24,
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "800",
  },
  dots: { flexDirection: "row", alignItems: "center", gap: 6 },
  dot: { width: 10, height: 10, borderRadius: 5, backgroundColor: "#0f172a" },
  skipBtn: {
    marginTop: 4,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 7,
  },
  skipText: { color: "#334155", fontSize: 12, fontWeight: "600" },

  endOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(2,6,23,0.7)",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  endCard: {
    width: "100%",
    maxWidth: 360,
    borderRadius: 18,
    backgroundColor: "#0f172a",
    borderWidth: 1,
    borderColor: "#1e293b",
    padding: 24,
    alignItems: "center",
  },
  endEmoji: { fontSize: 48 },
  endTitle: { marginTop: 12, fontSize: 20, fontWeight: "700", color: "#ffffff" },
  endScore: { marginTop: 8, fontSize: 30, fontWeight: "800", color: "#34d399" },
  endStats: { marginTop: 4, fontSize: 15, color: "#cbd5e1", textAlign: "center" },
  endStrong: { fontWeight: "700", color: "#ffffff" },
  primaryBtn: {
    marginTop: 20,
    alignSelf: "stretch",
    backgroundColor: "#0284c7",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },
  primaryBtnText: { color: "#ffffff", fontSize: 15, fontWeight: "700" },
  secondaryBtn: {
    marginTop: 8,
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },
  secondaryBtnText: { color: "#cbd5e1", fontSize: 15, fontWeight: "600" },
});
