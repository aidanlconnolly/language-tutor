import type { DailyRead } from "../../types";

export const READ_PUB_EVENING: DailyRead = {
  slug: "pub-evening",
  order: 8,
  stageUnlock: 4,
  difficulty: 7.5,
  titleL1: "An evening at the pub",
  titleEn: "A night out",
  intro:
    "Day eight, your hardest read yet. It mixes past simple with the present perfect (\"I've never…\", \"we've finished\") and a few everyday idioms. Each idiom is explained in plain English on the line below, so don't worry — just enjoy the story.",
  paragraphs: [
    {
      l1: "On Friday night, some people from work invited me to the pub. \"Come on,\" said Priya, \"it'll be a laugh.\" I'd never been out with them before, so I felt a little nervous.",
      en: "On Friday evening, a few colleagues asked me to come to the pub. \"Come with us,\" said Priya, \"it will be fun.\" I had never gone out with them before, so I felt slightly worried.",
    },
    {
      l1: "The pub was heaving. We squeezed past the crowd to a corner table, and the noise of laughter and chatter filled the room.",
      en: "The pub was very full of people. We pushed gently through the crowd to a table in the corner, and the sound of laughing and talking filled the room.",
    },
    {
      l1: "\"It's my round,\" said Tom, and he headed to the bar. In Britain, friends often take turns buying drinks for the whole group — that's called 'a round'.",
      en: "\"I'll buy this time,\" said Tom, and he went to the bar. In Britain, friends often take turns buying drinks for everyone — this is known as 'a round'.",
    },
    {
      l1: "He came back with a tray of pints. \"Cheers!\" everyone said, and we clinked our glasses together. I'd heard the word before, but now I finally understood it.",
      en: "He returned with a tray of pints (large glasses of beer). \"Cheers!\" everyone said, and we tapped our glasses together. I had heard the word before, but now I really understood it.",
    },
    {
      l1: "We chatted for hours about work, films, and London. Priya kept making jokes, and at one point I was laughing so hard that I nearly cried.",
      en: "We talked for hours about work, films, and London. Priya told joke after joke, and at one moment I laughed so much that I almost cried.",
    },
    {
      l1: "\"So, are you settling in all right?\" Tom asked. To 'settle in' means to get used to a new place. \"Slowly,\" I said. \"But nights like this definitely help.\"",
      en: "\"So, are you getting used to it here?\" Tom asked. To 'settle in' means to start to feel comfortable in a new place. \"Bit by bit,\" I said. \"But evenings like this really help.\"",
    },
    {
      l1: "Suddenly the barman rang a bell. \"Last orders!\" he called. That means the pub will close soon, so it's your final chance to buy a drink.",
      en: "All at once the barman rang a bell. \"Last orders!\" he shouted. This means the pub is about to close, so it is the last time you can buy a drink.",
    },
    {
      l1: "We finished our drinks and stepped out into the cool night air. \"Same time next week?\" Priya asked. I'd made my first friends in London, and I couldn't stop smiling on the walk home.",
      en: "We drank up and went outside into the cool night air. \"Shall we do this again next week?\" Priya asked. I had made my first friends in London, and I smiled the whole way home.",
    },
  ],
  vocabSpotlight: [
    { l1: "a round", en: "drinks one friend buys for the whole group, taking turns" },
    { l1: "a pint", en: "a large British glass of beer (about 568 ml)" },
    { l1: "Cheers!", en: "what you say while raising your glass before drinking" },
    { l1: "heaving", en: "very crowded; full of people (informal)" },
    { l1: "to settle in", en: "to get used to a new place and feel comfortable" },
    { l1: "last orders", en: "the final chance to buy a drink before the pub closes" },
    { l1: "it'll be a laugh", en: "it will be fun (informal British phrase)" },
    { l1: "to take turns", en: "to do something one after another, each in turn" },
  ],
  comprehension: [
    {
      q: "How does the narrator feel before going out?",
      options: ["Bored", "A little nervous", "Angry", "Sleepy"],
      correct: 1,
    },
    {
      q: "What does it mean when Tom says \"It's my round\"?",
      options: [
        "He will buy drinks for everyone this time",
        "He wants to leave",
        "He will sing a song",
        "He is paying the bill for food",
      ],
      correct: 0,
    },
    {
      q: "What does \"to settle in\" mean?",
      options: [
        "To pay for your drinks",
        "To get used to a new place",
        "To sit down quietly",
        "To leave a place",
      ],
      correct: 1,
    },
    {
      q: "What does \"Last orders!\" mean?",
      options: [
        "The food has run out",
        "It's your final chance to buy a drink before closing",
        "Everyone must be quiet",
        "The bill is ready",
      ],
      correct: 1,
    },
    {
      q: "How does the narrator feel at the end of the evening?",
      options: ["Lonely", "Tired and bored", "Happy, with new friends", "Worried about work"],
      correct: 2,
    },
  ],
};
