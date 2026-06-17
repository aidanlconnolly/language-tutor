import type { DailyRead } from "../../types";

export const READ_NO_BOTECO: DailyRead = {
  slug: "boteco",
  order: 5,
  stageUnlock: 4,
  difficulty: 7,
  titleL1: "Uma noite no boteco",
  titleEn: "A night at the boteco",
  intro:
    "An evening at a Brazilian boteco — ordering chope and petiscos with friends and splitting the comanda at the end. Brazilian Portuguese with a natural mix of present and past tense.",
  paragraphs: [
    {
      l1: "São sete horas de uma sexta-feira. Depois de uma semana longa de trabalho, eu e meus amigos decidimos sair. Vamos a um boteco no bairro da Vila Madalena, em São Paulo.",
      en: "It is seven o'clock on a Friday. After a long week of work, my friends and I decide to go out. We go to a boteco in the Vila Madalena neighbourhood, in São Paulo.",
    },
    {
      l1: "O boteco se chama «Seu Zé». É um lugar simples, com mesas na calçada e luzes amarelas. Quando chegamos, o lugar já está cheio, mas o garçom arruma uma mesa para nós.",
      en: "The boteco is called \"Seu Zé\". It is a simple place, with tables on the sidewalk and yellow lights. When we arrive, the place is already full, but the waiter arranges a table for us.",
    },
    {
      l1: "O garçom chega logo com a comanda. «Boa noite, pessoal! O que vão querer?» pergunta ele. «Para começar, traz um chope bem gelado para todo mundo», responde a Carla.",
      en: "The waiter comes right away with the tab. \"Good evening, everyone! What would you like?\" he asks. \"To start, bring an ice-cold draft beer for everyone,\" Carla answers.",
    },
    {
      l1: "Em poucos minutos, o garçom volta com quatro copos de chope. A espuma está perfeita, com dois dedos no topo. «Saúde!» dizemos todos juntos, batendo os copos.",
      en: "In a few minutes, the waiter comes back with four glasses of draft beer. The foam is perfect, with two fingers on top. \"Cheers!\" we all say together, clinking our glasses.",
    },
    {
      l1: "Agora é hora dos petiscos. Pedimos coxinha, pastel de carne e uma porção de pão de queijo bem quentinho. O Bruno também quer batata frita, porque ele sempre tem fome.",
      en: "Now it is time for the snacks. We order coxinha, a meat pastel, and a portion of nice hot pão de queijo. Bruno also wants french fries, because he is always hungry.",
    },
    {
      l1: "Quando a comida chega, todo mundo fica feliz. A coxinha está crocante por fora e cremosa por dentro. «Esse pastel é o melhor da cidade», diz o Bruno, com a boca cheia.",
      en: "When the food arrives, everyone is happy. The coxinha is crispy on the outside and creamy on the inside. \"This pastel is the best in the city,\" says Bruno, with his mouth full.",
    },
    {
      l1: "Enquanto comemos, conversamos sobre a semana. A Carla conta que conseguiu um emprego novo. Todos batem palmas e pedem mais uma rodada de chope para comemorar.",
      en: "While we eat, we talk about the week. Carla tells us that she got a new job. Everyone claps and orders another round of draft beer to celebrate.",
    },
    {
      l1: "Eu explico para um amigo estrangeiro que o boteco é parte da cultura brasileira. «Aqui a gente vem para relaxar, conversar e esquecer os problemas», digo eu. «É quase uma segunda casa.»",
      en: "I explain to a foreign friend that the boteco is part of Brazilian culture. \"Here we come to relax, chat, and forget our problems,\" I say. \"It's almost a second home.\"",
    },
    {
      l1: "A noite passa rápido. Rimos muito, contamos histórias antigas e ouvimos um pouco de música ao fundo. Lá fora, a rua está animada, cheia de gente fazendo a mesma coisa que a gente.",
      en: "The night goes by fast. We laugh a lot, tell old stories, and listen to a bit of music in the background. Outside, the street is lively, full of people doing the same thing as us.",
    },
    {
      l1: "Por volta das onze horas, pedimos a conta. O garçom traz a comanda e divide tudo igual entre nós. No fim, cada um paga quarenta reais. Não é caro para uma noite tão boa.",
      en: "Around eleven o'clock, we ask for the bill. The waiter brings the tab and splits everything equally among us. In the end, each of us pays forty reais. It is not expensive for such a good night.",
    },
    {
      l1: "Deixamos uma gorjeta para o garçom, que foi muito simpático. «Voltem sempre!» diz ele, sorrindo. Nós prometemos voltar na próxima sexta-feira.",
      en: "We leave a tip for the waiter, who was very friendly. \"Come back anytime!\" he says, smiling. We promise to come back next Friday.",
    },
    {
      l1: "Quando saio para a rua, sinto o ar fresco da noite. Estou cansado, mas feliz. Para mim, não existe jeito melhor de terminar a semana do que com os amigos no boteco.",
      en: "When I step out onto the street, I feel the cool night air. I am tired, but happy. For me, there is no better way to end the week than with friends at the boteco.",
    },
  ],
  vocabSpotlight: [
    { l1: "o boteco", en: "the casual neighbourhood bar" },
    { l1: "o chope", en: "draft beer" },
    { l1: "os petiscos", en: "snacks / small plates" },
    { l1: "a coxinha", en: "teardrop-shaped fried chicken croquette" },
    { l1: "o pastel", en: "fried filled pastry" },
    { l1: "o pão de queijo", en: "cheese bread" },
    { l1: "o garçom", en: "the waiter" },
    { l1: "a comanda", en: "the tab / order slip" },
    { l1: "a conta", en: "the bill" },
    { l1: "a gorjeta", en: "the tip" },
    { l1: "Saúde!", en: "Cheers!" },
  ],
  comprehension: [
    {
      q: "What day of the week do they go out?",
      options: ["Monday", "Wednesday", "Friday", "Sunday"],
      correct: 2,
    },
    {
      q: "What do they order first?",
      options: ["Coffee", "Ice-cold chope (draft beer)", "Caipirinha", "Water"],
      correct: 1,
    },
    {
      q: "Which of these petiscos do they order?",
      options: [
        "Coxinha, pastel, and pão de queijo",
        "Pizza and salad",
        "Sushi and rice",
        "Soup and bread",
      ],
      correct: 0,
    },
    {
      q: "What good news does Carla share?",
      options: [
        "She is getting married",
        "She got a new job",
        "She bought a car",
        "She is moving abroad",
      ],
      correct: 1,
    },
    {
      q: "How does the narrator describe the boteco in Brazilian culture?",
      options: [
        "Like a museum",
        "Like an office",
        "Almost a second home",
        "Like a library",
      ],
      correct: 2,
    },
    {
      q: "How much does each person pay at the end?",
      options: ["20 reais", "40 reais", "60 reais", "80 reais"],
      correct: 1,
    },
  ],
};
