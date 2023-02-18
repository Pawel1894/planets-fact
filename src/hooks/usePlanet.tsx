import React, { useEffect, useState } from "react";
import { TPlanet } from "../types";

export default function usePlanet(planetName?: string) {
  const [planet, setPlanet] = useState<TPlanet>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>();

  useEffect(() => {
    if (planetName) fetchPlanet();
  }, [planetName]);

  async function fetchPlanet() {
    setIsLoading(true);

    try {
      const response = await fetch("/data.json");
      if (!response.ok || response.status !== 200) throw new Error("error fetching data");

      const data: TPlanet[] = await response.json();
      const planetData = data.find((item) => item.name.toLowerCase() === planetName?.toLowerCase());
      setPlanet(planetData);
    } catch (error) {
      setError(error);
    }

    // mimic real request delay..
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }

  return {
    planet,
    isLoading,
    error,
  };
}
