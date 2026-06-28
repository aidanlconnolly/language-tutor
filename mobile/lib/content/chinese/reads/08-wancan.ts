import type { DailyRead } from "../../types";

export const READ_WANCAN: DailyRead = {
  slug: "wancan",
  order: 8,
  stageUnlock: 4,
  difficulty: 7.5,
  titleL1: "和朋友吃晚饭",
  titleEn: "Dinner with friends",
  intro:
    "The hardest read so far: a hotpot dinner with new friends. It mixes 了 and 在, and several set phrases you'll meet all the time — 干杯 (cheers), 没关系 (no problem), 慢慢来 (take your time). These are explained in the spotlight.",
  paragraphs: [
    {
      l1: "晚上，我的两个新朋友请我吃火锅。我们去了一家很有名的饭馆。外面在下雨，可是里面又暖和又热闹。",
      en: "In the evening, my two new friends treated me to hotpot. We went to a famous restaurant. It was raining outside, but inside it was warm and lively.",
    },
    {
      l1: "桌子中间有一个大锅，汤在里面咕嘟咕嘟地响。一半是红的，很辣；一半是白的，不辣。",
      en: "In the middle of the table there was a big pot, the broth bubbling away inside. One half was red and very spicy; the other half was white and not spicy.",
    },
    {
      l1: "我们点了很多菜：羊肉、牛肉、青菜、豆腐，还有蘑菇。我们一边吃，一边聊天。",
      en: "We ordered many things: lamb, beef, greens, tofu, and mushrooms. We ate and chatted at the same time.",
    },
    {
      l1: "我不太会用筷子。一块肉掉到了桌子上。我有点儿不好意思，可是朋友笑着说：「没关系，慢慢来！」",
      en: "I'm not very good with chopsticks. A piece of meat dropped onto the table. I was a bit embarrassed, but my friend smiled and said: \"No problem, take your time!\"",
    },
    {
      l1: "一个朋友给我倒了一杯啤酒。他举起杯子说：「来，为我们的友谊，干杯！」我们三个人都笑了。",
      en: "One friend poured me a glass of beer. He raised his cup and said: \"Come on, to our friendship, cheers!\" The three of us all laughed.",
    },
    {
      l1: "红汤真的很辣。我吃了一块，辣得我直流眼泪，可是越吃越想吃。朋友说我「入乡随俗」了。",
      en: "The red broth really was spicy. I ate one piece and it was so hot it made my eyes water, but the more I ate the more I wanted. My friends said I had \"done as the locals do.\"",
    },
    {
      l1: "我们吃了两个多小时。我学了很多新词，也听懂了很多。虽然我的中文还不好，可是大家都很有耐心。",
      en: "We ate for over two hours. I learned a lot of new words and understood a lot too. Even though my Chinese still isn't good, everyone was very patient.",
    },
    {
      l1: "走的时候，外面的雨停了。一个朋友说：「下次我请你！」我心里很温暖。我想，我一定会再来北京的。",
      en: "When we left, the rain had stopped. One friend said: \"Next time it's on me!\" I felt warm inside. I thought: I will definitely come back to Beijing.",
    },
  ],
  vocabSpotlight: [
    { l1: "火锅", en: "hotpot (huǒguō)" },
    { l1: "干杯", en: "cheers! / bottoms up (gānbēi) — lit. 'dry the cup'" },
    { l1: "没关系", en: "no problem / it doesn't matter (méi guānxi)" },
    { l1: "慢慢来", en: "take your time / no rush (mànmàn lái)" },
    { l1: "不好意思", en: "embarrassed / sorry (bù hǎoyìsi)" },
    { l1: "入乡随俗", en: "when in Rome, do as the Romans do (rù xiāng suí sú) — a set idiom" },
    { l1: "越……越……", en: "the more ... the more ... (yuè ... yuè ...); 越吃越想吃" },
    { l1: "友谊", en: "friendship (yǒuyì)" },
  ],
  comprehension: [
    {
      q: "What did the friends treat the narrator to?",
      options: ["dumplings", "hotpot", "tea", "noodles"],
      correct: 1,
    },
    {
      q: "What was special about the hotpot broth?",
      options: [
        "it was all spicy",
        "half spicy (red), half not spicy (white)",
        "it was cold",
        "it had no flavor",
      ],
      correct: 1,
    },
    {
      q: "What happened when the narrator dropped meat on the table?",
      options: [
        "the friends got angry",
        "a friend said 'no problem, take your time'",
        "they left the restaurant",
        "nobody noticed",
      ],
      correct: 1,
    },
    {
      q: "What does '干杯' mean?",
      options: ["take your time", "cheers / bottoms up", "no problem", "thank you"],
      correct: 1,
    },
    {
      q: "How did the narrator feel at the end of the evening?",
      options: ["bored and tired", "warm inside, wanting to return to Beijing", "sick from the spice", "ready to go home for good"],
      correct: 1,
    },
  ],
};
