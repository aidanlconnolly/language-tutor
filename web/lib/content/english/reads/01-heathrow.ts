import type { DailyRead } from "../../types";

export const READ_HEATHROW: DailyRead = {
  slug: "heathrow",
  order: 1,
  stageUnlock: 1,
  difficulty: 4,
  titleL1: "Arrival at Heathrow",
  titleEn: "Arriving at the airport",
  intro:
    "Your first read. Everything is in the present simple, with very short sentences and very common words. The 'en' line under each paragraph says the same thing in even simpler English.",
  paragraphs: [
    {
      l1: "The plane lands at Heathrow. It is nine in the morning. The sky is grey. It is raining.",
      en: "The plane comes down at Heathrow airport. It is 9am. The sky is grey. Rain is falling.",
    },
    {
      l1: "I am tired. The flight is long. But I am happy. London is a new home.",
      en: "I feel tired. The flight took a long time. But I am glad. London is my new home.",
    },
    {
      l1: "I leave the plane. I follow the signs. They say 'Arrivals' and 'Passport Control'.",
      en: "I get off the plane. I walk where the signs point. The signs say 'Arrivals' and 'Passport Control'.",
    },
    {
      l1: "There is a long queue. I wait. An officer takes my passport. He looks at me.",
      en: "Many people stand in a line. I stand and wait. A worker takes my passport. He looks at my face.",
    },
    {
      l1: "\"Why are you in London?\" he asks. \"I have a new job here,\" I say. He smiles. \"Welcome to the UK.\"",
      en: "\"Why do you come to London?\" he asks. \"I start a new job here,\" I say. He smiles. \"Welcome to Britain.\"",
    },
    {
      l1: "I take my bag from the belt. It is heavy. Now I need a train to the city.",
      en: "I pick up my suitcase from the moving belt. It is heavy. Now I want a train into central London.",
    },
    {
      l1: "I see a sign: 'Underground'. The Underground is the London train. People call it 'the Tube'.",
      en: "I read a sign: 'Underground'. The Underground is the London city train. Londoners call it 'the Tube'.",
    },
    {
      l1: "I buy a ticket. The train is fast. I look out of the window. My new life starts now.",
      en: "I buy a ticket. The train goes quickly. I look through the window. My new life begins right now.",
    },
  ],
  vocabSpotlight: [
    { l1: "to land", en: "to come down from the sky and touch the ground (a plane)" },
    { l1: "a flight", en: "a journey in a plane" },
    { l1: "Arrivals", en: "the part of an airport where you come in" },
    { l1: "Passport Control", en: "the place where an officer checks your passport" },
    { l1: "a queue", en: "a line of people who wait their turn" },
    { l1: "the Underground / the Tube", en: "the London train system under the city" },
    { l1: "a ticket", en: "a small paper or card that lets you travel" },
    { l1: "heavy", en: "weighing a lot; hard to lift" },
  ],
  comprehension: [
    {
      q: "What time does the plane land?",
      options: ["7am", "9am", "12pm", "3pm"],
      correct: 1,
    },
    {
      q: "What is the weather like?",
      options: ["Sunny and warm", "Grey and raining", "Snowing", "Windy but clear"],
      correct: 1,
    },
    {
      q: "Why is the narrator coming to London?",
      options: ["For a holiday", "To visit family", "For a new job", "To study at university"],
      correct: 2,
    },
    {
      q: "What does the officer say at the end of their chat?",
      options: ["\"Have a good flight.\"", "\"Welcome to the UK.\"", "\"Please wait here.\"", "\"Show me your ticket.\""],
      correct: 1,
    },
    {
      q: "What is another name for the Underground?",
      options: ["the Bus", "the Tram", "the Tube", "the Line"],
      correct: 2,
    },
  ],
};
