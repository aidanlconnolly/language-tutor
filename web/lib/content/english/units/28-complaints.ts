import type { Unit } from "../../types";

export const UNIT_COMPLAINTS: Unit = {
  slug: "complaints",
  stage: 6,
  order: 28,
  icon: "📣",
  title: "Complaints & returns",
  tagline: "'I'd like a refund', 'it doesn't work' — polite escalation.",
  badge: "tourist",
  lessons: [
    {
      slug: "complaints-describing-problem",
      title: "Describing a problem",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Saying what's wrong",
          body: [
            "When something you bought has a problem, start by describing it calmly. The most common phrase is <strong>'It doesn't work'</strong> — for anything electrical or mechanical that won't switch on or function.",
            "If something is broken or faulty, say <strong>'It's broken'</strong> or <strong>'It's faulty'</strong> (<em>faulty</em> = has a fault / defect). If it's the wrong item, say <strong>'It's the wrong size'</strong> or <strong>'It's the wrong colour'</strong>.",
            "British complaints usually open politely: <strong>'I'm sorry, but…'</strong> or <strong>'There seems to be a problem with…'</strong> The word <em>'seems'</em> softens it and keeps things friendly.",
          ],
          keyPoint:
            "'It doesn't work' (won't function). 'It's broken / faulty.' 'It's the wrong size/colour.' Open with 'I'm sorry, but…'.",
        },
        {
          type: "vocab",
          heading: "Describing the problem",
          intro: "Polite, clear ways to say what's wrong.",
          items: [
            { l1: "It doesn't work.", en: "it won't function / won't switch on" },
            { l1: "It's broken.", en: "it's damaged and won't work" },
            { l1: "It's faulty.", en: "it has a fault / defect" },
            { l1: "It's the wrong size.", en: "the size is incorrect" },
            { l1: "It's the wrong colour.", en: "the colour is incorrect (British spelling)" },
            { l1: "It's damaged.", en: "it has been harmed / has a mark or break" },
            { l1: "There's a problem with…", en: "neutral way to introduce an issue" },
            { l1: "There seems to be a problem.", en: "a softer version with 'seems'" },
            { l1: "I'm sorry, but…", en: "a polite opener for a complaint" },
            { l1: "It stopped working.", en: "it worked before but now doesn't" },
          ],
        },
        {
          type: "dialogue",
          heading: "Back at the shop",
          setup: "You bought a kettle that won't switch on.",
          lines: [
            { speaker: "You", l1: "Hi, I'm sorry, but there's a problem with this kettle.", en: "Polite opener." },
            { speaker: "Assistant", l1: "Oh dear, what's wrong with it?", en: "Asking about the problem." },
            { speaker: "You", l1: "It doesn't work — it won't switch on at all.", en: "Describing the fault." },
            { speaker: "Assistant", l1: "When did you buy it?", en: "Checking the timing." },
            { speaker: "You", l1: "Yesterday. I think it's faulty.", en: "Saying it's defective." },
            { speaker: "Assistant", l1: "I'm so sorry. Let's sort that out for you.", en: "Apologising and offering to help." },
          ],
        },
        {
          type: "tip",
          heading: "Stay calm and 'sort it out'",
          body: "British shop culture rewards a calm, polite tone — staff are far more helpful when you stay friendly. A very common phrase from staff is <em>'Let's sort that out'</em> or <em>'I'll sort it for you'</em>, meaning <em>'I'll fix the situation'</em>. Starting with <strong>'I'm sorry, but…'</strong> even when it's not your fault is normal and keeps things smooth.",
          example: { l1: "There seems to be a problem — could you sort it out?", en: "Polite, calm complaint." },
        },
        {
          type: "fillBlank",
          heading: "Fill in the gap",
          intro: "Describe the problem in natural English.",
          items: [
            {
              template: "I'm sorry, but it doesn't ___.",
              answer: "work",
              en: "I'm sorry, but it doesn't work.",
              options: ["work", "working", "works", "worked"],
            },
            {
              template: "I think it's ___ — it has a fault.",
              answer: "faulty",
              en: "I think it's faulty — it has a fault.",
              options: ["faulty", "wrong", "loose", "cheap"],
            },
            {
              template: "There ___ to be a problem with it.",
              answer: "seems",
              en: "There seems to be a problem with it.",
              options: ["seems", "seem", "seeming", "seemed"],
            },
            {
              template: "It's the ___ size — I asked for a medium.",
              answer: "wrong",
              en: "It's the wrong size — I asked for a medium.",
              options: ["wrong", "bad", "false", "broken"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Say it in English",
          direction: "en-to-l1",
          prompt: "Politely tell a shop assistant that the item doesn't work and you think it's faulty.",
          reference: "I'm sorry, but it doesn't work. I think it's faulty.",
          hint: "Open with 'I'm sorry, but…', then 'it doesn't work' and 'it's faulty'.",
        },
      ],
    },
    {
      slug: "complaints-returns-refunds",
      title: "Returns and refunds",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Refunds, exchanges, and receipts",
          body: [
            "To get your money back, say <strong>'I'd like a refund'</strong> (<em>I'd like</em> = I would like — polite). To swap it for something else, say <strong>'I'd like an exchange'</strong> or <strong>'Could I exchange it?'</strong>",
            "Shops will usually ask <strong>'Have you got the receipt?'</strong> — the printed proof of purchase. With a receipt, a return is easy; without one you may only get a credit note or store credit.",
            "Useful replies: <strong>'It's still under warranty'</strong> (still guaranteed), and <strong>'Can I have a refund or an exchange?'</strong> when you're happy with either.",
          ],
          keyPoint:
            "'I'd like a refund.' 'Could I exchange it?' 'Have you got the receipt?' No receipt → often only store credit.",
        },
        {
          type: "vocab",
          heading: "Returns vocabulary",
          items: [
            { l1: "a refund", en: "your money back" },
            { l1: "an exchange", en: "swapping for a different item" },
            { l1: "to return (something)", en: "to take it back to the shop" },
            { l1: "I'd like a refund.", en: "polite 'I would like my money back'" },
            { l1: "Could I exchange it?", en: "asking to swap it" },
            { l1: "the receipt", en: "printed proof you bought it" },
            { l1: "Have you got the receipt?", en: "the assistant asking for proof of purchase" },
            { l1: "store credit / a credit note", en: "shop money to spend later, instead of cash back" },
            { l1: "the warranty / the guarantee", en: "a promise to repair or replace for a set time" },
            { l1: "It's still under warranty.", en: "the guarantee period hasn't ended" },
          ],
        },
        {
          type: "dialogue",
          heading: "Asking for a refund",
          setup: "You return the faulty kettle and want your money back.",
          lines: [
            { speaker: "You", l1: "I'd like a refund, please. It's faulty.", en: "Asking for money back." },
            { speaker: "Assistant", l1: "No problem. Have you got the receipt?", en: "Asking for proof of purchase." },
            { speaker: "You", l1: "Yes, here it is.", en: "Handing over the receipt." },
            { speaker: "Assistant", l1: "Would you like a refund or an exchange?", en: "Offering both options." },
            { speaker: "You", l1: "A refund, please.", en: "Choosing the refund." },
            { speaker: "Assistant", l1: "Of course. I'll put it back on your card.", en: "Refunding to the card." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Which is right?",
          questions: [
            {
              q: "'I'd like a refund' means…",
              options: ["I want to keep it", "I want my money back", "I want a discount", "I want a bag"],
              correct: 1,
              fb: "A refund = your money back.",
            },
            {
              q: "Swapping the item for a different one is called…",
              options: ["a refund", "an exchange", "a receipt", "a warranty"],
              correct: 1,
              fb: "An exchange = a swap.",
            },
            {
              q: "The shop usually asks for your ___ before a return.",
              options: ["passport", "receipt", "PIN", "bag"],
              correct: 1,
              fb: "The receipt is the proof of purchase.",
            },
            {
              q: "'I'd like' is short for…",
              options: ["I did like", "I would like", "I had liked", "I do like"],
              correct: 1,
              fb: "'I'd like' = 'I would like' — polite.",
            },
            {
              q: "'It's still under warranty' means…",
              options: [
                "it's broken",
                "the guarantee still applies",
                "you've lost the receipt",
                "the shop is closed",
              ],
              correct: 1,
              fb: "The guarantee period hasn't run out.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Say it in English",
          direction: "en-to-l1",
          prompt: "Politely ask for a refund and say that you have the receipt.",
          reference: "I'd like a refund, please. I've got the receipt.",
          hint: "Use 'I'd like a refund' and 'I've got the receipt'.",
        },
      ],
    },
    {
      slug: "complaints-escalation",
      title: "Polite escalation",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "When you need to take it further",
          body: [
            "If the first person can't help, you can escalate — politely. The classic line is <strong>'Could I speak to the manager, please?'</strong> Keeping <em>'please'</em> and a calm tone makes a big difference in Britain.",
            "Other useful escalation phrases: <strong>'I'm not happy with this'</strong>, <strong>'This isn't good enough'</strong> (firm but not rude), and <strong>'I'd like to make a complaint'</strong>.",
            "You can also ask about your rights: <strong>'What are my options?'</strong> or <strong>'I'd like this sorted today, please.'</strong> Firm, clear, and still polite is the British way.",
          ],
          keyPoint:
            "'Could I speak to the manager, please?' 'I'm not happy with this.' 'I'd like to make a complaint.' Stay firm but polite.",
        },
        {
          type: "vocab",
          heading: "Escalation phrases",
          items: [
            { l1: "Could I speak to the manager, please?", en: "polite request to escalate" },
            { l1: "I'd like to make a complaint.", en: "formally raising a complaint" },
            { l1: "I'm not happy with this.", en: "polite but firm dissatisfaction" },
            { l1: "This isn't good enough.", en: "firm complaint, still not rude" },
            { l1: "What are my options?", en: "asking what can be done" },
            { l1: "I'd like this sorted today, please.", en: "asking for it to be fixed now" },
            { l1: "the manager", en: "the person in charge of the shop" },
            { l1: "Is there someone else I can speak to?", en: "asking for another person" },
          ],
        },
        {
          type: "dialogue",
          heading: "Asking for the manager",
          setup: "The assistant can't give a refund, so you escalate politely.",
          lines: [
            { speaker: "Assistant", l1: "I'm sorry, I can't give refunds without a manager.", en: "The assistant can't help fully." },
            { speaker: "You", l1: "I understand. Could I speak to the manager, please?", en: "Polite escalation." },
            { speaker: "Assistant", l1: "Of course, one moment.", en: "Going to fetch the manager." },
            { speaker: "Manager", l1: "Hello, how can I help?", en: "The manager arrives." },
            { speaker: "You", l1: "I'm not happy with this kettle — it's faulty and I'd like a refund.", en: "Stating the issue firmly but politely." },
            { speaker: "Manager", l1: "I'm very sorry. Let's get that sorted for you.", en: "Apologising and helping." },
          ],
        },
        {
          type: "orderWords",
          heading: "Put the words in order",
          intro: "Build the polite escalation phrase.",
          items: [
            { tokens: ["Could", "I", "speak", "to", "the", "manager"], en: "Could I speak to the manager?" },
            { tokens: ["I'd", "like", "to", "make", "a", "complaint"], en: "I'd like to make a complaint." },
            { tokens: ["I'm", "not", "happy", "with", "this"], en: "I'm not happy with this." },
            { tokens: ["What", "are", "my", "options"], en: "What are my options?" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Fill in the gap",
          items: [
            {
              template: "Could I ___ to the manager, please?",
              answer: "speak",
              en: "Could I speak to the manager, please?",
              options: ["speak", "say", "talk", "tell"],
            },
            {
              template: "I'd like to make a ___.",
              answer: "complaint",
              en: "I'd like to make a complaint.",
              options: ["complaint", "refund", "receipt", "exchange"],
            },
            {
              template: "I'm not ___ with this.",
              answer: "happy",
              en: "I'm not happy with this.",
              options: ["happy", "sorry", "sure", "ready"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Say it in English",
          direction: "en-to-l1",
          prompt: "Politely ask to speak to the manager, then say you'd like to make a complaint.",
          reference: "Could I speak to the manager, please? I'd like to make a complaint.",
          hint: "Use 'Could I speak to the manager' and 'I'd like to make a complaint'.",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "Something electrical won't switch on. You say…",
        options: ["It doesn't work.", "It's the wrong colour.", "It's too dear.", "It's on offer."],
        correct: 0,
      },
      {
        q: "'It's faulty' means…",
        options: ["it's expensive", "it has a fault / defect", "it's the wrong size", "it's second-hand"],
        correct: 1,
      },
      {
        q: "A polite, softened way to raise a problem is…",
        options: ["There seems to be a problem.", "This is rubbish.", "Fix it.", "You're wrong."],
        correct: 0,
      },
      {
        q: "'I'd like a refund' means you want…",
        options: ["a discount", "your money back", "a free bag", "a bigger size"],
        correct: 1,
      },
      {
        q: "Swapping an item for a different one is called…",
        options: ["a refund", "an exchange", "a warranty", "a receipt"],
        correct: 1,
      },
      {
        q: "Before a return, the shop usually asks for your…",
        options: ["passport", "receipt", "PIN", "trolley"],
        correct: 1,
      },
      {
        q: "'I'd like' is short for…",
        options: ["I do like", "I would like", "I had liked", "I did like"],
        correct: 1,
      },
      {
        q: "'It's still under warranty' means…",
        options: ["it's broken", "the guarantee still applies", "the shop is shut", "you lost the receipt"],
        correct: 1,
      },
      {
        q: "To escalate politely you say…",
        options: [
          "Get me the boss now!",
          "Could I speak to the manager, please?",
          "Where's the manager?!",
          "Manager!",
        ],
        correct: 1,
      },
      {
        q: "A firm but polite way to show dissatisfaction is…",
        options: ["This is brilliant.", "I'm not happy with this.", "No worries.", "That's lovely."],
        correct: 1,
      },
    ],
  },
};
