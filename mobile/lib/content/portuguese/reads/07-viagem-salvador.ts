import type { DailyRead } from "../../types";

export const READ_VIAGEM_SALVADOR: DailyRead = {
  slug: "viagem-salvador",
  order: 7,
  stageUnlock: 5,
  difficulty: 8,
  titleL1: "Uma viagem a Salvador",
  titleEn: "A trip to Salvador",
  intro:
    "A past-tense travel narrative about a trip to Salvador, Bahia — the Pelourinho, Afro-Brazilian culture, acarajé, the beaches and the music. Brazilian Portuguese mixing pretérito perfeito and imperfeito.",
  paragraphs: [
    {
      l1: "No ano passado, eu viajei para Salvador, na Bahia. Era a primeira vez que eu visitava o Nordeste do Brasil, e estava muito animado.",
      en: "Last year, I traveled to Salvador, in Bahia. It was the first time I was visiting the Northeast of Brazil, and I was very excited.",
    },
    {
      l1: "Quando o avião pousou, o calor já me esperava na porta. Fazia muito sol e o céu estava completamente azul.",
      en: "When the plane landed, the heat was already waiting for me at the door. It was very sunny and the sky was completely blue.",
    },
    {
      l1: "No primeiro dia, eu fui ao Pelourinho, o centro histórico da cidade. As ruas eram de pedra e as casas tinham cores vivas — amarelo, rosa, azul.",
      en: "On the first day, I went to the Pelourinho, the historic center of the city. The streets were cobblestone and the houses had bright colors — yellow, pink, blue.",
    },
    {
      l1: "Enquanto eu caminhava, ouvia música por toda parte. Um grupo tocava tambores na praça e algumas pessoas dançavam ao ritmo do axé.",
      en: "While I was walking, I heard music everywhere. A group was playing drums in the square and some people were dancing to the rhythm of axé.",
    },
    {
      l1: "Salvador tem uma forte cultura afro-brasileira. Eu assisti a uma roda de capoeira, onde os homens lutavam e dançavam ao mesmo tempo, com muita agilidade.",
      en: "Salvador has a strong Afro-Brazilian culture. I watched a capoeira circle, where the men fought and danced at the same time, with great agility.",
    },
    {
      l1: "Na hora do almoço, eu provei o acarajé pela primeira vez. Uma baiana de roupa branca o preparava ali mesmo, com camarão e um molho bem picante.",
      en: "At lunchtime, I tried acarajé for the first time. A Bahian woman in white clothing was preparing it right there, with shrimp and a very spicy sauce.",
    },
    {
      l1: "Estava delicioso, mas tão picante que eu precisei beber muita água! A vendedora riu e disse que eu era um turista de verdade.",
      en: "It was delicious, but so spicy that I needed to drink a lot of water! The vendor laughed and said that I was a real tourist.",
    },
    {
      l1: "À tarde, eu fui à praia do Porto da Barra. O mar estava morno e tranquilo, e havia muita gente tomando sol e conversando.",
      en: "In the afternoon, I went to Porto da Barra beach. The sea was warm and calm, and there were many people sunbathing and chatting.",
    },
    {
      l1: "Eu fiquei lá até o pôr do sol. O céu ficou alaranjado e todos aplaudiram quando o sol desapareceu no horizonte — era uma tradição linda.",
      en: "I stayed there until sunset. The sky turned orange and everyone applauded when the sun disappeared on the horizon — it was a beautiful tradition.",
    },
    {
      l1: "À noite, eu jantei moqueca, um ensopado de peixe com leite de coco e dendê. O sabor era diferente de tudo que eu já tinha comido.",
      en: "At night, I had moqueca for dinner, a fish stew with coconut milk and palm oil. The flavor was different from everything I had ever eaten.",
    },
    {
      l1: "Depois do jantar, eu voltei ao Pelourinho. As ruas estavam cheias de vida: havia bares, música ao vivo e turistas de muitos países.",
      en: "After dinner, I went back to the Pelourinho. The streets were full of life: there were bars, live music and tourists from many countries.",
    },
    {
      l1: "Quando finalmente voltei para casa, eu já sentia saudade de Salvador. Aquela cidade alegre e cheia de história ficou no meu coração para sempre.",
      en: "When I finally went back home, I already missed Salvador. That cheerful city full of history stayed in my heart forever.",
    },
  ],
  vocabSpotlight: [
    { l1: "o Pelourinho", en: "the historic center of Salvador" },
    { l1: "o acarajé", en: "acarajé (a black-eyed pea fritter, Bahian street food)" },
    { l1: "a baiana", en: "a Bahian woman (often a traditional street-food seller)" },
    { l1: "a capoeira", en: "capoeira (Afro-Brazilian martial art / dance)" },
    { l1: "a moqueca", en: "moqueca (Bahian fish stew with coconut milk)" },
    { l1: "o dendê", en: "palm oil (key ingredient in Bahian cooking)" },
    { l1: "picante", en: "spicy" },
    { l1: "o pôr do sol", en: "the sunset" },
    { l1: "sentir saudade", en: "to miss (something/someone)" },
  ],
  comprehension: [
    {
      q: "Which region of Brazil is Salvador in?",
      options: ["The South", "The Northeast", "The Amazon", "The Center-West"],
      correct: 1,
    },
    {
      q: "What is the Pelourinho?",
      options: ["A beach", "The historic center of the city", "A type of food", "A music festival"],
      correct: 1,
    },
    {
      q: "What did the narrator try for lunch on the first day?",
      options: ["Moqueca", "Feijoada", "Acarajé", "Pão de queijo"],
      correct: 2,
    },
    {
      q: "Why did the narrator need to drink a lot of water?",
      options: ["It was very hot outside", "The acarajé was very spicy", "He had been running", "The drink was salty"],
      correct: 1,
    },
    {
      q: "What did the people on the beach do when the sun set?",
      options: ["They went home", "They started dancing", "They applauded", "They lit candles"],
      correct: 2,
    },
    {
      q: "What is moqueca?",
      options: ["A fish stew with coconut milk", "A grilled meat dish", "A coconut dessert", "A spicy soup with beans"],
      correct: 0,
    },
  ],
};
