import type { Unit } from "../../types";

export const UNIT_RESTAURANT: Unit = {
  slug: "restaurant",
  stage: 4,
  order: 16,
  icon: "🍽️",
  title: "At the restaurant",
  tagline: "Ordering, al-ḥisāb, anā ʿāyiz/ʿāyza.",
  badge: "tourist",
  lessons: [
    {
      slug: "restaurant-table-menu",
      title: "A table and the menu",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Getting seated",
          body: [
            "Walk into a Cairo restaurant (<strong>maṭʿam</strong>) and you'll usually be greeted with <em>itfaḍḍal</em> (m) / <em>itfaḍḍalī</em> (f) — 'please, come in / go ahead.' It's the all-purpose 'help yourself' word.",
            "To ask for a table for two: <strong>ṭāwila li-shakhṣayn</strong> — 'a table for two people.' The menu is <strong>qāʾimat aṭ-ṭaʿām</strong>, often just called the <em>menu</em>.",
            "Polite 'I'd like' in MSA is <strong>urīd</strong>; the very common Egyptian colloquial is <em>anā ʿāyiz</em> (m) / <em>anā ʿāyza</em> (f). Both will be understood everywhere.",
          ],
          keyPoint:
            "maṭʿam = restaurant. ṭāwila li-shakhṣayn = table for two. qāʾimat aṭ-ṭaʿām = the menu.",
        },
        {
          type: "vocab",
          heading: "At the door & table",
          items: [
            { l1: "مَطْعَم", en: "restaurant", note: "maṭʿam — m.; pl. maṭāʿim." },
            { l1: "طَاوِلَة", en: "table", note: "ṭāwila — f." },
            { l1: "لِشَخْصَيْن", en: "for two people", note: "li-shakhṣayn — shakhṣ = person." },
            { l1: "قَائِمَة الطَّعَام", en: "the menu", note: "qāʾimat aṭ-ṭaʿām — f." },
            { l1: "نَادِل", en: "waiter", note: "nādil — m. (MSA); colloq. garsōn." },
            { l1: "حَجْز", en: "reservation", note: "ḥajz — m." },
            { l1: "تَفَضَّل", en: "go ahead / please", note: "itfaḍḍal (m) / itfaḍḍalī (f)." },
            { l1: "مَشْرُوبَات", en: "drinks", note: "mashrūbāt — pl." },
            { l1: "أَطْبَاق", en: "dishes", note: "aṭbāq — pl. of ṭabaq (dish/plate)." },
          ],
        },
        {
          type: "dialogue",
          heading: "Asking for a table",
          setup: "You arrive at a busy restaurant in Zamalek.",
          lines: [
            { speaker: "Host", l1: "مَسَاء الْخَيْر، كَم شَخْص؟", en: "Good evening, how many people?" },
            { speaker: "You", l1: "مَسَاء النُّور، طَاوِلَة لِشَخْصَيْن مِنْ فَضْلَك.", en: "Good evening, a table for two please." },
            { speaker: "Host", l1: "عِنْدَكُم حَجْز؟", en: "Do you have a reservation?" },
            { speaker: "You", l1: "لَا، مَا عِنْدِنَاش حَجْز.", en: "No, we don't have a reservation." },
            { speaker: "Host", l1: "مَفِيش مُشْكِلَة، اِتْفَضَّلُوا.", en: "No problem, come this way." },
            { speaker: "You", l1: "شُكْرًا. مُمْكِن قَائِمَة الطَّعَام؟", en: "Thanks. May I have the menu?" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "At the door",
          questions: [
            {
              q: "'a table for two' is…",
              options: ["ṭāwila li-shakhṣayn", "qāʾimat aṭ-ṭaʿām", "al-ḥisāb", "ḥajz"],
              correct: 0,
            },
            {
              q: "'qāʾimat aṭ-ṭaʿām' means…",
              options: ["the bill", "the menu", "the waiter", "the reservation"],
              correct: 1,
            },
            {
              q: "A reservation is a…",
              options: ["maṭʿam", "ṭabaq", "ḥajz", "nādil"],
              correct: 2,
            },
            {
              q: "'itfaḍḍalī' is said to…",
              options: ["a man", "a woman", "a group only", "the kitchen"],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      slug: "restaurant-ordering",
      title: "Ordering your meal",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Two ways to say 'I want'",
          body: [
            "The polished MSA verb is <strong>urīd</strong> ('I want / I'd like'): <em>urīd ṭabaq mulūkhiyya</em> — 'I'd like a plate of molokheya.'",
            "In a Cairo restaurant the everyday phrase is <strong>anā ʿāyiz</strong> (m) / <strong>anā ʿāyza</strong> (f). To soften it, add <em>min faḍlak</em> at the end.",
            "Handy follow-ups: <strong>ʿindkum…?</strong> = 'do you have…?', <strong>shū tinṣaḥnī?</strong> = 'what do you recommend?', and <strong>min ghayr…</strong> = 'without…' (e.g. <em>min ghayr baṣal</em> = without onion).",
          ],
          tip: {
            label: "Recommend me something",
            body: "Asking <em>ēh aktar ṭabaq lazīz ʿindkum?</em> ('what's your tastiest dish?') almost always gets you the house specialty — and a warmer welcome.",
          },
        },
        {
          type: "vocab",
          heading: "Ordering words",
          items: [
            { l1: "أُرِيد", en: "I'd like / I want", note: "urīd — MSA, polite." },
            { l1: "أَنَا عَايِز", en: "I want (m)", note: "anā ʿāyiz — colloquial." },
            { l1: "أَنَا عَايْزَة", en: "I want (f)", note: "anā ʿāyza — colloquial." },
            { l1: "عِنْدُكُم…؟", en: "do you have…?", note: "ʿindkum…? — to staff (pl.)." },
            { l1: "طَبَق", en: "dish / plate", note: "ṭabaq — m.; pl. aṭbāq." },
            { l1: "مُقَبِّلَات", en: "appetizers / starters", note: "muqabbilāt — pl.; mezze." },
            { l1: "طَبَق رَئِيسِيّ", en: "main course", note: "ṭabaq raʾīsī — m." },
            { l1: "مِنْ غَيْر", en: "without", note: "min ghayr — min ghayr baṣal = without onion." },
            { l1: "حَارّ", en: "spicy / hot", note: "ḥārr — adj." },
            { l1: "لَذِيذ", en: "delicious", note: "lazīz — adj." },
          ],
        },
        {
          type: "dialogue",
          heading: "Placing the order",
          setup: "The waiter comes to take your order.",
          lines: [
            { speaker: "Waiter", l1: "تَحِبُّوا تَطْلُبُوا إِيه؟", en: "What would you like to order?" },
            { speaker: "You", l1: "أَنَا عَايِز طَبَق مُلُوخِيَّة وَفِرَاخ مَشْوِيَّة.", en: "I'd like a plate of molokheya and grilled chicken." },
            { speaker: "Waiter", l1: "وَحَضْرِتِك؟", en: "And you, ma'am?" },
            { speaker: "Friend", l1: "أَنَا عَايْزَة كَبَاب، مِنْ غَيْر بَصَل.", en: "I'd like kebab, without onion." },
            { speaker: "Waiter", l1: "تَمَام. مَشْرُوبَات؟", en: "Great. Drinks?" },
            { speaker: "You", l1: "اِتْنَيْن عَصِير لِيمُون، مِنْ فَضْلَك.", en: "Two lemon juices, please." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Order it right",
          intro: "Choose the word that completes each line.",
          items: [
            {
              template: "أَنَا ___ طَبَق كَبَاب.",
              answer: "عَايِز",
              en: "I'd like a plate of kebab. (m)",
              options: ["عَايِز", "غَيْر", "حَارّ", "حَجْز"],
            },
            {
              template: "الْكَبَاب مِنْ ___ بَصَل، مِنْ فَضْلَك.",
              answer: "غَيْر",
              en: "The kebab without onion, please.",
              options: ["غَيْر", "عَايِز", "طَبَق", "لَذِيذ"],
            },
            {
              template: "___ مُلُوخِيَّة الْيَوْم؟",
              answer: "عِنْدُكُم",
              en: "Do you have molokheya today?",
              options: ["عِنْدُكُم", "أُرِيد", "مِنْ", "حَارّ"],
            },
            {
              template: "أُرِيد ___ رَئِيسِيّ وَاحِد.",
              answer: "طَبَق",
              en: "I'd like one main course.",
              options: ["طَبَق", "غَيْر", "حَجْز", "نَادِل"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'd like grilled chicken, without onion. Do you have molokheya?",
          reference: "أَنَا عَايِز فِرَاخ مَشْوِيَّة، مِنْ غَيْر بَصَل. عِنْدُكُم مُلُوخِيَّة؟",
          hint: "Use 'anā ʿāyiz', then 'min ghayr baṣal', then 'ʿindkum…?'",
        },
      ],
    },
    {
      slug: "restaurant-bill-tip",
      title: "The bill & baksheesh",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Paying and tipping",
          body: [
            "Ask for the bill the same way as the café: <strong>al-ḥisāb min faḍlak</strong>. Many sit-down restaurants add a service charge (<em>khidma</em>) and tax already printed on the bill.",
            "Even with a service charge, leaving a small <strong>baʾshīsh</strong> (tip, ~10%) for the waiter is customary and warmly received in Egypt. Baksheesh greases nearly every service interaction here.",
            "Useful closers: <strong>al-akl kān lazīz</strong> = 'the food was delicious', and <strong>maʿa s-salāma</strong> = 'goodbye' (lit. 'with safety').",
          ],
          keyPoint:
            "al-ḥisāb min faḍlak = the bill, please. khidma = service charge. baʾshīsh ≈ 10% tip is customary.",
        },
        {
          type: "vocab",
          heading: "Paying up",
          items: [
            { l1: "الْحِسَاب", en: "the bill", note: "al-ḥisāb — m." },
            { l1: "خِدْمَة", en: "service charge", note: "khidma — f.; often on the bill." },
            { l1: "ضَرِيبَة", en: "tax", note: "ḍarība — f." },
            { l1: "بَقْشِيش", en: "tip", note: "baʾshīsh — m.; ~10% is customary." },
            { l1: "نَقْدًا", en: "in cash", note: "naqdan — adv." },
            { l1: "بِالْبِطَاقَة", en: "by card", note: "bi-l-biṭāqa — biṭāqa = card." },
            { l1: "الْأَكْل كَان لَذِيذ", en: "the food was delicious", note: "al-akl kān lazīz." },
            { l1: "مَعَ السَّلَامَة", en: "goodbye", note: "maʿa s-salāma — lit. 'with safety'." },
          ],
        },
        {
          type: "dialogue",
          heading: "Settling the bill",
          setup: "You've finished a great meal.",
          lines: [
            { speaker: "You", l1: "الْحِسَاب مِنْ فَضْلَك. الْأَكْل كَان لَذِيذ.", en: "The bill please. The food was delicious." },
            { speaker: "Waiter", l1: "حَاضِر. الْحِسَاب مَعَ الْخِدْمَة.", en: "Right away. The bill with service charge." },
            { speaker: "You", l1: "مُمْكِن أَدْفَع بِالْبِطَاقَة؟", en: "Can I pay by card?" },
            { speaker: "Waiter", l1: "آسِف، نَقْدًا بَس.", en: "Sorry, cash only." },
            { speaker: "You", l1: "تَمَام. اِتْفَضَّل، وَدَه بَقْشِيش لِيك.", en: "Fine. Here you go, and this is a tip for you." },
            { speaker: "Waiter", l1: "شُكْرًا جَزِيلًا، مَعَ السَّلَامَة.", en: "Thank you very much, goodbye." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Put the words in order.",
          items: [
            { tokens: ["الْحِسَاب", "مِنْ", "فَضْلَك"], en: "The bill, please." },
            { tokens: ["مُمْكِن", "أَدْفَع", "بِالْبِطَاقَة", "؟"], en: "Can I pay by card?" },
            { tokens: ["الْأَكْل", "كَان", "لَذِيذ"], en: "The food was delicious." },
            { tokens: ["دَه", "بَقْشِيش", "لِيك"], en: "This is a tip for you." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "The bill, please. Can I pay by card?",
          reference: "الْحِسَاب مِنْ فَضْلَك. مُمْكِن أَدْفَع بِالْبِطَاقَة؟",
          hint: "'al-ḥisāb min faḍlak' then 'mumkin adfaʿ bi-l-biṭāqa?'",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'khidma' on the bill is the…",
              options: ["tax", "service charge", "tip", "table number"],
              correct: 1,
            },
            {
              q: "A customary tip in Egypt is about…",
              options: ["nothing", "10%", "25%", "50%"],
              correct: 1,
            },
            {
              q: "'naqdan' means…",
              options: ["by card", "in cash", "free", "later"],
              correct: 1,
            },
            {
              q: "'al-akl kān lazīz' means…",
              options: ["the food was cold", "the food was delicious", "the bill is wrong", "no spice"],
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
        q: "'restaurant' in Arabic is…",
        options: ["maqhā", "maṭʿam", "sūq", "maktab"],
        correct: 1,
      },
      {
        q: "'a table for two' is…",
        options: ["ṭāwila li-shakhṣayn", "qāʾimat aṭ-ṭaʿām", "ṭabaq raʾīsī", "ḥajz"],
        correct: 0,
      },
      {
        q: "'qāʾimat aṭ-ṭaʿām' is…",
        options: ["the bill", "the menu", "the kitchen", "the tip"],
        correct: 1,
      },
      {
        q: "A man says 'I want' colloquially as…",
        options: ["anā ʿāyza", "anā ʿāyiz", "urīdī", "ʿindkum"],
        correct: 1,
      },
      {
        q: "'without onion' is…",
        options: ["min ghayr baṣal", "bi-l-baṣal", "ḥārr baṣal", "ʿindkum baṣal"],
        correct: 0,
      },
      {
        q: "'do you have…?' (to staff) is…",
        options: ["urīd", "ʿindkum…?", "al-ḥisāb", "itfaḍḍal"],
        correct: 1,
      },
      {
        q: "The service charge on a bill is…",
        options: ["ḍarība", "khidma", "baʾshīsh", "fakka"],
        correct: 1,
      },
      {
        q: "A customary tip in Egypt is roughly…",
        options: ["0%", "10%", "20%", "30%"],
        correct: 1,
      },
      {
        q: "'al-akl kān lazīz' tells the waiter…",
        options: ["the bill is too high", "the food was delicious", "you want more", "you're allergic"],
        correct: 1,
      },
      {
        q: "Translate: 'I'd like grilled chicken, without onion.'",
        options: [
          "أَنَا عَايِز فِرَاخ مَشْوِيَّة، مِنْ غَيْر بَصَل.",
          "الْحِسَاب مِنْ فَضْلَك.",
          "عِنْدُكُم مُلُوخِيَّة؟",
          "طَاوِلَة لِشَخْصَيْن.",
        ],
        correct: 0,
      },
    ],
  },
};
