import React, { useEffect, useState } from "react";
import { TPlanet } from "../types";

export default function usePlanet(planetName: string) {
  const [planet, setPlanet] = useState<TPlanet>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>();

  useEffect(() => {}, []);

  async function fetchPlanet() {
    setIsLoading(true);

    try {
      const response = await fetch("/data.json");
      if (!response.ok || response.status !== 200) throw new Error("error fetching data");

      const data: TPlanet[] = await response.json();
      const planetData = data.find((item) => item.name === planetName);
      setPlanet(planetData);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  }

  return {
    planet,
    isLoading,
    error,
  };
}
