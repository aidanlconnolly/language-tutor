import type { Unit } from "../../types";

export const UNIT_DIRECTIONS: Unit = {
  slug: "directions",
  stage: 3,
  order: 11,
  icon: "🧭",
  title: "Asking for directions",
  tagline: "左/右/一直走 — …在哪儿?",
  badge: "tourist",
  lessons: [
    {
      slug: "directions-words",
      title: "Left, right, straight ahead",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The direction toolkit",
          body: [
            "Three words unlock most directions: <strong>左</strong> (zuǒ, left), <strong>右</strong> (yòu, right), and <strong>一直走</strong> (yìzhí zǒu, go straight).",
            "To turn, add <strong>拐</strong> (guǎi) or <strong>转</strong> (zhuǎn): <em>左拐</em> = turn left, <em>右拐</em> = turn right.",
            "Position words come at the <strong>end</strong> in Chinese: a place is <em>在前面</em> (zài qiánmiàn, up ahead), <em>在后面</em> (behind), or <em>在旁边</em> (zài pángbiān, next to it).",
          ],
          keyPoint:
            "左 = left, 右 = right, 一直走 = go straight, 拐 = turn. Position words go after the place.",
        },
        {
          type: "vocab",
          heading: "Direction & position words",
          items: [
            { l1: "左", en: "left", note: "zuǒ" },
            { l1: "右", en: "right", note: "yòu" },
            { l1: "左拐", en: "turn left", note: "zuǒ guǎi" },
            { l1: "右拐", en: "turn right", note: "yòu guǎi" },
            { l1: "一直走", en: "go straight", note: "yìzhí zǒu" },
            { l1: "前面", en: "in front / ahead", note: "qiánmiàn" },
            { l1: "后面", en: "behind", note: "hòumiàn" },
            { l1: "旁边", en: "next to / beside", note: "pángbiān" },
            { l1: "对面", en: "across from / opposite", note: "duìmiàn" },
            { l1: "路口", en: "intersection", note: "lùkǒu" },
            { l1: "红绿灯", en: "traffic light", note: "hónglǜdēng" },
            { l1: "米", en: "meter (distance)", note: "mǐ — e.g. 一百米 = 100 m" },
          ],
        },
        {
          type: "tip",
          heading: "Position words attach with 在",
          body: "To say something is somewhere, use <strong>在</strong> (zài) + place + position word. <em>银行在右边</em> = the bank is on the right. <em>厕所在旁边</em> = the toilet is next to it. The pattern is always <em>[thing] 在 [reference] [position]</em>.",
          example: { l1: "地铁站在前面。", en: "The metro station is up ahead." },
        },
        {
          type: "fillBlank",
          heading: "Pick the position word",
          items: [
            {
              template: "到红绿灯___拐。",
              answer: "左",
              en: "Turn left at the traffic light.",
              options: ["左", "前面", "对面", "后面"],
            },
            {
              template: "一直___，大概一百米。",
              answer: "走",
              en: "Go straight, about 100 meters.",
              options: ["走", "拐", "在", "到"],
            },
            {
              template: "银行在超市___。",
              answer: "旁边",
              en: "The bank is next to the supermarket.",
              options: ["旁边", "一直", "右拐", "走"],
            },
            {
              template: "厕所在你的___面。",
              answer: "后",
              en: "The toilet is behind you.",
              options: ["后", "走", "拐", "灯"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "一直走 (yìzhí zǒu) means…",
              options: ["turn left", "turn right", "go straight", "stop here"],
              correct: 2,
            },
            {
              q: "右拐 (yòu guǎi) means…",
              options: ["turn left", "turn right", "go back", "cross over"],
              correct: 1,
            },
            {
              q: "旁边 (pángbiān) means…",
              options: ["ahead", "behind", "next to", "across from"],
              correct: 2,
            },
            {
              q: "Where does the position word go in Chinese?",
              options: [
                "before the place",
                "after the place",
                "it doesn't matter",
                "only at the start",
              ],
              correct: 1,
              fb: "Position words follow the reference point: 在 [place] [position].",
            },
          ],
        },
      ],
    },
    {
      slug: "directions-asking",
      title: "…在哪儿? — asking where",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The one question you'll use most",
          body: [
            "To ask where something is, name the place and add <strong>在哪儿？</strong> (zài nǎr? — \"where is it?\"). So <em>地铁站在哪儿？</em> = where's the metro station?",
            "Open politely with <strong>请问</strong> (qǐngwèn, \"may I ask\"). It's the Chinese equivalent of \"excuse me\" before a question and instantly softens the request.",
            "<em>哪儿</em> (nǎr) is the Beijing-flavored \"where\"; <em>哪里</em> (nǎlǐ) means the same and is heard everywhere. Either works.",
          ],
          keyPoint:
            "请问，…在哪儿？= Excuse me, where is…? Name the place first, then 在哪儿.",
        },
        {
          type: "vocab",
          heading: "Asking-where vocab",
          items: [
            { l1: "请问", en: "may I ask / excuse me", note: "qǐngwèn" },
            { l1: "在哪儿", en: "where is it", note: "zài nǎr" },
            { l1: "哪里", en: "where", note: "nǎlǐ — same as 哪儿" },
            { l1: "怎么走", en: "how do I get there", note: "zěnme zǒu" },
            { l1: "厕所", en: "toilet / restroom", note: "cèsuǒ" },
            { l1: "洗手间", en: "restroom (polite)", note: "xǐshǒujiān" },
            { l1: "银行", en: "bank", note: "yínháng" },
            { l1: "超市", en: "supermarket", note: "chāoshì" },
            { l1: "饭店", en: "restaurant / hotel", note: "fàndiàn" },
            { l1: "附近", en: "nearby", note: "fùjìn" },
            { l1: "远", en: "far", note: "yuǎn" },
            { l1: "近", en: "near / close", note: "jìn" },
          ],
        },
        {
          type: "dialogue",
          heading: "Looking for the restroom",
          setup: "You stop a passerby near a shopping street.",
          lines: [
            { speaker: "You", l1: "请问，洗手间在哪儿？", en: "Excuse me, where is the restroom?" },
            { speaker: "Passerby", l1: "在那家超市里面，一直走就到。", en: "Inside that supermarket — just go straight and you'll reach it." },
            { speaker: "You", l1: "远吗？", en: "Is it far?" },
            { speaker: "Passerby", l1: "不远，很近，大概五十米。", en: "Not far, very close, about 50 meters." },
            { speaker: "You", l1: "附近有地铁站吗？", en: "Is there a metro station nearby?" },
            { speaker: "Passerby", l1: "有，在红绿灯右拐。", en: "Yes — turn right at the traffic light." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the question",
          items: [
            { tokens: ["请问", "，", "地铁站", "在", "哪儿", "？"], en: "Excuse me, where is the metro station?" },
            { tokens: ["附近", "有", "银行", "吗", "？"], en: "Is there a bank nearby?" },
            { tokens: ["到", "故宫", "怎么", "走", "？"], en: "How do I get to the Forbidden City?" },
            { tokens: ["洗手间", "在", "哪里", "？"], en: "Where is the restroom?" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me, where is the nearest metro station?",
          reference: "请问，最近的地铁站在哪儿？",
          hint: "请问 + place + 在哪儿. 'Nearest' = 最近的.",
        },
        {
          type: "tip",
          heading: "厕所 vs 洗手间",
          body: "Both mean restroom. <strong>厕所</strong> (cèsuǒ) is plain and direct — totally fine on the street. <strong>洗手间</strong> (xǐshǒujiān, \"hand-washing room\") is a touch more polite and what you'll see on signs in hotels and malls. Either gets you pointed in the right direction.",
          example: { l1: "请问洗手间在哪儿？", en: "Excuse me, where's the restroom?" },
        },
      ],
    },
    {
      slug: "directions-understanding",
      title: "Understanding the answer",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Catching the reply",
          body: [
            "Answers usually chain a few direction words: <em>一直走，到路口左拐</em> = go straight, turn left at the intersection.",
            "Listen for distance markers like <strong>大概一百米</strong> (about 100 m) and landmarks like <strong>红绿灯</strong> (traffic light) or <strong>路口</strong> (intersection) — they anchor where to turn.",
            "If it's too fast, ask them to repeat: <strong>请再说一遍</strong> (qǐng zài shuō yí biàn, \"please say it again\").",
          ],
          keyPoint:
            "Replies chain 一直走 + 左拐/右拐 + a landmark. Stuck? Say 请再说一遍.",
        },
        {
          type: "vocab",
          heading: "Landmarks & follow-ups",
          items: [
            { l1: "请再说一遍", en: "please say it again", note: "qǐng zài shuō yí biàn" },
            { l1: "慢一点", en: "a little slower", note: "màn yìdiǎn" },
            { l1: "明白了", en: "I understand / got it", note: "míngbái le" },
            { l1: "公园", en: "park", note: "gōngyuán" },
            { l1: "广场", en: "square / plaza", note: "guǎngchǎng" },
            { l1: "桥", en: "bridge", note: "qiáo" },
            { l1: "天桥", en: "pedestrian overpass", note: "tiānqiáo" },
            { l1: "地下通道", en: "underground passage", note: "dìxià tōngdào" },
            { l1: "胡同", en: "hutong (old alley)", note: "hútòng" },
            { l1: "大概", en: "approximately / about", note: "dàgài" },
            { l1: "然后", en: "then / after that", note: "ránhòu" },
            { l1: "就到了", en: "you'll have arrived", note: "jiù dào le" },
          ],
        },
        {
          type: "dialogue",
          heading: "Following step-by-step directions",
          setup: "You ask the way to Tiananmen Square.",
          lines: [
            { speaker: "You", l1: "请问，天安门广场怎么走？", en: "Excuse me, how do I get to Tiananmen Square?" },
            { speaker: "Local", l1: "一直走，到红绿灯左拐。", en: "Go straight, turn left at the traffic light." },
            { speaker: "You", l1: "对不起，请再说一遍，慢一点。", en: "Sorry, please say it again, a little slower." },
            { speaker: "Local", l1: "一直走……到红绿灯……左拐，然后过天桥就到了。", en: "Go straight… to the light… turn left, then cross the overpass and you're there." },
            { speaker: "You", l1: "明白了，谢谢您！", en: "Got it, thank you!" },
            { speaker: "Local", l1: "不客气，大概五分钟。", en: "You're welcome, about five minutes." },
          ],
        },
        {
          type: "listen",
          heading: "What were you told?",
          intro: "Listen, then pick the closest meaning.",
          items: [
            { l1: "一直走。", en: "Go straight.", options: ["Turn left", "Go straight", "Turn back", "Stop here"], correct: 1 },
            { l1: "到路口右拐。", en: "Turn right at the intersection.", options: ["Turn left at the intersection", "Turn right at the intersection", "Cross the bridge", "It's far"], correct: 1 },
            { l1: "就在对面。", en: "It's right across from you.", options: ["It's right across from you", "It's behind you", "It's very far", "Go straight 100 m"], correct: 0 },
            { l1: "大概十分钟。", en: "About ten minutes.", options: ["About ten minutes", "About ten meters", "Turn at the light", "Take the overpass"], correct: 0 },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Go straight, then turn left at the traffic light.",
          reference: "一直走，然后到红绿灯左拐。",
          hint: "一直走 = go straight, 然后 = then, 红绿灯 = traffic light, 左拐 = turn left.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'Please say it again' =",
              options: ["请再说一遍", "请问", "明白了", "慢一点"],
              correct: 0,
            },
            {
              q: "就到了 (jiù dào le) means…",
              options: ["it's very far", "you'll have arrived", "turn around", "go faster"],
              correct: 1,
            },
            {
              q: "然后 (ránhòu) means…",
              options: ["before", "then / after that", "across from", "straight"],
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
        q: "左 (zuǒ) means…",
        options: ["left", "right", "straight", "behind"],
        correct: 0,
      },
      {
        q: "一直走 (yìzhí zǒu) means…",
        options: ["turn left", "go straight", "turn right", "stop"],
        correct: 1,
      },
      {
        q: "'Excuse me' before a question is…",
        options: ["谢谢", "请问", "对不起", "再见"],
        correct: 1,
      },
      {
        q: "'Where is the metro station?' =",
        options: ["地铁站在哪儿？", "地铁站怎么样？", "几点到地铁站？", "地铁站多少钱？"],
        correct: 0,
      },
      {
        q: "右拐 (yòu guǎi) means…",
        options: ["turn left", "turn right", "go back", "go straight"],
        correct: 1,
      },
      {
        q: "旁边 (pángbiān) means…",
        options: ["across from", "next to", "ahead", "behind"],
        correct: 1,
      },
      {
        q: "红绿灯 (hónglǜdēng) is a…",
        options: ["bridge", "traffic light", "intersection", "park"],
        correct: 1,
      },
      {
        q: "'Is it far?' =",
        options: ["远吗？", "近吗？", "几点？", "多少钱？"],
        correct: 0,
      },
      {
        q: "请再说一遍 (qǐng zài shuō yí biàn) means…",
        options: ["please speak louder", "please say it again", "please wait", "please turn right"],
        correct: 1,
      },
      {
        q: "Translate: 'Excuse me, how do I get to the park?'",
        options: [
          "请问，公园怎么走？",
          "请问，公园多少钱？",
          "公园几点开门？",
          "公园在旁边吗？",
        ],
        correct: 0,
      },
    ],
  },
};
