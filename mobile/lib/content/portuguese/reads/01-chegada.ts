import type { DailyRead } from "../../types";

export const READ_CHEGADA: DailyRead = {
  slug: "chegada",
  order: 1,
  stageUnlock: 1,
  difficulty: 4,
  titleL1: "A chegada",
  titleEn: "The arrival",
  intro:
    "Your first moments in Brazil. Simple present-tense sentences — just enough Portuguese to follow along as the narrator lands in Rio de Janeiro. Tap any word to save it.",
  paragraphs: [
    {
      l1: "Hoje eu chego ao Brasil. Estou muito feliz e um pouco nervoso.",
      en: "Today I arrive in Brazil. I am very happy and a little nervous.",
    },
    {
      l1: "O avião pousa no Rio de Janeiro às dez da manhã. O céu está azul e faz calor.",
      en: "The plane lands in Rio de Janeiro at ten in the morning. The sky is blue and it is hot.",
    },
    {
      l1: "Eu saio do avião. Tenho uma mochila azul e uma mala grande. Caminho até a saída.",
      en: "I get off the plane. I have a blue backpack and a big suitcase. I walk to the exit.",
    },
    {
      l1: "Um homem olha o meu passaporte. Ele fala: «Bem-vindo ao Brasil.» Eu respondo: «Muito obrigado.»",
      en: "A man looks at my passport. He says: \"Welcome to Brazil.\" I reply: \"Thank you very much.\"",
    },
    {
      l1: "Pego a minha mala na esteira. Está tudo bem. Agora procuro um táxi.",
      en: "I get my suitcase from the carousel. Everything is fine. Now I look for a taxi.",
    },
    {
      l1: "Lá fora, há muitos táxis amarelos. Eu também abro o aplicativo e peço um carro.",
      en: "Outside, there are many yellow taxis. I also open the app and request a car.",
    },
    {
      l1: "O motorista chega em cinco minutos. Ele sorri e fala: «Boa tarde! Para onde você vai?»",
      en: "The driver arrives in five minutes. He smiles and says: \"Good afternoon! Where are you going?\"",
    },
    {
      l1: "Eu digo o nome do hotel. O carro anda devagar porque há muito trânsito.",
      en: "I say the name of the hotel. The car moves slowly because there is a lot of traffic.",
    },
    {
      l1: "Pela janela eu vejo o mar, as montanhas e muitas pessoas na praia.",
      en: "Through the window I see the sea, the mountains, and many people on the beach.",
    },
    {
      l1: "O carro para na frente do hotel. A viagem custa quarenta reais. Eu pago e digo «obrigado».",
      en: "The car stops in front of the hotel. The ride costs forty reais. I pay and say \"thank you.\"",
    },
    {
      l1: "Eu entro no hotel. Uma moça na recepção fala: «Olá! Bem-vindo ao Rio!»",
      en: "I enter the hotel. A young woman at the reception says: \"Hello! Welcome to Rio!\"",
    },
    {
      l1: "Eu estou cansado, mas muito contente. O Brasil é lindo. Minha viagem começa agora!",
      en: "I am tired, but very happy. Brazil is beautiful. My trip begins now!",
    },
  ],
  vocabSpotlight: [
    { l1: "o avião", en: "the plane" },
    { l1: "a mochila", en: "the backpack" },
    { l1: "a mala", en: "the suitcase" },
    { l1: "o passaporte", en: "the passport" },
    { l1: "o táxi", en: "the taxi" },
    { l1: "o motorista", en: "the driver" },
    { l1: "o trânsito", en: "the traffic" },
    { l1: "a praia", en: "the beach" },
  ],
  comprehension: [
    {
      q: "What time does the plane land?",
      options: ["8am", "9am", "10am", "11am"],
      correct: 2,
    },
    {
      q: "What colour is the narrator's backpack?",
      options: ["red", "blue", "black", "green"],
      correct: 1,
    },
    {
      q: "How does the narrator get to the hotel?",
      options: ["by bus", "by metro", "by car (taxi/app)", "on foot"],
      correct: 2,
    },
    {
      q: "Why does the car move slowly?",
      options: ["it is raining", "there is a lot of traffic", "it is broken", "the driver is lost"],
      correct: 1,
    },
    {
      q: "How much does the ride cost?",
      options: ["R$20", "R$30", "R$40", "R$50"],
      correct: 2,
    },
    {
      q: "How does the narrator feel at the end?",
      options: ["angry", "tired but very happy", "bored", "sad"],
      correct: 1,
    },
  ],
};
