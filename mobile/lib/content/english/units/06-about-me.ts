import type { Unit } from "../../types";

export const UNIT_ABOUT_ME: Unit = {
  slug: "about-me",
  stage: 2,
  order: 6,
  icon: "🪪",
  title: "About me",
  tagline: "Nationalities, jobs, family, my/your and the possessive 's.",
  badge: "tourist",
  lessons: [
    {
      slug: "about-me-nationalities",
      title: "Where I'm from",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Countries vs nationalities",
          body: [
            "To say where you're from, English uses <strong>from</strong> + a country: <em>I'm from Spain. I'm from Brazil. I'm from the UK.</em>",
            "To describe yourself, English uses a <strong>nationality adjective</strong>: <em>I'm Spanish. I'm Brazilian. I'm British.</em> Notice that nationalities always start with a <strong>capital letter</strong> in English — <em>French</em>, not <em>french</em>.",
            "Both patterns answer the question <em>Where are you from?</em> You'll hear them constantly in London, one of the most international cities in the world.",
          ],
          keyPoint:
            "I'm from + country (a place). I'm + nationality (an adjective, always capitalised).",
        },
        {
          type: "vocab",
          heading: "Countries and their nationalities",
          intro: "The nationality adjective often (not always) changes the ending.",
          items: [
            { l1: "Britain / the UK — British", en: "the country, then the adjective for a person", note: "Say 'I'm from the UK' or 'I'm British'." },
            { l1: "England — English", en: "one part of Britain", note: "England is inside the UK; not the same word." },
            { l1: "Spain — Spanish", en: "country and nationality" },
            { l1: "France — French", en: "country and nationality" },
            { l1: "Italy — Italian", en: "country and nationality" },
            { l1: "Germany — German", en: "country and nationality" },
            { l1: "Brazil — Brazilian", en: "country and nationality" },
            { l1: "China — Chinese", en: "country and nationality" },
            { l1: "Poland — Polish", en: "a very common nationality in the UK" },
            { l1: "Ireland — Irish", en: "country and nationality" },
          ],
        },
        {
          type: "tip",
          heading: "The UK is not the same as England",
          body: "The <strong>UK</strong> (United Kingdom) includes England, Scotland, Wales and Northern Ireland. Someone from Glasgow is <strong>British</strong> and <strong>Scottish</strong>, but not <em>English</em>. Calling a Scottish person 'English' is a classic tourist mistake — when unsure, say <strong>British</strong>.",
          example: { l1: "She's from Edinburgh, so she's Scottish.", en: "Edinburgh is in Scotland." },
        },
        {
          type: "dialogue",
          heading: "Meeting at a London hostel",
          setup: "Two travellers chat in the common room.",
          lines: [
            { speaker: "Ana", l1: "Hi! Where are you from?", en: "" },
            { speaker: "Tom", l1: "I'm from Ireland — from Cork. And you?", en: "Cork is a city in Ireland." },
            { speaker: "Ana", l1: "I'm Spanish, from Seville. Is this your first time in London?", en: "" },
            { speaker: "Tom", l1: "No, I come here for work. I'm half British, actually — my mum's English.", en: "'half British' = one parent is British." },
            { speaker: "Ana", l1: "Oh, nice! So you speak perfect English.", en: "" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Country or nationality?",
          intro: "Choose the correct word for each gap.",
          items: [
            {
              template: "I'm from ___. (the country)",
              answer: "Italy",
              en: "the place, not the adjective",
              options: ["Italian", "Italy", "Italians", "the Italy"],
            },
            {
              template: "She's ___. (the adjective)",
              answer: "French",
              en: "describing the person",
              options: ["France", "French", "from French", "the France"],
            },
            {
              template: "They're from ___.",
              answer: "Brazil",
              en: "the country",
              options: ["Brazilian", "Brazil", "the Brazil", "Brazilians"],
            },
            {
              template: "He's ___, from Warsaw.",
              answer: "Polish",
              en: "Warsaw is the capital of Poland",
              options: ["Poland", "Polish", "from Polish", "a Poland"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Say it in English",
          direction: "en-to-l1",
          prompt: "Introduce yourself: say you are from Spain and that you are Spanish.",
          reference: "I'm from Spain. I'm Spanish.",
          hint: "Use 'from' with the country and the adjective on its own for the nationality.",
        },
      ],
    },
    {
      slug: "about-me-jobs",
      title: "What I do",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Talking about your job",
          body: [
            "English uses the article <strong>a</strong> (or <strong>an</strong> before a vowel sound) with jobs: <em>I'm a nurse. She's an engineer. He's a teacher.</em>",
            "A common alternative is <strong>work as</strong> + a / an: <em>I work as a chef. I work as an accountant.</em>",
            "To say where, use <strong>in</strong> for places and fields and <strong>for</strong> with companies: <em>I work in a hospital. I work in finance. I work for the BBC.</em>",
          ],
          keyPoint:
            "I'm a / an + job, OR I work as a / an + job. Use 'an' before a vowel sound: an artist, an engineer.",
        },
        {
          type: "vocab",
          heading: "Common jobs",
          items: [
            { l1: "a nurse", en: "looks after patients in a hospital" },
            { l1: "a teacher", en: "works in a school" },
            { l1: "an engineer", en: "designs or builds things — note 'an'" },
            { l1: "a shop assistant", en: "helps customers in a shop", note: "British English; Americans say 'sales clerk'." },
            { l1: "a chef", en: "a professional cook in a restaurant" },
            { l1: "an accountant", en: "manages money and tax — note 'an'" },
            { l1: "a builder", en: "constructs houses and buildings" },
            { l1: "a doctor", en: "treats sick people" },
            { l1: "a student", en: "someone who studies" },
            { l1: "unemployed", en: "without a job at the moment", note: "An adjective, not a job: 'I'm unemployed' (no 'a')." },
          ],
        },
        {
          type: "tip",
          heading: "When NOT to use 'a'",
          body: "Drop the article when the word is an <strong>adjective</strong>, not a job noun. We say <em>I'm a student</em> (noun) but <em>I'm retired / unemployed / self-employed</em> (adjectives, no 'a'). Also, plurals take no article: <em>We're teachers.</em>",
          example: { l1: "I'm self-employed. I work as a photographer.", en: "'self-employed' takes no 'a'; 'a photographer' does." },
        },
        {
          type: "dialogue",
          heading: "Small talk at a party",
          setup: "You meet someone new at a friend's flat.",
          lines: [
            { speaker: "Priya", l1: "So, what do you do?", en: "= What's your job? A very common question." },
            { speaker: "You", l1: "I'm a nurse. I work in a hospital in north London. How about you?", en: "" },
            { speaker: "Priya", l1: "I work as a graphic designer for a small agency.", en: "'for' is used with companies." },
            { speaker: "You", l1: "Sounds interesting! Do you enjoy it?", en: "" },
            { speaker: "Priya", l1: "Most days, yes. The hours are long, though.", en: "'though' here means 'but'." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Put the words in the correct order.",
          items: [
            { tokens: ["I", "work", "as", "a", "chef"], en: "I work as a chef." },
            { tokens: ["She", "is", "an", "engineer"], en: "She is an engineer." },
            { tokens: ["He", "works", "in", "a", "hospital"], en: "He works in a hospital." },
            { tokens: ["What", "do", "you", "do", "?"], en: "What do you do?" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "A or an?",
          questions: [
            {
              q: "I'm ___ accountant.",
              options: ["a", "an", "the", "—"],
              correct: 1,
              fb: "'Accountant' starts with a vowel sound, so we use 'an'.",
            },
            {
              q: "She works ___ a chef in Soho.",
              options: ["in", "as", "for", "at"],
              correct: 1,
              fb: "'work as a' + job is the standard pattern.",
            },
            {
              q: "Which sentence is correct?",
              options: ["I'm unemployed.", "I'm a unemployed.", "I'm an unemployed.", "I work unemployed."],
              correct: 0,
              fb: "'Unemployed' is an adjective — no article.",
            },
            {
              q: "They ___ teachers.",
              options: ["is a", "are", "are a", "is"],
              correct: 1,
              fb: "Plural jobs take no article: 'They are teachers.'",
            },
          ],
        },
      ],
    },
    {
      slug: "about-me-family",
      title: "My family and the possessive 's",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "My, your, his, her",
          body: [
            "Possessive adjectives show who owns something: <strong>my</strong>, <strong>your</strong>, <strong>his</strong>, <strong>her</strong>, <strong>our</strong>, <strong>their</strong>. They never change for singular or plural: <em>my sister, my sisters</em>.",
            "Use <strong>his</strong> for a man and <strong>her</strong> for a woman — they match the <em>owner</em>, not the thing owned: <em>her brother</em> (a woman's brother), <em>his brother</em> (a man's brother).",
            "To show that one person owns something, add <strong>'s</strong> to the name or noun: <em>my sister's flat</em> = the flat belonging to my sister; <em>Tom's car</em> = the car belonging to Tom.",
          ],
          keyPoint:
            "Possessive adjective (my/your/his/her) before the noun, OR name + 's: 'my sister's flat'.",
        },
        {
          type: "vocab",
          heading: "Family members",
          items: [
            { l1: "mum / mother", en: "your female parent", note: "'Mum' is everyday British English; 'mother' is more formal." },
            { l1: "dad / father", en: "your male parent", note: "Americans write 'mom'; British write 'mum'." },
            { l1: "brother", en: "a male sibling" },
            { l1: "sister", en: "a female sibling" },
            { l1: "son", en: "your male child" },
            { l1: "daughter", en: "your female child" },
            { l1: "husband", en: "a woman's (or man's) male spouse" },
            { l1: "wife", en: "a man's (or woman's) female spouse" },
            { l1: "grandparents", en: "your parents' parents" },
            { l1: "parents", en: "mum and dad together" },
          ],
        },
        {
          type: "tip",
          heading: "The possessive 's vs the plural s",
          body: "Don't confuse them. <em>cars</em> = more than one car (plural, no apostrophe). <em>Tom's car</em> = the car belonging to Tom (possessive, with apostrophe). For a plural noun that already ends in s, the apostrophe goes after it: <em>my parents' house</em>.",
          example: { l1: "My brother's children visit my parents' house.", en: "one brother (brother's), two parents (parents')." },
        },
        {
          type: "conjugation",
          heading: "Possessive adjectives",
          verb: "possessives",
          meaning: "showing who owns something",
          intro: "These go before the noun and don't change for number.",
          tenses: [
            {
              name: "The possessive adjectives",
              forms: [
                { person: "I", form: "my", en: "my family" },
                { person: "you", form: "your", en: "your name" },
                { person: "he", form: "his", en: "his job" },
                { person: "she", form: "her", en: "her flat" },
                { person: "we", form: "our", en: "our children" },
                { person: "they", form: "their", en: "their house" },
              ],
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Choose the possessive",
          intro: "Match the possessive to the owner.",
          items: [
            {
              template: "Maria loves ___ job. (Maria = she)",
              answer: "her",
              en: "the owner is a woman",
              options: ["his", "her", "their", "your"],
            },
            {
              template: "This is ___ brother, Tom. (I)",
              answer: "my",
              en: "the speaker's brother",
              options: ["mine", "my", "me", "I"],
            },
            {
              template: "We're at ___ sister's flat. (she)",
              answer: "her",
              en: "her sister's flat",
              options: ["his", "her", "she", "hers"],
            },
            {
              template: "James drives ___ dad's car. (James = he)",
              answer: "his",
              en: "the owner is a man",
              options: ["her", "their", "his", "your"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Say it in English",
          direction: "en-to-l1",
          prompt: "Tell someone that you are staying at your sister's flat in London.",
          reference: "I'm staying at my sister's flat in London.",
          hint: "Use the possessive 's: sister's flat. Use 'my' before it.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which shows that the flat belongs to my sister?",
              options: ["my sisters flat", "my sister's flat", "my sisters' flat", "my sister flat"],
              correct: 1,
            },
            {
              q: "Maria talks about ___ husband. (Maria = she)",
              options: ["his", "her", "their", "your"],
              correct: 1,
            },
            {
              q: "'I'm staying at ___ parents' house.' Choose the correct possessive.",
              options: ["my", "mine", "me", "I"],
              correct: 0,
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
        q: "Complete: 'I'm ___ Spain.'",
        options: ["from", "of", "in", "at"],
        correct: 0,
      },
      {
        q: "Which is a nationality (adjective)?",
        options: ["Spain", "Spanish", "the Spain", "Spains"],
        correct: 1,
      },
      {
        q: "Someone from Glasgow is best described as…",
        options: ["English", "British", "Britain", "from English"],
        correct: 1,
      },
      {
        q: "Choose the correct article: 'She's ___ engineer.'",
        options: ["a", "an", "the", "—"],
        correct: 1,
      },
      {
        q: "Which sentence is correct?",
        options: ["I work as a nurse.", "I work as nurse.", "I work a nurse.", "I am work nurse."],
        correct: 0,
      },
      {
        q: "'I'm unemployed' is correct because…",
        options: [
          "it needs 'a'",
          "'unemployed' is an adjective, so no article",
          "jobs never take 'a'",
          "it should be 'an unemployed'",
        ],
        correct: 1,
      },
      {
        q: "Tom is a man. Complete: '___ car is new.'",
        options: ["Her", "His", "Their", "Your"],
        correct: 1,
      },
      {
        q: "Which means 'the flat belonging to my brother'?",
        options: ["my brothers flat", "my brother's flat", "my brothers' flats", "my brother flats"],
        correct: 1,
      },
      {
        q: "Choose: 'We work ___ a hospital.'",
        options: ["for", "as", "in", "on"],
        correct: 2,
      },
      {
        q: "Which question asks about someone's job?",
        options: ["Where are you from?", "What do you do?", "How are you?", "Who are you?"],
        correct: 1,
      },
    ],
  },
};
