import type { Unit } from "../../types";

export const UNIT_SHOPPING: Unit = {
  slug: "shopping",
  stage: 6,
  order: 25,
  icon: "🛍️",
  title: "Money & shopping",
  tagline: "bikam?, bargaining, prices and change.",
  badge: "tourist",
  lessons: [
    {
      slug: "shopping-bikam-prices",
      title: "bikam hādhā? — asking the price",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The Egyptian pound and 'how much?'",
          body: [
            "Egypt uses the <strong>Egyptian pound</strong> — in MSA <strong>جُنَيْه</strong> (<em>junayh</em>), plural <strong>جُنَيْهات</strong> (<em>junayhāt</em>). One pound splits into 100 <strong>قِرْش</strong> (<em>qirsh</em>, piastres), though today almost everything is priced in whole pounds.",
            "The one phrase you'll use constantly is <strong>بِكَمْ هٰذا؟</strong> (<em>bikam hādhā?</em>) — \"how much is this?\" Literally <em>bi-</em> (\"for\") + <em>kam</em> (\"how much\"). For the bill total a vendor may say <strong>الحِساب</strong> (<em>al-ḥisāb</em>, the reckoning).",
            "Numbers ride along: <strong>عَشَرَة جُنَيْهات</strong> = ten pounds, <strong>خَمْسِين جُنَيْه</strong> = fifty pounds, <strong>مِيَة جُنَيْه</strong> = a hundred pounds. After 11+, the noun stays singular: <em>khamsīn junayh</em>, not <em>junayhāt</em>.",
            "<strong>غالي</strong> (<em>ghālī</em>) = expensive, <strong>رَخيص</strong> (<em>rakhīṣ</em>) = cheap. Keep both ready — you'll need them the moment a price is named.",
          ],
          keyPoint:
            "bikam hādhā? = how much is this? junayh = pound (pl. junayhāt). After 11+ use the singular noun: khamsīn junayh.",
        },
        {
          type: "vocab",
          heading: "Price & money vocabulary",
          items: [
            { l1: "بِكَمْ هٰذا؟", en: "how much is this?", note: "bikam hādhā? — your default question." },
            { l1: "كَمِ السِّعْر؟", en: "what's the price?", note: "kam as-siʿr? — siʿr (m.) = price, pl. asʿār." },
            { l1: "الجُنَيْه", en: "the Egyptian pound", note: "al-junayh (m.), pl. junayhāt." },
            { l1: "القِرْش", en: "piastre (1/100 pound)", note: "al-qirsh (m.), pl. qurūsh — mostly historical now." },
            { l1: "الفِلوس", en: "money (colloquial, widely used)", note: "al-filūs (always plural). MSA also: al-nuqūd / al-māl." },
            { l1: "الحِساب", en: "the bill / the total", note: "al-ḥisāb (m.) — 'the reckoning'." },
            { l1: "غالي", en: "expensive", note: "ghālī (m.) / ghāliya (f.)." },
            { l1: "رَخيص", en: "cheap", note: "rakhīṣ (m.) / rakhīṣa (f.)." },
            { l1: "كَثير", en: "a lot / too much", note: "kathīr — 'that's a lot' about a price." },
            { l1: "نَقْدًا", en: "in cash", note: "naqdan (adverb)." },
          ],
        },
        {
          type: "tip",
          heading: "Pounds you can hear",
          body: "Egyptians often say a price plainly: <strong>خَمْسَة وعِشْرين جُنَيْه</strong> (<em>khamsa wa-ʿishrīn junayh</em>) = \"twenty-five pounds.\" Note the <em>wa-</em> (\"and\") that glues the units to the tens — <em>five-and-twenty</em>, just like older English. Round numbers dominate market talk: 10, 20, 50, 100.",
          example: { l1: "بِكَمِ الشّاي؟ — بِخَمْسَة جُنَيْه.", en: "How much is the tea? — Five pounds." },
        },
        {
          type: "multipleChoice",
          heading: "Price talk",
          questions: [
            {
              q: "How do you ask 'How much is this?'",
              options: ["أين هٰذا؟", "بِكَمْ هٰذا؟", "ما هٰذا؟", "كيف هٰذا؟"],
              correct: 1,
              fb: "bikam hādhā? — bi- ('for') + kam ('how much').",
            },
            {
              q: "The Egyptian pound is…",
              options: ["الدينار", "الدِّرهَم", "الجُنَيْه", "الرِّيال"],
              correct: 2,
              fb: "al-junayh is Egypt's currency. Dinar/dirham/riyal belong to other Arab countries.",
            },
            {
              q: "'Expensive' is…",
              options: ["رَخيص", "غالي", "كَبير", "قَريب"],
              correct: 1,
              fb: "ghālī = expensive; rakhīṣ = cheap.",
            },
            {
              q: "How would a vendor most likely say 'fifty pounds'?",
              options: ["خَمْسِين جُنَيْهات", "خَمْسِين جُنَيْه", "جُنَيْه خَمْسِين", "خَمْسَة جُنَيْه"],
              correct: 1,
              fb: "After 11+, the counted noun is singular: khamsīn junayh.",
            },
          ],
        },
      ],
    },
    {
      slug: "shopping-bargaining",
      title: "ghālī jiddan! — the art of the haggle",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Bargaining is expected, not rude",
          body: [
            "In Egyptian markets, the first price is an <em>opening bid</em>, not a final figure. Haggling is a friendly social ritual — the vendor expects it, and walking away pays the same price as silence costs you. Smile, take your time, and treat it as a game.",
            "Your opening move after hearing a price is almost always <strong>غالي جِدًّا!</strong> (<em>ghālī jiddan!</em>) — \"very expensive!\" Then counter low and meet in the middle.",
            "Two phrases do heavy lifting: <strong>آخِر سِعْر؟</strong> (<em>ākhir siʿr?</em>) = \"last/best price?\" and <strong>مُمْكِن خَصْم؟</strong> (<em>mumkin khaṣm?</em>) = \"can I get a discount?\" The word <strong>خَصْم</strong> (<em>khaṣm</em>) means a price reduction.",
            "If it's still too much, the magic exit is <strong>سَأُفَكِّر</strong> (<em>sa-ufakkir</em>, \"I'll think about it\") and a slow turn toward the door. Often the real price chases you out.",
          ],
          tip: {
            label: "A rule of thumb",
            body: "In tourist souqs like Khan el-Khalili, vendors may open at <em>2–3×</em> what they'll accept. Counter with roughly half their first price, then settle somewhere in between. Never name a number you're not willing to pay.",
          },
        },
        {
          type: "vocab",
          heading: "Bargaining phrases",
          items: [
            { l1: "غالي جِدًّا!", en: "very expensive!", note: "ghālī jiddan! — your opening counter." },
            { l1: "آخِر سِعْر؟", en: "last / best price?", note: "ākhir siʿr? — ākhir = last." },
            { l1: "مُمْكِن خَصْم؟", en: "can I get a discount?", note: "mumkin khaṣm? — khaṣm (m.) = discount." },
            { l1: "اِعْمَلْ لي سِعْر كُوَيِّس", en: "give me a good price", note: "iʿmal lī siʿr kuwayyis — to a man." },
            { l1: "غالي عَلَيَّ", en: "it's too expensive for me", note: "ghālī ʿalayya — softens the refusal." },
            { l1: "بِكَمْ آخِرها؟", en: "what's your final on it?", note: "bikam ākhirhā? — common haggle line." },
            { l1: "سَأُفَكِّر", en: "I'll think about it", note: "sa-ufakkir — the walk-away move." },
            { l1: "وافَقْت", en: "I agree / deal", note: "wāfaqt — seals the bargain." },
            { l1: "كَثير قَوي", en: "way too much", note: "kathīr qawī — emphatic." },
          ],
        },
        {
          type: "dialogue",
          heading: "Haggling over a scarf",
          setup: "You've stopped at a stall and pointed at a cotton scarf.",
          lines: [
            { speaker: "You", l1: "بِكَمْ هٰذا الوِشاح؟", en: "How much is this scarf?" },
            { speaker: "البائِع (Vendor)", l1: "لَك بِثَمانِين جُنَيْه فَقَط، أَهلًا وَسَهلًا!", en: "For you, just eighty pounds, welcome!" },
            { speaker: "You", l1: "ثَمانِين؟ غالي جِدًّا! آخِر سِعْر؟", en: "Eighty? Very expensive! Last price?" },
            { speaker: "البائِع (Vendor)", l1: "حَسَنًا، سَبْعِين. قُماش مُمتاز.", en: "Alright, seventy. Excellent fabric." },
            { speaker: "You", l1: "غالي عَلَيَّ. مُمْكِن خَصْم؟ أَدْفَع أَرْبَعِين.", en: "Too expensive for me. A discount? I'll pay forty." },
            { speaker: "البائِع (Vendor)", l1: "أَرْبَعِين قَليل. خَمْسِين، وهٰذا آخِر سِعْر.", en: "Forty is little. Fifty, and that's the last price." },
            { speaker: "You", l1: "وافَقْت. خَمْسِين جُنَيْه.", en: "Deal. Fifty pounds." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the haggle",
          intro: "Tap the words into the correct order.",
          items: [
            { tokens: ["غالي", "جِدًّا", "آخِر", "سِعْر؟"], en: "Very expensive! Last price?" },
            { tokens: ["مُمْكِن", "خَصْم", "لَو", "سَمَحْت؟"], en: "Can I get a discount, please?" },
            { tokens: ["هٰذا", "غالي", "عَلَيَّ", "جِدًّا"], en: "This is too expensive for me." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Very expensive! Can I get a discount?",
          reference: "غالي جِدًّا! مُمْكِن خَصْم؟",
          hint: "Open with ghālī jiddan!, then mumkin khaṣm? for the discount.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Your standard opening counter after hearing a price is…",
              options: ["شُكْرًا", "غالي جِدًّا!", "أَهلًا", "مَعَ السَّلامة"],
              correct: 1,
            },
            {
              q: "'Can I get a discount?' =",
              options: ["مُمْكِن خَصْم؟", "أين الحَمّام؟", "كَمِ السّاعة؟", "ما اسْمُك؟"],
              correct: 0,
            },
            {
              q: "'ākhir siʿr?' means…",
              options: ["What's your name?", "Last / best price?", "Where is it?", "Is it new?"],
              correct: 1,
            },
            {
              q: "The walk-away phrase 'sa-ufakkir' means…",
              options: ["I'll take it", "I'll pay cash", "I'll think about it", "It's broken"],
              correct: 2,
            },
          ],
        },
      ],
    },
    {
      slug: "shopping-paying-change",
      title: "al-bāqī — paying and getting change",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Closing the deal",
          body: [
            "Once you've agreed a price, you pay. <strong>أَدْفَع</strong> (<em>adfaʿ</em>) = \"I pay,\" from the verb <em>dafaʿa</em>. To ask whether card is okay: <strong>هَلْ تَقْبَلُ البِطاقة؟</strong> (<em>hal taqbalu l-biṭāqa?</em>) — but in souqs, <strong>كاش</strong> (<em>kāsh</em>, cash) is king.",
            "Change is <strong>الباقي</strong> (<em>al-bāqī</em>) — \"the remainder.\" Hand over a hundred for a fifty-pound item and you ask: <strong>أَيْنَ الباقي؟</strong> (<em>ayna l-bāqī?</em>) = \"where's the change?\"",
            "A real snag: vendors love to claim <strong>لا يُوجَدُ فَكّة</strong> (<em>lā yūjadu fakka</em>) = \"there's no small change,\" hoping you'll round up. Carry small notes (5, 10, 20 pounds) so you can say <strong>مَعِي فَكّة</strong> (<em>maʿī fakka</em>, \"I have change\").",
            "Always glance at the change before you walk off — a polite <strong>الباقي، لَوْ سَمَحْت</strong> (<em>al-bāqī, law samaḥt</em>) recovers what's 'forgotten.'",
          ],
          keyPoint:
            "adfaʿ = I pay. al-bāqī = the change. fakka = small change. lā yūjadu fakka = 'no change' — keep small notes ready.",
        },
        {
          type: "vocab",
          heading: "Paying & change vocabulary",
          items: [
            { l1: "أَدْفَع", en: "I pay", note: "adfaʿ (verb dafaʿa, yadfaʿu)." },
            { l1: "الباقي", en: "the change (money back)", note: "al-bāqī (m.) — 'the remainder'." },
            { l1: "الفَكّة", en: "small change / coins", note: "al-fakka (f.)." },
            { l1: "نُقُود وَرَقِيّة", en: "banknotes / paper money", note: "nuqūd waraqiyya." },
            { l1: "كاش / نَقْدًا", en: "cash", note: "kāsh (colloquial) / naqdan (MSA adverb)." },
            { l1: "البِطاقة", en: "card", note: "al-biṭāqa (f.) — biṭāqat al-iʾtimān = credit card." },
            { l1: "الإيصال", en: "the receipt", note: "al-īṣāl (m.)." },
            { l1: "أَيْنَ الباقي؟", en: "where's the change?", note: "ayna l-bāqī?" },
            { l1: "مَعِي فَكّة", en: "I have small change", note: "maʿī fakka." },
            { l1: "اِحْتَفِظْ بِالباقي", en: "keep the change", note: "iḥtafiẓ bi-l-bāqī — to a man." },
          ],
        },
        {
          type: "dialogue",
          heading: "Paying for the scarf",
          setup: "You agreed on fifty pounds and hand over a hundred.",
          lines: [
            { speaker: "You", l1: "تَفَضَّلْ، مِيَة جُنَيْه.", en: "Here you go, a hundred pounds." },
            { speaker: "البائِع (Vendor)", l1: "شُكْرًا. لٰكِنْ لا يُوجَدُ فَكّة الآن.", en: "Thanks. But there's no change right now." },
            { speaker: "You", l1: "لا، أُريدُ الباقي. خَمْسِين جُنَيْه.", en: "No, I want the change. Fifty pounds." },
            { speaker: "البائِع (Vendor)", l1: "لَحْظة… تَفَضَّلِ الباقي.", en: "One moment… here's the change." },
            { speaker: "You", l1: "شُكْرًا. مُمْكِن إيصال؟", en: "Thanks. Can I get a receipt?" },
            { speaker: "البائِع (Vendor)", l1: "طَبْعًا، تَفَضَّل.", en: "Of course, here you are." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Pay-up fill",
          items: [
            {
              template: "أَيْنَ ___ ؟ دَفَعْتُ مِيَة جُنَيْه.",
              answer: "الباقي",
              en: "Where's the change? I paid a hundred pounds.",
              options: ["الباقي", "السِّعْر", "الحَمّام", "البائِع"],
            },
            {
              template: "آسِف، لا يُوجَدُ ___ صَغيرة.",
              answer: "فَكّة",
              en: "Sorry, there's no small change.",
              options: ["فَكّة", "بِطاقة", "غالي", "إيصال"],
            },
            {
              template: "هَلْ تَقْبَلُ ___ ؟",
              answer: "البِطاقة",
              en: "Do you accept card?",
              options: ["الباقي", "البِطاقة", "الفَكّة", "السّاعة"],
            },
            {
              template: "مُمْكِن ___ مِنْ فَضْلِك؟",
              answer: "إيصال",
              en: "Can I get a receipt, please?",
              options: ["إيصال", "خَصْم", "غالي", "كاش"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Where's the change? I'll pay in cash.",
          reference: "أَيْنَ الباقي؟ سَأَدْفَع نَقْدًا.",
          hint: "al-bāqī = the change; naqdan = in cash.",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "'How much is this?' =",
        options: ["أين هٰذا؟", "بِكَمْ هٰذا؟", "ما هٰذا؟", "مَنْ هٰذا؟"],
        correct: 1,
      },
      {
        q: "The Egyptian currency is the…",
        options: ["dirham", "junayh (pound)", "riyal", "dinar"],
        correct: 1,
      },
      {
        q: "Your opening counter to a price is…",
        options: ["رَخيص جِدًّا", "غالي جِدًّا!", "شُكْرًا جَزيلًا", "أَهلًا بِك"],
        correct: 1,
      },
      {
        q: "'Can I get a discount?' =",
        options: ["مُمْكِن خَصْم؟", "أين الباقي؟", "كَمِ السّاعة؟", "ما اسْمُك؟"],
        correct: 0,
      },
      {
        q: "'ākhir siʿr?' asks for…",
        options: ["the location", "the last/best price", "your name", "the receipt"],
        correct: 1,
      },
      {
        q: "'al-bāqī' means…",
        options: ["expensive", "the change (money back)", "cash", "the price"],
        correct: 1,
      },
      {
        q: "A vendor says 'lā yūjadu fakka.' This means…",
        options: [
          "the price is final",
          "there's no small change",
          "the shop is closed",
          "it's a discount",
        ],
        correct: 1,
      },
      {
        q: "'rakhīṣ' means…",
        options: ["expensive", "cheap", "broken", "new"],
        correct: 1,
      },
      {
        q: "After 11+, 'fifty pounds' is correctly said…",
        options: ["khamsīn junayhāt", "khamsīn junayh", "junayh khamsīn", "khamsa junayh"],
        correct: 1,
      },
      {
        q: "'I'll think about it' (the walk-away) =",
        options: ["وافَقْت", "سَأُفَكِّر", "أَدْفَع", "تَفَضَّل"],
        correct: 1,
      },
    ],
  },
};
