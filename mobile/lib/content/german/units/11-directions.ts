import type { Unit } from "../../types";

export const UNIT_DIRECTIONS: Unit = {
  slug: "directions",
  stage: 3,
  order: 11,
  icon: "🧭",
  title: "Asking for directions",
  tagline: "Links, rechts, geradeaus — Wie komme ich zu…?",
  badge: "tourist",
  lessons: [
    {
      slug: "directions-words",
      title: "Left, right, straight on",
      summary: "The core direction words you point with and the landmarks you point at.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Six words cover most of it",
          body: [
            "Berlin streets are wide and labelled, but you'll still need to stop someone. The four you lean on are <strong>links</strong> (left), <strong>rechts</strong> (right), <strong>geradeaus</strong> (straight on), and <strong>zurück</strong> (back).",
            "Two more place words save the day: <strong>gegenüber</strong> (opposite) and <strong>neben</strong> (next to). <em>«Das Café ist gegenüber dem Bahnhof»</em> = the café is opposite the station.",
            "Germans love precision, so directions often come with <em>«an der Ampel»</em> (at the traffic light) or <em>«an der Ecke»</em> (at the corner). Listen for those landmarks — they pin the turn to a spot.",
          ],
          keyPoint:
            "links / rechts / geradeaus / zurück, plus gegenüber (opposite) and neben (next to).",
        },
        {
          type: "vocab",
          heading: "Direction and place words",
          items: [
            { l1: "links", en: "left", note: "nach links = to the left" },
            { l1: "rechts", en: "right", note: "nach rechts = to the right" },
            { l1: "geradeaus", en: "straight on / ahead" },
            { l1: "zurück", en: "back" },
            { l1: "gegenüber", en: "opposite", note: "+ dative: gegenüber dem Park" },
            { l1: "neben", en: "next to", note: "+ dative: neben der Kirche" },
            { l1: "die Ecke", en: "the corner", note: "feminine; an der Ecke = at the corner" },
            { l1: "die Ampel", en: "the traffic light", note: "feminine; an der Ampel = at the light" },
            { l1: "die Kreuzung", en: "the intersection", note: "feminine" },
            { l1: "die Straße", en: "the street", note: "feminine; ß = double s" },
            { l1: "die Brücke", en: "the bridge", note: "feminine; Berlin has hundreds" },
            { l1: "der Platz", en: "the square", note: "masculine; e.g. Alexanderplatz" },
          ],
        },
        {
          type: "tip",
          heading: "Abbiegen — the turning verb",
          body: "To say <em>turn left/right</em>, Germans use <strong>abbiegen</strong> (a separable verb): <em>«Biegen Sie links ab»</em> = turn left. You'll hear the <strong>ab</strong> jump to the end of the sentence. For 'go straight', it's simply <em>«Gehen Sie geradeaus»</em>.",
          example: { l1: "Biegen Sie an der Ampel rechts ab.", en: "Turn right at the traffic light." },
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "'geradeaus' means…",
              options: ["left", "right", "straight on", "back"],
              correct: 2,
            },
            {
              q: "'The café is opposite the station' uses which word for 'opposite'?",
              options: ["neben", "gegenüber", "zurück", "an der Ecke"],
              correct: 1,
            },
            {
              q: "'Biegen Sie links ab' means…",
              options: ["go straight", "turn left", "turn right", "turn around"],
              correct: 1,
            },
            {
              q: "'die Ampel' is…",
              options: ["the corner", "the bridge", "the traffic light", "the square"],
              correct: 2,
            },
          ],
        },
      ],
    },
    {
      slug: "directions-asking",
      title: "Asking politely: zum or zur?",
      summary: "Wie komme ich zum/zur…? — and why the ending changes with gender.",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "One polite formula, two endings",
          body: [
            "The go-to question is <em>«Entschuldigung, wie komme ich zum/zur [place]?»</em> = Excuse me, how do I get to…? Always lead with <strong>Entschuldigung</strong> and the formal <em>Sie</em>.",
            "<strong>Zu</strong> takes the dative case, and it fuses with the article: <em>zu + dem</em> → <strong>zum</strong> (for masculine/neuter places), <em>zu + der</em> → <strong>zur</strong> (for feminine places).",
            "So: <em>zum Bahnhof</em> (der Bahnhof, m), <em>zum Brandenburger Tor</em> (das Tor, n), but <em>zur Mauer</em> (die Mauer, f) and <em>zur Haltestelle</em> (die Haltestelle, f). The place's gender decides the ending.",
          ],
          keyPoint:
            "zum = zu dem (der/das places). zur = zu der (die places). Gender of the noun picks it.",
        },
        {
          type: "conjugation",
          heading: "zum vs zur — the dative pattern",
          verb: "zu",
          meaning: "to (toward a place) — fuses with the article",
          intro: "'Zu' + the dative article contracts. Match the contraction to the noun's gender.",
          tenses: [
            {
              name: "zum (der / das nouns)",
              forms: [
                { person: "zum Bahnhof", form: "der Bahnhof", en: "to the station (m)" },
                { person: "zum Park", form: "der Park", en: "to the park (m)" },
                { person: "zum Hotel", form: "das Hotel", en: "to the hotel (n)" },
                { person: "zum Brandenburger Tor", form: "das Tor", en: "to the Brandenburg Gate (n)" },
              ],
            },
            {
              name: "zur (die nouns)",
              forms: [
                { person: "zur Haltestelle", form: "die Haltestelle", en: "to the stop (f)" },
                { person: "zur Mauer", form: "die Mauer", en: "to the Wall (f)" },
                { person: "zur Kirche", form: "die Kirche", en: "to the church (f)" },
                { person: "zur Apotheke", form: "die Apotheke", en: "to the pharmacy (f)" },
              ],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "Lost near Hackescher Markt",
          setup: "You stop a passer-by to find the nearest U-Bahn.",
          lines: [
            { speaker: "You", l1: "Entschuldigung, wie komme ich zur U-Bahn?", en: "Excuse me, how do I get to the U-Bahn?" },
            { speaker: "Passantin", l1: "Gehen Sie geradeaus und dann an der Ampel links.", en: "Go straight and then left at the traffic light." },
            { speaker: "You", l1: "Und ist es weit?", en: "And is it far?" },
            { speaker: "Passantin", l1: "Nein, etwa fünf Minuten zu Fuß.", en: "No, about five minutes on foot." },
            { speaker: "You", l1: "Und wie komme ich zum Hauptbahnhof?", en: "And how do I get to the main station?" },
            { speaker: "Passantin", l1: "Da nehmen Sie besser die S-Bahn. Der Eingang ist gleich da rechts.", en: "For that you'd better take the S-Bahn. The entrance is right there on the right." },
            { speaker: "You", l1: "Vielen Dank, sehr nett!", en: "Thank you very much, very kind!" },
          ],
        },
        {
          type: "fillBlank",
          heading: "zum or zur?",
          intro: "Pick the contraction that matches the noun's gender.",
          items: [
            {
              template: "Wie komme ich ___ Bahnhof? (der Bahnhof)",
              answer: "zum",
              en: "How do I get to the station?",
              options: ["zum", "zur", "zu", "nach"],
            },
            {
              template: "Wie komme ich ___ Apotheke? (die Apotheke)",
              answer: "zur",
              en: "How do I get to the pharmacy?",
              options: ["zum", "zur", "zu", "nach"],
            },
            {
              template: "Wie komme ich ___ Brandenburger Tor? (das Tor)",
              answer: "zum",
              en: "How do I get to the Brandenburg Gate?",
              options: ["zum", "zur", "zu", "in"],
            },
            {
              template: "Wie komme ich ___ Mauer? (die Mauer)",
              answer: "zur",
              en: "How do I get to the Wall?",
              options: ["zum", "zur", "zu", "an"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me, how do I get to the station?",
          reference: "Entschuldigung, wie komme ich zum Bahnhof?",
          hint: "der Bahnhof is masculine, so zu + dem → zum.",
        },
      ],
    },
    {
      slug: "directions-understanding",
      title: "Understanding the answer",
      summary: "Decode the reply — distances, landmarks, and 'you can't miss it'.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The answer comes in three parts",
          body: [
            "First a <strong>direction</strong> verb: <em>gehen Sie</em> (go), <em>biegen Sie ab</em> (turn), <em>überqueren Sie</em> (cross). Then a <strong>landmark</strong>: <em>an der Kirche</em>, <em>nach der Brücke</em>. Then a <strong>distance</strong>: <em>etwa 200 Meter</em>, <em>die zweite Straße</em> (the second street).",
            "Numbers as turns matter: <em>«die erste Straße rechts»</em> = the first street on the right, <em>«die zweite links»</em> = the second on the left.",
            "And the reassuring close: <em>«Sie können es nicht verpassen»</em> = you can't miss it, or <em>«es ist nicht zu übersehen»</em> = it's impossible to overlook. If you didn't catch it, <em>«Können Sie das wiederholen?»</em> = can you repeat that?",
          ],
          keyPoint:
            "Reply = direction + landmark + distance. 'die erste/zweite Straße' = the first/second street.",
        },
        {
          type: "vocab",
          heading: "Words inside the answer",
          items: [
            { l1: "überqueren", en: "to cross", note: "überqueren Sie die Straße = cross the street" },
            { l1: "weit", en: "far", note: "Ist es weit? = is it far?" },
            { l1: "in der Nähe", en: "nearby", note: "ganz in der Nähe = very close" },
            { l1: "zu Fuß", en: "on foot", note: "fünf Minuten zu Fuß" },
            { l1: "die erste Straße", en: "the first street", note: "die zweite, die dritte…" },
            { l1: "der Eingang", en: "the entrance", note: "masculine; opposite of der Ausgang" },
            { l1: "das Gebäude", en: "the building", note: "neuter" },
            { l1: "vorbei an", en: "past", note: "gehen Sie am Park vorbei = go past the park" },
            { l1: "bis", en: "until / up to", note: "bis zur Ampel = up to the traffic light" },
            { l1: "Können Sie das wiederholen?", en: "Can you repeat that?" },
          ],
        },
        {
          type: "dialogue",
          heading: "A longer set of directions",
          setup: "You ask the way to the Museumsinsel and get a full answer.",
          lines: [
            { speaker: "You", l1: "Entschuldigung, wie komme ich zur Museumsinsel?", en: "Excuse me, how do I get to the Museum Island?" },
            { speaker: "Mann", l1: "Gehen Sie geradeaus bis zur Brücke und überqueren Sie sie.", en: "Go straight up to the bridge and cross it." },
            { speaker: "You", l1: "Okay, über die Brücke. Und dann?", en: "Okay, over the bridge. And then?" },
            { speaker: "Mann", l1: "Dann die erste Straße rechts. Das Museum ist gleich da.", en: "Then the first street on the right. The museum is right there." },
            { speaker: "You", l1: "Ist es weit?", en: "Is it far?" },
            { speaker: "Mann", l1: "Nein, ganz in der Nähe. Sie können es nicht verpassen.", en: "No, very close. You can't miss it." },
            { speaker: "You", l1: "Können Sie das wiederholen? Über die Brücke und dann…?", en: "Can you repeat that? Over the bridge and then…?" },
            { speaker: "Mann", l1: "Erste Straße rechts. Viel Spaß!", en: "First street on the right. Have fun!" },
          ],
        },
        {
          type: "listen",
          heading: "What did they tell you?",
          intro: "Listen, then pick what the direction means.",
          items: [
            {
              l1: "Die erste Straße links.",
              en: "The first street on the left.",
              options: ["The first street on the right", "The first street on the left", "The second street on the left", "Straight on"],
              correct: 1,
            },
            {
              l1: "Überqueren Sie die Brücke.",
              en: "Cross the bridge.",
              options: ["Go under the bridge", "Cross the bridge", "Turn before the bridge", "Stop at the bridge"],
              correct: 1,
            },
            {
              l1: "Es ist ganz in der Nähe.",
              en: "It's very close.",
              options: ["It's very far", "It's very close", "It's closed", "It's the other way"],
              correct: 1,
            },
            {
              l1: "Sie können es nicht verpassen.",
              en: "You can't miss it.",
              options: ["You can't miss it", "You have to pay", "You can't go there", "You missed it"],
              correct: 0,
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the directions",
          items: [
            { tokens: ["Gehen", "Sie", "geradeaus", "bis", "zur", "Ampel", "."], en: "Go straight on up to the traffic light." },
            { tokens: ["Dann", "die", "zweite", "Straße", "rechts", "."], en: "Then the second street on the right." },
            { tokens: ["Überqueren", "Sie", "die", "Straße", "."], en: "Cross the street." },
            { tokens: ["Es", "ist", "fünf", "Minuten", "zu", "Fuß", "."], en: "It's five minutes on foot." },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'die zweite Straße links' means…",
              options: [
                "the first street on the left",
                "the second street on the left",
                "the second street on the right",
                "two streets back",
              ],
              correct: 1,
            },
            {
              q: "'Überqueren Sie die Straße' means…",
              options: ["walk down the street", "cross the street", "go back up the street", "find the street"],
              correct: 1,
            },
            {
              q: "Someone says 'ganz in der Nähe'. It's…",
              options: ["very far", "very close", "closed", "the wrong way"],
              correct: 1,
            },
            {
              q: "You didn't catch the directions. You say…",
              options: [
                "Wie komme ich zum Bahnhof?",
                "Können Sie das wiederholen?",
                "Ist es weit?",
                "Vielen Dank!",
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
        q: "'rechts' means…",
        options: ["left", "right", "straight", "back"],
        correct: 1,
      },
      {
        q: "'geradeaus' means…",
        options: ["straight on", "left", "opposite", "around the corner"],
        correct: 0,
      },
      {
        q: "How do you politely ask 'How do I get to the station?' (der Bahnhof)",
        options: [
          "Wo Bahnhof?",
          "Wie komme ich zur Bahnhof?",
          "Entschuldigung, wie komme ich zum Bahnhof?",
          "Bahnhof, bitte?",
        ],
        correct: 2,
      },
      {
        q: "Which contraction goes with a feminine place (die Apotheke)?",
        options: ["zum", "zur", "zu der gar nicht", "nach"],
        correct: 1,
      },
      {
        q: "'zum' is a contraction of…",
        options: ["zu der", "zu dem", "zu das", "zu den"],
        correct: 1,
      },
      {
        q: "'gegenüber dem Bahnhof' means…",
        options: ["next to the station", "opposite the station", "behind the station", "inside the station"],
        correct: 1,
      },
      {
        q: "'Biegen Sie links ab' means…",
        options: ["turn left", "turn right", "go straight", "stop here"],
        correct: 0,
      },
      {
        q: "'die erste Straße rechts' =",
        options: [
          "the first street on the right",
          "the right first street",
          "the third street right",
          "the first right turn back",
        ],
        correct: 0,
      },
      {
        q: "'Sie können es nicht verpassen' means…",
        options: ["you have to pay", "you can't miss it", "you can't go there", "you missed the turn"],
        correct: 1,
      },
      {
        q: "Translate: 'Excuse me, how do I get to the Wall?' (die Mauer)",
        options: [
          "Entschuldigung, wie komme ich zum Mauer?",
          "Entschuldigung, wie komme ich zur Mauer?",
          "Wo ist die Mauer?",
          "Wie weit zur Mauer?",
        ],
        correct: 1,
      },
    ],
  },
};
