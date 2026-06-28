import type { DailyRead } from "../../types";

export const READ_KOEN: DailyRead = {
  slug: "koen",
  order: 7,
  stageUnlock: 3,
  difficulty: 7,
  titleL1: "こうえんの さんぽ",
  titleEn: "A walk in the park",
  intro:
    "Longer paragraphs now, mixing past tenses freely and adding a little reflection. You'll meet hanami (cherry-blossom viewing) and some gentler, more thoughtful sentences. More kanji, always with readings.",
  paragraphs: [
    {
      l1: "つぎの ひの ごご、わたしは うえのこうえんを さんぽしました。はるだったので、さくらが まんかいでした。",
      en: "The next afternoon, I took a walk in Ueno Park. Because it was spring, the cherry blossoms were in full bloom.",
    },
    {
      l1: "みちの りょうがわに さくらの 木（き）が ならんでいて、ピンクいろの トンネルの ようでした。かぜが ふくと、はなびらが ゆきの ように おちました。",
      en: "Cherry trees lined both sides of the path, and it was like a pink tunnel. When the wind blew, the petals fell like snow.",
    },
    {
      l1: "たくさんの ひとが 木（き）の 下（した）に ブルーシートを ひいて、すわっていました。これが 「はなみ」です。",
      en: "Many people had spread out blue tarps under the trees and were sitting. This is \"hanami\" (flower viewing).",
    },
    {
      l1: "かぞくは おべんとうを たべていました。わかい ひとたちは わらいながら、ビールを のんでいました。みんな たのしそうでした。",
      en: "Families were eating bento boxes. Young people were laughing as they drank beer. Everyone looked like they were having fun.",
    },
    {
      l1: "わたしは ベンチに すわって、コーヒーを のみました。さくらを みながら、しずかな じかんを すごしました。",
      en: "I sat on a bench and drank a coffee. Watching the cherry blossoms, I spent a quiet stretch of time.",
    },
    {
      l1: "「さくらは きれいですが、すぐに ちって しまいます」と となりの おじいさんが いいました。「だから にっぽんじんは さくらが すきなんです」",
      en: "\"Cherry blossoms are beautiful, but they scatter so quickly,\" the old man next to me said. \"That is why Japanese people love them.\"",
    },
    {
      l1: "わたしは その ことばを きいて、すこし かんがえました。きれいな ものは みじかいから、もっと たいせつなのかもしれません。",
      en: "Hearing those words, I thought for a little while. Maybe beautiful things are more precious because they are brief.",
    },
    {
      l1: "ゆうがた、そらが あかく なりました。わたしは こうえんを でて、やどに かえりました。きょうも わすれられない 一（いち）にちでした。",
      en: "In the evening, the sky turned red. I left the park and went back to the inn. Today, too, was an unforgettable day.",
    },
  ],
  vocabSpotlight: [
    { l1: "こうえん", en: "park (kōen)" },
    { l1: "さんぽする", en: "to take a walk (sanpo suru)" },
    { l1: "さくら", en: "cherry blossom (sakura)" },
    { l1: "まんかい", en: "full bloom (mankai)" },
    { l1: "はなみ", en: "cherry-blossom viewing (hanami)" },
    { l1: "はなびら", en: "flower petal (hanabira)" },
    { l1: "ちる", en: "to scatter, to fall (of blossoms) (chiru)" },
    { l1: "わすれられない", en: "unforgettable (wasurerarenai)" },
  ],
  comprehension: [
    {
      q: "Which park did the narrator walk in?",
      options: ["Yoyogi Park", "Ueno Park", "Shinjuku Gyoen", "Hibiya Park"],
      correct: 1,
    },
    {
      q: "What season was it?",
      options: ["Summer", "Autumn", "Winter", "Spring"],
      correct: 3,
    },
    {
      q: "What is 'hanami'?",
      options: ["A festival of lanterns", "Cherry-blossom viewing", "A type of bento", "A temple ceremony"],
      correct: 1,
    },
    {
      q: "According to the old man, why do Japanese people love cherry blossoms?",
      options: [
        "Because they smell nice",
        "Because they scatter quickly / are brief",
        "Because they are rare",
        "Because they are pink",
      ],
      correct: 1,
    },
    {
      q: "What did the narrator do at the end of the day?",
      options: ["Went to a restaurant", "Went back to the inn", "Took a train to Shibuya", "Stayed to watch fireworks"],
      correct: 1,
    },
  ],
};
