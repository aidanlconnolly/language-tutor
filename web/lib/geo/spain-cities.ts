import type { GeoCity } from "./italy-cities";

/** Major Spanish cities for the "click the city" geography game. [lng, lat].
 *  Mainland + Balearics only (Canary Islands omitted so the map frames tightly). */
export const SPAIN_CITIES: GeoCity[] = [
  { name: "Madrid", coordinates: [-3.7038, 40.4168] },
  { name: "Barcelona", coordinates: [2.1734, 41.3851] },
  { name: "Valencia", coordinates: [-0.3763, 39.4699] },
  { name: "Sevilla", coordinates: [-5.9845, 37.3891] },
  { name: "Zaragoza", coordinates: [-0.8891, 41.6488] },
  { name: "Málaga", coordinates: [-4.4214, 36.7213] },
  { name: "Murcia", coordinates: [-1.1307, 37.9922] },
  { name: "Palma", coordinates: [2.6502, 39.5696] },
  { name: "Bilbao", coordinates: [-2.935, 43.263] },
  { name: "Alicante", coordinates: [-0.481, 38.3452] },
  { name: "Córdoba", coordinates: [-4.7794, 37.8882] },
  { name: "Valladolid", coordinates: [-4.7245, 41.6523] },
  { name: "Vigo", coordinates: [-8.7207, 42.2406] },
  { name: "Gijón", coordinates: [-5.6615, 43.5322] },
  { name: "A Coruña", coordinates: [-8.4115, 43.3623] },
  { name: "Granada", coordinates: [-3.5986, 37.1773] },
  { name: "Santander", coordinates: [-3.8044, 43.4623] },
  { name: "Pamplona", coordinates: [-1.6432, 42.8125] },
  { name: "San Sebastián", coordinates: [-1.9812, 43.3183] },
  { name: "Salamanca", coordinates: [-5.6635, 40.9701] },
  { name: "Toledo", coordinates: [-4.0273, 39.8628] },
  { name: "Cádiz", coordinates: [-6.2885, 36.5298] },
  { name: "Almería", coordinates: [-2.4637, 36.834] },
  { name: "Santiago de Compostela", coordinates: [-8.5448, 42.8782] },
  { name: "Badajoz", coordinates: [-6.9707, 38.8794] },
  { name: "León", coordinates: [-5.5667, 42.5987] },
];
