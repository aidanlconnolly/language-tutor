import type { Unit } from "../../types";

export const UNIT_GREETINGS: Unit = {
  slug: "greetings",
  stage: 1,
  order: 2,
  icon: "👋",
  title: "Greetings & courtesy",
  tagline: "As-salāmu ʿalaykum, ṣabāḥ al-khayr, shukran, ʿafwan.",
  badge: "tourist",
  lessons: [
    {
      slug: "greetings-salam",
      title: "As-salāmu ʿalaykum & welcome",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The universal greeting",
          body: [
            "<strong>As-salāmu ʿalaykum</strong> (peace be upon you) is the all-purpose Arabic greeting — any time of day, formal or friendly, anywhere from Cairo to Casablanca.",
            "The fixed reply flips it back: <strong>wa ʿalaykum as-salām</strong> (and upon you peace). Whoever is greeted answers this way — it's almost automatic.",
            "For lighter, everyday hellos you'll also hear <strong>marḥaban</strong> (hello) and the warm <strong>ahlan wa sahlan</strong> (welcome) — often shortened to just <em>ahlan</em>.",
          ],
          tip: {
            label: "Cairo street note",
            body: "In Egypt the casual <em>ahlan</em> is everywhere — a shopkeeper will greet you with <em>ahlan!</em> and you can simply answer <em>ahlan bik</em> (to a man) / <em>ahlan biki</em> (to a woman).",
          },
          keyPoint:
            "Greeting: as-salāmu ʿalaykum → Reply: wa ʿalaykum as-salām. Casual: marḥaban / ahlan.",
        },
        {
          type: "vocab",
          heading: "Core greetings",
          items: [
            { l1: "السَّلامُ عَلَيْكُم", en: "peace be upon you (hello)", note: "transliteration: as-salāmu ʿalaykum; the standard greeting." },
            { l1: "وَعَلَيْكُمُ السَّلام", en: "and upon you peace (reply)", note: "transliteration: wa ʿalaykum as-salām; the fixed response." },
            { l1: "مَرْحَبًا", en: "hello", note: "transliteration: marḥaban; neutral, friendly, any time." },
            { l1: "أَهْلًا وَسَهْلًا", en: "welcome", note: "transliteration: ahlan wa sahlan; warm welcome, often shortened to ahlan." },
            { l1: "أَهْلًا بِكَ", en: "welcome (to a man)", note: "transliteration: ahlan bika; reply to ahlan, addressing a male." },
            { l1: "أَهْلًا بِكِ", en: "welcome (to a woman)", note: "transliteration: ahlan biki; final kasra marks the female addressee." },
          ],
        },
        {
          type: "dialogue",
          heading: "Arriving at a Cairo guesthouse",
          setup: "You walk into a small guesthouse near Khan el-Khalili.",
          lines: [
            { speaker: "You", l1: "السَّلامُ عَلَيْكُم.", en: "Peace be upon you." },
            { speaker: "Host", l1: "وَعَلَيْكُمُ السَّلام! أَهْلًا وَسَهْلًا.", en: "And upon you peace! Welcome." },
            { speaker: "You", l1: "مَرْحَبًا. شُكْرًا.", en: "Hello. Thank you." },
            { speaker: "Host", l1: "أَهْلًا بِكَ في القاهِرَة.", en: "Welcome to Cairo." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Greet correctly",
          questions: [
            {
              q: "Someone says 'as-salāmu ʿalaykum'. The correct reply is:",
              qL1: "السَّلامُ عَلَيْكُم",
              options: ["marḥaban", "wa ʿalaykum as-salām", "shukran", "ahlan wa sahlan"],
              correct: 1,
              fb: "The fixed reply mirrors the greeting: wa ʿalaykum as-salām.",
            },
            {
              q: "'ahlan wa sahlan' means…",
              options: ["goodbye", "thank you", "welcome", "good night"],
              correct: 2,
              fb: "It's a warm 'welcome', often shortened to ahlan.",
            },
            {
              q: "To welcome a WOMAN with 'ahlan bi-' you say:",
              options: ["ahlan bika", "ahlan biki", "ahlan bihi", "ahlan biha"],
              correct: 1,
              fb: "The final kasra (biki) marks a female addressee.",
            },
          ],
        },
      ],
    },
    {
      slug: "greetings-time-goodbye",
      title: "Times of day & goodbyes",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Morning, evening, and parting",
          body: [
            "Like English, Arabic has time-based greetings. <strong>Ṣabāḥ al-khayr</strong> (morning of goodness) is 'good morning'; the warm reply is <strong>ṣabāḥ an-nūr</strong> (morning of light).",
            "In the evening, swap <em>ṣabāḥ</em> for <strong>masāʾ</strong>: <strong>masāʾ al-khayr</strong> → reply <strong>masāʾ an-nūr</strong>.",
            "To say goodbye, the standard is <strong>maʿa s-salāma</strong> (literally 'with safety' — go in peace).",
          ],
          keyPoint:
            "ṣabāḥ al-khayr → ṣabāḥ an-nūr (morning). masāʾ al-khayr → masāʾ an-nūr (evening). Goodbye: maʿa s-salāma.",
        },
        {
          type: "vocab",
          heading: "Time-of-day & farewells",
          items: [
            { l1: "صَباحُ الْخَيْر", en: "good morning", note: "transliteration: ṣabāḥ al-khayr; lit. 'morning of goodness'." },
            { l1: "صَباحُ النُّور", en: "good morning (reply)", note: "transliteration: ṣabāḥ an-nūr; lit. 'morning of light'." },
            { l1: "مَساءُ الْخَيْر", en: "good evening", note: "transliteration: masāʾ al-khayr; masāʾ = evening." },
            { l1: "مَساءُ النُّور", en: "good evening (reply)", note: "transliteration: masāʾ an-nūr." },
            { l1: "مَعَ السَّلامَة", en: "goodbye", note: "transliteration: maʿa s-salāma; lit. 'with safety'." },
            { l1: "إِلى اللِّقاء", en: "until we meet again", note: "transliteration: ilā l-liqāʾ; slightly more formal farewell." },
            { l1: "تُصْبِحُ عَلى خَيْر", en: "good night", note: "transliteration: tuṣbiḥu ʿalā khayr; lit. 'may you wake to goodness'." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Match the reply",
          intro: "Choose the answering greeting.",
          items: [
            {
              template: "صَباحُ الْخَيْر! — صَباحُ ___",
              answer: "النُّور",
              en: "Good morning! — Morning of light.",
              options: ["الْخَيْر", "النُّور", "السَّلامَة", "اللِّقاء"],
            },
            {
              template: "مَساءُ الْخَيْر! — مَساءُ ___",
              answer: "النُّور",
              en: "Good evening! — Evening of light.",
              options: ["الْخَيْر", "النُّور", "اللِّقاء", "السَّلام"],
            },
            {
              template: "We part for the day — مَعَ ___",
              answer: "السَّلامَة",
              en: "Goodbye — 'with safety'.",
              options: ["الْخَيْر", "النُّور", "السَّلامَة", "اللِّقاء"],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "Morning at the felucca dock",
          setup: "You greet a boatman by the Nile early in the morning.",
          lines: [
            { speaker: "You", l1: "صَباحُ الْخَيْر!", en: "Good morning!" },
            { speaker: "Boatman", l1: "صَباحُ النُّور! مَرْحَبًا.", en: "Morning of light! Hello." },
            { speaker: "You", l1: "شُكْرًا. مَعَ السَّلامَة.", en: "Thank you. Goodbye." },
            { speaker: "Boatman", l1: "إِلى اللِّقاء!", en: "Until we meet again!" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Good morning! Goodbye.",
          reference: "صَباحُ الْخَيْر! مَعَ السَّلامَة.",
          hint: "'Good morning' = ṣabāḥ al-khayr; 'goodbye' = maʿa s-salāma.",
        },
      ],
    },
    {
      slug: "greetings-thanks-howareyou",
      title: "Thanks, please & 'how are you?'",
      estMinutes: 8,
      pages: [
        {
          type: "vocab",
          heading: "The courtesy pocket-set",
          intro: "These five carry you through almost any short exchange.",
          items: [
            { l1: "شُكْرًا", en: "thank you", note: "transliteration: shukran; root sh-k-r. Add jazīlan for 'many thanks'." },
            { l1: "شُكْرًا جَزيلًا", en: "thank you very much", note: "transliteration: shukran jazīlan." },
            { l1: "عَفْوًا", en: "you're welcome / excuse me", note: "transliteration: ʿafwan; reply to shukran, also 'pardon'." },
            { l1: "مِنْ فَضْلِكَ", en: "please (to a man)", note: "transliteration: min faḍlika; to a woman: min faḍliki." },
            { l1: "لَوْ سَمَحْتَ", en: "if you would permit (excuse me, to a man)", note: "transliteration: law samaḥta; to a woman: law samaḥti. Used to get attention." },
          ],
        },
        {
          type: "tip",
          heading: "ʿafwan does double duty",
          body: "<strong>ʿafwan</strong> is the standard reply to <em>shukran</em> ('you're welcome'), but it also means 'excuse me / pardon' when you brush past someone or didn't catch what was said. Context tells you which.",
          example: { l1: "— شُكْرًا. — عَفْوًا.", en: "— Thank you. — You're welcome." },
        },
        {
          type: "conjugation",
          heading: "'How are you?' & replies",
          verb: "كَيْفَ حالُكَ",
          meaning: "how are you? (lit. how is your state?)",
          intro: "The MSA question changes ending by who you address. Egyptians say izzayyak / izzayyik colloquially.",
          tenses: [
            {
              name: "Asking",
              forms: [
                { person: "anta (to a man)", form: "كَيْفَ حالُكَ؟", en: "how are you? (m.) — kayfa ḥāluka?" },
                { person: "anti (to a woman)", form: "كَيْفَ حالُكِ؟", en: "how are you? (f.) — kayfa ḥāluki?" },
                { person: "Egyptian (colloquial)", form: "اِزَّيَّك؟ / اِزَّيِّك؟", en: "how are you? — izzayyak (m.) / izzayyik (f.)" },
              ],
            },
            {
              name: "Replying",
              forms: [
                { person: "anā (good)", form: "أَنا بِخَيْر", en: "I'm fine — anā bi-khayr" },
                { person: "anā (thanks be to God)", form: "الْحَمْدُ لِله", en: "praise be to God (= I'm well) — al-ḥamdu lillāh" },
                { person: "wa anta?", form: "وَأَنْتَ؟ / وَأَنْتِ؟", en: "and you? — wa anta? (m.) / wa anti? (f.)" },
              ],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the phrase (right to left)",
          intro: "Arrange the words. The first word sits on the right.",
          items: [
            { tokens: ["كَيْفَ", "حالُكَ"], en: "How are you? (to a man) — kayfa ḥāluka" },
            { tokens: ["أَنا", "بِخَيْر", "شُكْرًا"], en: "I'm fine, thank you — anā bi-khayr, shukran" },
            { tokens: ["شُكْرًا", "جَزيلًا"], en: "Thank you very much — shukran jazīlan" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Thank you very much. You're welcome.",
          reference: "شُكْرًا جَزيلًا. عَفْوًا.",
          hint: "'Thanks a lot' = shukran jazīlan; the reply is ʿafwan.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Someone says 'shukran'. You reply:",
              options: ["min faḍlik", "ʿafwan", "marḥaban", "maʿa s-salāma"],
              correct: 1,
            },
            {
              q: "How do you ask a WOMAN 'how are you?' in MSA?",
              options: ["kayfa ḥāluka?", "kayfa ḥāluki?", "izzayyak?", "maʿa s-salāma?"],
              correct: 1,
            },
            {
              q: "'min faḍlik' means…",
              options: ["thank you", "please", "goodbye", "welcome"],
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
        q: "The reply to 'as-salāmu ʿalaykum' is:",
        options: ["ahlan wa sahlan", "wa ʿalaykum as-salām", "shukran jazīlan", "maʿa s-salāma"],
        correct: 1,
      },
      {
        q: "'ahlan wa sahlan' means:",
        options: ["good night", "welcome", "thank you", "goodbye"],
        correct: 1,
      },
      {
        q: "The reply to 'ṣabāḥ al-khayr' is:",
        options: ["ṣabāḥ an-nūr", "masāʾ al-khayr", "maʿa s-salāma", "ʿafwan"],
        correct: 0,
      },
      {
        q: "How do you say 'good evening'?",
        options: ["ṣabāḥ al-khayr", "masāʾ al-khayr", "tuṣbiḥu ʿalā khayr", "ilā l-liqāʾ"],
        correct: 1,
      },
      {
        q: "The standard goodbye is:",
        options: ["marḥaban", "ahlan", "maʿa s-salāma", "ṣabāḥ an-nūr"],
        correct: 2,
      },
      {
        q: "'shukran jazīlan' means:",
        options: ["please", "you're welcome", "thank you very much", "excuse me"],
        correct: 2,
      },
      {
        q: "'ʿafwan' can mean both 'you're welcome' and:",
        options: ["good morning", "excuse me / pardon", "see you tomorrow", "please"],
        correct: 1,
      },
      {
        q: "To say 'please' to a man, use:",
        options: ["min faḍlika", "min faḍliki", "law samaḥti", "ʿafwan"],
        correct: 0,
      },
      {
        q: "In MSA, 'kayfa ḥāluki?' is addressed to:",
        options: ["a man", "a woman", "a group", "yourself"],
        correct: 1,
      },
      {
        q: "The Egyptian colloquial for 'how are you?' (to a man) is:",
        options: ["kayfa ḥāluka", "izzayyak", "al-ḥamdu lillāh", "maʿa s-salāma"],
        correct: 1,
      },
    ],
  },
};
