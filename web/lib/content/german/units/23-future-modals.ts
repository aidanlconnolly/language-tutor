import type { Unit } from "../../types";

export const UNIT_FUTURE_MODALS: Unit = {
  slug: "future-modals",
  stage: 5,
  order: 23,
  icon: "⏩",
  title: "Future & modal verbs",
  tagline: "werden for the future, plus können/müssen/wollen/dürfen.",
  badge: "core",
  lessons: [
    {
      slug: "future-modals-the-six",
      title: "The six modal verbs",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Modals reshape the whole sentence",
          body: [
            "German has six modal verbs: <strong>können</strong> (can), <strong>müssen</strong> (must/have to), <strong>wollen</strong> (want to), <strong>dürfen</strong> (be allowed to), <strong>sollen</strong> (should), <strong>mögen / möchten</strong> (like / would like).",
            "A modal sits in <strong>second position</strong> and kicks the main verb — as a plain infinitive — to the <strong>very end</strong>: <em>Ich kann gut schwimmen.</em> = I can swim well. <em>Wir müssen jetzt gehen.</em> = We have to go now.",
            "Modals are irregular in the singular (vowel often changes) but regular in the plural. The ich and er/sie/es forms look identical — no -t on er.",
          ],
          keyPoint:
            "Modal in 2nd position, infinitive at the end. ich = er/sie/es (no -t): ich kann / er kann.",
        },
        {
          type: "conjugation",
          heading: "können — can / to be able to",
          verb: "können",
          meaning: "can / to be able to",
          tenses: [
            {
              name: "Präsens",
              forms: [
                { person: "ich", form: "kann", en: "I can" },
                { person: "du", form: "kannst", en: "you can" },
                { person: "er/sie/es", form: "kann", en: "he/she/it can" },
                { person: "wir", form: "können", en: "we can" },
                { person: "ihr", form: "könnt", en: "you all can" },
                { person: "sie/Sie", form: "können", en: "they / you (formal) can" },
              ],
            },
          ],
        },
        {
          type: "conjugation",
          heading: "müssen — must / to have to",
          verb: "müssen",
          meaning: "must / to have to",
          tenses: [
            {
              name: "Präsens",
              forms: [
                { person: "ich", form: "muss", en: "I must" },
                { person: "du", form: "musst", en: "you must" },
                { person: "er/sie/es", form: "muss", en: "he/she/it must" },
                { person: "wir", form: "müssen", en: "we must" },
                { person: "ihr", form: "müsst", en: "you all must" },
                { person: "sie/Sie", form: "müssen", en: "they / you (formal) must" },
              ],
            },
          ],
        },
        {
          type: "conjugation",
          heading: "wollen — to want to",
          verb: "wollen",
          meaning: "to want to",
          tenses: [
            {
              name: "Präsens",
              forms: [
                { person: "ich", form: "will", en: "I want" },
                { person: "du", form: "willst", en: "you want" },
                { person: "er/sie/es", form: "will", en: "he/she/it wants" },
                { person: "wir", form: "wollen", en: "we want" },
                { person: "ihr", form: "wollt", en: "you all want" },
                { person: "sie/Sie", form: "wollen", en: "they / you (formal) want" },
              ],
            },
          ],
        },
        {
          type: "conjugation",
          heading: "dürfen — to be allowed to",
          verb: "dürfen",
          meaning: "may / to be allowed to",
          tenses: [
            {
              name: "Präsens",
              forms: [
                { person: "ich", form: "darf", en: "I may" },
                { person: "du", form: "darfst", en: "you may" },
                { person: "er/sie/es", form: "darf", en: "he/she/it may" },
                { person: "wir", form: "dürfen", en: "we may" },
                { person: "ihr", form: "dürft", en: "you all may" },
                { person: "sie/Sie", form: "dürfen", en: "they / you (formal) may" },
              ],
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Modal + infinitive at the end",
          items: [
            {
              template: "Ich ___ gut Deutsch ___ . (können / sprechen)",
              answer: "kann / sprechen",
              en: "I can speak German well.",
              options: ["kann / sprechen", "kann / spreche", "kann / gesprochen", "könne / sprechen"],
            },
            {
              template: "Wir ___ jetzt ___ . (müssen / gehen)",
              answer: "müssen / gehen",
              en: "We have to go now.",
              options: ["müssen / gehen", "muss / gehen", "müssen / gegangen", "müssen / gehe"],
            },
            {
              template: "___ du ein Eis ___ ? (wollen / essen)",
              answer: "Willst / essen",
              en: "Do you want to eat an ice cream?",
              options: ["Willst / essen", "Willst / isst", "Wollst / essen", "Willst / gegessen"],
            },
            {
              template: "Man ___ hier nicht ___ . (dürfen / rauchen)",
              answer: "darf / rauchen",
              en: "You're not allowed to smoke here.",
              options: ["darf / rauchen", "darf / raucht", "dürfen / rauchen", "darf / geraucht"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I want to learn German and I have to study a lot.",
          reference: "Ich will Deutsch lernen und ich muss viel lernen.",
          hint: "Two modals, each pushing an infinitive to the end: will ... lernen / muss ... lernen.",
        },
      ],
    },
    {
      slug: "future-modals-werden",
      title: "The future: present tense & Futur I",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Most of the time, the present IS the future",
          body: [
            "German usually expresses the future with the <strong>present tense plus a time word</strong>: <em>Morgen fahre ich nach Berlin.</em> = Tomorrow I'm going to Berlin. If the time is clear, you rarely need a special future tense.",
            "For predictions, intentions, or to stress the future, use <strong>Futur I</strong>: <strong>werden (conjugated) + infinitive (at the end)</strong>. <em>Ich werde dich anrufen.</em> = I will call you.",
            "<em>werden</em> works just like a modal here: it goes in second position, the infinitive waits at the end.",
          ],
          keyPoint:
            "Future = present + time word (Morgen fahre ich…), OR Futur I = werden + infinitive (Ich werde anrufen).",
        },
        {
          type: "conjugation",
          heading: "werden — will (future helper)",
          verb: "werden",
          meaning: "will / to become (future helper)",
          intro: "Note the vowel change in du/er and the odd 'wird' for er/sie/es.",
          tenses: [
            {
              name: "Präsens (used to build Futur I)",
              forms: [
                { person: "ich", form: "werde", en: "I will" },
                { person: "du", form: "wirst", en: "you will" },
                { person: "er/sie/es", form: "wird", en: "he/she/it will" },
                { person: "wir", form: "werden", en: "we will" },
                { person: "ihr", form: "werdet", en: "you all will" },
                { person: "sie/Sie", form: "werden", en: "they / you (formal) will" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Future time words",
          items: [
            { l1: "morgen", en: "tomorrow" },
            { l1: "übermorgen", en: "the day after tomorrow" },
            { l1: "heute Abend", en: "this evening" },
            { l1: "nächste Woche", en: "next week", note: "Feminine: nächste Woche." },
            { l1: "nächsten Monat", en: "next month", note: "Masculine: nächsten Monat." },
            { l1: "nächstes Jahr", en: "next year", note: "Neuter: nächstes Jahr." },
            { l1: "bald", en: "soon" },
            { l1: "in einer Stunde", en: "in an hour" },
            { l1: "später", en: "later" },
            { l1: "in Zukunft", en: "in (the) future" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Present-as-future & Futur I",
          items: [
            {
              template: "Morgen ___ ich nach Hamburg. (fahren, present-as-future)",
              answer: "fahre",
              en: "Tomorrow I'm going to Hamburg.",
              options: ["fahre", "werde", "fuhr", "gefahren"],
            },
            {
              template: "Ich ___ dich heute Abend ___ . (werden / anrufen)",
              answer: "werde / anrufen",
              en: "I will call you this evening.",
              options: ["werde / anrufen", "werde / angerufen", "wird / anrufen", "werde / anrufe"],
            },
            {
              template: "Es ___ morgen sicher ___ . (werden / regnen)",
              answer: "wird / regnen",
              en: "It will surely rain tomorrow.",
              options: ["wird / regnen", "werden / regnen", "wird / geregnet", "wird / regne"],
            },
            {
              template: "Nächstes Jahr ___ wir nach Italien ___ . (werden / reisen)",
              answer: "werden / reisen",
              en: "Next year we will travel to Italy.",
              options: ["werden / reisen", "wird / reisen", "werden / gereist", "werden / reise"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Tomorrow I will visit my friend and we will cook together.",
          reference: "Morgen werde ich meinen Freund besuchen und wir werden zusammen kochen.",
          hint: "Futur I: werde ... besuchen / werden ... kochen. Time word morgen pushes werde to second position.",
        },
      ],
    },
    {
      slug: "future-modals-plans",
      title: "Putting plans together",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Talking about plans and intentions",
          body: [
            "To talk about plans, you'll mix modals and the future: <em>Ich will</em> (I want to), <em>Ich möchte</em> (I'd like to — polite), <em>Ich werde</em> (I will), and the plain present with a time word.",
            "<strong>möchten</strong> is the polite cousin of <em>wollen</em>: <em>Ich möchte einen Kaffee.</em> = I'd like a coffee. Use it in shops and restaurants.",
            "Remember the sentence bracket: the conjugated modal/werden in second position, the infinitive at the end.",
          ],
          keyPoint:
            "Plans toolkit: möchte (would like), will (want to), werde (will), present + time word. Infinitive at the end.",
        },
        {
          type: "dialogue",
          heading: "Weekend plans in Berlin",
          setup: "Two friends plan their Saturday.",
          lines: [
            { speaker: "Max", l1: "Was willst du am Samstag machen?", en: "What do you want to do on Saturday?" },
            { speaker: "You", l1: "Ich möchte ins Museum gehen. Willst du mitkommen?", en: "I'd like to go to the museum. Do you want to come along?" },
            { speaker: "Max", l1: "Klar! Danach können wir im Park spazieren gehen.", en: "Sure! Afterwards we can go for a walk in the park." },
            { speaker: "You", l1: "Gute Idee. Am Abend werde ich kochen — du kannst gern kommen.", en: "Good idea. In the evening I'll cook — you're welcome to come." },
            { speaker: "Max", l1: "Super, aber ich muss um zehn nach Hause.", en: "Great, but I have to go home at ten." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Conjugated verb second, infinitive last.",
          items: [
            { tokens: ["Ich", "möchte", "ein", "Bier", "bestellen"], en: "I'd like to order a beer." },
            { tokens: ["Wir", "können", "morgen", "ins", "Kino", "gehen"], en: "We can go to the cinema tomorrow." },
            { tokens: ["Sie", "wird", "nächste", "Woche", "nach", "Wien", "fliegen"], en: "She will fly to Vienna next week." },
            { tokens: ["Ich", "muss", "heute", "Abend", "arbeiten"], en: "I have to work this evening." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the plans",
          items: [
            {
              template: "Ich ___ heute Abend einen Film sehen. (wollen)",
              answer: "will",
              en: "I want to watch a film this evening.",
              options: ["will", "willst", "wollen", "wollt"],
            },
            {
              template: "___ ich Ihnen helfen? (können, formal offer)",
              answer: "Kann",
              en: "Can I help you?",
              options: ["Kann", "Kannst", "Können", "Könnt"],
            },
            {
              template: "Wir ___ morgen einen Ausflug machen. (werden)",
              answer: "werden",
              en: "We will go on an excursion tomorrow.",
              options: ["werden", "wird", "werdet", "werde"],
            },
            {
              template: "Ich ___ bitte die Rechnung. (möchten)",
              answer: "möchte",
              en: "I'd like the bill, please.",
              options: ["möchte", "möchtest", "möchten", "mag"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "On Saturday I want to go to the museum, and in the evening I will cook.",
          reference: "Am Samstag will ich ins Museum gehen, und am Abend werde ich kochen.",
          hint: "Modal will + infinitive gehen; then Futur I werde ... kochen.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Where does the infinitive go after a modal?",
              options: ["Right after the modal", "At the end", "Before the subject", "In first position"],
              correct: 1,
            },
            {
              q: "'I'd like a coffee' (polite) =",
              options: ["Ich will ein Kaffee.", "Ich möchte einen Kaffee.", "Ich muss einen Kaffee.", "Ich kann einen Kaffee."],
              correct: 1,
            },
            {
              q: "Futur I formula =",
              options: ["haben + participle", "werden + infinitive", "sein + participle", "werden + participle"],
              correct: 1,
            },
            {
              q: "'er' form of werden =",
              options: ["werdet", "wirst", "wird", "werde"],
              correct: 2,
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
        q: "In a modal sentence, the main verb is…",
        options: ["conjugated in 2nd position", "an infinitive at the end", "a participle at the end", "dropped entirely"],
        correct: 1,
      },
      {
        q: "'ich' form of können =",
        options: ["kann", "könne", "kanne", "könn"],
        correct: 0,
      },
      {
        q: "'We have to go now' =",
        options: ["Wir müssen jetzt gehen.", "Wir müssen jetzt gegangen.", "Wir gehen müssen jetzt.", "Wir muss jetzt gehen."],
        correct: 0,
      },
      {
        q: "'er' form of wollen =",
        options: ["wollt", "will", "wollst", "wolle"],
        correct: 1,
      },
      {
        q: "Which modal means 'to be allowed to'?",
        options: ["müssen", "sollen", "dürfen", "mögen"],
        correct: 2,
      },
      {
        q: "Most common way to express the near future =",
        options: ["Präteritum", "present tense + time word", "Perfekt", "Konjunktiv"],
        correct: 1,
      },
      {
        q: "Futur I =",
        options: ["werden + infinitive (at end)", "werden + participle", "haben + infinitive", "sein + infinitive"],
        correct: 0,
      },
      {
        q: "'I will call you' =",
        options: ["Ich werde dich anrufen.", "Ich werde dich angerufen.", "Ich anrufe dich.", "Ich wird dich anrufen."],
        correct: 0,
      },
      {
        q: "'er/sie/es' form of werden =",
        options: ["werde", "wirst", "wird", "werdet"],
        correct: 2,
      },
      {
        q: "Polite 'I'd like…' uses which form?",
        options: ["will", "muss", "möchte", "darf"],
        correct: 2,
      },
    ],
  },
};
