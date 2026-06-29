import { notFound } from "next/navigation";
import { findGame } from "@/lib/geo/games";
import { MapQuiz } from "@/components/geo/MapQuiz";

export default async function GeoGamePage({
  params,
}: {
  params: Promise<{ game: string }>;
}) {
  const { game } = await params;
  if (!findGame(game)) notFound();
  return <MapQuiz gameId={game} />;
}
