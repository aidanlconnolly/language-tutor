/**
 * Web Speech API wrapper — multi-language.
 *
 * Voice selection runs once per session per language code and caches the
 * chosen voice. Some browsers populate `getVoices()` asynchronously, so
 * we wait for the `voiceschanged` event if the list is empty on first call.
 */

const _voiceCache = new Map<string, SpeechSynthesisVoice | null>(); // langCode → voice (null = unavailable)

function resolveVoice(langCode: string): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return null;
  const prefix = langCode.toLowerCase().split("-")[0];
  const exact = voices.find((v) => v.lang === langCode);
  if (exact) return exact;
  const loose = voices.find((v) => v.lang.toLowerCase().startsWith(prefix));
  return loose ?? null;
}

function getVoice(langCode: string): SpeechSynthesisVoice | null {
  if (_voiceCache.has(langCode)) return _voiceCache.get(langCode)!;
  const voice = resolveVoice(langCode);
  if (voice === null && typeof window !== "undefined") {
    window.speechSynthesis.addEventListener(
      "voiceschanged",
      () => { _voiceCache.delete(langCode); },
      { once: true },
    );
  }
  _voiceCache.set(langCode, voice);
  return voice;
}

export function speak(text: string, langCode = "it-IT"): void {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  const utterance = new SpeechSynthesisUtterance(text);
  const voice = getVoice(langCode);
  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang;
  } else {
    utterance.lang = langCode;
  }
  utterance.rate = 0.95;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

export function speechAvailable(): boolean {
  return typeof window !== "undefined" && !!window.speechSynthesis;
}
