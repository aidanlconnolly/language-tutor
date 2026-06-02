"use client";

import { createContext, useContext } from "react";
import type { Lang } from "./lang";
import { LANG_SPEECH_CODE } from "./lang";

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
