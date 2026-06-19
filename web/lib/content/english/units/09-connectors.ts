import type { Unit } from "../../types";

export const UNIT_CONNECTORS: Unit = {
  slug: "connectors",
  stage: 2,
  order: 9,
  icon: "🔗",
  title: "Connecting words",
  tagline: "and, but, because, so, then, also — building longer sentences.",
  badge: "core",
  lessons: [
    {
      slug: "connectors-and-but-or-so",
      title: "and, but, or, so",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The four everyday joiners",
          body: [
            "Short sentences sound choppy. Joining words (connectors) link ideas so you sound more natural.",
            "<strong>and</strong> adds: <em>I had tea and toast.</em> · <strong>but</strong> contrasts: <em>It's small but cosy.</em> · <strong>or</strong> gives a choice: <em>Tea or coffee?</em> · <strong>so</strong> shows a result: <em>It was raining, so we took the bus.</em>",
            "When you join two full sentences with <strong>but</strong> or <strong>so</strong>, English usually puts a comma before the connector: <em>I was tired, but I went out.</em>",
          ],
          keyPoint:
            "and = add · but = contrast · or = choice · so = result.",
        },
        {
          type: "vocab",
          heading: "The connectors and what they do",
          items: [
            { l1: "and", en: "adds another idea", note: "fish and chips" },
            { l1: "but", en: "shows a contrast", note: "cheap but good" },
            { l1: "or", en: "offers a choice", note: "now or later?" },
            { l1: "so", en: "shows a result or consequence", note: "It's late, so I'm leaving." },
            { l1: "as well", en: "also (usually at the end)", note: "I'll have a coffee as well." },
            { l1: "too", en: "also (at the end of a clause)", note: "Me too." },
          ],
        },
        {
          type: "tip",
          heading: "'so' for results, 'because' for reasons",
          body: "<strong>so</strong> and <strong>because</strong> link the same two ideas but in opposite order. Cause first, then <em>so</em>: <em>It was raining, <strong>so</strong> I stayed in.</em> Result first, then <em>because</em>: <em>I stayed in <strong>because</strong> it was raining.</em>",
          example: { l1: "The bus was late, so I walked.", en: "cause (late bus) + so + result (walked)." },
        },
        {
          type: "fillBlank",
          heading: "Choose the connector",
          intro: "Pick the word that fits the meaning.",
          items: [
            {
              template: "I'd love to come, ___ I'm busy on Friday.",
              answer: "but",
              en: "a contrast",
              options: ["and", "but", "or", "so"],
            },
            {
              template: "Would you like tea ___ coffee?",
              answer: "or",
              en: "a choice between two things",
              options: ["and", "but", "or", "so"],
            },
            {
              template: "It was raining, ___ we stayed in.",
              answer: "so",
              en: "a result",
              options: ["and", "but", "or", "so"],
            },
            {
              template: "I had a sandwich ___ a coffee.",
              answer: "and",
              en: "adding a second item",
              options: ["and", "but", "or", "so"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Which connector?",
          questions: [
            {
              q: "The flat is small ___ comfortable.",
              options: ["and", "but", "or", "so"],
              correct: 1,
              fb: "Small vs comfortable is a contrast → but.",
            },
            {
              q: "I missed the train, ___ I was late.",
              options: ["and", "but", "or", "so"],
              correct: 3,
              fb: "Missing the train caused lateness → so (result).",
            },
            {
              q: "We can eat now ___ later — it's up to you.",
              options: ["and", "but", "or", "so"],
              correct: 2,
              fb: "Two options → or.",
            },
            {
              q: "She speaks French ___ Spanish.",
              options: ["and", "but", "so", "because"],
              correct: 0,
              fb: "Adding a second language → and.",
            },
          ],
        },
      ],
    },
    {
      slug: "connectors-because-although-however",
      title: "because, although, however",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Giving reasons and contrasts",
          body: [
            "<strong>because</strong> gives the reason: <em>I'm tired because I worked late.</em> Answer a <em>why?</em> question with <strong>because</strong>.",
            "<strong>although</strong> introduces a surprising contrast inside one sentence: <em>Although it was cold, we walked.</em> You can also put it in the middle: <em>We walked, although it was cold.</em>",
            "<strong>however</strong> means 'but' across two sentences, and it's more formal. It usually starts a new sentence with a comma after it: <em>It was cold. However, we walked.</em>",
          ],
          keyPoint:
            "because = reason · although = contrast within a sentence · however = formal 'but' between sentences.",
        },
        {
          type: "vocab",
          heading: "Reason and contrast connectors",
          items: [
            { l1: "because", en: "gives the reason", note: "I'm here because I work nearby." },
            { l1: "because of", en: "reason + a noun (not a full clause)", note: "late because of the rain." },
            { l1: "although", en: "even though; contrast in one sentence" },
            { l1: "even though", en: "a stronger 'although'" },
            { l1: "however", en: "but (formal, starts a sentence)", note: "Followed by a comma." },
            { l1: "though", en: "informal 'but', often at the end", note: "It was nice, though." },
          ],
        },
        {
          type: "tip",
          heading: "'because' vs 'because of'",
          body: "Use <strong>because</strong> + a full clause (subject + verb): <em>because <strong>it was raining</strong></em>. Use <strong>because of</strong> + a noun (no verb): <em>because of <strong>the rain</strong></em>. Don't say <em>because of it was raining</em>.",
          example: { l1: "The train was late because of the weather.", en: "'the weather' is a noun → because of." },
        },
        {
          type: "dialogue",
          heading: "Explaining a late arrival",
          setup: "You arrive late to meet a friend.",
          lines: [
            { speaker: "Sara", l1: "There you are! What happened?", en: "" },
            { speaker: "You", l1: "Sorry I'm late — the Tube was delayed because of a signal problem.", en: "because of + noun." },
            { speaker: "Sara", l1: "No worries. Did you walk in the end?", en: "'in the end' = finally." },
            { speaker: "You", l1: "I did. Although it was raining, walking was faster.", en: "although + contrast." },
            { speaker: "Sara", l1: "Well, you're here now. Shall we go in?", en: "" },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          items: [
            { tokens: ["I", "stayed", "in", "because", "it", "was", "raining"], en: "I stayed in because it was raining." },
            { tokens: ["Although", "it", "was", "late", ",", "we", "walked"], en: "Although it was late, we walked." },
            { tokens: ["The", "train", "was", "late", "because", "of", "the", "snow"], en: "The train was late because of the snow." },
            { tokens: ["It", "was", "cold", ".", "However", ",", "we", "went", "out"], en: "It was cold. However, we went out." },
          ],
        },
        {
          type: "fillBlank",
          heading: "because or because of?",
          intro: "Use 'because' before a clause, 'because of' before a noun.",
          items: [
            {
              template: "We're late ___ the traffic.",
              answer: "because of",
              en: "'the traffic' is a noun",
              options: ["because", "because of", "although", "however"],
            },
            {
              template: "We're late ___ there was a lot of traffic.",
              answer: "because",
              en: "a full clause follows",
              options: ["because", "because of", "although", "so"],
            },
            {
              template: "___ it was raining, we still went out.",
              answer: "Although",
              en: "a contrast within one sentence",
              options: ["Because", "Although", "So", "And"],
            },
            {
              template: "It was expensive. ___, the food was excellent.",
              answer: "However",
              en: "formal 'but' starting a new sentence",
              options: ["Because", "And", "However", "So"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Say it in English",
          direction: "en-to-l1",
          prompt: "Explain that you were late because of the rain, although you left home early.",
          reference: "I was late because of the rain, although I left home early.",
          hint: "Use 'because of' + a noun (the rain), and 'although' for the contrast.",
        },
      ],
    },
    {
      slug: "connectors-sequencing",
      title: "first, then, after that, finally, also",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Putting events in order",
          body: [
            "To tell a story or give instructions, English uses <strong>sequencing words</strong>: <em>first, then, after that, next, finally.</em> They usually come at the start of a sentence, often with a comma.",
            "<strong>First</strong> opens the sequence, <strong>then / after that / next</strong> carry it along, and <strong>finally</strong> closes it.",
            "<strong>also</strong> adds extra information. It usually sits before the main verb (<em>I also went to the museum</em>) or at the start of a sentence (<em>Also, the staff were friendly</em>).",
          ],
          keyPoint:
            "first → then → after that → finally. 'also' adds info, usually before the main verb.",
        },
        {
          type: "vocab",
          heading: "Sequencing words",
          items: [
            { l1: "first", en: "the opening step", note: "Also 'first of all'." },
            { l1: "then", en: "the next step" },
            { l1: "after that", en: "the step following", note: "More natural than 'after' alone here." },
            { l1: "next", en: "the following step" },
            { l1: "finally", en: "the last step", note: "Also 'in the end' / 'lastly'." },
            { l1: "also", en: "in addition", note: "I also like tea." },
            { l1: "as well", en: "also (at the end of the clause)" },
            { l1: "by the way", en: "introduces a side comment", note: "changes the topic briefly." },
          ],
        },
        {
          type: "tip",
          heading: "Where does 'also' go?",
          body: "<strong>also</strong> normally goes <em>before</em> the main verb but <em>after</em> the verb 'be': <em>I <strong>also</strong> work weekends</em>, but <em>She is <strong>also</strong> a teacher.</em> To put it at the very end, English prefers <strong>as well</strong> or <strong>too</strong>: <em>I work weekends as well.</em>",
          example: { l1: "He also speaks French. He's also learning Spanish.", en: "before 'speaks'; after 'is'." },
        },
        {
          type: "dialogue",
          heading: "Giving directions to a guest",
          setup: "You explain how to get to your flat.",
          lines: [
            { speaker: "Guest", l1: "How do I get to your place from the station?", en: "" },
            { speaker: "You", l1: "First, leave by the main exit. Then turn left.", en: "first → then." },
            { speaker: "Guest", l1: "OK, left out of the exit. After that?", en: "" },
            { speaker: "You", l1: "After that, walk past the church. My flat is the blue door. Oh, and bring a coat — it's also quite cold.", en: "after that; also." },
            { speaker: "Guest", l1: "Got it. See you soon!", en: "" },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sequence",
          items: [
            { tokens: ["First", ",", "we", "had", "breakfast"], en: "First, we had breakfast." },
            { tokens: ["Then", "we", "went", "to", "the", "museum"], en: "Then we went to the museum." },
            { tokens: ["Finally", ",", "we", "took", "the", "train", "home"], en: "Finally, we took the train home." },
            { tokens: ["I", "also", "visited", "the", "park"], en: "I also visited the park." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Order and addition",
          questions: [
            {
              q: "Which word opens a sequence?",
              options: ["Finally", "First", "After that", "Also"],
              correct: 1,
              fb: "First begins the sequence.",
            },
            {
              q: "Which word closes a sequence?",
              options: ["First", "Then", "Finally", "Next"],
              correct: 2,
              fb: "Finally signals the last step.",
            },
            {
              q: "Where does 'also' usually go? 'I ___ visited the Tate.'",
              options: ["also (before the verb)", "after 'Tate'", "before 'I'", "it can't be used"],
              correct: 0,
              fb: "'also' sits before the main verb: I also visited…",
            },
            {
              q: "Choose the natural sentence:",
              options: [
                "First we ate, finally we walked, then we slept.",
                "First we ate, then we walked, finally we slept.",
                "Then we ate, first we walked, finally we slept.",
                "Finally we ate, then we walked, first we slept.",
              ],
              correct: 1,
              fb: "Order: first → then → finally.",
            },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which word signals the last step?",
              options: ["First", "Then", "Finally", "Also"],
              correct: 2,
            },
            {
              q: "Complete: 'I ___ speak a little Italian.' (add information)",
              options: ["also", "finally", "first", "but"],
              correct: 0,
            },
            {
              q: "Which order is correct?",
              options: ["first → finally → then", "then → first → finally", "first → then → finally", "finally → then → first"],
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
        q: "Which connector shows a contrast?",
        options: ["and", "but", "or", "so"],
        correct: 1,
      },
      {
        q: "Complete: 'It was raining, ___ we took the bus.'",
        options: ["but", "or", "so", "because"],
        correct: 2,
      },
      {
        q: "Which gives a reason (answers 'why?')?",
        options: ["so", "because", "but", "or"],
        correct: 1,
      },
      {
        q: "Choose: 'We're late ___ the traffic.'",
        options: ["because", "because of", "although", "however"],
        correct: 1,
      },
      {
        q: "Choose: 'We're late ___ there was traffic.'",
        options: ["because of", "because", "however", "so"],
        correct: 1,
      },
      {
        q: "Which is a more formal 'but', starting a new sentence?",
        options: ["so", "and", "however", "or"],
        correct: 2,
      },
      {
        q: "Which word opens a sequence of steps?",
        options: ["Finally", "First", "Also", "Then"],
        correct: 1,
      },
      {
        q: "Which word closes a sequence?",
        options: ["First", "Next", "Finally", "Then"],
        correct: 2,
      },
      {
        q: "Where does 'also' usually go? 'She ___ works on Saturdays.'",
        options: ["also (before the verb)", "after 'Saturdays'", "before 'She'", "it can't be used"],
        correct: 0,
      },
      {
        q: "Choose the correct sentence:",
        options: [
          "Although it was cold, we walked.",
          "Because of it was cold, we walked.",
          "However it was cold, we walked.",
          "So it was cold, we walked.",
        ],
        correct: 0,
      },
    ],
  },
};
