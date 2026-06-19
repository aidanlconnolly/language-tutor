import type { Unit } from "../../types";

export const UNIT_IDIOMS: Unit = {
  slug: "idioms",
  stage: 7,
  order: 29,
  icon: "🐺",
  title: "Idioms & phrasal verbs",
  tagline: "'Raining cats and dogs', 'cheers', and get up / get on / get by.",
  badge: "culture",
  lessons: [
    {
      slug: "idioms-everyday-british",
      title: "Everyday British idioms",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Idioms make you sound at home",
          body: [
            "British English is stuffed with small, vivid expressions. You don't need hundreds — a handful, used naturally, makes a huge difference.",
            "<strong>It's raining cats and dogs</strong> = it's pouring with rain (Britain has a lot of practice with this one).",
            "<strong>A piece of cake</strong> = very easy. <em>The exam? Piece of cake.</em>",
            "<strong>Cheers</strong> = thanks, or bye, or both — the single most British word there is.",
            "<strong>Knackered</strong> = exhausted. <em>I'm absolutely knackered.</em> Closely related: <strong>shattered</strong>.",
          ],
          keyPoint:
            "Raining cats and dogs (pouring), a piece of cake (easy), cheers (thanks/bye), knackered (exhausted).",
        },
        {
          type: "vocab",
          heading: "Everyday idioms & slang",
          items: [
            { l1: "raining cats and dogs", en: "raining very heavily", note: "Always a bit jokey; 'chucking it down' is the casual version." },
            { l1: "a piece of cake", en: "very easy", note: "'Easy peasy' is the playful cousin." },
            { l1: "cheers", en: "thanks / bye / a toast", note: "Three meanings at once — context decides." },
            { l1: "knackered", en: "extremely tired", note: "Informal but everyone says it." },
            { l1: "chuffed", en: "very pleased", note: "'Chuffed to bits' = delighted." },
            { l1: "gutted", en: "very disappointed", note: "The opposite of chuffed." },
            { l1: "a cuppa", en: "a cup of tea", note: "'Fancy a cuppa?' = want some tea?" },
            { l1: "skint", en: "having no money / broke" },
            { l1: "dodgy", en: "suspicious, unreliable, or off", note: "A dodgy area, a dodgy stomach, a dodgy bloke." },
            { l1: "to faff about", en: "to waste time / mess around", note: "'Stop faffing about.'" },
            { l1: "the bee's knees", en: "excellent, the best", note: "A touch old-fashioned but charming." },
            { l1: "cost a bomb", en: "to be very expensive", note: "'That coat cost a bomb.'" },
          ],
        },
        {
          type: "tip",
          heading: "'Cheers' does three jobs",
          body: "Hand someone their change, they say <strong>cheers</strong> (thanks). Leaving the pub, you call <strong>cheers!</strong> (bye). Clinking glasses, it's <strong>cheers!</strong> (a toast). Tone and timing tell people which one you mean, and Britons happily use it for all three in a single evening.",
          example: { l1: "— Here's your tea. — Cheers, love.", en: "— Here's your tea. — Thanks." },
        },
        {
          type: "multipleChoice",
          heading: "What does it mean?",
          questions: [
            {
              q: "Your friend says they're 'absolutely knackered'. They are…",
              options: ["very happy", "very tired", "very busy", "very late"],
              correct: 1,
              fb: "Knackered = exhausted. 'Shattered' means the same.",
            },
            {
              q: "'The test was a piece of cake.' The test was…",
              options: ["delicious", "easy", "long", "cancelled"],
              correct: 1,
            },
            {
              q: "It's 'raining cats and dogs.' It's…",
              options: ["a bit drizzly", "pouring with rain", "sunny", "windy"],
              correct: 1,
            },
            {
              q: "You got the job you wanted. You're 'chuffed to bits.' You're…",
              options: ["delighted", "disappointed", "nervous", "broke"],
              correct: 0,
            },
            {
              q: "'I'm a bit skint this week.' You have…",
              options: ["no time", "no money", "no energy", "no idea"],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      slug: "idioms-phrasal-verbs",
      title: "Phrasal verbs with get, take & look",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Phrasal verbs are everywhere",
          body: [
            "A <strong>phrasal verb</strong> is a verb plus a little word (up, on, after, off…) that changes the meaning. English speakers use them constantly, often instead of a 'fancier' single verb.",
            "<strong>Get up</strong> = rise from bed. <strong>Get on (with)</strong> = have a good relationship, or make progress. <strong>Get by</strong> = manage / survive.",
            "<strong>Look after</strong> = take care of. <strong>Look for</strong> = search for. <strong>Look forward to</strong> = feel happy about something coming.",
            "<strong>Take off</strong> = remove (clothes), or leave the ground (a plane). <strong>Take after</strong> = resemble (a relative). <strong>Take up</strong> = start a hobby.",
          ],
          keyPoint:
            "The little word changes everything: get up, get on, get by; look after, look for; take off, take after.",
        },
        {
          type: "vocab",
          heading: "Common phrasal verbs",
          items: [
            { l1: "to get up", en: "to get out of bed / stand up", note: "'I get up at seven.'" },
            { l1: "to get on with", en: "to have a good relationship with", note: "'I get on well with my flatmate.'" },
            { l1: "to get by", en: "to manage / survive", note: "'My English is enough to get by.'" },
            { l1: "to get over", en: "to recover from", note: "'He got over the flu.'" },
            { l1: "to look after", en: "to take care of", note: "'Can you look after the cat?'" },
            { l1: "to look for", en: "to search for", note: "'I'm looking for my keys.'" },
            { l1: "to look forward to", en: "to anticipate happily", note: "Followed by -ing: 'looking forward to seeing you.'" },
            { l1: "to take off", en: "to remove / (of a plane) leave the ground", note: "'Take off your coat.' / 'The plane took off.'" },
            { l1: "to take after", en: "to resemble (a relative)", note: "'She takes after her mum.'" },
            { l1: "to take up", en: "to start (a hobby)", note: "'I took up running.'" },
            { l1: "to turn up", en: "to arrive / appear", note: "'He turned up late.'" },
            { l1: "to give up", en: "to quit / stop trying", note: "'Don't give up!'" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Pick the right little word",
          intro: "Choose the particle that completes each phrasal verb.",
          items: [
            {
              template: "I usually get ___ at seven o'clock.",
              answer: "up",
              en: "I usually get out of bed at seven.",
              options: ["up", "on", "by", "off"],
            },
            {
              template: "Can you look ___ my dog while I'm away?",
              answer: "after",
              en: "Can you take care of my dog?",
              options: ["for", "after", "up", "out"],
            },
            {
              template: "We're really looking ___ to the weekend.",
              answer: "forward",
              en: "We're happily anticipating the weekend.",
              options: ["after", "forward", "up", "for"],
            },
            {
              template: "Please take ___ your shoes at the door.",
              answer: "off",
              en: "Please remove your shoes.",
              options: ["off", "up", "after", "on"],
            },
            {
              template: "She really takes ___ her father.",
              answer: "after",
              en: "She resembles her father.",
              options: ["off", "up", "after", "on"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Choose the meaning",
          questions: [
            {
              q: "'My French is just enough to get by.' To get by means…",
              options: ["to travel", "to manage / survive", "to study", "to give up"],
              correct: 1,
            },
            {
              q: "'I get on really well with my sister.' To get on with someone means…",
              options: ["to argue with them", "to have a good relationship", "to live with them", "to copy them"],
              correct: 1,
            },
            {
              q: "'He's taken up the guitar.' He has…",
              options: ["sold the guitar", "started learning the guitar", "broken the guitar", "lent the guitar"],
              correct: 1,
            },
            {
              q: "'Nobody turned up to the party.' Nobody…",
              options: ["enjoyed it", "arrived", "left", "called"],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      slug: "idioms-natural-conversation",
      title: "Using them naturally in conversation",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "A little goes a long way",
          body: [
            "The goal isn't to cram idioms in — it's to drop one or two at the right moment so your English sounds relaxed and real.",
            "Use them where they fit your mood: <em>I'm knackered</em> after a long day, <em>chuffed</em> with good news, <em>gutted</em> with bad news.",
            "Phrasal verbs do the heavy lifting in everyday chat. Native speakers say <em>get on with it</em>, <em>look after yourself</em>, <em>I'd better get going</em> far more than the 'textbook' verbs.",
          ],
          keyPoint:
            "One well-placed idiom beats five forced ones. Match the expression to your genuine mood.",
        },
        {
          type: "dialogue",
          heading: "Two friends catching up",
          setup: "Priya bumps into Tom on a rainy Friday in London.",
          lines: [
            { speaker: "Priya", l1: "Tom! Blimey, it's raining cats and dogs out there.", en: "Tom! Wow, it's pouring with rain out there." },
            { speaker: "Tom", l1: "Tell me about it. I'm soaked. How've you been?", en: "I know. I'm soaked. How have you been?" },
            { speaker: "Priya", l1: "Knackered, honestly. Work's been mad. But I got that promotion!", en: "Exhausted, honestly. Work's been crazy. But I got that promotion!" },
            { speaker: "Tom", l1: "No way! I'm chuffed for you. Drinks to celebrate?", en: "Really! I'm so pleased for you. Drinks to celebrate?" },
            { speaker: "Priya", l1: "Go on then. But I'm a bit skint till payday.", en: "Alright then. But I have little money until payday." },
            { speaker: "Tom", l1: "My round. Cheers — see you at six!", en: "I'll pay. Bye — see you at six!" },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Tap the words into a natural order.",
          items: [
            { tokens: ["I'm", "looking", "forward", "to", "the", "weekend"], en: "I'm looking forward to the weekend." },
            { tokens: ["Can", "you", "look", "after", "the", "kids"], en: "Can you look after the kids?" },
            { tokens: ["I'd", "better", "get", "going"], en: "I'd better get going." },
            { tokens: ["Don't", "give", "up", "so", "easily"], en: "Don't give up so easily." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Say that you're exhausted but very pleased, and you can't wait for the weekend.",
          reference: "I'm knackered but really chuffed, and I'm looking forward to the weekend.",
          hint: "Use 'knackered' for tired, 'chuffed' for pleased, and 'looking forward to' for anticipation.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which word means 'very pleased'?",
              options: ["gutted", "skint", "chuffed", "dodgy"],
              correct: 2,
            },
            {
              q: "'I'd better get going' means…",
              options: ["I'm lost", "I should leave now", "I want to stay", "I'm tired"],
              correct: 1,
            },
            {
              q: "Choose the natural sentence:",
              options: [
                "I'm looking forward the weekend.",
                "I'm looking forward to the weekend.",
                "I'm looking after to the weekend.",
                "I'm looking for to the weekend.",
              ],
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
        q: "'It's raining cats and dogs.' It means…",
        options: ["it's drizzling", "it's pouring", "it's foggy", "it's snowing"],
        correct: 1,
      },
      {
        q: "'A piece of cake' means something is…",
        options: ["delicious", "very easy", "expensive", "small"],
        correct: 1,
      },
      {
        q: "Someone hands you change and says 'cheers'. Here it means…",
        options: ["a toast", "thanks", "goodbye", "sorry"],
        correct: 1,
      },
      {
        q: "'I'm knackered' means…",
        options: ["I'm broke", "I'm exhausted", "I'm annoyed", "I'm hungry"],
        correct: 1,
      },
      {
        q: "'I get on well with my neighbours.' To get on with someone =",
        options: ["to argue", "to have a good relationship", "to live near", "to avoid"],
        correct: 1,
      },
      {
        q: "'Can you look after the baby?' To look after =",
        options: ["to search for", "to take care of", "to look at", "to wake up"],
        correct: 1,
      },
      {
        q: "'The plane took off on time.' Took off =",
        options: ["was cancelled", "landed", "left the ground", "was delayed"],
        correct: 2,
      },
      {
        q: "'She takes after her mother.' It means she…",
        options: ["follows her mother", "resembles her mother", "lives with her mother", "calls her mother"],
        correct: 1,
      },
      {
        q: "'My English is enough to get by.' To get by =",
        options: ["to pass an exam", "to manage / survive", "to travel", "to give up"],
        correct: 1,
      },
      {
        q: "Which sentence is natural English?",
        options: [
          "I look forward to see you.",
          "I'm looking forward to seeing you.",
          "I'm looking forward see you.",
          "I look forward seeing you.",
        ],
        correct: 1,
      },
    ],
  },
};
