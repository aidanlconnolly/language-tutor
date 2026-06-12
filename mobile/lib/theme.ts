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
