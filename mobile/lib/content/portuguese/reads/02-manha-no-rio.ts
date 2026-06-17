import type { DailyRead } from "../../types";

export const READ_MANHA_NO_RIO: DailyRead = {
  slug: "manha-no-rio",
  order: 2,
  stageUnlock: 2,
  difficulty: 5,
  titleL1: "Uma manhã no Rio",
  titleEn: "A Morning in Rio",
  intro:
    "A beginner's morning in Rio de Janeiro — breakfast at home, a short walk, and a trip to Copacabana beach. Present tense with short, simple sentences.",
  paragraphs: [
    {
      l1: "Eu acordo cedo. São sete horas da manhã. O sol já está forte no Rio de Janeiro.",
      en: "I wake up early. It is seven in the morning. The sun is already strong in Rio de Janeiro.",
    },
    {
      l1: "Eu moro perto da praia. Da minha janela, eu vejo o mar azul.",
      en: "I live near the beach. From my window, I see the blue sea.",
    },
    {
      l1: "Primeiro, eu tomo café da manhã. Eu como pão com manteiga e uma fruta.",
      en: "First, I have breakfast. I eat bread with butter and a piece of fruit.",
    },
    {
      l1: "Eu também bebo um suco de laranja e um cafezinho. O café no Brasil é muito bom.",
      en: "I also drink an orange juice and a little coffee. Coffee in Brazil is very good.",
    },
    {
      l1: "Depois do café da manhã, eu coloco roupa leve. Está quente hoje.",
      en: "After breakfast, I put on light clothes. It is hot today.",
    },
    {
      l1: "Eu pego a minha toalha e o protetor solar. Eu vou para a praia.",
      en: "I take my towel and the sunscreen. I am going to the beach.",
    },
    {
      l1: "A praia de Copacabana fica perto da minha casa. Eu vou a pé.",
      en: "Copacabana beach is near my house. I go on foot.",
    },
    {
      l1: "Na rua, eu vejo muitas pessoas. Algumas correm e outras andam de bicicleta.",
      en: "On the street, I see many people. Some run and others ride bicycles.",
    },
    {
      l1: "Na praia, a areia é branca e o mar é morno. Eu nado um pouco.",
      en: "At the beach, the sand is white and the sea is warm. I swim a little.",
    },
    {
      l1: "Depois, eu sento na areia. Um vendedor passa e vende água de coco.",
      en: "Afterwards, I sit on the sand. A vendor passes by and sells coconut water.",
    },
    {
      l1: "Eu compro uma água de coco. É gelada e doce. Eu adoro!",
      en: "I buy a coconut water. It is cold and sweet. I love it!",
    },
    {
      l1: "A manhã no Rio é linda. Eu sou muito feliz aqui.",
      en: "The morning in Rio is beautiful. I am very happy here.",
    },
  ],
  vocabSpotlight: [
    { l1: "a praia", en: "the beach" },
    { l1: "o café da manhã", en: "breakfast" },
    { l1: "o cafezinho", en: "a little coffee" },
    { l1: "a areia", en: "the sand" },
    { l1: "a água de coco", en: "coconut water" },
    { l1: "gelado/gelada", en: "cold (chilled)" },
  ],
  comprehension: [
    {
      q: "What time does the narrator wake up?",
      options: ["6am", "7am", "8am", "9am"],
      correct: 1,
    },
    {
      q: "What does the narrator eat for breakfast?",
      options: [
        "Eggs and bacon",
        "Bread with butter and fruit",
        "Cereal and milk",
        "Cheese and ham",
      ],
      correct: 1,
    },
    {
      q: "How does the narrator get to the beach?",
      options: ["By bus", "By car", "On foot", "By bicycle"],
      correct: 2,
    },
    {
      q: "Which beach does the narrator go to?",
      options: ["Ipanema", "Copacabana", "Leblon", "Botafogo"],
      correct: 1,
    },
    {
      q: "What does the vendor sell on the beach?",
      options: ["Ice cream", "Sandwiches", "Coconut water", "Sunglasses"],
      correct: 2,
    },
    {
      q: "How does the narrator feel in Rio?",
      options: ["Tired", "Bored", "Very happy", "Cold"],
      correct: 2,
    },
  ],
};
