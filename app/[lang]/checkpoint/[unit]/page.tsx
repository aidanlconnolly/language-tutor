import { notFound } from "next/navigation";
import { CheckpointRunner } from "@/components/CheckpointRunner";
import { findUnit, getUnits } from "@/lib/content";
import { isValidLang } from "@/lib/lang";

export const dynamic = "force-dynamic";

export default async function CheckpointPage({
  params,
}: {
  params: Promise<{ lang: string; unit: string }>;
}) {
  const { lang: langParam, unit: unitSlug } = await params;
  if (!isValidLang(langParam)) notFound();
  const unit = findUnit(langParam, unitSlug);
  if (!unit) notFound();

  const units = getUnits(langParam);
  const idx = units.findIndex((u) => u.slug === unit.slug);
  const next = units[idx + 1];

  return (
    <CheckpointRunner
      unit={unit}
      lang={langParam}
      nextUnitSlug={next ? next.slug : null}
    />
  );
}
