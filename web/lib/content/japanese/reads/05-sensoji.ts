import type { DailyRead } from "../../types";

export const READ_SENSOJI: DailyRead = {
  slug: "sensoji",
  order: 5,
  stageUnlock: 2,
  difficulty: 6,
  titleL1: "せんそうじ",
  titleEn: "Sensō-ji temple",
  intro:
    "Now you meet the past tense: ました and でした. Watch how the narrator describes what happened at the temple. A bit more kanji too — always with readings in parentheses.",
  paragraphs: [
    {
      l1: "ごぜん 十（じゅう）じに、わたしは せんそうじに いきました。あさくさで いちばん ゆうめいな おてらです。",
      en: "At ten in the morning, I went to Sensō-ji. It is the most famous temple in Asakusa.",
    },
    {
      l1: "おおきい あかい もんが ありました。「かみなりもん」です。もんに おおきい ちょうちんが ありました。",
      en: "There was a big red gate. It is the \"Kaminarimon\" (Thunder Gate). On the gate there was a huge lantern.",
    },
    {
      l1: "もんの むこうに ながい みちが ありました。「なかみせ」です。みせが たくさん ならんでいました。",
      en: "Beyond the gate there was a long street. It is \"Nakamise.\" Many shops were lined up.",
    },
    {
      l1: "わたしは おみやげを みました。せんすや、おかしや、にんぎょうが ありました。にんきが ありました。",
      en: "I looked at the souvenirs. There were folding fans, sweets, and dolls. They were popular.",
    },
    {
      l1: "おてらの まえに けむりが でていました。みんな その けむりを からだに あびました。「からだに いいです」と おばあさんが いいました。",
      en: "In front of the temple, smoke was rising. Everyone bathed their bodies in that smoke. \"It's good for the body,\" an old woman said.",
    },
    {
      l1: "わたしは おみくじを ひきました。百（ひゃく）えんを いれて、ぼうを ふりました。かみに 「だいきち」と かいてありました。",
      en: "I drew an omikuji fortune. I put in a hundred yen and shook the stick. On the paper it said \"daikichi\" (great luck).",
    },
    {
      l1: "「だいきちは いちばん いい うんです」と かかりの ひとが おしえてくれました。わたしは とても うれしかったです。",
      en: "\"Daikichi is the best luck,\" the staff person told me. I was very happy.",
    },
    {
      l1: "ゆうがた、わたしは おてらを でました。そらは ピンクいろでした。とても いい 一（いち）にちでした。",
      en: "In the evening, I left the temple. The sky was pink. It was a very good day.",
    },
  ],
  vocabSpotlight: [
    { l1: "おてら", en: "Buddhist temple (o-tera)" },
    { l1: "もん", en: "gate (mon)" },
    { l1: "ちょうちん", en: "paper lantern (chōchin)" },
    { l1: "おみやげ", en: "souvenir (o-miyage)" },
    { l1: "おみくじ", en: "paper fortune drawn at a shrine/temple (o-mikuji)" },
    { l1: "だいきち", en: "\"great luck\" — the best omikuji result (daikichi)" },
    { l1: "うん", en: "luck, fortune (un)" },
    { l1: "〜ました", en: "polite past-tense ending (-mashita)" },
  ],
  comprehension: [
    {
      q: "What time did the narrator go to Sensō-ji?",
      options: ["8am", "9am", "10am", "Noon"],
      correct: 2,
    },
    {
      q: "What is the name of the big red gate?",
      options: ["Nakamise", "Kaminarimon", "Skytree", "Asakusa-mon"],
      correct: 1,
    },
    {
      q: "What is Nakamise?",
      options: ["A temple hall", "A long shopping street", "A garden", "A river"],
      correct: 1,
    },
    {
      q: "What fortune did the narrator draw?",
      options: ["Bad luck (kyō)", "Small luck (shōkichi)", "Great luck (daikichi)", "Nothing"],
      correct: 2,
    },
    {
      q: "What color was the sky in the evening?",
      options: ["Blue", "Gray", "Pink", "Orange"],
      correct: 2,
    },
  ],
};
