import type { Unit } from "../../types";

export const UNIT_POLITE_REQUESTS: Unit = {
  slug: "polite-requests",
  stage: 6,
  order: 27,
  icon: "🤝",
  title: "Polite requests",
  tagline: "mumkin…?, law samaḥt, min faḍlak.",
  badge: "core",
  lessons: [
    {
      slug: "polite-mumkin-law-samaht",
      title: "mumkin…? + law samaḥt / min faḍlak",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The two-word key to any request",
          body: [
            "Egyptians prize politeness, and two little words unlock almost any request. <strong>مُمْكِن</strong> (<em>mumkin</em>) means \"is it possible / may I,\" and you place it before whatever you want: <strong>مُمْكِن الماء؟</strong> (<em>mumkin al-māʾ?</em>) = \"may I have water?\"",
            "Add a courtesy tag: <strong>لَوْ سَمَحْت</strong> (<em>law samaḥt</em>, \"if you permit\") or <strong>مِنْ فَضْلِك</strong> (<em>min faḍlik</em>, \"please / by your favor\"). Both mean \"please,\" and both come at the start or end of the sentence.",
            "These tags <em>change form by gender</em>: to a man <strong>law samaḥt / min faḍlak</strong>; to a woman <strong>law samaḥti / min faḍlik</strong>. Getting the ending right is a small touch that lands well.",
            "Put together: <strong>مُمْكِن القائِمة، لَوْ سَمَحْت؟</strong> (<em>mumkin al-qāʾima, law samaḥt?</em>) = \"the menu, please?\" Polite, complete, and works everywhere.",
          ],
          keyPoint:
            "mumkin + [thing]? = may I have…? Add law samaḥt / min faḍlak (to a man) or law samaḥti / min faḍlik (to a woman) = please.",
        },
        {
          type: "vocab",
          heading: "Request vocabulary",
          items: [
            { l1: "مُمْكِن…؟", en: "may I…? / is it possible…?", note: "mumkin — invariable, goes before the request." },
            { l1: "لَوْ سَمَحْت", en: "please (if you permit)", note: "law samaḥt (to a man) / law samaḥti (to a woman)." },
            { l1: "مِنْ فَضْلِك", en: "please (by your favor)", note: "min faḍlak (to a man) / min faḍlik (to a woman)." },
            { l1: "أُريد", en: "I want", note: "urīd — direct; soften with min faḍlak." },
            { l1: "أَعْطِني", en: "give me", note: "aʿṭinī (to a man) / aʿṭīnī (to a woman)." },
            { l1: "أَحْتاج", en: "I need", note: "aḥtāj — verb iḥtāja." },
            { l1: "القائِمة", en: "the menu / the list", note: "al-qāʾima (f.)." },
            { l1: "الماء", en: "water", note: "al-māʾ (m.)." },
            { l1: "الفاتورة", en: "the bill / invoice", note: "al-fātūra (f.)." },
          ],
        },
        {
          type: "dialogue",
          heading: "Ordering at a café",
          setup: "You sit down at an ahwa (café) in downtown Cairo.",
          lines: [
            { speaker: "You", l1: "مُمْكِن القائِمة، لَوْ سَمَحْت؟", en: "May I have the menu, please?" },
            { speaker: "النّادِل (Waiter)", l1: "تَفَضَّلْ. ماذا تُريد؟", en: "Here you are. What would you like?" },
            { speaker: "You", l1: "أُريد شاي بِالنَّعْناع، مِنْ فَضْلِك.", en: "I'd like tea with mint, please." },
            { speaker: "النّادِل (Waiter)", l1: "حاضِر. أَيّ شَيء آخَر؟", en: "Right away. Anything else?" },
            { speaker: "You", l1: "مُمْكِن كوب ماء أَيْضًا؟", en: "May I have a glass of water too?" },
            { speaker: "النّادِل (Waiter)", l1: "بِالتَّأكيد.", en: "Certainly." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Polite fill",
          items: [
            {
              template: "___ القائِمة، لَوْ سَمَحْت؟",
              answer: "مُمْكِن",
              en: "May I have the menu, please?",
              options: ["مُمْكِن", "أَيْنَ", "بِكَمْ", "غالي"],
            },
            {
              template: "أُريد شاي، مِنْ ___ .",
              answer: "فَضْلِك",
              en: "I'd like tea, please.",
              options: ["فَضْلِك", "سَمَحْت", "الباقي", "القائِمة"],
            },
            {
              template: "مُمْكِن كوب ___ ؟",
              answer: "ماء",
              en: "May I have a glass of water?",
              options: ["ماء", "غالي", "فاتورة", "فَضْلِك"],
            },
            {
              template: "(to a woman) لَوْ ___ ، الحِساب.",
              answer: "سَمَحْتِ",
              en: "Please (to a woman), the bill.",
              options: ["سَمَحْتِ", "سَمَحْت", "فَضْلَك", "مُمْكِن"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "May I have the menu, please?",
          reference: "مُمْكِن القائِمة، لَوْ سَمَحْت؟",
          hint: "mumkin + al-qāʾima, then law samaḥt for 'please' (to a man).",
        },
      ],
    },
    {
      slug: "polite-softening-requests",
      title: "Softening requests & hal yumkinuka…?",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Sounding gentle, not demanding",
          body: [
            "<em>mumkin</em> is everyday-polite. For a more formal or careful register — speaking to an official, an elder, or in writing — use the fuller <strong>هَلْ يُمْكِنُكَ…؟</strong> (<em>hal yumkinuka…?</em>) = \"is it possible for you to…?\" To a woman: <strong>هَلْ يُمْكِنُكِ…؟</strong> (<em>hal yumkinuki…?</em>).",
            "It's followed by a verb in the subjunctive: <strong>هَلْ يُمْكِنُكَ أَنْ تُساعِدَني؟</strong> (<em>hal yumkinuka an tusāʿidanī?</em>) = \"can you help me?\" The <em>an</em> (\"to\") links the two verbs.",
            "Soften further with <strong>لَوْ سَمَحْت</strong> and a conditional touch like <strong>إِذا أَمْكَن</strong> (<em>idhā amkan</em>, \"if possible\"). Stacking courtesy is normal and welcome in Arabic.",
            "Compare the registers: <em>mumkin tusāʿidnī?</em> (casual) vs <em>hal yumkinuka an tusāʿidanī, law samaḥt?</em> (formal, careful). Same request, different politeness gear.",
          ],
          tip: {
            label: "Register matters",
            body: "Use <em>mumkin</em> with shopkeepers, waiters, taxi drivers — anyone in a casual exchange. Switch to <em>hal yumkinuka…?</em> with officials, in offices, or when you want to sound especially deferential. Over-politeness rarely offends.",
          },
        },
        {
          type: "vocab",
          heading: "Softer-request vocabulary",
          items: [
            { l1: "هَلْ يُمْكِنُكَ…؟", en: "is it possible for you to…? (to a man)", note: "hal yumkinuka — formal; to a woman: hal yumkinuki." },
            { l1: "أَنْ", en: "to (links to a verb)", note: "an + subjunctive verb." },
            { l1: "تُساعِدَني", en: "you help me", note: "tusāʿidanī — verb sāʿada (to help)." },
            { l1: "إِذا أَمْكَن", en: "if possible", note: "idhā amkan — extra softener." },
            { l1: "أَرْجو", en: "I request / please", note: "arjū — polite, slightly formal." },
            { l1: "لَحْظة", en: "one moment", note: "laḥẓa (f.) — 'just a second'." },
            { l1: "عَفْوًا", en: "excuse me / pardon", note: "ʿafwan — to get attention or apologize." },
            { l1: "تَكَرَّمْ", en: "kindly / if you'd be so kind", note: "takarram (to a man) — very polite." },
            { l1: "بِبَطء", en: "slowly", note: "bi-buṭʾ — 'please speak slowly'." },
          ],
        },
        {
          type: "dialogue",
          heading: "Asking for help at a hotel desk",
          setup: "You approach the reception of a Cairo hotel with a question.",
          lines: [
            { speaker: "You", l1: "عَفْوًا، هَلْ يُمْكِنُكَ أَنْ تُساعِدَني؟", en: "Excuse me, can you help me?" },
            { speaker: "المُوَظَّف (Clerk)", l1: "بِالطَّبْع. كَيْفَ أَخْدِمُك؟", en: "Of course. How can I serve you?" },
            { speaker: "You", l1: "هَلْ يُمْكِنُكَ أَنْ تَحْجِزَ لي تاكْسي، إِذا أَمْكَن؟", en: "Could you book me a taxi, if possible?" },
            { speaker: "المُوَظَّف (Clerk)", l1: "بِكُلِّ سُرور. إِلى أَيْنَ؟", en: "With pleasure. To where?" },
            { speaker: "You", l1: "إِلى المَتْحَف المِصْري، لَوْ سَمَحْت. وتَكَلَّمْ بِبَطء، أَرْجوك.", en: "To the Egyptian Museum, please. And speak slowly, please." },
            { speaker: "المُوَظَّف (Clerk)", l1: "حاضِر، لَحْظة مِنْ فَضْلِك.", en: "Right away, one moment please." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the polite request",
          intro: "Tap the words into order.",
          items: [
            { tokens: ["هَلْ", "يُمْكِنُكَ", "أَنْ", "تُساعِدَني؟"], en: "Can you help me?" },
            { tokens: ["عَفْوًا،", "أَرْجوك", "تَكَلَّمْ", "بِبَطء"], en: "Excuse me, please speak slowly." },
            { tokens: ["مُمْكِن", "لَحْظة،", "لَوْ", "سَمَحْت؟"], en: "One moment, please?" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Pick the register",
          questions: [
            {
              q: "The more formal 'is it possible for you to…?' (to a man) =",
              options: ["مُمْكِن", "هَلْ يُمْكِنُكَ؟", "أَعْطِني", "غالي"],
              correct: 1,
              fb: "hal yumkinuka…? is the careful, formal request.",
            },
            {
              q: "'If possible' (a softener) =",
              options: ["إِذا أَمْكَن", "غالي جِدًّا", "أَيْنَ الباقي؟", "كَفى"],
              correct: 0,
              fb: "idhā amkan adds extra courtesy.",
            },
            {
              q: "'Please speak slowly' uses…",
              options: ["بِبَطء", "بِسُرْعة", "غالي", "كيلو"],
              correct: 0,
              fb: "bi-buṭʾ = slowly; the opposite, bi-surʿa, means quickly.",
            },
            {
              q: "After 'hal yumkinuka', the next verb is linked by…",
              options: ["مِنْ", "أَنْ", "في", "إِلى"],
              correct: 1,
              fb: "an + subjunctive verb: yumkinuka an tusāʿidanī.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me, can you help me, please?",
          reference: "عَفْوًا، هَلْ يُمْكِنُكَ أَنْ تُساعِدَني، لَوْ سَمَحْت؟",
          hint: "ʿafwan + hal yumkinuka an tusāʿidanī + law samaḥt.",
        },
      ],
    },
    {
      slug: "polite-thanking-responding",
      title: "Thanking & responding politely",
      estMinutes: 7,
      pages: [
        {
          type: "intro",
          heading: "Thanks, and the replies that follow",
          body: [
            "The core thank-you is <strong>شُكْرًا</strong> (<em>shukran</em>). Warmer: <strong>شُكْرًا جَزيلًا</strong> (<em>shukran jazīlan</em>, \"thank you very much\"). The standard reply is <strong>عَفْوًا</strong> (<em>ʿafwan</em>, \"you're welcome\") or <strong>العَفْو</strong> (<em>al-ʿafw</em>).",
            "A very Egyptian flourish: when thanked, people often say <strong>عَلى الرَّحْب وَالسَّعة</strong> (<em>ʿalā r-raḥb wa-s-saʿa</em>, \"you're most welcome\") or simply <strong>لا شُكْرَ عَلى واجِب</strong> (<em>lā shukra ʿalā wājib</em>, \"no thanks needed for a duty\").",
            "You'll also hear <strong>تَسْلَم</strong> / <strong>تِسْلَمي</strong> (<em>taslam / tislami</em>, \"may you be safe\") as a heartfelt thanks, answered with <strong>الله يِسَلِّمَك</strong> (<em>allāh yisallimak</em>). Religious-flavored courtesy is warm and ordinary here.",
            "To accept an offer graciously: <strong>بِكُلِّ سُرور</strong> (<em>bi-kulli surūr</em>, \"with all pleasure\"). To decline gently: <strong>لا، شُكْرًا</strong> (<em>lā, shukran</em>, \"no, thank you\").",
          ],
          keyPoint:
            "shukran (thanks) → ʿafwan / al-ʿafw (you're welcome). shukran jazīlan = thanks a lot. bi-kulli surūr = with pleasure.",
        },
        {
          type: "vocab",
          heading: "Thanks & responses",
          items: [
            { l1: "شُكْرًا", en: "thank you", note: "shukran — the everyday thanks." },
            { l1: "شُكْرًا جَزيلًا", en: "thank you very much", note: "shukran jazīlan." },
            { l1: "عَفْوًا / العَفْو", en: "you're welcome", note: "ʿafwan / al-ʿafw." },
            { l1: "لا شُكْرَ عَلى واجِب", en: "no thanks needed (it was a duty)", note: "lā shukra ʿalā wājib — gracious reply." },
            { l1: "عَلى الرَّحْب وَالسَّعة", en: "you're most welcome", note: "ʿalā r-raḥb wa-s-saʿa — warm, Egyptian." },
            { l1: "تَسْلَم / تِسْلَمي", en: "thanks (lit. may you be safe)", note: "taslam (m.) / tislami (f.)." },
            { l1: "بِكُلِّ سُرور", en: "with pleasure / gladly", note: "bi-kulli surūr — accepting graciously." },
            { l1: "لا، شُكْرًا", en: "no, thank you", note: "lā, shukran — gentle decline." },
            { l1: "مُمتاز / رائِع", en: "excellent / wonderful", note: "mumtāz / rāʾiʿ — warm acknowledgement." },
          ],
        },
        {
          type: "dialogue",
          heading: "Receiving help and thanking",
          setup: "A passer-by has just given you directions.",
          lines: [
            { speaker: "المارّ (Passer-by)", l1: "المَتْحَف عَلى يَمينِك، بَعْد الإشارة.", en: "The museum is on your right, after the traffic light." },
            { speaker: "You", l1: "شُكْرًا جَزيلًا! ساعَدْتَني كَثيرًا.", en: "Thank you very much! You helped me a lot." },
            { speaker: "المارّ (Passer-by)", l1: "عَفْوًا، لا شُكْرَ عَلى واجِب.", en: "You're welcome, no thanks needed." },
            { speaker: "You", l1: "تَسْلَم. رِحْلة سَعيدة لَك.", en: "Thank you (bless you). Have a good trip." },
            { speaker: "المارّ (Passer-by)", l1: "الله يِسَلِّمَك. مَعَ السَّلامة.", en: "Bless you too. Goodbye." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Thanks fill",
          items: [
            {
              template: "___ جَزيلًا عَلى مُساعَدَتِك.",
              answer: "شُكْرًا",
              en: "Thank you very much for your help.",
              options: ["شُكْرًا", "عَفْوًا", "غالي", "مُمْكِن"],
            },
            {
              template: "— شُكْرًا. — ___ .",
              answer: "عَفْوًا",
              en: "— Thanks. — You're welcome.",
              options: ["عَفْوًا", "غالي", "أَعْطِني", "بِكَمْ"],
            },
            {
              template: "أَقْبَل العَرْض بِكُلِّ ___ .",
              answer: "سُرور",
              en: "I accept the offer with pleasure.",
              options: ["سُرور", "شُكْرًا", "الباقي", "فَضْلِك"],
            },
            {
              template: "لا، ___ . لا أُريد المَزيد.",
              answer: "شُكْرًا",
              en: "No, thank you. I don't want more.",
              options: ["شُكْرًا", "غالي", "مُمْكِن", "أَعْطِني"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Thank you very much. — You're welcome.",
          reference: "شُكْرًا جَزيلًا. — عَفْوًا.",
          hint: "shukran jazīlan, answered with ʿafwan.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'Thank you very much' =",
              options: ["شُكْرًا جَزيلًا", "لا، شُكْرًا", "غالي جِدًّا", "أَعْطِني"],
              correct: 0,
            },
            {
              q: "The standard reply to 'shukran' is…",
              options: ["مُمْكِن", "عَفْوًا", "أَيْنَ", "كيلو"],
              correct: 1,
            },
            {
              q: "'With pleasure / gladly' =",
              options: ["بِكُلِّ سُرور", "لا شُكْرَ", "غالي", "بِبَطء"],
              correct: 0,
            },
            {
              q: "'taslam' is best understood as…",
              options: ["a discount", "a heartfelt thanks", "a price", "a goodbye only"],
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
        q: "'May I…?' (the everyday request word) =",
        options: ["مُمْكِن", "غالي", "أَيْنَ", "كيلو"],
        correct: 0,
      },
      {
        q: "'Please' (to a man) =",
        options: ["مِنْ فَضْلِك", "مِنْ فَضْلَك", "أَعْطِني", "عَفْوًا"],
        correct: 1,
      },
      {
        q: "To a woman, 'please' (if you permit) is…",
        options: ["لَوْ سَمَحْت", "لَوْ سَمَحْتِ", "مُمْكِن", "شُكْرًا"],
        correct: 1,
      },
      {
        q: "The formal 'is it possible for you to…?' (to a man) =",
        options: ["مُمْكِن", "هَلْ يُمْكِنُكَ؟", "أَعْطِني", "أَرْخَص"],
        correct: 1,
      },
      {
        q: "After 'hal yumkinuka', verbs are linked by…",
        options: ["في", "أَنْ", "إِلى", "مِنْ"],
        correct: 1,
      },
      {
        q: "'If possible' =",
        options: ["إِذا أَمْكَن", "غالي جِدًّا", "بِكَمْ هٰذا", "أَيْنَ الباقي"],
        correct: 0,
      },
      {
        q: "'Thank you' =",
        options: ["عَفْوًا", "شُكْرًا", "مُمْكِن", "غالي"],
        correct: 1,
      },
      {
        q: "The reply 'you're welcome' =",
        options: ["شُكْرًا", "عَفْوًا", "أَعْطِني", "كيلو"],
        correct: 1,
      },
      {
        q: "'With pleasure / gladly' =",
        options: ["لا، شُكْرًا", "بِكُلِّ سُرور", "غالي عَلَيَّ", "أَرْخَص"],
        correct: 1,
      },
      {
        q: "'Please speak slowly' uses the word…",
        options: ["بِسُرْعة", "بِبَطء", "غالي", "كيس"],
        correct: 1,
      },
    ],
  },
};
