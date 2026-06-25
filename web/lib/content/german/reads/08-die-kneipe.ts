import type { DailyRead } from "../../types";

export const READ_DIE_KNEIPE: DailyRead = {
  slug: "die-kneipe",
  order: 8,
  stageUnlock: 4,
  difficulty: 7.5,
  titleL1: "Ein Abend in der Kneipe",
  titleEn: "An evening at the pub",
  intro:
    "The hardest read so far: Perfekt and Präteritum mixed freely, longer sentences, and a handful of everyday idioms. Each idiom is explained right in the English and again in the vocab list — don't translate them word for word.",
  paragraphs: [
    {
      l1: "Am Freitagabend hat mich Tom in eine Kneipe in Neukölln eingeladen. Eine Kneipe ist eine einfache, gemütliche Bar, wo man Bier trinkt und stundenlang quatscht.",
      en: "On Friday evening Tom invited me to a Kneipe in Neukölln. A Kneipe is a simple, cozy pub where you drink beer and chat for hours.",
    },
    {
      l1: "Als ich ankam, saßen seine Freunde schon an einem Holztisch. «Na, alles klar?» fragte einer von ihnen. Das heißt so viel wie «Wie geht's?», und man muss nicht viel antworten.",
      en: "When I arrived, his friends were already sitting at a wooden table. \"Na, alles klar?\" one of them asked. It means roughly \"How's it going?\", and you don't have to answer much.",
    },
    {
      l1: "Tom stellte mich vor, und ich gab allen die Hand. Dann sagte er: «Die erste Runde geht auf mich!» Eine Runde auszugeben bedeutet, dass eine Person die Getränke für alle bezahlt.",
      en: "Tom introduced me, and I shook everyone's hand. Then he said: \"The first round is on me!\" To buy a round means that one person pays for everyone's drinks.",
    },
    {
      l1: "Der Kellner brachte fünf Gläser Bier. Wir stießen an und riefen «Prost!». Dabei muss man sich unbedingt in die Augen sehen, sonst bringt es angeblich Unglück.",
      en: "The waiter brought five glasses of beer. We clinked glasses and shouted \"Cheers!\". While doing so you absolutely have to look each other in the eye, otherwise it supposedly brings bad luck.",
    },
    {
      l1: "Wir redeten über alles Mögliche: Arbeit, Fußball, Reisen. Eine Frau namens Lena erzählte einen Witz, und alle lachten so laut, dass die Leute am Nebentisch herüberschauten.",
      en: "We talked about all sorts of things: work, football, travel. A woman named Lena told a joke, and everyone laughed so loudly that the people at the next table looked over.",
    },
    {
      l1: "«Du sprichst schon ganz gut Deutsch», sagte Lena. «Ach, ich verstehe nur Bahnhof», antwortete ich und alle grinsten. «Nur Bahnhof verstehen» heißt, dass man überhaupt nichts versteht.",
      en: "\"You already speak German quite well,\" Lena said. \"Oh, I only understand train station,\" I replied, and everyone grinned. \"To only understand train station\" means you don't understand anything at all.",
    },
    {
      l1: "Später wollte ich auch eine Runde ausgeben, aber Tom winkte ab: «Lass mal, du bist heute unser Gast.» Ich merkte, dass mir diese Stadt und diese Menschen langsam ans Herz gewachsen sind.",
      en: "Later I wanted to buy a round too, but Tom waved it off: \"Forget it, today you're our guest.\" I realized that this city and these people have slowly grown dear to my heart.",
    },
    {
      l1: "Gegen Mitternacht machte ich mich auf den Weg nach Hause. Die Straßen waren noch voller Leben. Ich war müde, aber glücklich, denn nach nur einer Woche fühlte sich Berlin schon ein bisschen wie Zuhause an.",
      en: "Around midnight I set off for home. The streets were still full of life. I was tired but happy, because after only a week Berlin already felt a little like home.",
    },
  ],
  vocabSpotlight: [
    { l1: "die Kneipe", en: "the pub (simple, cozy bar)" },
    { l1: "Na, alles klar?", en: "How's it going? (casual greeting)" },
    { l1: "eine Runde ausgeben", en: "to buy a round (pay for everyone's drinks)" },
    { l1: "Prost!", en: "Cheers!" },
    { l1: "anstoßen", en: "to clink glasses / toast" },
    { l1: "nur Bahnhof verstehen", en: "to not understand a thing (idiom: 'understand only train station')" },
    { l1: "jemandem ans Herz wachsen", en: "to grow dear to someone (idiom)" },
    { l1: "sich auf den Weg machen", en: "to set off / head out" },
  ],
  comprehension: [
    {
      q: "What is a Kneipe?",
      options: [
        "a fancy cocktail bar",
        "a simple, cozy pub for drinking and chatting",
        "a nightclub",
        "a wine shop",
      ],
      correct: 1,
    },
    {
      q: "What does 'die erste Runde geht auf mich' mean?",
      options: [
        "the first lap is mine",
        "I'll start the conversation",
        "the first round of drinks is on me (I'll pay)",
        "I arrived first",
      ],
      correct: 2,
    },
    {
      q: "What must you do while saying 'Prost!'?",
      options: [
        "stand up",
        "look each other in the eye",
        "drink the whole glass",
        "close your eyes",
      ],
      correct: 1,
    },
    {
      q: "What does the idiom 'nur Bahnhof verstehen' mean?",
      options: [
        "to love trains",
        "to understand everything",
        "to not understand anything at all",
        "to get lost at the station",
      ],
      correct: 2,
    },
    {
      q: "How does Berlin feel to the narrator after a week?",
      options: [
        "still completely foreign",
        "a little like home",
        "too loud and tiring",
        "lonely",
      ],
      correct: 1,
    },
  ],
};
