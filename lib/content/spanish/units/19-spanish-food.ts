import type { Unit } from "../../types";

export const UNIT_SPANISH_FOOD: Unit = {
  slug: "spanish-food",
  stage: 4,
  order: 19,
  icon: "🥘",
  title: "Spanish & regional food",
  tagline: "Jamón, paella, pintxos, tortilla, propinas.",
  badge: "culture",
  lessons: [
    {
      slug: "spanish-food-icons",
      title: "Iconic Spanish dishes",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Spanish cuisine — regional and proud",
          body: [
            "Spain has no single national cuisine — it's a federation of distinct regional food cultures. Catalonia, the Basque Country, Andalusia, and Galicia each have their own culinary traditions. The one thread: quality ingredients, olive oil, and simplicity.",
            "A few dishes are found everywhere: the tortilla española, jamón ibérico, and gazpacho. Paella is regional (Valencia) but appears on menus nationwide.",
          ],
          tip: {
            label: "Jamón ibérico vs serrano",
            body: "Jamón ibérico comes from Iberian black-footed pigs, often acorn-fed (bellota) — Spain's finest cured ham. Jamón serrano is from white pigs — excellent but more everyday. Jamón is eaten at room temperature, carved thinly.",
          },
        },
        {
          type: "vocab",
          heading: "Classic Spanish dishes",
          items: [
            { l1: "la tortilla española", en: "Spanish omelette — potatoes, egg, sometimes onion" },
            { l1: "el jamón ibérico / serrano", en: "Iberian / mountain-cured ham" },
            { l1: "la paella valenciana", en: "saffron rice with chicken, rabbit and vegetables (Valencia)" },
            { l1: "el gazpacho", en: "cold tomato soup (Andalusia)" },
            { l1: "el salmorejo", en: "thicker cold tomato soup (Córdoba)" },
            { l1: "los pintxos", en: "Basque Country bar snacks (like tapas on bread)" },
            { l1: "el pulpo a la gallega", en: "Galician-style octopus with paprika and olive oil" },
            { l1: "el chuletón", en: "thick T-bone or rib-eye steak — a Madrid speciality" },
          ],
        },
        {
          type: "vocab",
          heading: "Talking about food",
          items: [
            { l1: "Está delicioso/a.", en: "It's delicious." },
            { l1: "Está riquísimo/a.", en: "It's absolutely delicious. (strongest praise)" },
            { l1: "Tiene muy buena pinta.", en: "It looks really good." },
            { l1: "¿De dónde es este plato?", en: "Where is this dish from?" },
            { l1: "¿Qué lleva?", en: "What's in it?" },
            { l1: "¿Está picante?", en: "Is it spicy?" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Spanish food check",
          questions: [
            {
              q: "Gazpacho is…",
              options: ["A hot stew", "A cold tomato soup from Andalusia", "A rice dish", "A type of ham"],
              correct: 1,
              fb: "Gazpacho = cold blended tomato soup, originally from Andalusia. Served cold, even in winter by some.",
            },
            {
              q: "Pintxos are from…",
              options: ["Madrid", "Valencia", "The Basque Country", "Catalonia"],
              correct: 2,
              fb: "Pintxos (pinchos) are the Basque Country's version of tapas — small snacks on bread, served at bars.",
            },
            {
              q: "'Está riquísimo' means…",
              options: ["It's expensive", "It's quite good", "It's absolutely delicious", "It's very rich"],
              correct: 2,
              fb: "Riquísimo = superlative of rico (rich/delicious). The highest food compliment.",
            },
          ],
        },
      ],
    },
    {
      slug: "spanish-food-tipping",
      title: "Tipping and food culture",
      estMinutes: 6,
      pages: [
        {
          type: "intro",
          heading: "Tipping in Spain",
          body: [
            "Tipping is not obligatory in Spain — service charge is generally included. It's appreciated but not expected. Rounding up or leaving small coins is standard. In upscale restaurants, 5–10% is generous.",
            "The siesta (roughly 2–5pm) means many shops close at lunchtime. In tourist areas this is changing, but in smaller towns it's still respected.",
          ],
        },
        {
          type: "vocab",
          heading: "Food culture vocabulary",
          items: [
            { l1: "la propina", en: "the tip" },
            { l1: "el servicio (está incluido)", en: "service charge (is included)" },
            { l1: "la siesta", en: "the midday rest period" },
            { l1: "el aperitivo", en: "the pre-lunch/dinner drink and snack" },
            { l1: "la sobremesa", en: "time spent talking after a meal (untranslatable)" },
            { l1: "¡Buen provecho!", en: "Enjoy your meal! / Bon appétit!" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Culture check",
          questions: [
            {
              q: "La sobremesa is…",
              options: ["The appetiser course", "Lingering and talking after a meal", "The dessert menu", "A type of tapas"],
              correct: 1,
              fb: "La sobremesa = the post-meal conversation. A valued social ritual — rushing off after eating is considered rude.",
            },
            {
              q: "Tipping in Spain is…",
              options: ["Mandatory at 20%", "Not expected but appreciated", "Illegal", "10% minimum"],
              correct: 1,
              fb: "Tipping is optional and appreciated but not obligatory in Spain.",
            },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "La tortilla española is made from…", options: ["Corn flour", "Potato and egg", "Wheat flour and egg", "Rice"], correct: 1 },
      { q: "Gazpacho comes from…", options: ["Madrid", "Valencia", "Andalusia", "Catalonia"], correct: 2 },
      { q: "Pintxos are associated with…", options: ["Valencia", "The Basque Country", "Madrid", "Galicia"], correct: 1 },
      { q: "Paella originates from…", options: ["Madrid", "Seville", "Valencia", "Barcelona"], correct: 2 },
      { q: "'Está riquísimo' means…", options: ["It's very expensive", "It's absolutely delicious", "It's too rich", "It's quite good"], correct: 1 },
      { q: "Jamón ibérico comes from…", options: ["White domestic pigs", "Iberian black-footed pigs", "Wild boar", "Mountain deer"], correct: 1 },
      { q: "La sobremesa is…", options: ["The dessert", "Post-meal conversation", "Afternoon nap", "The bill"], correct: 1 },
      { q: "Tipping in Spain is…", options: ["Mandatory", "Not expected but appreciated", "Rude", "Always 10%"], correct: 1 },
      { q: "'Tiene muy buena pinta' means…", options: ["It tastes good", "It smells good", "It looks really good", "It's very popular"], correct: 2 },
      { q: "'¡Buen provecho!' means…", options: ["Enjoy your drinks!", "Bon appétit / Enjoy your meal!", "Good choice!", "Well done!"], correct: 1 },
    ],
  },
};
