"use client";

import { useEffect, useState } from "react";
import { speak, speechAvailable } from "@/lib/speech";

export function SpeakButton({
  text,
  langCode = "it-IT",
  size = "sm",
}: {
  text: string;
  langCode?: string;
  size?: "sm" | "md";
}) {
  // Avoid SSR/CSR mismatch: speechSynthesis is browser-only, so the button
  // is hidden on the server and revealed after hydration if available.
  const [available, setAvailable] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAvailable(speechAvailable());
  }, []);

  if (!available) return null;

  const cls =
    size === "md"
      ? "text-base p-1"
      : "text-xs p-0.5";

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        speak(text, langCode);
      }}
      aria-label={`Speak: ${text}`}
      title="Speak"
      className={`${cls} rounded text-zinc-400 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/40 transition-colors`}
    >
      🔊
    </button>
  );
}
