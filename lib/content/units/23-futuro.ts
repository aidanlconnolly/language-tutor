import type { Unit } from "../types";

export const UNIT_FUTURO: Unit = {
  slug: "futuro",
  stage: 5,
  order: 23,
  icon: "⏩",
  title: "Futuro semplice",
  tagline: "Domani vedrò Roma. Talking about tomorrow, next week, your plans — and making predictions.",
  badge: "core",
  lessons: [
    {
      slug: "futuro-formation",
      title: "Building the future tense",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Italian has TWO ways to talk about the future",
          body: [
            "<strong>1. Present tense (most common in speech).</strong> Italians often use the present + a time word: <em>Domani vado a Roma.</em> = Tomorrow I'm going to Rome. This is fine for tomorrow, next week, this evening.",
            "<strong>2. Future tense (futuro semplice).</strong> For things further out, predictions, formal writing, or things you're not 100% certain about.",
            "Future tense formation: take the infinitive, drop the final <strong>-e</strong>, add: <strong>-ò, -ai, -à, -emo, -ete, -anno</strong>.",
            "<em>parlare → parler-</em> (note: -are verbs change the a to e!) → parler<strong>ò, ai, à, emo, ete, anno</strong>.",
            "<em>leggere → legger-</em> → leggerò, leggerai, leggerà…",
            "<em>dormire → dormir-</em> → dormirò, dormirai…",
          ],
          keyPoint:
            "Future = infinitive minus -e + ò/ai/à/emo/ete/anno. -are verbs: a → e in the stem (parlare → parlerò).",
        },
        {
          type: "conjugation",
          heading: "Parlare in the future",
          verb: "parlare",
          meaning: "to speak (futuro)",
          intro: "Notice the a→e shift in the stem. -ere and -ire keep their vowel.",
          tenses: [
            {
              name: "Futuro semplice",
              forms: [
                { person: "io", form: "parlerò", en: "I will speak" },
                { person: "tu", form: "parlerai", en: "you will speak" },
                { person: "lui/lei", form: "parlerà", en: "he/she will speak" },
                { person: "noi", form: "parleremo", en: "we will speak" },
                { person: "voi", form: "parlerete", en: "you all will speak" },
                { person: "loro", form: "parleranno", en: "they will speak" },
              ],
            },
          ],
        },
        {
          type: "conjugation",
          heading: "Side-by-side: -are / -ere / -ire",
          verb: "parlare / leggere / dormire",
          meaning: "speak / read / sleep — futuro",
          tenses: [
            {
              name: "All three families",
              forms: [
                { person: "io", form: "parlerò / leggerò / dormirò", en: "I will speak / read / sleep" },
                { person: "tu", form: "parlerai / leggerai / dormirai", en: "you will…" },
                { person: "lui/lei", form: "parlerà / leggerà / dormirà", en: "he/she will…" },
                { person: "noi", form: "parleremo / leggeremo / dormiremo", en: "we will…" },
                { person: "voi", form: "parlerete / leggerete / dormirete", en: "you all will…" },
                { person: "loro", form: "parleranno / leggeranno / dormiranno", en: "they will…" },
              ],
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Build the future",
          items: [
            {
              template: "Domani (io) ___ presto. (partire)",
              answer: "partirò",
              en: "Tomorrow I'll leave early.",
              options: ["parto", "sono partito", "partirò", "parterò"],
            },
            {
              template: "L'anno prossimo (noi) ___ in Italia. (viaggiare)",
              answer: "viaggeremo",
              en: "Next year we'll travel to Italy.",
              options: ["viaggiamo", "viaggeremo", "viaggiaremo", "viaggeranno"],
            },
            {
              template: "Lei ___ medico fra cinque anni. (diventare)",
              answer: "diventerà",
              en: "She'll be a doctor in five years.",
              options: ["diventa", "diventerà", "diventeranno", "diventa"],
            },
            {
              template: "Voi ___ il treno delle dieci? (prendere)",
              answer: "prenderete",
              en: "Will you take the ten o'clock train?",
              options: ["prendete", "prenderete", "prendiate", "prendarete"],
            },
            {
              template: "I bambini ___ bene stanotte? (dormire)",
              answer: "dormiranno",
              en: "Will the kids sleep well tonight?",
              options: ["dormono", "dormiranno", "dormerà", "dormeranno"],
            },
          ],
        },
      ],
    },
    {
      slug: "futuro-irregulars",
      title: "The irregular stems — memorize the 12",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Same endings, weird stems",
          body: [
            "Future endings (<em>-ò, -ai, -à, -emo, -ete, -anno</em>) NEVER change. But about 12 common verbs have irregular stems. Memorize them and you're done.",
            "Patterns: many lose a vowel (<em>andare → andr-</em>), and some double the r (<em>bere → berr-</em>).",
            "Once you know <em>andrò</em>, you automatically get <em>andrai, andrà, andremo, andrete, andranno</em>.",
          ],
          keyPoint:
            "Endings always regular. Stems: vowel drop (andr-, vedr-, dovr-) OR rr (berr-, verr-, terrò). Memorize the 12.",
        },
        {
          type: "vocab",
          heading: "Top 12 irregular future stems",
          items: [
            { it: "essere → sarò", en: "I will be (the most-used one)" },
            { it: "avere → avrò", en: "I will have" },
            { it: "andare → andrò", en: "I will go" },
            { it: "fare → farò", en: "I will do / make" },
            { it: "dare → darò", en: "I will give" },
            { it: "stare → starò", en: "I will stay" },
            { it: "dovere → dovrò", en: "I will have to" },
            { it: "potere → potrò", en: "I will be able to" },
            { it: "volere → vorrò", en: "I will want" },
            { it: "sapere → saprò", en: "I will know" },
            { it: "vedere → vedrò", en: "I will see" },
            { it: "vivere → vivrò", en: "I will live" },
            { it: "venire → verrò", en: "I will come" },
            { it: "bere → berrò", en: "I will drink" },
            { it: "tenere → terrò", en: "I will hold / keep" },
            { it: "rimanere → rimarrò", en: "I will stay / remain" },
          ],
        },
        {
          type: "tip",
          heading: "Three common-question futures",
          body: "Useful sentence starters that use irregular futures:<br><br>• <em>«Dove andrai in vacanza?»</em> = Where will you go on vacation?<br>• <em>«Cosa farai stasera?»</em> = What will you do tonight?<br>• <em>«Quando sarai a Roma?»</em> = When will you be in Rome?<br>• <em>«Potremo cenare insieme?»</em> = Will we be able to have dinner together?",
        },
        {
          type: "fillBlank",
          heading: "Irregular futures",
          items: [
            {
              template: "Domani (io) ___ a casa tutto il giorno. (essere)",
              answer: "sarò",
              en: "Tomorrow I'll be home all day.",
              options: ["sono", "sarò", "starò", "ero"],
            },
            {
              template: "(Noi) ___ a vedere il Papa domenica. (andare)",
              answer: "andremo",
              en: "We'll go to see the Pope on Sunday.",
              options: ["andremo", "andiamo", "anderemo", "andriamo"],
            },
            {
              template: "Cosa ___ stasera? (fare — tu)",
              answer: "farai",
              en: "What will you do tonight?",
              options: ["fai", "farai", "facerai", "ferai"],
            },
            {
              template: "Lei ___ partire prima. (dovere)",
              answer: "dovrà",
              en: "She'll have to leave earlier.",
              options: ["deve", "dovrà", "dovera", "dovrerà"],
            },
            {
              template: "Loro ___ in Italia per due settimane. (rimanere)",
              answer: "rimarranno",
              en: "They'll stay in Italy for two weeks.",
              options: ["rimangono", "rimarranno", "rimaneranno", "rimanno"],
            },
            {
              template: "Domani ___ tempo per parlare? (avere — tu)",
              answer: "avrai",
              en: "Will you have time to talk tomorrow?",
              options: ["hai", "avrai", "averai", "abbierai"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-it",
          prompt: "Next year we'll go to Rome and we'll see the Colosseum and the Vatican.",
          reference: "L'anno prossimo andremo a Roma e vedremo il Colosseo e il Vaticano.",
          hint: "Two future verbs: andremo + vedremo. Both irregular stems (andr-, vedr-).",
        },
      ],
    },
    {
      slug: "futuro-uses",
      title: "Plans, predictions, probability",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Three jobs for the future tense",
          body: [
            "<strong>1. Definite future plans.</strong> <em>Domenica partirò per Roma. La settimana prossima inizierò il nuovo lavoro.</em>",
            "<strong>2. Predictions / promises.</strong> <em>Vedrai, l'Italia ti piacerà tantissimo!</em> = You'll see, you'll love Italy! <em>Ti chiamerò domani.</em> = I'll call you tomorrow.",
            "<strong>3. PROBABILITY in the present.</strong> This is unique to Italian — future tense for 'probably / must be': <em>Saranno le sei.</em> = It must be six o'clock. <em>Dove sarà Marco?</em> = Where can Marco be? Italians love this — it sounds more thoughtful than 'forse' (maybe).",
          ],
          keyPoint:
            "Future for: definite plans, predictions, probability in the present ('saranno le 6' = it's probably 6).",
        },
        {
          type: "vocab",
          heading: "Time markers for future",
          items: [
            { it: "domani", en: "tomorrow" },
            { it: "dopodomani", en: "the day after tomorrow" },
            { it: "fra/tra poco", en: "soon / in a little while" },
            { it: "fra/tra due giorni", en: "in two days" },
            { it: "la prossima settimana", en: "next week" },
            { it: "il prossimo mese / anno", en: "next month / year" },
            { it: "stasera", en: "this evening" },
            { it: "fra un attimo", en: "in a moment" },
            { it: "presto", en: "soon" },
            { it: "in futuro", en: "in the future" },
            { it: "un giorno", en: "one day" },
          ],
        },
        {
          type: "dialogue",
          heading: "Making plans",
          setup: "Friends planning the weekend.",
          lines: [
            { speaker: "Anna", it: "Cosa farai questo weekend?", en: "What will you do this weekend?" },
            { speaker: "You", it: "Sabato andrò al mare con Marco. Domenica resterò a casa a riposare.", en: "Saturday I'll go to the beach with Marco. Sunday I'll stay home and rest." },
            { speaker: "Anna", it: "E la settimana prossima?", en: "And next week?" },
            { speaker: "You", it: "Avrò molto lavoro. Comincerò un nuovo progetto lunedì.", en: "I'll have a lot of work. I'll start a new project Monday." },
            { speaker: "Anna", it: "Sarai stanco. Quando torneremo a vederci?", en: "You'll be tired. When will we see each other again?" },
            { speaker: "You", it: "Venerdì sera? Ti chiamerò mercoledì per confermare.", en: "Friday evening? I'll call you Wednesday to confirm." },
            { speaker: "Anna", it: "Perfetto. Sarà bello rivederti!", en: "Perfect. It'll be nice to see you again!" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Future-tense fill",
          items: [
            {
              template: "Fra due giorni (io) ___ in vacanza. (partire)",
              answer: "partirò",
              en: "In two days I'll leave on vacation.",
              options: ["parto", "partirò", "sono partito", "partirei"],
            },
            {
              template: "Cosa ___ per cena stasera? (fare — voi)",
              answer: "farete",
              en: "What will you have for dinner tonight?",
              options: ["fate", "farete", "facerete", "feerete"],
            },
            {
              template: "Sicuramente lei ___ fra poco. (arrivare)",
              answer: "arriverà",
              en: "She'll definitely arrive soon.",
              options: ["arriva", "arriverà", "arrivava", "arrivò"],
            },
            {
              template: "___ le otto. Stanno suonando le campane. (essere)",
              answer: "Saranno",
              en: "It must be 8. The bells are ringing.",
              options: ["Sono", "Saranno", "Erano", "Stanno"],
            },
            {
              template: "Spero che (lui) ___ in tempo. (arrivare)",
              answer: "arrivi",
              en: "I hope he arrives in time. (Tricky — 'spero che' takes subjunctive, not future)",
              options: ["arriva", "arriverà", "arrivi", "arriverebbe"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the future sentence",
          items: [
            { tokens: ["Domani", "andrò", "a", "Firenze", "in", "treno"], en: "Tomorrow I'll go to Florence by train." },
            { tokens: ["L'anno", "prossimo", "vivremo", "a", "Roma"], en: "Next year we'll live in Rome." },
            { tokens: ["Ti", "chiamerò", "appena", "arriverò"], en: "I'll call you as soon as I arrive." },
            { tokens: ["Sarà", "una", "lunga", "giornata", "domani"], en: "It will be a long day tomorrow." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-it",
          prompt: "Tomorrow I'll go to the airport. The flight will leave at six.",
          reference: "Domani andrò all'aeroporto. Il volo partirà alle sei.",
          hint: "Two future verbs: andrò (irregular), partirà (regular). 'All'aeroporto' = to the airport.",
        },
        {
          type: "tip",
          heading: "Italians use the present for the near future, a lot",
          body: "In spoken Italian you'll hear the present tense for tomorrow / next week WAY more than the future tense. <em>Domani vado a Roma.</em> sounds completely natural. The future tense is more common for predictions, formal plans, and probability. Don't feel obligated to use the future tense for every tomorrow.",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "Future endings (regular) =",
        options: [
          "-vo, -vi, -va, -vamo, -vate, -vano",
          "-ò, -ai, -à, -emo, -ete, -anno",
          "-o, -i, -a, -iamo, -ate, -ano",
          "-erei, -eresti, -erebbe, -eremmo, -ereste, -erebbero",
        ],
        correct: 1,
      },
      {
        q: "Future of 'parlare' (io) =",
        options: ["parlavo", "parlerò", "parlarò", "parlerei"],
        correct: 1,
      },
      {
        q: "Future of 'essere' (io) =",
        options: ["sono", "sarò", "ero", "starò"],
        correct: 1,
      },
      {
        q: "Future of 'andare' (noi) =",
        options: ["andiamo", "andremo", "anderemo", "andariamo"],
        correct: 1,
      },
      {
        q: "Future of 'venire' (loro) =",
        options: ["vengono", "verranno", "veneranno", "verrebbero"],
        correct: 1,
      },
      {
        q: "'It must be six o'clock' (probability) =",
        options: ["Sono le sei.", "Saranno le sei.", "Erano le sei.", "Saranno sei."],
        correct: 1,
      },
      {
        q: "'I'll call you tomorrow' (informal) =",
        options: [
          "Ti ho chiamato domani.",
          "Ti chiamavo domani.",
          "Ti chiamerò domani.",
          "Ti chiamerei domani.",
        ],
        correct: 2,
      },
      {
        q: "Future stem of 'avere' =",
        options: ["aver-", "avr-", "abbier-", "aviar-"],
        correct: 1,
      },
      {
        q: "Italians often use which tense for tomorrow/this week?",
        options: [
          "always the future",
          "the present tense + a time word",
          "the imperfetto",
          "the passato prossimo",
        ],
        correct: 1,
      },
      {
        q: "Translate: 'Next year we'll go to Italy.'",
        options: [
          "L'anno prossimo siamo andati in Italia.",
          "L'anno prossimo andiamo in Italia. (also valid)",
          "L'anno prossimo andremo in Italia.",
          "Both B and C work.",
        ],
        correct: 3,
      },
    ],
  },
};
