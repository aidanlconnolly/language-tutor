import type { Unit } from "../../types";

export const UNIT_SHOPPING: Unit = {
  slug: "shopping",
  stage: 6,
  order: 25,
  icon: "🛍️",
  title: "Money & shopping",
  tagline: "多少钱, 块, sizes, WeChat & Alipay.",
  badge: "tourist",
  lessons: [
    {
      slug: "shopping-how-much",
      title: "多少钱? — asking the price",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "块, 元, and pointing at things",
          body: [
            "The everyday word for money in China is <strong>钱 (qián)</strong>. To ask a price you say <strong>多少钱? (duōshao qián?)</strong> — literally \"how much money?\"",
            "The yuan has two names. <strong>元 (yuán)</strong> is the formal, written form you see on price tags and receipts; <strong>块 (kuài)</strong> is what everyone actually <em>says</em> out loud. ¥35 is written 35元 but spoken <em>三十五块 (sānshíwǔ kuài)</em>.",
            "To point things out, use <strong>这个 (zhège)</strong> = \"this one\" and <strong>那个 (nàge)</strong> = \"that one.\" At a stall you can simply say <em>这个多少钱? (How much is this one?)</em> while pointing.",
          ],
          keyPoint:
            "多少钱? = how much? 块 (spoken) = 元 (written) = yuan. 这个 = this one, 那个 = that one.",
        },
        {
          type: "vocab",
          heading: "Money & price words",
          items: [
            { l1: "钱", en: "money", note: "qián" },
            { l1: "多少钱?", en: "how much (money)?", note: "duōshao qián?" },
            { l1: "块", en: "kuai (spoken yuan)", note: "kuài — what you say out loud" },
            { l1: "元", en: "yuan (written/formal)", note: "yuán — on tags & receipts" },
            { l1: "毛", en: "10 cents (spoken)", note: "máo — written 角 jiǎo" },
            { l1: "这个", en: "this one", note: "zhège" },
            { l1: "那个", en: "that one", note: "nàge" },
            { l1: "贵", en: "expensive", note: "guì" },
            { l1: "便宜", en: "cheap", note: "piányi" },
            { l1: "一共", en: "in total / altogether", note: "yígòng" },
          ],
        },
        {
          type: "tip",
          heading: "块 vs 元 vs 毛",
          body: "On a tag you'll see <strong>¥18.50</strong> or <strong>18.5元</strong>. Out loud people say <em>十八块五 (shíbā kuài wǔ)</em> — they drop 毛 at the end. If the price is round, like ¥20, you'll hear <em>二十块</em> (or even just <em>二十</em>). Saying 元 out loud sounds stiff, like reading a legal document.",
          example: { l1: "一共三十五块。", en: "Thirty-five yuan in total." },
        },
        {
          type: "dialogue",
          heading: "At a souvenir stall near 天安门",
          setup: "You point at a small silk scarf at a tourist stall.",
          lines: [
            { speaker: "You", l1: "你好，这个多少钱?", en: "Hi, how much is this one?" },
            { speaker: "摊主 (Vendor)", l1: "这个八十块。", en: "This one is eighty yuan." },
            { speaker: "You", l1: "那个呢?", en: "And that one?" },
            { speaker: "摊主 (Vendor)", l1: "那个一百二。", en: "That one is one hundred twenty." },
            { speaker: "You", l1: "我要这个。一共多少钱?", en: "I'll take this one. How much altogether?" },
            { speaker: "摊主 (Vendor)", l1: "一共八十块。", en: "Eighty yuan in total." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Price talk",
          questions: [
            {
              q: "How do you ask 'How much is this one?'",
              options: ["这个什么?", "这个多少钱?", "那个多少?", "多少这个钱?"],
              correct: 1,
            },
            {
              q: "¥35 is normally spoken as…",
              options: ["三十五元", "三十五毛", "三十五块", "三十五钱"],
              correct: 2,
            },
            {
              q: "便宜 means…",
              options: ["expensive", "cheap", "total", "money"],
              correct: 1,
            },
            {
              q: "Which word do you SAY out loud for yuan?",
              options: ["元", "块", "钱", "毛"],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "How much is that one? I'll take this one.",
          reference: "那个多少钱? 我要这个。",
          hint: "那个 = that one, 这个 = this one. 我要… = I want / I'll take…",
        },
      ],
    },
    {
      slug: "shopping-clothes-sizes",
      title: "Clothes & sizes — 可以试试吗?",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Trying things on",
          body: [
            "To ask to try something on, say <strong>可以试试吗? (kěyǐ shìshi ma?)</strong> = \"Can I try it on?\" Doubling the verb 试 → 试试 softens it to \"give it a try.\"",
            "Sizes use <strong>号 (hào)</strong>, literally \"number.\" You'll hear <strong>大号 (dà hào)</strong> = large, <strong>中号 (zhōng hào)</strong> = medium, <strong>小号 (xiǎo hào)</strong> = small. Letters S / M / L are also widely understood in big-city shops.",
            "Quick judgments: <strong>大 (dà)</strong> = big, <strong>小 (xiǎo)</strong> = small, <strong>合适 (héshì)</strong> = it fits / suitable.",
          ],
          keyPoint:
            "可以试试吗? = Can I try it on? 大/中/小号 = large/medium/small. 合适 = it fits.",
        },
        {
          type: "vocab",
          heading: "Clothes & fitting words",
          items: [
            { l1: "衣服", en: "clothes", note: "yīfu" },
            { l1: "试", en: "to try (on)", note: "shì — doubled: 试试" },
            { l1: "可以试试吗?", en: "Can I try it on?", note: "kěyǐ shìshi ma?" },
            { l1: "号", en: "size (number)", note: "hào" },
            { l1: "大号 / 中号 / 小号", en: "large / medium / small", note: "dà / zhōng / xiǎo hào" },
            { l1: "大", en: "big", note: "dà" },
            { l1: "小", en: "small", note: "xiǎo" },
            { l1: "合适", en: "fits / suitable", note: "héshì" },
            { l1: "颜色", en: "color", note: "yánsè" },
            { l1: "别的", en: "another / a different one", note: "biéde" },
          ],
        },
        {
          type: "vocab",
          heading: "Common items & colors",
          items: [
            { l1: "T恤", en: "T-shirt", note: "T-xù" },
            { l1: "裤子", en: "pants / trousers", note: "kùzi" },
            { l1: "裙子", en: "skirt / dress", note: "qúnzi" },
            { l1: "鞋", en: "shoes", note: "xié" },
            { l1: "外套", en: "coat / jacket", note: "wàitào" },
            { l1: "红色", en: "red", note: "hóngsè" },
            { l1: "黑色", en: "black", note: "hēisè" },
            { l1: "白色", en: "white", note: "báisè" },
            { l1: "蓝色", en: "blue", note: "lánsè" },
          ],
        },
        {
          type: "dialogue",
          heading: "In a clothes shop in 王府井",
          setup: "You found a jacket you like on the rack.",
          lines: [
            { speaker: "You", l1: "你好，这件外套可以试试吗?", en: "Hi, can I try on this jacket?" },
            { speaker: "店员 (Clerk)", l1: "可以。您穿多大号?", en: "Sure. What size do you wear?" },
            { speaker: "You", l1: "我要中号。", en: "I want a medium." },
            { speaker: "店员 (Clerk)", l1: "给您。试衣间在那边。", en: "Here you go. The fitting room is over there." },
            { speaker: "You", l1: "有点小。有大号吗?", en: "It's a bit small. Do you have a large?" },
            { speaker: "店员 (Clerk)", l1: "有，给您换一件。", en: "Yes, let me swap it for you." },
            { speaker: "You", l1: "这个很合适。有别的颜色吗?", en: "This one fits well. Do you have other colors?" },
            { speaker: "店员 (Clerk)", l1: "有黑色和蓝色。", en: "We have black and blue." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Fitting-room fill",
          items: [
            {
              template: "这件衣服可以 ___ 吗?",
              answer: "试试",
              en: "Can I try on this piece of clothing?",
              options: ["试试", "买买", "看看", "穿穿"],
            },
            {
              template: "我要 ___ 号。(medium)",
              answer: "中",
              en: "I want a medium.",
              options: ["大", "中", "小", "多"],
            },
            {
              template: "有点小，有 ___ 号吗?",
              answer: "大",
              en: "It's a bit small, do you have a large?",
              options: ["大", "小", "中", "块"],
            },
            {
              template: "有别的 ___ 吗? (color)",
              answer: "颜色",
              en: "Do you have other colors?",
              options: ["颜色", "号", "钱", "衣服"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Can I try this on? Do you have a large?",
          reference: "这个可以试试吗? 有大号吗?",
          hint: "可以试试吗? = Can I try it on? 有…吗? = Do you have…? 大号 = large.",
        },
      ],
    },
    {
      slug: "shopping-paying",
      title: "Paying — 微信, 支付宝, 现金",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "China is a scan-to-pay country",
          body: [
            "In China almost everything is paid by <strong>扫码 (sǎo mǎ)</strong> — \"scanning the QR code\" — with <strong>微信 (Wēixìn / WeChat)</strong> or <strong>支付宝 (Zhīfùbǎo / Alipay)</strong>. You open the app, scan the merchant's code (or show your own), and pay.",
            "Cash, <strong>现金 (xiànjīn)</strong>, still works and merchants must accept it by law, but small shops may struggle to make change. <strong>找钱 (zhǎo qián)</strong> means \"to give change.\"",
            "The clerk will often ask <strong>微信还是支付宝? (Wēixìn háishì Zhīfùbǎo?)</strong> = \"WeChat or Alipay?\" You can answer with either, or say <em>现金 (cash)</em>.",
          ],
          keyPoint:
            "扫码 = scan the QR code. 微信 / 支付宝 = WeChat / Alipay. 现金 = cash. 找钱 = give change.",
        },
        {
          type: "vocab",
          heading: "Paying vocabulary",
          items: [
            { l1: "付钱 / 付款", en: "to pay", note: "fù qián / fù kuǎn" },
            { l1: "扫码", en: "to scan the QR code", note: "sǎo mǎ" },
            { l1: "二维码", en: "QR code", note: "èrwéimǎ" },
            { l1: "微信", en: "WeChat", note: "Wēixìn" },
            { l1: "支付宝", en: "Alipay", note: "Zhīfùbǎo" },
            { l1: "现金", en: "cash", note: "xiànjīn" },
            { l1: "找钱", en: "to give change", note: "zhǎo qián" },
            { l1: "还是", en: "or (in questions)", note: "háishì" },
            { l1: "刷卡", en: "to swipe a card", note: "shuā kǎ" },
            { l1: "发票", en: "(official) receipt / invoice", note: "fāpiào" },
          ],
        },
        {
          type: "tip",
          heading: "扫码: who scans whom?",
          body: "There are two directions. At a big shop the clerk scans <em>your</em> phone's payment code — you open 微信 or 支付宝, tap \"付款 (pay),\" and show the barcode. At small stalls there's a printed QR code taped to the counter — <em>you</em> scan <strong>it</strong>, type the amount, and hit pay. Tourists can now link a foreign card inside Alipay/WeChat, so you don't need a Chinese bank account.",
        },
        {
          type: "dialogue",
          heading: "Paying at a bakery",
          setup: "You're at the register with a bag of 面包 (bread).",
          lines: [
            { speaker: "收银员 (Cashier)", l1: "一共二十三块五。", en: "Twenty-three yuan fifty in total." },
            { speaker: "You", l1: "可以扫码吗?", en: "Can I pay by scanning?" },
            { speaker: "收银员 (Cashier)", l1: "可以。微信还是支付宝?", en: "Sure. WeChat or Alipay?" },
            { speaker: "You", l1: "支付宝。", en: "Alipay." },
            { speaker: "收银员 (Cashier)", l1: "请出示付款码。", en: "Please show your payment code." },
            { speaker: "You", l1: "好。诶，可以用现金吗?", en: "Okay. Hey, can I use cash instead?" },
            { speaker: "收银员 (Cashier)", l1: "可以，给您找钱。", en: "Sure, here's your change." },
            { speaker: "You", l1: "谢谢，可以给我发票吗?", en: "Thanks, can I have a receipt?" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Checkout fill",
          items: [
            {
              template: "可以 ___ 吗? (scan to pay)",
              answer: "扫码",
              en: "Can I pay by scanning?",
              options: ["扫码", "找钱", "试试", "刷卡"],
            },
            {
              template: "微信 ___ 支付宝?",
              answer: "还是",
              en: "WeChat or Alipay?",
              options: ["还是", "一共", "可以", "还有"],
            },
            {
              template: "我想用 ___ 。(cash)",
              answer: "现金",
              en: "I'd like to use cash.",
              options: ["现金", "发票", "二维码", "找钱"],
            },
            {
              template: "请给我 ___ 。(receipt)",
              answer: "发票",
              en: "Please give me a receipt.",
              options: ["发票", "现金", "扫码", "找钱"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Tap the words into the correct order.",
          items: [
            { tokens: ["可以", "扫码", "吗"], en: "Can I pay by scanning?" },
            { tokens: ["微信", "还是", "支付宝"], en: "WeChat or Alipay?" },
            { tokens: ["我", "想", "用", "现金"], en: "I'd like to use cash." },
            { tokens: ["可以", "给", "我", "发票", "吗"], en: "Can I have a receipt?" },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'To scan the QR code (to pay)' =",
              options: ["找钱", "扫码", "刷卡", "付款"],
              correct: 1,
            },
            {
              q: "The clerk asks '微信还是支付宝?' — they're asking…",
              options: ["cash or card?", "WeChat or Alipay?", "big or small?", "this or that?"],
              correct: 1,
            },
            {
              q: "'现金' means…",
              options: ["change", "cash", "receipt", "QR code"],
              correct: 1,
            },
            {
              q: "'找钱' means…",
              options: ["to pay", "to give change", "to scan", "to swipe a card"],
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
        q: "'How much is this one?' =",
        options: ["这个什么?", "这个多少钱?", "那个多少?", "多少这个?"],
        correct: 1,
      },
      {
        q: "¥35 is normally SPOKEN as…",
        options: ["三十五元", "三十五块", "三十五毛", "三十五钱"],
        correct: 1,
      },
      {
        q: "这个 / 那个 mean…",
        options: ["big / small", "this one / that one", "cheap / expensive", "cash / card"],
        correct: 1,
      },
      {
        q: "'Can I try it on?' =",
        options: ["可以买吗?", "可以试试吗?", "可以看看吗?", "可以扫码吗?"],
        correct: 1,
      },
      {
        q: "大号 / 中号 / 小号 =",
        options: [
          "this / that / other",
          "large / medium / small",
          "red / black / white",
          "expensive / cheap / fits",
        ],
        correct: 1,
      },
      {
        q: "合适 means…",
        options: ["expensive", "it fits / suitable", "another one", "color"],
        correct: 1,
      },
      {
        q: "The everyday way to pay in China is…",
        options: ["现金 only", "扫码 (scan a QR code)", "刷卡 only", "找钱"],
        correct: 1,
      },
      {
        q: "'微信还是支付宝?' asks…",
        options: ["cash or card?", "WeChat or Alipay?", "big or small?", "now or later?"],
        correct: 1,
      },
      {
        q: "'现金' =",
        options: ["change", "cash", "receipt", "discount"],
        correct: 1,
      },
      {
        q: "Translate: 'Can I pay by scanning? Alipay.'",
        options: [
          "可以试试吗? 支付宝。",
          "可以扫码吗? 支付宝。",
          "可以找钱吗? 微信。",
          "多少钱? 现金。",
        ],
        correct: 1,
      },
    ],
  },
};
