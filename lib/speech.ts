/**
 * Web Speech API wrapper, Italian-flavored.
 *
 * Voice selection runs once per session and caches the chosen voice. Some
 * browsers populate `getVoices()` asynchronously, so we wait for the
 * `voiceschanged` event if the list is empty on first call.
 */

let _italianVoice: SpeechSynthesisVoice | null | undefined; // undefined = unresolved

function resolveVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return null;
  // Prefer voices explicitly tagged it-IT, then any voice whose lang starts with "it"
  const exact = voices.find((v) => v.lang === "it-IT");
  if (exact) return exact;
  const loose = voices.find((v) => v.lang.toLowerCase().startsWith("it"));
  return loose ?? null;
}

export function getItalianVoice(): SpeechSynthesisVoice | null {
  if (_italianVoice !== undefined) return _italianVoice;
  _italianVoice = resolveVoice();
  if (_italianVoice === null && typeof window !== "undefined") {
    // Listen for voices loading and re-resolve on next call
    window.speechSynthesis.addEventListener(
      "voiceschanged",
      () => {
        _italianVoice = undefined;
      },
      { once: true },
    );
  }
  return _italianVoice;
}

export function speak(text: string): void {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  const utterance = new SpeechSynthesisUtterance(text);
  const voice = getItalianVoice();
  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang;
  } else {
    utterance.lang = "it-IT";
  }
  utterance.rate = 0.95;
  window.speechSynthesis.cancel(); // stop anything currently speaking
  window.speechSynthesis.speak(utterance);
}

export function speechAvailable(): boolean {
  return typeof window !== "undefined" && !!window.speechSynthesis;
}
