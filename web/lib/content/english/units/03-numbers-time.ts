import type { Unit } from "../../types";

export const UNIT_NUMBERS_TIME: Unit = {
  slug: "numbers-time",
  stage: 1,
  order: 3,
  icon: "🔢",
  title: "Numbers, days & time",
  tagline: "0–1000, dates, telling the time, prices in pounds.",
  badge: "core",
  lessons: [
    {
      slug: "numbers-time-counting",
      title: "Numbers 0–1000 and ordinals",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Counting up, and the -teen / -ty trap",
          body: [
            "The numbers <strong>0–12</strong> each have their own word. From <strong>13</strong> the pattern kicks in: <em>thir-teen, four-teen, fif-teen…</em>. The tens are <em>twenty, thirty, forty…</em> — note <strong>forty</strong> has no 'u'.",
            "The hardest pair for learners is <strong>-teen</strong> versus <strong>-ty</strong>: <em>fifteen</em> (15) vs <em>fifty</em> (50). The trick is the <strong>stress</strong>: fif<strong>TEEN</strong> stresses the end; <strong>FIF</strong>ty stresses the start.",
            "Above 100 you say <em>one hundred</em>, then join with <strong>and</strong>: <em>one hundred and twenty-three</em>. Britons keep the \"and\"; Americans often drop it. <strong>1000</strong> is <em>one thousand</em>.",
          ],
          keyPoint:
            "Hear the stress: fifTEEN (15) ends loud; FIFty (50) starts loud. Same trick for thirteen/thirty, fourteen/forty…",
        },
        {
          type: "vocab",
          heading: "Key numbers",
          intro: "Learn the awkward ones; the rest follow the pattern.",
          items: [
            { l1: "zero / nought / oh", en: "0", note: "'Nought' is written maths; 'oh' is used in phone numbers." },
            { l1: "twelve", en: "12", note: "Last of the unique words." },
            { l1: "thirteen", en: "13", note: "Stress the end: thir-TEEN." },
            { l1: "fifteen", en: "15", note: "Don't confuse with fifty." },
            { l1: "twenty", en: "20", note: "FIRST syllable stressed." },
            { l1: "thirty", en: "30", note: "Compare with thirteen." },
            { l1: "forty", en: "40", note: "No 'u' — not 'fourty'." },
            { l1: "fifty", en: "50", note: "FIF-ty, stress at the start." },
            { l1: "one hundred", en: "100", note: "Join with 'and': a hundred AND one." },
            { l1: "one thousand", en: "1000", note: "Also 'a thousand'." },
          ],
        },
        {
          type: "tip",
          heading: "Ordinals: first, second, third…",
          body: "Ordinal numbers put things in order. Most just add <strong>-th</strong> (four<strong>th</strong>, six<strong>th</strong>, ten<strong>th</strong>), but the first three are irregular: <strong>first (1st)</strong>, <strong>second (2nd)</strong>, <strong>third (3rd)</strong>. Watch the spelling shifts: <em>five → fifth</em>, <em>nine → ninth</em> (no 'e'), <em>twelve → twelfth</em>.",
          example: { l1: "the first, the second, the twenty-first", en: "1st, 2nd, 21st — note the recurring 'first/second/third' endings." },
        },
        {
          type: "fillBlank",
          heading: "Write the number word",
          intro: "Type the number in words (British style).",
          items: [
            {
              template: "15 = ___",
              answer: "fifteen",
              en: "The number 15.",
              options: ["fifty", "fifteen", "fivteen", "five teen"],
            },
            {
              template: "40 = ___",
              answer: "forty",
              en: "The number 40.",
              options: ["fourty", "forty", "fourteen", "fortie"],
            },
            {
              template: "123 = one hundred ___ twenty-three",
              answer: "and",
              en: "British style keeps the 'and'.",
              options: ["and", "of", "plus", "with"],
            },
            {
              template: "9th = ___",
              answer: "ninth",
              en: "The ordinal for 9 — note: no 'e'.",
              options: ["nineth", "ninth", "nineth", "ninveth"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "15 or 50?",
          questions: [
            {
              q: "Which one is 50?",
              options: ["fifteen", "fifty", "five", "five hundred"],
              correct: 1,
              fb: "\"Fifty\" (50) stresses the FIRST syllable: FIF-ty.",
            },
            {
              q: "How do Britons usually say 305?",
              options: [
                "three hundred five",
                "three hundred and five",
                "thirty-five",
                "three oh five hundred",
              ],
              correct: 1,
              fb: "British English keeps the 'and': three hundred AND five.",
            },
            {
              q: "Which is the ordinal for 3?",
              options: ["threeth", "thirth", "third", "thried"],
              correct: 2,
              fb: "\"Third\" — one of the three irregular ordinals.",
            },
          ],
        },
      ],
    },
    {
      slug: "numbers-time-days-dates",
      title: "Days, months & dates",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Saying the date the British way",
          body: [
            "Days and months are always written with a <strong>capital letter</strong> in English: <em>Monday</em>, <em>July</em> — never 'monday'.",
            "Britons say dates <strong>day-first</strong>: \"the third of May\" or \"the 3rd of May\", and write it <strong>3 May</strong> or <strong>03/05</strong>. (Americans put the month first — 5/3 — which is a famous source of confusion.)",
            "Note the ordinal in the spoken date: not \"three May\" but <strong>the third of May</strong>. You can also say \"May the third\", but day-first is the everyday British habit.",
          ],
          keyPoint:
            "British dates run day → month: \"the third of May\", written 3 May or 03/05. Days and months are capitalised.",
        },
        {
          type: "vocab",
          heading: "Days and months",
          items: [
            { l1: "Monday", en: "first weekday", note: "Capital M, always." },
            { l1: "Wednesday", en: "midweek day", note: "Silent first 'd': \"Wenz-day\"." },
            { l1: "Saturday", en: "first weekend day", note: "Part of the weekend." },
            { l1: "Sunday", en: "second weekend day", note: "Part of the weekend." },
            { l1: "January", en: "month 1", note: "Capital J." },
            { l1: "February", en: "month 2", note: "Often said \"Feb-roo-ary\"." },
            { l1: "August", en: "month 8", note: "AW-gust." },
            { l1: "the weekend", en: "Saturday and Sunday", note: "'At the weekend' (British) vs 'on the weekend' (US)." },
            { l1: "today / tomorrow", en: "this day / the next day", note: "'Yesterday' = the day before." },
            { l1: "the third of May", en: "a spoken date (3 May)", note: "Day-first, with an ordinal." },
          ],
        },
        {
          type: "dialogue",
          heading: "Booking a dentist's appointment",
          setup: "You ring the surgery to arrange a check-up.",
          lines: [
            { speaker: "Receptionist", l1: "When would suit you?", en: "'Suit you' means 'be convenient for you'." },
            { speaker: "You", l1: "Have you anything on Wednesday?", en: "Asking about availability. 'Anything' = any free slot." },
            { speaker: "Receptionist", l1: "I've got the third of June, half nine.", en: "Offering a date and time. 'Half nine' = 9:30." },
            { speaker: "You", l1: "Sorry, that's a bit early. Anything in the afternoon?", en: "Politely declining and asking for a later slot." },
            { speaker: "Receptionist", l1: "How about Thursday the fourth, at two?", en: "Offering another date. 'At two' = 2 o'clock." },
            { speaker: "You", l1: "Perfect, the fourth at two. Thank you.", en: "Confirming the date and time." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the date",
          intro: "Arrange the words into a natural British date.",
          items: [
            { tokens: ["the", "third", "of", "May"], en: "the third of May" },
            { tokens: ["on", "Monday", "the", "first", "of", "July"], en: "on Monday the first of July" },
            { tokens: ["my", "birthday", "is", "the", "ninth", "of", "August"], en: "my birthday is the ninth of August" },
          ],
        },
        {
          type: "translate",
          heading: "Say it naturally",
          direction: "en-to-l1",
          prompt: "Tell someone your appointment is on the 3rd of June, using the everyday British spoken style.",
          reference: "My appointment is on the third of June.",
          hint: "Day-first, with an ordinal: 'the third of June' — not 'June three'.",
        },
      ],
    },
    {
      slug: "numbers-time-clock-prices",
      title: "Telling the time & prices in pounds",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Past, to, and the quarters",
          body: [
            "For the first half of the hour, English counts <strong>past</strong>: \"ten past three\" (3:10), \"half past three\" (3:30). For the second half it counts <strong>to</strong> the next hour: \"twenty to four\" (3:40), \"quarter to four\" (3:45).",
            "<strong>Quarter past</strong> = :15, <strong>half past</strong> = :30, <strong>quarter to</strong> = :45. In casual speech Britons even drop the 'past': <em>half three</em> means 3:30 (not 2:30 — careful!).",
            "On the hour you say <strong>o'clock</strong>: \"three o'clock\". For exact times you can also just read the digits: \"three forty-five\".",
          ],
          keyPoint:
            "First half of the hour = PAST; second half = TO the next hour. Quarter past (:15), half past (:30), quarter to (:45).",
        },
        {
          type: "vocab",
          heading: "Clock & money words",
          items: [
            { l1: "o'clock", en: "exactly on the hour", note: "Only for whole hours: 'four o'clock'." },
            { l1: "quarter past", en: ":15", note: "'Quarter past six' = 6:15." },
            { l1: "half past", en: ":30", note: "'Half past six' = 6:30. Casual: 'half six'." },
            { l1: "quarter to", en: ":45", note: "'Quarter to seven' = 6:45." },
            { l1: "midday / noon", en: "12:00 in the day", note: "Midnight is 12:00 at night." },
            { l1: "a pound (£)", en: "the UK currency unit", note: "Plural 'pounds'. £1 = 100 pence." },
            { l1: "a penny / pence (p)", en: "1/100 of a pound", note: "'50p' is said 'fifty pee'." },
            { l1: "a fiver / a tenner", en: "£5 / £10 note", note: "Casual words for the banknotes." },
            { l1: "How much is it?", en: "asks the price", note: "Also 'How much does it cost?'" },
          ],
        },
        {
          type: "tip",
          heading: "Saying prices aloud",
          body: "£4.50 is said <strong>\"four pounds fifty\"</strong> — you usually drop the word 'pence'. Just <strong>50p</strong> is <strong>\"fifty pee\"</strong>. £2.99 is <strong>\"two ninety-nine\"</strong> or \"two pounds ninety-nine\". The little <strong>p</strong> is always pronounced \"pee\", never \"pence\" in casual speech.",
          example: { l1: "That's three pounds twenty, please.", en: "How a shopkeeper says £3.20." },
        },
        {
          type: "dialogue",
          heading: "At the corner shop",
          setup: "You're buying a coffee and a newspaper.",
          lines: [
            { speaker: "Shopkeeper", l1: "Morning! What can I get you?", en: "A cheerful greeting; 'What can I get you?' = 'what would you like?'" },
            { speaker: "You", l1: "A coffee and the paper, please. How much is that?", en: "Ordering and asking the price. 'The paper' = the newspaper." },
            { speaker: "Shopkeeper", l1: "That's three pounds twenty.", en: "Stating the total: £3.20." },
            { speaker: "You", l1: "Here's a fiver.", en: "Handing over a £5 note." },
            { speaker: "Shopkeeper", l1: "And one eighty change. Cheers!", en: "'One eighty' = £1.80 change; 'cheers' = thanks." },
            { speaker: "You", l1: "Thanks. Have a good one!", en: "'Have a good one' is a casual 'have a nice day'." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Tell the time",
          intro: "Choose the natural way to say each time.",
          items: [
            {
              template: "3:30 = half ___ three",
              answer: "past",
              en: "Half past three.",
              options: ["to", "past", "of", "before"],
            },
            {
              template: "6:45 = quarter ___ seven",
              answer: "to",
              en: "Quarter to seven.",
              options: ["past", "to", "of", "after"],
            },
            {
              template: "£2.99 is said \"two ___\"",
              answer: "ninety-nine",
              en: "Two ninety-nine.",
              options: ["point nine nine", "ninety-nine", "nine nine", "pence"],
            },
            {
              template: "50p is said \"fifty ___\"",
              answer: "pee",
              en: "Fifty pee.",
              options: ["pence", "pee", "pounds", "p's"],
            },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "What is 7:15?",
              options: ["quarter to seven", "quarter past seven", "half past seven", "seven o'clock"],
              correct: 1,
            },
            {
              q: "How is £4.50 usually said aloud?",
              options: ["four point five pounds", "four pounds fifty", "four fifty pence", "forty-five"],
              correct: 1,
            },
            {
              q: "In casual British speech, \"half three\" means…",
              options: ["2:30", "3:30", "3:00", "half an hour"],
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
        q: "Which is 50?",
        options: ["fifteen", "fifty", "five", "fourteen"],
        correct: 1,
      },
      {
        q: "How do Britons usually say 215?",
        options: [
          "two hundred fifteen",
          "two hundred and fifteen",
          "twenty-one five",
          "two fifteen hundred",
        ],
        correct: 1,
      },
      {
        q: "The ordinal for 2 is…",
        options: ["twoth", "secondth", "second", "twice"],
        correct: 2,
      },
      {
        q: "British dates are usually said…",
        options: ["month then day", "day then month", "year first", "in numbers only"],
        correct: 1,
      },
      {
        q: "Which is correct for 3 May, British style?",
        options: ["May three", "the third of May", "third May the", "May of three"],
        correct: 1,
      },
      {
        q: "Days and months in English are…",
        options: ["always lowercase", "always capitalised", "capitalised only on Mondays", "written in italics"],
        correct: 1,
      },
      {
        q: "What time is \"quarter to four\"?",
        options: ["4:15", "3:45", "4:45", "3:15"],
        correct: 1,
      },
      {
        q: "What is 9:30, said naturally?",
        options: ["half to nine", "half past nine", "quarter past nine", "nine quarter"],
        correct: 1,
      },
      {
        q: "How is £3.20 usually said?",
        options: ["three point two pounds", "three pounds twenty", "thirty-two", "three twenty pence"],
        correct: 1,
      },
      {
        q: "\"50p\" is pronounced…",
        options: ["fifty pounds", "fifty pence-pounds", "fifty pee", "five-oh"],
        correct: 2,
      },
    ],
  },
};
