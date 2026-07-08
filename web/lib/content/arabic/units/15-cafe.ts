import type { Unit } from "../../types";

export const UNIT_CAFE: Unit = {
  slug: "cafe",
  stage: 4,
  order: 15,
  icon: "☕",
  title: "At the ahwa (café)",
  tagline: "Shāy, ʿahwa, min faḍlak — the traditional coffeehouse.",
  badge: "tourist",
  lessons: [
    {
      slug: "cafe-tea-coffee",
      title: "Ordering shāy and ʿahwa",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Tea and coffee run on sugar levels",
          body: [
            "The two pillars of the Egyptian <strong>ahwa</strong> (coffeehouse) are <strong>shāy</strong> (tea) and <strong>qahwa</strong> — pronounced <em>ʿahwa</em> in Cairo, where it means both the drink and the place itself.",
            "You almost never order coffee by 'size' here. You order it by <strong>sugar level</strong>: <em>ziyāda</em> (extra sweet), <em>maẓbūṭ</em> (just right, medium), <em>ʿar-rīḥa</em> (a whisper of sugar), or <em>sāda</em> (no sugar at all).",
            "In Modern Standard Arabic the polite 'please' is <strong>min faḍlik</strong> to a woman and <strong>min faḍlak</strong> to a man. 'I want' is <strong>urīd</strong>; the everyday Cairo word you'll hear is <em>ʿāyiz</em> (m) / <em>ʿāyza</em> (f).",
          ],
          keyPoint:
            "Order coffee by sweetness: ziyāda (extra), maẓbūṭ (medium), ʿar-rīḥa (barely), sāda (none).",
        },
        {
          type: "vocab",
          heading: "Café drinks",
          items: [
            { l1: "شَاي", en: "tea", note: "shāy — m." },
            { l1: "قَهْوَة", en: "coffee", note: "qahwa (Cairo: ʿahwa) — f.; also means 'café'." },
            { l1: "قَهْوَة تُرْكِيّة", en: "Turkish coffee", note: "qahwa turkiyya — the default ground coffee." },
            { l1: "سُكَّر", en: "sugar", note: "sukkar — m." },
            { l1: "مَضْبُوط", en: "medium-sweet", note: "maẓbūṭ — 'just right'." },
            { l1: "زِيَادَة", en: "extra sweet", note: "ziyāda — 'extra/more'." },
            { l1: "سَادَة", en: "no sugar", note: "sāda — 'plain'." },
            { l1: "حَلِيب", en: "milk", note: "ḥalīb — m." },
            { l1: "نَعْنَاع", en: "mint", note: "naʿnāʿ — m.; shāy bi-n-naʿnāʿ = mint tea." },
            { l1: "كُوب", en: "cup / glass", note: "kūb — m.; pl. akwāb." },
          ],
        },
        {
          type: "dialogue",
          heading: "First order at the ahwa",
          setup: "You sit down at a sidewalk coffeehouse in Downtown Cairo.",
          lines: [
            { speaker: "Waiter", l1: "أَهْلًا وَسَهْلًا، تَحِبّ تَشْرَب إِيه؟", en: "Welcome, what would you like to drink?" },
            { speaker: "You", l1: "أُرِيد شَاي بِالنَّعْنَاع، مِنْ فَضْلَك.", en: "I'd like mint tea, please." },
            { speaker: "Waiter", l1: "سُكَّر؟", en: "Sugar?" },
            { speaker: "You", l1: "مَضْبُوط، مِنْ فَضْلَك.", en: "Medium, please." },
            { speaker: "Waiter", l1: "وَحَاجَة تَانْيَة؟", en: "Anything else?" },
            { speaker: "You", l1: "لَا، شُكْرًا.", en: "No, thank you." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Sugar, please",
          questions: [
            {
              q: "You want your coffee with no sugar at all. You say…",
              options: ["ziyāda", "maẓbūṭ", "sāda", "ʿar-rīḥa"],
              correct: 2,
            },
            {
              q: "'maẓbūṭ' describes coffee that is…",
              options: ["extra sweet", "medium-sweet", "unsweetened", "very strong"],
              correct: 1,
            },
            {
              q: "How do you say 'please' to a man?",
              options: ["min faḍlik", "min faḍlak", "shukran", "ʿafwan"],
              correct: 1,
            },
            {
              q: "Mint tea is…",
              options: ["shāy bi-l-ḥalīb", "qahwa sāda", "shāy bi-n-naʿnāʿ", "ʿaṣīr"],
              correct: 2,
            },
          ],
        },
      ],
    },
    {
      slug: "cafe-traditional-ahwa",
      title: "The traditional ahwa & shisha",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "More than a coffee shop",
          body: [
            "The traditional <strong>ahwa baladi</strong> is a Cairo institution: plastic chairs on the pavement, backgammon and dominoes, a TV showing football, and men nursing a single tea for hours. Increasingly women sit there too, especially in mixed neighborhoods.",
            "The other reason people come is the <strong>shīsha</strong> (water pipe), also called <em>arجīla</em> elsewhere. You order it by flavor — <em>tuffāḥ</em> (apple) is the classic, especially <em>tuffāḥtēn</em> (double apple).",
            "You don't tip the waiter much, but a small coin when he brings the shisha coals (<em>jamr</em>) keeps them fresh. The whole vibe is <em>ʿala mahlak</em> — take your time, nobody is rushing you out.",
          ],
          tip: {
            label: "Café etiquette",
            body: "Call the waiter with <em>law samaḥt</em> ('if you please') rather than waving. When he refreshes your shisha coals, a quiet <em>shukran</em> and a small tip is the norm.",
          },
        },
        {
          type: "vocab",
          heading: "At the ahwa",
          items: [
            { l1: "مَقْهَى", en: "café / coffeehouse", note: "maqhā — m. (MSA); colloquial: ahwa." },
            { l1: "شِيشَة", en: "shisha / water pipe", note: "shīsha — f." },
            { l1: "تُفَّاح", en: "apple (shisha flavor)", note: "tuffāḥ — m.; tuffāḥtēn = double apple." },
            { l1: "نَرْد", en: "backgammon", note: "nard — m.; colloq. ṭāwla." },
            { l1: "طَاوِلَة", en: "table", note: "ṭāwila — f.; pl. ṭāwilāt." },
            { l1: "كُرْسِيّ", en: "chair", note: "kursī — m.; pl. karāsī." },
            { l1: "جَمْر", en: "coals (for shisha)", note: "jamr — m." },
            { l1: "لَوْ سَمَحْت", en: "excuse me / if you please", note: "law samaḥt — to get attention." },
            { l1: "عَلَى مَهْلَك", en: "take your time / slow down", note: "ʿala mahlak — relax." },
          ],
        },
        {
          type: "dialogue",
          heading: "Ordering a shisha",
          setup: "You're settling in for the evening at an ahwa baladi.",
          lines: [
            { speaker: "You", l1: "لَوْ سَمَحْت، عَايِز شِيشَة تُفَّاح.", en: "Excuse me, I'd like an apple shisha." },
            { speaker: "Waiter", l1: "تُفَّاحْتَين وَلَّا وَاحْدَة؟", en: "Double apple or single?" },
            { speaker: "You", l1: "تُفَّاحْتَين، مِنْ فَضْلَك. وَشَاي كَمَان.", en: "Double apple, please. And a tea too." },
            { speaker: "Waiter", l1: "حَاضِر. الشَّاي مَضْبُوط؟", en: "Right away. Tea medium-sweet?" },
            { speaker: "You", l1: "أَيْوَة، مَضْبُوط.", en: "Yes, medium." },
            { speaker: "Waiter", l1: "تَمَام، عَلَى طُول.", en: "Great, right away." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the order",
          intro: "Pick the word that fits.",
          items: [
            {
              template: "لَوْ ___ ، عَايِز شِيشَة.",
              answer: "سَمَحْت",
              en: "Excuse me, I'd like a shisha.",
              options: ["سَمَحْت", "شُكْرًا", "أَهْلًا", "سَادَة"],
            },
            {
              template: "شِيشَة ___ ، مِنْ فَضْلَك.",
              answer: "تُفَّاح",
              en: "An apple shisha, please.",
              options: ["تُفَّاح", "حَلِيب", "نَرْد", "كُرْسِيّ"],
            },
            {
              template: "الشَّاي ___ ، مِنْ غَيْر زِيَادَة.",
              answer: "مَضْبُوط",
              en: "The tea medium, not too sweet.",
              options: ["مَضْبُوط", "سَادَة", "تُفَّاح", "جَمْر"],
            },
            {
              template: "عَلَى ___ ، مَفِيش اِسْتِعْجَال.",
              answer: "مَهْلَك",
              en: "Take your time, no rush.",
              options: ["مَهْلَك", "طَاوِلَة", "كُوب", "سُكَّر"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me, I'd like a mint tea and a double-apple shisha.",
          reference: "لَوْ سَمَحْت، أُرِيد شَاي بِالنَّعْنَاع وَشِيشَة تُفَّاحْتَين.",
          hint: "Use 'law samaḥt' to open, and 'tuffāḥtēn' for double apple.",
        },
      ],
    },
    {
      slug: "cafe-paying",
      title: "Paying the bill",
      estMinutes: 7,
      pages: [
        {
          type: "intro",
          heading: "Asking for the bill",
          body: [
            "When you're done, catch the waiter's eye and say <strong>al-ḥisāb min faḍlak</strong> — 'the bill, please.' <em>al-ḥisāb</em> is literally 'the account/reckoning.'",
            "Prices at a traditional ahwa are tiny — a tea might be 10–20 Egyptian pounds (<em>junayh</em>). You'll often hear the total rounded. A small tip (<em>baʾshīsh</em>) is appreciated but not a strict percentage.",
            "Useful: <strong>bi-kam?</strong> = 'how much?', <strong>kullu kam?</strong> = 'how much all together?', and <strong>khud al-bāʾī</strong> = 'keep the change.'",
          ],
          keyPoint:
            "al-ḥisāb min faḍlak = the bill, please. bi-kam? = how much? junayh = Egyptian pound.",
        },
        {
          type: "vocab",
          heading: "Money & paying",
          items: [
            { l1: "الْحِسَاب", en: "the bill / check", note: "al-ḥisāb — m." },
            { l1: "بِكَم؟", en: "how much?", note: "bi-kam? — for one item." },
            { l1: "كُلُّه كَم؟", en: "how much all together?", note: "kullu kam? — for the total." },
            { l1: "جُنَيْه", en: "Egyptian pound", note: "junayh — m.; pl. junayhāt." },
            { l1: "فَكَّة", en: "change / small coins", note: "fakka — f." },
            { l1: "بَقْشِيش", en: "tip", note: "baʾshīsh — m.; small gratuity." },
            { l1: "خُد الْبَاقِي", en: "keep the change", note: "khud al-bāʾī — lit. 'take the rest'." },
            { l1: "فَاتُورَة", en: "receipt / invoice", note: "fātūra — f." },
          ],
        },
        {
          type: "dialogue",
          heading: "Settling up",
          setup: "You finish your tea and wave the waiter over.",
          lines: [
            { speaker: "You", l1: "لَوْ سَمَحْت، الْحِسَاب مِنْ فَضْلَك.", en: "Excuse me, the bill please." },
            { speaker: "Waiter", l1: "شَاي وَشِيشَة، كُلُّه خَمْسِين جُنَيْه.", en: "A tea and a shisha, fifty pounds all together." },
            { speaker: "You", l1: "اِتْفَضَّل، خُد سِتِّين. خُد الْبَاقِي.", en: "Here you go, take sixty. Keep the change." },
            { speaker: "Waiter", l1: "شُكْرًا جَزِيلًا! مَعَ السَّلَامَة.", en: "Thank you very much! Goodbye." },
            { speaker: "You", l1: "الله يِسَلِّمَك.", en: "God keep you safe. (a standard reply)" },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Tap the words into the right order.",
          items: [
            { tokens: ["الْحِسَاب", "مِنْ", "فَضْلَك"], en: "The bill, please." },
            { tokens: ["كُلُّه", "كَم", "؟"], en: "How much all together?" },
            { tokens: ["خُد", "الْبَاقِي", "،", "شُكْرًا"], en: "Keep the change, thank you." },
            { tokens: ["الشَّاي", "بِكَم", "؟"], alts: [["بِكَم", "الشَّاي", "؟"]], en: "How much is the tea?" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "The bill, please. How much all together?",
          reference: "الْحِسَاب مِنْ فَضْلَك. كُلُّه كَم؟",
          hint: "'al-ḥisāb min faḍlak' then 'kullu kam?'",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "How do you ask for the bill?",
              options: ["al-ḥisāb min faḍlak", "law samaḥt", "kullu kam", "min faḍlik"],
              correct: 0,
            },
            {
              q: "'khud al-bāʾī' means…",
              options: ["how much?", "keep the change", "the receipt", "no sugar"],
              correct: 1,
            },
            {
              q: "The Egyptian pound is called…",
              options: ["dirham", "junayh", "riyāl", "dīnār"],
              correct: 1,
            },
            {
              q: "'bi-kam?' is used to ask…",
              options: ["where is it?", "how much?", "what is it?", "for whom?"],
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
        q: "You want coffee with no sugar. You order it…",
        options: ["ziyāda", "maẓbūṭ", "sāda", "ʿar-rīḥa"],
        correct: 2,
      },
      {
        q: "'maẓbūṭ' coffee is…",
        options: ["extra sweet", "medium-sweet", "no sugar", "very bitter"],
        correct: 1,
      },
      {
        q: "How do you say 'please' to a woman?",
        options: ["min faḍlak", "min faḍlik", "law samaḥt", "shukran"],
        correct: 1,
      },
      {
        q: "Mint tea is…",
        options: ["shāy bi-l-ḥalīb", "shāy bi-n-naʿnāʿ", "qahwa sāda", "ʿaṣīr"],
        correct: 1,
      },
      {
        q: "The classic shisha flavor in Cairo is…",
        options: ["mint", "lemon", "double apple (tuffāḥtēn)", "grape"],
        correct: 2,
      },
      {
        q: "To get the waiter's attention you say…",
        options: ["law samaḥt", "ʿala mahlak", "sāda", "fakka"],
        correct: 0,
      },
      {
        q: "How do you ask for the bill?",
        options: ["bi-kam?", "al-ḥisāb min faḍlak", "kullu kam?", "khud al-bāʾī"],
        correct: 1,
      },
      {
        q: "'junayh' is…",
        options: ["the tip", "the Egyptian pound", "the change", "the cup"],
        correct: 1,
      },
      {
        q: "'khud al-bāʾī' tells the waiter to…",
        options: ["bring more tea", "keep the change", "give a receipt", "wait a moment"],
        correct: 1,
      },
      {
        q: "Translate: 'I'd like a tea, medium-sweet, please.'",
        options: [
          "أُرِيد شَاي مَضْبُوط، مِنْ فَضْلَك.",
          "أُرِيد قَهْوَة سَادَة، شُكْرًا.",
          "الْحِسَاب مِنْ فَضْلَك.",
          "عَايِز شِيشَة تُفَّاح.",
        ],
        correct: 0,
      },
    ],
  },
};
