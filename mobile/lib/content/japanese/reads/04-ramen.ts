import type { DailyRead } from "../../types";

export const READ_RAMEN: DailyRead = {
  slug: "ramen",
  order: 4,
  stageUnlock: 2,
  difficulty: 5.5,
  titleL1: "ラーメンの ひるごはん",
  titleEn: "Ramen for lunch",
  intro:
    "Sentences are a touch longer here. You'll learn how a ramen shop's ticket machine works, and that slurping your noodles loudly is perfectly polite. Still present-tense です／ます.",
  paragraphs: [
    {
      l1: "おひるです。おなかが すきました。わたしは ラーメンやに いきます。",
      en: "It is noon. I am hungry. I go to a ramen shop.",
    },
    {
      l1: "みせの まえに ひとが ならんでいます。みじかい れつです。わたしも ならびます。",
      en: "People are lined up in front of the shop. It is a short line. I line up too.",
    },
    {
      l1: "ドアの よこに きかいが あります。これは しょっけんの きかいです。",
      en: "Next to the door there is a machine. This is the meal-ticket machine.",
    },
    {
      l1: "わたしは おかねを いれます。ボタンを おします。「しょうゆラーメン」の ボタンです。",
      en: "I put in money. I push a button. It is the \"soy-sauce ramen\" button.",
    },
    {
      l1: "しょっけんが でます。わたしは せきに すわって、てんいんに しょっけんを わたします。",
      en: "A ticket comes out. I sit down at a seat and hand the ticket to the staff.",
    },
    {
      l1: "五（ご）ふんご、ラーメンが きます。スープは あつくて、いい においです。チャーシューと たまごと ねぎが のっています。",
      en: "Five minutes later, the ramen comes. The soup is hot and smells wonderful. There is chāshū pork, egg, and green onion on top.",
    },
    {
      l1: "となりの ひとは おおきい おとで めんを すすります。「ズルズル!」 にっぽんでは、これは しつれいでは ありません。",
      en: "The person next to me slurps the noodles loudly. \"Zuru-zuru!\" In Japan, this is not rude.",
    },
    {
      l1: "わたしも めんを すすります。スープも ぜんぶ のみます。とても おいしいです。",
      en: "I slurp the noodles too. I drink all of the soup as well. It is very delicious.",
    },
    {
      l1: "「ごちそうさまでした」と わたしは いいます。おなかが いっぱいです。",
      en: "\"Thank you for the meal,\" I say. My stomach is full.",
    },
  ],
  vocabSpotlight: [
    { l1: "おなかが すく", en: "to get hungry (onaka ga suku)" },
    { l1: "ならぶ", en: "to line up, to queue (narabu)" },
    { l1: "しょっけん", en: "meal ticket (from a vending machine) (shokken)" },
    { l1: "きかい", en: "machine (kikai)" },
    { l1: "すする", en: "to slurp (susuru)" },
    { l1: "チャーシュー", en: "braised pork topping (chāshū)" },
    { l1: "ごちそうさまでした", en: "\"thank you for the meal\" — said after eating (gochisōsama deshita)" },
    { l1: "おなかが いっぱい", en: "full (stomach) (onaka ga ippai)" },
  ],
  comprehension: [
    {
      q: "What time of day is it?",
      options: ["Morning", "Noon", "Evening", "Night"],
      correct: 1,
    },
    {
      q: "How do you order at this ramen shop?",
      options: ["Tell the waiter", "Use a ticket machine", "Order online", "Point at a menu"],
      correct: 1,
    },
    {
      q: "What kind of ramen does the narrator order?",
      options: ["Miso ramen", "Soy-sauce (shōyu) ramen", "Salt (shio) ramen", "Tonkotsu ramen"],
      correct: 1,
    },
    {
      q: "What does the story say about slurping noodles in Japan?",
      options: ["It is very rude", "It is not rude", "It is only for children", "It is forbidden"],
      correct: 1,
    },
    {
      q: "What does the narrator say after eating?",
      options: ["\"Itadakimasu\"", "\"Gochisōsama deshita\"", "\"Sumimasen\"", "\"Arigatō\""],
      correct: 1,
    },
  ],
};
