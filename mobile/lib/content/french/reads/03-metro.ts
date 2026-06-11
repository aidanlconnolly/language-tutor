import type { DailyRead } from "../../types";

export const READ_METRO: DailyRead = {
  slug: "metro",
  order: 3,
  stageUnlock: 1,
  difficulty: 5,
  titleL1: "Dans le métro",
  titleEn: "On the metro",
  intro:
    "Navigating the Paris metro for the first time. Present tense with a few longer sentences. Tap any word to save it.",
  paragraphs: [
    {
      l1: "Je veux visiter le Louvre. Je dois prendre le métro. C'est ma première fois.",
      en: "I want to visit the Louvre. I have to take the metro. It's my first time.",
    },
    {
      l1: "J'achète un ticket au guichet. La dame me donne un petit ticket blanc.",
      en: "I buy a ticket at the counter. The lady gives me a small white ticket.",
    },
    {
      l1: "Je regarde le plan. Le Louvre est sur la ligne un. Je cherche la bonne direction.",
      en: "I look at the map. The Louvre is on line one. I look for the right direction.",
    },
    {
      l1: "Il faut composter le ticket. Je passe le ticket dans la machine et la barrière s'ouvre.",
      en: "You have to validate the ticket. I put the ticket in the machine and the gate opens.",
    },
    {
      l1: "Sur le quai, il y a beaucoup de monde. Le train arrive vite. Les portes s'ouvrent.",
      en: "On the platform, there are lots of people. The train arrives quickly. The doors open.",
    },
    {
      l1: "Je monte dans le train. Je ne trouve pas de place, donc je reste debout.",
      en: "I get on the train. I can't find a seat, so I stay standing.",
    },
    {
      l1: "Une voix annonce les stations. « Prochain arrêt : Louvre-Rivoli. » C'est ma station !",
      en: "A voice announces the stations. \"Next stop: Louvre-Rivoli.\" It's my station!",
    },
    {
      l1: "Je descends du train. Je suis le panneau « Sortie ». Enfin, je vois le musée. C'est magnifique !",
      en: "I get off the train. I follow the \"Exit\" sign. Finally, I see the museum. It's magnificent!",
    },
  ],
  vocabSpotlight: [
    { l1: "le métro", en: "the metro" },
    { l1: "le ticket", en: "the ticket" },
    { l1: "le guichet", en: "the ticket counter" },
    { l1: "composter", en: "to validate (a ticket)" },
    { l1: "le quai", en: "the platform" },
    { l1: "la station", en: "the (metro) station" },
    { l1: "la sortie", en: "the exit" },
    { l1: "debout", en: "standing" },
  ],
  comprehension: [
    {
      q: "Where does the narrator want to go?",
      options: ["the Eiffel Tower", "the Louvre", "Montmartre", "Notre-Dame"],
      correct: 1,
    },
    {
      q: "What line is the Louvre on?",
      options: ["line 1", "line 4", "line 9", "line 14"],
      correct: 0,
    },
    {
      q: "What must you do before boarding?",
      options: ["buy a Navigo pass", "validate (composter) the ticket", "show your passport", "find a seat"],
      correct: 1,
    },
    {
      q: "Why does the narrator stay standing?",
      options: ["it's a short ride", "there are no seats free", "he prefers it", "the seats are dirty"],
      correct: 1,
    },
    {
      q: "What is the narrator's station?",
      options: ["Châtelet", "Louvre-Rivoli", "Bastille", "Concorde"],
      correct: 1,
    },
  ],
};
