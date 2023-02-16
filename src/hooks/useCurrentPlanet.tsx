import React from "react";
import { useLocation } from "react-router";
import { isOfTypePlanet } from "../helper";
import { TypePlanet } from "../types";

export default function useCurrentPlanet() {
  const location = useLocation();
  const planet = location.pathname.split("/")[1];
  if (isOfTypePlanet(planet)) return planet as TypePlanet;

  return;
}
