import type { Unit } from "../../types";

export const UNIT_PRAETERITUM: Unit = {
  slug: "praeteritum",
  stage: 5,
  order: 22,
  icon: "🌅",
  title: "Präteritum",
  tagline: "war, hatte — the written and narrative past.",
  badge: "core",
  lessons: [
    {
      slug: "praeteritum-war-hatte",
      title: "war & hatte — the past you say out loud",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The simple past — and the two forms you'll use daily",
          body: [
            "German has a second past tense, the <strong>Präteritum</strong> (simple past), used mainly in writing and storytelling. But two verbs use it constantly even in <em>speech</em>: <strong>sein</strong> and <strong>haben</strong>.",
            "Nobody says <em>Ich bin müde gewesen</em> in everyday talk — they say <strong>Ich war müde</strong> (\"I was tired\"). Likewise <strong>Ich hatte keine Zeit</strong> (\"I had no time\") beats the clunky Perfekt.",
            "So learn <em>war</em> (was/were) and <em>hatte</em> (had) now — they're the most useful past forms in the whole language.",
          ],
          keyPoint:
            "Even spoken German uses Präteritum for sein and haben: ich war (I was), ich hatte (I had).",
        },
        {
          type: "conjugation",
          heading: "sein in the Präteritum",
          verb: "sein",
          meaning: "to be (simple past: was / were)",
          tenses: [
            {
              name: "Präteritum",
              forms: [
                { person: "ich", form: "war", en: "I was" },
                { person: "du", form: "warst", en: "you were" },
                { person: "er/sie/es", form: "war", en: "he/she/it was" },
                { person: "wir", form: "waren", en: "we were" },
                { person: "ihr", form: "wart", en: "you all were" },
                { person: "sie/Sie", form: "waren", en: "they / you (formal) were" },
              ],
            },
          ],
        },
        {
          type: "conjugation",
          heading: "haben in the Präteritum",
          verb: "haben",
          meaning: "to have (simple past: had)",
          tenses: [
            {
              name: "Präteritum",
              forms: [
                { person: "ich", form: "hatte", en: "I had" },
                { person: "du", form: "hattest", en: "you had" },
                { person: "er/sie/es", form: "hatte", en: "he/she/it had" },
                { person: "wir", form: "hatten", en: "we had" },
                { person: "ihr", form: "hattet", en: "you all had" },
                { person: "sie/Sie", form: "hatten", en: "they / you (formal) had" },
              ],
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "war or hatte?",
          items: [
            {
              template: "Gestern ___ ich sehr müde.",
              answer: "war",
              en: "Yesterday I was very tired.",
              options: ["war", "hatte", "bin", "warst"],
            },
            {
              template: "Wir ___ keine Zeit.",
              answer: "hatten",
              en: "We had no time.",
              options: ["hatten", "waren", "hatte", "haben"],
            },
            {
              template: "___ du gestern in Berlin?",
              answer: "Warst",
              en: "Were you in Berlin yesterday?",
              options: ["Warst", "Hattest", "Bist", "Wart"],
            },
            {
              template: "Das Wetter ___ schön.",
              answer: "war",
              en: "The weather was nice.",
              options: ["war", "hatte", "ist", "waren"],
            },
            {
              template: "Sie ___ einen großen Hund.",
              answer: "hatte",
              en: "She had a big dog.",
              options: ["hatte", "war", "hat", "hatten"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I was in Berlin and had a great time.",
          reference: "Ich war in Berlin und hatte eine tolle Zeit.",
          hint: "war for 'was', hatte for 'had'.",
        },
      ],
    },
    {
      slug: "praeteritum-modals",
      title: "Modal verbs in the Präteritum",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Modals prefer the Präteritum too",
          body: [
            "Like sein and haben, <strong>modal verbs</strong> are usually put in the Präteritum even when speaking: <em>konnte</em> (could), <em>wollte</em> (wanted), <em>musste</em> (had to), <em>durfte</em> (was allowed), <em>sollte</em> (should/was supposed to).",
            "Notice the pattern: the umlaut disappears (können → <em>konnte</em>, müssen → <em>musste</em>) and you add the weak <strong>-te</strong> ending.",
            "Just like the present, a modal sends the main verb (an infinitive) to the <strong>end</strong>: <em>Ich konnte nicht schlafen.</em> = I couldn't sleep.",
          ],
          keyPoint:
            "Modal Präteritum drops the umlaut + adds -te: konnte, wollte, musste, durfte, sollte. Infinitive still goes to the end.",
        },
        {
          type: "conjugation",
          heading: "können in the Präteritum",
          verb: "können",
          meaning: "can / to be able to (past: could)",
          tenses: [
            {
              name: "Präteritum",
              forms: [
                { person: "ich", form: "konnte", en: "I could" },
                { person: "du", form: "konntest", en: "you could" },
                { person: "er/sie/es", form: "konnte", en: "he/she/it could" },
                { person: "wir", form: "konnten", en: "we could" },
                { person: "ihr", form: "konntet", en: "you all could" },
                { person: "sie/Sie", form: "konnten", en: "they / you (formal) could" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Modal Präteritum forms (ich/er)",
          intro: "Each modal loses its umlaut and gains -te. Learn the ich-form; er/sie/es is identical.",
          items: [
            { l1: "können → konnte", en: "could / was able to" },
            { l1: "wollen → wollte", en: "wanted to" },
            { l1: "müssen → musste", en: "had to" },
            { l1: "dürfen → durfte", en: "was allowed to" },
            { l1: "sollen → sollte", en: "should / was supposed to" },
            { l1: "mögen → mochte", en: "liked", note: "Irregular: ö → o and g → ch (mochte)." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Modals in the past",
          items: [
            {
              template: "Ich ___ gestern nicht ___ . (können / schlafen)",
              answer: "konnte / schlafen",
              en: "I couldn't sleep yesterday.",
              options: ["konnte / schlafen", "kann / schlafen", "konnte / geschlafen", "konnte / schlief"],
            },
            {
              template: "Wir ___ früh aufstehen, weil der Zug um sechs ___ . (müssen / fahren)",
              answer: "mussten / fuhr",
              en: "We had to get up early because the train left at six.",
              options: ["mussten / fuhr", "müssen / fährt", "musste / fuhr", "mussten / fahren"],
            },
            {
              template: "Sie ___ ins Kino gehen, aber sie hatte keine Zeit. (wollen)",
              answer: "wollte",
              en: "She wanted to go to the cinema, but she had no time.",
              options: ["wollte", "will", "wollten", "wollt"],
            },
            {
              template: "Als Kind ___ ich nicht lange fernsehen. (dürfen)",
              answer: "durfte",
              en: "As a child I wasn't allowed to watch TV for long.",
              options: ["durfte", "darf", "durften", "durfst"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I wanted to come, but I had to work.",
          reference: "Ich wollte kommen, aber ich musste arbeiten.",
          hint: "Two modals in the Präteritum: wollte, musste. The infinitive follows.",
        },
      ],
    },
    {
      slug: "praeteritum-narration",
      title: "Regular & strong Präteritum for narration",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Telling a written story",
          body: [
            "In books, news and formal writing, full verbs go into the Präteritum. <strong>Weak verbs</strong> add <strong>-te</strong> to the stem: machen → <em>machte</em>, kaufen → <em>kaufte</em>, spielen → <em>spielte</em>.",
            "<strong>Strong verbs</strong> change their vowel and add no -te in the ich/er form: gehen → <em>ging</em>, sehen → <em>sah</em>, kommen → <em>kam</em>, fahren → <em>fuhr</em>, finden → <em>fand</em>.",
            "<strong>When to use which past?</strong> In conversation, use the Perfekt (Ich habe gemacht) — except sein, haben and the modals, which go Präteritum even in speech. In writing and narration, use the Präteritum throughout.",
          ],
          keyPoint:
            "Weak Präteritum = stem + -te (machte). Strong = vowel change, no -te (ging, sah, kam). Spoken → Perfekt; written → Präteritum.",
        },
        {
          type: "conjugation",
          heading: "gehen in the Präteritum (strong)",
          verb: "gehen",
          meaning: "to go (past: went)",
          intro: "Strong verbs share endings: -, -st, -, -en, -t, -en on the changed stem 'ging-'.",
          tenses: [
            {
              name: "Präteritum",
              forms: [
                { person: "ich", form: "ging", en: "I went" },
                { person: "du", form: "gingst", en: "you went" },
                { person: "er/sie/es", form: "ging", en: "he/she/it went" },
                { person: "wir", form: "gingen", en: "we went" },
                { person: "ihr", form: "gingt", en: "you all went" },
                { person: "sie/Sie", form: "gingen", en: "they / you (formal) went" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Narration verbs (Präteritum ich/er)",
          intro: "Weak verbs end in -te; strong verbs change the vowel.",
          items: [
            { l1: "machen → machte", en: "made / did", note: "Weak: stem + -te." },
            { l1: "kaufen → kaufte", en: "bought", note: "Weak." },
            { l1: "spielen → spielte", en: "played", note: "Weak." },
            { l1: "gehen → ging", en: "went", note: "Strong." },
            { l1: "sehen → sah", en: "saw", note: "Strong." },
            { l1: "kommen → kam", en: "came", note: "Strong." },
            { l1: "fahren → fuhr", en: "drove / travelled", note: "Strong." },
            { l1: "finden → fand", en: "found", note: "Strong." },
            { l1: "geben → gab", en: "gave", note: "Strong." },
            { l1: "sprechen → sprach", en: "spoke", note: "Strong." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Narrate in the Präteritum",
          items: [
            {
              template: "Er ___ in die Stadt und ___ ein Buch. (gehen / kaufen)",
              answer: "ging / kaufte",
              en: "He went into town and bought a book.",
              options: ["ging / kaufte", "ging / kaufen", "gehte / kaufte", "ging / kaufe"],
            },
            {
              template: "Sie ___ den Mann und ___ mit ihm. (sehen / sprechen)",
              answer: "sah / sprach",
              en: "She saw the man and spoke with him.",
              options: ["sah / sprach", "sah / sprechte", "sehte / sprach", "sah / sprich"],
            },
            {
              template: "Wir ___ nach Berlin und ___ das Brandenburger Tor. (fahren / sehen)",
              answer: "fuhren / sahen",
              en: "We travelled to Berlin and saw the Brandenburg Gate.",
              options: ["fuhren / sahen", "fahrten / sahen", "fuhren / sehten", "fuhr / sah"],
            },
            {
              template: "Der Kellner ___ uns die Speisekarte. (geben)",
              answer: "gab",
              en: "The waiter gave us the menu.",
              options: ["gab", "gibt", "gebte", "gaben"],
            },
          ],
        },
        {
          type: "tip",
          heading: "You'll mostly read it, not say it",
          body: "Don't stress about producing the full Präteritum in conversation — Germans would use the Perfekt there. The payoff for learning <em>ging, sah, kam</em> is <strong>reading</strong>: novels, fairy tales (\"Es war einmal…\"), and news are written almost entirely in the Präteritum.",
          example: { l1: "Er ging nach Hause und machte das Licht aus.", en: "He went home and turned off the light." },
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "She went into town, saw a friend, and bought a coffee.",
          reference: "Sie ging in die Stadt, sah eine Freundin und kaufte einen Kaffee.",
          hint: "Two strong verbs (ging, sah) and one weak (kaufte).",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'I was tired' =",
              options: ["Ich hatte müde.", "Ich war müde.", "Ich bin müde gewesen.", "Ich werde müde."],
              correct: 1,
            },
            {
              q: "Modal Präteritum of 'müssen' (ich) =",
              options: ["musste", "müsste", "musse", "mußen"],
              correct: 0,
            },
            {
              q: "Strong Präteritum of 'gehen' (er) =",
              options: ["gehte", "gang", "ging", "gegangen"],
              correct: 2,
            },
            {
              q: "Which tense do Germans use for the past in everyday speech (full verbs)?",
              options: ["Präteritum", "Perfekt", "Futur I", "Plusquamperfekt"],
              correct: 1,
            },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "Which past tense is used even in speech for sein and haben?",
        options: ["Perfekt", "Präteritum", "Futur I", "Konjunktiv"],
        correct: 1,
      },
      {
        q: "'ich' form of sein in the Präteritum =",
        options: ["bin", "war", "wäre", "gewesen"],
        correct: 1,
      },
      {
        q: "'ich' form of haben in the Präteritum =",
        options: ["habe", "hatte", "hätte", "gehabt"],
        correct: 1,
      },
      {
        q: "'We had no time' =",
        options: ["Wir haben keine Zeit.", "Wir hatten keine Zeit.", "Wir waren keine Zeit.", "Wir hätten keine Zeit."],
        correct: 1,
      },
      {
        q: "Präteritum of 'können' (ich) =",
        options: ["kann", "konnte", "könnte", "gekonnt"],
        correct: 1,
      },
      {
        q: "'I couldn't sleep' =",
        options: ["Ich kann nicht schlafen.", "Ich konnte nicht schlafen.", "Ich musste nicht schlafen.", "Ich konnte nicht geschlafen."],
        correct: 1,
      },
      {
        q: "Weak Präteritum of 'kaufen' (er) =",
        options: ["kaufte", "kaufe", "kauft", "gekauft"],
        correct: 0,
      },
      {
        q: "Strong Präteritum of 'sehen' (er) =",
        options: ["sehte", "sieht", "sah", "gesehen"],
        correct: 2,
      },
      {
        q: "Strong Präteritum of 'kommen' (er) =",
        options: ["kommte", "kam", "kommt", "gekommen"],
        correct: 1,
      },
      {
        q: "In which context do you mostly use the full Präteritum?",
        options: ["Casual chat", "Texting friends", "Written narration / books", "Ordering food"],
        correct: 2,
      },
    ],
  },
};
