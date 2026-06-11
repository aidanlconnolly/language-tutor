import type { Unit } from "../../types";

export const UNIT_IMPARFAIT: Unit = {
  slug: "imparfait",
  stage: 5,
  order: 22,
  icon: "🌅",
  title: "Imparfait",
  tagline: "Quand j'étais à Paris… — habitual past.",
  lessons: [
    {
      slug: "imparfait-main",
      title: "The imparfait — describing the past",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "When to use imparfait vs passé composé",
          body: [
            "The <strong>imparfait</strong> describes ongoing states, habitual actions, and background context in the past. The <strong>passé composé</strong> describes specific completed events. They work together in narration.",
            "Imparfait = <em>was doing / used to do / would do (habitually)</em>. Passé composé = <em>did / happened</em>.",
            "Example: <em>Il faisait beau (imparfait — ongoing state) quand je suis sorti (passé composé — specific action)</em> = It was nice weather when I went out.",
          ],
          keyPoint: "Imparfait: background, states, habits. Passé composé: specific events. They contrast within the same sentence.",
        },
        {
          type: "intro",
          heading: "Forming the imparfait",
          body: [
            "Take the <em>nous</em> form of the present tense, drop -<em>ons</em>, then add endings: <strong>-ais, -ais, -ait, -ions, -iez, -aient</strong>.",
            "Exception: être → <em>ét-</em> + endings (j'étais, tu étais, etc.).",
            "The -ais/-ait/-aient endings all sound the same — just like English 'ay'. The only audible difference is in nous (-ions) and vous (-iez).",
          ],
          keyPoint: "Imparfait stem = nous form minus -ons. Endings: -ais, -ais, -ait, -ions, -iez, -aient.",
        },
        {
          type: "conjugation",
          heading: "Parler & être — imparfait",
          verb: "parler / être",
          meaning: "to speak / to be",
          tenses: [
            {
              name: "imparfait — parler",
              forms: [
                { person: "je", form: "parlais", en: "I was speaking / I used to speak" },
                { person: "tu", form: "parlais", en: "you were speaking" },
                { person: "il/elle", form: "parlait", en: "he/she was speaking" },
                { person: "nous", form: "parlions", en: "we were speaking" },
                { person: "vous", form: "parliez", en: "you were speaking" },
                { person: "ils/elles", form: "parlaient", en: "they were speaking" },
              ],
            },
            {
              name: "imparfait — être",
              forms: [
                { person: "je", form: "étais", en: "I was" },
                { person: "tu", form: "étais", en: "you were" },
                { person: "il/elle", form: "était", en: "he/she was" },
                { person: "nous", form: "étions", en: "we were" },
                { person: "vous", form: "étiez", en: "you were" },
                { person: "ils/elles", form: "étaient", en: "they were" },
              ],
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Imparfait or passé composé?",
          items: [
            { template: "Quand j'___ (être) enfant, j'___ (habiter) à Lyon.", answer: "étais", en: "When I was a child, I lived in Lyon.", options: ["étais", "suis", "fus", "ai été"] },
            { template: "Il ___ (faire) chaud quand nous ___ (arriver).", answer: "faisait", en: "It was hot when we arrived.", options: ["faisait", "a fait", "ferait", "fait"] },
            { template: "Tous les soirs, elle ___ (lire) avant de dormir.", answer: "lisait", en: "Every evening she used to read before sleeping.", options: ["a lu", "lisait", "lirait", "lit"] },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "When I was in Paris, I used to drink a coffee every morning at the same café.",
          reference: "Quand j'étais à Paris, je buvais un café tous les matins au même café.",
          hint: "buvais = was drinking/used to drink (imparfait of boire); tous les matins = every morning",
        },
      ],
    },
    {
      slug: "imparfait-habitudes",
      title: "Childhood & past habits",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "'Quand j'étais petit…' — talking about how things used to be",
          body: [
            "The imparfait is the natural tense for habits and routines that repeated in the past — what you 'used to do.' It pairs with frequency expressions: <em>tous les jours</em> (every day), <em>le dimanche</em> (on Sundays), <em>souvent</em>, <em>à l'époque</em> (back then).",
            "A classic opener is <em>Quand j'étais petit(e)…</em> (When I was little…) or <em>Avant…</em> (Before…). Everything that follows describing the old normal goes in the imparfait.",
            "English signals this with 'used to' or 'would': <em>On allait à la mer chaque été</em> = We used to go / would go to the seaside every summer.",
          ],
          keyPoint: "Imparfait + frequency words (tous les jours, le dimanche, souvent) = 'used to / would' do something.",
        },
        {
          type: "vocab",
          heading: "Habit & frequency expressions",
          items: [
            { l1: "quand j'étais petit(e)", en: "when I was little" },
            { l1: "à l'époque", en: "back then, at the time" },
            { l1: "avant", en: "before, in the past" },
            { l1: "tous les jours / tous les ans", en: "every day / every year" },
            { l1: "le dimanche", en: "on Sundays (habitually)" },
            { l1: "souvent / d'habitude", en: "often / usually" },
            { l1: "de temps en temps", en: "from time to time" },
            { l1: "chaque été", en: "every summer" },
          ],
        },
        {
          type: "conjugation",
          heading: "Avoir, faire & aller — imparfait",
          verb: "avoir / faire / aller",
          meaning: "imparfait stems",
          intro: "Same endings (-ais, -ais, -ait, -ions, -iez, -aient) on the nous-stem.",
          tenses: [
            {
              name: "avoir (av-)",
              forms: [
                { person: "j'", form: "avais", en: "I had" },
                { person: "il/elle", form: "avait", en: "he/she had" },
                { person: "nous", form: "avions", en: "we had" },
                { person: "ils/elles", form: "avaient", en: "they had" },
              ],
            },
            {
              name: "faire (fais-) / aller (all-)",
              forms: [
                { person: "je faisais", form: "/ j'allais", en: "I did / I went" },
                { person: "il faisait", form: "/ il allait", en: "he did / he went" },
                { person: "nous faisions", form: "/ nous allions", en: "we did / we went" },
                { person: "ils faisaient", form: "/ ils allaient", en: "they did / they went" },
              ],
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Describe the old routine",
          items: [
            { template: "Quand j'___ (être) petit, j'___ (avoir) un chien.", answer: "étais", en: "When I was little, I had a dog." },
            { template: "Tous les étés, nous ___ (aller) à la mer.", answer: "allions", en: "Every summer, we used to go to the sea." },
            { template: "Le dimanche, elle ___ (faire) un gâteau.", answer: "faisait", en: "On Sundays, she would make a cake." },
            { template: "À l'époque, on ___ (habiter) à Lyon.", answer: "habitait", en: "Back then, we lived in Lyon." },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "When I was little, we used to go to my grandmother's every Sunday.",
          reference: "Quand j'étais petit(e), on allait chez ma grand-mère tous les dimanches.",
          hint: "used to go = allions/allait (imparfait); 'every Sunday' = tous les dimanches",
        },
      ],
    },
    {
      slug: "imparfait-descriptions",
      title: "Descriptions & feelings in the past",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Setting the scene",
          body: [
            "Beyond habits, the imparfait paints background descriptions: what a place looked like, the weather, how people felt. Two workhorses: <em>il y avait</em> (there was/were) and <em>c'était</em> (it was).",
            "Weather in the past is nearly always imparfait: <em>il faisait beau</em> (it was nice), <em>il pleuvait</em> (it was raining), <em>il neigeait</em> (it was snowing).",
            "Feelings and physical states too: <em>j'étais fatigué</em> (I was tired), <em>j'avais peur</em> (I was afraid), <em>j'avais faim</em> (I was hungry). These are states, not events — so imparfait.",
          ],
          keyPoint: "Background = imparfait: il y avait, c'était, il faisait beau, j'étais fatigué, j'avais peur.",
        },
        {
          type: "vocab",
          heading: "Describing past scenes & feelings",
          items: [
            { l1: "il y avait", en: "there was / there were" },
            { l1: "c'était", en: "it was" },
            { l1: "il faisait beau / froid", en: "the weather was nice / cold" },
            { l1: "il pleuvait / il neigeait", en: "it was raining / snowing" },
            { l1: "j'étais content(e) / triste", en: "I was happy / sad" },
            { l1: "j'avais peur", en: "I was afraid" },
            { l1: "j'avais faim / soif", en: "I was hungry / thirsty" },
            { l1: "il y avait beaucoup de monde", en: "there were a lot of people" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Why imparfait?",
          questions: [
            {
              q: "'Il faisait froid et il y avait du vent.' These verbs are imparfait because…",
              options: ["They're sudden events", "They describe background weather/states", "They use avoir", "They're commands"],
              correct: 1,
              fb: "Weather and background conditions are ongoing states → imparfait.",
            },
            {
              q: "How do you say 'I was afraid' (a state)?",
              options: ["J'ai eu peur", "J'avais peur", "Je serai peur", "J'aurai peur"],
              correct: 1,
              fb: "A lasting feeling/state in the past → imparfait: j'avais peur.",
            },
            {
              q: "'C'était' means…",
              options: ["it is", "it was", "it will be", "it has been"],
              correct: 1,
              fb: "'C'était' = it was — the imparfait of 'c'est', used for past descriptions.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "It was beautiful. There were a lot of people and I was a little tired.",
          reference: "C'était magnifique. Il y avait beaucoup de monde et j'étais un peu fatigué(e).",
          hint: "it was = c'était; there were = il y avait; I was tired = j'étais fatigué(e)",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "Imparfait is used for…", options: ["Specific completed events", "Ongoing states and habitual actions in the past", "Future actions", "Commands"], correct: 1 },
      { q: "The imparfait stem comes from…", options: ["The infinitive minus -er", "The nous present minus -ons", "The passé composé", "The future tense"], correct: 1 },
      { q: "'Il faisait beau' is imparfait because…", options: ["It's a specific event", "It describes an ongoing background state", "It uses avoir", "It's irregular"], correct: 1 },
      { q: "The imparfait of être for 'nous' is…", options: ["nous sommes", "nous fûmes", "nous étions", "nous serons"], correct: 2 },
      { q: "'Je parlais' means…", options: ["I speak", "I spoke (once)", "I was speaking / I used to speak", "I will speak"], correct: 2 },
      { q: "Which sentence uses imparfait correctly?", options: ["Hier, il mangeait une pomme.", "Tous les jours, il a mangé une pomme.", "Tous les jours, il mangeait une pomme.", "Il mange une pomme hier."], correct: 2 },
    ],
  },
};
