import type { Unit } from "../../types";

export const UNIT_LIKES_WANTS: Unit = {
  slug: "likes-wants",
  stage: 2,
  order: 8,
  icon: "❤️",
  title: "Likes & wants",
  tagline: "like/love/hate + -ing, 'I'd like', want, prefer.",
  badge: "tourist",
  lessons: [
    {
      slug: "likes-wants-ing",
      title: "Like, love, hate + -ing",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Talking about what you enjoy",
          body: [
            "To talk about activities you enjoy, English uses <strong>like / love / hate / don't mind</strong> followed by a verb ending in <strong>-ing</strong>: <em>I love walking. I hate queuing. I don't mind cooking.</em>",
            "These run from strongest dislike to strongest like: <strong>hate &lt; don't like &lt; don't mind &lt; like &lt; love.</strong> <em>Don't mind</em> sits in the middle — it means 'it's OK, I'm happy either way'.",
            "You can also like a <strong>noun</strong>: <em>I love tea. I hate Mondays.</em> But for an <em>activity</em>, use the -ing form: <em>I love drinking tea.</em>",
          ],
          keyPoint:
            "like / love / hate / don't mind + verb-ing for activities: 'I love walking', 'I hate waiting'.",
        },
        {
          type: "vocab",
          heading: "Activities Londoners talk about",
          intro: "Each is shown in the -ing form ready to use.",
          items: [
            { l1: "walking", en: "going on foot, often for pleasure" },
            { l1: "queuing", en: "waiting in a line", note: "Very British! Americans say 'waiting in line'." },
            { l1: "cooking", en: "preparing food" },
            { l1: "reading", en: "reading books or news" },
            { l1: "travelling", en: "going to other places", note: "British English doubles the l: travelling." },
            { l1: "shopping", en: "buying things in shops" },
            { l1: "watching telly", en: "watching television", note: "'telly' = informal British for TV." },
            { l1: "going out", en: "leaving home for fun (pub, cinema)" },
            { l1: "running", en: "running for exercise" },
            { l1: "cycling", en: "riding a bicycle" },
          ],
        },
        {
          type: "tip",
          heading: "Spelling the -ing form",
          body: "Most verbs just add <strong>-ing</strong>: <em>read → reading</em>. If a verb ends in a silent <em>e</em>, drop it: <em>make → making, cycle → cycling</em>. If it ends in one vowel + one consonant (stressed), double the consonant: <em>run → running, swim → swimming, shop → shopping</em>.",
          example: { l1: "I love making tea, but I hate running.", en: "make → making (drop e); run → running (double n)." },
        },
        {
          type: "dialogue",
          heading: "Weekend plans",
          setup: "Two friends compare what they enjoy.",
          lines: [
            { speaker: "Ola", l1: "What do you like doing at the weekend?", en: "" },
            { speaker: "Ben", l1: "I love cycling along the canal. How about you?", en: "" },
            { speaker: "Ola", l1: "I don't mind cycling, but I prefer walking. I hate getting up early, though.", en: "'though' = but, at the end." },
            { speaker: "Ben", l1: "Same! I love staying in bed on a Sunday.", en: "" },
            { speaker: "Ola", l1: "Do you like cooking? I'm having people over.", en: "'having people over' = inviting guests." },
            { speaker: "Ben", l1: "I love it. Count me in.", en: "'Count me in' = yes, include me." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Add the -ing form",
          intro: "Type or choose the correct -ing verb.",
          items: [
            {
              template: "I love ___ along the river. (walk)",
              answer: "walking",
              en: "walk + ing",
              options: ["walk", "walking", "to walk", "walks"],
            },
            {
              template: "She hates ___ in long queues. (wait)",
              answer: "waiting",
              en: "wait + ing",
              options: ["wait", "to wait", "waiting", "waits"],
            },
            {
              template: "We don't mind ___ dinner. (cook)",
              answer: "cooking",
              en: "cook + ing",
              options: ["cook", "cooking", "to cook", "cooks"],
            },
            {
              template: "He loves ___ along the canal. (cycle)",
              answer: "cycling",
              en: "cycle → cycling (drop the e)",
              options: ["cycleing", "cycling", "cicling", "cycle"],
            },
          ],
        },
      ],
    },
    {
      slug: "likes-wants-would-like",
      title: "'I'd like' vs 'I like'",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "A small word with a big difference",
          body: [
            "<strong>I like</strong> = something is always true (a general preference): <em>I like coffee</em> = I enjoy coffee in general.",
            "<strong>I'd like</strong> (short for <em>I would like</em>) = I want this <strong>now</strong> — it's a polite request: <em>I'd like a coffee, please</em> = please give me a coffee.",
            "In a café or shop, always use <strong>I'd like</strong> or <strong>can I have</strong>, never <em>I want</em>. To English ears, <em>I want a coffee</em> sounds blunt, even rude — it's fine for children, not for adults ordering.",
          ],
          keyPoint:
            "I like = general taste. I'd like / Can I have = a polite request right now.",
        },
        {
          type: "vocab",
          heading: "Ordering and requesting",
          items: [
            { l1: "I'd like…", en: "polite 'I want', for requests", note: "Short for 'I would like'." },
            { l1: "Can I have…?", en: "an even more common way to order" },
            { l1: "Could I have…?", en: "slightly more polite than 'can I have'" },
            { l1: "I'll have…", en: "a natural way to order food/drink", note: "'I'll' = I will." },
            { l1: "Would you like…?", en: "offering something to someone", note: "'Would you like a cup of tea?'" },
            { l1: "Just a…, please.", en: "ordering one simple thing" },
            { l1: "for here / takeaway", en: "eat in the café, or take it away", note: "Americans say 'to go' for takeaway." },
            { l1: "anything else?", en: "what staff ask before finishing your order" },
          ],
        },
        {
          type: "dialogue",
          heading: "At a London café",
          setup: "You order at the counter.",
          lines: [
            { speaker: "Barista", l1: "Hi, what can I get you?", en: "" },
            { speaker: "You", l1: "I'd like a flat white, please.", en: "polite request, not 'I want'." },
            { speaker: "Barista", l1: "Of course. Anything else?", en: "" },
            { speaker: "You", l1: "Could I have a croissant as well?", en: "'as well' = also." },
            { speaker: "Barista", l1: "Sure. For here or takeaway?", en: "" },
            { speaker: "You", l1: "For here, thanks. How much is that?", en: "" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Like or 'd like?",
          questions: [
            {
              q: "Ordering in a café, you say:",
              options: ["I want a tea.", "I like a tea.", "I'd like a tea, please.", "I am a tea."],
              correct: 2,
              fb: "A request now → I'd like (polite).",
            },
            {
              q: "Talking about your taste in general:",
              options: ["I'd like coffee.", "I like coffee.", "I would like coffee now.", "I have coffee."],
              correct: 1,
              fb: "A general truth → I like.",
            },
            {
              q: "Offering tea to a guest:",
              options: ["Do you like a tea?", "Would you like a tea?", "You want tea?", "You like tea?"],
              correct: 1,
              fb: "An offer → Would you like…?",
            },
            {
              q: "Why avoid 'I want a coffee' when ordering?",
              options: [
                "It's grammatically wrong",
                "It sounds blunt/impolite to English ears",
                "Coffee is uncountable",
                "You must use the past tense",
              ],
              correct: 1,
              fb: "'I want' is correct grammar but sounds too direct; use 'I'd like'.",
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the polite request",
          items: [
            { tokens: ["I'd", "like", "a", "coffee", ",", "please"], en: "I'd like a coffee, please." },
            { tokens: ["Can", "I", "have", "the", "bill", "?"], en: "Can I have the bill?" },
            { tokens: ["Would", "you", "like", "some", "tea", "?"], en: "Would you like some tea?" },
            { tokens: ["I'll", "have", "the", "soup", ",", "please"], en: "I'll have the soup, please." },
          ],
        },
        {
          type: "translate",
          heading: "Say it in English",
          direction: "en-to-l1",
          prompt: "Politely order a cup of tea and a sandwich in a café.",
          reference: "I'd like a cup of tea and a sandwich, please.",
          hint: "Use 'I'd like' (not 'I want') and finish with 'please'.",
        },
      ],
    },
    {
      slug: "likes-wants-prefer",
      title: "Prefer and comparing preferences",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Saying what you prefer",
          body: [
            "<strong>Prefer</strong> means 'like more'. To compare two things, use <strong>prefer X to Y</strong>: <em>I prefer tea to coffee.</em> The little word is <strong>to</strong> — not 'than', not 'over'.",
            "With activities, you can use either the -ing form or 'to': <em>I prefer walking to driving</em> or <em>I prefer to walk rather than drive.</em>",
            "To soften a choice, use <strong>I'd rather</strong> + base verb: <em>I'd rather stay in tonight</em> = I would prefer to stay in. After 'I'd rather', the verb has no 'to': <em>I'd rather walk</em> (not <em>I'd rather to walk</em>).",
          ],
          keyPoint:
            "prefer X to Y. I'd rather + base verb (no 'to'): 'I'd rather walk.'",
        },
        {
          type: "vocab",
          heading: "Preference phrases",
          items: [
            { l1: "I prefer… to…", en: "like the first thing more than the second", note: "Always 'to', e.g. 'tea to coffee'." },
            { l1: "I'd rather…", en: "I would prefer to", note: "Followed by a base verb: 'I'd rather stay.'" },
            { l1: "I'd rather not.", en: "a polite way to refuse", note: "= I would prefer not to." },
            { l1: "I'm not keen on…", en: "I don't really like…", note: "Common British understatement." },
            { l1: "I'm not really into…", en: "I'm not interested in…" },
            { l1: "It depends.", en: "the answer changes with the situation" },
            { l1: "either is fine", en: "I'm happy with both" },
            { l1: "I don't mind either way", en: "I have no strong preference" },
          ],
        },
        {
          type: "tip",
          heading: "'Prefer to', not 'prefer than'",
          body: "A very common mistake is <em>I prefer tea than coffee</em>. The correct word after <strong>prefer</strong> is <strong>to</strong>: <em>I prefer tea to coffee.</em> Save <em>than</em> for comparatives like <em>better than</em> or <em>nicer than</em>.",
          example: { l1: "I prefer the bus to the Tube — it's cheaper than the train.", en: "prefer + to; cheaper + than." },
        },
        {
          type: "dialogue",
          heading: "Deciding where to eat",
          setup: "Two friends pick a restaurant.",
          lines: [
            { speaker: "Joy", l1: "Do you fancy Indian or Italian tonight?", en: "'fancy' = feel like / want." },
            { speaker: "Raj", l1: "I prefer Italian to Indian, to be honest. But it's up to you.", en: "'up to you' = your choice." },
            { speaker: "Joy", l1: "I'd rather have something light. I'm not keen on heavy food tonight.", en: "" },
            { speaker: "Raj", l1: "Then how about sushi? Or would you rather stay in?", en: "" },
            { speaker: "Joy", l1: "Sushi sounds perfect. I'd rather go out — I've been in all day.", en: "" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the preference",
          intro: "Choose the correct word.",
          items: [
            {
              template: "I prefer tea ___ coffee.",
              answer: "to",
              en: "prefer + to",
              options: ["than", "to", "over", "that"],
            },
            {
              template: "I'd rather ___ in tonight.",
              answer: "stay",
              en: "after 'I'd rather' use the base verb",
              options: ["to stay", "stay", "staying", "stays"],
            },
            {
              template: "She prefers walking ___ driving.",
              answer: "to",
              en: "prefer + to, with -ing forms too",
              options: ["than", "to", "from", "of"],
            },
            {
              template: "I'm not ___ on early mornings.",
              answer: "keen",
              en: "'not keen on' = don't really like",
              options: ["keen", "like", "fancy", "rather"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Say it in English",
          direction: "en-to-l1",
          prompt: "Tell a friend you prefer tea to coffee, and that you'd rather walk than take the bus.",
          reference: "I prefer tea to coffee, and I'd rather walk than take the bus.",
          hint: "Use 'prefer … to …' and 'I'd rather … than …' with base verbs.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Complete: 'I prefer coffee ___ tea.'",
              options: ["than", "to", "over", "of"],
              correct: 1,
            },
            {
              q: "Which is correct after 'I'd rather'?",
              options: ["I'd rather to go.", "I'd rather going.", "I'd rather go.", "I'd rather goes."],
              correct: 2,
            },
            {
              q: "'I'm not keen on…' means:",
              options: ["I love it", "I don't really like it", "I want it now", "I prefer it"],
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
        q: "Complete: 'I love ___ along the river.'",
        options: ["walk", "walking", "to walking", "walks"],
        correct: 1,
      },
      {
        q: "Which means 'it's OK, I'm happy either way'?",
        options: ["I hate it", "I love it", "I don't mind", "I'd rather not"],
        correct: 2,
      },
      {
        q: "Spell the -ing form of 'run':",
        options: ["runing", "running", "runnning", "runing"],
        correct: 1,
      },
      {
        q: "Ordering in a café, the polite choice is:",
        options: ["I want a tea.", "I'd like a tea, please.", "Give me a tea.", "I like a tea."],
        correct: 1,
      },
      {
        q: "'I like coffee' means…",
        options: [
          "give me a coffee now",
          "I enjoy coffee in general",
          "I would prefer coffee",
          "I don't like coffee",
        ],
        correct: 1,
      },
      {
        q: "Offer tea to a guest:",
        options: ["Do you like a tea?", "Would you like some tea?", "You want tea?", "I'd like a tea?"],
        correct: 1,
      },
      {
        q: "Complete: 'I prefer tea ___ coffee.'",
        options: ["than", "to", "over", "from"],
        correct: 1,
      },
      {
        q: "Which is correct?",
        options: ["I'd rather to stay.", "I'd rather staying.", "I'd rather stay.", "I'd rather stays."],
        correct: 2,
      },
      {
        q: "'I'd like' is short for:",
        options: ["I do like", "I am like", "I would like", "I will like"],
        correct: 2,
      },
      {
        q: "Which is the most polite request for the bill?",
        options: ["I want the bill.", "Bill.", "Could I have the bill, please?", "You give bill."],
        correct: 2,
      },
    ],
  },
};
