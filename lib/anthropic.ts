import Anthropic from "@anthropic-ai/sdk";

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
 * Shape we get back from Claude for an Italian word lookup. Mirrors the
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
  examples: Array<{ it: string; en: string }>;
  grammar_notes?: string;
};

const WORD_TOOL = {
  name: "record_word_definition",
  description:
    "Record the lemma, part of speech, English translation, definition, conjugation table (for verbs), example sentences, and grammar notes for the given Italian word.",
  input_schema: {
    type: "object" as const,
    properties: {
      lemma: {
        type: "string",
        description:
          "Canonical dictionary form. Verbs in the infinitive (e.g. 'andare', not 'vado'). Nouns in the masculine singular for both-gendered, otherwise singular. Adjectives in masculine singular.",
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
        description:
          "Required for verbs only. Keys are tenses ('presente', 'passato prossimo', 'imperfetto', 'futuro'). Each value is an object keyed by person ('io', 'tu', 'lui/lei', 'noi', 'voi', 'loro') with the conjugated form as the value. For 'passato prossimo' include the auxiliary (e.g. 'sono andato/a').",
        additionalProperties: {
          type: "object",
          additionalProperties: { type: "string" },
        },
      },
      examples: {
        type: "array",
        description:
          "Exactly 2 example sentences. Each has an Italian sentence using a common form of the word and an English translation. Keep sentences A2–B1 friendly.",
        items: {
          type: "object",
          properties: {
            it: { type: "string" },
            en: { type: "string" },
          },
          required: ["it", "en"],
        },
        minItems: 2,
        maxItems: 2,
      },
      grammar_notes: {
        type: "string",
        description:
          "Brief English-language note about quirks: irregular plurals, takes essere in compound tenses, false friend, register, etc. Omit if nothing noteworthy.",
      },
    },
    required: ["lemma", "pos", "translation", "definition", "examples"],
  },
};

const SYSTEM = `You are a meticulous Italian-language reference for an A2–B1 English-speaking learner. Always respond by calling the record_word_definition tool. Be concise but accurate. Lemmatize: if given an inflected form, report the dictionary lemma. Italian text uses correct diacritics (à è é ì ò ù).`;

export async function lookupItalianWord(args: {
  surface: string;
  sentence: string;
}): Promise<WordLookup> {
  const { surface, sentence } = args;
  const userMsg = `Italian word as encountered: "${surface}"
Source sentence: "${sentence}"

Record the lemma and its English-language reference info via the tool.`;

  const response = await client().messages.create({
    model: "claude-haiku-4-5",
    max_tokens: 2048,
    system: SYSTEM,
    tools: [WORD_TOOL],
    tool_choice: { type: "tool", name: WORD_TOOL.name },
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
