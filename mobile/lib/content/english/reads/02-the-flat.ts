import type { DailyRead } from "../../types";

export const READ_THE_FLAT: DailyRead = {
  slug: "the-flat",
  order: 2,
  stageUnlock: 1,
  difficulty: 4.5,
  titleL1: "The flat in Camden",
  titleEn: "The new flat",
  intro:
    "Day two. Still present simple and short sentences, but a few more new words about a home. In Britain, a 'flat' is an apartment, and a 'landlord' is the person who owns it.",
  paragraphs: [
    {
      l1: "The Tube takes me to Camden Town. I come out of the station. The street is busy and loud.",
      en: "The Tube brings me to Camden Town. I leave the station. The street has many people and a lot of noise.",
    },
    {
      l1: "I look at my phone. The flat is near here. It is on a small street with old houses.",
      en: "I check my phone for the address. The flat is close to here. It is on a little street full of old houses.",
    },
    {
      l1: "I find the door. The number is twelve. I press the bell and I wait.",
      en: "I find the right door. The house number is 12. I push the doorbell button and I wait.",
    },
    {
      l1: "A man opens the door. He is the landlord. His name is Tom. He owns the flat.",
      en: "A man opens the door. He is the landlord — the owner. His name is Tom. The flat belongs to him.",
    },
    {
      l1: "\"Hello! You must be the new tenant,\" he says. \"Come in. I'll show you the room.\"",
      en: "\"Hello! You are the new renter, right?\" he says. \"Please come inside. I will show you the room.\"",
    },
    {
      l1: "We go up the stairs. My room is small. There is a bed, a desk, and one window.",
      en: "We walk up the stairs. My room is little. It has a bed, a small table to work at, and one window.",
    },
    {
      l1: "The window looks out on a garden. \"It is quiet at the back,\" Tom says. \"That is good for sleep.\"",
      en: "From the window I can see a garden. \"The back of the house is quiet,\" Tom says. \"That helps you sleep.\"",
    },
    {
      l1: "Tom gives me two keys. \"This one is for the front door. This one is for your room.\" I smile. I am home.",
      en: "Tom hands me two keys. \"The first key opens the front door. The second key opens your room.\" I smile. Now I am home.",
    },
  ],
  vocabSpotlight: [
    { l1: "a flat", en: "British word for an apartment" },
    { l1: "a landlord", en: "the person who owns a flat and rents it out" },
    { l1: "a tenant", en: "the person who rents and lives in the flat" },
    { l1: "to own", en: "to have something as yours" },
    { l1: "the stairs", en: "steps that go up or down between floors" },
    { l1: "a desk", en: "a table where you work or study" },
    { l1: "quiet", en: "with little or no noise" },
    { l1: "a key", en: "a small metal object that opens a lock" },
  ],
  comprehension: [
    {
      q: "Which part of London is the flat in?",
      options: ["Soho", "Camden Town", "Greenwich", "Brixton"],
      correct: 1,
    },
    {
      q: "Who is Tom?",
      options: ["A neighbour", "The landlord", "A taxi driver", "Another tenant"],
      correct: 1,
    },
    {
      q: "What is the house number?",
      options: ["2", "10", "12", "20"],
      correct: 2,
    },
    {
      q: "What can you see from the window?",
      options: ["The street", "A garden", "The Tube station", "A river"],
      correct: 1,
    },
    {
      q: "How many keys does Tom give the narrator?",
      options: ["One", "Two", "Three", "Four"],
      correct: 1,
    },
  ],
};
