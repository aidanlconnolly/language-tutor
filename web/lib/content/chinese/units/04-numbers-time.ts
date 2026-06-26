import type { Unit } from "../../types";

export const UNIT_NUMBERS_TIME: Unit = {
  slug: "numbers-time",
  stage: 1,
  order: 4,
  icon: "🔢",
  title: "Numbers & time",
  tagline: "0–10000, dates, telling time, and 块 for money.",
  badge: "core",
  lessons: [
    {
      slug: "numbers-time-counting",
      title: "Counting 0 to 10,000",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Chinese numbers are beautifully regular",
          body: [
            "Learn 0–10 and the rest builds like Lego. <strong>11</strong> is 十一 (ten-one), <strong>20</strong> is 二十 (two-ten), <strong>35</strong> is 三十五 (three-ten-five). No irregular forms like 'eleven' or 'twelve'.",
            "The big units: <strong>百 (bǎi)</strong> = hundred, <strong>千 (qiān)</strong> = thousand, <strong>万 (wàn)</strong> = ten-thousand. So 200 = 两百, 1,000 = 一千, 10,000 = 一万.",
            "One quirk: 二 (èr) and 两 (liǎng) both mean 'two'. Use <strong>二</strong> when counting or reading digits (二十, twenty), but <strong>两</strong> before a measure word or unit like 百, 千: <em>两个</em> (two of something), <em>两百</em> (two hundred).",
          ],
          keyPoint:
            "Numbers stack: 三十五 = 3-10-5 = 35. 二 for counting digits; 两 before measure words and 百/千/万.",
        },
        {
          type: "vocab",
          heading: "0 through 10",
          items: [
            { l1: "零", en: "zero", note: "pīnyīn: líng" },
            { l1: "一", en: "one", note: "pīnyīn: yī" },
            { l1: "二", en: "two", note: "pīnyīn: èr" },
            { l1: "三", en: "three", note: "pīnyīn: sān" },
            { l1: "四", en: "four", note: "pīnyīn: sì" },
            { l1: "五", en: "five", note: "pīnyīn: wǔ" },
            { l1: "六", en: "six", note: "pīnyīn: liù" },
            { l1: "七", en: "seven", note: "pīnyīn: qī" },
            { l1: "八", en: "eight", note: "pīnyīn: bā" },
            { l1: "九", en: "nine", note: "pīnyīn: jiǔ" },
            { l1: "十", en: "ten", note: "pīnyīn: shí" },
          ],
        },
        {
          type: "vocab",
          heading: "Building bigger numbers",
          intro: "Read each one as its parts stacked together.",
          items: [
            { l1: "十五", en: "fifteen", note: "pīnyīn: shíwǔ; ten-five" },
            { l1: "二十", en: "twenty", note: "pīnyīn: èrshí; two-ten" },
            { l1: "三十五", en: "thirty-five", note: "pīnyīn: sānshíwǔ; three-ten-five" },
            { l1: "一百", en: "one hundred", note: "pīnyīn: yìbǎi" },
            { l1: "两百", en: "two hundred", note: "pīnyīn: liǎngbǎi; 两 not 二 before 百" },
            { l1: "一千", en: "one thousand", note: "pīnyīn: yìqiān" },
            { l1: "一万", en: "ten thousand", note: "pīnyīn: yíwàn" },
          ],
        },
        {
          type: "tip",
          heading: "二 or 两?",
          body: "Both mean 'two'. Use <strong>二 (èr)</strong> for reading off digits and in tens (二十 = twenty, 十二 = twelve). Use <strong>两 (liǎng)</strong> right before a measure word or a big unit: <em>两个人</em> (two people), <em>两杯茶</em> (two cups of tea), <em>两百</em> (two hundred).",
          example: { l1: "两个人喝两杯茶。", en: "Two people drink two cups of tea." },
        },
        {
          type: "multipleChoice",
          heading: "Read the numbers",
          questions: [
            {
              q: "三十五 is…",
              options: ["305", "35", "53", "350"],
              correct: 1,
              fb: "三十五 = three-ten-five = 35.",
            },
            {
              q: "Which is correct for 'two people'?",
              options: ["二个人", "两个人", "二人个", "两人二"],
              correct: 1,
              fb: "Before a measure word (个) you use 两, not 二.",
            },
            {
              q: "万 means…",
              options: ["hundred", "thousand", "ten thousand", "million"],
              correct: 2,
              fb: "万 (wàn) = ten thousand, a key unit in Chinese counting.",
            },
          ],
        },
      ],
    },
    {
      slug: "numbers-time-dates-days",
      title: "Dates and days of the week",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Dates go big to small",
          body: [
            "Chinese dates run <strong>year → month → day</strong>, the opposite of casual English. 'June 25th' is <strong>六月二十五号 (liù yuè èrshíwǔ hào)</strong> — month 6, day 25.",
            "<strong>月 (yuè)</strong> = month, and the months are just number + 月: 一月 (January), 二月 (February), … 十二月 (December). <strong>号 (hào)</strong> (or 日, rì, in writing) marks the day of the month.",
            "Days of the week are 星期 (xīngqī) + a number: <strong>星期一 (xīngqī yī)</strong> = Monday … <strong>星期六 (xīngqī liù)</strong> = Saturday. Sunday breaks the pattern: <strong>星期天 (xīngqī tiān)</strong> or 星期日.",
          ],
          keyPoint:
            "Months = number + 月. Day of month = number + 号. Weekdays = 星期 + number; Sunday = 星期天.",
        },
        {
          type: "vocab",
          heading: "Months, days, and time words",
          items: [
            { l1: "一月", en: "January", note: "pīnyīn: yī yuè; just '1 + month'" },
            { l1: "六月", en: "June", note: "pīnyīn: liù yuè" },
            { l1: "号", en: "day (of the month)", note: "pīnyīn: hào; e.g. 五号 = the 5th" },
            { l1: "星期一", en: "Monday", note: "pīnyīn: xīngqī yī" },
            { l1: "星期六", en: "Saturday", note: "pīnyīn: xīngqī liù" },
            { l1: "星期天", en: "Sunday", note: "pīnyīn: xīngqī tiān; not 星期七" },
            { l1: "今天", en: "today", note: "pīnyīn: jīntiān" },
            { l1: "明天", en: "tomorrow", note: "pīnyīn: míngtiān" },
            { l1: "昨天", en: "yesterday", note: "pīnyīn: zuótiān" },
          ],
        },
        {
          type: "dialogue",
          heading: "Making a plan",
          setup: "Two friends pick a day to visit the Summer Palace.",
          lines: [
            { speaker: "Mín", l1: "今天星期几？", en: "What day is it today?" },
            { speaker: "You", l1: "今天星期五。", en: "Today is Friday." },
            { speaker: "Mín", l1: "明天去颐和园，好吗？", en: "Let's go to the Summer Palace tomorrow, okay?" },
            { speaker: "You", l1: "好！明天见。", en: "Great! See you tomorrow." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Fill in the date word",
          intro: "Choose the correct word.",
          items: [
            {
              template: "今天星期___ 。(Monday)",
              answer: "一",
              en: "Today is Monday.",
              options: ["一", "天", "六", "号"],
            },
            {
              template: "六月二十五___ 。(the 25th)",
              answer: "号",
              en: "June 25th.",
              options: ["月", "号", "天", "星期"],
            },
            {
              template: "Sunday is 星期___ 。",
              answer: "天",
              en: "Sunday",
              options: ["七", "天", "六", "日号"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Today is Saturday.",
          reference: "今天星期六。",
          hint: "今天 = today; 星期六 = Saturday.",
        },
      ],
    },
    {
      slug: "numbers-time-clock-money",
      title: "Telling time and prices",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Telling the time with 点 and 分",
          body: [
            "The hour is a number + <strong>点 (diǎn)</strong>, 'o'clock': 三点 = 3:00. Minutes add a number + <strong>分 (fēn)</strong>: 三点十五分 = 3:15.",
            "Half past uses <strong>半 (bàn)</strong>: 三点半 = 3:30. For 'two o'clock' use <strong>两点 (liǎng diǎn)</strong> — remember 两, not 二, before a unit.",
            "To ask the time: <strong>现在几点？ (xiànzài jǐ diǎn?)</strong>, 'what time is it now?'. 几 (jǐ) asks 'how many / which number'.",
          ],
          keyPoint:
            "Hour = number + 点; minutes = number + 分; 半 = half past. 'Two o'clock' = 两点.",
        },
        {
          type: "vocab",
          heading: "Time and money words",
          items: [
            { l1: "点", en: "o'clock / hour", note: "pīnyīn: diǎn; e.g. 八点 = 8:00" },
            { l1: "分", en: "minute", note: "pīnyīn: fēn; e.g. 八点十分 = 8:10" },
            { l1: "半", en: "half (past)", note: "pīnyīn: bàn; 八点半 = 8:30" },
            { l1: "现在几点？", en: "what time is it now?", note: "pīnyīn: xiànzài jǐ diǎn?" },
            { l1: "块", en: "yuan (spoken, money)", note: "pīnyīn: kuài; everyday word for the currency unit" },
            { l1: "元", en: "yuan (written/formal)", note: "pīnyīn: yuán; same value as 块, used on price tags" },
            { l1: "毛", en: "10 cents (1/10 yuan)", note: "pīnyīn: máo; spoken; 角 jiǎo is the formal form" },
            { l1: "多少钱？", en: "how much (money)?", note: "pīnyīn: duōshao qián?" },
          ],
        },
        {
          type: "tip",
          heading: "块, 元, 毛 — saying prices",
          body: "On signs you see <strong>元 (yuán)</strong>, but people say <strong>块 (kuài)</strong> — same thing. A tenth of a yuan is <strong>毛 (máo)</strong> in speech (角 jiǎo in writing). So 8.50 yuan is spoken <em>八块五毛</em>, often shortened to <em>八块五</em>.",
          example: { l1: "这个多少钱？ — 八块五。", en: "How much is this? — 8.5 yuan." },
        },
        {
          type: "dialogue",
          heading: "At a Beijing market",
          setup: "You're buying jianbing (煎饼) from a street stall.",
          lines: [
            { speaker: "You", l1: "你好，这个多少钱？", en: "Hi, how much is this?" },
            { speaker: "Vendor", l1: "十块。", en: "Ten yuan." },
            { speaker: "You", l1: "好，谢谢！现在几点？", en: "Okay, thanks! What time is it now?" },
            { speaker: "Vendor", l1: "现在八点半。", en: "It's 8:30 now." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Arrange the words correctly.",
          items: [
            { tokens: ["现在", "三", "点", "半"], en: "It's 3:30 now." },
            { tokens: ["这个", "多少", "钱"], en: "How much is this?" },
            { tokens: ["八", "块", "五"], en: "8.5 yuan." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "How much is this? — Ten yuan.",
          reference: "这个多少钱？十块。",
          hint: "多少钱 = how much; 块 is the spoken word for yuan.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "How do you say '3:30'?",
              options: ["三点三", "三点半", "半三点", "三半点"],
              correct: 1,
            },
            {
              q: "The everyday spoken word for the currency unit (yuan) is…",
              options: ["元", "块", "毛", "分"],
              correct: 1,
            },
            {
              q: "'Two o'clock' is…",
              options: ["二点", "两点", "二半", "两分"],
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
        q: "三十五 means…",
        options: ["53", "35", "350", "305"],
        correct: 1,
      },
      {
        q: "万 (wàn) means…",
        options: ["hundred", "thousand", "ten thousand", "million"],
        correct: 2,
      },
      {
        q: "Which word for 'two' goes before a measure word, as in 'two people'?",
        options: ["二", "两", "双", "俩"],
        correct: 1,
      },
      {
        q: "How are months formed?",
        options: ["星期 + number", "number + 月", "number + 号", "number + 点"],
        correct: 1,
      },
      {
        q: "星期天 is…",
        options: ["Monday", "Saturday", "Sunday", "Friday"],
        correct: 2,
      },
      {
        q: "号 marks…",
        options: ["the month", "the day of the month", "the hour", "the price"],
        correct: 1,
      },
      {
        q: "How do you say '3 o'clock'?",
        options: ["三分", "三点", "三半", "三号"],
        correct: 1,
      },
      {
        q: "八点半 means…",
        options: ["8:00", "8:15", "8:30", "8:45"],
        correct: 2,
      },
      {
        q: "On a price tag you'd see 元; people say…",
        options: ["毛", "块", "分", "角"],
        correct: 1,
      },
      {
        q: "多少钱？ means…",
        options: ["What time is it?", "How much money?", "What day is it?", "How many people?"],
        correct: 1,
      },
    ],
  },
};
