import type { Unit } from "../../types";

export const UNIT_POLITE_REQUESTS: Unit = {
  slug: "polite-requests",
  stage: 6,
  order: 27,
  icon: "🤝",
  title: "Polite requests (could/would)",
  tagline: "'Could you…', 'would you mind…', and indirect questions.",
  badge: "core",
  lessons: [
    {
      slug: "polite-requests-can-could-would",
      title: "Can, could, would for requests",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Making requests politely",
          body: [
            "To ask someone to do something, English uses <strong>can</strong>, <strong>could</strong>, and <strong>would</strong>. The basic pattern is <em>modal + you + base verb</em>: <strong>'Can you help me?'</strong>, <strong>'Could you help me?'</strong>, <strong>'Would you pass the salt?'</strong>",
            "<strong>Could</strong> is more polite than <strong>can</strong> — it sounds softer and less direct. In Britain, where politeness matters a lot, <em>'Could you…?'</em> is the safe everyday choice with strangers and staff.",
            "Add <strong>please</strong> to be politer still: <em>'Could you help me, please?'</em> To ask for something rather than an action, use <strong>'Could I have…?'</strong> — <em>'Could I have a glass of water, please?'</em>",
          ],
          keyPoint:
            "Pattern: Could/Would + you + base verb. 'Could you…?' is politer than 'Can you…?'. 'Could I have…?' asks for a thing.",
        },
        {
          type: "vocab",
          heading: "Request phrases",
          intro: "Polite ways to ask for help or things.",
          items: [
            { l1: "Can you help me?", en: "direct, friendly request for help" },
            { l1: "Could you help me?", en: "politer version — softer" },
            { l1: "Could you help me, please?", en: "the safe polite request" },
            { l1: "Would you pass the salt?", en: "polite request at the table" },
            { l1: "Could I have a coffee, please?", en: "politely asking for a thing" },
            { l1: "Could I get the bill, please?", en: "asking for the bill in a café/restaurant" },
            { l1: "Of course.", en: "a willing 'yes'" },
            { l1: "No problem.", en: "a relaxed 'yes, happy to'" },
            { l1: "I'm afraid I can't.", en: "a polite 'no'" },
          ],
        },
        {
          type: "tip",
          heading: "Why 'could' feels politer than 'can'",
          body: "Grammatically <strong>could</strong> is the past form of <strong>can</strong>, but in requests it isn't about the past at all — it just sounds <em>more tentative</em> and therefore more polite. <em>'Can you…?'</em> is fine with friends; with a shop assistant, a stranger, or anyone you want to be respectful to, <em>'Could you…?'</em> is the natural British choice.",
          example: { l1: "Could you tell me the time, please?", en: "A polite request to a stranger." },
        },
        {
          type: "fillBlank",
          heading: "Fill in the gap",
          intro: "Complete the polite request.",
          items: [
            {
              template: "___ you help me, please?",
              answer: "Could",
              en: "Could you help me, please?",
              options: ["Could", "Do", "Are", "Will"],
            },
            {
              template: "Could I ___ a coffee, please?",
              answer: "have",
              en: "Could I have a coffee, please?",
              options: ["have", "having", "to have", "had"],
            },
            {
              template: "Would you ___ the salt?",
              answer: "pass",
              en: "Would you pass the salt?",
              options: ["pass", "passing", "passes", "to pass"],
            },
            {
              template: "Could you ___ me the way to the station?",
              answer: "tell",
              en: "Could you tell me the way to the station?",
              options: ["tell", "say", "speak", "talk"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Which is more polite?",
          questions: [
            {
              q: "Which sounds most polite to a stranger?",
              options: ["Give me a pen.", "Can you give me a pen?", "Could you give me a pen, please?", "Pen!"],
              correct: 2,
              fb: "'Could you… please?' is the politest and safest with strangers.",
            },
            {
              q: "After 'Could you…', the verb should be…",
              options: ["in the past tense", "the base form", "the -ing form", "with 'to'"],
              correct: 1,
              fb: "Modal + base verb: 'Could you help', not 'Could you to help'.",
            },
            {
              q: "To ask for a thing politely you say…",
              options: ["Could I have…?", "Could I to have…?", "Could you having…?", "Can I had…?"],
              correct: 0,
              fb: "'Could I have…?' is the standard request for an object.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Say it in English",
          direction: "en-to-l1",
          prompt: "Politely ask someone to help you, adding 'please'.",
          reference: "Could you help me, please?",
          hint: "Use 'Could you' + base verb + 'please'.",
        },
      ],
    },
    {
      slug: "polite-requests-would-you-mind",
      title: "'Would you mind' and softening",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "'Would you mind + -ing'",
          body: [
            "An extra-polite request uses <strong>'Would you mind…?'</strong> followed by an <strong>-ing</strong> verb: <em>'Would you mind opening the window?'</em> It literally asks 'is it a problem for you to…?'",
            "Watch the reply: because <em>mind</em> means 'object to', a willing answer is a <strong>negative</strong> — <em>'Not at all'</em> or <em>'No, of course not'</em> means <strong>yes, I'll do it</strong>. Saying 'yes' would sound like you object.",
            "Other softeners make any request gentler: <strong>'Sorry to bother you, but…'</strong>, <strong>'I was wondering if you could…'</strong>, and adding <strong>'just'</strong> — <em>'Could you just hold this for a second?'</em>",
          ],
          keyPoint:
            "'Would you mind + -ing?' A willing reply is 'Not at all' (= yes). Softeners: 'Sorry to bother you…', 'I was wondering if…'.",
        },
        {
          type: "vocab",
          heading: "Softer requests and replies",
          items: [
            { l1: "Would you mind opening the window?", en: "very polite request (+ -ing verb)" },
            { l1: "Would you mind helping me?", en: "another '+ -ing' request" },
            { l1: "Not at all.", en: "a willing reply (= 'yes, I'll do it')" },
            { l1: "No, of course not.", en: "another willing reply to 'Would you mind…?'" },
            { l1: "Sorry to bother you, but…", en: "a polite way to start a request" },
            { l1: "I was wondering if you could…", en: "a very soft, indirect request" },
            { l1: "just", en: "a small word that softens: 'Could you just…?'" },
            { l1: "if it's not too much trouble", en: "an extra-polite tag at the end" },
            { l1: "Thanks ever so much.", en: "warm British thank-you" },
          ],
        },
        {
          type: "dialogue",
          heading: "On a train",
          setup: "It's hot and you want the window open.",
          lines: [
            { speaker: "You", l1: "Sorry to bother you — would you mind opening the window?", en: "Polite request with a softener." },
            { speaker: "Passenger", l1: "Not at all.", en: "Willing reply (= yes, I'll do it)." },
            { speaker: "You", l1: "Thanks ever so much.", en: "Warm thank-you." },
            { speaker: "Passenger", l1: "No problem at all. Is that better?", en: "Checking it helped." },
            { speaker: "You", l1: "Much better, thank you.", en: "Confirming and thanking." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Reply correctly",
          questions: [
            {
              q: "Someone asks 'Would you mind closing the door?' You're happy to. You say…",
              options: ["Yes, I would.", "Not at all.", "Yes, of course I mind.", "No way."],
              correct: 1,
              fb: "'Not at all' means you don't object — so yes, you'll do it.",
            },
            {
              q: "After 'Would you mind', the verb takes which form?",
              options: ["base form (help)", "-ing form (helping)", "to + verb (to help)", "past form (helped)"],
              correct: 1,
              fb: "'Would you mind helping me?' — always '+ -ing'.",
            },
            {
              q: "Which is a softener to start a request?",
              options: ["Sorry to bother you, but…", "Do it now.", "You must…", "Why won't you…?"],
              correct: 0,
              fb: "It signals politeness before you ask.",
            },
            {
              q: "'I was wondering if you could help' is…",
              options: [
                "rude",
                "a very polite, indirect request",
                "a question about the past",
                "a complaint",
              ],
              correct: 1,
              fb: "It's one of the softest ways to ask.",
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Put the words in order",
          intro: "Build the polite request.",
          items: [
            { tokens: ["Would", "you", "mind", "opening", "the", "window"], en: "Would you mind opening the window?" },
            { tokens: ["Sorry", "to", "bother", "you"], en: "Sorry to bother you." },
            { tokens: ["I", "was", "wondering", "if", "you", "could", "help"], en: "I was wondering if you could help." },
          ],
        },
        {
          type: "translate",
          heading: "Say it in English",
          direction: "en-to-l1",
          prompt: "Very politely ask someone to open the window, starting with an apology for bothering them.",
          reference: "Sorry to bother you — would you mind opening the window?",
          hint: "Start with 'Sorry to bother you', then 'Would you mind + -ing'.",
        },
      ],
    },
    {
      slug: "polite-requests-indirect-questions",
      title: "Indirect questions",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Asking questions the polite way",
          body: [
            "A direct question like <em>'Where is the station?'</em> can sound a bit blunt to a stranger. An <strong>indirect question</strong> wraps it in a polite opener: <strong>'Could you tell me where the station is?'</strong>",
            "Two things change. First, you add an opener such as <em>'Could you tell me…'</em> or <em>'Do you know…'</em>. Second, the word order goes back to <strong>normal</strong> (subject + verb): not <em>'where is the station'</em> but <em>'where the station is'</em>.",
            "For yes/no questions, use <strong>if</strong> or <strong>whether</strong>: <em>'Do you know if the shop is open?'</em> — again with normal word order after 'if'.",
          ],
          keyPoint:
            "Indirect: opener + question word + normal order. 'Could you tell me where the station is?' Yes/no → use 'if': 'Do you know if it's open?'",
        },
        {
          type: "vocab",
          heading: "Indirect question openers",
          items: [
            { l1: "Could you tell me…?", en: "polite opener before a question word" },
            { l1: "Do you know…?", en: "another polite opener" },
            { l1: "Could you tell me where the station is?", en: "indirect 'where is the station?'" },
            { l1: "Do you know what time it is?", en: "indirect 'what time is it?'" },
            { l1: "Could you tell me how much this is?", en: "indirect 'how much is this?'" },
            { l1: "Do you know if the shop is open?", en: "indirect yes/no question with 'if'" },
            { l1: "Do you know whether it's far?", en: "'whether' works like 'if' here" },
            { l1: "I'm not sure, sorry.", en: "a polite 'I don't know'" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Fix the word order",
          intro: "Indirect questions use normal subject + verb order.",
          items: [
            {
              template: "Could you tell me where the station ___?",
              answer: "is",
              en: "Could you tell me where the station is?",
              options: ["is", "be", "does", "are"],
            },
            {
              template: "Do you know what time it ___?",
              answer: "is",
              en: "Do you know what time it is?",
              options: ["is", "be", "does", "has"],
            },
            {
              template: "Do you know ___ the shop is open?",
              answer: "if",
              en: "Do you know if the shop is open?",
              options: ["if", "is", "does", "that"],
            },
            {
              template: "Could you tell me how much this ___?",
              answer: "is",
              en: "Could you tell me how much this is?",
              options: ["is", "does", "be", "are"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Direct to indirect",
          questions: [
            {
              q: "Make 'Where is the bank?' indirect:",
              options: [
                "Could you tell me where is the bank?",
                "Could you tell me where the bank is?",
                "Could you tell me the bank where is?",
                "Where could you tell the bank is?",
              ],
              correct: 1,
              fb: "Normal order after 'where': 'where the bank is'.",
            },
            {
              q: "Make the yes/no question 'Is it far?' indirect:",
              options: [
                "Do you know is it far?",
                "Do you know if it's far?",
                "Do you know far it is?",
                "Do you know it far is?",
              ],
              correct: 1,
              fb: "Use 'if' for yes/no questions, then normal order.",
            },
            {
              q: "Which is the polite, indirect version?",
              options: [
                "What time is it?",
                "Tell me the time now.",
                "Do you know what time it is?",
                "Time?",
              ],
              correct: 2,
              fb: "The opener + normal order makes it polite.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Say it in English",
          direction: "en-to-l1",
          prompt: "Politely and indirectly ask a stranger where the station is.",
          reference: "Could you tell me where the station is?",
          hint: "Opener 'Could you tell me' + 'where the station is' (normal order, no 'is the station').",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which is the correct indirect question?",
              options: [
                "Could you tell me where is the toilet?",
                "Could you tell me where the toilet is?",
                "Could you tell me the toilet where is?",
                "Where you tell me the toilet is?",
              ],
              correct: 1,
            },
            {
              q: "For a yes/no indirect question you use…",
              options: ["that", "if", "what", "who"],
              correct: 1,
            },
            {
              q: "Indirect questions use which word order after the question word?",
              options: ["question order (verb first)", "normal order (subject + verb)", "no verb", "past tense only"],
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
        q: "Which is the politest request to a stranger?",
        options: ["Help me.", "Can you help?", "Could you help me, please?", "Helping me!"],
        correct: 2,
      },
      {
        q: "After 'Could you…' the verb is in which form?",
        options: ["base form", "-ing form", "to + verb", "past form"],
        correct: 0,
      },
      {
        q: "To politely ask for a thing you say…",
        options: ["Could I have…?", "Could I to have…?", "Can I had…?", "Could you having…?"],
        correct: 0,
      },
      {
        q: "After 'Would you mind' the verb takes which form?",
        options: ["base form (open)", "-ing form (opening)", "to + verb (to open)", "past form (opened)"],
        correct: 1,
      },
      {
        q: "Someone asks 'Would you mind helping me?' You're happy to. You say…",
        options: ["Yes, I would.", "Not at all.", "Yes, I mind.", "Never."],
        correct: 1,
      },
      {
        q: "Which is a polite softener to begin a request?",
        options: ["Do it now.", "Sorry to bother you, but…", "You must…", "Why not…?"],
        correct: 1,
      },
      {
        q: "Make 'Where is the bank?' indirect:",
        options: [
          "Could you tell me where is the bank?",
          "Could you tell me where the bank is?",
          "Could you tell me the bank is where?",
          "Where the bank could you tell me?",
        ],
        correct: 1,
      },
      {
        q: "Make 'Is it open?' an indirect question:",
        options: ["Do you know is it open?", "Do you know if it's open?", "Do you know open it is?", "Is you know it open?"],
        correct: 1,
      },
      {
        q: "Indirect questions use which word order?",
        options: ["verb before subject", "normal subject + verb", "no subject", "only past tense"],
        correct: 1,
      },
      {
        q: "'I was wondering if you could help' is…",
        options: ["rude", "a very polite, indirect request", "a complaint", "about the past"],
        correct: 1,
      },
    ],
  },
};
