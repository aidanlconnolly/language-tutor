import Anthropic from "@anthropic-ai/sdk";
import type { Lang } from "./lang";

const LANG_NAMES: Record<Lang, string> = {
  italian: "Italian",
  french: "French",
  spanish: "Spanish",
  portuguese: "Brazilian Portuguese",
  english: "English",
  german: "German",
};

const LANG_DIACRITICS: Record<Lang, string> = {
  italian: "à è é ì ò ù",
  french: "à â é è ê ë î ï ô ù û ü ç",
  spanish: "á é í ó ú ü ñ ¡ ¿",
  portuguese: "á â ã à é ê í ó ô õ ú ç",
  english: "é ï (only in loanwords like café, naïve, résumé)",
  german: "ä ö ü ß",
};

const LANG_CONJUGATION_NOTE: Record<Lang, string> = {
  italian:
    "Keys are tenses ('presente', 'passato prossimo', 'imperfetto', 'futuro'). Each value is an object keyed by person ('io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'). For 'passato prossimo' include the auxiliary.",
  french:
    "Keys are tenses ('présent', 'passé composé', 'imparfait', 'futur simple'). Each value is an object keyed by person ('je', 'tu', 'il/elle', 'nous', 'vous', 'ils/elles'). For 'passé composé' include the auxiliary (avoir/être).",
  spanish:
    "Keys are tenses ('presente', 'pretérito indefinido', 'imperfecto', 'futuro simple', 'condicional'). Each value is an object keyed by person ('yo', 'tú', 'él/ella/usted', 'nosotros', 'vosotros', 'ellos/ustedes').",
  portuguese:
    "Brazilian Portuguese. Keys are tenses ('presente', 'pretérito perfeito', 'pretérito imperfeito', 'futuro do presente', 'futuro do pretérito'). Each value is an object keyed by person ('eu', 'você/ele/ela', 'nós', 'vocês/eles/elas'). Use the Brazilian você forms as the 2nd person; for compound tenses include the auxiliary (ter).",
  english:
    "Keys are tenses ('present simple', 'past simple', 'present continuous', 'present perfect', 'future (will)'). Each value is an object keyed by person ('I', 'you', 'he/she/it', 'we', 'they'). The only present-simple inflection is the 3rd-person -s (he works); include the auxiliary for continuous (am/is/are + -ing), perfect (have/has + past participle) and future (will + base form). Note irregular past forms where relevant.",
  german:
    "Keys are tenses ('Präsens', 'Perfekt', 'Präteritum', 'Futur I'). Each value is an object keyed by person ('ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'). For 'Perfekt' include the auxiliary (haben/sein) plus the past participle. Note separable-verb splits and strong-verb stem-vowel changes.",
};

/**
 * Single shared client. Reads ANTHROPIC_API_KEY at first use.
 */
let _client: Anthropic | undefined;
function client(): Anthropic {
  if (!_client) {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      throw new Error(
        "ANTHROPIC_API_KEY is not set. Add it to .env.local (see .env.local.example).",
      );
    }
    _client = new Anthropic({ apiKey });
  }
  return _client;
}

/**
 * Shape we get back from Claude for a word lookup. Mirrors the
 * input_schema below — keep them in sync.
 */
export type WordLookup = {
  lemma: string;
  pos:
    | "verb"
    | "noun"
    | "adjective"
    | "adverb"
    | "pronoun"
    | "preposition"
    | "conjunction"
    | "article"
    | "interjection"
    | "phrase"
    | "other";
  gender?: "m" | "f";
  translation: string;
  definition: string;
  conjugation?: Record<string, Record<string, string>>;
  examples: Array<{ l1: string; en: string }>;
  grammar_notes?: string;
};

function makeWordTool(lang: Lang) {
  const name = LANG_NAMES[lang];
  return {
    name: "record_word_definition",
    description: `Record the lemma, part of speech, English translation, definition, conjugation table (for verbs), example sentences, and grammar notes for the given ${name} word.`,
    input_schema: {
      type: "object" as const,
      properties: {
        lemma: {
          type: "string",
          description:
            `Canonical dictionary form. Verbs in the infinitive. Nouns in the singular. Adjectives in the base form.`,
        },
        pos: {
          type: "string",
          enum: [
            "verb",
            "noun",
            "adjective",
            "adverb",
            "pronoun",
            "preposition",
            "conjunction",
            "article",
            "interjection",
            "phrase",
            "other",
          ],
        },
        gender: {
          type: "string",
          enum: ["m", "f"],
          description: "Grammatical gender. Only set for nouns.",
        },
        translation: {
          type: "string",
          description:
            "Concise English gloss (1–6 words). For verbs, include 'to' (e.g. 'to go').",
        },
        definition: {
          type: "string",
          description:
            "Fuller English-language definition, 1–2 sentences. Mention any common idiomatic uses.",
        },
        conjugation: {
          type: "object",
          description: `Required for verbs only. ${LANG_CONJUGATION_NOTE[lang]}`,
          additionalProperties: {
            type: "object",
            additionalProperties: { type: "string" },
          },
        },
        examples: {
          type: "array",
          description: `Exactly 2 example sentences. Each has a ${name} sentence (l1) using a common form of the word and an English translation (en). Keep sentences A2–B1 friendly.`,
          items: {
            type: "object",
            properties: {
              l1: { type: "string", description: `The ${name} sentence` },
              en: { type: "string", description: "English translation" },
            },
            required: ["l1", "en"],
          },
          minItems: 2,
          maxItems: 2,
        },
        grammar_notes: {
          type: "string",
          description:
            "Brief English-language note about quirks: irregular forms, false friends, register, etc. Omit if nothing noteworthy.",
        },
      },
      required: ["lemma", "pos", "translation", "definition", "examples"],
    },
  };
}

