import type { Unit } from "../../types";

export const UNIT_TRANSIT: Unit = {
  slug: "transit",
  stage: 3,
  order: 10,
  icon: "🚕",
  title: "Getting around Cairo",
  tagline: "Taxis, the metro, the microbus — bikam?",
  badge: "tourist",
  lessons: [
    {
      slug: "transit-taxi",
      title: "Taxis & the white-cab haggle",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Two kinds of Cairo taxi",
          body: [
            "Cairo's white taxis (التاكسي الأبيض) legally have a meter — <strong>al-ʿaddād</strong> (العَدّاد). Modern white cabs should run it; older black-and-white cabs almost never do, so you agree a price first.",
            "The key opening move is the price question: <strong>bikam ilā…?</strong> (بِكَم إلى…؟) — \"how much to…?\" If the cab has a meter, you ask the driver to run it: <strong>ʿalā l-ʿaddād, min faḍlak</strong> (عَلى العَدّاد، مِن فَضلَك) — \"on the meter, please.\"",
            "Apps (Uber, Careem) sidestep haggling entirely and are widely used in Cairo. But knowing the street phrases still saves you on short hops and from the airport curb.",
          ],
          tip: {
            label: "Round up, don't haggle to zero",
            body: "Egyptians round taxi fares <em>up</em> to a friendly number. Insisting on exact change reads as stingy. Decide your fair price before you open the door, then state it calmly.",
          },
        },
        {
          type: "vocab",
          heading: "Taxi essentials",
          items: [
            { l1: "تاكسي", en: "taxi", note: "tāksī (m.) — also سيارة أجرة sayyāra ujra" },
            { l1: "العَدّاد", en: "the meter", note: "al-ʿaddād (m.), pl. al-ʿaddādāt" },
            { l1: "بِكَم إلى…؟", en: "how much to…?", note: "bikam ilā…? — your opening line" },
            { l1: "عَلى العَدّاد", en: "on the meter", note: "ʿalā l-ʿaddād" },
            { l1: "السائِق", en: "the driver", note: "as-sāʾiq (m.); Egyptian colloquial: as-sawwāʾ السوّاق" },
            { l1: "إلى المَطار", en: "to the airport", note: "ilā l-maṭār" },
            { l1: "وَسَط البَلَد", en: "downtown Cairo", note: "wasaṭ al-balad — lit. 'middle of town'" },
            { l1: "قِف هُنا", en: "stop here", note: "qif hunā; Egyptian: ʿand kida عند كده" },
            { l1: "عَلى طول", en: "straight ahead / keep going", note: "ʿalā ṭūl" },
            { l1: "اِنتَظِر، مِن فَضلَك", en: "wait, please", note: "intaẓir, min faḍlak" },
          ],
        },
        {
          type: "dialogue",
          heading: "Flagging a white cab to downtown",
          setup: "You raise your hand at the curb in Zamalek; a white taxi pulls over.",
          lines: [
            { speaker: "You", l1: "السَّلامُ عَلَيكُم. بِكَم إلى وَسَط البَلَد؟", en: "Peace be upon you. How much to downtown?" },
            { speaker: "Driver", l1: "وَعَلَيكُمُ السَّلام. خَمسين جُنَيه.", en: "And upon you peace. Fifty pounds." },
            { speaker: "You", l1: "عَلى العَدّاد، مِن فَضلَك.", en: "On the meter, please." },
            { speaker: "Driver", l1: "حاضِر، يا فَنْدِم.", en: "Right away, sir." },
            { speaker: "You", l1: "شُكراً. قِف هُنا، عِندَ الإشارة.", en: "Thanks. Stop here, at the light." },
            { speaker: "Driver", l1: "تَفَضَّل. مَع السَّلامة.", en: "Here you go. Goodbye." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Fill the taxi phrase",
          items: [
            {
              template: "___ إلى المَطار؟",
              answer: "بِكَم",
              en: "How much to the airport?",
              options: ["بِكَم", "كَيف", "أَين", "مَتى"],
            },
            {
              template: "عَلى ___، مِن فَضلَك.",
              answer: "العَدّاد",
              en: "On the meter, please.",
              options: ["العَدّاد", "المَطار", "البَلَد", "السائِق"],
            },
            {
              template: "قِف ___ ، عِندَ الإشارة.",
              answer: "هُنا",
              en: "Stop here, at the light.",
              options: ["هُنا", "هُناك", "غَداً", "كَثير"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "How much to downtown? On the meter, please.",
          reference: "بِكَم إلى وَسَط البَلَد؟ عَلى العَدّاد، مِن فَضلَك.",
          hint: "Open with bikam ilā…? then ask for ʿalā l-ʿaddād.",
        },
      ],
    },
    {
      slug: "transit-metro",
      title: "The Cairo metro & tickets",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The fastest way across Cairo",
          body: [
            "Cairo's metro (المترو, <strong>al-mitrū</strong>) is cheap, fast, and beats traffic. You buy a paper or smart ticket (تَذكَرة, <strong>tadhkara</strong>) at the window or a machine, priced by how many stations you cross.",
            "Each train has a <strong>women's carriage</strong> (عَرَبة السَّيِّدات, <strong>ʿarabat as-sayyidāt</strong>) — usually the 4th and 5th cars. Women may ride anywhere, but men may not enter the women's carriage. Look for the pink signs on the platform.",
            "Useful at the gate: <strong>ayna l-maḥaṭṭa?</strong> (أَينَ المَحَطّة؟) — \"where's the station?\" — and the line names: <strong>al-khaṭ</strong> (الخَط) one, two, three.",
          ],
          keyPoint:
            "Metro = al-mitrū. Ticket = tadhkara. Women's carriage = ʿarabat as-sayyidāt (cars 4–5).",
        },
        {
          type: "vocab",
          heading: "Metro vocab",
          items: [
            { l1: "المترو", en: "the metro", note: "al-mitrū (m.)" },
            { l1: "المَحَطّة", en: "the station", note: "al-maḥaṭṭa (f.), pl. al-maḥaṭṭāt" },
            { l1: "تَذكَرة", en: "ticket", note: "tadhkara (f.), pl. tadhākir" },
            { l1: "الخَط", en: "the line", note: "al-khaṭ (m.) — al-khaṭ at-thānī = line 2" },
            { l1: "عَرَبة السَّيِّدات", en: "the women's carriage", note: "ʿarabat as-sayyidāt" },
            { l1: "المَخرَج", en: "the exit", note: "al-makhraj (m.)" },
            { l1: "المَدخَل", en: "the entrance", note: "al-madkhal (m.)" },
            { l1: "أَتَغَيَّر هُنا؟", en: "do I change (lines) here?", note: "atughayyir hunā?" },
            { l1: "المَحَطّة القادِمة", en: "the next station", note: "al-maḥaṭṭa l-qādima — heard in announcements" },
          ],
        },
        {
          type: "dialogue",
          heading: "At the ticket window",
          setup: "You step up to the booth at Sadat station.",
          lines: [
            { speaker: "You", l1: "مِن فَضلَك، تَذكَرة إلى مَحَطّة العَتَبة.", en: "Please, a ticket to Attaba station." },
            { speaker: "Clerk", l1: "تَذكَرة واحِدة. ثَمانية جُنَيهات.", en: "One ticket. Eight pounds." },
            { speaker: "You", l1: "تَفَضَّل. أَتَغَيَّر الخَط؟", en: "Here you go. Do I change lines?" },
            { speaker: "Clerk", l1: "لا، نَفس الخَط. مَحَطَّتَين بَس.", en: "No, same line. Just two stations." },
            { speaker: "You", l1: "شُكراً جَزيلاً.", en: "Thank you very much." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Metro check",
          questions: [
            {
              q: "What is ʿarabat as-sayyidāt?",
              options: ["The ticket office", "The women's carriage", "The exit", "The next station"],
              correct: 1,
              fb: "عَرَبة السَّيِّدات — the women-only carriage, usually cars 4 and 5.",
            },
            {
              q: "'A ticket, please' =",
              options: ["تَذكَرة، مِن فَضلَك", "المَخرَج، مِن فَضلَك", "بِكَم؟", "أَين المترو؟"],
              correct: 0,
            },
            {
              q: "al-makhraj means…",
              options: ["the entrance", "the exit", "the line", "the meter"],
              correct: 1,
            },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Where do men NOT ride?",
              options: ["al-makhraj", "ʿarabat as-sayyidāt", "al-khaṭ at-thānī", "al-maḥaṭṭa"],
              correct: 1,
            },
            {
              q: "Translate: 'A ticket to Attaba.'",
              options: [
                "تَذكَرة إلى العَتَبة",
                "بِكَم إلى العَتَبة؟",
                "أَين العَتَبة؟",
                "قِف عِندَ العَتَبة",
              ],
              correct: 0,
            },
          ],
        },
      ],
    },
    {
      slug: "transit-microbus",
      title: "The microbus",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Cairo's cheapest ride",
          body: [
            "The <strong>microbus</strong> (الميكروباص, <strong>al-mīkrūbāṣ</strong>) is a shared minivan that follows fixed routes for a few pounds. Locals shout the destination; you flag it down and squeeze in.",
            "Your most useful question is <strong>hal yadhhab hādhā ilā…?</strong> (هَل يَذهَب هذا إلى…؟) — \"does this one go to…?\" In Egyptian colloquial you'll hear the shorter <em>dah rāyiḥ…?</em> (ده رايح…؟).",
            "Pass your fare forward hand-to-hand; passengers relay it to the driver. To get out, call <strong>ʿalā jamb!</strong> (عَلى جَنب!) — \"pull over / to the side!\"",
          ],
          keyPoint:
            "Microbus = al-mīkrūbāṣ. 'Does this go to…?' = hal yadhhab hādhā ilā…? To stop: ʿalā jamb!",
        },
        {
          type: "vocab",
          heading: "Microbus vocab",
          items: [
            { l1: "الميكروباص", en: "the microbus", note: "al-mīkrūbāṣ (m.)" },
            { l1: "هَل يَذهَب هذا إلى…؟", en: "does this (one) go to…?", note: "hal yadhhab hādhā ilā…?" },
            { l1: "الأُجرة", en: "the fare", note: "al-ujra (f.)" },
            { l1: "عَلى جَنب", en: "pull over / let me off", note: "ʿalā jamb — call out to get off" },
            { l1: "راكِب", en: "passenger", note: "rākib (m.), pl. rukkāb" },
            { l1: "المَوقِف", en: "the stop / depot", note: "al-mawqif (m.)" },
            { l1: "كَم الأُجرة؟", en: "how much is the fare?", note: "kam al-ujra?" },
            { l1: "هُناك مَكان؟", en: "is there a seat / room?", note: "hunāk makān?" },
          ],
        },
        {
          type: "dialogue",
          heading: "Flagging a microbus to Giza",
          setup: "A microbus slows at the corner; you lean toward the window.",
          lines: [
            { speaker: "You", l1: "هَل يَذهَب هذا إلى الجيزة؟", en: "Does this go to Giza?" },
            { speaker: "Driver", l1: "أَيوة، اِركَب. فيه مَكان وَرا.", en: "Yes, get in. There's room in the back." },
            { speaker: "You", l1: "كَم الأُجرة؟", en: "How much is the fare?" },
            { speaker: "Driver", l1: "خَمسة جُنَيه.", en: "Five pounds." },
            { speaker: "You", l1: "تَفَضَّل. عَلى جَنب عِندَ الجِسر، مِن فَضلَك.", en: "Here. Let me off at the bridge, please." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the microbus question",
          items: [
            { tokens: ["هَل", "يَذهَب", "هذا", "إلى", "الجيزة", "؟"], en: "Does this go to Giza?" },
            { tokens: ["كَم", "الأُجرة", "؟"], en: "How much is the fare?" },
            { tokens: ["عَلى", "جَنب", "،", "مِن", "فَضلَك"], en: "Let me off, please." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Does this go to downtown? How much is the fare?",
          reference: "هَل يَذهَب هذا إلى وَسَط البَلَد؟ كَم الأُجرة؟",
          hint: "hal yadhhab hādhā ilā…? then kam al-ujra?",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "'How much to the airport?' =",
        options: ["بِكَم إلى المَطار؟", "أَينَ المَطار؟", "مَتى المَطار؟", "كَيفَ المَطار؟"],
        correct: 0,
      },
      {
        q: "al-ʿaddād is…",
        options: ["the driver", "the meter", "the fare", "the line"],
        correct: 1,
      },
      {
        q: "'On the meter, please' =",
        options: [
          "عَلى العَدّاد، مِن فَضلَك",
          "عَلى طول، مِن فَضلَك",
          "قِف هُنا، مِن فَضلَك",
          "بِكَم، مِن فَضلَك",
        ],
        correct: 0,
      },
      {
        q: "The women's carriage on the metro is…",
        options: ["al-makhraj", "ʿarabat as-sayyidāt", "al-khaṭ", "al-mawqif"],
        correct: 1,
      },
      {
        q: "A metro ticket is a…",
        options: ["ujra", "tadhkara", "ʿaddād", "maḥaṭṭa"],
        correct: 1,
      },
      {
        q: "'Does this go to Giza?' =",
        options: [
          "هَل يَذهَب هذا إلى الجيزة؟",
          "بِكَم إلى الجيزة؟",
          "أَينَ الجيزة؟",
          "قِف عِندَ الجيزة",
        ],
        correct: 0,
      },
      {
        q: "To get off a microbus you call out…",
        options: ["ʿalā ṭūl", "ʿalā jamb", "ʿalā l-ʿaddād", "ʿalā l-mawqif"],
        correct: 1,
      },
      {
        q: "al-maḥaṭṭa means…",
        options: ["the exit", "the station", "the ticket", "the fare"],
        correct: 1,
      },
      {
        q: "'Stop here' =",
        options: ["قِف هُنا", "عَلى طول", "اِنتَظِر", "تَفَضَّل"],
        correct: 0,
      },
      {
        q: "The cheapest shared ride on a fixed route is the…",
        options: ["tāksī", "mitrū", "mīkrūbāṣ", "ʿaddād"],
        correct: 2,
      },
    ],
  },
};
