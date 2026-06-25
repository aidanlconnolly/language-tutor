import type { Unit } from "../../types";

export const UNIT_FOOD_VOCAB: Unit = {
  slug: "food-vocab",
  stage: 4,
  order: 17,
  icon: "🍲",
  title: "Food vocab deep dive",
  tagline: "Meats, vegetables, bread (ʿaysh), spices.",
  badge: "tourist",
  lessons: [
    {
      slug: "food-vocab-proteins-produce",
      title: "Meat, fish, vegetables & fruit",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Building a food vocabulary",
          body: [
            "Most Egyptian menus are organized around a protein plus sides. The big ones: <strong>laḥm</strong> (red meat), <strong>firākh</strong> (chicken — colloquial; MSA is <em>dajāj</em>), and <strong>samak</strong> (fish), famous in the coastal city of Alexandria.",
            "Vegetables (<strong>khuḍār</strong>) and fruit (<strong>fawākih</strong>) fill out the table. Note that many food nouns are <em>collective</em>: <em>ṭamāṭim</em> (tomatoes), <em>baṣal</em> (onion) refer to the category as a mass.",
            "Egyptians love <em>mashwī</em> (grilled) meats and <em>maqlī</em> (fried) fish — two adjectives worth memorizing early.",
          ],
          keyPoint:
            "laḥm = meat, firākh/dajāj = chicken, samak = fish, khuḍār = vegetables, fawākih = fruit.",
        },
        {
          type: "vocab",
          heading: "Meat & fish",
          items: [
            { l1: "لَحْم", en: "meat (red)", note: "laḥm — m." },
            { l1: "فِرَاخ", en: "chicken", note: "firākh — colloq.; MSA dajāj." },
            { l1: "دَجَاج", en: "chicken (MSA)", note: "dajāj — m." },
            { l1: "سَمَك", en: "fish", note: "samak — m. collective." },
            { l1: "جَمْبَرِي", en: "shrimp", note: "jambarī — m." },
            { l1: "كَبَاب", en: "kebab (grilled meat)", note: "kabāb — m." },
            { l1: "كُفْتَة", en: "kofta (spiced minced meat)", note: "kufta — f." },
            { l1: "مَشْوِيّ", en: "grilled", note: "mashwī — adj." },
            { l1: "مَقْلِيّ", en: "fried", note: "maqlī — adj." },
          ],
        },
        {
          type: "vocab",
          heading: "Vegetables & fruit",
          items: [
            { l1: "خُضَار", en: "vegetables", note: "khuḍār — pl." },
            { l1: "طَمَاطِم", en: "tomatoes", note: "ṭamāṭim — collective." },
            { l1: "بَصَل", en: "onion", note: "baṣal — m. collective." },
            { l1: "بَطَاطِس", en: "potatoes", note: "baṭāṭis — collective." },
            { l1: "خِيَار", en: "cucumber", note: "khiyār — m." },
            { l1: "فَوَاكِه", en: "fruit", note: "fawākih — pl." },
            { l1: "مَوْز", en: "banana", note: "mawz — m. collective." },
            { l1: "بُرْتُقَال", en: "orange", note: "burtuqāl — m. collective." },
            { l1: "تُفَّاح", en: "apple", note: "tuffāḥ — m. collective." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Match the food",
          questions: [
            {
              q: "'samak' is…",
              options: ["meat", "chicken", "fish", "shrimp"],
              correct: 2,
            },
            {
              q: "The MSA word for chicken is…",
              options: ["firākh", "dajāj", "kufta", "kabāb"],
              correct: 1,
            },
            {
              q: "'mashwī' means…",
              options: ["fried", "grilled", "boiled", "raw"],
              correct: 1,
            },
            {
              q: "'baṣal' is…",
              options: ["tomato", "potato", "onion", "cucumber"],
              correct: 2,
            },
            {
              q: "'fawākih' are…",
              options: ["vegetables", "fruit", "spices", "meats"],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'd like grilled fish and a tomato salad.",
          reference: "أُرِيد سَمَك مَشْوِي وَسَلَطَة طَمَاطِم.",
          hint: "samak + mashwī, then salaṭa ṭamāṭim.",
        },
      ],
    },
    {
      slug: "food-vocab-bread-staples",
      title: "Bread (ʿaysh) & cooking words",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Bread is life",
          body: [
            "Egyptians call bread <strong>ʿaysh</strong> — which also literally means 'life' / 'living.' (Elsewhere in the Arab world the standard word is <em>khubz</em>.) The everyday loaf is <strong>ʿaysh baladi</strong>, a round whole-wheat pita baked in village ovens.",
            "Staples that anchor the diet: <strong>ruzz</strong> (rice), <strong>ʿads</strong> (lentils), <strong>fūl</strong> (fava beans), and <strong>jibna</strong> (cheese — the salty white <em>jibna bēḍa</em> is a breakfast classic).",
            "Cooking verbs and forms you'll see on menus: <em>maslūq</em> (boiled), <em>maḥshī</em> (stuffed), <em>fī l-furn</em> (in the oven / baked).",
          ],
          tip: {
            label: "ʿaysh = bread = life",
            body: "That a nation calls its daily bread <em>ʿaysh</em> ('life') tells you how central it is. Bread is on every table, used as a utensil to scoop fūl, taʿmiya, and dips.",
          },
        },
        {
          type: "vocab",
          heading: "Bread & staples",
          items: [
            { l1: "عَيْش", en: "bread", note: "ʿaysh — m.; Egyptian; also 'life'." },
            { l1: "عَيْش بَلَدِي", en: "country/whole-wheat pita", note: "ʿaysh baladi — the everyday loaf." },
            { l1: "خُبْز", en: "bread (MSA)", note: "khubz — m." },
            { l1: "أُرْز", en: "rice", note: "ruzz — m." },
            { l1: "عَدْس", en: "lentils", note: "ʿads — m." },
            { l1: "فُول", en: "fava beans", note: "fūl — m.; breakfast staple." },
            { l1: "جِبْنَة", en: "cheese", note: "jibna — f.; jibna bēḍa = white cheese." },
            { l1: "زَيْت", en: "oil", note: "zayt — m.; zayt zaytūn = olive oil." },
            { l1: "مَحْشِي", en: "stuffed", note: "maḥshī — adj.; stuffed vegetables." },
            { l1: "مَسْلُوق", en: "boiled", note: "maslūq — adj." },
          ],
        },
        {
          type: "dialogue",
          heading: "At the bakery counter",
          setup: "You stop at a neighborhood bakery (forn).",
          lines: [
            { speaker: "You", l1: "صَبَاح الْخَيْر، عَايِز عَيْش بَلَدِي.", en: "Good morning, I'd like country bread." },
            { speaker: "Baker", l1: "كَام رَغِيف؟", en: "How many loaves?" },
            { speaker: "You", l1: "خَمْسَة، مِنْ فَضْلَك.", en: "Five, please." },
            { speaker: "Baker", l1: "حَاضِر. حَاجَة تَانْيَة؟", en: "Right away. Anything else?" },
            { speaker: "You", l1: "لَا، كِفَايَة. بِكَم؟", en: "No, that's enough. How much?" },
            { speaker: "Baker", l1: "عَشَرَة جُنَيْه بَس.", en: "Just ten pounds." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Fill the gap",
          intro: "Choose the staple that fits.",
          items: [
            {
              template: "عَايِز ___ بَلَدِي، خَمْسَة رَغِيف.",
              answer: "عَيْش",
              en: "I'd like country bread, five loaves.",
              options: ["عَيْش", "أُرْز", "زَيْت", "سَمَك"],
            },
            {
              template: "الْفُول مَعَ ___ زَيْتُون.",
              answer: "زَيْت",
              en: "The fava beans with olive oil.",
              options: ["زَيْت", "جِبْنَة", "عَدْس", "مَحْشِي"],
            },
            {
              template: "أُرِيد طَبَق ___ مَحْشِي.",
              answer: "خُضَار",
              en: "I'd like a plate of stuffed vegetables.",
              options: ["خُضَار", "زَيْت", "عَيْش", "مَسْلُوق"],
            },
            {
              template: "الْبَيْض ___ ، مِنْ فَضْلَك.",
              answer: "مَسْلُوق",
              en: "The eggs boiled, please.",
              options: ["مَسْلُوق", "مَشْوِيّ", "بَلَدِي", "حَارّ"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'd like country bread and white cheese.",
          reference: "أُرِيد عَيْش بَلَدِي وَجِبْنَة بَيْضَا.",
          hint: "ʿaysh baladi + jibna bēḍa.",
        },
      ],
    },
    {
      slug: "food-vocab-tastes-meals",
      title: "Tastes & meals of the day",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Describing flavor and timing",
          body: [
            "Four tastes will get you far: <strong>ḥilw</strong> (sweet), <strong>māliḥ</strong> (salty), <strong>ḥāmiḍ</strong> (sour), and <strong>ḥārr</strong> (spicy/hot). To say something is tasty: <strong>lazīz</strong>.",
            "The three meals: <strong>fuṭūr</strong> (breakfast), <strong>ghadāʾ</strong> (lunch — the main meal in Egypt, eaten mid-afternoon), and <strong>ʿashāʾ</strong> (dinner, lighter).",
            "To say you're hungry: <strong>anā jawʿān</strong> (m) / <strong>jawʿāna</strong> (f). Thirsty: <strong>ʿaṭshān / ʿaṭshāna</strong>. Full: <strong>shabʿān / shabʿāna</strong>.",
          ],
          keyPoint:
            "Tastes: ḥilw (sweet), māliḥ (salty), ḥāmiḍ (sour), ḥārr (spicy). Meals: fuṭūr, ghadāʾ, ʿashāʾ.",
        },
        {
          type: "vocab",
          heading: "Tastes & hunger",
          items: [
            { l1: "حِلْو", en: "sweet", note: "ḥilw — adj." },
            { l1: "مَالِح", en: "salty", note: "māliḥ — adj." },
            { l1: "حَامِض", en: "sour", note: "ḥāmiḍ — adj." },
            { l1: "حَارّ", en: "spicy / hot", note: "ḥārr — adj." },
            { l1: "لَذِيذ", en: "delicious", note: "lazīz — adj." },
            { l1: "جَوْعَان", en: "hungry (m)", note: "jawʿān; f. jawʿāna." },
            { l1: "عَطْشَان", en: "thirsty (m)", note: "ʿaṭshān; f. ʿaṭshāna." },
            { l1: "شَبْعَان", en: "full / sated (m)", note: "shabʿān; f. shabʿāna." },
          ],
        },
        {
          type: "vocab",
          heading: "Meals of the day",
          items: [
            { l1: "فُطُور", en: "breakfast", note: "fuṭūr — m." },
            { l1: "غَدَاء", en: "lunch", note: "ghadāʾ — m.; the main meal." },
            { l1: "عَشَاء", en: "dinner", note: "ʿashāʾ — m.; lighter." },
            { l1: "وَجْبَة", en: "meal", note: "wajba — f." },
            { l1: "بِالْهَنَا وَالشِّفَا", en: "bon appétit", note: "bil-hanā wa sh-shifāʾ — said before/after eating." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Tastes & timing",
          questions: [
            {
              q: "'ḥāmiḍ' means…",
              options: ["sweet", "salty", "sour", "spicy"],
              correct: 2,
            },
            {
              q: "The main meal of the day in Egypt is…",
              options: ["fuṭūr", "ghadāʾ", "ʿashāʾ", "wajba"],
              correct: 1,
            },
            {
              q: "A woman says she is hungry as…",
              options: ["jawʿān", "jawʿāna", "ʿaṭshān", "shabʿān"],
              correct: 1,
            },
            {
              q: "'bil-hanā wa sh-shifāʾ' means…",
              options: ["the bill please", "bon appétit", "no spice", "I'm full"],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'm hungry. The food is delicious!",
          reference: "أَنَا جَوْعَان. الْأَكْل لَذِيذ!",
          hint: "anā jawʿān, then al-akl lazīz.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'māliḥ' means…",
              options: ["sweet", "salty", "sour", "spicy"],
              correct: 1,
            },
            {
              q: "'breakfast' is…",
              options: ["fuṭūr", "ghadāʾ", "ʿashāʾ", "wajba"],
              correct: 0,
            },
            {
              q: "'I'm thirsty' (m) is…",
              options: ["anā jawʿān", "anā ʿaṭshān", "anā shabʿān", "anā lazīz"],
              correct: 1,
            },
            {
              q: "'shabʿān' means…",
              options: ["hungry", "thirsty", "full", "tired"],
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
        q: "'samak' is…",
        options: ["meat", "fish", "chicken", "bread"],
        correct: 1,
      },
      {
        q: "The MSA word for chicken is…",
        options: ["firākh", "dajāj", "kufta", "laḥm"],
        correct: 1,
      },
      {
        q: "'mashwī' means…",
        options: ["fried", "boiled", "grilled", "stuffed"],
        correct: 2,
      },
      {
        q: "Egyptians call bread…",
        options: ["khubz", "ʿaysh", "ruzz", "fūl"],
        correct: 1,
      },
      {
        q: "'fūl' is…",
        options: ["rice", "lentils", "fava beans", "cheese"],
        correct: 2,
      },
      {
        q: "'maḥshī' means…",
        options: ["boiled", "stuffed", "fried", "grilled"],
        correct: 1,
      },
      {
        q: "'ḥāmiḍ' describes a taste that is…",
        options: ["sweet", "salty", "sour", "spicy"],
        correct: 2,
      },
      {
        q: "The main meal of the day in Egypt is…",
        options: ["fuṭūr (breakfast)", "ghadāʾ (lunch)", "ʿashāʾ (dinner)", "wajba"],
        correct: 1,
      },
      {
        q: "A woman says she is full as…",
        options: ["shabʿān", "shabʿāna", "jawʿāna", "ʿaṭshāna"],
        correct: 1,
      },
      {
        q: "Translate: 'I'd like grilled fish.'",
        options: [
          "أُرِيد سَمَك مَشْوِي.",
          "أُرِيد فِرَاخ مَقْلِيّة.",
          "عَايِز عَيْش بَلَدِي.",
          "أَنَا جَوْعَان.",
        ],
        correct: 0,
      },
    ],
  },
};
