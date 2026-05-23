import type { Unit } from "../types";

export const UNIT_QUESTIONS: Unit = {
  slug: "questions",
  stage: 2,
  order: 7,
  icon: "❓",
  title: "Asking questions",
  tagline: "Chi, che, dove, quando, perché, come — and the easiest interrogation trick in Italian: rising intonation.",
  badge: "core",
  lessons: [
    {
      slug: "questions-words",
      title: "The question words",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Six words you need from day one",
          body: [
            "<strong>Chi?</strong> who · <strong>Che / Cosa / Che cosa?</strong> what · <strong>Dove?</strong> where · <strong>Quando?</strong> when · <strong>Perché?</strong> why (and 'because' — same word) · <strong>Come?</strong> how.",
            "Add <strong>quale?</strong> (which) and <strong>quanto?</strong> (how much / how many), which change form by gender and number: <em>quale, quali, quanto, quanta, quanti, quante</em>.",
            "Word order: question word + verb + (subject). <em>Dove abiti?</em> (Where do you live?), <em>Cosa mangia Marco?</em> (What does Marco eat?), <em>Quando arrivano?</em> (When do they arrive?).",
          ],
          keyPoint:
            "Question word first, verb next, subject optional and usually at the end if used.",
        },
        {
          type: "vocab",
          heading: "Question words at a glance",
          items: [
            { it: "chi?", en: "who?" },
            { it: "che? / cosa? / che cosa?", en: "what? (all three are interchangeable)" },
            { it: "dove?", en: "where?" },
            { it: "quando?", en: "when?" },
            { it: "perché?", en: "why? (also = because)" },
            { it: "come?", en: "how? / how is it? / what's it like?" },
            { it: "quale? / quali?", en: "which? (sg / pl)" },
            { it: "quanto? / quanti? / quanta? / quante?", en: "how much / how many (changes with what you're counting)" },
            { it: "da dove?", en: "from where? (Da dove vieni?)" },
            { it: "a che ora?", en: "at what time?" },
          ],
        },
        {
          type: "tip",
          heading: "Watch the accent on perché",
          body: "<em>Perché</em> has an acute accent on the final e — same word means both <strong>why</strong> and <strong>because</strong>. <em>Perché studi italiano? Perché vado a Roma.</em> = Why do you study Italian? Because I'm going to Rome.",
        },
        {
          type: "multipleChoice",
          heading: "Which question word fits?",
          questions: [
            {
              q: "___ ti chiami?",
              qIt: "I'm Marco.",
              options: ["Chi", "Come", "Dove", "Cosa"],
              correct: 1,
              fb: "'Come ti chiami?' = literally 'How do you call yourself?' = What's your name?",
            },
            {
              q: "___ abiti?",
              qIt: "I live in Rome.",
              options: ["Quanto", "Quando", "Dove", "Che"],
              correct: 2,
              fb: "Dove = where.",
            },
            {
              q: "___ anni hai?",
              qIt: "I'm 35.",
              options: ["Quanto", "Quanti", "Come", "Chi"],
              correct: 1,
              fb: "'Anni' is plural masculine → quanti.",
            },
            {
              q: "___ è quella ragazza?",
              qIt: "That's my sister.",
              options: ["Cosa", "Come", "Chi", "Dove"],
              correct: 2,
              fb: "Chi = who.",
            },
            {
              q: "___ studi italiano?",
              qIt: "Because I'm going to Rome.",
              options: ["Cosa", "Perché", "Come", "Quando"],
              correct: 1,
              fb: "Perché doubles as 'why' and 'because'.",
            },
          ],
        },
      ],
    },
    {
      slug: "questions-intonation",
      title: "Yes/no questions — just go up at the end",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Italian yes/no questions = rising intonation",
          body: [
            "English flips word order: \"You speak Italian → Do you speak Italian?\" Italian doesn't. You say the same sentence and just <strong>raise your voice at the end</strong>: <em>Parli italiano? ↗</em>",
            "Optionally add a subject pronoun at the start OR end for emphasis: <em>Tu parli italiano?</em> or <em>Parli italiano, tu?</em> — either is fine, slightly emphatic.",
            "Common tags at the end: <strong>vero?</strong> / <strong>no?</strong> (right? / no?). <em>Parli italiano, vero?</em> = You speak Italian, right?",
          ],
          keyPoint:
            "Statement word order + rising intonation = yes/no question. No 'do/does' to translate.",
        },
        {
          type: "listen",
          heading: "Hear the rising intonation",
          intro: "TTS will say each one; the rising tone on the last syllable signals a question.",
          items: [
            { it: "Parli italiano?", en: "Do you speak Italian?", options: ["You speak Italian.", "Do you speak Italian?", "Speak Italian!", "I speak Italian."], correct: 1 },
            { it: "Hai fame?", en: "Are you hungry?", options: ["I'm hungry.", "Are you hungry?", "He's hungry.", "We're hungry."], correct: 1 },
            { it: "Abita a Roma?", en: "Does he/she live in Rome?", options: ["I live in Rome.", "He lives in Rome.", "Does he/she live in Rome?", "Live in Rome!"], correct: 2 },
            { it: "Siete americani?", en: "Are you (all) American?", options: ["We are American.", "Are you all American?", "They are American.", "I am American."], correct: 1 },
          ],
        },
        {
          type: "dialogue",
          heading: "Quick exchanges",
          setup: "Two strangers chatting at a café.",
          lines: [
            { speaker: "A", it: "Sei in vacanza?", en: "Are you on vacation?" },
            { speaker: "B", it: "Sì, sono qui per una settimana. Tu sei di Roma?", en: "Yes, I'm here for a week. Are you from Rome?" },
            { speaker: "A", it: "No, sono di Bologna, ma lavoro a Roma. Ti piace la città?", en: "No, I'm from Bologna, but I work in Rome. Do you like the city?" },
            { speaker: "B", it: "Moltissimo! Hai un consiglio per la cena?", en: "A lot! Do you have a tip for dinner?" },
            { speaker: "A", it: "Conosci Trastevere? C'è una trattoria fantastica.", en: "Do you know Trastevere? There's a fantastic trattoria." },
          ],
        },
        {
          type: "orderWords",
          heading: "Form the yes/no question",
          items: [
            { tokens: ["Parli", "francese", "?"], en: "Do you speak French?" },
            { tokens: ["Avete", "una", "prenotazione", "?"], en: "Do you (all) have a reservation?" },
            { tokens: ["Sei", "americano", ",", "vero", "?"], en: "You're American, right?" },
            { tokens: ["Conosci", "questo", "ristorante", "?"], en: "Do you know this restaurant?" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-it",
          prompt: "Are you hungry? Do you want a pizza?",
          reference: "Hai fame? Vuoi una pizza?",
          hint: "Italian uses 'avere' for hunger. No 'do' to translate — just intonation.",
        },
      ],
    },
    {
      slug: "questions-real-life",
      title: "Real-world question patterns",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "The 10 questions you'll actually use in Rome",
          body: [
            "Some questions don't follow a formula — they're idioms. Memorize them whole.",
            "<em>Come stai?</em> (How are you?) → <em>Come va?</em> is more casual.",
            "<em>Quanto costa?</em> (How much does it cost?) and <em>Quanto fa?</em> (How much is it total?) — bartenders/cashiers say <em>quanto fa</em>.",
            "<em>Mi scusi, dov'è…?</em> — the polite 'excuse me, where is…?' — your most-used Rome phrase.",
            "<em>Posso…?</em> = May I…? <em>Posso pagare con la carta? Posso vedere il menù?</em>",
          ],
        },
        {
          type: "vocab",
          heading: "Essential question phrases",
          items: [
            { it: "Come stai? / Come sta?", en: "How are you? (informal / formal)" },
            { it: "Come va?", en: "How's it going?" },
            { it: "Quanto costa?", en: "How much does it cost?" },
            { it: "Quanto fa?", en: "How much is it? (total)" },
            { it: "Mi scusi, dov'è…?", en: "Excuse me, where is…?" },
            { it: "Posso…?", en: "May I…?" },
            { it: "Vorrei…", en: "I'd like… (this isn't a question, but pairs with them)" },
            { it: "Mi può aiutare?", en: "Can you help me? (formal)" },
            { it: "Parla inglese?", en: "Do you speak English? (formal)" },
            { it: "A che ora apre / chiude?", en: "What time does it open / close?" },
            { it: "Ha la prenotazione?", en: "Do you have a reservation? (formal)" },
            { it: "Che cosa consiglia?", en: "What do you recommend? (formal)" },
          ],
        },
        {
          type: "tip",
          heading: "Formal vs informal in questions",
          body: "Strangers, shopkeepers, waiters → <strong>Lei</strong> (formal), so verbs are in 3rd person singular: <em>Mi scusi, ha…?</em> not <em>hai…?</em> When in doubt as a tourist, default to formal — it never sounds wrong, and Italians appreciate the effort.",
          example: { it: "Mi scusi, sa dov'è la metro più vicina?", en: "Excuse me, do you know where the nearest metro is?" },
        },
        {
          type: "fillBlank",
          heading: "Build the question",
          items: [
            {
              template: "Mi scusi, ___ è la stazione?",
              answer: "dov'",
              en: "Excuse me, where is the station?",
              options: ["come", "dov'", "che", "quanto"],
            },
            {
              template: "___ costa il biglietto?",
              answer: "Quanto",
              en: "How much does the ticket cost?",
              options: ["Quanto", "Quale", "Come", "Cosa"],
            },
            {
              template: "___ ora apre il museo?",
              answer: "A che",
              en: "What time does the museum open?",
              options: ["Quando", "Come", "A che", "Quanto"],
            },
            {
              template: "___ pagare con la carta?",
              answer: "Posso",
              en: "May I pay by card?",
              options: ["Devo", "Posso", "Voglio", "Faccio"],
            },
            {
              template: "___ va il caffè?",
              answer: "Come",
              en: "How is the coffee?",
              options: ["Cosa", "Chi", "Come", "Dove"],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "Asking around in Rome",
          setup: "You're a tourist looking for the Pantheon.",
          lines: [
            { speaker: "You", it: "Mi scusi, signora. Dov'è il Pantheon?", en: "Excuse me, ma'am. Where is the Pantheon?" },
            { speaker: "Signora", it: "È molto vicino! Vede quella strada? Sempre dritto, poi a sinistra.", en: "It's very close! See that street? Straight ahead, then left." },
            { speaker: "You", it: "Quanto tempo a piedi?", en: "How long on foot?" },
            { speaker: "Signora", it: "Cinque minuti, non di più.", en: "Five minutes, no more." },
            { speaker: "You", it: "E un buon bar qui vicino?", en: "And a good café nearby?" },
            { speaker: "Signora", it: "Sì! Il Caffè Sant'Eustachio è famoso. Costa un po' di più, ma il caffè è il migliore di Roma.", en: "Yes! Caffè Sant'Eustachio is famous. It costs a bit more, but the coffee is the best in Rome." },
            { speaker: "You", it: "Grazie mille, signora!", en: "Thank you so much, ma'am!" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-it",
          prompt: "Excuse me, do you speak English? How much does this cost?",
          reference: "Mi scusi, parla inglese? Quanto costa questo?",
          hint: "Use the formal 'Lei' verb endings (parla, not parli). 'This' = questo/questa.",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "'Where do you live?' (informal) =",
        options: ["Dove vivi?", "Dov'è vivi?", "Dove tu vivi?", "Vivi dove?"],
        correct: 0,
      },
      {
        q: "Which means 'why' AND 'because'?",
        options: ["Perché", "Quanto", "Quale", "Come"],
        correct: 0,
      },
      {
        q: "'How old are you?' =",
        options: ["Come sei vecchio?", "Quanti anni hai?", "Che età sei?", "Quanto anni hai?"],
        correct: 1,
      },
      {
        q: "Italian yes/no questions differ from statements by…",
        options: [
          "Word order flip",
          "Adding 'fa' or 'do'",
          "Rising intonation only",
          "Adding 'che' at the start",
        ],
        correct: 2,
      },
      {
        q: "Formal 'Do you speak English?' =",
        options: ["Parli inglese?", "Parla inglese?", "Sei inglese?", "Tu parli inglese?"],
        correct: 1,
      },
      {
        q: "'What time does it open?' =",
        options: [
          "Quando apre?",
          "A che ora apre?",
          "Che tempo apre?",
          "Come apre?",
        ],
        correct: 1,
      },
      {
        q: "'May I pay by card?' =",
        options: [
          "Pago con la carta?",
          "Posso pago con la carta?",
          "Posso pagare con la carta?",
          "Voglio pagare con la carta.",
        ],
        correct: 2,
      },
      {
        q: "Three Italian words for 'what' are…",
        options: [
          "Che, cosa, che cosa",
          "Chi, che, come",
          "Cosa, dove, quando",
          "Che, chi, quale",
        ],
        correct: 0,
      },
      {
        q: "'How much is it?' (cashier's phrase) =",
        options: ["Quanto costa?", "Quanto fa?", "Quanti euro?", "Quale è?"],
        correct: 1,
      },
      {
        q: "Translate: 'Who are you?'",
        options: ["Cosa sei?", "Come sei?", "Chi sei?", "Dove sei?"],
        correct: 2,
      },
    ],
  },
};
