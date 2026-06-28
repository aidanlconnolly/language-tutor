import type { DailyRead } from "../../types";

export const READ_RESTAURANT_MITTAG: DailyRead = {
  slug: "restaurant-mittag",
  order: 4,
  stageUnlock: 2,
  difficulty: 5.5,
  titleL1: "Mittagessen im Restaurant",
  titleEn: "Lunch at the restaurant",
  intro:
    "Present tense still, but sentences keep growing. You'll learn how to order a meal and the very useful question \"Zusammen oder getrennt?\" — \"Together or separately?\" when paying with a friend.",
  paragraphs: [
    {
      l1: "Um eins habe ich großen Hunger. Mein Freund Tom und ich gehen in ein Restaurant in der Nähe. Es ist gemütlich und voll.",
      en: "At one o'clock I am very hungry. My friend Tom and I go to a restaurant nearby. It is cozy and full.",
    },
    {
      l1: "Ein Kellner kommt zu unserem Tisch und bringt die Speisekarte. «Möchten Sie schon etwas trinken?» fragt er. «Zwei Wasser, bitte», sagt Tom.",
      en: "A waiter comes to our table and brings the menu. \"Would you like something to drink already?\" he asks. \"Two waters, please,\" says Tom.",
    },
    {
      l1: "Ich lese die Karte. Es gibt viele Gerichte: Suppe, Salat, Fisch und Fleisch. Ich verstehe nicht alles, aber ein Wort kenne ich: Schnitzel.",
      en: "I read the menu. There are many dishes: soup, salad, fish and meat. I don't understand everything, but one word I know: Schnitzel.",
    },
    {
      l1: "Der Kellner kommt zurück. «Haben Sie schon gewählt?» «Ja», sage ich. «Ich nehme das Schnitzel mit Pommes und Salat.» «Und für mich die Gemüsesuppe», sagt Tom.",
      en: "The waiter comes back. \"Have you decided yet?\" \"Yes,\" I say. \"I'll have the Schnitzel with fries and salad.\" \"And for me the vegetable soup,\" says Tom.",
    },
    {
      l1: "Nach zehn Minuten bringt der Kellner das Essen. Mein Schnitzel ist riesig! Es ist goldbraun und knusprig. Die Pommes sind heiß. «Guten Appetit!»",
      en: "After ten minutes the waiter brings the food. My Schnitzel is huge! It is golden brown and crispy. The fries are hot. \"Enjoy your meal!\"",
    },
    {
      l1: "Wir essen und reden über die Stadt. Tom wohnt schon seit drei Jahren in Berlin. Er erzählt mir, wo die besten Cafés und die schönsten Parks sind.",
      en: "We eat and talk about the city. Tom has been living in Berlin for three years. He tells me where the best cafés and the most beautiful parks are.",
    },
    {
      l1: "Nach dem Essen kommt der Kellner. «Hat es geschmeckt?» «Ja, sehr gut, danke.» «Zahlen Sie zusammen oder getrennt?» «Getrennt, bitte», sagt Tom.",
      en: "After the meal the waiter comes. \"Did it taste good?\" \"Yes, very good, thank you.\" \"Are you paying together or separately?\" \"Separately, please,\" says Tom.",
    },
    {
      l1: "Ich bezahle vierzehn Euro und gebe dem Kellner ein kleines Trinkgeld. In Deutschland rundet man oft auf. Der Kellner bedankt sich und wünscht uns einen schönen Tag.",
      en: "I pay fourteen euros and give the waiter a small tip. In Germany people often round up. The waiter says thank you and wishes us a nice day.",
    },
  ],
  vocabSpotlight: [
    { l1: "die Speisekarte", en: "the menu" },
    { l1: "der Kellner", en: "the waiter" },
    { l1: "das Schnitzel", en: "the schnitzel (breaded cutlet)" },
    { l1: "Guten Appetit!", en: "Enjoy your meal!" },
    { l1: "Zusammen oder getrennt?", en: "Together or separately? (paying)" },
    { l1: "das Trinkgeld", en: "the tip" },
    { l1: "Hat es geschmeckt?", en: "Did it taste good?" },
    { l1: "bestellen", en: "to order" },
  ],
  comprehension: [
    {
      q: "At what time do they go for lunch?",
      options: ["twelve o'clock", "one o'clock", "two o'clock", "half past one"],
      correct: 1,
    },
    {
      q: "What does the narrator order?",
      options: [
        "vegetable soup",
        "fish and salad",
        "Schnitzel with fries and salad",
        "Schnitzel with soup",
      ],
      correct: 2,
    },
    {
      q: "How long has Tom lived in Berlin?",
      options: ["one year", "two years", "three years", "five years"],
      correct: 2,
    },
    {
      q: "How do they pay?",
      options: ["together", "separately", "Tom pays for both", "with a card only"],
      correct: 1,
    },
    {
      q: "How much does the narrator pay?",
      options: ["€10", "€12", "€14", "€16"],
      correct: 2,
    },
  ],
};
