import type { Unit } from "../../types";

export const UNIT_IDIOMS: Unit = {
  slug: "idioms",
  stage: 7,
  order: 29,
  icon: "🦊",
  title: "Idioms & particles",
  tagline: "Flavouring particles doch/mal/ja/halt and common Redewendungen.",
  badge: "culture",
  lessons: [
    {
      slug: "idioms-particles",
      title: "Flavouring particles (Modalpartikeln)",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The little words that carry the mood",
          body: [
            "German sprinkles tiny <strong>Modalpartikeln</strong> ('flavouring particles') into sentences. They barely translate, but they carry the speaker's attitude — softening, urging, reassuring, or shrugging.",
            "<strong>doch</strong> pushes back or insists: <em>Komm doch!</em> = Oh come on, do come! It also contradicts a negative — answer <em>Doch!</em> to mean 'Yes, it is!' after someone says it isn't.",
            "<strong>mal</strong> makes a request casual and quick: <em>Komm mal her</em> = Come here for a sec. <strong>ja</strong> signals 'as you know / obviously': <em>Das ist ja toll!</em> = Well, that's great!",
            "<strong>halt</strong> and <strong>eben</strong> mean 'just / simply — that's how it is', a resigned shrug: <em>Das ist halt so.</em> = That's just how it is.",
          ],
          tip: {
            label: "Don't over-translate",
            body: "Particles live in the <em>middle field</em> of the sentence, right after the verb and pronouns. You don't translate them word-for-word — you feel them. Berliners stack them: <em>Das war doch mal echt gut!</em>",
          },
          keyPoint:
            "doch = insist / contradict, mal = softens a request, ja = 'as you know', halt/eben = 'just, that's how it is'.",
        },
        {
          type: "vocab",
          heading: "The core particles",
          intro: "These are unstressed and slip into the middle of the sentence.",
          items: [
            { l1: "doch", en: "but / do! / yes-it-is", note: "Insists, or contradicts a negative. Stand-alone answer: Doch! = 'Yes it is!'" },
            { l1: "mal", en: "(just) for a sec", note: "Softens an imperative: Sag mal… = 'Say, tell me…'" },
            { l1: "ja", en: "you know / clearly", note: "Unstressed here, NOT the word 'yes'. Das ist ja schön." },
            { l1: "halt", en: "just / simply", note: "Resigned: Das ist halt so. More common in the south, but heard everywhere." },
            { l1: "eben", en: "just / exactly", note: "Like halt; also 'exactly!' as a one-word reply: Eben!" },
            { l1: "denn", en: "(then)", note: "Warms up a question: Was machst du denn? = 'So what are you up to?'" },
            { l1: "mal eben", en: "real quick", note: "Ich mache das mal eben. = 'I'll just do that real quick.'" },
            { l1: "schon", en: "(reassuring) surely", note: "Das wird schon. = 'It'll be fine.'" },
          ],
        },
        {
          type: "tip",
          heading: "The magic of 'doch'",
          body: "If a German says <em>Du kommst nicht mit?</em> ('You're not coming?') and you ARE coming, you don't say <em>ja</em> — that's ambiguous. You say <strong>Doch!</strong> It's a special word that flips a negative question back to positive. English has no single word for it.",
          example: { l1: "— Du magst keinen Kaffee? — Doch, ich liebe Kaffee!", en: "— You don't like coffee? — Yes I do, I love coffee!" },
        },
        {
          type: "multipleChoice",
          heading: "What does the particle do?",
          questions: [
            {
              q: "A friend says 'Das schaffst du nie!' ('You'll never manage that!'). You're confident you will. You reply:",
              options: ["Ja!", "Doch!", "Halt!", "Mal!"],
              correct: 1,
              fb: "Doch! flips the negative — 'Yes I will!'",
            },
            {
              q: "'Komm mal her.' The 'mal' makes the command…",
              options: ["angrier", "more formal", "casual and quick ('for a sec')", "negative"],
              correct: 2,
            },
            {
              q: "'Das ist halt so.' best translates as…",
              options: ["That is forbidden.", "That's just how it is.", "That is new.", "Is that so?"],
              correct: 1,
            },
            {
              q: "In 'Das ist ja toll!', the word 'ja' means…",
              options: ["yes", "no", "'well / as you can see' (mild surprise)", "always"],
              correct: 2,
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Drop in the right particle",
          items: [
            {
              template: "— Du kommst nicht? — ___, ich komme!",
              answer: "Doch",
              en: "— You're not coming? — Yes I am, I'm coming!",
              options: ["Ja", "Doch", "Halt", "Mal"],
            },
            {
              template: "Sag ___ , wo warst du gestern?",
              answer: "mal",
              en: "Say, where were you yesterday?",
              options: ["mal", "doch", "ja", "eben"],
            },
            {
              template: "Das ist ___ so, da kann man nichts machen.",
              answer: "halt",
              en: "That's just how it is, nothing to be done.",
              options: ["mal", "denn", "halt", "ja"],
            },
            {
              template: "Was machst du ___ am Wochenende?",
              answer: "denn",
              en: "So what are you doing this weekend?",
              options: ["denn", "doch", "halt", "ja"],
            },
          ],
        },
      ],
    },
    {
      slug: "idioms-redewendungen",
      title: "Common Redewendungen",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Sayings that make you sound at home",
          body: [
            "<strong>Redewendungen</strong> are fixed expressions you can't decode word-by-word. Germans use them constantly, and using a few back earns instant goodwill.",
            "<strong>Das ist mir Wurst.</strong> = 'That's sausage to me.' = I don't care / it's all the same to me. Sausage is the great German equaliser.",
            "<strong>Ich verstehe nur Bahnhof.</strong> = 'I only understand train station.' = I don't understand a thing / it's all Greek to me.",
            "<strong>Daumen drücken!</strong> = 'Press the thumbs!' = Fingers crossed / good luck! Germans press thumbs, they don't cross fingers.",
          ],
          keyPoint:
            "Das ist mir Wurst (don't care), Ich verstehe nur Bahnhof (no idea), Daumen drücken (fingers crossed).",
        },
        {
          type: "vocab",
          heading: "Everyday Redewendungen",
          items: [
            { l1: "Das ist mir (völlig) Wurst.", en: "I (really) don't care.", note: "Casual. Wurst = sausage; here a frozen idiom." },
            { l1: "Ich verstehe nur Bahnhof.", en: "It's all Greek to me.", note: "der Bahnhof = train station." },
            { l1: "Ich drücke dir die Daumen.", en: "I'll keep my fingers crossed for you.", note: "der Daumen, die Daumen = thumb(s)." },
            { l1: "die Nase voll haben", en: "to be fed up", note: "Ich habe die Nase voll. = 'I've had it.' (lit. 'nose full')" },
            { l1: "Schwein haben", en: "to get lucky", note: "das Schwein = pig; 'to have pig' = to be lucky." },
            { l1: "die Daumen drücken", en: "to cross one's fingers (lit. press thumbs)" },
            { l1: "auf dem Schlauch stehen", en: "to be unable to figure it out (lit. 'stand on the hose')" },
            { l1: "Tomaten auf den Augen haben", en: "to not see the obvious (lit. 'tomatoes on the eyes')" },
            { l1: "die Katze im Sack kaufen", en: "to buy a pig in a poke (lit. 'cat in the sack')" },
            { l1: "Da steppt der Bär.", en: "It's a great party. (lit. 'the bear tap-dances there')" },
          ],
        },
        {
          type: "dialogue",
          heading: "Texting before an exam",
          setup: "Lena messages a friend the night before a big test.",
          lines: [
            { speaker: "Lena", l1: "Morgen ist die Prüfung. Ich habe so Angst!", en: "The exam is tomorrow. I'm so scared!" },
            { speaker: "Jonas", l1: "Du schaffst das. Ich drücke dir die Daumen!", en: "You'll do it. Fingers crossed for you!" },
            { speaker: "Lena", l1: "Danke. Aber Mathe — ich verstehe nur Bahnhof.", en: "Thanks. But maths — it's all Greek to me." },
            { speaker: "Jonas", l1: "Ach was. Du hattest immer Schwein bei Tests.", en: "Come on. You've always been lucky with tests." },
            { speaker: "Lena", l1: "Note ist mir eigentlich Wurst. Hauptsache bestanden.", en: "Honestly I don't care about the grade. As long as I pass." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the saying",
          intro: "Tap the words into the correct order.",
          items: [
            { tokens: ["Das", "ist", "mir", "Wurst"], en: "I don't care." },
            { tokens: ["Ich", "verstehe", "nur", "Bahnhof"], en: "It's all Greek to me." },
            { tokens: ["Ich", "drücke", "dir", "die", "Daumen"], en: "I'll keep my fingers crossed for you." },
            { tokens: ["Ich", "habe", "die", "Nase", "voll"], en: "I'm fed up." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Decode the idiom",
          questions: [
            {
              q: "'Da hast du aber Schwein gehabt!' means…",
              options: ["You ate pork.", "You got really lucky!", "You made a mess.", "You're stubborn."],
              correct: 1,
            },
            {
              q: "Someone explains directions and you're lost. You say:",
              options: ["Ich habe Schwein.", "Ich verstehe nur Bahnhof.", "Das ist mir Wurst.", "Da steppt der Bär."],
              correct: 1,
            },
            {
              q: "'Ich habe die Nase voll.' =",
              options: ["I have a cold.", "I'm fed up.", "I'm hungry.", "I'm curious."],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      slug: "idioms-natural",
      title: "Using them naturally",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Blend particles and sayings into real talk",
          body: [
            "Particles and Redewendungen rarely come alone — natural German layers them. <em>Ach, das ist mir doch Wurst!</em> stacks a particle (<em>doch</em>) onto an idiom for extra shrug.",
            "Start small: pick two or three you like and use them this week. <em>Daumen drücken</em>, <em>Sag mal…</em>, and <em>Doch!</em> are low-risk and instantly natural.",
            "Tone matters more than quantity. Over-stuffing a sentence with particles sounds like a parody. Listen first, then borrow.",
          ],
          keyPoint:
            "Layer sparingly: one particle plus a familiar saying reads as fluent; five particles reads as a caricature.",
        },
        {
          type: "dialogue",
          heading: "Friends making weekend plans",
          setup: "Two Berliners chat, particles and idioms flowing naturally.",
          lines: [
            { speaker: "Mira", l1: "Sag mal, kommst du am Samstag mit auf die Party?", en: "Say, are you coming to the party on Saturday?" },
            { speaker: "Tom", l1: "Weiß nicht, ich habe gerade echt die Nase voll von Menschen.", en: "Dunno, I'm honestly fed up with people right now." },
            { speaker: "Mira", l1: "Ach komm doch! Bei Anna steppt immer der Bär.", en: "Oh come on! Anna's parties are always a blast." },
            { speaker: "Tom", l1: "Na gut. Wo genau ist das denn?", en: "Fine. So where exactly is it?" },
            { speaker: "Mira", l1: "Ist mir ehrlich Wurst, Hauptsache wir gehen zusammen.", en: "Honestly I don't care, as long as we go together." },
            { speaker: "Tom", l1: "Doch, sag schon — ich will's wissen!", en: "No, come on, tell me — I want to know!" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Make it sound native",
          items: [
            {
              template: "Komm ___ mit, es wird bestimmt lustig!",
              answer: "doch",
              en: "Do come along, it'll definitely be fun!",
              options: ["doch", "halt", "ja", "nur"],
            },
            {
              template: "___ mal, hast du morgen Zeit?",
              answer: "Sag",
              en: "Say, do you have time tomorrow?",
              options: ["Sag", "Mach", "Komm", "Geh"],
            },
            {
              template: "Ich drücke dir die ___ für das Vorstellungsgespräch.",
              answer: "Daumen",
              en: "Fingers crossed for your job interview.",
              options: ["Daumen", "Hände", "Augen", "Finger"],
            },
            {
              template: "Welcher Film? Das ist mir ehrlich ___ .",
              answer: "Wurst",
              en: "Which film? Honestly I don't care.",
              options: ["Wurst", "Käse", "Brot", "Bahnhof"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Oh come on, come along! Fingers crossed it doesn't rain.",
          reference: "Ach komm doch mit! Daumen drücken, dass es nicht regnet.",
          hint: "Use 'doch' to insist, and 'Daumen drücken' for fingers crossed.",
        },
        {
          type: "tip",
          heading: "Borrow these three first",
          body: "If you adopt only three German-isms, make them <strong>doch</strong> (to insist or contradict), <strong>Sag mal…</strong> (to open a friendly question), and <strong>Daumen drücken</strong> (to wish luck). They're natural, low-risk, and warm. Build from there as you hear more.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "A friend says you'll fail. You're sure you won't. You reply:",
              options: ["Ja!", "Doch!", "Halt!", "Wurst!"],
              correct: 1,
            },
            {
              q: "'Sag mal' at the start of a question makes it…",
              options: ["a command", "friendly and casual", "formal", "negative"],
              correct: 1,
            },
            {
              q: "How do Germans wish you luck?",
              options: ["Ich kreuze die Finger.", "Ich drücke dir die Daumen.", "Ich habe Schwein.", "Ich verstehe Bahnhof."],
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
        q: "Someone says 'Du magst kein Bier?' but you DO like beer. You answer:",
        options: ["Ja!", "Doch!", "Nein!", "Halt!"],
        correct: 1,
      },
      {
        q: "The particle 'mal' in 'Komm mal her' makes the request…",
        options: ["formal", "casual / 'for a sec'", "angry", "negative"],
        correct: 1,
      },
      {
        q: "'Das ist halt so.' means…",
        options: ["That is forbidden.", "That's just how it is.", "That's brand new.", "That is loud."],
        correct: 1,
      },
      {
        q: "'Das ist mir Wurst.' =",
        options: ["I love sausage.", "I don't care.", "I'm hungry.", "It's expensive."],
        correct: 1,
      },
      {
        q: "'Ich verstehe nur Bahnhof.' =",
        options: ["I need the train station.", "It's all Greek to me.", "I'm running late.", "I understand everything."],
        correct: 1,
      },
      {
        q: "To wish someone luck, Germans say:",
        options: ["Ich kreuze die Finger.", "Ich drücke dir die Daumen.", "Ich habe die Nase voll.", "Ich verstehe Bahnhof."],
        correct: 1,
      },
      {
        q: "'Ich habe die Nase voll.' means…",
        options: ["I have a cold.", "I'm fed up.", "I'm curious.", "I'm lucky."],
        correct: 1,
      },
      {
        q: "'Da hast du aber Schwein gehabt!' =",
        options: ["You ate pork.", "You got lucky!", "You're dirty.", "You're stubborn."],
        correct: 1,
      },
      {
        q: "In 'Das ist ja toll!', the word 'ja' signals…",
        options: ["a strong yes", "'well / as you can see' (mild surprise)", "a refusal", "always"],
        correct: 1,
      },
      {
        q: "Translate: 'Oh come on, do come along!'",
        options: [
          "Ach komm doch mit!",
          "Ach komm halt mit!",
          "Ach komm ja mit!",
          "Ach komm Wurst mit!",
        ],
        correct: 0,
      },
    ],
  },
};
