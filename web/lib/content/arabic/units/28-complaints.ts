import type { Unit } from "../../types";

export const UNIT_COMPLAINTS: Unit = {
  slug: "complaints",
  stage: 6,
  order: 28,
  icon: "📣",
  title: "Complaints & problems",
  tagline: "fīh mushkila, mish shaghghāl, getting it sorted.",
  badge: "tourist",
  lessons: [
    {
      slug: "complaints-describing-problem",
      title: "hunāka mushkila — describing a problem",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Naming what went wrong",
          body: [
            "When something's off, lead with the noun for \"problem\": <strong>مُشْكِلة</strong> (<em>mushkila</em>, pl. <em>mashākil</em>). \"There's a problem\" = <strong>هُناكَ مُشْكِلة</strong> (<em>hunāka mushkila</em>) or, colloquially, <strong>فيه مُشْكِلة</strong> (<em>fīh mushkila</em>).",
            "To say a device doesn't work, use <strong>هٰذا لا يَعْمَل</strong> (<em>hādhā lā yaʿmal</em>) = \"this doesn't work,\" or the everyday Egyptian <strong>مِش شَغّال</strong> (<em>mish shaghghāl</em>, \"not working\"). For something broken: <strong>مَكْسور</strong> (<em>maksūr</em>).",
            "Other useful states: <strong>مُتَّسِخ</strong> (<em>muttasikh</em>) = dirty, <strong>ناقِص</strong> (<em>nāqiṣ</em>) = missing/incomplete, <strong>خاطِئ</strong> (<em>khāṭiʾ</em>) = wrong, <strong>تالِف</strong> (<em>tālif</em>) = spoiled/damaged.",
            "Be specific and calm: <strong>الغُرْفة غَيْر نَظيفة والتَّكييف لا يَعْمَل</strong> = \"the room isn't clean and the AC doesn't work.\" Stating facts plainly gets faster results than anger.",
          ],
          keyPoint:
            "hunāka / fīh mushkila = there's a problem. lā yaʿmal / mish shaghghāl = doesn't work. maksūr = broken.",
        },
        {
          type: "vocab",
          heading: "Problem vocabulary",
          items: [
            { l1: "المُشْكِلة", en: "the problem", note: "al-mushkila (f.), pl. mashākil." },
            { l1: "هُناكَ مُشْكِلة", en: "there is a problem", note: "hunāka mushkila — MSA; colloquial: fīh mushkila." },
            { l1: "لا يَعْمَل", en: "it doesn't work", note: "lā yaʿmal — verb ʿamila." },
            { l1: "مِش شَغّال", en: "not working (colloquial)", note: "mish shaghghāl — very common in Egypt." },
            { l1: "مَكْسور", en: "broken", note: "maksūr (m.) / maksūra (f.)." },
            { l1: "مُتَّسِخ", en: "dirty", note: "muttasikh (m.) / muttasikha (f.)." },
            { l1: "ناقِص", en: "missing / incomplete", note: "nāqiṣ (m.) / nāqiṣa (f.)." },
            { l1: "خاطِئ", en: "wrong / mistaken", note: "khāṭiʾ — e.g. a wrong order." },
            { l1: "التَّكييف", en: "the air conditioning", note: "at-takyīf (m.)." },
            { l1: "الغُرْفة", en: "the room", note: "al-ghurfa (f.), pl. ghuraf." },
            { l1: "خَطَأ", en: "a mistake / error", note: "khaṭaʾ (m.) — 'fīh khaṭaʾ' = there's an error." },
          ],
        },
        {
          type: "dialogue",
          heading: "A problem at the hotel",
          setup: "You return to reception about your room.",
          lines: [
            { speaker: "You", l1: "مَساء الخَيْر. هُناكَ مُشْكِلة في غُرْفَتي.", en: "Good evening. There's a problem in my room." },
            { speaker: "المُوَظَّف (Clerk)", l1: "آسِف لِذٰلِك. ما المُشْكِلة؟", en: "Sorry about that. What's the problem?" },
            { speaker: "You", l1: "التَّكييف لا يَعْمَل، والحَمّام مُتَّسِخ.", en: "The AC doesn't work, and the bathroom is dirty." },
            { speaker: "المُوَظَّف (Clerk)", l1: "أَعْتَذِر بِشِدّة. سَأُرْسِل أَحَدًا حالًا.", en: "I sincerely apologize. I'll send someone right away." },
            { speaker: "You", l1: "أَيْضًا المِفْتاح مَكْسور ولا يَفْتَح الباب.", en: "Also the key is broken and doesn't open the door." },
            { speaker: "المُوَظَّف (Clerk)", l1: "سَأُعْطيك مِفْتاحًا جَديدًا فَوْرًا.", en: "I'll give you a new key immediately." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Problem fill",
          items: [
            {
              template: "هُناكَ ___ في الغُرْفة.",
              answer: "مُشْكِلة",
              en: "There's a problem in the room.",
              options: ["مُشْكِلة", "غالي", "هَدِيّة", "فَكّة"],
            },
            {
              template: "التَّكييف ___ . الجَوّ حارّ.",
              answer: "لا يَعْمَل",
              en: "The AC doesn't work. It's hot.",
              options: ["لا يَعْمَل", "رَخيص", "طازَج", "جَديد"],
            },
            {
              template: "المِفْتاح ___ ولا يَفْتَح الباب.",
              answer: "مَكْسور",
              en: "The key is broken and doesn't open the door.",
              options: ["مَكْسور", "نَظيف", "غالي", "كَبير"],
            },
            {
              template: "الحَمّام ___ ، أُريد غُرْفة أُخْرى.",
              answer: "مُتَّسِخ",
              en: "The bathroom is dirty, I want another room.",
              options: ["مُتَّسِخ", "جَديد", "رَخيص", "طازَج"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "There's a problem. The air conditioning doesn't work.",
          reference: "هُناكَ مُشْكِلة. التَّكييف لا يَعْمَل.",
          hint: "hunāka mushkila + at-takyīf lā yaʿmal.",
        },
      ],
    },
    {
      slug: "complaints-returns-fixing",
      title: "urīd istibdāl — returns & fixing it",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Exchanges and refunds",
          body: [
            "Two outcomes solve most faulty purchases: an <em>exchange</em> or a <em>refund</em>. \"I want an exchange\" = <strong>أُريد اِسْتِبْدال</strong> (<em>urīd istibdāl</em>); \"I want my money back\" = <strong>أُريد اِسْتِرْجاع نُقودي</strong> (<em>urīd istirjāʿ nuqūdī</em>).",
            "Show the receipt — <strong>الإيصال</strong> (<em>al-īṣāl</em>) or <strong>الفاتورة</strong> (<em>al-fātūra</em>) — since most returns require it: <strong>عِنْدي الإيصال</strong> (<em>ʿindī l-īṣāl</em>, \"I have the receipt\").",
            "Useful verbs: <strong>أُبَدِّل</strong> (<em>ubaddil</em>) = I exchange, <strong>أُرْجِع</strong> (<em>urjiʿ</em>) = I return (something), <strong>أُصْلِح</strong> (<em>uṣliḥ</em>) = I repair. Ask: <strong>هَلْ يُمْكِنُ إِصْلاحه؟</strong> (<em>hal yumkinu iṣlāḥuhu?</em>, \"can it be repaired?\").",
            "Frame it politely: <strong>هٰذا مَعيب، أُريد اِسْتِبْدالَه بِواحِد سَليم</strong> = \"this is defective; I want to exchange it for a good one.\" <strong>مَعيب</strong> (<em>maʿīb</em>) = defective; <strong>سَليم</strong> (<em>salīm</em>) = sound/intact.",
          ],
          keyPoint:
            "urīd istibdāl = I want an exchange. urīd istirjāʿ nuqūdī = I want a refund. ʿindī l-īṣāl = I have the receipt.",
        },
        {
          type: "vocab",
          heading: "Returns & repair vocabulary",
          items: [
            { l1: "أُريد اِسْتِبْدال", en: "I want an exchange", note: "urīd istibdāl — swap for another item." },
            { l1: "أُريد اِسْتِرْجاع نُقودي", en: "I want my money back / a refund", note: "urīd istirjāʿ nuqūdī." },
            { l1: "الإيصال", en: "the receipt", note: "al-īṣāl (m.); also al-fātūra." },
            { l1: "مَعيب", en: "defective / faulty", note: "maʿīb (m.) / maʿība (f.)." },
            { l1: "سَليم", en: "sound / intact / good", note: "salīm (m.) / salīma (f.)." },
            { l1: "أُبَدِّل", en: "I exchange", note: "ubaddil — verb baddala." },
            { l1: "أُرْجِع", en: "I return (an item)", note: "urjiʿ — verb arjaʿa." },
            { l1: "إِصْلاح", en: "repair", note: "iṣlāḥ (m.); 'hal yumkinu iṣlāḥuhu?' = can it be fixed?" },
            { l1: "الضَّمان", en: "the warranty / guarantee", note: "aḍ-ḍamān (m.)." },
            { l1: "بَدَلًا مِنْ", en: "instead of / in place of", note: "badalan min — 'a good one instead'." },
          ],
        },
        {
          type: "dialogue",
          heading: "Returning a faulty radio",
          setup: "You bring a radio back to the shop the next day.",
          lines: [
            { speaker: "You", l1: "السَّلام عَلَيْكُم. هٰذا الرّاديو مَعيب، مِش شَغّال.", en: "Hello. This radio is defective, it's not working." },
            { speaker: "البائِع (Vendor)", l1: "وعَلَيْكُمُ السَّلام. مَتى اِشْتَرَيْته؟", en: "Hello. When did you buy it?" },
            { speaker: "You", l1: "أَمْس. عِنْدي الإيصال. أُريد اِسْتِبْدالَه.", en: "Yesterday. I have the receipt. I want to exchange it." },
            { speaker: "البائِع (Vendor)", l1: "حَسَنًا. هَلْ تُريد واحِدًا جَديدًا أَمِ اِسْتِرْجاع النُّقود؟", en: "Alright. Do you want a new one or a refund?" },
            { speaker: "You", l1: "أُريد اِسْتِرْجاع نُقودي، مِنْ فَضْلِك.", en: "I want my money back, please." },
            { speaker: "البائِع (Vendor)", l1: "لا مُشْكِلة. تَفَضَّل، هٰذا الباقي كامِلًا.", en: "No problem. Here you go, the full amount back." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Sort it out",
          questions: [
            {
              q: "'I want an exchange' =",
              options: ["أُريد اِسْتِبْدال", "أُريد كيلو", "أَيْنَ الباقي؟", "غالي جِدًّا"],
              correct: 0,
              fb: "urīd istibdāl = I want an exchange.",
            },
            {
              q: "'I want a refund' =",
              options: ["أُريد اِسْتِرْجاع نُقودي", "مُمْكِن خَصْم؟", "أَعْطِني كيس", "هٰذا رَخيص"],
              correct: 0,
              fb: "urīd istirjāʿ nuqūdī = I want my money back.",
            },
            {
              q: "'maʿīb' means…",
              options: ["fresh", "defective", "cheap", "handmade"],
              correct: 1,
              fb: "maʿīb = defective/faulty; salīm = sound/intact.",
            },
            {
              q: "Most returns require you to show the…",
              options: ["الإيصال", "التَّكييف", "الهَدِيّة", "السّوق"],
              correct: 0,
              fb: "al-īṣāl (the receipt) is usually needed.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "This is defective. I want a refund; I have the receipt.",
          reference: "هٰذا مَعيب. أُريد اِسْتِرْجاع نُقودي؛ عِنْدي الإيصال.",
          hint: "maʿīb + urīd istirjāʿ nuqūdī + ʿindī l-īṣāl.",
        },
      ],
    },
    {
      slug: "complaints-escalation",
      title: "mumkin akallim al-mudīr? — polite escalation",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Going up a level — calmly",
          body: [
            "If the person in front of you can't help, escalate politely. The key line: <strong>مُمْكِن أُكَلِّم المُدير؟</strong> (<em>mumkin ukallim al-mudīr?</em>) = \"may I speak to the manager?\" The verb <em>kallama</em> (to speak to) takes a direct object here.",
            "Keep it courteous: <strong>لا أُريد مَشاكِل، لٰكِنْ…</strong> (<em>lā urīd mashākil, lākin…</em>, \"I don't want trouble, but…\") signals you're reasonable. Then state the unresolved issue plainly.",
            "Other escalation phrases: <strong>هٰذا غَيْر مَقْبول</strong> (<em>hādhā ghayr maqbūl</em>, \"this is unacceptable\"), <strong>أُريد تَقْديم شَكْوى</strong> (<em>urīd taqdīm shakwā</em>, \"I want to file a complaint\"), and <strong>مَنْ المَسْؤول هُنا؟</strong> (<em>man al-masʾūl hunā?</em>, \"who's in charge here?\").",
            "End by stating what you want resolved: <strong>أَرْجو حَلّ هٰذِهِ المُشْكِلة</strong> (<em>arjū ḥall hādhihi l-mushkila</em>, \"please solve this problem\"). Firm, polite, and clear wins the day in Egypt.",
          ],
          tip: {
            label: "Calm beats loud",
            body: "In Egyptian service culture, a <em>composed</em> request to speak with the <em>mudīr</em> (manager) carries more weight than shouting. Pair firmness with the politeness words from Unit 27 — <em>law samaḥt</em>, <em>min faḍlak</em> — and you'll be taken seriously.",
          },
        },
        {
          type: "vocab",
          heading: "Escalation vocabulary",
          items: [
            { l1: "المُدير", en: "the manager", note: "al-mudīr (m.) / al-mudīra (f.)." },
            { l1: "مُمْكِن أُكَلِّم…؟", en: "may I speak to…?", note: "mumkin ukallim…? — verb kallama." },
            { l1: "المَسْؤول", en: "the person in charge", note: "al-masʾūl (m.) / al-masʾūla (f.)." },
            { l1: "شَكْوى", en: "a complaint", note: "shakwā (f.), pl. shakāwā." },
            { l1: "أُريد تَقْديم شَكْوى", en: "I want to file a complaint", note: "urīd taqdīm shakwā." },
            { l1: "غَيْر مَقْبول", en: "unacceptable", note: "ghayr maqbūl." },
            { l1: "حَلّ", en: "a solution", note: "ḥall (m.) — 'ḥall al-mushkila' = the solution." },
            { l1: "أَرْجو", en: "I request / please", note: "arjū — polite, firm." },
            { l1: "بِهُدوء", en: "calmly", note: "bi-hudūʾ — 'let's discuss calmly'." },
          ],
        },
        {
          type: "dialogue",
          heading: "Asking for the manager",
          setup: "The clerk can't resolve your refund, so you escalate.",
          lines: [
            { speaker: "You", l1: "آسِف، لٰكِنْ هٰذا غَيْر مَقْبول. مُمْكِن أُكَلِّم المُدير؟", en: "Sorry, but this is unacceptable. May I speak to the manager?" },
            { speaker: "المُوَظَّف (Clerk)", l1: "لَحْظة، سَأُناديه.", en: "One moment, I'll call him." },
            { speaker: "المُدير (Manager)", l1: "مَساء الخَيْر. ما المُشْكِلة؟", en: "Good evening. What's the problem?" },
            { speaker: "You", l1: "لا أُريد مَشاكِل، لٰكِنَّ المُنْتَج مَعيب وأُريد اِسْتِرْجاع نُقودي.", en: "I don't want trouble, but the product is defective and I want a refund." },
            { speaker: "المُدير (Manager)", l1: "مَعَك حَقّ. سَأَحُلّ المُشْكِلة فَوْرًا.", en: "You're right. I'll solve the problem immediately." },
            { speaker: "You", l1: "شُكْرًا. أُقَدِّر تَعاوُنَك.", en: "Thank you. I appreciate your cooperation." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the escalation",
          intro: "Tap the words into order.",
          items: [
            { tokens: ["مُمْكِن", "أُكَلِّم", "المُدير،", "لَوْ سَمَحْت؟"], en: "May I speak to the manager, please?" },
            { tokens: ["هٰذا", "غَيْر", "مَقْبول", "أَبَدًا"], en: "This is completely unacceptable." },
            { tokens: ["أَرْجو", "حَلّ", "هٰذِهِ", "المُشْكِلة"], en: "Please solve this problem." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "This is unacceptable. May I speak to the manager, please?",
          reference: "هٰذا غَيْر مَقْبول. مُمْكِن أُكَلِّم المُدير، لَوْ سَمَحْت؟",
          hint: "ghayr maqbūl + mumkin ukallim al-mudīr + law samaḥt.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'May I speak to the manager?' =",
              options: ["مُمْكِن أُكَلِّم المُدير؟", "أَيْنَ الباقي؟", "بِكَمْ هٰذا؟", "أَعْطِني كيلو"],
              correct: 0,
            },
            {
              q: "'al-mudīr' means…",
              options: ["the receipt", "the manager", "the problem", "the warranty"],
              correct: 1,
            },
            {
              q: "'This is unacceptable' =",
              options: ["هٰذا رَخيص", "هٰذا غَيْر مَقْبول", "هٰذا طازَج", "هٰذا جَديد"],
              correct: 1,
            },
            {
              q: "'I want to file a complaint' =",
              options: ["أُريد تَقْديم شَكْوى", "أُريد كيلو", "أُريد خَصْم", "أُريد القائِمة"],
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
        q: "'There's a problem' =",
        options: ["هُناكَ مُشْكِلة", "هٰذا رَخيص", "أَعْطِني كيلو", "شُكْرًا جَزيلًا"],
        correct: 0,
      },
      {
        q: "'It doesn't work' =",
        options: ["لا يَعْمَل", "طازَج", "أَرْخَص", "يَدَوِيّ"],
        correct: 0,
      },
      {
        q: "'Broken' =",
        options: ["نَظيف", "مَكْسور", "جَديد", "رَخيص"],
        correct: 1,
      },
      {
        q: "The colloquial Egyptian 'not working' is…",
        options: ["مِش شَغّال", "غالي جِدًّا", "بِكُلِّ سُرور", "أَتَفَرَّج فَقَط"],
        correct: 0,
      },
      {
        q: "'I want an exchange' =",
        options: ["أُريد اِسْتِبْدال", "أُريد كيلو", "أُريد القائِمة", "أُريد خَصْم"],
        correct: 0,
      },
      {
        q: "'I want a refund' =",
        options: ["أُريد اِسْتِرْجاع نُقودي", "مُمْكِن خَصْم؟", "أَعْطِني كيس", "هٰذا طازَج"],
        correct: 0,
      },
      {
        q: "Most returns require you to show the…",
        options: ["التَّكييف", "الإيصال", "الهَدِيّة", "السّوق"],
        correct: 1,
      },
      {
        q: "'maʿīb' means…",
        options: ["fresh", "defective", "cheap", "handmade"],
        correct: 1,
      },
      {
        q: "'May I speak to the manager?' =",
        options: ["مُمْكِن أُكَلِّم المُدير؟", "أَيْنَ الباقي؟", "بِكَمْ هٰذا؟", "أَعْطِني كيلو"],
        correct: 0,
      },
      {
        q: "'This is unacceptable' =",
        options: ["هٰذا رَخيص", "هٰذا غَيْر مَقْبول", "هٰذا طازَج", "هٰذا يَدَوِيّ"],
        correct: 1,
      },
    ],
  },
};
