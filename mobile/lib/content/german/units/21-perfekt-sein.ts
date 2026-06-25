import type { Unit } from "../../types";

export const UNIT_PERFEKT_SEIN: Unit = {
  slug: "perfekt-sein",
  stage: 5,
  order: 21,
  icon: "🏃",
  title: "Perfekt (sein)",
  tagline: "Ich bin gegangen — motion & change-of-state verbs.",
  badge: "core",
  lessons: [
    {
      slug: "perfekt-sein-which-verbs",
      title: "Which verbs take sein?",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Some verbs build the Perfekt with sein, not haben",
          body: [
            "Most verbs use <em>haben</em>, but a special group uses <strong>sein</strong> as the helper. Two questions tell you which: does the verb describe <strong>movement from A to B</strong>, or a <strong>change of state</strong>?",
            "Motion verbs: gehen (go), fahren (drive/travel), kommen (come), laufen (run), fliegen (fly), reisen (travel).",
            "Change-of-state verbs: werden (become), aufstehen (get up), einschlafen (fall asleep), sterben (die). Plus three odd memorize-them verbs: <em>sein → gewesen</em> (been), <em>bleiben → geblieben</em> (stayed), <em>passieren → passiert</em> (happened).",
            "These verbs have no direct object — you don't \"go something.\" That's the giveaway that they likely take <em>sein</em>.",
          ],
          keyPoint:
            "sein = motion (gehen, fahren, kommen) or change of state (werden, aufstehen). Plus the trio: sein → gewesen, bleiben → geblieben, passieren → passiert.",
        },
        {
          type: "conjugation",
          heading: "sein — the other Perfekt helper",
          verb: "sein",
          meaning: "to be (helper for motion/change verbs)",
          intro: "Learn this present tense alongside haben — together they cover the whole spoken past.",
          tenses: [
            {
              name: "Präsens (used as the Perfekt helper)",
              forms: [
                { person: "ich", form: "bin", en: "I am" },
                { person: "du", form: "bist", en: "you are" },
                { person: "er/sie/es", form: "ist", en: "he/she/it is" },
                { person: "wir", form: "sind", en: "we are" },
                { person: "ihr", form: "seid", en: "you all are" },
                { person: "sie/Sie", form: "sind", en: "they / you (formal) are" },
              ],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "haben or sein?",
          intro: "Decide which helper the verb takes in the Perfekt.",
          questions: [
            {
              q: "gehen (to go) — which helper?",
              options: ["haben", "sein"],
              correct: 1,
              fb: "Motion from A to B → sein. Ich bin gegangen.",
            },
            {
              q: "essen (to eat) — which helper?",
              options: ["haben", "sein"],
              correct: 0,
              fb: "It has a direct object and no motion → haben. Ich habe gegessen.",
            },
            {
              q: "bleiben (to stay) — which helper?",
              options: ["haben", "sein"],
              correct: 1,
              fb: "A memorize-it exception → sein. Ich bin geblieben.",
            },
            {
              q: "kaufen (to buy) — which helper?",
              options: ["haben", "sein"],
              correct: 0,
              fb: "Has a direct object, no motion → haben.",
            },
            {
              q: "werden (to become) — which helper?",
              options: ["haben", "sein"],
              correct: 1,
              fb: "Change of state → sein. Ich bin geworden.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I went home and stayed there.",
          reference: "Ich bin nach Hause gegangen und dort geblieben.",
          hint: "Both verbs take sein: bin ... gegangen, (bin) ... geblieben.",
        },
      ],
    },
    {
      slug: "perfekt-sein-participles",
      title: "Common sein-participles",
      estMinutes: 9,
      pages: [
        {
          type: "vocab",
          heading: "The sein-verb participle list",
          intro: "Most are strong (ge-...-en). Learn the verb together with its helper, e.g. 'gehen → ist gegangen'.",
          items: [
            { l1: "gehen → ist gegangen", en: "went / has gone" },
            { l1: "fahren → ist gefahren", en: "drove / travelled" },
            { l1: "kommen → ist gekommen", en: "came" },
            { l1: "laufen → ist gelaufen", en: "ran / walked" },
            { l1: "fliegen → ist geflogen", en: "flew" },
            { l1: "bleiben → ist geblieben", en: "stayed" },
            { l1: "werden → ist geworden", en: "became" },
            { l1: "aufstehen → ist aufgestanden", en: "got up", note: "Separable: -ge- sits inside, aufgestanden." },
            { l1: "reisen → ist gereist", en: "travelled", note: "Weak: ge-...-t but still takes sein (motion)." },
            { l1: "passieren → ist passiert", en: "happened", note: "No ge- (ends in -ieren); takes sein." },
            { l1: "sein → ist gewesen", en: "was / has been", note: "Sein itself takes sein in the Perfekt." },
          ],
        },
        {
          type: "tip",
          heading: "Spoken German loves 'war' for 'was'",
          body: "You <em>can</em> say <em>Ich bin in Berlin gewesen</em>, but in everyday speech Germans usually prefer the simpler Präteritum <strong>war</strong>: <em>Ich war in Berlin</em> (\"I was in Berlin\"). You'll learn <em>war</em> and <em>hatte</em> in the next unit — for now, just recognize that <em>gewesen</em> exists and takes <em>sein</em>.",
          example: { l1: "Ich bin gestern im Park gewesen.", en: "I was in the park yesterday." },
        },
        {
          type: "fillBlank",
          heading: "Build the sein-Perfekt",
          items: [
            {
              template: "Ich ___ nach Berlin ___ . (fahren)",
              answer: "bin / gefahren",
              en: "I travelled to Berlin.",
              options: ["bin / gefahren", "habe / gefahren", "bin / gefahrt", "bin / fahren"],
            },
            {
              template: "Sie ___ um sieben Uhr ___ . (aufstehen)",
              answer: "ist / aufgestanden",
              en: "She got up at seven.",
              options: ["ist / aufgestanden", "hat / aufgestanden", "ist / aufgestehen", "ist / aufstand"],
            },
            {
              template: "Wir ___ zu Hause ___ . (bleiben)",
              answer: "sind / geblieben",
              en: "We stayed at home.",
              options: ["sind / geblieben", "haben / geblieben", "sind / gebleibt", "sind / bleiben"],
            },
            {
              template: "___ du nach Hause ___ ? (kommen)",
              answer: "Bist / gekommen",
              en: "Did you come home?",
              options: ["Bist / gekommen", "Hast / gekommen", "Bist / gekommt", "Bist / kommen"],
            },
            {
              template: "Was ___ ___ ? (passieren)",
              answer: "ist / passiert",
              en: "What happened?",
              options: ["ist / passiert", "hat / passiert", "ist / gepassiert", "ist / passieren"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "She flew to Munich and travelled by train to Berlin.",
          reference: "Sie ist nach München geflogen und mit dem Zug nach Berlin gefahren.",
          hint: "Both motion verbs take sein: ist geflogen, (ist) gefahren.",
        },
      ],
    },
    {
      slug: "perfekt-sein-narrative",
      title: "Mixing haben & sein in a story",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Real stories use both helpers",
          body: [
            "A natural account switches helper verb-by-verb: you <em>bist gefahren</em> (motion → sein) but <em>hast gegessen</em> (no motion → haben).",
            "Pick the helper for each verb, then conjugate it for your subject. The participle never changes form, no matter the helper.",
            "Keep the bracket: helper in second position, participle at the end of each clause.",
          ],
          keyPoint:
            "Choose the helper per verb: motion/change → sein, everything else → haben. Both put the participle at the end.",
        },
        {
          type: "dialogue",
          heading: "A day trip to Potsdam",
          setup: "Lena tells a friend about her Sunday.",
          lines: [
            { speaker: "Friend", l1: "Was hast du am Sonntag gemacht?", en: "What did you do on Sunday?" },
            { speaker: "Lena", l1: "Ich bin früh aufgestanden und mit dem Zug nach Potsdam gefahren.", en: "I got up early and took the train to Potsdam." },
            { speaker: "Friend", l1: "Und was hast du dort gemacht?", en: "And what did you do there?" },
            { speaker: "Lena", l1: "Ich habe das Schloss gesehen und im Park ein Eis gegessen.", en: "I saw the palace and ate an ice cream in the park." },
            { speaker: "Friend", l1: "Bist du lange geblieben?", en: "Did you stay long?" },
            { speaker: "Lena", l1: "Ja, ich bin erst am Abend nach Hause gekommen.", en: "Yes, I only came home in the evening." },
          ],
        },
        {
          type: "fillBlank",
          heading: "haben or sein in the blank?",
          intro: "Choose the correct helper for each verb.",
          items: [
            {
              template: "Ich ___ um acht aufgestanden und ___ einen Kaffee getrunken.",
              answer: "bin / habe",
              en: "I got up at eight and drank a coffee.",
              options: ["bin / habe", "habe / bin", "bin / bin", "habe / habe"],
            },
            {
              template: "Wir ___ nach Hamburg gefahren und ___ den Hafen gesehen.",
              answer: "sind / haben",
              en: "We travelled to Hamburg and saw the harbour.",
              options: ["sind / haben", "haben / sind", "sind / sind", "haben / haben"],
            },
            {
              template: "Er ___ zu Hause geblieben, weil er krank ___ .",
              answer: "ist / war",
              en: "He stayed home because he was ill.",
              options: ["ist / war", "hat / war", "ist / hatte", "hat / hatte"],
            },
            {
              template: "___ ihr gestern ins Kino gegangen?",
              answer: "Seid",
              en: "Did you all go to the cinema yesterday?",
              options: ["Seid", "Habt", "Sind", "Seit"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Arrange the words; helper second, participle last.",
          items: [
            { tokens: ["Ich", "bin", "nach", "Berlin", "gefahren"], en: "I travelled to Berlin." },
            { tokens: ["Wir", "haben", "im", "Park", "Fußball", "gespielt"], en: "We played football in the park." },
            { tokens: ["Sie", "ist", "spät", "nach", "Hause", "gekommen"], en: "She came home late." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I got up early, travelled to Potsdam, and ate an ice cream.",
          reference: "Ich bin früh aufgestanden, nach Potsdam gefahren und ein Eis gegessen.",
          hint: "Mix the helpers: bin aufgestanden, (bin) gefahren — but 'gegessen' wants 'habe'.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which verb takes sein?",
              options: ["essen", "kaufen", "fahren", "lesen"],
              correct: 2,
            },
            {
              q: "'I stayed home' =",
              options: ["Ich habe zu Hause geblieben.", "Ich bin zu Hause geblieben.", "Ich bin zu Hause gebleibt.", "Ich habe zu Hause bleiben."],
              correct: 1,
            },
            {
              q: "Participle of 'aufstehen' =",
              options: ["aufgestanden", "aufstanden", "geaufstanden", "aufgestehen"],
              correct: 0,
            },
            {
              q: "'What happened?' =",
              options: ["Was hat passiert?", "Was ist passiert?", "Was ist gepassiert?", "Was passiert?"],
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
        q: "Verbs that take sein in the Perfekt typically express…",
        options: ["a direct object", "motion or change of state", "an opinion", "possession"],
        correct: 1,
      },
      {
        q: "'gehen' in the Perfekt =",
        options: ["hat gegangen", "ist gegangen", "ist gegeht", "hat gegeht"],
        correct: 1,
      },
      {
        q: "'fahren' in the Perfekt =",
        options: ["hat gefahren", "ist gefahrt", "ist gefahren", "hat gefahrt"],
        correct: 2,
      },
      {
        q: "Which verb takes haben?",
        options: ["kommen", "bleiben", "trinken", "werden"],
        correct: 2,
      },
      {
        q: "'We stayed' =",
        options: ["Wir haben geblieben.", "Wir sind geblieben.", "Wir sind gebleibt.", "Wir haben bleiben."],
        correct: 1,
      },
      {
        q: "Participle of 'werden' =",
        options: ["geworden", "gewordt", "gewerden", "geworen"],
        correct: 0,
      },
      {
        q: "'She came home late' =",
        options: ["Sie hat spät nach Hause gekommen.", "Sie ist spät nach Hause gekommen.", "Sie ist spät nach Hause gekommt.", "Sie kommt spät nach Hause."],
        correct: 1,
      },
      {
        q: "'sein' (to be) in the Perfekt =",
        options: ["hat gewesen", "ist gewesen", "ist gesein", "hat gesein"],
        correct: 1,
      },
      {
        q: "In 'Ich bin nach Berlin gefahren', the helper is…",
        options: ["bin", "nach", "Berlin", "gefahren"],
        correct: 0,
      },
      {
        q: "'I got up and drank a coffee' =",
        options: [
          "Ich habe aufgestanden und bin einen Kaffee getrunken.",
          "Ich bin aufgestanden und habe einen Kaffee getrunken.",
          "Ich bin aufgestanden und bin einen Kaffee getrunken.",
          "Ich habe aufgestanden und habe einen Kaffee getrunken.",
        ],
        correct: 1,
      },
    ],
  },
};
