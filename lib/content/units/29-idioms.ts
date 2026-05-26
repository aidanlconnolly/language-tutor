import type { Unit } from "../types";

export const UNIT_IDIOMS: Unit = {
  slug: "idioms",
  stage: 7,
  order: 29,
  icon: "🐺",
  title: "Idioms & gestures",
  tagline: "In bocca al lupo, magari, boh — the expressions and the hand-talk that make you sound like a local.",
  badge: "culture",
  lessons: [
    {
      slug: "idioms-classic",
      title: "Classic Italian idioms",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Idioms unlock a whole layer of warmth",
          body: [
            "Italian idioms are vivid, emotional, often food- or animal-based. Drop a few and Italians light up.",
            "<strong>In bocca al lupo!</strong> = Into the wolf's mouth! = Good luck! Reply: <em>«Crepi il lupo!»</em> = May the wolf die! (Theatrical, like 'break a leg'.)",
            "<strong>Magari!</strong> = I wish! / If only! Used when something would be wonderful but unlikely.",
            "<strong>Boh.</strong> = ¯\\_(ツ)_/¯. Pure 'I have no idea / no opinion / who knows.' Said with a small shrug.",
            "<strong>Che palle!</strong> = What balls! = What a pain! (Mildly vulgar but everyone says it.)",
          ],
          keyPoint:
            "In bocca al lupo (good luck), magari (I wish), boh (dunno), che palle (what a pain).",
        },
        {
          type: "vocab",
          heading: "Core Italian idioms",
          items: [
            { it: "in bocca al lupo!", en: "good luck! ('into the wolf's mouth') → reply: crepi! or crepi il lupo!" },
            { it: "magari!", en: "I wish! / hopefully!" },
            { it: "boh", en: "dunno / no idea (with a small shrug)" },
            { it: "che palle!", en: "what a pain! (mildly vulgar)" },
            { it: "non vedo l'ora", en: "I can't wait" },
            { it: "alla grande", en: "great / awesome (response to 'come va?')" },
            { it: "che figata!", en: "how cool!" },
            { it: "che barba!", en: "how boring!" },
            { it: "in gamba!", en: "smart / capable person; also a sendoff: 'take care'" },
            { it: "tutto a posto", en: "all good / all set" },
            { it: "che ne so", en: "what do I know / who knows" },
            { it: "ma dai!", en: "come on! / no way! (surprise or disbelief)" },
            { it: "figurati!", en: "don't mention it / no problem (response to thanks)" },
            { it: "tanto", en: "anyway / whatever" },
            { it: "fa schifo", en: "it sucks / it's gross" },
          ],
        },
        {
          type: "tip",
          heading: "The 'magari' superpower",
          body: "<em>Magari</em> is impossible to fully translate. <strong>Magari!</strong> as a standalone = \"I wish!\" or \"If only!\" with a wistful tone. <strong>Magari + subjunctive</strong> = \"if only it were…\": <em>Magari fosse vero!</em> = If only it were true! Sprinkled in normal speech it means \"perhaps\" or \"hopefully\": <em>Magari domani fa bello.</em> = Maybe tomorrow it'll be nice.",
        },
        {
          type: "multipleChoice",
          heading: "Match the idiom",
          questions: [
            {
              q: "An Italian friend says 'In bocca al lupo!' before your job interview. Reply:",
              options: ["Grazie!", "Crepi (il lupo)!", "Ciao!", "Va bene!"],
              correct: 1,
              fb: "Traditional response is 'crepi!' — never 'grazie' (saying thanks supposedly jinxes it).",
            },
            {
              q: "'Magari!' as a one-word response means…",
              options: [
                "Of course!",
                "I wish! / If only!",
                "I doubt it",
                "Always",
              ],
              correct: 1,
            },
            {
              q: "'Boh' means…",
              options: [
                "very",
                "ouch",
                "no idea / dunno (with shrug)",
                "wow",
              ],
              correct: 2,
            },
            {
              q: "'Non vedo l'ora' literally = 'I don't see the hour'. It actually means…",
              options: [
                "I'm late",
                "I have no time",
                "I can't wait",
                "I lost my watch",
              ],
              correct: 2,
            },
            {
              q: "Friend says 'grazie mille' — informal reply:",
              options: ["Prego.", "Figurati!", "Both work — figurati is warmer.", "Niente!"],
              correct: 2,
            },
          ],
        },
      ],
    },
    {
      slug: "idioms-food-animal",
      title: "Food and animal idioms",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Italians describe life with food and animals",
          body: [
            "<em>Essere come il prezzemolo</em> = to be like parsley = to be everywhere (parsley is in everything).",
            "<em>Tutto fa brodo</em> = everything makes broth = it all helps.",
            "<em>Acqua in bocca!</em> = water in your mouth! = keep quiet / it's a secret!",
            "<em>Avere le mani in pasta</em> = to have hands in the dough = to be involved in lots of things.",
            "<em>Tirare il pacco</em> = to throw the package = to stand someone up.",
            "<em>Costa un occhio della testa</em> = it costs an eye from the head = it's super expensive.",
          ],
          keyPoint:
            "Food + body parts + animals do most of the metaphor work. Memorize a handful for warmth.",
        },
        {
          type: "vocab",
          heading: "Food & body idioms",
          items: [
            { it: "essere al verde", en: "to be broke ('to be at the green' — from old card-table cloth)" },
            { it: "non avere peli sulla lingua", en: "to not mince words ('no hair on the tongue')" },
            { it: "tirare i remi in barca", en: "to give up / pull the oars in the boat" },
            { it: "perdere la testa", en: "to lose your head (over someone or in love)" },
            { it: "essere in gamba", en: "to be smart / capable" },
            { it: "costa un occhio della testa", en: "costs an arm and a leg" },
            { it: "fare il furbo", en: "to play smart (negative — to cheat)" },
            { it: "non c'entra niente", en: "it has nothing to do with it" },
            { it: "essere il fanalino di coda", en: "to be the last (in a race / class)" },
            { it: "essere come cane e gatto", en: "to fight like dog and cat" },
            { it: "lavorare come un mulo", en: "to work like a mule" },
            { it: "fare la gattina morta", en: "to play innocent / sweet (lit. 'play dead kitten')" },
            { it: "essere una volpe", en: "to be a fox (= cunning)" },
            { it: "avere una fame da lupi", en: "to be hungry as wolves" },
          ],
        },
        {
          type: "dialogue",
          heading: "Idioms in conversation",
          setup: "Catching up.",
          lines: [
            { speaker: "Marco", it: "Anna, come stai? Sembri stanca.", en: "Anna, how are you? You look tired." },
            { speaker: "Anna", it: "Lavoro come un mulo. Tre progetti contemporaneamente.", en: "I'm working like a mule. Three projects at the same time." },
            { speaker: "Marco", it: "Che palle. Ma almeno ti pagano bene?", en: "What a pain. But at least they pay well?" },
            { speaker: "Anna", it: "Boh. Per ora non vedo l'ora che finisca questa settimana.", en: "Dunno. For now I can't wait for this week to end." },
            { speaker: "Marco", it: "Ti capisco. Magari sabato facciamo qualcosa per staccare?", en: "I get you. Maybe Saturday we'll do something to unplug?" },
            { speaker: "Anna", it: "Magari! Sarebbe perfetto.", en: "I wish! That would be perfect." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Idiom fill-ins",
          items: [
            {
              template: "Non posso uscire, sono al ___ .",
              answer: "verde",
              en: "I can't go out, I'm broke.",
              options: ["verde", "rosso", "nero", "blu"],
            },
            {
              template: "Quel ristorante costa un ___ della testa.",
              answer: "occhio",
              en: "That restaurant costs an arm and a leg.",
              options: ["dente", "occhio", "naso", "orecchio"],
            },
            {
              template: "___ in bocca! Non dire niente a nessuno.",
              answer: "Acqua",
              en: "Mum's the word! Don't tell anyone.",
              options: ["Acqua", "Pane", "Vino", "Olio"],
            },
            {
              template: "Marco e Lucia sono come cane e ___ . Litigano sempre.",
              answer: "gatto",
              en: "Marco and Lucia are like dog and cat. They're always fighting.",
              options: ["topo", "gatto", "uccello", "leone"],
            },
            {
              template: "Non vedo l' ___ di partire.",
              answer: "ora",
              en: "I can't wait to leave.",
              options: ["ora", "uomo", "occhio", "amico"],
            },
          ],
        },
      ],
    },
    {
      slug: "idioms-gestures",
      title: "Italian hand gestures",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Italians 'talk with their hands' — and it's a real grammar",
          body: [
            "Italian hand gestures aren't decoration — they convey meaning that words don't, or emphasize meaning that they do. A few worth recognizing (and using):",
            "<strong>Pinched fingers up</strong> (the famous 🤌): \"what are you saying / what do you want?\" — questioning, exasperated.",
            "<strong>Chin flick (back of hand under chin, flicking forward)</strong>: \"I don't care / who cares.\"",
            "<strong>Fingers brushing the cheek</strong>: \"delicious!\"",
            "<strong>Eye pull-down (forefinger under the eye)</strong>: \"be careful\" or \"I see what you're doing.\"",
            "<strong>Horn fingers (index + pinky out)</strong>: \"that's bad luck\" or \"someone's cheating on you\" (rude — only between close friends).",
          ],
          keyPoint:
            "Hand gestures convey real meaning. The pinched-fingers 🤌 is universally Italian and means 'what are you saying?'.",
        },
        {
          type: "vocab",
          heading: "Gesture vocabulary (verbal version)",
          items: [
            { it: "ma cosa dici?!", en: "but what are you saying?! (the 🤌 gesture in words)" },
            { it: "che vuoi?!", en: "what do you want?! (also 🤌)" },
            { it: "che ne so / chissà", en: "what do I know / who knows" },
            { it: "non m'importa", en: "I don't care (chin flick)" },
            { it: "delizioso! / buonissimo!", en: "delicious! (cheek brush)" },
            { it: "stai attento!", en: "be careful! (eye pull-down)" },
            { it: "porta sfortuna", en: "it brings bad luck (horns)" },
            { it: "tocca ferro", en: "touch iron (= knock on wood; Italians touch iron, not wood)" },
            { it: "mi fai impazzire", en: "you drive me crazy" },
            { it: "che casino", en: "what a mess / chaos" },
          ],
        },
        {
          type: "tip",
          heading: "Gesture decorum",
          body: "Italians gesture more in the south (Naples, Sicily) than the north (Milan, Turin). In formal settings (interviews, business), tone it down. With friends and family, go for it. Don't overdo gestures if it feels theatrical — Italians can tell when foreigners are performing 'Italianness' vs. naturally using their hands. The pinched 🤌 in particular has become an internet meme; using it ironically with Italians sometimes lands flat.",
        },
        {
          type: "multipleChoice",
          heading: "Match the meaning",
          questions: [
            {
              q: "The pinched-fingers gesture (🤌) typically means…",
              options: [
                "small / a little",
                "delicious",
                "what are you saying?! / what do you want?!",
                "money",
              ],
              correct: 2,
            },
            {
              q: "Italians 'touch iron' instead of 'knock on wood'. Iron in Italian =",
              options: ["legno", "ferro", "pietra", "metallo"],
              correct: 1,
            },
            {
              q: "Fingers brushing the cheek = …",
              options: [
                "be quiet",
                "delicious!",
                "who cares",
                "watch out",
              ],
              correct: 1,
            },
            {
              q: "'Che casino!' means…",
              options: [
                "what a casino!",
                "what a mess / chaos!",
                "what a party!",
                "what a small thing!",
              ],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-it",
          prompt: "I can't wait! Maybe Saturday we'll go to the beach.",
          reference: "Non vedo l'ora! Magari sabato andiamo al mare.",
          hint: "'Non vedo l'ora' = can't wait. 'Magari' here = maybe / hopefully.",
        },
        {
          type: "tip",
          heading: "Stay you — but borrow these three",
          body: "If you only ever borrow three Italian-isms, make them: <em>magari</em>, <em>boh</em>, and <em>figurati</em>. They cover surprise/hope, ignorance/shrug, and warmth/dismissal. Drop them naturally and conversations soften. Don't force <em>che palle</em> until you've heard friends use it freely — it's mild but contextual.",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "'In bocca al lupo!' = …",
        options: ["Bon appétit!", "Good luck!", "Safe travels!", "Cheers!"],
        correct: 1,
      },
      {
        q: "Reply to 'in bocca al lupo!' =",
        options: ["Grazie!", "Crepi (il lupo)!", "Ciao!", "Anche a te!"],
        correct: 1,
      },
      {
        q: "'Magari!' as a standalone =",
        options: ["For sure!", "I wish! / If only!", "No way!", "Always!"],
        correct: 1,
      },
      {
        q: "'Boh' is…",
        options: [
          "an emphatic yes",
          "a shrug — 'no idea / dunno'",
          "a swear word",
          "a greeting",
        ],
        correct: 1,
      },
      {
        q: "'Figurati!' means…",
        options: [
          "Imagine!",
          "Don't mention it / no problem",
          "Bad luck",
          "Who knows",
        ],
        correct: 1,
      },
      {
        q: "'Costa un occhio della testa' =",
        options: [
          "it's cheap",
          "it costs an arm and a leg",
          "I lost something valuable",
          "it's painful",
        ],
        correct: 1,
      },
      {
        q: "The pinched-fingers gesture 🤌 means…",
        options: [
          "delicious",
          "what are you saying?! / what do you want?!",
          "small amount",
          "money",
        ],
        correct: 1,
      },
      {
        q: "Italians 'touch ___' instead of 'knock on wood'.",
        options: ["legno (wood)", "ferro (iron)", "pietra (stone)", "vetro (glass)"],
        correct: 1,
      },
      {
        q: "'Non vedo l'ora' =",
        options: ["I'm late", "I lost track of time", "I can't wait", "I don't see the hour"],
        correct: 2,
      },
      {
        q: "Translate: 'I can't wait. Maybe tomorrow we'll go.'",
        options: [
          "Non vedo l'ora. Magari domani andiamo.",
          "Non posso aspettare. Forse domani andiamo.",
          "Non vedo il tempo. Magari domani.",
          "Aspetto. Magari domani andiamo.",
        ],
        correct: 0,
      },
    ],
  },
};
