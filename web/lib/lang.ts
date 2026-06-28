export type Lang = "italian" | "french" | "spanish" | "portuguese" | "english" | "german" | "arabic" | "japanese" | "chinese";

export const SUPPORTED_LANGS: Lang[] = ["italian", "french", "spanish", "portuguese", "english", "german", "arabic", "japanese", "chinese"];

export const LANG_LABELS: Record<Lang, string> = {
  italian: "Italian",
  french: "French",
  spanish: "Spanish",
  portuguese: "Portuguese",
  english: "English",
  german: "German",
  arabic: "Arabic",
  japanese: "Japanese",
  chinese: "Chinese",
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
  // Modern Standard Arabic, Cairo/Egypt-themed (ar-EG audio).
  arabic: "🇪🇬",
  japanese: "🇯🇵",
  // Mandarin Chinese, simplified, Beijing-themed (zh-CN audio).
  chinese: "🇨🇳",
};

export const LANG_SPEECH_CODE: Record<Lang, string> = {
  italian: "it-IT",
  french: "fr-FR",
  spanish: "es-ES",
  portuguese: "pt-BR",
  english: "en-GB",
  german: "de-DE",
  arabic: "ar-EG",
  japanese: "ja-JP",
  chinese: "zh-CN",
};

export const LANG_ACCENT_COLOR: Record<Lang, string> = {
  italian: "amber",
  french: "blue",
  spanish: "red",
  portuguese: "green",
  english: "purple",
  german: "yellow",
  arabic: "teal",
  japanese: "rose",
  chinese: "orange",
};

/** Text direction per language. Arabic is right-to-left; everything else LTR. */
export const LANG_DIR: Record<Lang, "ltr" | "rtl"> = {
  italian: "ltr",
  french: "ltr",
  spanish: "ltr",
  portuguese: "ltr",
  english: "ltr",
  german: "ltr",
  arabic: "rtl",
  japanese: "ltr",
  chinese: "ltr",
};

export function isValidLang(value: string): value is Lang {
  return SUPPORTED_LANGS.includes(value as Lang);
}
