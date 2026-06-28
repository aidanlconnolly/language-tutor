import type { Unit } from "../../types";

export const UNIT_LANDMARKS: Unit = {
  slug: "landmarks",
  stage: 3,
  order: 14,
  icon: "🏛️",
  title: "Berlin landmarks",
  tagline: "Brandenburger Tor, Reichstag, the Mauer, Museumsinsel.",
  badge: "culture",
  lessons: [
    {
      slug: "landmarks-sights",
      title: "The big sights",
      summary: "Name the icons: Brandenburger Tor, Reichstag, Fernsehturm, Museumsinsel.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Five names every Berlin visitor learns",
          body: [
            "The <strong>Brandenburger Tor</strong> (Brandenburg Gate) is <em>the</em> symbol of the city — a 1791 gate that stood right at the Wall, now the backdrop of every Berlin photo.",
            "Beside it sits the <strong>Reichstag</strong>, the German parliament, with its glass dome (<em>die Kuppel</em>) you can climb for free if you book ahead. Over the river rises the <strong>Fernsehturm</strong> (TV Tower) at Alexanderplatz — at 368 m, the tallest building in Germany.",
            "For culture, head to the <strong>Museumsinsel</strong> (Museum Island), a cluster of five world-class museums on one Spree island, and to <strong>Checkpoint Charlie</strong>, the famous Cold-War crossing point.",
          ],
          keyPoint:
            "Brandenburger Tor, Reichstag (parliament), Fernsehturm (TV tower), Museumsinsel, Checkpoint Charlie.",
        },
        {
          type: "vocab",
          heading: "Landmark vocab",
          items: [
            { l1: "das Tor", en: "the gate", note: "neuter; das Brandenburger Tor" },
            { l1: "der Turm", en: "the tower", note: "masculine; der Fernsehturm = TV tower" },
            { l1: "die Insel", en: "the island", note: "feminine; die Museumsinsel" },
            { l1: "das Museum", en: "the museum", note: "neuter; plural die Museen" },
            { l1: "die Kuppel", en: "the dome", note: "feminine; on the Reichstag" },
            { l1: "die Sehenswürdigkeit", en: "the sight / attraction", note: "feminine; literally 'worth-seeing thing'" },
            { l1: "der Dom", en: "the cathedral", note: "masculine; der Berliner Dom" },
            { l1: "das Schloss", en: "the palace / castle", note: "neuter; das Schloss Charlottenburg" },
            { l1: "der Fluss", en: "the river", note: "masculine; die Spree flows through Berlin" },
            { l1: "der Park", en: "the park", note: "masculine; der Tiergarten" },
            { l1: "besichtigen", en: "to visit / tour (a sight)" },
            { l1: "die Aussicht", en: "the view", note: "feminine; eine tolle Aussicht = a great view" },
          ],
        },
        {
          type: "tip",
          heading: "Most '-platz' names are squares",
          body: "Berlin sights cluster around squares ending in <strong>-platz</strong>: <em>Alexanderplatz</em> (the Fernsehturm), <em>Potsdamer Platz</em> (modern towers on former no-man's-land), <em>Pariser Platz</em> (right at the Brandenburger Tor). When someone names a <em>Platz</em>, picture an open square with sights around its edge.",
          example: { l1: "Der Fernsehturm ist am Alexanderplatz.", en: "The TV tower is at Alexanderplatz." },
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "The Reichstag is…",
              options: ["a TV tower", "the German parliament", "a museum", "a river"],
              correct: 1,
            },
            {
              q: "'der Fernsehturm' is…",
              options: ["the cathedral", "the TV tower", "the gate", "the palace"],
              correct: 1,
            },
            {
              q: "The Museumsinsel is a cluster of…",
              options: ["five museums on an island", "two gates", "Cold-War checkpoints", "parks"],
              correct: 0,
            },
            {
              q: "'die Sehenswürdigkeit' means…",
              options: ["the view", "the sight / attraction", "the dome", "the island"],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      slug: "landmarks-tickets-hours",
      title: "Tickets & opening hours",
      summary: "Open or closed? How much is admission? — getting into the sights.",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Two questions at every entrance",
          body: [
            "First, is it open? <strong>geöffnet</strong> = open, <strong>geschlossen</strong> = closed. Ask <em>«Ist das Museum heute geöffnet?»</em> Many Berlin museums close on <em>Montag</em> (Monday), so check.",
            "Second, what does it cost? <strong>der Eintritt</strong> = admission. <em>«Was kostet der Eintritt?»</em> = how much is admission? Look for <strong>ermäßigt</strong> (reduced — for students/seniors) and the magic word <strong>kostenlos</strong> (free).",
            "Opening hours are <strong>die Öffnungszeiten</strong>, usually posted as <em>«geöffnet von 10 bis 18 Uhr»</em> = open from 10 to 6. Buy a ticket: <em>«Zwei Tickets, bitte»</em> or <em>«Eine Eintrittskarte für Erwachsene.»</em>",
          ],
          keyPoint:
            "geöffnet / geschlossen = open / closed. der Eintritt = admission. Öffnungszeiten = opening hours. kostenlos = free.",
        },
        {
          type: "vocab",
          heading: "Tickets & hours vocab",
          items: [
            { l1: "geöffnet", en: "open", note: "past participle used as adjective" },
            { l1: "geschlossen", en: "closed" },
            { l1: "der Eintritt", en: "the admission / entry fee", note: "masculine" },
            { l1: "die Eintrittskarte", en: "the entry ticket", note: "feminine" },
            { l1: "die Öffnungszeiten", en: "the opening hours", note: "plural" },
            { l1: "ermäßigt", en: "reduced (price)", note: "for students, seniors" },
            { l1: "kostenlos / gratis", en: "free of charge" },
            { l1: "der Erwachsene", en: "the adult", note: "masculine; für Erwachsene" },
            { l1: "das Kind", en: "the child", note: "neuter; plural die Kinder" },
            { l1: "die Führung", en: "the guided tour", note: "feminine" },
            { l1: "der Eingang / der Ausgang", en: "the entrance / exit", note: "both masculine" },
            { l1: "die Warteschlange", en: "the queue / line", note: "feminine" },
          ],
        },
        {
          type: "dialogue",
          heading: "At the Pergamonmuseum ticket desk",
          setup: "You buy tickets at a museum on the Museumsinsel.",
          lines: [
            { speaker: "You", l1: "Guten Tag. Ist das Museum heute geöffnet?", en: "Hello. Is the museum open today?" },
            { speaker: "Kasse", l1: "Ja, bis achtzehn Uhr. Montags ist geschlossen.", en: "Yes, until six. It's closed on Mondays." },
            { speaker: "You", l1: "Was kostet der Eintritt?", en: "How much is admission?" },
            { speaker: "Kasse", l1: "Zwölf Euro für Erwachsene, sechs ermäßigt.", en: "Twelve euros for adults, six reduced." },
            { speaker: "You", l1: "Zwei Eintrittskarten für Erwachsene, bitte. Gibt es eine Führung?", en: "Two adult tickets, please. Is there a guided tour?" },
            { speaker: "Kasse", l1: "Ja, um vierzehn Uhr, auf Englisch. Der Audioguide ist kostenlos.", en: "Yes, at two, in English. The audio guide is free." },
            { speaker: "You", l1: "Perfekt, danke!", en: "Perfect, thanks!" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Tickets & times",
          items: [
            {
              template: "Ist das Museum heute ___?",
              answer: "geöffnet",
              en: "Is the museum open today?",
              options: ["geöffnet", "geschlossen", "kostenlos", "ermäßigt"],
            },
            {
              template: "Was kostet der ___?",
              answer: "Eintritt",
              en: "How much is admission?",
              options: ["Eintritt", "Ausgang", "Turm", "Fluss"],
            },
            {
              template: "Montags ist das Museum ___.",
              answer: "geschlossen",
              en: "On Mondays the museum is closed.",
              options: ["geschlossen", "geöffnet", "voll", "gratis"],
            },
            {
              template: "Der Eintritt ist für Kinder ___.",
              answer: "kostenlos",
              en: "Admission is free for children.",
              options: ["kostenlos", "geschlossen", "ermäßigt", "geöffnet"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Is the museum open today, and how much is admission?",
          reference: "Ist das Museum heute geöffnet, und was kostet der Eintritt?",
          hint: "geöffnet for open; 'was kostet der Eintritt' for the price.",
        },
      ],
    },
    {
      slug: "landmarks-talking",
      title: "Talking about what you've seen",
      summary: "Have you been to…? — sharing your sightseeing and a little Wall history.",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Asking and answering 'Have you been to…?'",
          body: [
            "To ask, use the perfect of <em>sein</em>: <strong>«Warst du schon im/am …?»</strong> = Have you already been to/at…? <em>«Warst du schon im Reichstag?»</em> (in the building) or <em>«… am Brandenburger Tor?»</em> (at the spot).",
            "Answer with <em>«Ja, ich war …»</em> or <em>«Nein, noch nicht»</em> (not yet). To say what you saw, use the perfect of <em>sehen</em>: <strong>«Ich habe … gesehen»</strong> = I've seen…. <em>«Ich habe den Fernsehturm gesehen.»</em>",
            "A little history makes any visit richer: <strong>die Mauer</strong> (the Wall) split the city from 1961 until it fell on 9 November 1989 — <em>der Mauerfall</em>. You can still walk the longest surviving stretch, the <strong>East Side Gallery</strong>, painted with murals.",
          ],
          keyPoint:
            "Warst du schon im/am …? = have you been to …? Ich habe … gesehen = I've seen … die Mauer fell in 1989.",
        },
        {
          type: "conjugation",
          heading: "Talking about the past: war & gesehen",
          verb: "sein / sehen",
          meaning: "to be / to see — for saying where you were and what you saw",
          intro: "'war' is the simple past of sein (was); 'habe … gesehen' is the perfect of sehen.",
          tenses: [
            {
              name: "war — was (simple past of sein)",
              forms: [
                { person: "ich", form: "war", en: "I was" },
                { person: "du", form: "warst", en: "you were" },
                { person: "er/sie/es", form: "war", en: "he/she/it was" },
                { person: "wir", form: "waren", en: "we were" },
                { person: "ihr", form: "wart", en: "you (pl) were" },
                { person: "sie/Sie", form: "waren", en: "they / you (formal) were" },
              ],
            },
            {
              name: "habe … gesehen — saw (perfect of sehen)",
              forms: [
                { person: "ich", form: "habe gesehen", en: "I saw / have seen" },
                { person: "du", form: "hast gesehen", en: "you saw" },
                { person: "er/sie/es", form: "hat gesehen", en: "he/she/it saw" },
                { person: "wir", form: "haben gesehen", en: "we saw" },
                { person: "ihr", form: "habt gesehen", en: "you (pl) saw" },
                { person: "sie/Sie", form: "haben gesehen", en: "they / you (formal) saw" },
              ],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "Comparing notes over a coffee",
          setup: "Two travellers swap what they've seen so far.",
          lines: [
            { speaker: "Anna", l1: "Warst du schon am Brandenburger Tor?", en: "Have you been to the Brandenburg Gate yet?" },
            { speaker: "You", l1: "Ja, gestern. Und ich habe auch den Reichstag gesehen.", en: "Yes, yesterday. And I also saw the Reichstag." },
            { speaker: "Anna", l1: "Toll! Warst du schon auf dem Fernsehturm?", en: "Great! Have you been up the TV tower yet?" },
            { speaker: "You", l1: "Nein, noch nicht. Die Aussicht soll fantastisch sein.", en: "No, not yet. The view is supposed to be fantastic." },
            { speaker: "Anna", l1: "Und die East Side Gallery? Das ist ein Stück der Mauer.", en: "And the East Side Gallery? That's a piece of the Wall." },
            { speaker: "You", l1: "Ja, ich habe die Bilder gesehen. Sehr beeindruckend.", en: "Yes, I saw the paintings. Very impressive." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Have you been there?",
          items: [
            {
              template: "___ du schon im Reichstag?",
              answer: "Warst",
              en: "Have you been in the Reichstag yet?",
              options: ["Warst", "Hast", "Bist", "Willst"],
            },
            {
              template: "Ich ___ gestern am Brandenburger Tor.",
              answer: "war",
              en: "I was at the Brandenburg Gate yesterday.",
              options: ["war", "warst", "bin", "habe"],
            },
            {
              template: "Ich habe den Fernsehturm ___.",
              answer: "gesehen",
              en: "I saw the TV tower.",
              options: ["gesehen", "sehen", "sah", "gesucht"],
            },
            {
              template: "Die Mauer ist 1989 ___. (fall)",
              answer: "gefallen",
              en: "The Wall fell in 1989.",
              options: ["gefallen", "gesehen", "gebaut", "geschlossen"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          items: [
            { tokens: ["Warst", "du", "schon", "am", "Reichstag", "?"], en: "Have you been to the Reichstag yet?" },
            { tokens: ["Ich", "habe", "die", "Museumsinsel", "gesehen", "."], en: "I saw the Museum Island." },
            { tokens: ["Die", "Mauer", "ist", "1989", "gefallen", "."], en: "The Wall fell in 1989." },
            { tokens: ["Die", "Aussicht", "vom", "Turm", "ist", "fantastisch", "."], en: "The view from the tower is fantastic." },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'Warst du schon am Brandenburger Tor?' means…",
              options: [
                "Are you going to the Brandenburg Gate?",
                "Have you been to the Brandenburg Gate yet?",
                "Where is the Brandenburg Gate?",
                "Do you like the Brandenburg Gate?",
              ],
              correct: 1,
            },
            {
              q: "'Ich habe den Fernsehturm gesehen' means…",
              options: [
                "I want to see the TV tower",
                "I saw the TV tower",
                "I'm at the TV tower",
                "The TV tower is closed",
              ],
              correct: 1,
            },
            {
              q: "The Berlin Wall (die Mauer) fell in…",
              options: ["1945", "1961", "1989", "2001"],
              correct: 2,
            },
            {
              q: "'Nein, noch nicht' means…",
              options: ["Yes, already", "No, not yet", "No, never", "Yes, soon"],
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
        q: "The Reichstag is…",
        options: ["the TV tower", "the German parliament", "a cathedral", "a museum island"],
        correct: 1,
      },
      {
        q: "'der Fernsehturm' is…",
        options: ["the gate", "the TV tower", "the palace", "the river"],
        correct: 1,
      },
      {
        q: "The Museumsinsel is…",
        options: [
          "a single art gallery",
          "a cluster of five museums on an island",
          "a Cold-War checkpoint",
          "a park",
        ],
        correct: 1,
      },
      {
        q: "'geöffnet' means…",
        options: ["closed", "open", "free", "reduced"],
        correct: 1,
      },
      {
        q: "'der Eintritt' is…",
        options: ["the exit", "the admission / entry fee", "the entrance hall", "the tour"],
        correct: 1,
      },
      {
        q: "'kostenlos' means…",
        options: ["expensive", "reduced", "free of charge", "closed"],
        correct: 2,
      },
      {
        q: "How do you ask 'Have you been to the Reichstag yet?'",
        options: [
          "Gehst du zum Reichstag?",
          "Warst du schon im Reichstag?",
          "Wo ist der Reichstag?",
          "Magst du den Reichstag?",
        ],
        correct: 1,
      },
      {
        q: "'Ich habe den Fernsehturm gesehen' means…",
        options: [
          "I want to see the TV tower",
          "I saw the TV tower",
          "I'm climbing the TV tower",
          "The TV tower is open",
        ],
        correct: 1,
      },
      {
        q: "The Berlin Wall fell in…",
        options: ["1945", "1961", "1989", "1990"],
        correct: 2,
      },
      {
        q: "Translate: 'Is the museum closed on Mondays?'",
        options: [
          "Ist das Museum montags geöffnet?",
          "Ist das Museum montags geschlossen?",
          "Was kostet das Museum?",
          "Wo ist das Museum?",
        ],
        correct: 1,
      },
    ],
  },
};
