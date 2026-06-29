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
import Svg, { Path, Circle } from "react-native-svg";
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
const CORRECT = "#22c55e";
const MISSED = "#dc2626";
const BG = "#dfe3df";

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
  const [statuses, setStatuses] = useState<Record<string, Status>>({});
  const [elapsed, setElapsed] = useState(0);

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
  const dotR = Math.max(7, Math.min(size.w, size.h) / 55);

  function fillForCountry(name: string): string {
    const st = statuses[name];
    if (st === "correct") return CORRECT;
    if (st === "missed") return MISSED;
    return LAND;
  }

  return (
    <View style={styles.root} onLayout={onLayout}>
      {/* Full-bleed map */}
      {size.w > 0 && (
        <Svg width={size.w} height={size.h}>
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
                    onPress={() => answer(name)}
                  />
                );
              })
            : (
                <>
                  <Path d={pathFor(game.geo)} fill={LAND} stroke="#2f6b3f" strokeWidth={1} />
                  {game.cities.map((c) => {
                    const xy = project(c.coordinates);
                    if (!xy) return null;
                    const st = statuses[c.name];
                    const fill = st === "correct" ? CORRECT : st === "missed" ? MISSED : "#ffffff";
                    return (
                      <Circle
                        key={c.name}
                        cx={xy[0]}
                        cy={xy[1]}
                        // Larger transparent hit-target sits under the visible dot.
                        r={dotR}
                        fill={fill}
                        stroke="#1e293b"
                        strokeWidth={1.5}
                        onPress={() => answer(c.name)}
                      />
                    );
                  })}
                </>
              )}
        </Svg>
      )}

      {/* Top-left: progress */}
      <View style={[styles.pill, styles.topLeft, { top: insets.top + 8 }]}>
        <Text style={styles.pillText}>
          {Math.min(idx + (finished ? 0 : 1), order.length)} / {order.length || targets.length}
          {"  ·  "}
          {accuracy}%
        </Text>
      </View>

      {/* Top-right: timer + close */}
      <View style={[styles.topRight, { top: insets.top + 8 }]}>
        <View style={styles.pill}>
          <Text style={styles.pillText}>{fmtTime(elapsed)}</Text>
        </View>
        <Pressable
          onPress={() => router.back()}
          accessibilityLabel="Close"
          style={styles.closeBtn}
        >
          <Text style={styles.closeText}>✕</Text>
        </Pressable>
      </View>

      {/* Center prompt — pops up over the map */}
      {current && (
        <View style={[styles.promptWrap, { top: size.h * 0.16 }]} pointerEvents="box-none">
          <Text style={styles.findLabel}>FIND</Text>
          <Animated.View style={[styles.promptChip, { transform: [{ scale: pop }] }]}>
            <Text style={styles.promptText} numberOfLines={1}>
              {current}
            </Text>
          </Animated.View>
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
              {accuracy >= 80 ? "🏆" : accuracy >= 50 ? "👏" : "📚"}
            </Text>
            <Text style={styles.endTitle}>{game.title}</Text>
            <Text style={styles.endStats}>
              You got <Text style={styles.endStrong}>{correct}</Text> / {order.length} ({accuracy}%)
              {"\n"}in {fmtTime(elapsed)}
            </Text>
            <Pressable onPress={restart} style={styles.primaryBtn}>
              <Text style={styles.primaryBtnText}>Play again</Text>
            </Pressable>
            <Pressable onPress={() => router.back()} style={styles.secondaryBtn}>
              <Text style={styles.secondaryBtnText}>Back to games</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
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
  endStats: { marginTop: 8, fontSize: 15, color: "#cbd5e1", textAlign: "center", lineHeight: 22 },
  endStrong: { fontWeight: "700", color: "#34d399" },
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
