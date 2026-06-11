import type { Unit } from "../../types";

export const UNIT_SPECIALITES: Unit = {
  slug: "specialites",
  stage: 4,
  order: 19,
  icon: "🥐",
  title: "French & regional specialties",
  tagline: "Croissant, baguette, escargot, crêpes, steak-frites.",
  lessons: [
    {
      slug: "specialites-main",
      title: "Iconic French foods & regional specialties",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "French cuisine — regional diversity",
          body: [
            "France's cuisine varies dramatically by region: Brittany is famous for crêpes, butter, and seafood; Lyon (<em>capitale gastronomique</em>) for quenelles and bouchon restaurants; Alsace for choucroute and tarte flambée; Normandy for cheese (Camembert, Livarot), cream sauces, and calvados.",
            "Paris itself is not a cuisine-specific city — it's a showcase for the best of all regions. A good Parisian <em>brasserie</em> (traditional restaurant serving French classics) will have steak-frites, escargot, and French onion soup (<em>soupe à l'oignon</em>).",
          ],
        },
        {
          type: "vocab",
          heading: "Iconic French dishes",
          items: [
            { l1: "la baguette", en: "the baguette", note: "French law protects the name — must be made on-site" },
            { l1: "le croissant (au beurre)", en: "the croissant (buttery)", note: "the flaky buttery version" },
            { l1: "les escargots (de Bourgogne)", en: "snails (Burgundy style)", note: "in garlic butter, served in shells" },
            { l1: "le steak-frites", en: "steak and chips", note: "the brasserie classic" },
            { l1: "la soupe à l'oignon", en: "French onion soup", note: "with melted cheese and crouton on top" },
            { l1: "la crêpe", en: "the crêpe (thin pancake)", note: "sweet (dessert) or savoury (galette)" },
            { l1: "la galette (de sarrasin)", en: "savoury buckwheat crêpe", note: "Breton speciality" },
            { l1: "le confit de canard", en: "duck confit", note: "slow-cooked salted duck leg" },
            { l1: "le coq au vin", en: "chicken braised in wine" },
            { l1: "la bouillabaisse", en: "fish stew from Marseille" },
            { l1: "la tarte tatin", en: "upside-down apple tart", note: "warm caramelized apples" },
            { l1: "les macarons", en: "macarons", note: "not the same as macaroons" },
          ],
        },
        {
          type: "vocab",
          heading: "Famous French cheeses",
          items: [
            { l1: "le Camembert", en: "Camembert", note: "soft, white rind, Normandy" },
            { l1: "le Brie", en: "Brie", note: "similar to Camembert, Île-de-France" },
            { l1: "le Roquefort", en: "Roquefort", note: "blue sheep's milk cheese, strong" },
            { l1: "le Comté", en: "Comté", note: "hard, nutty, Jura region" },
            { l1: "le chèvre", en: "goat's cheese", note: "from Loire Valley" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "French food knowledge",
          questions: [
            {
              q: "A 'galette de sarrasin' is…",
              options: ["a sweet crêpe", "a savoury buckwheat crêpe", "a type of biscuit", "a regional bread"],
              correct: 1,
              fb: "Galette de sarrasin = savoury crêpe made with buckwheat. A Breton speciality.",
            },
            {
              q: "Escargots de Bourgogne are served…",
              options: ["Raw with lemon", "In garlic butter in their shells", "Grilled without sauce", "In a soup"],
              correct: 1,
              fb: "Escargots de Bourgogne = snails in garlic-parsley butter, served in their shells with little forks.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "Do you have any recommendations? I'd like to try something typically French.",
          reference: "Vous avez des recommandations? Je voudrais essayer quelque chose de typiquement français.",
          hint: "quelque chose de = something (with adj); typiquement = typically",
        },
      ],
    },
    {
      slug: "specialites-patisserie",
      title: "Pâtisserie & desserts",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Boulangerie vs pâtisserie",
          body: [
            "A <em>boulangerie</em> sells bread and simple viennoiseries; a <em>pâtisserie</em> specializes in fine cakes and desserts (many shops are both). The display case (<em>la vitrine</em>) is half the experience.",
            "The classics worth knowing by name: <em>un éclair</em> (choux pastry with cream), <em>un mille-feuille</em> (layered puff pastry), <em>une religieuse</em>, <em>un Paris-Brest</em> (praline cream ring), and the ubiquitous <em>macaron</em>.",
            "To order, point and use <em>Je voudrais…</em> with the quantity: <em>Je voudrais deux éclairs au chocolat</em>. <em>Une part de…</em> means 'a slice of…' for a larger cake.",
          ],
          keyPoint: "boulangerie = bread; pâtisserie = fine cakes. Order: Je voudrais + quantity. 'une part de' = a slice of.",
        },
        {
          type: "vocab",
          heading: "Pastries & desserts",
          items: [
            { l1: "un éclair (au chocolat / au café)", en: "an éclair (chocolate / coffee)" },
            { l1: "un mille-feuille", en: "a mille-feuille (Napoleon)" },
            { l1: "un macaron", en: "a macaron" },
            { l1: "une religieuse", en: "a 'nun' — stacked choux pastry" },
            { l1: "un Paris-Brest", en: "praline cream choux ring" },
            { l1: "un pain aux raisins", en: "a raisin swirl pastry" },
            { l1: "une tarte aux fruits", en: "a fruit tart" },
            { l1: "une part de gâteau", en: "a slice of cake" },
            { l1: "la vitrine", en: "the display case" },
            { l1: "C'est pour offrir?", en: "Is it a gift? (shall I gift-wrap?)" },
          ],
        },
        {
          type: "dialogue",
          heading: "At the pâtisserie",
          lines: [
            { speaker: "Vendeuse", l1: "Bonjour, vous désirez?", en: "Hello, what would you like?" },
            { speaker: "You", l1: "Bonjour. Je voudrais deux éclairs au chocolat et un macaron.", en: "Hello. I'd like two chocolate éclairs and one macaron." },
            { speaker: "Vendeuse", l1: "Très bien. Et avec ceci?", en: "Very good. Anything else?" },
            { speaker: "You", l1: "Ce sera tout, merci. C'est combien?", en: "That'll be all, thanks. How much is it?" },
            { speaker: "Vendeuse", l1: "Sept euros vingt. C'est pour offrir?", en: "Seven twenty. Is it a gift?" },
            { speaker: "You", l1: "Non, c'est pour moi!", en: "No, it's for me!" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Pâtisserie check",
          questions: [
            {
              q: "A 'mille-feuille' is made of…",
              options: ["a thousand macarons", "layered puff pastry and cream", "goat cheese", "ice cream"],
              correct: 1,
              fb: "'Mille-feuille' (a thousand leaves) = layers of puff pastry with cream.",
            },
            {
              q: "'Une part de gâteau' means…",
              options: ["a whole cake", "a slice of cake", "a cake shop", "a birthday cake"],
              correct: 1,
              fb: "'Une part de' = a portion/slice of.",
            },
            {
              q: "'C'est pour offrir?' is asking…",
              options: ["Can you afford it?", "Is it a gift (to wrap)?", "Is it for here?", "Do you want more?"],
              correct: 1,
              fb: "Shops ask this to know whether to gift-wrap it nicely.",
            },
          ],
        },
      ],
    },
    {
      slug: "specialites-pain",
      title: "Bread & the boulangerie",
      estMinutes: 7,
      pages: [
        {
          type: "intro",
          heading: "Not all baguettes are equal",
          body: [
            "Ask for <em>une baguette tradition</em> (or 'une tradi') for the artisan version with a better crust and crumb, versus the standard <em>baguette</em>. You can even specify the bake: <em>bien cuite</em> (well-baked, crisp) or <em>pas trop cuite</em> (paler).",
            "Beyond the baguette: <em>un pain de campagne</em> (country sourdough), <em>une ficelle</em> (thin baguette), <em>un pain complet</em> (wholemeal), and the round <em>une boule</em>.",
            "Bread is cheap and bought daily. The classic exchange is short and fast — greet, order, pay, thank.",
          ],
          keyPoint: "baguette tradition = artisan version. Specify bake: bien cuite / pas trop cuite. pain de campagne = country loaf.",
        },
        {
          type: "vocab",
          heading: "Bread vocabulary",
          items: [
            { l1: "une baguette (tradition)", en: "a baguette (artisan one)" },
            { l1: "bien cuite / pas trop cuite", en: "well-baked / not too baked" },
            { l1: "un pain de campagne", en: "a country (sourdough) loaf" },
            { l1: "une ficelle", en: "a thin baguette" },
            { l1: "un pain complet", en: "a wholemeal loaf" },
            { l1: "une boule", en: "a round loaf" },
            { l1: "une demi-baguette", en: "a half baguette" },
            { l1: "frais / rassis", en: "fresh / stale" },
            { l1: "Ce sera tout?", en: "Will that be all?" },
          ],
        },
        {
          type: "dialogue",
          heading: "At the boulangerie",
          lines: [
            { speaker: "You", l1: "Bonjour! Une baguette tradition, bien cuite, s'il vous plaît.", en: "Hello! A 'tradition' baguette, well-baked, please." },
            { speaker: "Boulanger", l1: "Voilà. Ce sera tout?", en: "Here you go. Will that be all?" },
            { speaker: "You", l1: "Et un pain de campagne aussi.", en: "And a country loaf as well." },
            { speaker: "Boulanger", l1: "Très bien. Trois euros dix.", en: "Very good. Three euros ten." },
            { speaker: "You", l1: "Voilà. Bonne journée!", en: "Here you are. Have a good day!" },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "A well-baked baguette and a half wholemeal loaf, please.",
          reference: "Une baguette bien cuite et une demi-baguette de pain complet, s'il vous plaît.",
          hint: "well-baked = bien cuite; wholemeal = complet",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "The 'capitale gastronomique' of France is…", options: ["Paris", "Bordeaux", "Lyon", "Marseille"], correct: 2 },
      { q: "A 'tarte tatin' is…", options: ["A cheese tart", "An upside-down caramelized apple tart", "A fruit flan", "A savory quiche"], correct: 1 },
      { q: "Roquefort is made from…", options: ["cow's milk", "goat's milk", "sheep's milk", "buffalo milk"], correct: 2 },
      { q: "'Le confit de canard' is…", options: ["braised lamb", "slow-cooked duck leg", "grilled chicken", "pork belly"], correct: 1 },
      { q: "A French baguette by law must be…", options: ["Made in France only", "Made on-site (not pre-made)", "Sourdough", "A specific length"], correct: 1 },
      { q: "Bouillabaisse comes from…", options: ["Lyon", "Paris", "Bordeaux", "Marseille"], correct: 3 },
    ],
  },
};
