import type { DailyRead } from "../../types";

export const READ_NA_FEIRA: DailyRead = {
  slug: "feira",
  order: 6,
  stageUnlock: 6,
  difficulty: 7,
  titleL1: "Na feira",
  titleEn: "At the street market",
  intro:
    "A Sunday morning at a Brazilian feira livre — the colours, the sounds, the smells, buying produce and a bit of friendly haggling. Brazilian Portuguese, narrative past with dialogue.",
  paragraphs: [
    {
      l1: "No domingo de manhã, acordei cedo e fui à feira livre do meu bairro. Toda semana ela acontece na mesma rua, perto da minha casa.",
      en: "On Sunday morning, I woke up early and went to the street market in my neighbourhood. Every week it takes place on the same street, near my house.",
    },
    {
      l1: "Quando cheguei, a rua já estava cheia de gente. As barracas coloridas ficavam uma do lado da outra, e o cheiro de fruta madura estava no ar.",
      en: "When I arrived, the street was already full of people. The colourful stalls stood one beside the other, and the smell of ripe fruit was in the air.",
    },
    {
      l1: "Os feirantes gritavam os preços: «Olha o abacaxi! Olha a manga! Tudo baratinho, freguesa!» A feira tem uma música própria, feita de vozes e risadas.",
      en: "The market vendors shouted out the prices: \"Look at the pineapple! Look at the mango! Everything dirt cheap, miss!\" The market has its own music, made of voices and laughter.",
    },
    {
      l1: "Primeiro, parei na barraca de frutas. Comprei mamão, banana, laranja e um cacho de uva. O feirante escolhia as melhores frutas e colocava tudo numa sacola.",
      en: "First, I stopped at the fruit stall. I bought papaya, banana, orange and a bunch of grapes. The vendor picked out the best fruit and put everything into a bag.",
    },
    {
      l1: "Depois fui à barraca de verduras e legumes. Havia alface, tomate, cebola, batata e cheiro-verde fresquinho. Pedi um maço de couve para fazer no almoço.",
      en: "Then I went to the vegetable stall. There was lettuce, tomato, onion, potato and fresh herbs. I asked for a bunch of kale to cook for lunch.",
    },
    {
      l1: "Numa banca de tomates, perguntei: «Quanto custa o quilo?» O homem respondeu: «Cinco reais.» Eu disse: «E se eu levar dois quilos, faz quatro cada?»",
      en: "At a tomato stand, I asked: \"How much is a kilo?\" The man answered: \"Five reais.\" I said: \"And if I take two kilos, will you make it four each?\"",
    },
    {
      l1: "Ele pensou um pouco, sorriu e disse: «Pode ser, mas só porque a senhora é cliente.» Paguei, agradeci e guardei os tomates na minha bolsa.",
      en: "He thought for a moment, smiled and said: \"All right, but only because you're a regular customer.\" I paid, thanked him and tucked the tomatoes into my bag.",
    },
    {
      l1: "O melhor da feira, porém, vem no fim: o pastel de feira. Pedi um pastel de queijo, bem grande e crocante, fritado na hora.",
      en: "The best part of the market, though, comes at the end: the feira pastry. I ordered a cheese pastel, nice and big and crunchy, fried right there.",
    },
    {
      l1: "Para acompanhar, tomei um copo de caldo de cana bem gelado. O doce da cana com o salgado do pastel é uma combinação clássica que todo brasileiro conhece.",
      en: "To go with it, I drank a glass of ice-cold sugarcane juice. The sweetness of the cane with the savoury pastry is a classic combination that every Brazilian knows.",
    },
    {
      l1: "Sentei-me num banco para comer com calma. Ao meu redor, as famílias conversavam, as crianças corriam e um cachorro esperava por uma migalha de pastel.",
      en: "I sat down on a bench to eat slowly. Around me, families chatted, children ran about and a dog waited for a crumb of pastry.",
    },
    {
      l1: "Quando terminei, as sacolas já estavam pesadas. Tinha comprado quase tudo para a semana, e ainda gastei pouco dinheiro.",
      en: "When I finished, my bags were already heavy. I had bought almost everything for the week, and still spent little money.",
    },
    {
      l1: "Voltei para casa devagar, sentindo o sol da manhã. A feira não é só um lugar para comprar comida — é um pedaço vivo da cultura do meu bairro.",
      en: "I walked home slowly, feeling the morning sun. The market isn't just a place to buy food — it's a living piece of my neighbourhood's culture.",
    },
  ],
  vocabSpotlight: [
    { l1: "a feira livre", en: "the open-air street market" },
    { l1: "a barraca / a banca", en: "the stall / stand" },
    { l1: "o feirante", en: "the market vendor" },
    { l1: "as verduras e os legumes", en: "leafy greens and vegetables" },
    { l1: "o cheiro-verde", en: "fresh herbs (parsley + spring onion)" },
    { l1: "o pastel de feira", en: "the deep-fried filled pastry sold at markets" },
    { l1: "o caldo de cana", en: "fresh sugarcane juice" },
    { l1: "baratinho", en: "really cheap (affectionate diminutive)" },
  ],
  comprehension: [
    {
      q: "When does the narrator go to the feira?",
      options: ["Saturday afternoon", "Sunday morning", "Friday evening", "Monday morning"],
      correct: 1,
    },
    {
      q: "What did the narrator buy at the fruit stall?",
      options: [
        "Papaya, banana, orange and grapes",
        "Only pineapple and mango",
        "Lettuce, tomato and onion",
        "Just a bunch of grapes",
      ],
      correct: 0,
    },
    {
      q: "How did the haggling over the tomatoes turn out?",
      options: [
        "The vendor refused to lower the price",
        "The narrator paid five reais a kilo",
        "The vendor agreed to four reais each for two kilos",
        "The narrator walked away without buying",
      ],
      correct: 2,
    },
    {
      q: "What classic combination did the narrator enjoy at the end?",
      options: [
        "Coffee and bread",
        "A pastel de feira with sugarcane juice",
        "Grapes and water",
        "Kale and tomatoes",
      ],
      correct: 1,
    },
    {
      q: "What is the narrator's main feeling about the feira by the end?",
      options: [
        "It was too expensive",
        "It was crowded and unpleasant",
        "It is a living piece of the neighbourhood's culture",
        "It only sells fruit",
      ],
      correct: 2,
    },
  ],
};
