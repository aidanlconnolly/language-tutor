import type { Unit } from "../../types";

export const UNIT_FUTURE: Unit = {
  slug: "future",
  stage: 5,
  order: 23,
  icon: "⏩",
  title: "Future: will & going to",
  tagline: "Predictions, plans and decisions made on the spot.",
  badge: "core",
  lessons: [
    {
      slug: "future-will",
      title: "'will' for predictions and instant decisions",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "will + base verb",
          body: [
            "<strong>will</strong> is the simplest future. Just put <strong>will + base verb</strong> — and it never changes for the person. <em>I will, you will, she will, they will</em> + the same base verb.",
            "Use <strong>will</strong> for: <strong>predictions</strong> about the future (<em>It will rain tomorrow. You'll love London.</em>) and <strong>instant decisions</strong> — choices you make in the moment of speaking (<em>I'm thirsty — I'll have a tea.</em>).",
            "In speech we usually contract it: <strong>I'll, you'll, he'll, we'll, they'll</strong>. The negative is <strong>won't</strong> (= will not): <em>I won't be late.</em>",
            "After <strong>will</strong>, the verb stays in its base form — no -s, no -ed, no -ing. <em>She will come</em> (not <em>she will comes</em>).",
          ],
          keyPoint:
            "will + base verb (same for everyone). Use for predictions and on-the-spot decisions. Negative = won't.",
        },
        {
          type: "conjugation",
          heading: "'help' with will",
          verb: "help",
          meaning: "to give assistance",
          intro: "The form is identical for every person — only the contraction changes.",
          tenses: [
            {
              name: "Future with will",
              forms: [
                { person: "I", form: "I'll help", en: "I will help — instant decision" },
                { person: "you", form: "you'll help", en: "you will help" },
                { person: "he/she/it", form: "she'll help", en: "she will help" },
                { person: "we", form: "we'll help", en: "we will help" },
                { person: "they", form: "they'll help", en: "they will help" },
              ],
            },
            {
              name: "Negative (won't)",
              forms: [
                { person: "I", form: "I won't be late", en: "won't = will not" },
                { person: "they", form: "they won't come", en: "negative for everyone is 'won't'" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "Predictions often pair with 'I think' and 'probably'",
          body: "Predictions are guesses about the future, so we soften them: <em>I think it'll be busy. She'll probably arrive late. Maybe it won't rain after all.</em> Notice <strong>probably</strong> usually sits <em>after</em> 'will' but <em>before</em> 'won't': <em>It'll probably rain / It probably won't rain.</em>",
          example: { l1: "I think you'll love it. It probably won't rain.", en: "softened predictions" },
        },
        {
          type: "multipleChoice",
          heading: "Prediction or instant decision?",
          questions: [
            {
              q: "Phone rings. 'That's the door — I ___ get it!'",
              options: ["will", "am going to", "was going to", "would"],
              correct: 0,
              fb: "A decision made at the moment of speaking → will.",
            },
            {
              q: "Looking at dark clouds: 'I think it ___ rain.'",
              options: ["will", "is", "was", "would"],
              correct: 0,
              fb: "A prediction about the future → will.",
            },
            {
              q: "Which is the correct form after 'will'?",
              options: ["She will comes.", "She will come.", "She will coming.", "She will came."],
              correct: 1,
              fb: "After 'will', the verb is the base form: come.",
            },
            {
              q: "The negative of 'will' is…",
              options: ["willn't", "won't", "don't will", "not will"],
              correct: 1,
              fb: "won't = will not.",
            },
          ],
        },
      ],
    },
    {
      slug: "future-going-to",
      title: "'going to' for plans and intentions",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "be + going to + base verb",
          body: [
            "Use <strong>going to</strong> for <strong>plans and intentions</strong> — things you've already decided <em>before</em> you speak. <em>I'm going to visit my parents this weekend. We're going to paint the kitchen.</em>",
            "Formula: <strong>am / is / are + going to + base verb</strong>. The 'be' part changes with the person: <em>I'm going to, she's going to, they're going to.</em>",
            "It's also used for predictions based on <strong>evidence you can see right now</strong>: <em>Look at those clouds — it's going to rain.</em> (You have proof, not just a feeling.)",
            "In casual speech, 'going to' is often said as <em>gonna</em> — but write it in full.",
          ],
          keyPoint:
            "(am/is/are) + going to + base verb. Use for plans/intentions already decided, and predictions with present evidence.",
        },
        {
          type: "conjugation",
          heading: "'visit' with going to",
          verb: "visit",
          meaning: "to go and see (a place or person)",
          intro: "Here the 'be' helper changes with the person.",
          tenses: [
            {
              name: "Future with going to",
              forms: [
                { person: "I", form: "I'm going to visit", en: "I am going to visit" },
                { person: "you", form: "you're going to visit", en: "you are going to visit" },
                { person: "he/she/it", form: "she's going to visit", en: "she is going to visit" },
                { person: "we", form: "we're going to visit", en: "we are going to visit" },
                { person: "they", form: "they're going to visit", en: "they are going to visit" },
              ],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "Weekend plans",
          setup: "Two friends compare what they've already decided to do.",
          lines: [
            { speaker: "Beth", l1: "What are you going to do this weekend?", en: "" },
            { speaker: "Jack", l1: "I'm going to visit my gran in Brighton. What about you?", en: "'gran' = grandmother (British, informal)." },
            { speaker: "Beth", l1: "We're going to redecorate the spare room. It's going to take all weekend!", en: "prediction with evidence → going to." },
            { speaker: "Jack", l1: "Sounds like hard work. Is it going to rain, do you think?", en: "" },
            { speaker: "Beth", l1: "Look at the sky — it's definitely going to rain.", en: "evidence she can see → going to." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete with 'going to'",
          intro: "Choose the correct form of 'be' + going to.",
          items: [
            {
              template: "I ___ start a new course next month.",
              answer: "am going to",
              en: "I am going to start a new course next month.",
              options: ["am going to", "is going to", "are going to", "going to"],
            },
            {
              template: "She ___ move to Manchester in the summer.",
              answer: "is going to",
              en: "She is going to move to Manchester in the summer.",
              options: ["am going to", "is going to", "are going to", "be going to"],
            },
            {
              template: "Look at that cyclist — he ___ fall!",
              answer: "is going to",
              en: "Look at that cyclist — he is going to fall!",
              options: ["will", "is going to", "are going to", "was going to"],
            },
            {
              template: "We ___ paint the kitchen at the weekend.",
              answer: "are going to",
              en: "We are going to paint the kitchen at the weekend.",
              options: ["am going to", "is going to", "are going to", "going"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the plan",
          items: [
            { tokens: ["I'm", "going", "to", "learn", "to", "drive"], en: "I'm going to learn to drive." },
            { tokens: ["They're", "going", "to", "move", "house"], en: "They're going to move house." },
            { tokens: ["It's", "going", "to", "be", "a", "long", "day"], en: "It's going to be a long day." },
            { tokens: ["We're", "going", "to", "visit", "the", "museum"], en: "We're going to visit the museum." },
          ],
        },
      ],
    },
    {
      slug: "future-will-vs-going-to",
      title: "will vs going to, and arrangements",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Choosing the right future",
          body: [
            "The two futures split mainly by <strong>when the decision was made</strong>. <strong>going to</strong> = a plan you'd <em>already</em> decided. <strong>will</strong> = a decision made <em>right now</em>, as you speak.",
            "<em>(plan) I'm going to cook tonight — I bought the ingredients yesterday.</em> vs <em>(instant) There's nothing in the fridge… OK, I'll order a takeaway.</em>",
            "For predictions: use <strong>will</strong> for an opinion or guess (<em>I think City will win</em>); use <strong>going to</strong> when you can see the evidence now (<em>It's going to rain — look at those clouds</em>).",
            "There's a third, very common future: the <strong>present continuous</strong> (am/is/are + -ing) for fixed <strong>arrangements</strong> — things in your diary with a time and often another person. <em>I'm meeting him at six. We're flying to Rome on Friday.</em>",
          ],
          keyPoint:
            "going to = prior plan; will = instant decision/opinion; present continuous (I'm meeting him at six) = fixed arrangement in the diary.",
        },
        {
          type: "conjugation",
          heading: "Three futures, side by side",
          verb: "future forms",
          meaning: "comparing will / going to / present continuous",
          intro: "Same idea (the future), three different jobs.",
          tenses: [
            {
              name: "will — instant decision / prediction",
              forms: [
                { person: "decision", form: "I'll get the door.", en: "decided as you speak" },
                { person: "prediction", form: "I think they'll win.", en: "an opinion/guess" },
              ],
            },
            {
              name: "going to — plan / evidence",
              forms: [
                { person: "plan", form: "I'm going to study tonight.", en: "decided beforehand" },
                { person: "evidence", form: "It's going to snow.", en: "you can see the signs" },
              ],
            },
            {
              name: "present continuous — fixed arrangement",
              forms: [
                { person: "arrangement", form: "I'm meeting him at six.", en: "a set time, in the diary" },
                { person: "arrangement", form: "We're flying out on Friday.", en: "booked and confirmed" },
              ],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Which future is best?",
          questions: [
            {
              q: "(You've already booked it.) 'I ___ to Paris on Saturday.'",
              options: ["will travel", "'m travelling", "travel", "travelled"],
              correct: 1,
              fb: "A fixed arrangement with a set time → present continuous.",
            },
            {
              q: "(Out of milk; deciding now.) 'Oh, we've run out. I ___ buy some.'",
              options: ["'ll", "'m going to", "was going to", "am"],
              correct: 0,
              fb: "Decision made at the moment of speaking → will.",
            },
            {
              q: "(Plan made last week.) 'We ___ redecorate the flat this month.'",
              options: ["'ll", "'re going to", "redecorate", "redecorated"],
              correct: 1,
              fb: "A plan already decided → going to.",
            },
            {
              q: "(Looking at heavy clouds.) 'It ___ rain — I can feel it.'",
              options: ["will", "'s going to", "is", "rains"],
              correct: 1,
              fb: "A prediction with present evidence → going to.",
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Pick the right future",
          intro: "Decide between will, going to, and the present continuous.",
          items: [
            {
              template: "A: The phone's ringing. B: Don't worry, I ___ answer it.",
              answer: "'ll",
              en: "Don't worry, I'll answer it. (instant decision)",
              options: ["'ll", "'m going to", "answer", "answered"],
            },
            {
              template: "I ___ see the dentist at 3pm tomorrow. (in my diary)",
              answer: "'m seeing",
              en: "I'm seeing the dentist at 3pm tomorrow. (arrangement)",
              options: ["'ll see", "'m seeing", "see", "saw"],
            },
            {
              template: "She ___ start university in September. (already decided)",
              answer: "'s going to",
              en: "She's going to start university in September. (plan)",
              options: ["'ll", "'s going to", "starts", "started"],
            },
            {
              template: "I think England ___ win the match. (just my opinion)",
              answer: "will",
              en: "I think England will win the match. (prediction/opinion)",
              options: ["will", "is going to", "are", "won"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Say it in English",
          direction: "en-to-l1",
          prompt: "Tell someone your plan for tonight (you've already decided to cook), then offer to help right now ('I'll help you').",
          reference: "I'm going to cook tonight, and I'll help you now.",
          hint: "Plan already decided → going to. Offer made on the spot → will (I'll).",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Decision made as you speak →",
              options: ["going to", "will", "present continuous", "past simple"],
              correct: 1,
            },
            {
              q: "A fixed arrangement in your diary →",
              options: ["will", "going to", "present continuous (I'm meeting him at six)", "past continuous"],
              correct: 2,
            },
            {
              q: "Choose the correct sentence:",
              options: ["She will to come.", "She will comes.", "She will come.", "She is will come."],
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
        q: "After 'will', the verb is in…",
        options: ["the -ing form", "the base form", "the -ed form", "the -s form"],
        correct: 1,
      },
      {
        q: "The negative of 'will' is…",
        options: ["willn't", "won't", "don't will", "not will"],
        correct: 1,
      },
      {
        q: "'will' is used for…",
        options: ["a plan decided yesterday", "an instant decision or prediction", "a fixed diary arrangement", "a finished past action"],
        correct: 1,
      },
      {
        q: "'going to' is used for…",
        options: ["a decision made right now", "a plan already decided / evidence you can see", "a habit", "a finished action"],
        correct: 1,
      },
      {
        q: "Choose the correct 'going to' form:",
        options: ["She going to leave.", "She's going to leave.", "She's going to leaves.", "She is go to leave."],
        correct: 1,
      },
      {
        q: "Phone rings — you decide now: 'I ___ get it.'",
        options: ["'m going to", "'ll", "get", "got"],
        correct: 1,
      },
      {
        q: "Already planned: 'We ___ move house in June.'",
        options: ["'ll", "'re going to", "move", "moved"],
        correct: 1,
      },
      {
        q: "A fixed arrangement with a set time uses…",
        options: ["the present continuous (I'm meeting him at six)", "the past simple", "will + base verb", "the -ed form"],
        correct: 0,
      },
      {
        q: "Looking at dark clouds: 'It ___ rain.'",
        options: ["rains", "is going to", "rained", "would"],
        correct: 1,
      },
      {
        q: "Choose the correct sentence:",
        options: ["I'll probably be late.", "I probably'll be late.", "I will probably to be late.", "I'll be probably late won't."],
        correct: 0,
      },
    ],
  },
};
