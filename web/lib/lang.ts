export type Lang = "italian" | "french" | "spanish" | "portuguese" | "english" | "german";

export const SUPPORTED_LANGS: Lang[] = ["italian", "french", "spanish", "portuguese", "english", "german"];

export const LANG_LABELS: Record<Lang, string> = {
  italian: "Italian",
  french: "French",
  spanish: "Spanish",
  portuguese: "Portuguese",
  english: "English",
  german: "German",
};

export const LANG_FLAGS: Record<Lang, string> = {
  italian: "🇮🇹",
  french: "🇫🇷",
  spanish: "🇪🇸",
  // Brazilian-primary course (pt-BR audio), European Portuguese taught in notes.
  portuguese: "🇧🇷",
  // British-primary course (en-GB audio), London-themed.
  english: "🇬🇧",
  german: "🇩🇪",
};

export const LANG_SPEECH_CODE: Record<Lang, string> = {
  italian: "it-IT",
  french: "fr-FR",
  spanish: "es-ES",
  portuguese: "pt-BR",
  english: "en-GB",
  german: "de-DE",
};

export const LANG_ACCENT_COLOR: Record<Lang, string> = {
  italian: "amber",
  french: "blue",
  spanish: "red",
  portuguese: "green",
  english: "purple",
  german: "yellow",
};

export function isValidLang(value: string): value is Lang {
  return SUPPORTED_LANGS.includes(value as Lang);
}
