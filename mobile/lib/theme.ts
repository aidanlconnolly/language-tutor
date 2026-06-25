/**
 * Light color scheme — mirrors the desktop web app (white/zinc neutrals,
 * amber learning accent, emerald "complete", sky-600 primary actions).
 * Single source of truth: every screen imports `C` instead of hardcoding hex.
 */
export const C = {
  // Surfaces
  bg: "#ffffff",          // page background
  card: "#ffffff",        // card / surface
  inset: "#f4f4f5",       // recessed element on a card (zinc-100)
  headerBg: "#ffffff",    // native nav header
  headerTint: "#18181b",  // native nav header text/icons

  // Borders
  border: "#e4e4e7",      // zinc-200
  borderStrong: "#d4d4d8",// zinc-300

  // Text
  text: "#18181b",        // zinc-900 (primary)
  textSecondary: "#52525b",// zinc-600
  textMuted: "#71717a",   // zinc-500
  textFaint: "#a1a1aa",   // zinc-400

  // Primary action (buttons, links) — sky, like the desktop buttons
  primary: "#0284c7",     // sky-600
  primaryPressed: "#0369a1",// sky-700
  primaryText: "#ffffff",
  link: "#0284c7",

  // Learning accent — amber (roadmap, stages, today's read)
  accent: "#f59e0b",      // amber-500
  accentText: "#b45309",  // amber-700 (readable on white)
  accentTint: "#fef3c7",  // amber-100 (icon tile)
  accentSoft: "#fffbeb",  // amber-50 (card bg)
  accentBorder: "#fcd34d",// amber-300

  // Complete — emerald
  complete: "#10b981",    // emerald-500
  completeText: "#047857",// emerald-700
  completeTint: "#d1fae5",// emerald-100

  // Danger
  danger: "#dc2626",      // red-600
  dangerText: "#b91c1c",  // red-700
  dangerTint: "#fef2f2",  // red-50
  dangerBorder: "#fca5a5",// red-300

  // Quiz / answer states
  correctBg: "#ecfdf5",   // emerald-50
  correctBorder: "#10b981",
  correctText: "#047857",
  wrongBg: "#fef2f2",     // red-50
  wrongBorder: "#fca5a5",
  wrongText: "#b91c1c",
  selectedBg: "#fffbeb",  // amber-50
  selectedBorder: "#f59e0b",

  white: "#ffffff",
} as const;

export type Palette = typeof C;

/**
 * "Sunlit" palette — warm cream surfaces used by the entry (login/register)
 * and home screens only. Inner screens keep the plain light palette above.
 */
export const SUN = {
  bg: "#faf6ef",          // warm cream page background
  card: "#ffffff",
  cardBorder: "#ece4d6",  // warm sand border
  inputFill: "#f5f1e8",   // filled input, no hard border
  ink: "#101828",         // near-navy headline text (matches app icon bg)
  sub: "#8a7f6e",         // warm muted text
} as const;

/** Per-language tinted card colors for the home screen. */
export const LANG_TINT: Record<
  "italian" | "french" | "spanish" | "portuguese" | "english" | "german" | "arabic" | "japanese",
  { bg: string; border: string; text: string; bar: string; sub: string }
> = {
  italian: { bg: "#eaf6e7", border: "#bcdcb4", text: "#27500a", bar: "#639922", sub: "#3b6d11" },
  french:  { bg: "#e8f0fb", border: "#b9d2f2", text: "#0c447c", bar: "#378add", sub: "#185fa5" },
  spanish: { bg: "#fdf3de", border: "#f3d9a0", text: "#633806", bar: "#ef9f27", sub: "#854f0b" },
  portuguese: { bg: "#e7f5ea", border: "#b4dcc0", text: "#0a5028", bar: "#1c9b4b", sub: "#116d33" },
  english: { bg: "#f1ecfb", border: "#d6c8f0", text: "#42206b", bar: "#8b5cf6", sub: "#5b2e93" },
  german: { bg: "#f6f2e8", border: "#e0d3ad", text: "#4a3b12", bar: "#c79a3a", sub: "#6b5519" },
  arabic: { bg: "#e7f4f3", border: "#b3dcd7", text: "#0c4a45", bar: "#0d9488", sub: "#115e57" },
  japanese: { bg: "#fdecef", border: "#f5c6d2", text: "#7a1733", bar: "#e11d68", sub: "#a01346" },
};