export async function lookupWord(args: {
  surface: string;
  sentence: string;
  lang: Lang;
}): Promise<WordLookup> {
  const { surface, sentence, lang } = args;
  const name = LANG_NAMES[lang];
  const diacritics = LANG_DIACRITICS[lang];
  const tool = makeWordTool(lang);

  const system = `You are a meticulous ${name}-language reference for an A2–B1 English-speaking learner. Always respond by calling the record_word_definition tool. Be concise but accurate. Lemmatize: if given an inflected form, report the dictionary lemma. ${name} text uses correct diacritics (${diacritics}).`;

  const userMsg = `${name} word as encountered: "${surface}"
Source sentence: "${sentence}"

Record the lemma and its English-language reference info via the tool.`;

  const response = await client().messages.create({
    model: "claude-haiku-4-5",
    max_tokens: 2048,
    system,
    tools: [tool],
    tool_choice: { type: "tool", name: tool.name },
    messages: [{ role: "user", content: userMsg }],
  });

  const toolUse = response.content.find((b) => b.type === "tool_use");
  if (!toolUse || toolUse.type !== "tool_use") {
    throw new Error(
      `Claude did not call the tool. Stop reason: ${response.stop_reason}`,
    );
  }
  return toolUse.input as WordLookup;
}

/* ─────────── Translation grading ─────────── */

export type TranslationGrade = {
  score: 0 | 1 | 2;
  corrected?: string;
  feedback: string;
  miss_lemmas?: string[];
};

const GRADE_TOOL = {
  name: "grade_translation",
  description:
    "Grade a learner's translation. Return a 0-2 score, a corrected version if needed, plain-English feedback, and up to 5 target-language lemmas the learner appears to be weak on.",
  input_schema: {
    type: "object" as const,
    properties: {
      score: {
        type: "integer",
        enum: [0, 1, 2],
        description:
          "2 = essentially correct (any difference is just stylistic). 1 = understandable but with grammar or vocabulary mistakes. 0 = wrong or unintelligible.",
      },
      corrected: {
        type: "string",
        description:
          "Cleaned-up version of the learner's answer in the target language (or English). Only fill in if score < 2.",
      },
      feedback: {
        type: "string",
        description:
          "1-2 sentences of plain-English coaching. If something specific is wrong, name it.",
      },
      miss_lemmas: {
        type: "array",
        items: { type: "string" },
        description:
          "Up to 5 target-language lemmas the learner likely needs more practice on. Empty if score is 2.",
        maxItems: 5,
      },
    },
    required: ["score", "feedback"],
  },
};

export async function gradeTranslation(args: {
  direction: "l1-to-en" | "en-to-l1";
  prompt: string;
  reference: string;
  learner: string;
  lang: Lang;
}): Promise<TranslationGrade> {
  const { direction, prompt, reference, learner, lang } = args;
  const name = LANG_NAMES[lang];

  const gradeSystem = `You are a ${name} tutor grading a single translation by an A1-B1 English-speaking learner. Always call the grade_translation tool. Be lenient on word order and stylistic synonyms when meaning is preserved. Be strict on conjugation, gender agreement, and article choice. Feedback should be encouraging but specific.`;

  const dirLabel =
    direction === "en-to-l1" ? `English → ${name}` : `${name} → English`;
  const userMsg = `Direction: ${dirLabel}
Source: "${prompt}"
Reference good answer: "${reference}"
Learner answer: "${learner}"

Grade via grade_translation.`;

  const response = await client().messages.create({
    model: "claude-haiku-4-5",
    max_tokens: 1024,
    system: gradeSystem,
    tools: [GRADE_TOOL],
    tool_choice: { type: "tool", name: GRADE_TOOL.name },
    messages: [{ role: "user", content: userMsg }],
  });

  const toolUse = response.content.find((b) => b.type === "tool_use");
  if (!toolUse || toolUse.type !== "tool_use") {
    throw new Error(
      `Claude did not call grade tool. Stop reason: ${response.stop_reason}`,
    );
  }
  return toolUse.input as TranslationGrade;
}
