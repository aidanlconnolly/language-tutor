import type { DailyRead } from "../../types";

export const READ_LOUVRE: DailyRead = {
  slug: "louvre-visit",
  order: 5,
  stageUnlock: 2,
  difficulty: 6.5,
  titleL1: "Une journée au Louvre",
  titleEn: "A day at the Louvre",
  intro:
    "Visiting the Louvre. Present tense with some passé composé creeping in. Longer descriptive sentences. Tap any word to save it.",
  paragraphs: [
    {
      l1: "Le Louvre est le plus grand musée du monde. J'ai réservé mon billet en ligne, donc je n'attends pas longtemps.",
      en: "The Louvre is the biggest museum in the world. I booked my ticket online, so I don't wait long.",
    },
    {
      l1: "J'entre par la pyramide de verre. À l'intérieur, il y a des escaliers, des couloirs et des milliers de tableaux.",
      en: "I enter through the glass pyramid. Inside, there are stairs, corridors, and thousands of paintings.",
    },
    {
      l1: "Je prends un plan à l'accueil. Le musée est immense et je ne veux pas me perdre.",
      en: "I take a map at reception. The museum is huge and I don't want to get lost.",
    },
    {
      l1: "D'abord, je cherche la Joconde. Beaucoup de gens veulent la voir, donc il y a une grande foule.",
      en: "First, I look for the Mona Lisa. Many people want to see it, so there's a big crowd.",
    },
    {
      l1: "Le tableau est plus petit que je pense. Mais le sourire est célèbre dans le monde entier.",
      en: "The painting is smaller than I think. But the smile is famous around the whole world.",
    },
    {
      l1: "Ensuite, je visite les salles égyptiennes. Je vois des statues anciennes et des objets mystérieux.",
      en: "Then, I visit the Egyptian rooms. I see ancient statues and mysterious objects.",
    },
    {
      l1: "Après trois heures, je suis fatigué mais content. J'ai vu tant de chefs-d'œuvre incroyables.",
      en: "After three hours, I'm tired but happy. I've seen so many incredible masterpieces.",
    },
    {
      l1: "Je sors du musée et je m'assois près de la fontaine. Quelle journée extraordinaire !",
      en: "I leave the museum and sit down near the fountain. What an extraordinary day!",
    },
  ],
  vocabSpotlight: [
    { l1: "le musée", en: "the museum" },
    { l1: "le billet", en: "the ticket" },
    { l1: "le tableau", en: "the painting" },
    { l1: "la foule", en: "the crowd" },
    { l1: "le sourire", en: "the smile" },
    { l1: "la salle", en: "the room / hall" },
    { l1: "le chef-d'œuvre", en: "the masterpiece" },
    { l1: "fatigué", en: "tired" },
  ],
  comprehension: [
    {
      q: "Why doesn't the narrator wait long?",
      options: ["it's early", "he booked online", "he has a special pass", "it's a quiet day"],
      correct: 1,
    },
    {
      q: "How does the narrator enter the museum?",
      options: ["through the back door", "through the glass pyramid", "through a side entrance", "by elevator"],
      correct: 1,
    },
    {
      q: "What does the narrator notice about the Mona Lisa?",
      options: ["it's enormous", "it's smaller than expected", "it's damaged", "it's a copy"],
      correct: 1,
    },
    {
      q: "Which rooms does the narrator visit after the Mona Lisa?",
      options: ["Greek rooms", "Egyptian rooms", "French painting rooms", "sculpture garden"],
      correct: 1,
    },
    {
      q: "How long does the narrator spend in the museum?",
      options: ["one hour", "two hours", "three hours", "all day"],
      correct: 2,
    },
  ],
};
