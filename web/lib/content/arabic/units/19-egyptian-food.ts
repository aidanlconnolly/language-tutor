import type { Unit } from "../../types";

export const UNIT_EGYPTIAN_FOOD: Unit = {
  slug: "egyptian-food",
  stage: 4,
  order: 19,
  icon: "🍛",
  title: "Egyptian classics",
  tagline: "Koshari, fūl, taʿmiya, maḥshī, and baksheesh.",
  badge: "culture",
  lessons: [
    {
      slug: "egyptian-food-icons",
      title: "The icons: koshari, fūl, taʿmiya, maḥshī",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Egypt's national plates",
          body: [
            "If Egypt had a national dish, it would be <strong>kushari</strong>: a carb-on-carb wonder of rice, lentils, macaroni, and chickpeas, topped with spicy tomato sauce and crispy fried onions. It's vegetarian, cheap, and beloved.",
            "Breakfast is <strong>fūl</strong> (stewed fava beans, drizzled with oil and cumin) and <strong>taʿmiya</strong> — the Egyptian falafel, made from fava beans (not chickpeas) and a brilliant green inside.",
            "<strong>Maḥshī</strong> ('stuffed') means vegetables — vine leaves, zucchini, peppers, cabbage — packed with seasoned rice. A staple of family lunches and celebrations.",
          ],
          keyPoint:
            "kushari = rice/lentils/pasta classic. fūl = fava bean stew. taʿmiya = Egyptian falafel. maḥshī = stuffed veg.",
        },
        {
          type: "vocab",
          heading: "The classics",
          items: [
            { l1: "كُشَرِي", en: "koshari", note: "kushari — m.; rice, lentils, pasta, chickpeas." },
            { l1: "فُول", en: "fava bean stew", note: "fūl — m.; breakfast staple." },
            { l1: "طَعْمِيّة", en: "taʿmiya (Egyptian falafel)", note: "taʿmiya — f.; from fava beans." },
            { l1: "مَحْشِي", en: "stuffed vegetables", note: "maḥshī — m." },
            { l1: "مُلُوخِيَّة", en: "molokheya (jute-leaf stew)", note: "mulūkhiyya — f." },
            { l1: "كَبَاب وَكُفْتَة", en: "kebab and kofta", note: "kabāb wa kufta — grill platter." },
            { l1: "بَاذِنْجَان", en: "eggplant", note: "bādhinjān — m." },
            { l1: "صَلْصَة", en: "sauce", note: "ṣalṣa — f.; tomato sauce." },
            { l1: "شَطَّة", en: "chili sauce", note: "shaṭṭa — f.; the spicy topping." },
          ],
        },
        {
          type: "dialogue",
          heading: "At a koshari shop",
          setup: "You step into a famous Cairo kushari joint.",
          lines: [
            { speaker: "Server", l1: "أَهْلًا، حَجْم كَبِير وَلَّا صُغَيَّر؟", en: "Welcome, large size or small?" },
            { speaker: "You", l1: "كَبِير، مِنْ فَضْلَك. بِشَطَّة.", en: "Large, please. With chili sauce." },
            { speaker: "Server", l1: "صَلْصَة كِتِير؟", en: "Lots of sauce?" },
            { speaker: "You", l1: "أَيْوَة، وَزِيَادَة بَصَل مُحَمَّر.", en: "Yes, and extra fried onions." },
            { speaker: "Server", l1: "حَاضِر. حَاجَة تِتْشِرِب؟", en: "Right away. Anything to drink?" },
            { speaker: "You", l1: "مَيَّة بَس، شُكْرًا.", en: "Just water, thanks." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Know your classics",
          questions: [
            {
              q: "'kushari' is made of…",
              options: ["fish and rice", "rice, lentils, pasta & chickpeas", "stuffed vine leaves", "fava beans only"],
              correct: 1,
            },
            {
              q: "Egyptian falafel is called…",
              options: ["fūl", "taʿmiya", "maḥshī", "kufta"],
              correct: 1,
            },
            {
              q: "'maḥshī' means…",
              options: ["grilled", "fried", "stuffed", "boiled"],
              correct: 2,
            },
            {
              q: "'shaṭṭa' is…",
              options: ["fried onions", "chili sauce", "tomato sauce", "cheese"],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "A large koshari with chili sauce, please.",
          reference: "كُشَرِي كَبِير بِشَطَّة، مِنْ فَضْلَك.",
          hint: "kushari kabīr + bi-shaṭṭa.",
        },
      ],
    },
    {
      slug: "egyptian-food-street",
      title: "Street food & where to eat",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The food of the street",
          body: [
            "Egypt's best food is often the cheapest. A <strong>ʿarabiyyit fūl</strong> (fūl cart) parks on a corner at dawn; a <strong>maṭʿam kushari</strong> serves bowls all day. Sandwiches come on <em>ʿaysh</em>, scooped and stuffed to order.",
            "Classic street sandwiches: <strong>sandwich taʿmiya</strong>, <strong>sandwich fūl</strong>, and <strong>baṭāṭis</strong> (a fries sandwich — yes, fries in bread). Add <em>ṭaḥīna</em> (sesame paste) and <em>salaṭa</em> (salad) inside.",
            "To order to-go: <strong>safarī</strong> ('takeaway') or <strong>taʾkhud maʿāya</strong> ('I'll take it with me'). To eat in: <strong>hāna</strong> ('here').",
          ],
          tip: {
            label: "Point and trust",
            body: "At a busy cart you don't need many words. <em>wāḥid taʿmiya, min faḍlak</em> ('one taʿmiya, please') and a point will feed you well for a few pounds.",
          },
        },
        {
          type: "vocab",
          heading: "Street food",
          items: [
            { l1: "سَانْدِوِتش", en: "sandwich", note: "sandwich — m." },
            { l1: "عَرَبِيّة فُول", en: "fūl cart", note: "ʿarabiyyit fūl — street cart." },
            { l1: "طَحِينَة", en: "tahini (sesame paste)", note: "ṭaḥīna — f." },
            { l1: "سَلَطَة", en: "salad", note: "salaṭa — f." },
            { l1: "بَطَاطِس مُحَمَّرَة", en: "fries", note: "baṭāṭis muḥammara — also a sandwich!" },
            { l1: "سَفَرِي", en: "takeaway", note: "safarī — to go." },
            { l1: "هِنَا", en: "here", note: "hina — eat in." },
            { l1: "رَخِيص", en: "cheap", note: "rakhīṣ — adj." },
            { l1: "زِيَادَة", en: "extra / more", note: "ziyāda — e.g. ṭaḥīna ziyāda." },
          ],
        },
        {
          type: "dialogue",
          heading: "At the taʿmiya cart",
          setup: "You're grabbing a quick breakfast on the street.",
          lines: [
            { speaker: "You", l1: "صَبَاح الْخَيْر، اِتْنَيْن سَانْدِوِتش طَعْمِيّة.", en: "Good morning, two taʿmiya sandwiches." },
            { speaker: "Vendor", l1: "بِطَحِينَة وَسَلَطَة؟", en: "With tahini and salad?" },
            { speaker: "You", l1: "أَيْوَة، وَطَحِينَة زِيَادَة.", en: "Yes, and extra tahini." },
            { speaker: "Vendor", l1: "تَاكُل هِنَا وَلَّا سَفَرِي؟", en: "Eating here or takeaway?" },
            { speaker: "You", l1: "سَفَرِي، مِنْ فَضْلَك. بِكَم؟", en: "Takeaway, please. How much?" },
            { speaker: "Vendor", l1: "عَشَرَة جُنَيْه بَس، رَخِيص!", en: "Just ten pounds, cheap!" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Order on the street",
          intro: "Choose the right word.",
          items: [
            {
              template: "اِتْنَيْن ___ طَعْمِيّة، مِنْ فَضْلَك.",
              answer: "سَانْدِوِتش",
              en: "Two taʿmiya sandwiches, please.",
              options: ["سَانْدِوِتش", "عَصِير", "شَطَّة", "هِنَا"],
            },
            {
              template: "بِطَحِينَة ___ ، لَوْ سَمَحْت.",
              answer: "زِيَادَة",
              en: "With extra tahini, please.",
              options: ["زِيَادَة", "سَفَرِي", "رَخِيص", "سَلَطَة"],
            },
            {
              template: "تَاكُل هِنَا وَلَّا ___ ؟",
              answer: "سَفَرِي",
              en: "Eating here or takeaway?",
              options: ["سَفَرِي", "زِيَادَة", "صَلْصَة", "كَبِير"],
            },
            {
              template: "الْأَكْل دَه ___ جِدًّا.",
              answer: "رَخِيص",
              en: "This food is very cheap.",
              options: ["رَخِيص", "سَفَرِي", "هِنَا", "بَصَل"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Two taʿmiya sandwiches, takeaway, with extra tahini.",
          reference: "اِتْنَيْن سَانْدِوِتش طَعْمِيّة، سَفَرِي، بِطَحِينَة زِيَادَة.",
          hint: "itnēn sandwich taʿmiya + safarī + bi-ṭaḥīna ziyāda.",
        },
      ],
    },
    {
      slug: "egyptian-food-hospitality",
      title: "Hospitality, tipping & bil-hanā",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The culture of generosity",
          body: [
            "Egyptian hospitality (<strong>karam</strong>) is legendary. A host will press more food on you long after you're full — refusing politely is an art. The phrase to bless a meal is <strong>bil-hanā wa sh-shifāʾ</strong> ('to your enjoyment and health') — the Egyptian 'bon appétit.'",
            "When someone cooks for you, thank them with <strong>tislam īdēk</strong> ('bless your hands') — the standard compliment to a cook. The reply is often <em>bil-hanā</em>.",
            "<strong>Baʾshīsh</strong> (baksheesh) oils almost every service: the waiter, the man who parks your car, the bathroom attendant. Small amounts, freely given, smooth your way and are part of the social fabric.",
          ],
          keyPoint:
            "karam = hospitality. bil-hanā wa sh-shifāʾ = bon appétit. tislam īdēk = bless your hands (to a cook). baʾshīsh = tip.",
        },
        {
          type: "vocab",
          heading: "Hospitality phrases",
          items: [
            { l1: "كَرَم", en: "hospitality / generosity", note: "karam — m." },
            { l1: "بِالْهَنَا وَالشِّفَا", en: "bon appétit", note: "bil-hanā wa sh-shifāʾ." },
            { l1: "تِسْلَم إِيدَيْك", en: "bless your hands (to a cook)", note: "tislam īdēk." },
            { l1: "اِتْفَضَّل", en: "please, help yourself", note: "itfaḍḍal (m) / itfaḍḍalī (f)." },
            { l1: "أَنَا شَبْعَان", en: "I'm full (m)", note: "anā shabʿān; f. shabʿāna." },
            { l1: "بَقْشِيش", en: "tip", note: "baʾshīsh — m." },
            { l1: "ضَيْف", en: "guest", note: "ḍayf — m.; pl. ḍuyūf." },
            { l1: "وَلَا يِهِمَّك", en: "don't mention it", note: "wala yihimmak — you're welcome." },
          ],
        },
        {
          type: "dialogue",
          heading: "Dinner at an Egyptian home",
          setup: "You're a guest; the host keeps serving.",
          lines: [
            { speaker: "Host", l1: "اِتْفَضَّل، كُل كَمَان! بِالْهَنَا وَالشِّفَا.", en: "Please, eat more! Bon appétit." },
            { speaker: "You", l1: "وَالله الْأَكْل لَذِيذ، تِسْلَم إِيدِك.", en: "Honestly the food is delicious, bless your hands." },
            { speaker: "Host", l1: "خُد كَمَان شِوَيَّة مَحْشِي.", en: "Have a bit more stuffed vegetables." },
            { speaker: "You", l1: "شُكْرًا، بَس أَنَا شَبْعَان خَلَاص.", en: "Thanks, but I'm completely full now." },
            { speaker: "Host", l1: "مَفِيش حَاجَة، بَيْتَك.", en: "It's nothing, you're at home." },
            { speaker: "You", l1: "كَرَمَك كِبِير، شُكْرًا جَزِيلًا.", en: "Your generosity is great, thank you so much." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the phrase",
          intro: "Tap the words into order.",
          items: [
            { tokens: ["بِالْهَنَا", "وَالشِّفَا"], en: "Bon appétit." },
            { tokens: ["تِسْلَم", "إِيدِك", "،", "الْأَكْل", "لَذِيذ"], en: "Bless your hands, the food is delicious." },
            { tokens: ["شُكْرًا", "،", "أَنَا", "شَبْعَان"], en: "Thanks, I'm full." },
            { tokens: ["دَه", "بَقْشِيش", "لِيك"], en: "This is a tip for you." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Bless your hands, the food is delicious. Thanks, I'm full.",
          reference: "تِسْلَم إِيدِك، الْأَكْل لَذِيذ. شُكْرًا، أَنَا شَبْعَان.",
          hint: "tislam īdēk + al-akl lazīz, then shukran + anā shabʿān.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'bil-hanā wa sh-shifāʾ' means…",
              options: ["the bill please", "bon appétit", "I'm full", "bless your hands"],
              correct: 1,
            },
            {
              q: "You compliment a cook with…",
              options: ["tislam īdēk", "wala yihimmak", "shabʿān", "safarī"],
              correct: 0,
            },
            {
              q: "'baʾshīsh' is…",
              options: ["the bill", "a tip", "a guest", "the menu"],
              correct: 1,
            },
            {
              q: "A man politely declining more food says…",
              options: ["anā jawʿān", "anā shabʿān", "itfaḍḍal", "tislam īdēk"],
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
        q: "Egypt's iconic carb-on-carb dish is…",
        options: ["fūl", "kushari", "maḥshī", "mulūkhiyya"],
        correct: 1,
      },
      {
        q: "Egyptian falafel (from fava beans) is called…",
        options: ["taʿmiya", "kufta", "kabāb", "ṣalṣa"],
        correct: 0,
      },
      {
        q: "'fūl' is…",
        options: ["stuffed vegetables", "stewed fava beans", "chili sauce", "tahini"],
        correct: 1,
      },
      {
        q: "'maḥshī' means…",
        options: ["grilled", "stuffed", "fried", "cheap"],
        correct: 1,
      },
      {
        q: "'shaṭṭa' is the…",
        options: ["chili sauce", "fried onions", "salad", "tahini"],
        correct: 0,
      },
      {
        q: "To order takeaway you say…",
        options: ["hina", "safarī", "ziyāda", "rakhīṣ"],
        correct: 1,
      },
      {
        q: "'bil-hanā wa sh-shifāʾ' is said…",
        options: ["when paying", "as bon appétit", "to ask the price", "to refuse food"],
        correct: 1,
      },
      {
        q: "You thank a cook for the meal with…",
        options: ["tislam īdēk", "al-ḥisāb min faḍlak", "wala yihimmak", "anā nabātī"],
        correct: 0,
      },
      {
        q: "'baʾshīsh' refers to…",
        options: ["the menu", "a tip / gratuity", "the service charge", "the change"],
        correct: 1,
      },
      {
        q: "Translate: 'A large koshari with chili sauce, please.'",
        options: [
          "كُشَرِي كَبِير بِشَطَّة، مِنْ فَضْلَك.",
          "اِتْنَيْن سَانْدِوِتش طَعْمِيّة.",
          "بِالْهَنَا وَالشِّفَا.",
          "تِسْلَم إِيدِك.",
        ],
        correct: 0,
      },
    ],
  },
};
