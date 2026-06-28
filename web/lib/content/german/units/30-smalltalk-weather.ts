import type { Unit } from "../../types";

export const UNIT_SMALLTALK_WEATHER: Unit = {
  slug: "smalltalk-weather",
  stage: 7,
  order: 30,
  icon: "🌦️",
  title: "Small talk & weather",
  tagline: "Das Wetter, Schönes Wochenende!, and graceful exits.",
  badge: "culture",
  lessons: [
    {
      slug: "smalltalk-weather-vocab",
      title: "The weather (das Wetter)",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Weather is the universal opener",
          body: [
            "The weather is the safest small-talk topic anywhere, and Berlin gives you plenty to comment on — grey winters, glorious lake summers, sudden rain.",
            "Most weather sentences start with impersonal <strong>es</strong>: <em>Es ist kalt</em> (it's cold), <em>Es regnet</em> (it's raining), <em>Es schneit</em> (it's snowing). No real subject — just <em>es</em> plus the verb.",
            "To exclaim, use <strong>Was für ein…!</strong> = 'What a…!': <em>Was für ein Wetter!</em> works for both a glorious and a miserable day, all in the tone.",
          ],
          tip: {
            label: "Berlin weather small talk",
            body: "Berliners love a weather grumble. <em>So ein Schmuddelwetter!</em> ('such grotty weather') over a grey drizzle is an instant bonding move. On a rare hot day: <em>Endlich Sommer!</em> ('finally summer!')",
          },
          keyPoint:
            "Weather sentences use impersonal 'es': Es ist kalt / Es regnet / Es schneit. Exclaim with 'Was für ein Wetter!'.",
        },
        {
          type: "vocab",
          heading: "Weather words",
          items: [
            { l1: "das Wetter", en: "the weather", note: "Neuter, no plural." },
            { l1: "Es ist kalt.", en: "It's cold." },
            { l1: "Es ist warm.", en: "It's warm." },
            { l1: "Es ist heiß.", en: "It's hot." },
            { l1: "Es ist schön.", en: "It's nice (out)." },
            { l1: "Es regnet.", en: "It's raining.", note: "From regnen; der Regen = the rain." },
            { l1: "Es schneit.", en: "It's snowing.", note: "From schneien; der Schnee = the snow." },
            { l1: "die Sonne scheint", en: "the sun is shining", note: "die Sonne = the sun." },
            { l1: "Es ist bewölkt.", en: "It's cloudy.", note: "die Wolke, die Wolken = cloud(s)." },
            { l1: "Es ist windig.", en: "It's windy.", note: "der Wind = the wind." },
            { l1: "Was für ein Wetter!", en: "What weather!" },
            { l1: "der Grad", en: "the degree", note: "Zehn Grad = ten degrees. Plural form stays 'Grad' for temperature." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the weather report",
          items: [
            {
              template: "Heute ist es ___ — nimm einen Mantel mit!",
              answer: "kalt",
              en: "Today it's cold — bring a coat!",
              options: ["kalt", "schön", "warm", "windig"],
            },
            {
              template: "Schau, die ___ scheint endlich!",
              answer: "Sonne",
              en: "Look, the sun is finally shining!",
              options: ["Sonne", "Wolke", "Regen", "Schnee"],
            },
            {
              template: "Nimm einen Schirm, es ___ .",
              answer: "regnet",
              en: "Take an umbrella, it's raining.",
              options: ["regnet", "schneit", "scheint", "ist"],
            },
            {
              template: "___ für ein Wetter heute!",
              answer: "Was",
              en: "What weather today!",
              options: ["Was", "Wie", "Wer", "Wo"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Read the sky",
          questions: [
            {
              q: "It's snowing. You say:",
              options: ["Es regnet.", "Es schneit.", "Es ist heiß.", "Die Sonne scheint."],
              correct: 1,
            },
            {
              q: "How do German weather sentences usually begin?",
              options: ["With 'ich'", "With impersonal 'es'", "With 'der Tag'", "With 'wir'"],
              correct: 1,
            },
            {
              q: "'Zehn Grad' means…",
              options: ["ten o'clock", "ten degrees", "ten days", "tenth floor"],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      slug: "smalltalk-weather-openers",
      title: "Small-talk openers & directness",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "German small talk runs short and direct",
          body: [
            "Germans value <strong>Direktheit</strong> — directness. Small talk is real but brief; there's less obligatory chit-chat than in the US, and a quiet pause is not awkward.",
            "Safe openers: the weather, the weekend, the surroundings. <em>Schönes Wetter heute, oder?</em> and <em>Schon Pläne fürs Wochenende?</em> are reliable.",
            "<strong>oder?</strong> tacked on the end is the German 'right?' — it invites agreement: <em>Toll hier, oder?</em> = 'Great here, right?' You'll also hear <em>ne?</em> in casual Berlin speech.",
            "Avoid probing money, salary, or politics with strangers. Hobbies, holidays, and food are all fair game.",
          ],
          keyPoint:
            "Keep it short and sincere. End with 'oder?' / 'ne?' to invite agreement. Weather, weekend, and surroundings are safe topics.",
        },
        {
          type: "vocab",
          heading: "Opener phrases",
          items: [
            { l1: "Schönes Wetter heute, oder?", en: "Nice weather today, right?" },
            { l1: "Schon Pläne fürs Wochenende?", en: "Got plans for the weekend yet?" },
            { l1: "Wie war dein Wochenende?", en: "How was your weekend?" },
            { l1: "Viel los hier, ne?", en: "Pretty busy here, huh?", note: "'ne?' = casual 'right?', very Berlin." },
            { l1: "oder?", en: "...right? / isn't it?", note: "Tag question inviting agreement." },
            { l1: "Kennst du das Café hier?", en: "Do you know this café?" },
            { l1: "Was machst du beruflich?", en: "What do you do for work?", note: "Common, not considered rude in Germany." },
            { l1: "Wohnst du hier in der Nähe?", en: "Do you live nearby?", note: "in der Nähe = nearby (dative)." },
          ],
        },
        {
          type: "tip",
          heading: "'oder?' and 'ne?' — the German tag",
          body: "English piles up tag questions (isn't it, doesn't he, won't they). German just bolts <strong>oder?</strong> or, casually, <strong>ne?</strong> onto the end — one word, any sentence. <em>Du kommst auch, oder?</em> = 'You're coming too, right?' It's friendly and invites a yes.",
          example: { l1: "Das Konzert war super, oder?", en: "The concert was great, right?" },
        },
        {
          type: "dialogue",
          heading: "Waiting in a café queue",
          setup: "Two strangers chat briefly while waiting to order.",
          lines: [
            { speaker: "Stranger", l1: "Endlich mal die Sonne, ne?", en: "The sun's finally out, huh?" },
            { speaker: "You", l1: "Ja, herrlich! Schon Pläne fürs Wochenende?", en: "Yes, lovely! Got plans for the weekend?" },
            { speaker: "Stranger", l1: "Vielleicht an den See. Und Sie?", en: "Maybe to the lake. And you?" },
            { speaker: "You", l1: "Wohne erst seit Kurzem hier. Kennen Sie das Café?", en: "I only just moved here. Do you know this café?" },
            { speaker: "Stranger", l1: "Klar, der Kuchen ist top. Den müssen Sie probieren.", en: "Sure, the cake is great. You have to try it." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the opener",
          intro: "Tap the words into order.",
          items: [
            { tokens: ["Schönes", "Wetter", "heute,", "oder?"], en: "Nice weather today, right?" },
            { tokens: ["Schon", "Pläne", "fürs", "Wochenende?"], en: "Got plans for the weekend yet?" },
            { tokens: ["Wohnst", "du", "hier", "in", "der", "Nähe?"], en: "Do you live nearby?" },
            { tokens: ["Wie", "war", "dein", "Wochenende?"], en: "How was your weekend?" },
          ],
        },
      ],
    },
    {
      slug: "smalltalk-weather-exits",
      title: "Keeping it going & graceful exits",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Know how to leave warmly",
          body: [
            "Ending a chat is an art. Germans wrap up with a quick reason and a friendly send-off — no long, drawn-out goodbyes.",
            "Signal you're leaving: <strong>Ich muss los.</strong> ('I have to get going.') or <strong>Ich muss leider weiter.</strong> ('I'm afraid I must move on.').",
            "Then the warm sign-off: <strong>Schönes Wochenende!</strong> ('Have a nice weekend!'), <strong>Mach's gut!</strong> ('Take care!'), or <strong>Bis bald!</strong> ('See you soon!').",
            "Reply to a good wish by echoing it: <em>Danke, gleichfalls!</em> = 'Thanks, you too!'",
          ],
          keyPoint:
            "Exit cleanly: 'Ich muss los' + a send-off ('Schönes Wochenende!', 'Mach's gut!', 'Bis bald!'). Echo wishes with 'Danke, gleichfalls!'.",
        },
        {
          type: "vocab",
          heading: "Continuing & closing phrases",
          items: [
            { l1: "Wie geht's denn so?", en: "So how's it going?", note: "Light follow-up, keeps things flowing." },
            { l1: "Echt? Erzähl mal!", en: "Really? Do tell!", note: "Shows interest." },
            { l1: "Ich muss los.", en: "I have to get going.", note: "los = off/away; sich verabschieden = to say goodbye." },
            { l1: "Ich muss leider weiter.", en: "I'm afraid I have to move on.", note: "leider = unfortunately." },
            { l1: "War schön, dich zu sehen.", en: "It was nice to see you." },
            { l1: "Schönes Wochenende!", en: "Have a nice weekend!" },
            { l1: "Mach's gut!", en: "Take care!", note: "Casual; reply: Du auch! = 'You too!'" },
            { l1: "Bis bald!", en: "See you soon!" },
            { l1: "Danke, gleichfalls!", en: "Thanks, you too!", note: "Echoes a good wish back." },
            { l1: "Pass auf dich auf!", en: "Take care of yourself!" },
          ],
        },
        {
          type: "dialogue",
          heading: "Wrapping up the chat",
          setup: "The café conversation comes to a natural close.",
          lines: [
            { speaker: "Stranger", l1: "Ach, ich muss leider weiter. Termin um drei.", en: "Oh, I'm afraid I have to move on. Appointment at three." },
            { speaker: "You", l1: "Klar, kein Problem. War schön, mit Ihnen zu plaudern.", en: "Sure, no problem. It was nice chatting with you." },
            { speaker: "Stranger", l1: "Fand ich auch. Schönes Wochenende!", en: "Same here. Have a nice weekend!" },
            { speaker: "You", l1: "Danke, gleichfalls! Mach's gut.", en: "Thanks, you too! Take care." },
            { speaker: "Stranger", l1: "Bis bald vielleicht!", en: "See you soon maybe!" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Make a graceful exit",
          items: [
            {
              template: "Oh, schon spät — ich muss ___ .",
              answer: "los",
              en: "Oh, it's late already — I have to get going.",
              options: ["los", "weiter", "gut", "bald"],
            },
            {
              template: "Schönes ___ ! Bis Montag.",
              answer: "Wochenende",
              en: "Have a nice weekend! See you Monday.",
              options: ["Wochenende", "Wetter", "Café", "Wochen"],
            },
            {
              template: "— Schönen Tag noch! — Danke, ___ !",
              answer: "gleichfalls",
              en: "— Have a nice day! — Thanks, you too!",
              options: ["gleichfalls", "bitte", "los", "bald"],
            },
            {
              template: "Mach's ___ ! Wir sehen uns.",
              answer: "gut",
              en: "Take care! See you around.",
              options: ["gut", "los", "weiter", "schön"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I have to get going. It was nice to see you. Have a nice weekend!",
          reference: "Ich muss los. War schön, dich zu sehen. Schönes Wochenende!",
          hint: "Use 'Ich muss los' for the exit and 'Schönes Wochenende!' to close.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which phrase signals you're about to leave?",
              options: ["Wie geht's?", "Ich muss los.", "Schönes Wetter, oder?", "Erzähl mal!"],
              correct: 1,
            },
            {
              q: "Someone says 'Schönen Tag noch!' You reply:",
              options: ["Bitte schön.", "Danke, gleichfalls!", "Ich muss los.", "Was für ein Wetter!"],
              correct: 1,
            },
            {
              q: "'Mach's gut!' means…",
              options: ["Do it well!", "Take care!", "Make it good.", "Good morning!"],
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
        q: "It's snowing. You say:",
        options: ["Es regnet.", "Es schneit.", "Es ist heiß.", "Es ist windig."],
        correct: 1,
      },
      {
        q: "German weather sentences usually start with…",
        options: ["ich", "impersonal 'es'", "wir", "der Himmel"],
        correct: 1,
      },
      {
        q: "'Schönes Wetter heute, oder?' — the 'oder?' at the end…",
        options: ["asks for an alternative", "invites agreement ('right?')", "means 'or else'", "is a mistake"],
        correct: 1,
      },
      {
        q: "A safe small-talk topic with a German stranger is…",
        options: ["their salary", "their politics", "the weekend / weather", "their religion"],
        correct: 2,
      },
      {
        q: "Which is a friendly exit line?",
        options: ["Was für ein Wetter!", "Ich muss los.", "Erzähl mal!", "Kennst du das Café?"],
        correct: 1,
      },
      {
        q: "'Schönes Wochenende!' means…",
        options: ["Nice weather!", "Have a nice weekend!", "See you Monday.", "What a week!"],
        correct: 1,
      },
      {
        q: "Reply to 'Schönen Tag noch!':",
        options: ["Danke, gleichfalls!", "Bitte schön.", "Es regnet.", "Was für ein Wetter!"],
        correct: 0,
      },
      {
        q: "'Mach's gut!' is best translated as…",
        options: ["Do it well.", "Take care!", "Make it good.", "Good luck."],
        correct: 1,
      },
      {
        q: "'Die Sonne scheint' means…",
        options: ["It's raining.", "The sun is shining.", "It's snowing.", "It's cloudy."],
        correct: 1,
      },
      {
        q: "Translate: 'I have to get going. Have a nice weekend!'",
        options: [
          "Ich muss los. Schönes Wochenende!",
          "Ich bin los. Schönes Wetter!",
          "Ich muss weiter. Gute Woche!",
          "Ich gehe. Schöne Sonne!",
        ],
        correct: 0,
      },
    ],
  },
};
