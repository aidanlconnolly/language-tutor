import type { DailyRead } from "../../types";

export const READ_MONTMARTRE: DailyRead = {
  slug: "montmartre-day",
  order: 7,
  stageUnlock: 3,
  difficulty: 8,
  titleL1: "Une journée à Montmartre",
  titleEn: "A day in Montmartre",
  intro:
    "A day exploring the artists' hill of Montmartre. This read uses passé composé and imparfait together to tell a story. Longer paragraphs and richer vocabulary. Tap any word to save it.",
  paragraphs: [
    {
      l1: "Ce matin-là, il faisait beau et le ciel était bleu. J'ai décidé de monter à Montmartre, le quartier des artistes.",
      en: "That morning, the weather was nice and the sky was blue. I decided to go up to Montmartre, the artists' quarter.",
    },
    {
      l1: "J'ai pris le funiculaire pour monter la colline, parce qu'il y a beaucoup d'escaliers. En haut, la vue sur Paris était spectaculaire.",
      en: "I took the funicular to go up the hill, because there are lots of stairs. At the top, the view of Paris was spectacular.",
    },
    {
      l1: "Devant le Sacré-Cœur, des touristes prenaient des photos. Un musicien jouait de la guitare et tout le monde l'écoutait.",
      en: "In front of Sacré-Cœur, tourists were taking photos. A musician was playing the guitar and everyone was listening to him.",
    },
    {
      l1: "Je suis entré dans la basilique. À l'intérieur, il faisait sombre et frais. Les gens priaient en silence.",
      en: "I went into the basilica. Inside, it was dark and cool. People were praying in silence.",
    },
    {
      l1: "Après, je me suis promené dans les petites rues. Sur la place du Tertre, des peintres faisaient des portraits.",
      en: "Afterward, I strolled through the little streets. In the Place du Tertre, painters were making portraits.",
    },
    {
      l1: "Un artiste m'a proposé de dessiner mon portrait. J'ai accepté et je me suis assis sur une chaise.",
      en: "An artist offered to draw my portrait. I accepted and sat down on a chair.",
    },
    {
      l1: "Pendant qu'il dessinait, nous avons parlé de Paris et de la vie d'artiste. Il était très sympathique.",
      en: "While he was drawing, we talked about Paris and the life of an artist. He was very friendly.",
    },
    {
      l1: "À la fin de la journée, j'ai bu un café en terrasse en regardant le coucher du soleil. C'était un moment parfait.",
      en: "At the end of the day, I drank a coffee on a terrace while watching the sunset. It was a perfect moment.",
    },
  ],
  vocabSpotlight: [
    { l1: "la colline", en: "the hill" },
    { l1: "le funiculaire", en: "the funicular" },
    { l1: "la vue", en: "the view" },
    { l1: "la basilique", en: "the basilica" },
    { l1: "se promener", en: "to stroll / walk around" },
    { l1: "le peintre", en: "the painter" },
    { l1: "le portrait", en: "the portrait" },
    { l1: "le coucher du soleil", en: "the sunset" },
  ],
  comprehension: [
    {
      q: "How did the narrator get up the hill?",
      options: ["by taxi", "by funicular", "on foot up the stairs", "by bus"],
      correct: 1,
    },
    {
      q: "What was a musician doing in front of Sacré-Cœur?",
      options: ["selling tickets", "playing the guitar", "taking photos", "drawing portraits"],
      correct: 1,
    },
    {
      q: "What did the narrator notice inside the basilica?",
      options: ["it was bright and warm", "it was dark and cool", "it was very loud", "it was empty"],
      correct: 1,
    },
    {
      q: "What did the artist on the Place du Tertre offer to do?",
      options: ["sell a painting", "draw the narrator's portrait", "give a tour", "teach painting"],
      correct: 1,
    },
    {
      q: "How did the narrator end the day?",
      options: ["having dinner", "watching the sunset with a coffee", "buying souvenirs", "taking the metro home"],
      correct: 1,
    },
  ],
};
