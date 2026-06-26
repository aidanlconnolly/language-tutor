import type { Unit } from "../../types";

export const UNIT_HELP: Unit = {
  slug: "help",
  stage: 3,
  order: 13,
  icon: "🆘",
  title: "Help & emergencies",
  tagline: "药店, 医院, 帮帮我 — and 110/120.",
  badge: "tourist",
  lessons: [
    {
      slug: "help-asking",
      title: "Asking for help",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Getting help fast",
          body: [
            "The quick call for help is <strong>帮帮我</strong> (bāngbang wǒ, \"help me\") — the doubled <em>帮帮</em> sounds urgent and natural. For routine favors, the softer <strong>能帮我一下吗？</strong> (\"could you help me?\") works.",
            "Two phrases save trips: <strong>我迷路了</strong> (wǒ mílù le, \"I'm lost\") and <strong>我的…丢了</strong> (wǒ de… diū le, \"my … is lost\").",
            "If your Chinese runs out, ask <strong>你会说英语吗？</strong> (nǐ huì shuō Yīngyǔ ma?, \"do you speak English?\").",
          ],
          keyPoint:
            "帮帮我 = help me. 我迷路了 = I'm lost. 我的…丢了 = my … is lost.",
        },
        {
          type: "vocab",
          heading: "Help vocab",
          items: [
            { l1: "帮帮我", en: "help me", note: "bāngbang wǒ" },
            { l1: "帮忙", en: "to help / do a favor", note: "bāngmáng" },
            { l1: "迷路", en: "to be lost", note: "mílù — 我迷路了 = I'm lost" },
            { l1: "丢了", en: "is lost / missing", note: "diū le" },
            { l1: "手机", en: "phone / mobile", note: "shǒujī" },
            { l1: "钱包", en: "wallet", note: "qiánbāo" },
            { l1: "护照", en: "passport", note: "hùzhào" },
            { l1: "警察", en: "police", note: "jǐngchá" },
            { l1: "你会说英语吗", en: "do you speak English?", note: "nǐ huì shuō Yīngyǔ ma" },
            { l1: "找", en: "to look for / find", note: "zhǎo" },
            { l1: "怎么办", en: "what should I do", note: "zěnme bàn" },
            { l1: "别担心", en: "don't worry", note: "bié dānxīn" },
          ],
        },
        {
          type: "dialogue",
          heading: "Lost wallet",
          setup: "You realize your wallet is gone and stop a passerby.",
          lines: [
            { speaker: "You", l1: "不好意思，能帮我一下吗？我的钱包丢了。", en: "Excuse me, could you help me? My wallet is lost." },
            { speaker: "Passerby", l1: "别担心。最后在哪儿见过？", en: "Don't worry. Where did you last see it?" },
            { speaker: "You", l1: "在地铁站。我迷路了，也找不到警察。", en: "At the metro station. I'm lost and can't find the police." },
            { speaker: "Passerby", l1: "前面有个派出所，我带你去。", en: "There's a police station up ahead — I'll take you there." },
            { speaker: "You", l1: "太感谢了！您会说英语吗？", en: "Thank you so much! Do you speak English?" },
            { speaker: "Passerby", l1: "一点点，没关系，慢慢说。", en: "A little — it's fine, speak slowly." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the call for help",
          items: [
            {
              template: "请___我一下！",
              answer: "帮",
              en: "Please help me!",
              options: ["帮", "找", "丢", "迷"],
            },
            {
              template: "我的手机___了。",
              answer: "丢",
              en: "My phone is lost.",
              options: ["丢", "帮", "找", "迷"],
            },
            {
              template: "我___路了，怎么办？",
              answer: "迷",
              en: "I'm lost, what should I do?",
              options: ["迷", "帮", "丢", "找"],
            },
            {
              template: "你会说___吗？",
              answer: "英语",
              en: "Do you speak English?",
              options: ["英语", "警察", "钱包", "护照"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "帮帮我 (bāngbang wǒ) means…",
              options: ["thank you", "help me", "I'm sorry", "where is it"],
              correct: 1,
            },
            {
              q: "我迷路了 (wǒ mílù le) means…",
              options: ["I'm tired", "I'm lost", "I'm late", "I'm hungry"],
              correct: 1,
            },
            {
              q: "'My passport is lost' =",
              options: ["我的护照丢了", "我的护照在这儿", "我要护照", "护照多少钱"],
              correct: 0,
            },
            {
              q: "别担心 (bié dānxīn) means…",
              options: ["hurry up", "don't worry", "look there", "speak slowly"],
              correct: 1,
              fb: "别 = don't, 担心 = worry — a reassuring 'don't worry'.",
            },
          ],
        },
      ],
    },
    {
      slug: "help-pharmacy",
      title: "At the pharmacy",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Feeling unwell",
          body: [
            "For minor ailments head to the <strong>药店</strong> (yàodiàn, pharmacy). To describe pain, name the body part + <strong>疼</strong> (téng, \"hurts\"): <em>我头疼</em> = I have a headache.",
            "Common complaints: <strong>感冒</strong> (gǎnmào, a cold), <strong>发烧</strong> (fāshāo, fever), <strong>拉肚子</strong> (lā dùzi, diarrhea). Then ask <strong>有…药吗？</strong> (yǒu… yào ma?, \"do you have … medicine?\").",
            "<em>药</em> (yào) means medicine; <em>感冒药</em> = cold medicine, <em>止疼药</em> = painkiller.",
          ],
          keyPoint:
            "[body part] 疼 = … hurts. 我头疼 = I have a headache. 有…药吗? = do you have … medicine?",
        },
        {
          type: "vocab",
          heading: "Pharmacy & illness vocab",
          items: [
            { l1: "药店", en: "pharmacy", note: "yàodiàn" },
            { l1: "药", en: "medicine", note: "yào" },
            { l1: "疼", en: "to hurt / ache", note: "téng" },
            { l1: "头疼", en: "headache", note: "tóu téng" },
            { l1: "肚子疼", en: "stomachache", note: "dùzi téng" },
            { l1: "嗓子疼", en: "sore throat", note: "sǎngzi téng" },
            { l1: "感冒", en: "a cold", note: "gǎnmào" },
            { l1: "发烧", en: "fever", note: "fāshāo" },
            { l1: "拉肚子", en: "diarrhea", note: "lā dùzi" },
            { l1: "过敏", en: "allergy / allergic", note: "guòmǐn" },
            { l1: "感冒药", en: "cold medicine", note: "gǎnmào yào" },
            { l1: "止疼药", en: "painkiller", note: "zhǐténg yào" },
          ],
        },
        {
          type: "dialogue",
          heading: "Asking the pharmacist",
          setup: "You walk into a pharmacy with a headache.",
          lines: [
            { speaker: "You", l1: "你好，我头疼，还有点发烧。", en: "Hi, I have a headache and a slight fever." },
            { speaker: "Pharmacist", l1: "感冒了吧？有没有别的症状？", en: "Probably a cold? Any other symptoms?" },
            { speaker: "You", l1: "嗓子也有点疼。有感冒药吗？", en: "My throat hurts a bit too. Do you have cold medicine?" },
            { speaker: "Pharmacist", l1: "有。对什么过敏吗？", en: "Yes. Are you allergic to anything?" },
            { speaker: "You", l1: "没有。一天吃几次？", en: "No. How many times a day do I take it?" },
            { speaker: "Pharmacist", l1: "一天三次，饭后吃。", en: "Three times a day, after meals." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          items: [
            { tokens: ["我", "头", "疼", "。"], en: "I have a headache." },
            { tokens: ["你", "有", "感冒", "药", "吗", "？"], en: "Do you have cold medicine?" },
            { tokens: ["我", "对", "青霉素", "过敏", "。"], en: "I'm allergic to penicillin." },
            { tokens: ["一", "天", "吃", "几", "次", "？"], en: "How many times a day do I take it?" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I have a stomachache. Do you have any medicine?",
          reference: "我肚子疼。有药吗？",
          hint: "肚子疼 = stomachache, 有…吗 = do you have…, 药 = medicine.",
        },
        {
          type: "tip",
          heading: "Pointing to where it hurts",
          body: "The pattern <strong>[body part] + 疼</strong> covers most aches: <em>头疼</em> (head), <em>肚子疼</em> (stomach), <em>嗓子疼</em> (throat), <em>牙疼</em> (tooth). If you don't know the word, just point and say <strong>这儿疼</strong> (zhèr téng, \"it hurts here\").",
          example: { l1: "这儿疼。", en: "It hurts here." },
        },
      ],
    },
    {
      slug: "help-emergencies",
      title: "Emergencies — 110 & 120",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The numbers that matter",
          body: [
            "Memorize two: <strong>110</strong> (yāo-yāo-líng) for <strong>警察</strong> (police), and <strong>120</strong> (yāo-èr-líng) for an <strong>救护车</strong> (jiùhùchē, ambulance).",
            "Note Chinese reads <em>1</em> as <strong>幺</strong> (yāo), not <em>yī</em>, when saying phone numbers — so 120 is \"yāo-èr-líng.\"",
            "In a real emergency, the core phrases are <strong>快叫救护车！</strong> (\"call an ambulance, quick!\") and <strong>有人受伤了</strong> (yǒu rén shòushāng le, \"someone is hurt\"). The nearest <strong>医院</strong> (yīyuàn, hospital) has an <em>急诊</em> (jízhěn, ER).",
          ],
          keyPoint:
            "110 = police, 120 = ambulance. 医院 = hospital, 急诊 = emergency room.",
        },
        {
          type: "vocab",
          heading: "Emergency vocab",
          items: [
            { l1: "警察", en: "police", note: "jǐngchá — call 110" },
            { l1: "救护车", en: "ambulance", note: "jiùhùchē — call 120" },
            { l1: "医院", en: "hospital", note: "yīyuàn" },
            { l1: "急诊", en: "emergency room / ER", note: "jízhěn" },
            { l1: "医生", en: "doctor", note: "yīshēng" },
            { l1: "受伤", en: "to be injured / hurt", note: "shòushāng" },
            { l1: "快", en: "quick / fast", note: "kuài" },
            { l1: "叫", en: "to call / summon", note: "jiào" },
            { l1: "出事了", en: "something happened / there's an accident", note: "chū shì le" },
            { l1: "着火了", en: "there's a fire", note: "zháo huǒ le" },
            { l1: "危险", en: "danger / dangerous", note: "wēixiǎn" },
            { l1: "救命", en: "help! (life-threatening)", note: "jiùmìng" },
          ],
        },
        {
          type: "dialogue",
          heading: "Calling 120",
          setup: "Someone collapsed on the street and you call for an ambulance.",
          lines: [
            { speaker: "Operator", l1: "120，请讲。", en: "120, go ahead." },
            { speaker: "You", l1: "有人受伤了，快叫救护车！", en: "Someone is hurt — please send an ambulance, quick!" },
            { speaker: "Operator", l1: "你们在哪儿？", en: "Where are you?" },
            { speaker: "You", l1: "在王府井大街，地铁站门口。", en: "On Wangfujing Street, by the metro station entrance." },
            { speaker: "Operator", l1: "好，救护车马上到。他还有意识吗？", en: "Okay, the ambulance is on its way. Is he still conscious?" },
            { speaker: "You", l1: "有，但是头疼得很厉害。", en: "Yes, but his head hurts very badly." },
          ],
        },
        {
          type: "listen",
          heading: "What did they say?",
          intro: "Listen, then pick the closest meaning.",
          items: [
            { l1: "快叫救护车！", en: "Quick, call an ambulance!", options: ["Quick, call an ambulance!", "Call the police", "There's a fire", "I'm lost"], correct: 0 },
            { l1: "有人受伤了。", en: "Someone is hurt.", options: ["Someone is lost", "Someone is hurt", "Someone is here", "Nobody is hurt"], correct: 1 },
            { l1: "医院在哪儿？", en: "Where is the hospital?", options: ["Where is the hospital?", "Where is the police?", "Where is the pharmacy?", "Where is the exit?"], correct: 0 },
            { l1: "着火了！", en: "There's a fire!", options: ["There's a fire!", "Call a taxi!", "It's dangerous here", "Help me up"], correct: 0 },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Someone is hurt. Please call an ambulance, quick!",
          reference: "有人受伤了。快叫救护车！",
          hint: "有人受伤了 = someone is hurt, 快 = quick, 叫 = call, 救护车 = ambulance.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which number do you call for the police?",
              options: ["120", "110", "119", "114"],
              correct: 1,
            },
            {
              q: "救护车 (jiùhùchē) means…",
              options: ["police car", "ambulance", "fire truck", "taxi"],
              correct: 1,
            },
            {
              q: "医院 (yīyuàn) means…",
              options: ["pharmacy", "hospital", "police station", "clinic key"],
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
        q: "帮帮我 (bāngbang wǒ) means…",
        options: ["help me", "thank you", "I'm lost", "where is it"],
        correct: 0,
      },
      {
        q: "'I'm lost' =",
        options: ["我迷路了", "我头疼", "我丢了", "我累了"],
        correct: 0,
      },
      {
        q: "'My wallet is lost' =",
        options: ["我的钱包丢了", "我要钱包", "钱包在这儿", "钱包多少钱"],
        correct: 0,
      },
      {
        q: "药店 (yàodiàn) is a…",
        options: ["hospital", "pharmacy", "police station", "hotel"],
        correct: 1,
      },
      {
        q: "'I have a headache' =",
        options: ["我头疼", "我肚子疼", "我感冒了", "我发烧"],
        correct: 0,
      },
      {
        q: "Which number is for an ambulance?",
        options: ["110", "120", "119", "112"],
        correct: 1,
      },
      {
        q: "医院 (yīyuàn) means…",
        options: ["pharmacy", "hospital", "police", "clinic"],
        correct: 1,
      },
      {
        q: "受伤 (shòushāng) means…",
        options: ["to be lost", "to be injured", "to be tired", "to be late"],
        correct: 1,
      },
      {
        q: "发烧 (fāshāo) means…",
        options: ["a cold", "a fever", "diarrhea", "an allergy"],
        correct: 1,
      },
      {
        q: "Translate: 'Do you have cold medicine?'",
        options: ["有感冒药吗？", "我头疼", "药店在哪儿？", "快叫医生！"],
        correct: 0,
      },
    ],
  },
};
