import type { Unit } from "../../types";

export const UNIT_PERFEKT: Unit = {
  slug: "perfekt",
  stage: 5,
  order: 20,
  icon: "⏪",
  title: "Perfekt (haben)",
  tagline: "Ich habe gegessen — the everyday spoken past.",
  badge: "core",
  lessons: [
    {
      slug: "perfekt-weak-haben",
      title: "haben + ge-...-t: the weak-verb past",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "How Germans talk about the past",
          body: [
            "In conversation, Germans almost always describe the past with the <strong>Perfekt</strong> — a two-part tense built from a helper verb plus a past participle. It covers both \"I made\" and \"I have made.\"",
            "Formula: <strong>haben (conjugated) + past participle (at the very end)</strong>. <em>Ich habe ein Foto gemacht.</em> = I took a photo.",
            "For regular (weak) verbs, the participle is built with a frame: <strong>ge- + stem + -t</strong>. machen → <em>gemacht</em>, kaufen → <em>gekauft</em>, spielen → <em>gespielt</em>.",
            "The helper <em>haben</em> sits in second position and changes with the subject; the participle never changes and waits at the end of the clause.",
          ],
          keyPoint:
            "Perfekt = haben + ge-...-t. Weak verbs: gemacht, gekauft, gespielt. The participle goes to the end and never changes.",
        },
        {
          type: "conjugation",
          heading: "haben — your Perfekt helper",
          verb: "haben",
          meaning: "to have (helper for Perfekt)",
          intro: "Memorize this present tense cold — it carries most of your past sentences.",
          tenses: [
            {
              name: "Präsens (used as the Perfekt helper)",
              forms: [
                { person: "ich", form: "habe", en: "I have" },
                { person: "du", form: "hast", en: "you have" },
                { person: "er/sie/es", form: "hat", en: "he/she/it has" },
                { person: "wir", form: "haben", en: "we have" },
                { person: "ihr", form: "habt", en: "you all have" },
                { person: "sie/Sie", form: "haben", en: "they / you (formal) have" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Weak participles to memorize",
          intro: "Every regular verb follows ge- + stem + -t. Verbs ending in -ieren drop the ge- (studiert, fotografiert).",
          items: [
            { l1: "machen → gemacht", en: "made / did" },
            { l1: "kaufen → gekauft", en: "bought" },
            { l1: "spielen → gespielt", en: "played" },
            { l1: "lernen → gelernt", en: "learned / studied" },
            { l1: "wohnen → gewohnt", en: "lived (resided)" },
            { l1: "arbeiten → gearbeitet", en: "worked", note: "Stems ending in -t/-d add -et: gearbeitet." },
            { l1: "kochen → gekocht", en: "cooked" },
            { l1: "hören → gehört", en: "heard / listened to" },
            { l1: "sagen → gesagt", en: "said" },
            { l1: "fragen → gefragt", en: "asked" },
            { l1: "studieren → studiert", en: "studied (at university)", note: "-ieren verbs take NO ge-." },
            { l1: "fotografieren → fotografiert", en: "photographed", note: "No ge- (ends in -ieren)." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Build the Perfekt (weak verbs)",
          items: [
            {
              template: "Gestern ___ ich einen Kaffee ___ . (kaufen)",
              answer: "habe / gekauft",
              en: "Yesterday I bought a coffee.",
              options: ["habe / gekauft", "habe / kaufen", "hat / gekauft", "habe / gekaufen"],
            },
            {
              template: "Wir ___ Fußball ___ . (spielen)",
              answer: "haben / gespielt",
              en: "We played football.",
              options: ["haben / gespielt", "habe / gespielt", "haben / spielen", "hat / gespielt"],
            },
            {
              template: "___ du Deutsch ___ ? (lernen)",
              answer: "Hast / gelernt",
              en: "Did you learn German?",
              options: ["Hast / gelernt", "Hast / lernen", "Habt / gelernt", "Hat / gelernt"],
            },
            {
              template: "Sie ___ in Berlin ___ . (arbeiten)",
              answer: "hat / gearbeitet",
              en: "She worked in Berlin.",
              options: ["hat / gearbeitet", "hat / gearbeit", "hat / arbeiten", "habe / gearbeitet"],
            },
            {
              template: "Ich ___ Medizin ___ . (studieren)",
              answer: "habe / studiert",
              en: "I studied medicine.",
              options: ["habe / studiert", "habe / gestudiert", "habe / studieren", "hat / studiert"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Yesterday I cooked and we listened to music.",
          reference: "Gestern habe ich gekocht und wir haben Musik gehört.",
          hint: "Two clauses: habe ich gekocht / wir haben ... gehört. Participles go to the end.",
        },
      ],
    },
    {
      slug: "perfekt-strong-haben",
      title: "Strong & irregular participles",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Strong verbs end in -en (and often change the vowel)",
          body: [
            "Many common verbs are <strong>strong</strong>: their participle ends in <strong>ge-...-en</strong> instead of -t, and the stem vowel often shifts.",
            "essen → <em>gegessen</em>, trinken → <em>getrunken</em>, sehen → <em>gesehen</em>, schreiben → <em>geschrieben</em>, lesen → <em>gelesen</em>.",
            "There's no rule to predict the vowel change — you memorize these the way English speakers learn \"sing/sang/sung.\" The good news: a small core set covers most everyday speech, and they still take <em>haben</em> here.",
          ],
          keyPoint:
            "Strong participles = ge-...-en, often with a vowel change: gegessen, getrunken, gesehen, geschrieben, gelesen.",
        },
        {
          type: "vocab",
          heading: "Top strong participles (with haben)",
          items: [
            { l1: "essen → gegessen", en: "ate" },
            { l1: "trinken → getrunken", en: "drank" },
            { l1: "sehen → gesehen", en: "saw" },
            { l1: "schreiben → geschrieben", en: "wrote" },
            { l1: "lesen → gelesen", en: "read (past)" },
            { l1: "nehmen → genommen", en: "took" },
            { l1: "sprechen → gesprochen", en: "spoke" },
            { l1: "finden → gefunden", en: "found" },
            { l1: "geben → gegeben", en: "gave" },
            { l1: "treffen → getroffen", en: "met" },
            { l1: "schlafen → geschlafen", en: "slept" },
            { l1: "tragen → getragen", en: "wore / carried" },
          ],
        },
        {
          type: "tip",
          heading: "Patterns that almost help",
          body: "A few groups rhyme: <em>i → u</em> in trinken → getrunken, finden → gefunden, singen → gesungen. And <em>ei → ie</em> in schreiben → geschrieben, bleiben → geblieben. Spotting a pattern speeds memorizing — but always confirm, because exceptions are everywhere.",
          example: { l1: "Ich habe ein Bier getrunken.", en: "I drank a beer." },
        },
        {
          type: "fillBlank",
          heading: "Strong participle drill",
          items: [
            {
              template: "Ich habe eine Currywurst ___ . (essen)",
              answer: "gegessen",
              en: "I ate a currywurst.",
              options: ["gegessen", "geessen", "geesst", "gegesst"],
            },
            {
              template: "Wir haben den Film ___ . (sehen)",
              answer: "gesehen",
              en: "We saw the film.",
              options: ["gesehen", "gesieht", "geseht", "gesehn"],
            },
            {
              template: "Er hat einen Brief ___ . (schreiben)",
              answer: "geschrieben",
              en: "He wrote a letter.",
              options: ["geschrieben", "geschreibt", "geschrieb", "geschriebt"],
            },
            {
              template: "Hast du das Buch ___ ? (lesen)",
              answer: "gelesen",
              en: "Did you read the book?",
              options: ["gelesen", "geliest", "gelest", "gelesst"],
            },
            {
              template: "Sie haben viel Kaffee ___ . (trinken)",
              answer: "getrunken",
              en: "They drank a lot of coffee.",
              options: ["getrunken", "getrinkt", "getrunkt", "getrank"],
            },
            {
              template: "Ich habe meine Freundin ___ . (treffen)",
              answer: "getroffen",
              en: "I met my friend.",
              options: ["getroffen", "getrefft", "getreffen", "getrofft"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "He read the newspaper and drank a coffee.",
          reference: "Er hat die Zeitung gelesen und einen Kaffee getrunken.",
          hint: "Two strong participles: gelesen, getrunken. Both take hat / haben.",
        },
      ],
    },
    {
      slug: "perfekt-word-order",
      title: "Word order & time words",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The participle always lands at the end",
          body: [
            "In a main clause, <em>haben</em> stays in <strong>second position</strong> and the participle drops to the <strong>end</strong> — even if other words pile up in between.",
            "<em>Ich habe gestern mit Anna in der Stadt ein Eis gegessen.</em> = Yesterday I ate an ice cream with Anna in town. Everything sits between the helper and <em>gegessen</em> — this is the German \"sentence bracket.\"",
            "Past time words make it sound natural: <em>gestern</em> (yesterday), <em>letzte Woche</em> (last week), <em>vor drei Tagen</em> (three days ago), <em>schon</em> (already), <em>noch nicht</em> (not yet).",
          ],
          keyPoint:
            "Sentence bracket: haben in 2nd position, participle at the end. Time words: gestern, letzte Woche, vor X Tagen, schon, noch nicht.",
        },
        {
          type: "vocab",
          heading: "Past-time vocabulary",
          items: [
            { l1: "gestern", en: "yesterday" },
            { l1: "gestern Abend", en: "yesterday evening / last night" },
            { l1: "vorgestern", en: "the day before yesterday" },
            { l1: "heute Morgen", en: "this morning" },
            { l1: "letzte Woche", en: "last week", note: "Feminine: letzte Woche." },
            { l1: "letzten Monat", en: "last month", note: "Masculine: letzten Monat." },
            { l1: "letztes Jahr", en: "last year", note: "Neuter: letztes Jahr." },
            { l1: "vor drei Tagen", en: "three days ago", note: "vor + dative; the time goes after vor." },
            { l1: "schon", en: "already" },
            { l1: "noch nicht", en: "not yet" },
            { l1: "oft", en: "often" },
            { l1: "neulich", en: "recently / the other day" },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Put the words in natural German order — participle at the end.",
          items: [
            { tokens: ["Ich", "habe", "gestern", "Pizza", "gegessen"], en: "I ate pizza yesterday." },
            { tokens: ["Wir", "haben", "letzte", "Woche", "viel", "gearbeitet"], en: "We worked a lot last week." },
            { tokens: ["Hast", "du", "den", "Film", "schon", "gesehen"], en: "Have you already seen the film?" },
            { tokens: ["Er", "hat", "vor", "drei", "Tagen", "angerufen"], en: "He called three days ago." },
          ],
        },
        {
          type: "dialogue",
          heading: "What did you do yesterday?",
          setup: "Two flatmates catch up over breakfast in Kreuzberg.",
          lines: [
            { speaker: "Jonas", l1: "Was hast du gestern gemacht?", en: "What did you do yesterday?" },
            { speaker: "You", l1: "Ich habe lange gearbeitet und dann ein Buch gelesen.", en: "I worked late and then read a book." },
            { speaker: "Jonas", l1: "Hast du schon gegessen?", en: "Have you already eaten?" },
            { speaker: "You", l1: "Noch nicht. Und du? Was hast du gemacht?", en: "Not yet. And you? What did you do?" },
            { speaker: "Jonas", l1: "Ich habe Freunde getroffen und wir haben ein Bier getrunken.", en: "I met friends and we drank a beer." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Last week we saw a film and drank wine.",
          reference: "Letzte Woche haben wir einen Film gesehen und Wein getrunken.",
          hint: "Time word first pushes 'haben' to second position: Letzte Woche haben wir ...",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Where does the past participle go in a main clause?",
              options: ["Right after the subject", "At the very end", "In second position", "Before the helper verb"],
              correct: 1,
            },
            {
              q: "Participle of 'kaufen' =",
              options: ["gekauft", "gekaufen", "kaufte", "gekaufte"],
              correct: 0,
            },
            {
              q: "'I drank a beer' =",
              options: ["Ich habe ein Bier getrinkt.", "Ich habe ein Bier getrunken.", "Ich trinke ein Bier.", "Ich bin ein Bier getrunken."],
              correct: 1,
            },
            {
              q: "Which means 'three days ago'?",
              options: ["drei Tage her", "vor drei Tagen", "drei Tagen vor", "seit drei Tage"],
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
        q: "Perfekt with haben =",
        options: ["haben + participle (at end)", "sein + present", "haben + infinitive", "werden + participle"],
        correct: 0,
      },
      {
        q: "Weak participle frame =",
        options: ["ge- + stem + -en", "ge- + stem + -t", "stem + -te", "ge- + stem + -st"],
        correct: 1,
      },
      {
        q: "Participle of 'machen' =",
        options: ["gemacht", "gemachen", "machte", "gemacht-e"],
        correct: 0,
      },
      {
        q: "Participle of 'essen' =",
        options: ["geesst", "gegessen", "geessen", "gegesst"],
        correct: 1,
      },
      {
        q: "Participle of 'schreiben' =",
        options: ["geschreibt", "geschrieben", "geschrieb", "schrieb"],
        correct: 1,
      },
      {
        q: "Why does 'studieren' have no ge-?",
        options: ["It's irregular", "Verbs ending in -ieren take no ge-", "It's a strong verb", "It uses sein"],
        correct: 1,
      },
      {
        q: "'We played football' =",
        options: ["Wir haben Fußball gespielt.", "Wir spielen Fußball.", "Wir haben Fußball spielen.", "Wir sind Fußball gespielt."],
        correct: 0,
      },
      {
        q: "'Have you already seen the film?' =",
        options: ["Hast du den Film schon gesehen?", "Hast du schon den Film sehen?", "Du hast den Film gesehen schon?", "Hast du gesehen den Film?"],
        correct: 0,
      },
      {
        q: "In 'Ich habe gestern viel gearbeitet', what is in second position?",
        options: ["gestern", "habe", "viel", "gearbeitet"],
        correct: 1,
      },
      {
        q: "Participle of 'trinken' =",
        options: ["getrinkt", "getrank", "getrunken", "getrunkt"],
        correct: 2,
      },
    ],
  },
};
