import type { Unit } from "../../types";

export const UNIT_BA_BEI: Unit = {
  slug: "ba-bei",
  stage: 8,
  order: 34,
  icon: "🤔",
  title: "把 & 被 sentences",
  tagline: "The 把 construction and the 被 passive.",
  badge: "advanced",
  lessons: [
    {
      slug: "ba-bei-ba-construction",
      title: "Doing something TO an object — the 把 construction",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "把 moves the object in front of the verb",
          body: [
            "Normal word order is Subject–Verb–Object: 我关门 (I close the door). The <strong>把</strong> construction pulls the object in front of the verb so you can say what HAPPENS to it: <strong>我把门关了</strong> = I (took) the door (and) closed it.",
            "The skeleton is <strong>Subject + 把 + Object + Verb + extra</strong>. That \"extra\" is essential — a bare verb won't do. You need a result (关了, 关上), a 了, a direction (放进去), a destination, or a quantity. So 我把门关 is wrong; 我把门关了 is right.",
            "Use 把 when the object is <strong>specific/known</strong> (\"the door,\" \"my homework\") and the action <strong>does something to it</strong> — moves it, changes it, finishes it. It's the workhorse of \"put the cup on the table,\" \"finish your homework,\" \"turn off the light.\"",
            "The negative and auxiliaries go <em>before</em> 把: 我没把门关 → 我没把门关上 (I didn't close the door); 你别把它放在这儿 (don't put it here).",
          ],
          keyPoint:
            "S + 把 + (specific) O + V + result/了/direction. The verb can NEVER stand bare. 我把门关了 = I closed the door.",
        },
        {
          type: "vocab",
          heading: "把 sentences in the wild",
          items: [
            { l1: "把", en: "(marker that fronts the object)", note: "bǎ — disposal marker" },
            { l1: "我把门关了。", en: "I closed the door.", note: "wǒ bǎ mén guān le" },
            { l1: "请把书放在桌子上。", en: "Please put the book on the table.", note: "…fàng zài zhuōzi shang" },
            { l1: "他把作业做完了。", en: "He finished the homework.", note: "…zuò wán le" },
            { l1: "把灯关上。", en: "Turn off the light.", note: "bǎ dēng guān shàng" },
            { l1: "我把钱包忘在出租车上了。", en: "I left my wallet in the taxi.", note: "…wàng zài… shang le" },
            { l1: "请把空调打开。", en: "Please turn on the air conditioner.", note: "…dǎ kāi" },
            { l1: "他把咖啡喝完了。", en: "He finished the coffee.", note: "…hē wán le" },
            { l1: "别把它放在这儿。", en: "Don't put it here.", note: "bié bǎ tā fàng zài zhèr" },
          ],
        },
        {
          type: "tip",
          heading: "Why 把 needs a 'landing'",
          body: "把 is sometimes called the <strong>disposal</strong> construction: you grab an object and DO something definite to it, so the listener expects to hear the outcome. A bare verb leaves the sentence hanging. Compare: <em>我把饭吃</em> (incomplete, wrong) vs <strong>我把饭吃完了</strong> = I finished the rice. The result/了/direction is the payoff.",
          example: { l1: "请把这个字写一下。", en: "Please write this character (just) once." },
        },
        {
          type: "conjugation",
          heading: "The 把 skeleton",
          verb: "把",
          meaning: "disposal construction — what happens to the object",
          intro: "S + 把 + O + V + [result / 了 / direction / location].",
          tenses: [
            {
              name: "Verb + result",
              forms: [
                { person: "我把门关上了。", form: "把 + O + V + 上 + 了", en: "I closed the door." },
                { person: "他把作业做完了。", form: "把 + O + V + 完 + 了", en: "He finished the homework." },
                { person: "请把名字写清楚。", form: "把 + O + V + 清楚", en: "Please write your name clearly." },
              ],
            },
            {
              name: "Verb + place / direction",
              forms: [
                { person: "请把书放在桌子上。", form: "把 + O + V + 在 + place", en: "Put the book on the table." },
                { person: "他把车开进车库了。", form: "把 + O + V + 进 + place", en: "He drove the car into the garage." },
                { person: "把钥匙给我。", form: "把 + O + V + 给 + me", en: "Give me the keys." },
              ],
            },
            {
              name: "Negative / with auxiliary (before 把)",
              forms: [
                { person: "我没把门关上。", form: "没 + 把 + O + V…", en: "I didn't close the door." },
                { person: "你别把它弄坏了。", form: "别 + 把 + O + V…", en: "Don't break it." },
                { person: "你应该把空调关掉。", form: "应该 + 把 + O + V…", en: "You should turn off the AC." },
              ],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the 把 sentence",
          intro: "Object goes after 把; the verb needs its result/了.",
          items: [
            { tokens: ["我", "把", "门", "关", "上", "了"], en: "I closed the door." },
            { tokens: ["请", "把", "书", "放", "在", "桌子", "上"], en: "Please put the book on the table." },
            { tokens: ["他", "把", "作业", "做", "完", "了"], en: "He finished the homework." },
            { tokens: ["你", "别", "把", "它", "弄", "坏", "了"], en: "Don't break it." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Please put the book on the table.",
          reference: "请把书放在桌子上。",
          hint: "请 + 把 + 书 + 放 + 在 + place. The verb needs the 在-location landing.",
        },
      ],
    },
    {
      slug: "ba-bei-bei-passive",
      title: "Things done TO you — the 被 passive",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "被 = the passive marker",
          body: [
            "Where 把 highlights the DOER acting on something, <strong>被 (bèi)</strong> flips to the receiving end: the thing affected becomes the subject. <strong>杯子被打破了</strong> = The cup was broken.",
            "The pattern is <strong>Receiver + 被 (+ Doer) + Verb + result</strong>. The doer is optional: 杯子被打破了 (cup got broken — by whomever) vs 杯子被弟弟打破了 (the cup was broken by little brother).",
            "Just like 把, the verb in a 被 sentence can't stand bare — it needs a result or 了 showing the outcome: not 我被骗 but <strong>我被骗了</strong> (I was deceived).",
            "Traditionally 被 carried a <em>negative / adversity</em> flavor (something bad happened to you). Modern Mandarin uses it more freely, but it's still most natural for unwanted events: getting scolded, broken, stolen, rained on. 让 (ràng) and 叫 (jiào) work as colloquial substitutes: 杯子让弟弟打破了。",
          ],
          keyPoint:
            "Receiver + 被 + (Doer) + V + result. Doer is optional; verb still needs a result/了. 自行车被偷了 = The bike was stolen.",
        },
        {
          type: "vocab",
          heading: "被 sentences",
          items: [
            { l1: "被", en: "(passive marker, 'by')", note: "bèi" },
            { l1: "杯子被打破了。", en: "The cup was broken.", note: "bēizi bèi dǎ pò le" },
            { l1: "我的自行车被偷了。", en: "My bike was stolen.", note: "…bèi tōu le" },
            { l1: "他被老板批评了。", en: "He was criticized by the boss.", note: "…bèi lǎobǎn pīpíng le" },
            { l1: "蛋糕被弟弟吃完了。", en: "The cake was eaten up by little brother.", note: "…bèi dìdi chī wán le" },
            { l1: "我被雨淋湿了。", en: "I got soaked by the rain.", note: "wǒ bèi yǔ lín shī le" },
            { l1: "钱包被人偷走了。", en: "The wallet was stolen (by someone).", note: "…bèi rén tōu zǒu le" },
            { l1: "门被风吹开了。", en: "The door was blown open by the wind.", note: "…bèi fēng chuī kāi le" },
            { l1: "让 / 叫", en: "(colloquial 'by', = 被)", note: "ràng / jiào" },
          ],
        },
        {
          type: "tip",
          heading: "被 likes bad news",
          body: "被 is most idiomatic when something <strong>unwanted</strong> happens to the subject — stolen, broken, scolded, rained on. You usually wouldn't say 我被老师表扬了 in casual speech for praise (though it's now acceptable); learners are safest using 被 for adverse events. Colloquially, <strong>让 (ràng)</strong> and <strong>叫 (jiào)</strong> replace 被, but then the doer is normally required: 杯子让他打破了。",
          example: { l1: "我的手机被人拿走了。", en: "Someone took my phone (it got taken)." },
        },
        {
          type: "dialogue",
          heading: "A bad morning in Beijing",
          setup: "You arrive late to meet a friend at 798 Art District (798 艺术区).",
          lines: [
            { speaker: "朋友", l1: "你怎么这么晚?", en: "Why are you so late?" },
            { speaker: "You", l1: "别提了,我的自行车被偷了。", en: "Don't even ask — my bike got stolen." },
            { speaker: "朋友", l1: "啊?报警了吗?", en: "What? Did you report it to the police?" },
            { speaker: "You", l1: "报了。而且我还被雨淋湿了。", en: "I did. And on top of that I got soaked by the rain." },
            { speaker: "朋友", l1: "太惨了。你的包没被偷吧?", en: "How awful. Your bag didn't get stolen, did it?" },
            { speaker: "You", l1: "还好,包没事。", en: "Luckily, the bag's fine." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the passive",
          intro: "Add 被 and make sure the verb has a result.",
          items: [
            {
              template: "我的钱包___人偷走了。",
              answer: "被",
              en: "My wallet was stolen (by someone).",
              options: ["把", "被", "在", "给"],
            },
            {
              template: "杯子被弟弟打___了。",
              answer: "破",
              en: "The cup was broken by little brother.",
              options: ["破", "完", "到", "见"],
            },
            {
              template: "他被老板___了一顿。",
              answer: "批评",
              en: "He got a scolding from the boss.",
              options: ["批评", "表扬", "帮助", "请"],
            },
            {
              template: "门被风吹___了。",
              answer: "开",
              en: "The door was blown open by the wind.",
              options: ["开", "完", "懂", "到"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "My bike was stolen.",
          reference: "我的自行车被偷了。",
          hint: "Receiver + 被 + verb + 了. The doer ('by someone') can be dropped.",
        },
      ],
    },
    {
      slug: "ba-bei-contrast",
      title: "把 vs 被 — two sides of the same coin",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Same event, two viewpoints",
          body: [
            "把 and 被 describe the <strong>same action from opposite angles</strong>. Take \"little brother broke the cup\":",
            "<strong>把 (doer's view):</strong> 弟弟把杯子打破了。 = Little brother broke the cup. — subject is the DOER.",
            "<strong>被 (receiver's view):</strong> 杯子被弟弟打破了。 = The cup was broken by little brother. — subject is the RECEIVER.",
            "Both share the same DNA: a specific object, and a verb that <em>can't be bare</em> — it must carry a result (打破), a 了, or a direction. If you can build one, you can usually flip it into the other.",
            "Quick chooser: leading with WHO did it and what they did to a thing → 把. Leading with the affected thing and what happened to it (often unluckily) → 被.",
          ],
          keyPoint:
            "弟弟把杯子打破了 (active, doer-first) ⇄ 杯子被弟弟打破了 (passive, receiver-first). Both demand a result on the verb.",
        },
        {
          type: "conjugation",
          heading: "把 ⇄ 被 side by side",
          verb: "把 / 被",
          meaning: "the same event, flipped between active and passive",
          intro: "Read each row as one event told two ways.",
          tenses: [
            {
              name: "Breaking the cup",
              forms: [
                { person: "弟弟把杯子打破了。", form: "把 (doer first)", en: "Little brother broke the cup." },
                { person: "杯子被弟弟打破了。", form: "被 (receiver first)", en: "The cup was broken by little brother." },
              ],
            },
            {
              name: "Eating the cake",
              forms: [
                { person: "他把蛋糕吃完了。", form: "把", en: "He finished the cake." },
                { person: "蛋糕被他吃完了。", form: "被", en: "The cake was finished off by him." },
              ],
            },
            {
              name: "Taking the phone",
              forms: [
                { person: "有人把我的手机拿走了。", form: "把", en: "Someone took my phone." },
                { person: "我的手机被(人)拿走了。", form: "被", en: "My phone was taken (by someone)." },
              ],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "把 or 被?",
          intro: "Pick the construction that fits the viewpoint.",
          questions: [
            {
              q: "You want to say YOU finished the homework (you're the doer):",
              options: ["作业被我做完了。", "我把作业做完了。", "我被作业做完了。", "作业把我做完了。"],
              correct: 1,
              fb: "Doer-first → 把: 我把作业做完了。",
            },
            {
              q: "The cup got broken (focus on the cup, doer unknown):",
              options: ["杯子把打破了。", "杯子被打破了。", "打破被杯子了。", "杯子被打。"],
              correct: 1,
              fb: "Receiver-first, adverse, doer dropped → 被打破了。",
            },
            {
              q: "Which sentence is INCOMPLETE / wrong?",
              options: ["我把门关了。", "我把门关。", "杯子被打破了。", "他把蛋糕吃完了。"],
              correct: 1,
              fb: "我把门关 has a bare verb — both 把 and 被 need a result/了.",
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Choose 把 or 被",
          intro: "Match the marker to the viewpoint shown in English.",
          items: [
            {
              template: "我___手机忘在家里了。",
              answer: "把",
              en: "I left my phone at home. (I'm the doer)",
              options: ["把", "被", "让", "给"],
            },
            {
              template: "我的手机___小偷偷走了。",
              answer: "被",
              en: "My phone was stolen by a thief.",
              options: ["把", "被", "在", "和"],
            },
            {
              template: "请___窗户打开。",
              answer: "把",
              en: "Please open the window. (command to the doer)",
              options: ["把", "被", "让", "对"],
            },
            {
              template: "蛋糕___弟弟吃完了。",
              answer: "被",
              en: "The cake was finished off by little brother.",
              options: ["把", "被", "在", "向"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Flip the viewpoint",
          intro: "Build each sentence; mind whether it's 把 or 被.",
          items: [
            { tokens: ["弟弟", "把", "杯子", "打", "破", "了"], en: "Little brother broke the cup." },
            { tokens: ["杯子", "被", "弟弟", "打", "破", "了"], en: "The cup was broken by little brother." },
            { tokens: ["我", "把", "空调", "关", "了"], en: "I turned off the air conditioner." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "The cup was broken by little brother.",
          reference: "杯子被弟弟打破了。",
          hint: "Receiver-first passive: 杯子 + 被 + 弟弟 + 打破 + 了.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which marker fronts the object so you can say what's done TO it (doer-first)?",
              options: ["被", "把", "让", "在"],
              correct: 1,
            },
            {
              q: "Passive of '弟弟把杯子打破了' is…",
              options: ["杯子把弟弟打破了。", "杯子被弟弟打破了。", "弟弟被杯子打破了。", "杯子被打。"],
              correct: 1,
            },
            {
              q: "Why is '我把门关' wrong?",
              options: ["把 needs 被", "the verb needs a result/了", "门 can't follow 把", "把 needs a doer"],
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
        q: "The basic 把 skeleton is…",
        options: ["S + 把 + V + O", "S + 把 + O + V + result/了", "把 + S + O + V", "S + O + 把 + V"],
        correct: 1,
      },
      {
        q: "Which 把 sentence is COMPLETE and correct?",
        options: ["我把饭吃。", "我把饭吃完了。", "把饭我吃了。", "我吃把饭了。"],
        correct: 1,
      },
      {
        q: "'Please put the book on the table' =",
        options: ["请把书在桌子上。", "请把书放在桌子上。", "请书放把桌子上。", "请放书把桌子上。"],
        correct: 1,
      },
      {
        q: "Where does the negative 没 go in a 把 sentence?",
        options: ["after the verb", "before 把", "after 把", "at the very end"],
        correct: 1,
      },
      {
        q: "被 marks the…",
        options: ["doer fronting the object", "passive — receiver as subject", "indirect object", "location"],
        correct: 1,
      },
      {
        q: "'My bike was stolen' =",
        options: ["我把自行车偷了。", "我的自行车被偷了。", "自行车我被偷。", "被自行车偷了。"],
        correct: 1,
      },
      {
        q: "被 most naturally describes events that are…",
        options: ["happy", "unwanted / adverse", "future", "habitual"],
        correct: 1,
      },
      {
        q: "Colloquial substitutes for 被 are…",
        options: ["把 and 在", "让 and 叫", "给 and 对", "和 and 跟"],
        correct: 1,
      },
      {
        q: "Active '他把蛋糕吃完了' becomes which passive?",
        options: ["蛋糕把他吃完了。", "蛋糕被他吃完了。", "他被蛋糕吃完了。", "蛋糕被吃。"],
        correct: 1,
      },
      {
        q: "Translate: 'I closed the door.' (doer-first, 把)",
        options: ["门被我关了。", "我把门关了。", "我门把关了。", "我关把门了。"],
        correct: 1,
      },
    ],
  },
};
