import type { DailyRead } from "../../types";

export const READ_CDG: DailyRead = {
  slug: "cdg-arrival",
  order: 1,
  stageUnlock: 1,
  difficulty: 4,
  titleL1: "Arrivée à Paris",
  titleEn: "Arriving in Paris",
  intro:
    "Your very first day. Short, simple sentences in the present tense — just enough French to follow along while you get oriented. Tap any word you don't know to save it.",
  paragraphs: [
    {
      l1: "Aujourd'hui je suis en France. Je suis très content.",
      en: "Today I'm in France. I'm very happy.",
    },
    {
      l1: "L'avion arrive à Paris à sept heures. Le ciel est gris. C'est le matin.",
      en: "The plane arrives in Paris at seven. The sky is grey. It's morning.",
    },
    {
      l1: "Je sors de l'avion. J'ai un sac à dos bleu. J'ai aussi une petite valise. Je marche vers la sortie.",
      en: "I get off the plane. I have a blue backpack. I also have a small suitcase. I walk toward the exit.",
    },
    {
      l1: "Un homme en uniforme regarde mon passeport. Il me dit : « Bienvenue en France. » Je réponds : « Merci ! »",
      en: "A man in uniform looks at my passport. He says to me: \"Welcome to France.\" I answer: \"Thank you!\"",
    },
    {
      l1: "Je cherche un train pour le centre. Il y a un panneau. Le panneau dit : « RER B — direction Paris. »",
      en: "I look for a train to the center. There's a sign. The sign says: \"RER B — direction Paris.\"",
    },
    {
      l1: "J'achète un billet. Le billet coûte onze euros. Je paie par carte.",
      en: "I buy a ticket. The ticket costs eleven euros. I pay by card.",
    },
    {
      l1: "Je monte dans le train. Je trouve une place près de la fenêtre. Je regarde dehors. Je vois des maisons, des arbres, le ciel.",
      en: "I get on the train. I find a seat by the window. I look outside. I see houses, trees, the sky.",
    },
    {
      l1: "Le train arrive à la gare. Le nom est Gare du Nord. La gare est grande. Il y a beaucoup de gens. Paris est ici !",
      en: "The train arrives at the station. The name is Gare du Nord. The station is big. There are lots of people. Paris is here!",
    },
  ],
  vocabSpotlight: [
    { l1: "l'avion", en: "the plane" },
    { l1: "le sac à dos", en: "the backpack" },
    { l1: "la valise", en: "the suitcase" },
    { l1: "le passeport", en: "the passport" },
    { l1: "le billet", en: "the ticket" },
    { l1: "le panneau", en: "the sign" },
    { l1: "la fenêtre", en: "the window" },
    { l1: "la gare", en: "the (train) station" },
  ],
  comprehension: [
    {
      q: "What time does the plane arrive in Paris?",
      options: ["6", "7", "8", "9"],
      correct: 1,
    },
    {
      q: "What color is the narrator's backpack?",
      options: ["red", "blue", "black", "green"],
      correct: 1,
    },
    {
      q: "How does the narrator pay for the ticket?",
      options: ["cash", "card", "phone", "bank transfer"],
      correct: 1,
    },
    {
      q: "How much does the ticket cost?",
      options: ["€9", "€11", "€14", "€16"],
      correct: 1,
    },
    {
      q: "What is the name of the station in Paris?",
      options: ["Montparnasse", "Gare du Nord", "Gare de Lyon", "Saint-Lazare"],
      correct: 1,
    },
  ],
};
