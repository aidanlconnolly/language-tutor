import type { Lang } from "./lang";

export type WordToken = {
  type: "word";
  surface: string;
  sentence: string;
  index: number;
};

export type TextToken = {
  type: "text";
  text: string;
};

export type Token = WordToken | TextToken;

/**
 * Shared tokenizer regex. Works for both Italian and French:
 * - Elides l'amico / l'ami, j'ai, c'est into two tokens
 * - Keeps po' / t' attached
 */
const WORD_RE = /\p{L}+'(?=\p{L})|\p{L}+'?/gu;

function buildSentenceRanges(
  text: string,
): Array<{ start: number; end: number; text: string }> {
  const ranges: Array<{ start: number; end: number; text: string }> = [];
  const re = /[.!?]+(?=\s|$)|\n+/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    const end = m.index + m[0].length;
    const slice = text.slice(last, end).trim();
    if (slice) ranges.push({ start: last, end, text: slice });
    last = end;
  }
  if (last < text.length) {
    const slice = text.slice(last).trim();
    if (slice) ranges.push({ start: last, end: text.length, text: slice });
  }
  return ranges;
}

export function tokenize(_lang: Lang, rawText: string): Token[] {
  const text = rawText.normalize("NFC");
  const sentences = buildSentenceRanges(text);

  const findSentence = (offset: number): string => {
    for (const r of sentences) {
      if (offset >= r.start && offset < r.end) return r.text;
    }
    return sentences.length ? sentences[sentences.length - 1].text : "";
  };

  const tokens: Token[] = [];
  let cursor = 0;
  let wordIndex = 0;

  WORD_RE.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = WORD_RE.exec(text)) !== null) {
    if (m.index > cursor) {
      tokens.push({ type: "text", text: text.slice(cursor, m.index) });
    }
    tokens.push({
      type: "word",
      surface: m[0],
      sentence: findSentence(m.index),
      index: wordIndex++,
    });
    cursor = m.index + m[0].length;
  }
  if (cursor < text.length) {
    tokens.push({ type: "text", text: text.slice(cursor) });
  }
  return tokens;
}
