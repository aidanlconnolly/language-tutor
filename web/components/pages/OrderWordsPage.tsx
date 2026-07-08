"use client";

import { useEffect, useMemo, useState } from "react";
import type { OrderWords } from "@/lib/content/types";

/** Retries allowed before we reveal the answer and let the learner move on. */
const MAX_ATTEMPTS = 5;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Join tokens into a display sentence, dropping the space before punctuation. */
function joinTokens(tokens: string[]): string {
  return tokens.join(" ").replace(/\s+([,.!?;:])/g, "$1");
}

type ItemState = {
  /** indexes into the original tokens array, in user-chosen order */
  chosen: number[];
  /** shuffled display order; tokens not yet picked */
  remaining: number[];
  /** count of committed wrong arrangements so far */
  attempts: number;
  /** true once the answer has been revealed (ran out of attempts) */
  revealed: boolean;
};

export function OrderWordsPage({
  page,
  setDone,
}: {
  page: OrderWords;
  setDone: (b: boolean) => void;
}) {
  const initialState = useMemo<ItemState[]>(
    () =>
      page.items.map((item) => ({
        chosen: [],
        // Keep shuffling until it differs from canonical (avoid trivial pre-solved)
        remaining: (() => {
          const ids = item.tokens.map((_, i) => i);
          if (ids.length < 2) return ids;
          let s = shuffle(ids);
          let safety = 0;
          while (s.every((v, i) => v === ids[i]) && safety < 5) {
            s = shuffle(ids);
            safety++;
          }
          return s;
        })(),
        attempts: 0,
        revealed: false,
      })),
    [page.items],
  );

  const [states, setStates] = useState<ItemState[]>(initialState);

  function orderingIsCorrect(
    item: OrderWords["items"][number],
    chosen: number[],
  ) {
    const chosenSeq = chosen.map((idx) => item.tokens[idx]);
    const matches = (target: string[]) =>
      chosenSeq.length === target.length &&
      chosenSeq.every((tok, i) => tok === target[i]);
    return matches(item.tokens) || (item.alts ?? []).some(matches);
  }

  /** An item is settled once it's right or the learner has exhausted retries. */
  function isResolved(item: OrderWords["items"][number], st: ItemState) {
    return st.revealed || orderingIsCorrect(item, st.chosen);
  }

  useEffect(() => {
    // Advance once every item is settled (solved, or answer revealed after MAX_ATTEMPTS).
    const allResolved = page.items.every((it, i) => isResolved(it, states[i]));
    setDone(allResolved);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [states, setDone]);

  function pick(itemIdx: number, tokenIdx: number) {
    setStates((prev) => {
      const next = [...prev];
      const cur = next[itemIdx];
      if (cur.revealed) return prev;

      const chosen = [...cur.chosen, tokenIdx];
      const remaining = cur.remaining.filter((x) => x !== tokenIdx);
      let attempts = cur.attempts;
      let revealed: boolean = cur.revealed;

      // Full arrangement committed — evaluate it.
      if (remaining.length === 0 && !orderingIsCorrect(page.items[itemIdx], chosen)) {
        attempts += 1;
        if (attempts >= MAX_ATTEMPTS) revealed = true;
      }

      next[itemIdx] = { chosen, remaining, attempts, revealed };
      return next;
    });
  }

  function unpick(itemIdx: number, tokenIdx: number) {
    setStates((prev) => {
      const next = [...prev];
      const cur = next[itemIdx];
      if (cur.revealed) return prev;
      next[itemIdx] = {
        ...cur,
        chosen: cur.chosen.filter((x) => x !== tokenIdx),
        remaining: [...cur.remaining, tokenIdx],
      };
      return next;
    });
  }

  function reset(itemIdx: number) {
    // Clear back to an empty slate for another try, but keep the attempt count.
    setStates((prev) => {
      const next = [...prev];
      const cur = next[itemIdx];
      if (cur.revealed) return prev;
      next[itemIdx] = {
        ...initialState[itemIdx],
        attempts: cur.attempts,
      };
      return next;
    });
  }

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold tracking-tight">{page.heading}</h2>
      {page.intro && (
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{page.intro}</p>
      )}

      {page.items.map((it, i) => {
        const st = states[i];
        const committed = st.remaining.length === 0;
        const correct = committed && orderingIsCorrect(it, st.chosen);
        const revealed = st.revealed;
        const locked = correct || revealed;
        return (
          <div
            key={i}
            className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <div className="text-xs italic text-zinc-500">{it.en}</div>

            <div
              className={[
                "mt-2 flex min-h-[44px] flex-wrap items-center gap-2 rounded border-2 border-dashed p-2",
                correct
                  ? "border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30"
                  : revealed
                    ? "border-rose-300 bg-rose-50 dark:bg-rose-950/20"
                    : "border-zinc-300 dark:border-zinc-700",
              ].join(" ")}
            >
              {st.chosen.length === 0 ? (
                <span className="text-xs text-zinc-400">Tap words below…</span>
              ) : (
                st.chosen.map((tIdx) => (
                  <button
                    key={`c-${tIdx}`}
                    type="button"
                    disabled={locked}
                    onClick={() => unpick(i, tIdx)}
                    className={[
                      "rounded border px-2 py-1 font-serif text-sm",
                      correct
                        ? "border-emerald-500 bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100"
                        : revealed
                          ? "border-rose-300 bg-rose-100 text-rose-900 dark:bg-rose-900/30 dark:text-rose-100"
                          : "border-amber-400 bg-amber-50 text-amber-900 hover:border-amber-600 dark:bg-amber-950/30 dark:text-amber-100",
                    ].join(" ")}
                    lang="auto"
                  >
                    {it.tokens[tIdx]}
                  </button>
                ))
              )}
            </div>

            {!locked && (
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {st.remaining.map((tIdx) => (
                  <button
                    key={`r-${tIdx}`}
                    type="button"
                    onClick={() => pick(i, tIdx)}
                    className="rounded border border-zinc-300 bg-white px-2 py-1 font-serif text-sm hover:border-amber-400 dark:border-zinc-700 dark:bg-zinc-900"
                    lang="auto"
                  >
                    {it.tokens[tIdx]}
                  </button>
                ))}
                {st.chosen.length > 0 && (
                  <button
                    type="button"
                    onClick={() => reset(i)}
                    className="ml-auto text-[10px] uppercase tracking-wider text-zinc-500 hover:text-zinc-700"
                  >
                    Reset
                  </button>
                )}
              </div>
            )}

            {committed && !correct && !revealed && (
              <div className="mt-2 text-xs text-rose-700 dark:text-rose-300">
                Not the right order — tap chips above to remove them, then try
                again. (Attempt {st.attempts} of {MAX_ATTEMPTS})
              </div>
            )}
            {revealed && (
              <div className="mt-2 text-xs text-rose-700 dark:text-rose-300">
                Not quite. Correct answer:{" "}
                <span className="font-serif font-medium" lang="auto">
                  {joinTokens(it.tokens)}
                </span>
              </div>
            )}
            {correct && (
              <div className="mt-2 text-xs text-emerald-700 dark:text-emerald-300">
                ✓ Correct.
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
