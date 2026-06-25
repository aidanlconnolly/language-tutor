import type { Unit } from "../../types";

export const UNIT_MARKET: Unit = {
  slug: "market",
  stage: 6,
  order: 26,
  icon: "🥕",
  title: "At the souq",
  tagline: "Khan el-Khalili, a kilo of…, ghālī! vs rakhīṣ.",
  badge: "tourist",
  lessons: [
    {
      slug: "market-khan-el-khalili",
      title: "Khan el-Khalili — souvenirs & haggling",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Cairo's great bazaar",
          body: [
            "<strong>خان الخَليلي</strong> (<em>Khān al-Khalīlī</em>) is Cairo's centuries-old market in the Islamic quarter — a warren of alleys selling brass lamps, papyrus, spices, jewelry, and perfume oils. It's the classic place to practice your bargaining.",
            "Vendors will greet you warmly: <strong>تَفَضَّلْ، شاهِدْ!</strong> (<em>tafaḍḍal, shāhid!</em>) = \"come, take a look!\" A friendly <strong>أَنا أَتَفَرَّج فَقَط</strong> (<em>anā atafarraj faqaṭ</em>, \"I'm just looking\") buys you space without rudeness.",
            "Souvenir words to know: <strong>تِذْكار</strong> (<em>tidhkār</em>) = souvenir, <strong>هَدِيّة</strong> (<em>hadiyya</em>) = gift, <strong>صُنِعَ في مِصْر</strong> (<em>ṣuniʿa fī Miṣr</em>) = \"made in Egypt\" — worth confirming with <strong>هَلْ هٰذا يَدَوِيّ؟</strong> (<em>hal hādhā yadawī?</em>, \"is this handmade?\").",
            "Remember the golden rule from Unit 25: the first price is an opening bid. Greet, browse, then counter with <strong>غالي جِدًّا!</strong>",
          ],
          tip: {
            label: "Be charming, not cold",
            body: "Haggling in Khan el-Khalili works best with a <em>smile</em> and a little patience. Accepting the offered tea (<em>shāy</em>) is normal and doesn't obligate you to buy. The relationship is half the transaction.",
          },
        },
        {
          type: "vocab",
          heading: "Souq & souvenir vocabulary",
          items: [
            { l1: "السّوق", en: "the market / souq", note: "as-sūq (m. or f.), pl. aswāq." },
            { l1: "التِّذْكار", en: "souvenir", note: "at-tidhkār (m.), pl. tadhākīr." },
            { l1: "الهَدِيّة", en: "gift", note: "al-hadiyya (f.), pl. hadāyā." },
            { l1: "البائِع", en: "the vendor / seller", note: "al-bāʾiʿ (m.) / al-bāʾiʿa (f.)." },
            { l1: "أَتَفَرَّج فَقَط", en: "I'm just looking", note: "atafarraj faqaṭ — polite browsing." },
            { l1: "يَدَوِيّ", en: "handmade", note: "yadawī (m.) / yadawiyya (f.)." },
            { l1: "نُحاس", en: "brass / copper", note: "nuḥās (m.) — lamps, trays." },
            { l1: "فِضّة / ذَهَب", en: "silver / gold", note: "fiḍḍa (f.) / dhahab (m.)." },
            { l1: "عُطُور", en: "perfumes / perfume oils", note: "ʿuṭūr (pl. of ʿiṭr)." },
            { l1: "أُريد أَنْ أَشتَري", en: "I want to buy", note: "urīdu an ashtariya — verb ishtarā." },
          ],
        },
        {
          type: "dialogue",
          heading: "In the bazaar",
          setup: "A vendor waves you over to a stall of brass lamps.",
          lines: [
            { speaker: "البائِع (Vendor)", l1: "تَفَضَّلْ، شاهِدْ! أَجْمَل المَصابيح في خان الخَليلي.", en: "Come, take a look! The finest lamps in Khan el-Khalili." },
            { speaker: "You", l1: "شُكْرًا. أَتَفَرَّج فَقَط… هٰذا المِصباح، هَلْ يَدَوِيّ؟", en: "Thanks. I'm just looking… this lamp, is it handmade?" },
            { speaker: "البائِع (Vendor)", l1: "طَبْعًا، نُحاس يَدَوِيّ، صُنِعَ في مِصْر. بِمِئَتَيْن جُنَيْه.", en: "Of course, handmade brass, made in Egypt. Two hundred pounds." },
            { speaker: "You", l1: "مِئَتَيْن؟ غالي جِدًّا! أُريده هَدِيّة. آخِر سِعْر؟", en: "Two hundred? Very expensive! I want it as a gift. Last price?" },
            { speaker: "البائِع (Vendor)", l1: "لِأَنَّك ضَيْف، مِيَة وخَمْسِين.", en: "Because you're a guest, a hundred and fifty." },
            { speaker: "You", l1: "مُمْكِن خَصْم؟ مِيَة جُنَيْه.", en: "A discount? A hundred pounds." },
            { speaker: "البائِع (Vendor)", l1: "مِيَة وعِشْرين، ووافَقْنا.", en: "A hundred and twenty, and we have a deal." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Souq sense",
          questions: [
            {
              q: "Cairo's famous old bazaar is…",
              options: ["خان الخَليلي", "الأَزْهَر", "وَسْط البَلَد", "الزَّمالِك"],
              correct: 0,
              fb: "Khan el-Khalili is the historic market in Islamic Cairo.",
            },
            {
              q: "Politely saying 'I'm just looking' =",
              options: ["أُريد أَنْ أَشتَري", "أَتَفَرَّج فَقَط", "غالي جِدًّا", "أَيْنَ الباقي؟"],
              correct: 1,
              fb: "atafarraj faqaṭ keeps the vendor friendly without committing.",
            },
            {
              q: "'Handmade' =",
              options: ["رَخيص", "يَدَوِيّ", "جَديد", "كَبير"],
              correct: 1,
              fb: "yadawī = handmade; a key word for souvenir quality.",
            },
            {
              q: "'tidhkār' means…",
              options: ["receipt", "souvenir", "change", "discount"],
              correct: 1,
              fb: "tidhkār = souvenir; hadiyya = gift.",
            },
          ],
        },
      ],
    },
    {
      slug: "market-quantities",
      title: "kīlo, niṣf kīlo — quantities at the stall",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Buying by the kilo",
          body: [
            "At a fruit or spice stall, you buy by weight. The unit is the <strong>كيلو</strong> (<em>kīlo</em>, kilogram). Half a kilo = <strong>نِصْف كيلو</strong> (<em>niṣf kīlo</em>); a quarter = <strong>رُبْع كيلو</strong> (<em>rubʿ kīlo</em>).",
            "The command you'll use most is <strong>أَعْطِني…</strong> (<em>aʿṭinī…</em>) = \"give me…\" — from the verb <em>aʿṭā</em> (to give). Pair it with a quantity: <strong>أَعْطِني كيلو طَماطِم</strong> = \"give me a kilo of tomatoes.\"",
            "Notice there's no \"of\" — Arabic just stacks the quantity before the noun: <em>kīlo ṭamāṭim</em> (a-kilo tomatoes), <em>niṣf kīlo tuffāḥ</em> (half-a-kilo apples). Clean and direct.",
            "Other handy measures: <strong>عُلْبة</strong> (<em>ʿulba</em>) = a box/can, <strong>كيس</strong> (<em>kīs</em>) = a bag, <strong>زُجاجة</strong> (<em>zujāja</em>) = a bottle, <strong>دَزّينة</strong> (<em>dazzīna</em>) = a dozen.",
          ],
          keyPoint:
            "aʿṭinī… = give me… kīlo / niṣf kīlo / rubʿ kīlo = kilo / half / quarter. No 'of': kīlo ṭamāṭim = a kilo of tomatoes.",
        },
        {
          type: "vocab",
          heading: "Quantities & produce",
          items: [
            { l1: "أَعْطِني", en: "give me", note: "aʿṭinī (to a man) / aʿṭīnī (to a woman); verb aʿṭā." },
            { l1: "كيلو", en: "a kilogram", note: "kīlo (m.), pl. kīlowāt." },
            { l1: "نِصْف كيلو", en: "half a kilo", note: "niṣf kīlo — niṣf = half." },
            { l1: "رُبْع كيلو", en: "a quarter kilo", note: "rubʿ kīlo — rubʿ = quarter." },
            { l1: "كيس", en: "a bag", note: "kīs (m.), pl. akyās." },
            { l1: "عُلْبة", en: "a box / a can", note: "ʿulba (f.), pl. ʿulab." },
            { l1: "طَماطِم", en: "tomatoes", note: "ṭamāṭim (collective)." },
            { l1: "تُفّاح", en: "apples", note: "tuffāḥ (collective); one apple = tuffāḥa." },
            { l1: "بُرْتُقال", en: "oranges", note: "burtuqāl (collective)." },
            { l1: "بَصَل", en: "onions", note: "baṣal (collective)." },
            { l1: "خُبْز", en: "bread", note: "khubz (m.) — Egyptian flatbread: ʿaysh." },
            { l1: "كَفى / يَكْفي", en: "enough / that's enough", note: "kafā / yakfī — to stop the scale." },
          ],
        },
        {
          type: "dialogue",
          heading: "At the fruit stall",
          setup: "You stop at a stall piled with produce.",
          lines: [
            { speaker: "You", l1: "أَعْطِني كيلو طَماطِم، مِنْ فَضْلِك.", en: "Give me a kilo of tomatoes, please." },
            { speaker: "البائِع (Vendor)", l1: "حاضِر. أَيّ شَيء آخَر؟", en: "Right away. Anything else?" },
            { speaker: "You", l1: "نَعَم، نِصْف كيلو تُفّاح وكيس بُرْتُقال.", en: "Yes, half a kilo of apples and a bag of oranges." },
            { speaker: "البائِع (Vendor)", l1: "البُرْتُقال طازَج اليَوْم. هٰذا يَكْفي؟", en: "The oranges are fresh today. Is this enough?" },
            { speaker: "You", l1: "كَفى، شُكْرًا. بِكَمِ الحِساب؟", en: "That's enough, thanks. How much is the total?" },
            { speaker: "البائِع (Vendor)", l1: "أَرْبَعِين جُنَيْه كُلّ شَيء.", en: "Forty pounds for everything." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Quantity fill",
          items: [
            {
              template: "___ كيلو طَماطِم، مِنْ فَضْلِك.",
              answer: "أَعْطِني",
              en: "Give me a kilo of tomatoes, please.",
              options: ["أَعْطِني", "أَيْنَ", "بِكَمْ", "غالي"],
            },
            {
              template: "أُريد ___ كيلو تُفّاح فَقَط.",
              answer: "نِصْف",
              en: "I want just half a kilo of apples.",
              options: ["نِصْف", "كيس", "غالي", "إيصال"],
            },
            {
              template: "أَعْطِني ___ بُرْتُقال.",
              answer: "كيس",
              en: "Give me a bag of oranges.",
              options: ["كيس", "رُبْع", "آخِر", "الباقي"],
            },
            {
              template: "هٰذا ___ ، شُكْرًا.",
              answer: "يَكْفي",
              en: "That's enough, thanks.",
              options: ["يَكْفي", "غالي", "كيلو", "بائِع"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Give me half a kilo of tomatoes and a bag of oranges, please.",
          reference: "أَعْطِني نِصْف كيلو طَماطِم وكيس بُرْتُقال، مِنْ فَضْلِك.",
          hint: "aʿṭinī + niṣf kīlo ṭamāṭim; note there's no 'of' — just stack quantity then noun.",
        },
      ],
    },
    {
      slug: "market-ghali-rakhis",
      title: "ghālī vs rakhīṣ — describing goods",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Expensive, cheap, and everything between",
          body: [
            "The two anchor adjectives of any market are <strong>غالي</strong> (<em>ghālī</em>, expensive) and <strong>رَخيص</strong> (<em>rakhīṣ</em>, cheap). Adjectives in Arabic <em>follow</em> the noun and agree with it: <em>siʿr ghālī</em> (an expensive price), <em>biḍāʿa rakhīṣa</em> (cheap goods — feminine).",
            "To describe quality you'll also want <strong>جَيِّد / مُمتاز</strong> (<em>jayyid / mumtāz</em>) = good / excellent, <strong>طازَج</strong> (<em>ṭāzaj</em>) = fresh, and <strong>قَديم / جَديد</strong> (<em>qadīm / jadīd</em>) = old / new.",
            "A vendor defends a price with <strong>الجَوْدة عالِية</strong> (<em>al-jawda ʿāliya</em>, \"the quality is high\"). You push back with <strong>في السّوق أَرْخَص</strong> (<em>fī s-sūq arkhaṣ</em>, \"it's cheaper in the market\") — <em>arkhaṣ</em> is the comparative \"cheaper.\"",
            "Comparatives are easy: <strong>أَغْلى</strong> (<em>aghlā</em>) = more expensive, <strong>أَرْخَص</strong> (<em>arkhaṣ</em>) = cheaper, <strong>أَفْضَل</strong> (<em>afḍal</em>) = better.",
          ],
          keyPoint:
            "ghālī = expensive, rakhīṣ = cheap. Adjective follows & agrees with the noun. Comparatives: aghlā (pricier), arkhaṣ (cheaper).",
        },
        {
          type: "vocab",
          heading: "Describing goods",
          items: [
            { l1: "غالي", en: "expensive", note: "ghālī (m.) / ghāliya (f.)." },
            { l1: "رَخيص", en: "cheap", note: "rakhīṣ (m.) / rakhīṣa (f.)." },
            { l1: "جَيِّد", en: "good", note: "jayyid (m.) / jayyida (f.)." },
            { l1: "مُمتاز", en: "excellent", note: "mumtāz (m.) / mumtāza (f.)." },
            { l1: "طازَج", en: "fresh", note: "ṭāzaj (m.) / ṭāzaja (f.) — for produce." },
            { l1: "قَديم", en: "old", note: "qadīm (m.) / qadīma (f.)." },
            { l1: "جَديد", en: "new", note: "jadīd (m.) / jadīda (f.)." },
            { l1: "البِضاعة", en: "the goods / merchandise", note: "al-biḍāʿa (f.), pl. baḍāʾiʿ." },
            { l1: "الجَوْدة", en: "the quality", note: "al-jawda (f.)." },
            { l1: "أَرْخَص", en: "cheaper", note: "arkhaṣ — comparative of rakhīṣ." },
            { l1: "أَغْلى", en: "more expensive", note: "aghlā — comparative of ghālī." },
            { l1: "أَفْضَل", en: "better / best", note: "afḍal — comparative." },
          ],
        },
        {
          type: "dialogue",
          heading: "Quality talk over spices",
          setup: "You're comparing two bags of saffron at a spice stall.",
          lines: [
            { speaker: "You", l1: "هٰذا الزَّعْفَران غالي. السِّعْر مُرْتَفِع جِدًّا.", en: "This saffron is expensive. The price is very high." },
            { speaker: "البائِع (Vendor)", l1: "لٰكِنَّ الجَوْدة عالِية، وهُوَ طازَج ومُمتاز.", en: "But the quality is high, and it's fresh and excellent." },
            { speaker: "You", l1: "في السّوق أَرْخَص. عِنْدي سِعْر أَفْضَل أَمْس.", en: "It's cheaper in the market. I had a better price yesterday." },
            { speaker: "البائِع (Vendor)", l1: "حَسَنًا، البِضاعة عِنْدي أَفْضَل. لَكِ خَصْم صَغير.", en: "Alright, my goods are better. A small discount for you." },
            { speaker: "You", l1: "مُمتاز. هٰذا أَرْخَص وجَيِّد. أَشتَريه.", en: "Excellent. This is cheaper and good. I'll buy it." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Cheap or pricey?",
          questions: [
            {
              q: "'Cheap' (feminine, for biḍāʿa) =",
              options: ["رَخيص", "رَخيصة", "غالي", "غالية"],
              correct: 1,
              fb: "al-biḍāʿa is feminine → rakhīṣa.",
            },
            {
              q: "'Cheaper' (comparative) =",
              options: ["أَغْلى", "أَرْخَص", "أَفْضَل", "رَخيص"],
              correct: 1,
              fb: "arkhaṣ = cheaper; aghlā = more expensive.",
            },
            {
              q: "'Fresh' (for produce) =",
              options: ["قَديم", "غالي", "طازَج", "جَديد"],
              correct: 2,
              fb: "ṭāzaj = fresh.",
            },
            {
              q: "A vendor justifying a high price would say…",
              options: ["البِضاعة قَديمة", "الجَوْدة عالِية", "هٰذا غالي عَلَيَّ", "أَيْنَ الباقي؟"],
              correct: 1,
              fb: "al-jawda ʿāliya = 'the quality is high' — the classic defense.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "This is expensive. It's cheaper in the market.",
          reference: "هٰذا غالي. في السّوق أَرْخَص.",
          hint: "ghālī = expensive; arkhaṣ = cheaper (comparative).",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'rakhīṣ' means…",
              options: ["expensive", "cheap", "fresh", "old"],
              correct: 1,
            },
            {
              q: "The comparative 'more expensive' =",
              options: ["أَرْخَص", "أَغْلى", "أَفْضَل", "طازَج"],
              correct: 1,
            },
            {
              q: "'al-jawda' means…",
              options: ["the price", "the quality", "the change", "the bag"],
              correct: 1,
            },
            {
              q: "'It's cheaper in the market' =",
              options: ["في السّوق أَرْخَص", "هٰذا غالي جِدًّا", "البِضاعة قَديمة", "أَعْطِني كيلو"],
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
        q: "Cairo's historic bazaar is called…",
        options: ["خان الخَليلي", "وَسْط البَلَد", "الزَّمالِك", "المُهَنْدِسين"],
        correct: 0,
      },
      {
        q: "'I'm just looking' =",
        options: ["أُريد أَنْ أَشتَري", "أَتَفَرَّج فَقَط", "أَيْنَ الباقي؟", "غالي جِدًّا"],
        correct: 1,
      },
      {
        q: "'Give me…' (the command) =",
        options: ["أَعْطِني", "أُريد", "بِكَمْ", "أَيْنَ"],
        correct: 0,
      },
      {
        q: "'Half a kilo' =",
        options: ["رُبْع كيلو", "نِصْف كيلو", "كيلو", "كيس"],
        correct: 1,
      },
      {
        q: "'A kilo of tomatoes' is correctly said…",
        options: ["كيلو مِنْ طَماطِم", "كيلو طَماطِم", "طَماطِم كيلو", "كيلو في طَماطِم"],
        correct: 1,
      },
      {
        q: "'Handmade' =",
        options: ["يَدَوِيّ", "طازَج", "قَديم", "رَخيص"],
        correct: 0,
      },
      {
        q: "'Fresh' (for produce) =",
        options: ["قَديم", "طازَج", "غالي", "جَيِّد"],
        correct: 1,
      },
      {
        q: "'Cheaper' (comparative) =",
        options: ["أَغْلى", "أَرْخَص", "أَفْضَل", "رَخيص"],
        correct: 1,
      },
      {
        q: "A vendor defending a price says…",
        options: ["البِضاعة رَخيصة", "الجَوْدة عالِية", "أَتَفَرَّج فَقَط", "أَيْنَ الباقي؟"],
        correct: 1,
      },
      {
        q: "'That's enough' (to stop the scale) =",
        options: ["يَكْفي", "أَعْطِني", "غالي", "كيس"],
        correct: 0,
      },
    ],
  },
};
