import type { Unit } from "../../types";

export const UNIT_SUBORDINATE_CLAUSES: Unit = {
  slug: "subordinate-clauses",
  stage: 8,
  order: 33,
  icon: "🎩",
  title: "Subordinate clauses",
  tagline: "weil, dass, wenn, obwohl — and verb-final word order.",
  badge: "advanced",
  lessons: [
    {
      slug: "subordinate-clauses-weil-dass",
      title: "weil & dass: the verb goes to the end",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The one rule that defines German grammar",
          body: [
            "Until now most of your sentences have kept the conjugated verb in second position: <em>Ich gehe nach Hause.</em> But German has a second word order, used inside <strong>subordinate clauses</strong>, where the conjugated verb is kicked all the way to the <strong>end</strong>.",
            "Two of the most common subordinating conjunctions are <strong>weil</strong> (because) and <strong>dass</strong> (that). The moment you start a clause with one of them, the verb must wait until the very last word.",
            "Compare: <em>Ich bleibe zu Hause. Ich bin müde.</em> → <em>Ich bleibe zu Hause, <strong>weil</strong> ich müde <strong>bin</strong>.</em> The verb <strong>bin</strong> jumps to the end.",
          ],
          keyPoint:
            "weil / dass start a subordinate clause → the conjugated verb moves to the END. A comma always separates the two clauses.",
        },
        {
          type: "tip",
          heading: "weil vs denn — both mean 'because'",
          body: "<strong>weil</strong> sends the verb to the end (it's subordinating). <strong>denn</strong> also means 'because' but is a <em>coordinating</em> conjunction — it keeps normal verb-second order. So <em>weil ich müde bin</em> but <em>denn ich bin müde</em>. In Berlin spoken German you'll hear people break the rule with weil + verb-second, but for B1 writing, keep weil verb-final.",
          example: { l1: "Ich nehme die U-Bahn, weil das Wetter schlecht ist.", en: "I'm taking the subway because the weather is bad." },
        },
        {
          type: "conjugation",
          heading: "Watch the verb move",
          verb: "Wortstellung",
          meaning: "word order with weil / dass",
          intro: "The same idea, main clause vs subordinate clause. Notice where the verb lands.",
          tenses: [
            {
              name: "Main clause (verb second)",
              forms: [
                { person: "Es regnet.", form: "regnet", en: "It's raining." },
                { person: "Berlin ist groß.", form: "ist", en: "Berlin is big." },
                { person: "Ich habe keine Zeit.", form: "habe", en: "I have no time." },
              ],
            },
            {
              name: "After weil (verb last)",
              forms: [
                { person: "…, weil es regnet.", form: "→ regnet", en: "…because it's raining." },
                { person: "…, weil Berlin groß ist.", form: "→ ist", en: "…because Berlin is big." },
                { person: "…, weil ich keine Zeit habe.", form: "→ habe", en: "…because I have no time." },
              ],
            },
            {
              name: "After dass (verb last)",
              forms: [
                { person: "Ich glaube, dass es regnet.", form: "→ regnet", en: "I think (that) it's raining." },
                { person: "Ich weiß, dass Berlin groß ist.", form: "→ ist", en: "I know (that) Berlin is big." },
                { person: "Schade, dass du keine Zeit hast.", form: "→ hast", en: "Too bad you have no time." },
              ],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "Why are you late?",
          setup: "Lena meets Tom outside a café in Prenzlauer Berg.",
          lines: [
            { speaker: "Lena", l1: "Warum kommst du so spät?", en: "Why are you so late?" },
            { speaker: "Tom", l1: "Tut mir leid, weil die S-Bahn Verspätung hatte.", en: "Sorry, because the S-Bahn was delayed." },
            { speaker: "Lena", l1: "Kein Problem. Ich glaube, dass es heute überall Probleme gibt.", en: "No problem. I think there are problems everywhere today." },
            { speaker: "Tom", l1: "Ja. Ich finde, dass der Nahverkehr in Berlin oft chaotisch ist.", en: "Yes. I find that public transport in Berlin is often chaotic." },
            { speaker: "Lena", l1: "Stimmt. Trinken wir einen Kaffee, weil wir jetzt sowieso warten müssen.", en: "True. Let's have a coffee, because we have to wait anyway now." },
          ],
        },
        {
          type: "orderWords",
          heading: "Put the verb where it belongs",
          intro: "Build each clause. Remember: after weil and dass, the verb goes last.",
          items: [
            { tokens: ["Ich", "bleibe", "zu", "Hause", ",", "weil", "ich", "krank", "bin"], en: "I'm staying home because I'm sick." },
            { tokens: ["Sie", "sagt", ",", "dass", "sie", "kein", "Geld", "hat"], en: "She says (that) she has no money." },
            { tokens: ["Wir", "nehmen", "ein", "Taxi", ",", "weil", "es", "regnet"], en: "We're taking a taxi because it's raining." },
            { tokens: ["Ich", "denke", ",", "dass", "der", "Film", "gut", "ist"], en: "I think (that) the film is good." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Finish the clause",
          intro: "Type the verb in its correct final position.",
          items: [
            {
              template: "Ich lerne Deutsch, weil ich in Berlin ___ . (wohnen)",
              answer: "wohne",
              en: "I'm learning German because I live in Berlin.",
              options: ["wohne", "wohnen", "wohnt", "gewohnt"],
            },
            {
              template: "Er sagt, dass er heute keine Zeit ___ . (haben)",
              answer: "hat",
              en: "He says (that) he has no time today.",
              options: ["hat", "habe", "haben", "hatte"],
            },
            {
              template: "Wir gehen nicht raus, weil es zu kalt ___ . (sein)",
              answer: "ist",
              en: "We're not going out because it's too cold.",
              options: ["ist", "sind", "sein", "bin"],
            },
            {
              template: "Ich hoffe, dass du bald ___ . (kommen)",
              answer: "kommst",
              en: "I hope (that) you'll come soon.",
              options: ["kommst", "kommen", "kommt", "komme"],
            },
          ],
        },
      ],
    },
    {
      slug: "subordinate-clauses-wenn-als-obwohl",
      title: "wenn, als, obwohl, damit & the comma",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "More conjunctions, same verb-final rule",
          body: [
            "Once you've mastered weil and dass, a whole family of conjunctions follows the exact same pattern — verb to the end, comma in front.",
            "<strong>wenn</strong> = if / when (repeated or future events) · <strong>als</strong> = when (a single past event) · <strong>obwohl</strong> = although · <strong>damit</strong> = so that / in order that · <strong>dass</strong> = that · <strong>ob</strong> = whether.",
            "The trap most learners fall into: <strong>wenn vs als</strong>. Use <em>als</em> only for one finished moment in the past — <em>Als ich klein war…</em> (When I was little…). Use <em>wenn</em> for the present, the future, and anything that repeats — <em>Wenn ich Zeit habe…</em> (When/if I have time…).",
          ],
          keyPoint:
            "wenn / als / obwohl / damit / ob all send the verb to the END. Always put a comma before the conjunction. als = one past moment; wenn = present, future, or repeated.",
        },
        {
          type: "vocab",
          heading: "The subordinating conjunctions",
          intro: "Every one of these triggers verb-final word order.",
          items: [
            { l1: "weil", en: "because" },
            { l1: "dass", en: "that", note: "Two s, no ß — different from das (the/which)." },
            { l1: "wenn", en: "if / when (repeated / future)" },
            { l1: "als", en: "when (a single past event)", note: "Als ich Kind war… — one finished moment." },
            { l1: "obwohl", en: "although / even though" },
            { l1: "damit", en: "so that / in order that", note: "Goal of an action." },
            { l1: "ob", en: "whether / if (indirect question)" },
            { l1: "bevor", en: "before" },
            { l1: "nachdem", en: "after" },
            { l1: "während", en: "while / during" },
            { l1: "bis", en: "until" },
            { l1: "seitdem", en: "since (time)" },
          ],
        },
        {
          type: "tip",
          heading: "obwohl is your politeness weapon",
          body: "<strong>obwohl</strong> (although) lets you concede a point and still push back — perfect for the opinions unit coming up. <em>Obwohl das Wetter schlecht ist, gehe ich gern spazieren.</em> = Although the weather is bad, I like going for a walk. Notice the verb <strong>ist</strong> sits at the end of the obwohl-clause, and because that clause comes first, the main clause flips to <strong>gehe ich</strong> — more on that next lesson.",
          example: { l1: "Ich gehe joggen, obwohl es regnet.", en: "I go jogging even though it's raining." },
        },
        {
          type: "multipleChoice",
          heading: "wenn or als?",
          intro: "Choose the right 'when'.",
          questions: [
            {
              q: "___ ich gestern nach Hause kam, war niemand da. (one past moment)",
              options: ["Wenn", "Als", "Ob", "Damit"],
              correct: 1,
              fb: "als — a single finished event in the past.",
            },
            {
              q: "___ ich Zeit habe, besuche ich dich. (future / general)",
              options: ["Als", "Wenn", "Obwohl", "Bevor"],
              correct: 1,
              fb: "wenn — present/future or repeated situations.",
            },
            {
              q: "Immer ___ es schneit, freuen sich die Kinder. (every time)",
              options: ["als", "wenn", "ob", "damit"],
              correct: 1,
              fb: "wenn — repeated events, even in the past, use wenn (immer wenn).",
            },
            {
              q: "Ich weiß nicht, ___ er heute kommt. (whether)",
              options: ["dass", "wenn", "ob", "als"],
              correct: 2,
              fb: "ob = whether, for indirect yes/no questions.",
            },
          ],
        },
        {
          type: "dialogue",
          heading: "Planning a weekend",
          setup: "Anna and Jonas chat about the weekend in Berlin.",
          lines: [
            { speaker: "Anna", l1: "Was machst du, wenn das Wetter gut ist?", en: "What are you doing if the weather is good?" },
            { speaker: "Jonas", l1: "Ich fahre an den See, obwohl er ziemlich weit ist.", en: "I'm going to the lake, even though it's quite far." },
            { speaker: "Anna", l1: "Als ich letztes Jahr dort war, war es wunderschön.", en: "When I was there last year, it was beautiful." },
            { speaker: "Jonas", l1: "Ich nehme das Fahrrad mit, damit wir die Gegend erkunden können.", en: "I'm bringing the bike so that we can explore the area." },
            { speaker: "Anna", l1: "Sag mir Bescheid, ob ich auch mitkommen kann.", en: "Let me know whether I can come along too." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Pick the conjunction",
          intro: "Choose the conjunction that fits the meaning.",
          items: [
            {
              template: "___ ich klein war, wohnte ich in München.",
              answer: "Als",
              en: "When I was little, I lived in Munich.",
              options: ["Wenn", "Als", "Ob", "Damit"],
            },
            {
              template: "Ich spare Geld, ___ ich nach Berlin reisen kann.",
              answer: "damit",
              en: "I'm saving money so that I can travel to Berlin.",
              options: ["weil", "damit", "obwohl", "als"],
            },
            {
              template: "Sie arbeitet viel, ___ sie schon müde ist.",
              answer: "obwohl",
              en: "She works a lot, although she's already tired.",
              options: ["weil", "damit", "obwohl", "wenn"],
            },
            {
              template: "Ruf mich an, ___ du angekommen bist.",
              answer: "wenn",
              en: "Call me when you've arrived.",
              options: ["wenn", "als", "ob", "damit"],
            },
            {
              template: "Ich frage ihn, ___ er morgen frei hat.",
              answer: "ob",
              en: "I'll ask him whether he's free tomorrow.",
              options: ["dass", "ob", "wenn", "als"],
            },
          ],
        },
      ],
    },
    {
      slug: "subordinate-clauses-front-loading",
      title: "Front-loading: the main clause flips",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "When the subordinate clause comes first",
          body: [
            "You can put the subordinate clause <strong>first</strong> for emphasis. But this triggers a second rule: because German keeps the conjugated verb in <strong>position two</strong> of the whole sentence, the entire subordinate clause counts as position one — so the main clause must start with its <strong>verb</strong>.",
            "The famous pattern is <strong>verb-comma-verb</strong>: <em>Wenn ich Zeit <strong>habe</strong>, <strong>gehe</strong> ich ins Kino.</em> Two verbs meet in the middle, separated only by the comma.",
            "Compare the two orders: <em>Ich gehe ins Kino, wenn ich Zeit habe.</em> = <em>Wenn ich Zeit habe, gehe ich ins Kino.</em> Same meaning — but in the second, the main clause flips to <strong>gehe ich</strong> (verb before subject).",
          ],
          keyPoint:
            "Front-loaded subordinate clause = position 1, so the main clause starts with its verb. The result is the verb-comma-verb sandwich: …habe, gehe ich…",
        },
        {
          type: "conjugation",
          heading: "The flip, side by side",
          verb: "Inversion",
          meaning: "front-loading the subordinate clause",
          intro: "Same sentence, two orders. Watch the main-clause subject and verb swap.",
          tenses: [
            {
              name: "Main clause first (normal)",
              forms: [
                { person: "Ich gehe ins Kino, wenn ich Zeit habe.", form: "ich gehe", en: "I go to the cinema if I have time." },
                { person: "Wir bleiben drinnen, weil es regnet.", form: "wir bleiben", en: "We stay inside because it's raining." },
                { person: "Er ist glücklich, obwohl er arm ist.", form: "er ist", en: "He's happy although he's poor." },
              ],
            },
            {
              name: "Subordinate clause first (flipped)",
              forms: [
                { person: "Wenn ich Zeit habe, gehe ich ins Kino.", form: "gehe ich", en: "If I have time, I go to the cinema." },
                { person: "Weil es regnet, bleiben wir drinnen.", form: "bleiben wir", en: "Because it's raining, we stay inside." },
                { person: "Obwohl er arm ist, ist er glücklich.", form: "ist er", en: "Although he's poor, he's happy." },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "Two verbs, one comma",
          body: "The clearest signal that you've nailed front-loading is the <strong>verb-comma-verb</strong> collision in the middle: <em>…Zeit <strong>habe, gehe</strong> ich…</em>. If you ever write the front-loaded version and the main clause still starts with its subject (<em>Wenn ich Zeit habe, ich gehe…</em>), it's wrong — the verb must come right after the comma.",
          example: { l1: "Als ich aufwachte, schien die Sonne.", en: "When I woke up, the sun was shining." },
        },
        {
          type: "orderWords",
          heading: "Build the flipped sentence",
          intro: "Front-load the subordinate clause. Remember the verb-comma-verb sandwich.",
          items: [
            { tokens: ["Wenn", "es", "regnet", ",", "bleibe", "ich", "zu", "Hause"], en: "If it rains, I stay home." },
            { tokens: ["Weil", "ich", "krank", "bin", ",", "gehe", "ich", "zum", "Arzt"], en: "Because I'm sick, I'm going to the doctor." },
            { tokens: ["Obwohl", "es", "spät", "ist", ",", "arbeitet", "sie", "noch"], en: "Although it's late, she's still working." },
            { tokens: ["Als", "wir", "ankamen", ",", "war", "der", "Laden", "zu"], en: "When we arrived, the shop was closed." },
          ],
        },
        {
          type: "dialogue",
          heading: "Making plans, the natural way",
          setup: "Two flatmates in Kreuzberg sort out the evening.",
          lines: [
            { speaker: "Mira", l1: "Wenn du heute kochst, mache ich morgen den Abwasch.", en: "If you cook today, I'll do the dishes tomorrow." },
            { speaker: "Felix", l1: "Abgemacht. Weil ich früher Feierabend habe, fange ich gleich an.", en: "Deal. Because I finish work earlier, I'll start right away." },
            { speaker: "Mira", l1: "Obwohl ich satt bin, freue ich mich auf dein Essen.", en: "Although I'm full, I'm looking forward to your food." },
            { speaker: "Felix", l1: "Als ich das letzte Mal gekocht habe, war es dir zu scharf.", en: "When I cooked last time, it was too spicy for you." },
            { speaker: "Mira", l1: "Damit das nicht passiert, nimm heute weniger Chili.", en: "So that doesn't happen, use less chili today." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "If I have time tomorrow, I'm going to the museum, although it's expensive.",
          reference: "Wenn ich morgen Zeit habe, gehe ich ins Museum, obwohl es teuer ist.",
          hint: "Front-load 'wenn' (verb-comma-verb: …Zeit habe, gehe ich…), then add the obwohl-clause with its verb 'ist' at the end.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Choose the correct flipped sentence:",
              options: [
                "Wenn ich Zeit habe, ich gehe ins Kino.",
                "Wenn ich Zeit habe, gehe ich ins Kino.",
                "Wenn ich habe Zeit, gehe ich ins Kino.",
                "Wenn habe ich Zeit, ich gehe ins Kino.",
              ],
              correct: 1,
            },
            {
              q: "After a front-loaded subordinate clause, the main clause starts with…",
              options: ["the subject", "the conjugated verb", "a comma only", "another conjunction"],
              correct: 1,
            },
            {
              q: "Which sentence has correct verb-final order in the subordinate clause?",
              options: [
                "…, weil ich bin müde.",
                "…, weil ich müde bin.",
                "…, weil bin ich müde.",
                "…, weil müde ich bin.",
              ],
              correct: 1,
            },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "What happens to the conjugated verb after weil or dass?",
        options: [
          "It stays in second position",
          "It moves to the very end of the clause",
          "It moves to the front",
          "It disappears",
        ],
        correct: 1,
      },
      {
        q: "Complete: Ich bleibe zu Hause, weil ich müde ___ .",
        options: ["bin", "ist", "sind", "sein"],
        correct: 0,
      },
      {
        q: "Which conjunction means 'although'?",
        options: ["weil", "obwohl", "damit", "ob"],
        correct: 1,
      },
      {
        q: "When do you use 'als' rather than 'wenn'?",
        options: [
          "For future events",
          "For repeated events",
          "For a single event in the past",
          "For questions",
        ],
        correct: 2,
      },
      {
        q: "Choose the correctly built clause:",
        options: [
          "Ich denke, dass er kommt morgen.",
          "Ich denke, dass er morgen kommt.",
          "Ich denke, dass kommt er morgen.",
          "Ich denke, dass morgen er kommt.",
        ],
        correct: 1,
      },
      {
        q: "Which conjunction means 'so that / in order that'?",
        options: ["obwohl", "damit", "bevor", "seitdem"],
        correct: 1,
      },
      {
        q: "Front-loaded: 'Wenn es regnet, ___ ich zu Hause.'",
        options: ["ich bleibe", "bleibe ich", "bleiben ich", "ich bleiben"],
        correct: 1,
      },
      {
        q: "Which means 'whether' (for indirect yes/no questions)?",
        options: ["dass", "ob", "wenn", "als"],
        correct: 1,
      },
      {
        q: "Pick the correct front-loaded sentence:",
        options: [
          "Obwohl er arm ist, er ist glücklich.",
          "Obwohl er ist arm, ist er glücklich.",
          "Obwohl er arm ist, ist er glücklich.",
          "Obwohl ist er arm, ist er glücklich.",
        ],
        correct: 2,
      },
      {
        q: "Translate: 'I'm learning German because I live in Berlin.'",
        options: [
          "Ich lerne Deutsch, weil ich wohne in Berlin.",
          "Ich lerne Deutsch, weil ich in Berlin wohne.",
          "Ich lerne Deutsch, denn ich in Berlin wohne.",
          "Ich lerne Deutsch, weil in Berlin ich wohne.",
        ],
        correct: 1,
      },
    ],
  },
};
