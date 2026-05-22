"use client";

export type WordTapData = {
  surface: string;
  sentence: string;
  rect: DOMRect;
};

export function TappableWord({
  surface,
  sentence,
  isOpen,
  isSaved,
  onTap,
}: {
  surface: string;
  sentence: string;
  isOpen: boolean;
  isSaved: boolean;
  onTap: (data: WordTapData) => void;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        onTap({ surface, sentence, rect });
      }}
      className={[
        "rounded px-0.5 transition-colors cursor-pointer",
        isOpen
          ? "bg-amber-200 dark:bg-amber-800/60"
          : "hover:bg-amber-100 dark:hover:bg-amber-900/40",
        isSaved
          ? "underline decoration-emerald-500 decoration-2 underline-offset-2"
          : "",
      ].join(" ")}
    >
      {surface}
    </button>
  );
}
