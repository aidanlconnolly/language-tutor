import { useLocalSearchParams } from "expo-router";
import { MapQuiz } from "@/components/geo/MapQuiz";

export default function GeoGameScreen() {
  const { game } = useLocalSearchParams<{ game: string }>();
  return <MapQuiz gameId={game} />;
}
