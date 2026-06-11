"use client";

import { useState, useTransition } from "react";
import type { DeckRow } from "@/lib/actions/deck";
import { deleteCard } from "@/lib/actions/deck";
import { SpeakButton } from "./SpeakButton";

export function DeckList({ rows }: { rows: DeckRow[] }) {
  const [items, setItems] = useState(rows);
  const [pendingId, setPendingId] = useState<string | null>(null);
  const [, startTransition] = useTransition();

  if (items.length === 0) return null;

  function handleDelete(cardId: string) {
    if (!confirm("Remove this card from your deck?")) return;
    setPendingId(cardId);
    startTransition(async () => {
      const res = await deleteCard(cardId);
      if (res.ok) {
        setItems((prev) => prev.filter((r) => r.card.id !== cardId));
      } else {
        alert(`Failed to delete: ${res.error}`);
      }
      setPendingId(null);
    });
  }

  return (
    <ul className="space-y-3">
      {items.map(({ card, word }) => (
        <li
          key={card.id}
          className="rounded-lg border border-zinc-300 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-950"
        >
          <div className="flex items-baseline justify-between gap-3">
            <div className="flex items-baseline gap-2">
              <h3 className="font-serif text-xl font-semibold">{word.lemma}</h3>
              <SpeakButton text={word.lemma} />
              <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-400">
                {word.pos}
                {word.gender ? ` · ${word.gender}` : ""}
              </span>
            </div>
            <button
              type="button"
              onClick={() => handleDelete(card.id)}
              disabled={pendingId === card.id}
              className="text-[11px] text-zinc-400 hover:text-rose-600 disabled:opacity-50"
            >
              Remove
            </button>
          </div>
          <p className="mt-1 text-sm text-zinc-800 dark:text-zinc-200">
            {word.translation}
          </p>
          <p className="mt-3 border-t border-zinc-200 pt-2 font-serif text-sm italic text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
            {card.sourceSentence}
            <span className="ml-2 text-[10px] not-italic uppercase tracking-wider text-zinc-400">
              saw: {card.sourceSurface}
            </span>
          </p>
        </li>
      ))}
    </ul>
  );
}
