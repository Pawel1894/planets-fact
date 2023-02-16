import { TypePlanet } from "./types";

export function isOfTypePlanet(value: string): value is TypePlanet {
  return ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"].includes(value);
}
