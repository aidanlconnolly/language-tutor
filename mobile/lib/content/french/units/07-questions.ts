import type { Unit } from "../../types";

export const UNIT_QUESTIONS: Unit = {
  slug: "questions",
  stage: 2,
  order: 7,
  icon: "❓",
  title: "Asking questions",
  tagline: "Qui, quoi, où, quand, pourquoi, comment, est-ce que.",
  lessons: [
    {
      slug: "questions-formation",
      title: "Forming questions in French",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Three ways to ask a question",
          body: [
            "French has three question structures: <strong>1. Intonation</strong> — same as a statement, just raise your voice: <em>Vous parlez anglais?↗</em>. Most common in informal speech.",
            "<strong>2. Est-ce que</strong> — add 'est-ce que' at the start: <em>Est-ce que vous parlez anglais?</em> No word order change needed. Very common and polite.",
            "<strong>3. Inversion</strong> — flip verb and subject: <em>Parlez-vous anglais?</em> Most formal. Required in official writing and very polished speech.",
          ],
          keyPoint: "Informal: raise your voice. Neutral: est-ce que + normal order. Formal: invert verb-subject.",
        },
        {
          type: "vocab",
          heading: "Question words",
          items: [
            { l1: "qui", en: "who", note: "Qui est là? Who's there?" },
            { l1: "que / quoi", en: "what", note: "que before verb; quoi after preposition or alone" },
            { l1: "où", en: "where", note: "Où est la gare? Where is the station?" },
            { l1: "quand", en: "when", note: "Quand est-ce que tu pars? When do you leave?" },
            { l1: "pourquoi", en: "why", note: "Pourquoi tu pleures? Why are you crying?" },
            { l1: "comment", en: "how", note: "Comment allez-vous? How are you?" },
            { l1: "combien (de)", en: "how much / how many", note: "Combien coûte ça? How much does this cost?" },
            { l1: "quel / quelle", en: "which / what (adj)", note: "agrees with noun: quel train / quelle heure" },
          ],
        },
        {
          type: "vocab",
          heading: "Question patterns",
          items: [
            { l1: "Est-ce qu'il parle anglais?", en: "Does he speak English?", note: "est-ce que → est-ce qu' before vowel" },
            { l1: "Où est-ce que vous habitez?", en: "Where do you live?", note: "question word + est-ce que" },
            { l1: "Combien ça coûte?", en: "How much does that cost?", note: "intonation question" },
            { l1: "Quel est votre nom?", en: "What is your name? (formal)", note: "quel agrees with nom (m)" },
            { l1: "Quelle heure est-il?", en: "What time is it?", note: "quelle agrees with heure (f)" },
            { l1: "Il y a quoi à faire ici?", en: "What is there to do here?", note: "casual / spoken" },
          ],
        },
        {
          type: "dialogue",
          heading: "Asking for information",
          setup: "At the tourist office.",
          lines: [
            { speaker: "You", l1: "Bonjour. Où est-ce que je peux acheter un ticket de métro?", en: "Hello. Where can I buy a metro ticket?" },
            { speaker: "Agent", l1: "Il y a une station à deux minutes d'ici.", en: "There's a station two minutes from here." },
            { speaker: "You", l1: "Combien coûte un ticket?", en: "How much does a ticket cost?" },
            { speaker: "Agent", l1: "Deux euros vingt.", en: "Two euros twenty." },
            { speaker: "You", l1: "Merci beaucoup! À quelle heure ferme le musée?", en: "Thank you! What time does the museum close?" },
            { speaker: "Agent", l1: "À dix-huit heures.", en: "At six o'clock." },
          ],
        },
        {
          type: "orderWords",
          heading: "Reorder the question",
          items: [
            { tokens: ["Est-ce", "que", "vous", "parlez", "anglais?"], en: "Do you speak English?" },
            { tokens: ["Où", "est", "la", "gare?"], en: "Where is the station?" },
            { tokens: ["Combien", "de", "frères", "avez-vous?"], en: "How many brothers do you have?" },
            { tokens: ["Pourquoi", "est-ce", "qu'il", "est", "en", "retard?"], en: "Why is he late?" },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "What time is it? And where is the nearest café?",
          reference: "Quelle heure est-il? Et où est le café le plus proche?",
          hint: "nearest = le plus proche; use inversion for the first question",
        },
      ],
    },
    {
      slug: "questions-oui-si-non",
      title: "Answering: oui, si, non & tag questions",
      estMinutes: 7,
      pages: [
        {
          type: "intro",
          heading: "French has two words for 'yes'",
          body: [
            "Most of the time, 'yes' is <strong>oui</strong> and 'no' is <strong>non</strong>. But French has a special third word, <strong>si</strong>, used to contradict a negative question or statement.",
            "If someone asks <em>Tu n'aimes pas le café?</em> (You don't like coffee?) and you <em>do</em> like it, you can't answer <em>oui</em> — you answer <strong>si!</strong> (Yes, I do!). English has no single word for this, which is why learners forget it.",
            "French also leans on little tag words to invite agreement: <em>n'est-ce pas?</em> (isn't it?), <em>non?</em>, and the very casual <em>hein?</em>. These turn a statement into a soft question.",
          ],
          keyPoint: "oui = yes. non = no. si = yes (contradicting a negative). Tags: n'est-ce pas? / non? / hein?",
        },
        {
          type: "vocab",
          heading: "Answers & reactions",
          items: [
            { l1: "oui / non", en: "yes / no" },
            { l1: "si", en: "yes (to contradict a negative)", note: "—Tu ne viens pas? —Si!" },
            { l1: "bien sûr", en: "of course" },
            { l1: "pas du tout", en: "not at all" },
            { l1: "peut-être", en: "maybe, perhaps" },
            { l1: "je crois que oui / non", en: "I think so / I don't think so" },
            { l1: "n'est-ce pas?", en: "isn't it? / right?", note: "tag inviting agreement" },
            { l1: "d'accord", en: "okay, agreed" },
            { l1: "tout à fait", en: "absolutely, exactly" },
          ],
        },
        {
          type: "dialogue",
          heading: "Yes, no, and si",
          lines: [
            { speaker: "Marc", l1: "Tu viens à la fête ce soir?", en: "Are you coming to the party tonight?" },
            { speaker: "You", l1: "Oui, bien sûr! Et toi?", en: "Yes, of course! And you?" },
            { speaker: "Marc", l1: "Tu ne connais pas Julie, n'est-ce pas?", en: "You don't know Julie, do you?" },
            { speaker: "You", l1: "Si, je la connais! On a travaillé ensemble.", en: "Yes I do! We worked together." },
            { speaker: "Marc", l1: "Ah, d'accord. Alors à ce soir!", en: "Oh, okay. See you tonight then!" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Which 'yes'?",
          questions: [
            {
              q: "Someone asks 'Tu n'as pas faim?' (Aren't you hungry?) but you ARE hungry. You answer…",
              options: ["Oui!", "Si!", "Non!", "Peut-être"],
              correct: 1,
              fb: "Use 'si' to contradict a negative question. 'Oui' wouldn't be used here.",
            },
            {
              q: "'N'est-ce pas?' added to a statement means…",
              options: ["Why not?", "Isn't it? / right? (invites agreement)", "Is there?", "Never"],
              correct: 1,
              fb: "It's a tag question turning a statement into 'right?' — like Spanish '¿verdad?'.",
            },
            {
              q: "'Pas du tout' means…",
              options: ["A little", "Of course", "Not at all", "Maybe"],
              correct: 2,
              fb: "'Pas du tout' = not at all — an emphatic no.",
            },
          ],
        },
      ],
    },
    {
      slug: "questions-clarification",
      title: "When you don't understand",
      estMinutes: 7,
      pages: [
        {
          type: "intro",
          heading: "The phrases that save every conversation",
          body: [
            "However much you study, real French comes fast. The most useful thing you can learn early is how to politely ask someone to slow down, repeat, or explain. These phrases keep a conversation alive instead of letting it collapse.",
            "A quick note on register: <em>Quoi?</em> (What?) alone can sound rude — like English 'What?!'. The polite version is <em>Pardon?</em> or <em>Comment?</em>. Use those with strangers.",
          ],
          tip: {
            label: "Don't switch to English too fast",
            body: "Asking 'Vous pouvez répéter, s'il vous plaît?' keeps you in French and signals you're trying. Most Parisians will happily slow down once they see the effort.",
          },
        },
        {
          type: "vocab",
          heading: "Clarification phrases",
          items: [
            { l1: "Pardon? / Comment?", en: "Sorry? / What was that?", note: "polite 'what?'" },
            { l1: "Je ne comprends pas.", en: "I don't understand." },
            { l1: "Vous pouvez répéter, s'il vous plaît?", en: "Can you repeat that, please?" },
            { l1: "Vous pouvez parler plus lentement?", en: "Can you speak more slowly?" },
            { l1: "Qu'est-ce que ça veut dire?", en: "What does that mean?" },
            { l1: "Comment ça s'écrit?", en: "How do you spell that?" },
            { l1: "Comment dit-on … en français?", en: "How do you say … in French?" },
            { l1: "Je ne parle pas bien français.", en: "I don't speak French well." },
            { l1: "Vous parlez anglais?", en: "Do you speak English?", note: "last resort, after trying French" },
          ],
        },
        {
          type: "dialogue",
          heading: "Asking someone to repeat",
          setup: "You're getting directions but missed part of it.",
          lines: [
            { speaker: "Passant", l1: "C'est tout droit, puis la deuxième à gauche après le pont.", en: "It's straight ahead, then the second left after the bridge." },
            { speaker: "You", l1: "Pardon, vous pouvez parler plus lentement?", en: "Sorry, can you speak more slowly?" },
            { speaker: "Passant", l1: "Bien sûr. Tout droit… puis… la deuxième rue à gauche.", en: "Of course. Straight ahead… then… the second street on the left." },
            { speaker: "You", l1: "D'accord. Et 'le pont', qu'est-ce que ça veut dire?", en: "Okay. And 'le pont', what does that mean?" },
            { speaker: "Passant", l1: "Le pont — the bridge, là-bas.", en: "Le pont — the bridge, over there." },
            { speaker: "You", l1: "Ah, merci beaucoup!", en: "Ah, thank you very much!" },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "Sorry, I don't understand. Can you repeat that, please?",
          reference: "Pardon, je ne comprends pas. Vous pouvez répéter, s'il vous plaît?",
          hint: "Pardon for 'sorry'; 'can you' = vous pouvez + infinitive",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "'Comment' means…", options: ["when", "why", "how", "who"], correct: 2 },
      { q: "'Quel' vs 'quelle' — what determines which to use?", options: ["Formality", "Gender of the noun it modifies", "Whether it's a question", "Number"], correct: 1 },
      { q: "Est-ce que becomes est-ce qu' before…", options: ["a consonant", "a vowel sound", "a question word", "a plural noun"], correct: 1 },
      { q: "'Combien coûte ça?' is an example of…", options: ["Inversion", "est-ce que", "Intonation question", "Rhetorical question"], correct: 2 },
      { q: "'Où est-ce que vous habitez?' means…", options: ["Where do you live?", "Who do you live with?", "When do you arrive?", "Why do you live here?"], correct: 0 },
      { q: "In formal French, questions are formed by…", options: ["Raising intonation", "Adding est-ce que", "Inverting verb and subject pronoun", "Adding non?"], correct: 2 },
    ],
  },
};
