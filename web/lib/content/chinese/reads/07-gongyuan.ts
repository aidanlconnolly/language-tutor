import type { DailyRead } from "../../types";

export const READ_GONGYUAN: DailyRead = {
  slug: "gongyuan",
  order: 7,
  stageUnlock: 3,
  difficulty: 7,
  titleL1: "公园的早晨",
  titleEn: "A morning in the park",
  intro:
    "Longer sentences and more aspect: 在 for ongoing actions (在打太极 = doing tai chi), 着 for states, and a touch of reflection. A quiet early morning in a Beijing park.",
  paragraphs: [
    {
      l1: "今天我起得很早。天还没全亮，我就去了公园。北京的早晨很安静，空气也很新鲜。",
      en: "Today I got up very early. The sky wasn't fully light yet when I went to the park. The Beijing morning was quiet, and the air was fresh.",
    },
    {
      l1: "公园里已经有很多人了。让我惊讶的是，他们大部分都是老人。",
      en: "There were already many people in the park. What surprised me was that most of them were elderly.",
    },
    {
      l1: "在一棵大树下，几个老人在打太极。他们的动作很慢，也很美，像在跳一种安静的舞。",
      en: "Under a big tree, several elderly people were doing tai chi. Their movements were slow and beautiful, like dancing a quiet dance.",
    },
    {
      l1: "旁边有一群人在跳广场舞。音乐很热闹，他们一边跳一边笑。我也想跟着跳，可是有点儿不好意思。",
      en: "Nearby a group of people were doing square dancing. The music was lively, and they laughed as they danced. I wanted to join in too, but I was a bit shy.",
    },
    {
      l1: "湖边有一个老人在写字。他用一支大笔，在地上用水写中国字。字很漂亮，可是水一干，字就没了。",
      en: "By the lake an old man was writing characters. With a big brush, he wrote Chinese characters on the ground in water. The characters were beautiful, but as soon as the water dried, they disappeared.",
    },
    {
      l1: "天上有几个风筝，飞得很高。一个小孩拿着线，笑着跑来跑去。他的爸爸在后面看着他。",
      en: "In the sky there were a few kites, flying high. A child held the string, laughing and running around. His father watched him from behind.",
    },
    {
      l1: "我坐在长椅上，看着这些人。我想：他们每天早上都来这里。这就是他们的生活。",
      en: "I sat on a bench, watching these people. I thought: they come here every morning. This is their life.",
    },
    {
      l1: "太阳慢慢出来了，公园越来越亮。我深深地吸了一口气。北京的早晨，真让人舒服。",
      en: "The sun slowly came out, and the park grew brighter and brighter. I took a deep breath. A Beijing morning truly feels wonderful.",
    },
  ],
  vocabSpotlight: [
    { l1: "公园", en: "park (gōngyuán)" },
    { l1: "在 + verb", en: "marks an ongoing action: 在打太极 = (be) doing tai chi (zài)" },
    { l1: "打太极", en: "to practice tai chi (dǎ tàijí)" },
    { l1: "广场舞", en: "square dancing (guǎngchǎng wǔ) — a Chinese public-park pastime" },
    { l1: "风筝", en: "kite (fēngzheng)" },
    { l1: "不好意思", en: "embarrassed / shy / 'excuse me' (bù hǎoyìsi)" },
    { l1: "越来越", en: "more and more (yuè lái yuè); 越来越亮 = brighter and brighter" },
    { l1: "生活", en: "life / to live (shēnghuó)" },
  ],
  comprehension: [
    {
      q: "Who made up most of the people in the park?",
      options: ["children", "tourists", "elderly people", "students"],
      correct: 2,
    },
    {
      q: "What were the people under the big tree doing?",
      options: ["square dancing", "doing tai chi", "flying kites", "writing characters"],
      correct: 1,
    },
    {
      q: "How did the old man by the lake write characters?",
      options: ["with ink on paper", "with water on the ground", "with chalk on a wall", "with his finger in sand"],
      correct: 1,
    },
    {
      q: "Why didn't the narrator join the square dancing?",
      options: ["he didn't like the music", "he was a bit shy", "it was too crowded", "it had finished"],
      correct: 1,
    },
    {
      q: "What conclusion does the narrator reach watching the people?",
      options: [
        "the park is too noisy",
        "this morning routine is their everyday life",
        "he should leave Beijing",
        "old people don't sleep enough",
      ],
      correct: 1,
    },
  ],
};
