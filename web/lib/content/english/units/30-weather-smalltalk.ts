import type { Unit } from "../../types";

export const UNIT_WEATHER_SMALLTALK: Unit = {
  slug: "weather-smalltalk",
  stage: 7,
  order: 30,
  icon: "🌦️",
  title: "Weather & small talk",
  tagline: "The great British weather, 'lovely day', and graceful exits.",
  badge: "culture",
  lessons: [
    {
      slug: "weather-smalltalk-vocab",
      title: "The great British weather",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Weather is Britain's social glue",
          body: [
            "In Britain, talking about the weather isn't really about the weather — it's a friendly, low-stakes way to acknowledge someone and open a conversation.",
            "The weather genuinely changes a lot, so there's always something to say: <strong>it's chilly</strong>, <strong>it's a bit grey</strong>, <strong>it's bucketing down</strong>, <strong>it's turned nice</strong>.",
            "Brits love a mild complaint or a hopeful note: <em>Bit nippy today, isn't it?</em> or <em>Lovely out, finally!</em> You're not expected to say anything clever — just to join in.",
          ],
          tip: {
            label: "Understatement rules",
            body: "British weather talk runs on understatement. A freezing day is <em>a bit fresh</em>; a heatwave is <em>quite warm, isn't it?</em>; torrential rain is <em>a bit grim out</em>. Matching that tone makes you sound local.",
          },
        },
        {
          type: "vocab",
          heading: "Weather words",
          items: [
            { l1: "it's chilly", en: "it's a bit cold", note: "Milder than 'freezing'." },
            { l1: "it's nippy", en: "it's cold and sharp", note: "Often about wind." },
            { l1: "it's freezing", en: "it's very cold" },
            { l1: "it's mild", en: "it's pleasantly not-cold", note: "A common British compliment to winter." },
            { l1: "it's grey / overcast", en: "the sky is cloudy and dull" },
            { l1: "it's drizzling", en: "it's raining lightly", note: "Very British weather." },
            { l1: "it's bucketing down", en: "it's raining heavily", note: "Also 'chucking it down', 'pouring'." },
            { l1: "it's clearing up", en: "the weather is improving" },
            { l1: "a lovely day", en: "a nice, sunny day", note: "The classic positive opener." },
            { l1: "muggy", en: "warm and humid, uncomfortable" },
            { l1: "to brighten up", en: "(for the sky) to become sunnier", note: "'It's brightened up.'" },
            { l1: "a downpour", en: "a sudden heavy fall of rain" },
          ],
        },
        {
          type: "listen",
          heading: "Listen and choose",
          intro: "Listen to each weather comment, then pick the meaning.",
          items: [
            {
              l1: "It's absolutely bucketing down out there.",
              en: "It's raining very heavily.",
              options: ["It's raining heavily.", "It's sunny.", "It's snowing.", "It's windy."],
              correct: 0,
            },
            {
              l1: "Bit chilly this morning, isn't it?",
              en: "It's a bit cold this morning.",
              options: ["It's hot.", "It's a bit cold.", "It's raining.", "It's foggy."],
              correct: 1,
            },
            {
              l1: "Looks like it's clearing up.",
              en: "The weather is improving.",
              options: ["It's getting worse.", "It's getting dark.", "The weather is improving.", "It's snowing."],
              correct: 2,
            },
            {
              l1: "It's a lovely day, finally.",
              en: "It's a nice, sunny day at last.",
              options: ["It's a nice day at last.", "It's a terrible day.", "It's a cold day.", "It's a foggy day."],
              correct: 0,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Tell a neighbour it's a bit cold this morning, but it looks like it's clearing up.",
          reference: "It's a bit chilly this morning, but it looks like it's clearing up.",
          hint: "Use 'chilly' for cold and 'clearing up' for improving weather.",
        },
      ],
    },
    {
      slug: "weather-smalltalk-openers",
      title: "Small talk openers & question tags",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Question tags invite a reply",
          body: [
            "Brits often turn a comment into a gentle question by adding a <strong>question tag</strong> on the end: <em>Lovely day, <strong>isn't it</strong>?</em> It's an invitation to agree, not a real question.",
            "The rule: positive statement → negative tag (<em>It's cold, <strong>isn't it</strong>?</em>); negative statement → positive tag (<em>It isn't very warm, <strong>is it</strong>?</em>).",
            "These openers are social lubricant — at a bus stop, in a queue, in a lift. A small <em>terrible weather, isn't it?</em> and a nod is a complete, friendly exchange.",
          ],
          keyPoint:
            "Positive statement takes a negative tag, and the reverse: 'Nice day, isn't it?' / 'Not very warm, is it?'",
        },
        {
          type: "vocab",
          heading: "Openers & tags",
          items: [
            { l1: "Lovely day, isn't it?", en: "a warm, positive opener" },
            { l1: "Terrible weather, isn't it?", en: "a shared mild complaint" },
            { l1: "Cold enough for you?", en: "a jokey opener on a cold day" },
            { l1: "You alright?", en: "a casual British 'hello, how are you?'", note: "Not a real question about your health — answer 'Yeah, you?'" },
            { l1: "How's it going?", en: "informal 'how are you?'" },
            { l1: "Busy day?", en: "a friendly opener to someone at work" },
            { l1: "Mad weather we're having", en: "comment on changeable weather" },
            { l1: "..., isn't it?", en: "negative tag after a positive statement" },
            { l1: "..., is it?", en: "positive tag after a negative statement" },
            { l1: "..., don't you?", en: "tag after 'you + verb' positive" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Add the right tag",
          intro: "Choose the question tag that matches the statement.",
          items: [
            {
              template: "It's a lovely day, ___?",
              answer: "isn't it",
              en: "It's a lovely day, isn't it?",
              options: ["isn't it", "is it", "doesn't it", "won't it"],
            },
            {
              template: "It isn't very warm today, ___?",
              answer: "is it",
              en: "It isn't very warm today, is it?",
              options: ["isn't it", "is it", "does it", "won't it"],
            },
            {
              template: "You live near here, ___?",
              answer: "don't you",
              en: "You live near here, don't you?",
              options: ["do you", "don't you", "aren't you", "isn't it"],
            },
            {
              template: "That was a great match, ___?",
              answer: "wasn't it",
              en: "That was a great match, wasn't it?",
              options: ["wasn't it", "was it", "isn't it", "didn't it"],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "At the bus stop",
          setup: "Two strangers wait for the number 38 on a grey morning.",
          lines: [
            { speaker: "Woman", l1: "Bit grim out, isn't it?", en: "The weather's a bit miserable, isn't it?" },
            { speaker: "Man", l1: "Tell me about it. Supposed to brighten up later, though.", en: "I agree. It's meant to get sunnier later, though." },
            { speaker: "Woman", l1: "Fingers crossed. The 38's late again, isn't it?", en: "Let's hope. The 38 bus is late again, isn't it?" },
            { speaker: "Man", l1: "Always is. You alright otherwise?", en: "It always is. Are you well otherwise?" },
            { speaker: "Woman", l1: "Yeah, can't complain. You?", en: "Yes, I'm fine, thanks. And you?" },
            { speaker: "Man", l1: "Not bad, ta. Oh, here it comes!", en: "Not bad, thanks. Oh, here the bus comes!" },
          ],
        },
      ],
    },
    {
      slug: "weather-smalltalk-exits",
      title: "Keeping it going & graceful exits",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "How to end small talk politely",
          body: [
            "Small talk needs a soft landing. Brits rarely stop abruptly — they signal the end with a phrase like <strong>anyway…</strong> or <strong>right, well…</strong> before leaving.",
            "Classic exit lines: <strong>Anyway, I'd better be off.</strong> / <strong>Right, I'd best get going.</strong> / <strong>I won't keep you.</strong> The word <em>anyway</em> is the universal 'we're wrapping up now' flag.",
            "End warmly: <strong>Lovely to see you.</strong> / <strong>Take care.</strong> / <strong>See you soon.</strong> / a simple <strong>cheers, bye!</strong>",
          ],
          keyPoint:
            "'Anyway…' or 'Right, well…' signals you're wrapping up. Then a warm sign-off: 'I'd better be off — take care!'",
        },
        {
          type: "vocab",
          heading: "Keeping it going & winding down",
          items: [
            { l1: "Mind you, ...", en: "introduces a small qualifying point", note: "'Mind you, it could be worse.'" },
            { l1: "That said, ...", en: "introduces a contrasting point" },
            { l1: "Anyway, ...", en: "signals you're changing topic or wrapping up" },
            { l1: "Right, well...", en: "a verbal cue that you're about to leave" },
            { l1: "I'd better be off", en: "I should leave now", note: "The classic polite exit." },
            { l1: "I'd best get going", en: "I really should leave", note: "Northern flavour; very natural." },
            { l1: "I won't keep you", en: "I'll let you go (politely ending it)" },
            { l1: "Lovely to see you", en: "a warm goodbye to someone you know" },
            { l1: "Take care", en: "a warm 'look after yourself'" },
            { l1: "Let's catch up soon", en: "let's meet again soon (often loosely meant)" },
          ],
        },
        {
          type: "dialogue",
          heading: "Wrapping up nicely",
          setup: "Two acquaintances finish a chat outside a café.",
          lines: [
            { speaker: "Sam", l1: "...and the kids are loving the new school, which is great.", en: "...and the children love the new school, which is great." },
            { speaker: "Jo", l1: "Ah, that's brilliant. Anyway, I'd better be off — I'm meeting Mum.", en: "That's wonderful. Anyway, I should leave — I'm meeting my mum." },
            { speaker: "Sam", l1: "Of course, I won't keep you. Lovely to see you.", en: "Of course, I'll let you go. It was lovely to see you." },
            { speaker: "Jo", l1: "You too! Let's catch up properly soon.", en: "You too! Let's meet again properly soon." },
            { speaker: "Sam", l1: "Definitely. Take care!", en: "Definitely. Look after yourself!" },
            { speaker: "Jo", l1: "Cheers, bye!", en: "Bye!" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Reading the signals",
          questions: [
            {
              q: "Someone says 'Anyway, I'd better be off.' They are…",
              options: ["asking a question", "politely ending the conversation", "complaining", "inviting you somewhere"],
              correct: 1,
            },
            {
              q: "Which is a warm British goodbye?",
              options: ["Cold enough for you?", "Take care!", "Busy day?", "Mind you..."],
              correct: 1,
            },
            {
              q: "'I won't keep you' means…",
              options: ["I'll let you go now", "stay a bit longer", "I'm keeping this", "I'm in a bad mood"],
              correct: 0,
            },
            {
              q: "Reply to 'You alright?' as a casual greeting:",
              options: ["I'm seeing a doctor.", "Yeah, you?", "No, I'm ill.", "Why do you ask?"],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Politely signal you need to leave, say it was lovely to see them, and wish them well.",
          reference: "Anyway, I'd better be off. Lovely to see you — take care!",
          hint: "Start with 'Anyway' to signal the exit, then a warm sign-off.",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "In Britain, talking about the weather is mainly a way to…",
        options: ["forecast accurately", "open a friendly conversation", "complain seriously", "show off knowledge"],
        correct: 1,
      },
      {
        q: "'It's bucketing down' means…",
        options: ["it's very cold", "it's raining heavily", "it's sunny", "it's foggy"],
        correct: 1,
      },
      {
        q: "'It's a bit nippy' means…",
        options: ["it's humid", "it's cold and sharp", "it's pleasant", "it's stormy"],
        correct: 1,
      },
      {
        q: "Complete the tag: 'Lovely day, ___?'",
        options: ["is it", "isn't it", "doesn't it", "won't it"],
        correct: 1,
      },
      {
        q: "Complete the tag: 'It isn't very warm, ___?'",
        options: ["isn't it", "is it", "does it", "wasn't it"],
        correct: 1,
      },
      {
        q: "'You alright?' as a greeting is best answered with…",
        options: ["I'm ill, actually.", "Yeah, you?", "Why?", "Good morning, sir."],
        correct: 1,
      },
      {
        q: "Which word signals you're about to wrap up a conversation?",
        options: ["Anyway", "Indeed", "Certainly", "Honestly"],
        correct: 0,
      },
      {
        q: "'I'd better be off' means…",
        options: ["I'm angry", "I should leave now", "I'm switching it off", "I'm staying"],
        correct: 1,
      },
      {
        q: "Which is a warm goodbye?",
        options: ["Cold enough for you?", "Take care!", "Busy day?", "Bit grim, isn't it?"],
        correct: 1,
      },
      {
        q: "'It's clearing up' means the weather is…",
        options: ["getting worse", "improving", "getting colder", "staying the same"],
        correct: 1,
      },
    ],
  },
};
