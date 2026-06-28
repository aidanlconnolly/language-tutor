import type { DailyRead } from "../../types";

export const READ_BINGUAN: DailyRead = {
  slug: "binguan",
  order: 2,
  stageUnlock: 1,
  difficulty: 4.5,
  titleL1: "宾馆",
  titleEn: "The hotel",
  intro:
    "Still present tense and short sentences, but a few new place words and a tiny check-in conversation. Notice 的 marking 'my' and 'your'.",
  paragraphs: [
    {
      l1: "我到宾馆了。宾馆不大，可是很好。门口有两个人。",
      en: "I arrive at the hotel. The hotel is not big, but it's nice. There are two people at the entrance.",
    },
    {
      l1: "我进去。前台有一个女人。她说：「你好！欢迎你。」",
      en: "I go in. There is a woman at the front desk. She says: \"Hello! Welcome.\"",
    },
    {
      l1: "「你好。我有一个房间。」「好，请给我你的护照。」",
      en: "\"Hello. I have a room.\" \"Good, please give me your passport.\"",
    },
    {
      l1: "我给她护照。她看电脑。「你的房间是三零八。在三楼。」",
      en: "I give her the passport. She looks at the computer. \"Your room is 308. On the third floor.\"",
    },
    {
      l1: "她给我一张房卡。「这是你的房卡。门要用这个卡。」",
      en: "She gives me a key card. \"This is your key card. You need this card for the door.\"",
    },
    {
      l1: "我上楼。我用房卡开门。门开了。房间很小。",
      en: "I go upstairs. I use the key card to open the door. The door opens. The room is small.",
    },
    {
      l1: "房间里有一张床、一个桌子和一个小窗户。床不大，可是很舒服。",
      en: "In the room there is a bed, a table, and a small window. The bed isn't big, but it's comfortable.",
    },
    {
      l1: "我从窗户看北京。外面很热闹。我很高兴。我要睡觉了。",
      en: "I look at Beijing from the window. Outside it's lively. I am very happy. I'm going to sleep.",
    },
  ],
  vocabSpotlight: [
    { l1: "宾馆", en: "hotel (bīnguǎn)" },
    { l1: "前台", en: "front desk / reception (qiántái)" },
    { l1: "房间", en: "room (fángjiān)" },
    { l1: "房卡", en: "key card (fángkǎ)" },
    { l1: "楼", en: "floor / building (lóu); 三楼 = 3rd floor" },
    { l1: "床", en: "bed (chuáng)" },
    { l1: "窗户", en: "window (chuānghu)" },
    { l1: "舒服", en: "comfortable (shūfu)" },
  ],
  comprehension: [
    {
      q: "What is the hotel like?",
      options: ["big and old", "not big but nice", "very expensive", "far from the city"],
      correct: 1,
    },
    {
      q: "What does the receptionist ask for?",
      options: ["money", "the passport", "the luggage", "a phone number"],
      correct: 1,
    },
    {
      q: "Which room and floor is the narrator given?",
      options: ["308, third floor", "108, first floor", "208, second floor", "508, fifth floor"],
      correct: 0,
    },
    {
      q: "What is needed to open the door?",
      options: ["a metal key", "the key card", "a code", "the passport"],
      correct: 1,
    },
    {
      q: "How is the room described?",
      options: ["large but cold", "small but the bed is comfortable", "dirty and noisy", "without a window"],
      correct: 1,
    },
  ],
};
