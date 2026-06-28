"use client";

import { createContext, useContext } from "react";
import type { Lang } from "./lang";
import { LANG_SPEECH_CODE, LANG_DIR } from "./lang";

const LangContext = createContext<Lang>("italian");

export function LangProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

export function useLang(): Lang {
  return useContext(LangContext);
}

export function useLangSpeechCode(): string {
  const lang = useContext(LangContext);
  return LANG_SPEECH_CODE[lang];
}

/** Text direction of the active language ("rtl" for Arabic, else "ltr"). */
export function useLangDir(): "ltr" | "rtl" {
  const lang = useContext(LangContext);
  return LANG_DIR[lang];
}

/** True when the active language is right-to-left (Arabic). */
export function useIsRTL(): boolean {
  return useLangDir() === "rtl";
}
