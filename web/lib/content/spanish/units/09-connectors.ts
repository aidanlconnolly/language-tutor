import type { Unit } from "../../types";

export const UNIT_CONNECTORS: Unit = {
  slug: "connectors",
  stage: 2,
  order: 9,
  icon: "🔗",
  title: "Connecting words",
  tagline: "Y, pero, porque, entonces, también, sin embargo.",
  lessons: [
    {
      slug: "connectors-basic",
      title: "Basic connectors",
      estMinutes: 7,
      pages: [
        {
          type: "intro",
          heading: "Glue your sentences together",
          body: [
            "Connectors (conjunctions and adverbs) turn a list of short sentences into fluent speech. Even a handful of connectors dramatically improves how natural you sound.",
          ],
        },
        {
          type: "vocab",
          heading: "Essential connectors",
          items: [
            { l1: "y", en: "and", note: "Changes to 'e' before words starting with i/hi" },
            { l1: "o", en: "or", note: "Changes to 'u' before words starting with o/ho" },
            { l1: "pero", en: "but" },
            { l1: "sino", en: "but rather / but instead", note: "Used after a negative to introduce the correction" },
            { l1: "porque", en: "because" },
            { l1: "que", en: "that / which / who" },
            { l1: "cuando", en: "when" },
            { l1: "si", en: "if", note: "No accent — cf. sí (yes)" },
          ],
        },
        {
          type: "vocab",
          heading: "Discourse connectors",
          items: [
            { l1: "también", en: "also / too" },
            { l1: "tampoco", en: "neither / not either", note: "Negative form of también" },
            { l1: "entonces", en: "then / so / therefore" },
            { l1: "por eso", en: "that's why / for that reason" },
            { l1: "sin embargo", en: "however / nevertheless" },
            { l1: "además", en: "furthermore / also" },
            { l1: "aunque", en: "although / even though" },
            { l1: "así que", en: "so / therefore" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Which connector?",
          questions: [
            {
              q: "Me gusta el café ___ no el té. (not tea, but coffee)",
              options: ["pero", "sino", "y", "aunque"],
              correct: 1,
              fb: "Sino is used after a negative to introduce what IS the case: No me gusta el té sino el café.",
            },
            {
              q: "Hablo español ___ italiano.",
              options: ["pero", "sino", "e", "o"],
              correct: 2,
              fb: "Y changes to E before words starting with i or hi. Español e italiano.",
            },
            {
              q: "No tengo dinero, ___ no puedo ir.",
              options: ["también", "sino", "por eso", "aunque"],
              correct: 2,
              fb: "Por eso = for that reason / that's why. Connects cause to effect.",
            },
          ],
        },
      ],
    },
    {
      slug: "connectors-practice",
      title: "Connecting ideas in sentences",
      estMinutes: 7,
      pages: [
        {
          type: "vocab",
          heading: "Connectors in context",
          items: [
            { l1: "Me gusta Madrid, pero prefiero Barcelona.", en: "I like Madrid, but I prefer Barcelona." },
            { l1: "Estudio español porque quiero viajar.", en: "I study Spanish because I want to travel." },
            { l1: "Habla inglés y también francés.", en: "She speaks English and also French." },
            { l1: "Aunque llueve, salimos.", en: "Even though it's raining, we're going out." },
            { l1: "Estoy cansado, así que me quedo en casa.", en: "I'm tired, so I'm staying home." },
            { l1: "No es caro; sin embargo, no tengo dinero.", en: "It's not expensive; however, I don't have money." },
          ],
        },
        {
          type: "translate",
          heading: "Translate: connectors",
          direction: "en-to-l1",
          prompt: "I'm tired but I want to go out.",
          reference: "Estoy cansado pero quiero salir.",
          hint: "pero = but",
        },
        {
          type: "translate",
          heading: "Translate: connectors",
          direction: "en-to-l1",
          prompt: "She studies because she likes Spanish.",
          reference: "Estudia porque le gusta el español.",
          hint: "porque = because",
        },
        {
          type: "multipleChoice",
          heading: "Final check",
          questions: [
            {
              q: "'Tampoco' is the negative version of…",
              options: ["entonces", "también", "aunque", "pero"],
              correct: 1,
              fb: "También = also/too. Tampoco = neither/not either. No me gusta tampoco = I don't like it either.",
            },
            {
              q: "'Sin embargo' means…",
              options: ["also", "because", "however", "so"],
              correct: 2,
              fb: "Sin embargo = however / nevertheless. Used to introduce a contrast.",
            },
          ],
        },
      ],
    },
    {
      slug: "connectors-paragraph",
      title: "Building longer texts",
      estMinutes: 6,
      pages: [
        {
          type: "vocab",
          heading: "Sequencing and structuring ideas",
          items: [
            { l1: "primero / en primer lugar", en: "first / in the first place" },
            { l1: "luego / después", en: "then / afterwards" },
            { l1: "finalmente / por último", en: "finally / lastly" },
            { l1: "por ejemplo", en: "for example" },
            { l1: "es decir", en: "that is to say / i.e." },
            { l1: "en cambio", en: "on the other hand / instead" },
            { l1: "no obstante", en: "however / nevertheless" },
            { l1: "en conclusión", en: "in conclusion" },
          ],
        },
        {
          type: "vocab",
          heading: "A connected paragraph",
          intro: "Notice how connectors make this flow naturally.",
          items: [
            { l1: "Primero, visité el Prado.", en: "First, I visited the Prado." },
            { l1: "Después, fui a comer tapas.", en: "Then, I went to eat tapas." },
            { l1: "Sin embargo, hacía mucho calor.", en: "However, it was very hot." },
            { l1: "Por eso, volví pronto al hotel.", en: "That's why I returned to the hotel early." },
            { l1: "En resumen, fue un día estupendo.", en: "In summary, it was a great day." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Connectors check",
          questions: [
            {
              q: "'En cambio' is closest in meaning to…",
              options: ["Also", "On the other hand / instead", "Because of that", "In conclusion"],
              correct: 1,
              fb: "En cambio = on the other hand / instead. Contrasts two different situations.",
            },
            {
              q: "'Es decir' is used to…",
              options: ["Introduce a new topic", "Clarify or rephrase what was just said", "Conclude an argument", "Add an example"],
              correct: 1,
              fb: "Es decir = that is to say / i.e. Used to clarify or rephrase.",
            },
          ],
        },
      ],
    }
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "Y changes to 'e' before…", options: ["a/ha", "i/hi", "o/ho", "u/hu"], correct: 1 },
      { q: "O changes to 'u' before…", options: ["i/hi", "a/ha", "o/ho", "e/he"], correct: 2 },
      { q: "'Sino' vs 'pero': sino is used…", options: ["Before adjectives", "After a negative to introduce a correction", "Only in formal Spanish", "Meaning 'also'"], correct: 1 },
      { q: "'Aunque' means…", options: ["because", "so", "although", "also"], correct: 2 },
      { q: "'Por eso' means…", options: ["for now", "that's why", "however", "also"], correct: 1 },
      { q: "'Así que' means…", options: ["although", "however", "so/therefore", "because"], correct: 2 },
      { q: "'Tampoco' means…", options: ["also/too", "neither/not either", "but", "when"], correct: 1 },
      { q: "'Sin embargo' means…", options: ["and also", "because of that", "however/nevertheless", "so that"], correct: 2 },
      { q: "Which is correct: 'habla inglés _ italiano'?", options: ["y italiano", "e italiano", "o italiano", "i italiano"], correct: 1 },
      { q: "'Además' means…", options: ["although", "however", "furthermore/also", "then/so"], correct: 2 },
    ],
  },
};
