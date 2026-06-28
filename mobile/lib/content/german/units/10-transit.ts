import type { Unit } from "../../types";

export const UNIT_TRANSIT: Unit = {
  slug: "transit",
  stage: 3,
  order: 10,
  icon: "🚇",
  title: "Getting around Berlin",
  tagline: "U-Bahn, S-Bahn, the BVG ticket, entwerten, Welche Linie?",
  badge: "tourist",
  lessons: [
    {
      slug: "transit-ubahn-sbahn",
      title: "U-Bahn, S-Bahn, and the BVG ticket",
      summary: "Name Berlin's transit, buy a ticket, and validate it before you get fined.",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Berlin moves on four kinds of track",
          body: [
            "The <strong>U-Bahn</strong> (underground, yellow trains) and the <strong>S-Bahn</strong> (overground, red-and-yellow trains) are the backbone. Lines are written <em>U1, U8, S5, S7</em> and so on. The ring line, the <strong>Ringbahn</strong> (S41 / S42), circles the whole inner city.",
            "Above ground you also have the <strong>Tram</strong> (mostly in the east) and the <strong>Bus</strong> everywhere. All of it is run by the <strong>BVG</strong> (and the S-Bahn by Deutsche Bahn), but one ticket covers all of them.",
            "Berlin is split into fare zones <strong>A, B, and C</strong>. Inside the city you want a ticket for zones <em>AB</em>. Only the airport (BER) and the far edges need zone <em>C</em>, so buy <em>ABC</em> for the airport run.",
          ],
          keyPoint:
            "U-Bahn + S-Bahn + Tram + Bus, one BVG ticket. City = zone AB. Airport BER = zone ABC.",
        },
        {
          type: "vocab",
          heading: "Core transit vocab",
          items: [
            { l1: "die U-Bahn", en: "the underground / subway", note: "feminine; plural die U-Bahnen" },
            { l1: "die S-Bahn", en: "the city rail (overground)", note: "feminine; run by Deutsche Bahn" },
            { l1: "die Tram / die Straßenbahn", en: "the tram", note: "feminine; ß = double s" },
            { l1: "der Bus", en: "the bus", note: "masculine; plural die Busse" },
            { l1: "der Bahnhof", en: "the station", note: "masculine; Hauptbahnhof = main station" },
            { l1: "der Bahnsteig", en: "the platform", note: "masculine; also das Gleis = the track" },
            { l1: "die Haltestelle", en: "the stop", note: "feminine; bus/tram stop" },
            { l1: "die Fahrkarte / das Ticket", en: "the ticket", note: "Fahrkarte is feminine; Ticket is neuter" },
            { l1: "der Fahrkartenautomat", en: "the ticket machine", note: "masculine; on every platform" },
            { l1: "die Fahrt", en: "the ride / journey", note: "feminine" },
            { l1: "entwerten", en: "to validate / stamp", note: "verb; you 'entwerten' a paper ticket before riding" },
            { l1: "der Fahrschein", en: "the ticket (formal)", note: "masculine; you'll hear it in announcements" },
          ],
        },
        {
          type: "tip",
          heading: "Stamp it or pay 60 euros",
          body: "Berlin has no turnstiles. A paper single ticket is worthless until you <strong>entwerten</strong> it — push it into the small red or yellow box on the platform (U/S-Bahn) or just inside the door (tram/bus) until it clicks. No timestamp means you ride <em>schwarz</em> (fare-dodging) and a <strong>Kontrolleur</strong> (plain-clothes inspector) can fine you 60 euros on the spot.",
          example: { l1: "Muss ich die Fahrkarte entwerten?", en: "Do I have to validate the ticket?" },
        },
        {
          type: "vocab",
          heading: "Ticket types (BVG, zone AB)",
          items: [
            { l1: "der Einzelfahrschein", en: "single ticket (~3,80 €, valid 2h one direction)" },
            { l1: "die Kurzstrecke", en: "short trip (~2,40 €, 3 U/S-Bahn stops or 6 bus/tram stops)" },
            { l1: "die Tageskarte", en: "day ticket (~10,60 €, unlimited until 3 a.m.)" },
            { l1: "die 4-Fahrten-Karte", en: "4-ride ticket (cheaper per ride)" },
            { l1: "die 7-Tage-Karte", en: "7-day pass" },
            { l1: "die BVG-App / FahrInfo", en: "the BVG app — buy a digital ticket, no stamping needed" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "What does 'entwerten' mean?",
              options: ["to buy", "to validate / stamp", "to refund", "to miss"],
              correct: 1,
            },
            {
              q: "You're travelling inside the city, not to the airport. Which zone ticket?",
              options: ["A only", "AB", "ABC", "C only"],
              correct: 1,
            },
            {
              q: "The red overground trains are the…",
              options: ["U-Bahn", "S-Bahn", "Tram", "Bus"],
              correct: 1,
              fb: "S-Bahn runs overground; U-Bahn (U) is the underground.",
            },
            {
              q: "Riding without a valid stamped ticket in Berlin can cost you…",
              options: ["nothing", "a warning", "a 60-euro fine", "a free upgrade"],
              correct: 2,
            },
          ],
        },
      ],
    },
    {
      slug: "transit-lines-stops",
      title: "Which line? Where do I change?",
      summary: "Ask which line goes where, and learn umsteigen — the art of transferring.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Two questions get you anywhere",
          body: [
            "To find your line, ask <em>«Welche Linie fährt zum [place]?»</em> — Which line goes to…? The verb <strong>fahren</strong> (to go by vehicle) is your friend here.",
            "Berlin journeys almost always need a transfer. <strong>Umsteigen</strong> means to change trains. <em>«Wo muss ich umsteigen?»</em> = Where do I have to change? <em>«Einmal umsteigen»</em> = change once.",
            "The direction of a line is given by its last stop, the <strong>Endhaltestelle</strong> (or <em>Richtung X</em> = direction X). Standing on the platform, you pick your train by that final destination, not by 'east' or 'west'.",
          ],
          keyPoint:
            "Welche Linie fährt zu…? = which line goes to…? Umsteigen = to change. Richtung X = heading toward X.",
        },
        {
          type: "vocab",
          heading: "Lines, directions, transfers",
          items: [
            { l1: "die Linie", en: "the line", note: "feminine; Linie U2, Linie S7" },
            { l1: "die Richtung", en: "the direction", note: "feminine; Richtung Pankow = toward Pankow" },
            { l1: "umsteigen", en: "to change / transfer", note: "separable verb: ich steige um" },
            { l1: "einsteigen", en: "to get on / board", note: "separable: ich steige ein" },
            { l1: "aussteigen", en: "to get off", note: "separable: ich steige aus" },
            { l1: "die Endhaltestelle", en: "the final stop / terminus", note: "feminine" },
            { l1: "die nächste Haltestelle", en: "the next stop", note: "you'll hear it announced" },
            { l1: "der Anschluss", en: "the connection", note: "masculine; the train you transfer to" },
            { l1: "der Liniennetzplan", en: "the route map", note: "masculine; posted on every platform" },
            { l1: "direkt", en: "direct", note: "fährt direkt = goes directly, no change" },
          ],
        },
        {
          type: "dialogue",
          heading: "Asking at Alexanderplatz",
          setup: "You're at Alexanderplatz and want to reach the zoo (Bahnhof Zoo).",
          lines: [
            { speaker: "You", l1: "Entschuldigung, welche Linie fährt zum Zoo?", en: "Excuse me, which line goes to the zoo?" },
            { speaker: "Berliner", l1: "Nehmen Sie die S5 oder S7 Richtung Westkreuz.", en: "Take the S5 or S7 toward Westkreuz." },
            { speaker: "You", l1: "Muss ich umsteigen?", en: "Do I have to change?" },
            { speaker: "Berliner", l1: "Nein, die S7 fährt direkt. Etwa zehn Minuten.", en: "No, the S7 goes directly. About ten minutes." },
            { speaker: "You", l1: "Auf welchem Bahnsteig fährt sie ab?", en: "Which platform does it leave from?" },
            { speaker: "Berliner", l1: "Gleis eins, die Treppe runter.", en: "Track one, down the stairs." },
            { speaker: "You", l1: "Vielen Dank!", en: "Thank you very much!" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the question",
          items: [
            {
              template: "___ Linie fährt zum Hauptbahnhof?",
              answer: "Welche",
              en: "Which line goes to the main station?",
              options: ["Welche", "Welcher", "Welches", "Wie"],
            },
            {
              template: "Wo muss ich ___?",
              answer: "umsteigen",
              en: "Where do I have to change?",
              options: ["einsteigen", "umsteigen", "aussteigen", "abfahren"],
            },
            {
              template: "Nehmen Sie die U2 ___ Pankow.",
              answer: "Richtung",
              en: "Take the U2 toward Pankow.",
              options: ["Richtung", "Linie", "Bahnsteig", "Anschluss"],
            },
            {
              template: "Die U8 fährt ___ — kein Umsteigen.",
              answer: "direkt",
              en: "The U8 goes directly — no changing.",
              options: ["direkt", "spät", "langsam", "zurück"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Which line goes to Alexanderplatz, and do I have to change?",
          reference: "Welche Linie fährt zum Alexanderplatz, und muss ich umsteigen?",
          hint: "'fährt zum' for the line; 'muss ich umsteigen' for the transfer question.",
        },
      ],
    },
    {
      slug: "transit-onboard",
      title: "On board, delays, and the right train",
      summary: "Confirm you're on the right train, survive a Verspätung, and read the signs.",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Make sure you're on the right train",
          body: [
            "Before the doors close, double-check with <em>«Fährt dieser Zug nach [place]?»</em> = Does this train go to…? A nod and you're set; a head-shake and you jump off fast.",
            "Delays happen. The word is <strong>die Verspätung</strong>. The board or the announcement might say <em>«Der Zug hat zehn Minuten Verspätung»</em> = the train is ten minutes late, or worse, <em>«fällt aus»</em> = is cancelled.",
            "Listen for two stock phrases: <em>«Zurückbleiben, bitte!»</em> (Stand back, please! — doors closing) and <em>«Nächster Halt: …»</em> (Next stop: …). Tune your ear to <strong>nächster Halt</strong> the way you'd watch for your bus stop at home.",
          ],
          keyPoint:
            "Fährt dieser Zug nach…? = does this train go to…? Verspätung = delay. Zurückbleiben, bitte = stand back.",
        },
        {
          type: "vocab",
          heading: "On board & on the board",
          items: [
            { l1: "der Zug", en: "the train", note: "masculine; plural die Züge" },
            { l1: "die Verspätung", en: "the delay", note: "feminine; X Minuten Verspätung" },
            { l1: "ausfallen", en: "to be cancelled", note: "separable: der Zug fällt aus" },
            { l1: "der Halt", en: "the stop", note: "masculine; nächster Halt = next stop" },
            { l1: "abfahren", en: "to depart", note: "separable: der Zug fährt ab" },
            { l1: "ankommen", en: "to arrive", note: "separable: der Zug kommt an" },
            { l1: "die Abfahrt", en: "the departure", note: "feminine; on the board" },
            { l1: "die Ankunft", en: "the arrival", note: "feminine; on the board" },
            { l1: "der Ausgang", en: "the exit", note: "masculine; follow signs to it" },
            { l1: "der Notausgang", en: "the emergency exit", note: "masculine" },
            { l1: "zurückbleiben", en: "to stand back", note: "Zurückbleiben, bitte! when doors close" },
            { l1: "besetzt / frei", en: "occupied / free (seat)", note: "Ist der Platz frei? = is this seat free?" },
          ],
        },
        {
          type: "dialogue",
          heading: "A delay on the platform",
          setup: "You're on the platform toward the airport and the train is late.",
          lines: [
            { speaker: "You", l1: "Entschuldigung, fährt dieser Zug nach Schönefeld?", en: "Excuse me, does this train go to Schönefeld?" },
            { speaker: "Reisender", l1: "Ja, aber er hat Verspätung. Etwa fünfzehn Minuten.", en: "Yes, but it's delayed. About fifteen minutes." },
            { speaker: "You", l1: "Oh nein, ich muss zum Flughafen. Fällt er aus?", en: "Oh no, I have to get to the airport. Is it cancelled?" },
            { speaker: "Reisender", l1: "Nein, er kommt gleich. Schauen Sie auf die Anzeigetafel.", en: "No, it's coming soon. Look at the display board." },
            { speaker: "You", l1: "Gut. Wie lange dauert die Fahrt zum Flughafen?", en: "Good. How long does the ride to the airport take?" },
            { speaker: "Reisender", l1: "Ungefähr eine halbe Stunde. Sie schaffen es.", en: "About half an hour. You'll make it." },
          ],
        },
        {
          type: "listen",
          heading: "What did the announcement say?",
          intro: "Listen to each one, then pick the closest meaning.",
          items: [
            {
              l1: "Nächster Halt: Alexanderplatz.",
              en: "Next stop: Alexanderplatz.",
              options: ["Final stop: Alexanderplatz", "Next stop: Alexanderplatz", "Alexanderplatz is closed", "Skip Alexanderplatz"],
              correct: 1,
            },
            {
              l1: "Zurückbleiben, bitte!",
              en: "Stand back, please!",
              options: ["Step forward, please", "Stand back, please", "Mind the gap", "Hold the doors"],
              correct: 1,
            },
            {
              l1: "Der Zug hat zehn Minuten Verspätung.",
              en: "The train is ten minutes late.",
              options: ["The train leaves in ten minutes", "The train is ten minutes late", "The train arrived ten minutes ago", "Ten more stops"],
              correct: 1,
            },
            {
              l1: "Dieser Zug fällt heute aus.",
              en: "This train is cancelled today.",
              options: ["This train is on time today", "This train is full today", "This train is cancelled today", "This train is new today"],
              correct: 2,
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          items: [
            { tokens: ["Fährt", "dieser", "Zug", "nach", "Potsdam", "?"], en: "Does this train go to Potsdam?" },
            { tokens: ["Der", "Zug", "hat", "zwanzig", "Minuten", "Verspätung", "."], en: "The train is twenty minutes late." },
            { tokens: ["Ist", "der", "Platz", "frei", "?"], en: "Is this seat free?" },
            { tokens: ["Wann", "kommt", "die", "nächste", "S-Bahn", "?"], en: "When does the next S-Bahn come?" },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "How do you ask 'Does this train go to the main station?'",
              options: [
                "Welche Linie nach Hauptbahnhof?",
                "Fährt dieser Zug nach Hauptbahnhof?",
                "Wo ist der Hauptbahnhof?",
                "Ist der Zug Hauptbahnhof?",
              ],
              correct: 1,
            },
            {
              q: "'Die Verspätung' means…",
              options: ["the platform", "the delay", "the exit", "the connection"],
              correct: 1,
            },
            {
              q: "On the platform you hear 'Zurückbleiben, bitte!'. You should…",
              options: ["step closer", "stand back from the edge", "buy a ticket", "change trains"],
              correct: 1,
            },
            {
              q: "'Der Zug fällt aus' means the train…",
              options: ["is on time", "is cancelled", "is full", "is arriving"],
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
        q: "Which two systems are the backbone of Berlin transit?",
        options: ["Tram and Bus", "U-Bahn and S-Bahn", "Taxi and Bus", "ICE and Tram"],
        correct: 1,
      },
      {
        q: "What does 'entwerten' mean?",
        options: ["to buy a ticket", "to validate / stamp a ticket", "to lose a ticket", "to refund a ticket"],
        correct: 1,
      },
      {
        q: "To travel inside the city (not the airport), which fare zone?",
        options: ["A only", "AB", "ABC", "C only"],
        correct: 1,
      },
      {
        q: "'Which line goes to Alexanderplatz?' =",
        options: [
          "Wo ist die Linie Alexanderplatz?",
          "Welche Linie fährt zum Alexanderplatz?",
          "Welcher Bus ist Alexanderplatz?",
          "Wie viele Linien Alexanderplatz?",
        ],
        correct: 1,
      },
      {
        q: "'Umsteigen' means…",
        options: ["to get on", "to get off", "to change / transfer", "to buy"],
        correct: 2,
      },
      {
        q: "'Die Verspätung' =",
        options: ["the direction", "the delay", "the platform", "the ticket"],
        correct: 1,
      },
      {
        q: "How do you confirm 'Does this train go to Potsdam?'",
        options: [
          "Ist dieser Zug Potsdam?",
          "Fährt dieser Zug nach Potsdam?",
          "Welche Linie Potsdam?",
          "Wo Potsdam Zug?",
        ],
        correct: 1,
      },
      {
        q: "Riding without a valid, stamped ticket can get you…",
        options: ["a discount", "a 60-euro fine", "a free transfer", "nothing"],
        correct: 1,
      },
      {
        q: "'Der Zug fällt aus' means the train is…",
        options: ["delayed", "cancelled", "full", "early"],
        correct: 1,
      },
      {
        q: "Translate: 'I have to change once.'",
        options: [
          "Ich muss einmal umsteigen.",
          "Ich muss einmal einsteigen.",
          "Ich steige nicht um.",
          "Ich fahre direkt.",
        ],
        correct: 0,
      },
    ],
  },
};
