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
 * Shared tokenizer. For space-separated languages (Italian/French/Spanish/
 * Portuguese/English/German) it uses WORD_RE, which:
 * - Elides l'amico / l'ami, j'ai, c'est into two tokens
 * - Keeps po' / t' attached
 */
const WORD_RE = /\p{L}+'(?=\p{L})|\p{L}+'?/gu;

/**
 * Languages written WITHOUT spaces between words (Japanese, Chinese). These
 * need script-aware segmentation: WORD_RE would otherwise swallow a whole run
 * of kana/kanji/hanzi as one "word", breaking the tappable reader + lookup.
 */
const CJK_LOCALE: Record<string, string> = {
  japanese: "ja",
  chinese: "zh",
};

/**
 * Fallback CJK matcher when Intl.Segmenter is unavailable (e.g. Hermes/RN):
 * each Han character is its own token; runs of hiragana, of katakana (incl. the
 * ー長音), and of Latin/digits group together.
 */
const CJK_RUN_RE =
  /[\p{scx=Han}]|[\p{scx=Hiragana}]+|[\p{scx=Katakana}]+|[A-Za-z0-9À-ɏ]+/gu;

function buildSentenceRanges(
  text: string,
): Array<{ start: number; end: number; text: string }> {
  const ranges: Array<{ start: number; end: number; text: string }> = [];
  // Latin enders need a following space/end; CJK enders (。！？) split on their own.
  const re = /[.!?]+(?=\s|$)|[。！？]+|\n+/gu;
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

export function tokenize(lang: Lang, rawText: string): Token[] {
  // Fold typographic apostrophes (curly ’ U+2019, modifier ʼ U+02BC, left ‘ U+2018)
  // to ASCII ' so WORD_RE's elision rules fire on l'ami / c'est / l'amico even when
  // the source text uses smart quotes — NFC alone does not do this fold.
  const text = rawText.normalize("NFC").replace(/[‘’ʼ]/g, "'");
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

  const pushWord = (surface: string, at: number) => {
    if (at > cursor) tokens.push({ type: "text", text: text.slice(cursor, at) });
    tokens.push({
      type: "word",
      surface,
      sentence: findSentence(at),
      index: wordIndex++,
    });
    cursor = at + surface.length;
  };

  const locale = CJK_LOCALE[lang];
  const Segmenter = (Intl as unknown as { Segmenter?: typeof Intl.Segmenter })
    .Segmenter;

  if (locale && typeof Segmenter === "function") {
    // Word-level segmentation (keeps 食べる / コーヒー whole).
    const seg = new Segmenter(locale, { granularity: "word" });
    for (const s of seg.segment(text) as Iterable<{
      segment: string;
      index: number;
      isWordLike?: boolean;
    }>) {
      if (s.isWordLike) pushWord(s.segment, s.index);
    }
  } else if (locale) {
    CJK_RUN_RE.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = CJK_RUN_RE.exec(text)) !== null) pushWord(m[0], m.index);
  } else {
    WORD_RE.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = WORD_RE.exec(text)) !== null) pushWord(m[0], m.index);
  }

  if (cursor < text.length) {
    tokens.push({ type: "text", text: text.slice(cursor) });
  }
  return tokens;
}
