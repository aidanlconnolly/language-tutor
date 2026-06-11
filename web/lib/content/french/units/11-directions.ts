import type { Unit } from "../../types";

export const UNIT_DIRECTIONS: Unit = {
  slug: "directions",
  stage: 3,
  order: 11,
  icon: "🧭",
  title: "Asking for directions",
  tagline: "Droite, gauche, tout droit — excusez-moi, où se trouve…",
  lessons: [
    {
      slug: "directions-main",
      title: "Finding your way in Paris",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Asking directions in French",
          body: [
            "Always start with <em>Excusez-moi</em> or <em>Pardon</em> before asking a direction. Parisians will warm up if you attempt French first. Even a broken attempt is better than starting in English.",
            "The key question forms: <em>Où est…?</em> (Where is…?) and <em>Où se trouve…?</em> (Where is… located? — slightly more polite). Also: <em>Pour aller à…?</em> (How do I get to…? — literally 'to go to').",
          ],
        },
        {
          type: "vocab",
          heading: "Direction vocabulary",
          items: [
            { l1: "à droite", en: "to the right" },
            { l1: "à gauche", en: "to the left" },
            { l1: "tout droit", en: "straight ahead" },
            { l1: "au bout de la rue", en: "at the end of the street" },
            { l1: "au coin", en: "at the corner" },
            { l1: "en face (de)", en: "opposite / across from" },
            { l1: "à côté (de)", en: "next to" },
            { l1: "près (de)", en: "near" },
            { l1: "loin (de)", en: "far (from)" },
            { l1: "traverser", en: "to cross" },
            { l1: "tourner", en: "to turn" },
            { l1: "continuer", en: "to continue" },
            { l1: "prendre la rue…", en: "take [street name] street" },
            { l1: "sur votre droite/gauche", en: "on your right/left" },
          ],
        },
        {
          type: "dialogue",
          heading: "Asking for directions",
          setup: "On a Paris street corner.",
          lines: [
            { speaker: "You", l1: "Excusez-moi, madame. Où se trouve le musée d'Orsay?", en: "Excuse me, ma'am. Where is the Orsay Museum?" },
            { speaker: "Passerby", l1: "C'est simple. Vous continuez tout droit jusqu'au fleuve.", en: "It's simple. You continue straight ahead until the river." },
            { speaker: "Passerby", l1: "Ensuite, tournez à gauche. Le musée est sur votre droite.", en: "Then turn left. The museum is on your right." },
            { speaker: "You", l1: "C'est loin à pied?", en: "Is it far on foot?" },
            { speaker: "Passerby", l1: "Non, environ dix minutes.", en: "No, about ten minutes." },
            { speaker: "You", l1: "Merci beaucoup!", en: "Thank you very much!" },
          ],
        },
        {
          type: "orderWords",
          heading: "Give the directions",
          items: [
            { tokens: ["Tournez", "à", "gauche", "au", "coin."], en: "Turn left at the corner." },
            { tokens: ["Continuez", "tout", "droit", "pendant", "cent", "mètres."], en: "Continue straight ahead for 100 metres." },
            { tokens: ["La", "boulangerie", "est", "en", "face", "de", "la", "poste."], en: "The bakery is opposite the post office." },
            { tokens: ["Prenez", "la", "première", "rue", "à", "droite."], en: "Take the first street on the right." },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "Excuse me, is the Eiffel Tower far from here?",
          reference: "Excusez-moi, la Tour Eiffel est loin d'ici?",
          hint: "loin de = far from; ici = here",
        },
      ],
    },
    {
      slug: "directions-lieux",
      title: "Places in the city & landmarks",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Naming the places you're heading to",
          body: [
            "Directions are only useful if you can name the destination and the landmarks along the way. Paris streets come in types: <em>une rue</em> (street), <em>un boulevard</em> (wide avenue), <em>une avenue</em>, <em>une place</em> (square), <em>une impasse</em> (dead end).",
            "Two verbs do the heavy lifting for location: <em>se trouver</em> (to be located) and <em>il y a</em> (there is / there are). <em>Il y a une pharmacie au coin</em> — there's a pharmacy on the corner.",
            "Watch for road features the directions will mention: <em>les feux</em> (traffic lights), <em>le carrefour</em> (crossroads), <em>le rond-point</em> (roundabout), <em>le passage piéton</em> (crosswalk).",
          ],
          keyPoint: "se trouver = to be located. il y a = there is/are. Street types: rue, boulevard, avenue, place, impasse.",
        },
        {
          type: "vocab",
          heading: "Places & features",
          items: [
            { l1: "la rue / le boulevard / l'avenue", en: "the street / boulevard / avenue" },
            { l1: "la place", en: "the square" },
            { l1: "le carrefour", en: "the crossroads / intersection" },
            { l1: "les feux (de circulation)", en: "the traffic lights" },
            { l1: "le rond-point", en: "the roundabout" },
            { l1: "le passage piéton", en: "the crosswalk / pedestrian crossing" },
            { l1: "le trottoir", en: "the sidewalk / pavement" },
            { l1: "la banque / la poste", en: "the bank / the post office" },
            { l1: "l'arrêt de bus / la station de métro", en: "the bus stop / the metro station" },
            { l1: "le plan (de la ville)", en: "the (city) map", note: "une carte = larger map" },
          ],
        },
        {
          type: "dialogue",
          heading: "On foot or by metro?",
          lines: [
            { speaker: "You", l1: "Pardon, où se trouve la place des Vosges?", en: "Excuse me, where is the Place des Vosges?" },
            { speaker: "Passant", l1: "Ce n'est pas loin. Vous y allez à pied ou en métro?", en: "It's not far. Are you going on foot or by metro?" },
            { speaker: "You", l1: "À pied. Il y a un arrêt de bus près d'ici aussi?", en: "On foot. Is there a bus stop near here too?" },
            { speaker: "Passant", l1: "Oui, après les feux, au carrefour. Mais à pied, c'est dix minutes.", en: "Yes, after the lights, at the crossroads. But on foot it's ten minutes." },
            { speaker: "You", l1: "Très bien, merci. Bonne journée!", en: "Great, thanks. Have a good day!" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Describe the location",
          items: [
            { template: "La banque ___ en face de la poste. (is located)", answer: "se trouve", en: "The bank is opposite the post office.", options: ["se trouve", "il y a", "est trouve", "trouve"] },
            { template: "___ une pharmacie au coin. (there is)", answer: "Il y a", en: "There's a pharmacy on the corner.", options: ["Il y a", "Se trouve", "C'est", "Il est"] },
            { template: "Tournez à droite aux ___. (traffic lights)", answer: "feux", en: "Turn right at the traffic lights." },
            { template: "Le métro est sur la ___ Voltaire. (boulevard)", answer: "place", en: "The metro is on Voltaire square.", options: ["rue", "place", "avenue", "carrefour"] },
          ],
        },
        {
          type: "multipleChoice",
          heading: "City places check",
          questions: [
            {
              q: "'Le carrefour' is…",
              options: ["the sidewalk", "the crossroads / intersection", "the roundabout", "the square"],
              correct: 1,
              fb: "'Le carrefour' is where streets cross. 'Le rond-point' is specifically a roundabout.",
            },
            {
              q: "Which verb means 'to be located'?",
              options: ["il y a", "se trouver", "aller", "prendre"],
              correct: 1,
              fb: "'Se trouver' = to be located/found. 'Il y a' = there is/are.",
            },
            {
              q: "'Le passage piéton' is…",
              options: ["the bus stop", "the crosswalk", "the dead end", "the platform"],
              correct: 1,
              fb: "'Le passage piéton' is the pedestrian crossing / crosswalk.",
            },
          ],
        },
      ],
    },
    {
      slug: "directions-comprendre",
      title: "Following spoken directions",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Understanding the answer is the hard part",
          body: [
            "Asking is easy; catching the rapid-fire reply is the real skill. Directions come in the <strong>imperative</strong> (command form), usually with <em>vous</em>: <em>allez</em> (go), <em>tournez</em> (turn), <em>prenez</em> (take), <em>traversez</em> (cross), <em>continuez</em> (continue), <em>suivez</em> (follow).",
            "Listen for ordinals and counts: <em>la première / deuxième / troisième à gauche</em> (the first/second/third on the left), and distance markers: <em>jusqu'à</em> (as far as / until), <em>après</em> (after), <em>avant</em> (before).",
            "If it goes too fast, fall back on the phrases you learned: <em>Vous pouvez répéter plus lentement?</em> Then repeat the route back to confirm.",
          ],
          keyPoint: "Imperatives: allez, tournez, prenez, traversez, suivez, continuez. Listen for ordinals + jusqu'à / après.",
        },
        {
          type: "vocab",
          heading: "Command verbs for directions",
          items: [
            { l1: "Allez tout droit.", en: "Go straight ahead." },
            { l1: "Tournez à gauche / à droite.", en: "Turn left / right." },
            { l1: "Prenez la première à droite.", en: "Take the first (street) on the right." },
            { l1: "Traversez la rue / le pont.", en: "Cross the street / the bridge." },
            { l1: "Continuez jusqu'aux feux.", en: "Continue as far as the traffic lights." },
            { l1: "Suivez la rue principale.", en: "Follow the main street." },
            { l1: "C'est juste après la banque.", en: "It's just after the bank." },
            { l1: "Vous ne pouvez pas le manquer.", en: "You can't miss it." },
          ],
        },
        {
          type: "listen",
          heading: "Catch the direction",
          intro: "Listen and choose what you heard.",
          items: [
            { l1: "Tournez à droite.", en: "Turn right.", options: ["Tournez à gauche.", "Tournez à droite.", "Allez tout droit.", "Traversez la rue."], correct: 1 },
            { l1: "Prenez la deuxième à gauche.", en: "Take the second on the left.", options: ["Prenez la première à gauche.", "Prenez la deuxième à droite.", "Prenez la deuxième à gauche.", "Prenez la troisième à gauche."], correct: 2 },
            { l1: "Continuez jusqu'au pont.", en: "Continue as far as the bridge.", options: ["Continuez jusqu'au pont.", "Traversez le pont.", "Le pont est à gauche.", "Continuez jusqu'aux feux."], correct: 0 },
            { l1: "C'est juste après la poste.", en: "It's just after the post office.", options: ["C'est en face de la poste.", "C'est juste avant la poste.", "C'est juste après la poste.", "C'est à côté de la banque."], correct: 2 },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Comprehension check",
          questions: [
            {
              q: "Someone says 'Prenez la troisième à gauche.' What do you do?",
              options: ["Take the third street on the right", "Take the third street on the left", "Go straight for three blocks", "Turn around"],
              correct: 1,
              fb: "troisième = third, à gauche = on the left.",
            },
            {
              q: "'Vous ne pouvez pas le manquer' means…",
              options: ["You can't go there", "You can't miss it", "You mustn't be late", "It's closed"],
              correct: 1,
              fb: "A reassuring phrase: 'you can't miss it.'",
            },
            {
              q: "'Jusqu'aux feux' means…",
              options: ["after the lights", "as far as the traffic lights", "before the bridge", "at the corner"],
              correct: 1,
              fb: "'jusqu'à' = up to / as far as; 'les feux' = the traffic lights.",
            },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "'Tout droit' means…", options: ["to the right", "straight ahead", "to the left", "at the end"], correct: 1 },
      { q: "'En face de' means…", options: ["next to", "opposite / across from", "near", "far from"], correct: 1 },
      { q: "To ask politely 'where is the museum?'…", options: ["Où est le musée?", "Où se trouve le musée?", "Pour aller au musée?", "All of the above work"], correct: 3 },
      { q: "'Tournez à gauche' means…", options: ["Turn right", "Go straight", "Turn left", "Take the street"], correct: 2 },
      { q: "'À côté de' means…", options: ["far from", "opposite", "next to", "in front of"], correct: 2 },
      { q: "How do you say 'Is it far on foot?'", options: ["C'est loin à pied?", "C'est loin en voiture?", "Vous êtes loin?", "Je marche loin?"], correct: 0 },
    ],
  },
};
