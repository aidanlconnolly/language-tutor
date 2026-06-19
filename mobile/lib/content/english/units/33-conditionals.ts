import type { Unit } from "../../types";

export const UNIT_CONDITIONALS: Unit = {
  slug: "conditionals",
  stage: 8,
  order: 33,
  icon: "🎩",
  title: "Conditionals (if)",
  tagline: "Zero, first and second conditionals — 'if I were you…'",
  badge: "advanced",
  lessons: [
    {
      slug: "conditionals-zero-first",
      title: "Zero & first conditional",
      summary: "Facts and real future possibilities with 'if'.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Two ways to talk about 'if'",
          body: [
            "A <strong>conditional</strong> sentence has two halves: the <em>if-clause</em> (the condition) and the <em>main clause</em> (the result).",
            "The <strong>zero conditional</strong> is for things that are always true — facts and habits. Both halves use the <em>present simple</em>: <em>If you heat water to 100°C, it boils.</em>",
            "The <strong>first conditional</strong> is for a real, likely future possibility. The if-clause uses the present simple, and the main clause uses <strong>will + verb</strong>: <em>If it rains, I will take the Tube.</em>",
            "Notice: even though we are talking about the future, the if-clause stays in the <em>present</em>. We never say <em>if it will rain</em>.",
          ],
          keyPoint:
            "Zero: If + present, present (always true). First: If + present, will + verb (likely future).",
        },
        {
          type: "conjugation",
          heading: "The two patterns side by side",
          verb: "if",
          meaning: "conditional sentence patterns",
          intro: "Compare how each conditional is built. The comma is used when the if-clause comes first.",
          tenses: [
            {
              name: "Zero conditional (general truths)",
              forms: [
                { person: "If + present simple", form: "If you press this button,", en: "condition" },
                { person: "present simple", form: "the doors open.", en: "result — always true" },
                { person: "Example", form: "If it rains, the streets get wet.", en: "a general fact" },
              ],
            },
            {
              name: "First conditional (likely future)",
              forms: [
                { person: "If + present simple", form: "If I miss the bus,", en: "condition" },
                { person: "will + base verb", form: "I'll walk to the station.", en: "future result" },
                { person: "Example", form: "If you study, you will pass.", en: "a real possibility" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "You can swap the order",
          body: "Either clause can come first. When the <strong>if-clause</strong> comes first, use a comma: <em>If it rains, I'll stay in.</em> When the <strong>main clause</strong> comes first, drop the comma: <em>I'll stay in if it rains.</em> The meaning is identical.",
          example: { l1: "I'll call you if I'm late.", en: "Same as: If I'm late, I'll call you." },
        },
        {
          type: "fillBlank",
          heading: "Choose the right form",
          intro: "Decide whether the verb is present simple or will + verb.",
          items: [
            {
              template: "If you heat ice, it ___ .",
              answer: "melts",
              en: "Zero conditional — a general truth.",
              options: ["melts", "will melt", "melted", "is melting"],
            },
            {
              template: "If it ___ tomorrow, we'll cancel the picnic.",
              answer: "rains",
              en: "First conditional — present in the if-clause.",
              options: ["will rain", "rains", "rained", "is raining"],
            },
            {
              template: "If you take the Northern line, you ___ there in twenty minutes.",
              answer: "will be",
              en: "First conditional — will in the main clause.",
              options: ["are", "will be", "would be", "were"],
            },
            {
              template: "Water ___ if you put it in the freezer.",
              answer: "freezes",
              en: "Zero conditional — always true.",
              options: ["will freeze", "freezes", "froze", "would freeze"],
            },
            {
              template: "If I finish work early, I ___ you a text.",
              answer: "'ll send",
              en: "First conditional — likely future.",
              options: ["send", "'ll send", "sent", "would send"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Say it in English",
          direction: "en-to-l1",
          prompt: "Say that if it rains tomorrow, you will take the bus.",
          reference: "If it rains tomorrow, I'll take the bus.",
          hint: "First conditional: present in the if-clause, 'will' (or 'll) in the main clause.",
        },
      ],
    },
    {
      slug: "conditionals-second",
      title: "Second conditional & 'if I were you'",
      summary: "Imaginary, unreal or unlikely situations.",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Imagining what isn't real",
          body: [
            "The <strong>second conditional</strong> is for situations that are <em>imaginary, unlikely, or untrue right now</em>. Think daydreams, hypotheticals, and advice.",
            "The pattern is: <strong>If + past simple, … would + verb</strong>. <em>If I won the lottery, I would buy a flat in London.</em> (I almost certainly won't — it's a dream.)",
            "The past simple here doesn't mean the past! It signals that the situation is <em>unreal</em>. Compare: <em>If I have time, I'll help</em> (first — realistic) vs <em>If I had time, I would help</em> (second — but I don't have time).",
            "A special form: with the verb <em>to be</em> we traditionally use <strong>were</strong> for every person — <em>If I <strong>were</strong> rich…</em>, <em>If he <strong>were</strong> here…</em> — especially in the fixed phrase <strong>'If I were you…'</strong> for giving advice.",
          ],
          keyPoint:
            "Second: If + past simple, would + verb (unreal/unlikely). Use 'were' for all persons: If I were you, I'd…",
        },
        {
          type: "conjugation",
          heading: "Building the second conditional",
          verb: "would",
          meaning: "second conditional pattern",
          intro: "The if-clause uses the past simple; the result uses 'would' + base verb. 'Would' is often shortened to 'd.",
          tenses: [
            {
              name: "If + past simple → would + verb",
              forms: [
                { person: "If I had more money,", form: "I would travel.", en: "I don't have it — imaginary." },
                { person: "If she lived in London,", form: "she'd visit often.", en: "she doesn't live there." },
                { person: "If we didn't work,", form: "we would be bored.", en: "but we do work." },
              ],
            },
            {
              name: "'were' for all persons (to be)",
              forms: [
                { person: "If I were you,", form: "I'd apologise.", en: "advice — the classic use." },
                { person: "If he were taller,", form: "he'd play basketball.", en: "he isn't tall." },
                { person: "If it weren't so far,", form: "we'd walk.", en: "but it is far." },
              ],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "Daydreaming in a London café",
          setup: "Two friends imagine winning big.",
          lines: [
            { speaker: "Ben", l1: "What would you do if you won the lottery?", en: "Hypothetical — he hasn't won." },
            { speaker: "Mia", l1: "If I won, I'd buy a little flat in Notting Hill.", en: "Imaginary result." },
            { speaker: "Ben", l1: "Really? If I had that much money, I'd travel the world.", en: "Another daydream." },
            { speaker: "Mia", l1: "Honestly, if I were you, I'd save some of it.", en: "Giving advice with 'if I were you'." },
            { speaker: "Ben", l1: "Maybe. But it wouldn't be much fun if we were sensible all the time!", en: "'were' for all persons." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "First or second?",
          intro: "Decide whether each situation is a real possibility (first) or imaginary (second).",
          questions: [
            {
              q: "Which sentence is about a real, likely future?",
              options: [
                "If I were a bird, I would fly.",
                "If I miss the train, I'll get the next one.",
                "If I won a million pounds, I'd quit my job.",
                "If she were taller, she'd be a model.",
              ],
              correct: 1,
              fb: "'If I miss the train, I'll get the next one' is realistic — that's the first conditional.",
            },
            {
              q: "Complete: 'If I ___ you, I'd take the job.'",
              options: ["was", "am", "were", "will be"],
              correct: 2,
              fb: "The fixed advice phrase is 'If I were you', using 'were' for all persons.",
            },
            {
              q: "Which is correct for an imaginary situation?",
              options: [
                "If I had a car, I would drive to work.",
                "If I have a car, I would drive to work.",
                "If I had a car, I will drive to work.",
                "If I will have a car, I drive to work.",
              ],
              correct: 0,
              fb: "Second conditional: past simple in the if-clause, 'would' in the main clause.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Say it in English",
          direction: "en-to-l1",
          prompt: "Give a friend advice: tell them that if you were them, you would talk to the manager.",
          reference: "If I were you, I'd talk to the manager.",
          hint: "Use 'were' (not 'was') and 'would' / 'd in the result.",
        },
      ],
    },
    {
      slug: "conditionals-real-situations",
      title: "Mixing conditionals & giving advice",
      summary: "Choosing the right conditional in real conversations.",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Choosing the right 'if'",
          body: [
            "In real conversations you'll switch between conditionals depending on how <em>likely</em> something is.",
            "Use the <strong>first</strong> when the condition is realistic: <em>If the meeting finishes early, I'll join you.</em>",
            "Use the <strong>second</strong> when it's unlikely or imaginary: <em>If I didn't have to work, I'd come.</em>",
            "For advice, <strong>'If I were you, I'd…'</strong> is gentle and very common. You can also use <em>'unless'</em> (= if not): <em>I'll be late unless the traffic clears.</em>",
          ],
          keyPoint:
            "Likely → first conditional. Imaginary/advice → second conditional & 'If I were you, I'd…'. 'Unless' = if not.",
        },
        {
          type: "vocab",
          heading: "Useful conditional phrases",
          intro: "Handy fixed expressions built on conditionals.",
          items: [
            { l1: "If I were you, I'd…", en: "the standard way to give advice" },
            { l1: "If you ask me, …", en: "= in my opinion (informal)" },
            { l1: "unless", en: "if … not (e.g. 'unless it rains')" },
            { l1: "as long as", en: "only if / provided that" },
            { l1: "in case", en: "as a precaution ('take an umbrella in case it rains')" },
            { l1: "What would you do if…?", en: "asks for an imaginary response" },
            { l1: "I would if I could.", en: "polite refusal — I can't, sadly" },
            { l1: "Even if…", en: "shows it makes no difference" },
          ],
        },
        {
          type: "dialogue",
          heading: "Advice about a job offer",
          setup: "Tom has been offered a job in Manchester.",
          lines: [
            { speaker: "Tom", l1: "I've been offered a job up north. What would you do if you were me?", en: "Asking for advice — second conditional." },
            { speaker: "Sara", l1: "If I were you, I'd take it. You'll regret it if you don't try.", en: "Advice + first conditional warning." },
            { speaker: "Tom", l1: "But I'd miss London. Unless I came back at weekends, I'd hardly see my friends.", en: "'unless' = if not." },
            { speaker: "Sara", l1: "As long as you keep in touch, you'll be fine. Even if it's hard at first, it could be a great move.", en: "'as long as' + 'even if'." },
            { speaker: "Tom", l1: "You're right. If they confirm the salary, I'll say yes.", en: "First conditional — realistic next step." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Put the words in the correct order.",
          items: [
            { tokens: ["If", "I", "were", "you", ",", "I'd", "take", "the", "job"], en: "If I were you, I'd take the job." },
            { tokens: ["I'll", "be", "late", "unless", "the", "traffic", "clears"], en: "I'll be late unless the traffic clears." },
            { tokens: ["If", "it", "rains", ",", "we'll", "stay", "in"], en: "If it rains, we'll stay in." },
            { tokens: ["What", "would", "you", "do", "if", "you", "won"], en: "What would you do if you won?" },
          ],
        },
        {
          type: "translate",
          heading: "Say it in English",
          direction: "en-to-l1",
          prompt: "Tell a friend that if they ask you, they should take the job — but warn that you'll be sad if they move away.",
          reference: "If you ask me, you should take the job — but I'll be sad if you move away.",
          hint: "'If you ask me' = in my opinion. Then a first conditional: 'I'll be sad if…'.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which conditional gives advice?",
              options: [
                "If you heat water, it boils.",
                "If it rains, I'll stay home.",
                "If I were you, I'd take the job.",
                "Water freezes if it gets cold.",
              ],
              correct: 2,
            },
            {
              q: "'Unless' means…",
              options: ["if", "if … not", "always", "because"],
              correct: 1,
            },
            {
              q: "Complete: 'I'll come ___ I finish work in time.'",
              options: ["unless", "as long as", "even if", "in case"],
              correct: 1,
            },
            {
              q: "Which is a realistic future possibility (first conditional)?",
              options: [
                "If I were rich, I'd travel.",
                "If I had wings, I'd fly.",
                "If the shop is open, I'll buy milk.",
                "If I were you, I'd rest.",
              ],
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
        q: "Zero conditional pattern (general truths):",
        options: [
          "If + present, will + verb",
          "If + present, present",
          "If + past, would + verb",
          "If + will, present",
        ],
        correct: 1,
      },
      {
        q: "First conditional (likely future):",
        options: [
          "If + present, will + verb",
          "If + past, would + verb",
          "If + will, will + verb",
          "If + present, present",
        ],
        correct: 0,
      },
      {
        q: "Complete: 'If it ___ tomorrow, we'll cancel.'",
        options: ["will rain", "rains", "rained", "would rain"],
        correct: 1,
      },
      {
        q: "Second conditional (imaginary):",
        options: [
          "If + present, will + verb",
          "If + past simple, would + verb",
          "If + present, present",
          "If + would, past",
        ],
        correct: 1,
      },
      {
        q: "The advice phrase is:",
        options: ["If I was you, I'll…", "If I were you, I'd…", "If I am you, I would…", "If I would be you, I…"],
        correct: 1,
      },
      {
        q: "Complete: 'If I won the lottery, I ___ a house.'",
        options: ["will buy", "buy", "would buy", "bought"],
        correct: 2,
      },
      {
        q: "Which uses the second conditional correctly?",
        options: [
          "If I had time, I will help.",
          "If I have time, I would help.",
          "If I had time, I would help.",
          "If I will have time, I help.",
        ],
        correct: 2,
      },
      {
        q: "'Unless' is closest in meaning to:",
        options: ["if … not", "always", "if", "because"],
        correct: 0,
      },
      {
        q: "Which sentence is about a real, likely future?",
        options: [
          "If I were taller, I'd reach it.",
          "If you press play, the music starts.",
          "If I miss the bus, I'll walk.",
          "If she were here, she'd know.",
        ],
        correct: 2,
      },
      {
        q: "Translate the idea: 'If I were you, I would talk to the manager.'",
        options: [
          "If I am you, I will talk to the manager.",
          "If I was you, I talk to the manager.",
          "If I were you, I'd talk to the manager.",
          "If I would be you, I talked to the manager.",
        ],
        correct: 2,
      },
    ],
  },
};
