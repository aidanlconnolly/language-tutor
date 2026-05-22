/**
 * Italian-aware tokenizer.
 *
 * Goals:
 *  - Preserve diacritics (à è é ì ò ù) via NFC normalization on input
 *  - Treat elided articles as their own tokens: "l'amico" -> ["l'", "amico"],
 *    "dell'arte" -> ["dell'", "arte"], "un'amica" -> ["un'", "amica"], "c'è" -> ["c'", "è"]
 *  - Keep apostrophes that aren't elisions ("po'") attached to the word
 *  - Preserve all whitespace and punctuation as non-word tokens so the rendered
 *    text reflows exactly like the input
 *  - Annotate each word with its containing sentence
 */

export type WordToken = {
  type: "word";
  surface: string;
  sentence: string;
  /** Zero-based index into the word stream (useful as a React key). */
  index: number;
};

export type TextToken = {
  type: "text";
  text: string;
};

export type Token = WordToken | TextToken;

/**
 * Match a "word":
 *  - letters followed by an apostrophe immediately followed by another letter
 *    (this captures the elided article: "l'" before "amico"), OR
 *  - letters with an optional trailing apostrophe (catches "po'" and plain words)
 */
const WORD_RE = /\p{L}+'(?=\p{L})|\p{L}+'?/gu;

/**
 * Split a normalized text into sentence ranges. Boundaries:
 *  - one-or-more `.!?` followed by whitespace, newline, or EOF
 *  - one-or-more newlines (paragraph break)
 */
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

export function tokenize(rawText: string): Token[] {
  const text = rawText.normalize("NFC");
  const sentences = buildSentenceRanges(text);

  const findSentence = (offset: number): string => {
    for (const r of sentences) {
      if (offset >= r.start && offset < r.end) return r.text;
    }
    // Trailing word with no sentence terminator → use the last range
    return sentences.length ? sentences[sentences.length - 1].text : "";
  };

  const tokens: Token[] = [];
  let cursor = 0;
  let wordIndex = 0;

  // Reset stateful regex
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
