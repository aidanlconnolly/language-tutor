import type { DailyRead } from "../../types";

export const READ_CHANGCHENG: DailyRead = {
  slug: "changcheng",
  order: 5,
  stageUnlock: 2,
  difficulty: 6,
  titleL1: "长城",
  titleEn: "The Great Wall",
  intro:
    "This read introduces 了 for completed past actions — you'll see it after many verbs (起床了, 买了, 爬了). The narrator tells what happened on a day at the Great Wall.",
  paragraphs: [
    {
      l1: "今天我去了长城。我早上六点就起床了。我很兴奋。",
      en: "Today I went to the Great Wall. I got up at six in the morning. I was very excited.",
    },
    {
      l1: "我坐了一个长途车。车开了两个小时。外面有山，也有树。",
      en: "I took a long-distance bus. The bus drove for two hours. Outside there were mountains and trees.",
    },
    {
      l1: "我到了长城。哇！长城真长，也真高。我从来没看过这么大的东西。",
      en: "I arrived at the Great Wall. Wow! The Great Wall is really long and really tall. I have never seen anything this big.",
    },
    {
      l1: "我买了一瓶水，然后开始爬。台阶很多，也很高。我爬得很慢。",
      en: "I bought a bottle of water, then started to climb. There were many steps, and they were steep. I climbed slowly.",
    },
    {
      l1: "天气很热。我累了，出了很多汗。可是我没有停。我想到上面看看。",
      en: "The weather was hot. I got tired and sweated a lot. But I didn't stop. I wanted to go up to the top and have a look.",
    },
    {
      l1: "一个小时以后，我到了一个高的地方。我坐下来，喝了水，休息了一会儿。",
      en: "An hour later, I reached a high spot. I sat down, drank some water, and rested for a while.",
    },
    {
      l1: "我看外面的风景。山很绿，天很蓝。长城在山上，像一条大龙。太美了！",
      en: "I looked at the view. The mountains were green, the sky was blue. The Great Wall lay on the mountains like a great dragon. So beautiful!",
    },
    {
      l1: "下午我下了山。我很累，可是我很高兴。今天是一个特别的日子。",
      en: "In the afternoon I came down the mountain. I was very tired, but I was very happy. Today was a special day.",
    },
  ],
  vocabSpotlight: [
    { l1: "长城", en: "the Great Wall (Chángchéng), lit. 'long wall'" },
    { l1: "了", en: "le — particle marking a completed action: 买了 = bought" },
    { l1: "爬", en: "to climb (pá)" },
    { l1: "台阶", en: "steps / stairs (táijiē)" },
    { l1: "风景", en: "scenery / view (fēngjǐng)" },
    { l1: "龙", en: "dragon (lóng)" },
    { l1: "从来没……过", en: "have never ... (cónglái méi ... guò)" },
    { l1: "特别", en: "special / especially (tèbié)" },
  ],
  comprehension: [
    {
      q: "What time did the narrator get up?",
      options: ["5am", "6am", "7am", "8am"],
      correct: 1,
    },
    {
      q: "How did the narrator travel to the Great Wall?",
      options: ["by train", "by a long-distance bus (2 hours)", "by taxi", "on foot"],
      correct: 1,
    },
    {
      q: "What did the narrator buy before climbing?",
      options: ["a ticket", "a hat", "a bottle of water", "a map"],
      correct: 2,
    },
    {
      q: "What did the narrator do upon reaching a high spot?",
      options: ["turned back", "sat down, drank water, and rested", "kept running", "took a nap"],
      correct: 1,
    },
    {
      q: "What is the Great Wall compared to?",
      options: ["a snake", "a river", "a great dragon", "a road"],
      correct: 2,
    },
  ],
};
