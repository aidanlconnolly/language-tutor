import type { DailyRead } from "../../types";

export const READ_IZAKAYA: DailyRead = {
  slug: "izakaya",
  order: 8,
  stageUnlock: 4,
  difficulty: 7.5,
  titleL1: "いざかやの よる",
  titleEn: "An evening at the izakaya",
  intro:
    "Your hardest read yet. It mixes past tense, て-form, and — for the first time — casual plain-form speech in the quotes, the way friends actually talk. The set phrases (kanpai, otōshi, otsukare) are explained in the vocab list below.",
  paragraphs: [
    {
      l1: "よる、しぶやで あった あたらしい ともだちが、わたしを いざかやに さそってくれました。「いっしょに のみに いこうよ」と かれは いいました。",
      en: "In the evening, the new friends I'd met in Shibuya invited me to an izakaya. \"Let's go drink together,\" he said.",
    },
    {
      l1: "ちいさい みせの ドアを あけると、てんいんが おおきい こえで 「いらっしゃいませ!」と いいました。なかは けむりと わらいごえで いっぱいでした。",
      en: "When we opened the door of the small place, the staff shouted, \"Welcome!\" in a loud voice. Inside was full of smoke and laughter.",
    },
    {
      l1: "せきに すわると、たのんでいないのに ちいさい りょうりが でてきました。「これは おとおしだよ。せきりょうみたいな ものだから、ことわれないんだ」と ともだちが おしえてくれました。",
      en: "When we sat down, a small dish came out even though we hadn't ordered it. \"This is otōshi. It's like a seat charge, so you can't refuse it,\" my friend explained.",
    },
    {
      l1: "みんなが ビールを たのんで、グラスを たかく あげました。「かんぱい!」と みんなが いいました。わたしも グラスを あわせて、ビールを のみました。",
      en: "Everyone ordered beer and raised their glasses high. \"Cheers!\" everyone said. I clinked my glass too and drank the beer.",
    },
    {
      l1: "わたしたちは やきとりや えだまめや さしみを たべながら、たくさん はなしました。ともだちは しごとの はなしを して、「きょうは つかれたなあ」と わらいました。",
      en: "We talked a lot while eating yakitori, edamame, and sashimi. My friend talked about work and laughed, \"Man, I'm worn out today.\"",
    },
    {
      l1: "「日本語（にほんご）、じょうずだね」と かれが いいました。「まだ まだだよ」と わたしは いいました。みんな わらって、また かんぱいしました。",
      en: "\"Your Japanese is good,\" he said. \"Not yet, not at all,\" I said. Everyone laughed and we toasted again.",
    },
    {
      l1: "おそく なって、わたしたちは みせを でました。「きょうは ほんとうに たのしかった。ありがとう」と わたしは いいました。「また のもうね」と ともだちが いいました。",
      en: "It got late, and we left the shop. \"Today was really fun. Thank you,\" I said. \"Let's drink again sometime,\" my friend said.",
    },
    {
      l1: "えきの まえで、みんなが 「おつかれ!」と いって、てを ふりました。わたしは ひとりで やどへ あるきながら、東京（とうきょう）が だいすきに なったと かんじました。",
      en: "In front of the station, everyone said \"Otsukare!\" and waved. As I walked back to the inn alone, I felt that I had come to love Tokyo.",
    },
  ],
  vocabSpotlight: [
    { l1: "いざかや", en: "Japanese pub serving food and drinks (izakaya)" },
    { l1: "さそう", en: "to invite (sasou)" },
    { l1: "かんぱい", en: "\"cheers!\" — said when toasting (kanpai)" },
    { l1: "おとおし", en: "the small appetizer brought automatically, like a seat charge (otōshi)" },
    { l1: "やきとり", en: "grilled chicken skewers (yakitori)" },
    { l1: "えだまめ", en: "boiled young soybeans (edamame)" },
    { l1: "まだまだ", en: "\"not yet / I've still got a long way to go\" — modest reply (mada mada)" },
    { l1: "おつかれ", en: "casual \"good work / see you\" said when parting (otsukare, short for otsukaresama)" },
  ],
  comprehension: [
    {
      q: "Who invited the narrator to the izakaya?",
      options: ["The café master", "The new friends from Shibuya", "The inn owner", "A train conductor"],
      correct: 1,
    },
    {
      q: "What is 'otōshi'?",
      options: [
        "A type of beer",
        "A small dish served automatically, like a seat charge",
        "The bill",
        "A toast",
      ],
      correct: 1,
    },
    {
      q: "What did everyone say when they raised their glasses?",
      options: ["\"Itadakimasu\"", "\"Kanpai\"", "\"Otsukare\"", "\"Gochisōsama\""],
      correct: 1,
    },
    {
      q: "When the friend praised the narrator's Japanese, how did the narrator reply?",
      options: [
        "\"Thank you, I know\"",
        "\"Mada mada\" (not yet / still learning)",
        "\"Of course\"",
        "He said nothing",
      ],
      correct: 1,
    },
    {
      q: "What did everyone say when parting at the station?",
      options: ["\"Kanpai\"", "\"Otsukare\"", "\"Irasshaimase\"", "\"Gomen kudasai\""],
      correct: 1,
    },
  ],
};
