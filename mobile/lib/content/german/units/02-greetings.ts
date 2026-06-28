import type { Unit } from "../../types";

export const UNIT_GREETINGS: Unit = {
  slug: "greetings",
  stage: 1,
  order: 2,
  icon: "👋",
  title: "Greetings & du/Sie",
  tagline: "Hallo, Guten Tag, Tschüss — and formal Sie vs informal du.",
  badge: "tourist",
  lessons: [
    {
      slug: "greetings-hello-goodbye",
      title: "Hello and goodbye, by time and register",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Germans greet by time of day",
          body: [
            "The all-purpose hello is <strong>Hallo</strong> — friendly and fine almost anywhere. For something a touch more polite, Germans reach for a time-based greeting: <strong>Guten Morgen</strong> (until ~11am), <strong>Guten Tag</strong> (the daytime default), <strong>Guten Abend</strong> (from early evening).",
            "<strong>Guten Tag</strong> is the safe, neutral greeting for shops, offices and strangers — you can never go wrong with it. In casual settings you'll hear it shortened to <em>Tag!</em> or <em>'n Abend!</em>",
            "To say goodbye, <strong>Tschüss</strong> is the everyday casual choice, while <strong>Auf Wiedersehen</strong> is the formal, slightly old-fashioned 'goodbye'. <strong>Gute Nacht</strong> is only for when someone's heading to bed.",
          ],
          tip: {
            label: "Regional flavour",
            body: "In Berlin you'll mostly hear <em>Hallo</em> and <em>Tschüss</em>. Travel south and Bavarians greet with <em>Grüß Gott</em>; in the north you'll catch <em>Moin</em> (any time of day, despite sounding like 'morning').",
          },
        },
        {
          type: "vocab",
          heading: "Core greetings & farewells",
          items: [
            { l1: "Hallo", en: "hello / hi", note: "all-purpose, friendly" },
            { l1: "Guten Morgen", en: "good morning", note: "until about 11am" },
            { l1: "Guten Tag", en: "good day / hello", note: "neutral, safe for strangers" },
            { l1: "Guten Abend", en: "good evening", note: "from early evening on" },
            { l1: "Gute Nacht", en: "good night", note: "only when going to sleep" },
            { l1: "Tschüss", en: "bye", note: "casual, everyday" },
            { l1: "Auf Wiedersehen", en: "goodbye", note: "formal; literally 'until we see again'" },
            { l1: "Bis bald", en: "see you soon" },
            { l1: "Bis morgen", en: "see you tomorrow" },
          ],
        },
        {
          type: "dialogue",
          heading: "At a Berlin bakery, 8 am",
          setup: "You step into a Bäckerei in Kreuzberg for breakfast.",
          lines: [
            { speaker: "Du", l1: "Guten Morgen!", en: "Good morning!" },
            { speaker: "Verkäuferin", l1: "Guten Morgen! Was darf es sein?", en: "Good morning! What would you like?" },
            { speaker: "Du", l1: "Ein Brötchen, bitte.", en: "A bread roll, please." },
            { speaker: "Verkäuferin", l1: "Gerne. Sonst noch etwas?", en: "Sure. Anything else?" },
            { speaker: "Du", l1: "Nein, danke. Tschüss!", en: "No, thanks. Bye!" },
            { speaker: "Verkäuferin", l1: "Tschüss, schönen Tag noch!", en: "Bye, have a nice day!" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Pick the right greeting",
          questions: [
            {
              q: "You enter an office at 9am to meet someone for the first time. Safest greeting?",
              options: ["Tschüss!", "Guten Tag!", "Gute Nacht!", "Moin!"],
              correct: 1,
              fb: "Guten Tag is the neutral, never-wrong choice with strangers.",
            },
            {
              q: "You're leaving a casual café where you know the barista. You say…",
              options: ["Guten Morgen!", "Auf Wiedersehen!", "Tschüss!", "Gute Nacht!"],
              correct: 2,
              fb: "Tschüss is the everyday casual goodbye.",
            },
            {
              q: "Which greeting is reserved for going to sleep?",
              options: ["Guten Abend", "Gute Nacht", "Bis bald", "Tschüss"],
              correct: 1,
              fb: "Gute Nacht = good night, only when heading to bed.",
            },
          ],
        },
      ],
    },
    {
      slug: "greetings-please-thanks",
      title: "Bitte, danke & Entschuldigung",
      estMinutes: 7,
      pages: [
        {
          type: "vocab",
          heading: "The pocket phrasebook",
          intro: "These phrases carry you through almost any short interaction in Germany.",
          items: [
            { l1: "bitte", en: "please / you're welcome / here you go", note: "the multi-tool word" },
            { l1: "danke", en: "thank you" },
            { l1: "danke schön", en: "thank you (warmly)", note: "literally 'thanks beautifully'" },
            { l1: "vielen Dank", en: "many thanks", note: "a notch more formal/grateful" },
            { l1: "Entschuldigung", en: "excuse me / sorry", note: "to get attention or apologise" },
            { l1: "Entschuldigen Sie", en: "excuse me (formal)", note: "to stop a stranger politely" },
            { l1: "kein Problem", en: "no problem" },
            { l1: "gern geschehen", en: "you're welcome", note: "'gladly done'" },
          ],
        },
        {
          type: "tip",
          heading: "Bitte is the Swiss Army knife",
          body: "<strong>Bitte</strong> means 'please', but also 'you're welcome', 'here you go' (handing something over), and 'pardon?' (with a rising tone, <em>Wie bitte?</em> = 'sorry, what?'). When someone thanks you, the standard reflex reply is simply <em>Bitte</em> or <em>Bitte schön</em>.",
          example: { l1: "— Danke! — Bitte!", en: "— Thanks! — You're welcome!" },
        },
        {
          type: "dialogue",
          heading: "Stopping a stranger for directions",
          setup: "You're lost near Alexanderplatz and need to ask someone.",
          lines: [
            { speaker: "Du", l1: "Entschuldigung, wo ist der Bahnhof?", en: "Excuse me, where is the station?" },
            { speaker: "Passant", l1: "Geradeaus und dann links.", en: "Straight ahead and then left." },
            { speaker: "Du", l1: "Vielen Dank!", en: "Many thanks!" },
            { speaker: "Passant", l1: "Gern geschehen.", en: "You're welcome." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Tap the words into the correct order.",
          items: [
            { tokens: ["Ein", "Kaffee", "bitte"], en: "A coffee, please." },
            { tokens: ["Entschuldigung", "wo", "ist", "der", "Bahnhof"], en: "Excuse me, where is the station?" },
            { tokens: ["Vielen", "Dank", "für", "Ihre", "Hilfe"], en: "Many thanks for your help." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me, a coffee please. Thank you very much.",
          reference: "Entschuldigung, einen Kaffee bitte. Vielen Dank.",
          hint: "Use 'Entschuldigung' to open, and 'Vielen Dank' for emphatic thanks.",
        },
      ],
    },
    {
      slug: "greetings-du-vs-sie",
      title: "du vs Sie & 'How are you?'",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "German has two 'you's",
          body: [
            "<strong>du</strong> is informal — for friends, family, children, and people your own age in casual settings. <strong>Sie</strong> (always capitalised) is formal — for strangers, shopkeepers, officials, colleagues you don't know well, and anyone notably older or in authority.",
            "Grammatically, <strong>Sie</strong> behaves like the plural 'they': it takes the same verb form. <em>Sie sind…</em> = 'you are…' (formal). <em>Du bist…</em> = 'you are…' (informal).",
            "When in doubt with an adult stranger, start with <strong>Sie</strong>. Germans take this seriously — using <em>du</em> too early can read as presumptuous. The switch to <em>du</em> is often explicitly offered: <em>Wollen wir uns duzen?</em> ('Shall we use du?').",
          ],
          keyPoint: "Sie = polite 'you', capitalised, conjugates like 'they': Sie sind, Sie haben.",
        },
        {
          type: "conjugation",
          heading: "'How are you?' — informal vs formal",
          verb: "Wie geht es …?",
          meaning: "How are you?",
          intro: "Literally 'How goes it to you?' — the 'you' changes by register.",
          tenses: [
            {
              name: "Asking",
              forms: [
                { person: "du", form: "Wie geht es dir?", en: "How are you? (informal)" },
                { person: "du (casual)", form: "Wie geht's?", en: "How's it going?" },
                { person: "Sie", form: "Wie geht es Ihnen?", en: "How are you? (formal)" },
              ],
            },
            {
              name: "Replying",
              forms: [
                { person: "Gut, danke.", form: "gut", en: "Good, thanks." },
                { person: "Sehr gut.", form: "sehr gut", en: "Very well." },
                { person: "Es geht.", form: "es geht", en: "So-so / okay." },
                { person: "Nicht so gut.", form: "nicht so gut", en: "Not so good." },
                { person: "Und dir/Ihnen?", form: "und …", en: "And you?" },
              ],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "Same content, two registers",
          setup: "Compare greeting a friend versus a hotel receptionist.",
          lines: [
            { speaker: "To a friend (du)", l1: "Hallo! Wie geht's dir?", en: "Hi! How are you?" },
            { speaker: "Reply", l1: "Gut, danke! Und dir?", en: "Good, thanks! And you?" },
            { speaker: "To a receptionist (Sie)", l1: "Guten Tag! Wie geht es Ihnen?", en: "Good day! How are you?" },
            { speaker: "Reply", l1: "Sehr gut, danke. Und Ihnen?", en: "Very well, thanks. And you?" },
          ],
        },
        {
          type: "fillBlank",
          heading: "du or Sie?",
          intro: "Pick the form that matches the context.",
          items: [
            {
              template: "Guten Tag, Herr Weber. Wie geht es ___?",
              answer: "Ihnen",
              en: "Good day, Mr. Weber. How are you?",
              options: ["dir", "Ihnen", "euch", "mir"],
            },
            {
              template: "Hey Lisa, wie geht es ___?",
              answer: "dir",
              en: "Hey Lisa, how are you?",
              options: ["dir", "Ihnen", "Sie", "ihm"],
            },
            {
              template: "Entschuldigung, sind ___ Herr Klein?",
              answer: "Sie",
              en: "Excuse me, are you Mr. Klein? (formal)",
              options: ["du", "Sie", "ihr", "es"],
            },
            {
              template: "Bist ___ aus Berlin?",
              answer: "du",
              en: "Are you from Berlin? (informal)",
              options: ["du", "Sie", "ihr", "wir"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Register check",
          questions: [
            {
              q: "You meet your friend's grandmother for the first time. Which 'you' do you use?",
              options: ["du", "Sie", "either is fine", "ihr"],
              correct: 1,
              fb: "An older stranger gets Sie until she offers du.",
            },
            {
              q: "Which sentence is the FORMAL 'How are you?'",
              options: ["Wie geht's?", "Wie geht es dir?", "Wie geht es Ihnen?", "Wie geht es euch?"],
              correct: 2,
              fb: "Ihnen is the formal dative 'you'. Wie geht es Ihnen?",
            },
            {
              q: "'Sie' conjugates the verb like which other pronoun?",
              options: ["ich (I)", "du (you sg.)", "er (he)", "sie (they)"],
              correct: 3,
              fb: "Formal Sie shares its verb form with plural sie ('they'): Sie sind.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Good day, how are you? (to a stranger)",
          reference: "Guten Tag, wie geht es Ihnen?",
          hint: "Stranger → formal. Use Ihnen, capitalised.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which is the FORMAL word for 'you' in German?",
              options: ["du", "Sie", "ihr", "man"],
              correct: 1,
            },
            {
              q: "How do you ask 'How are you?' informally?",
              options: ["Wie geht es Ihnen?", "Wie geht es dir?", "Wie heißen Sie?", "Wo wohnen Sie?"],
              correct: 1,
            },
            {
              q: "A neutral, safe reply to 'Wie geht's?' is…",
              options: ["Bitte schön.", "Gut, danke.", "Auf Wiedersehen.", "Wie bitte?"],
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
        q: "You walk into a shop at 11am. What's the safest neutral greeting?",
        options: ["Tschüss!", "Guten Tag!", "Gute Nacht!", "Bis bald!"],
        correct: 1,
      },
      {
        q: "Which is the casual, everyday way to say goodbye?",
        options: ["Auf Wiedersehen", "Gute Nacht", "Tschüss", "Guten Abend"],
        correct: 2,
      },
      {
        q: "'Guten Morgen' is used roughly until…",
        options: ["midnight", "11am", "3pm", "early evening"],
        correct: 1,
      },
      {
        q: "Which is the FORMAL 'you'?",
        options: ["du", "Sie", "ihr", "es"],
        correct: 1,
      },
      {
        q: "How do you ask 'How are you?' formally?",
        options: ["Wie geht's?", "Wie geht es dir?", "Wie geht es Ihnen?", "Wie geht es euch?"],
        correct: 2,
      },
      {
        q: "Someone says 'Danke!' to you. The standard reply is…",
        options: ["Entschuldigung", "Bitte", "Tschüss", "Wie bitte?"],
        correct: 1,
      },
      {
        q: "Which word means 'excuse me / sorry'?",
        options: ["Bitte", "Danke", "Entschuldigung", "Gerne"],
        correct: 2,
      },
      {
        q: "'Vielen Dank' means…",
        options: ["no problem", "many thanks", "good evening", "you're welcome"],
        correct: 1,
      },
      {
        q: "Using 'du' with an older stranger you've just met usually reads as…",
        options: ["perfectly normal", "too familiar / presumptuous", "extremely formal", "required by law"],
        correct: 1,
      },
      {
        q: "Translate: 'Good evening!'",
        options: ["Guten Morgen!", "Guten Tag!", "Guten Abend!", "Gute Nacht!"],
        correct: 2,
      },
    ],
  },
};
