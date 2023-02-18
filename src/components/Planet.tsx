import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { isOfTypePlanet } from "../helper";
import useCurrentPlanet from "../hooks/useCurrentPlanet";
import usePlanet from "../hooks/usePlanet";

import Content from "./Content";
import Controls from "./Controls";
import Parameters from "./Parameters";
import PlanetImage from "./PlanetImage";

export enum VIEW {
  overview = 1,
  structure = 2,
  surface = 3,
}

export default function Planet() {
  const navigate = useNavigate();
  const planetName = useCurrentPlanet();
  const [currentView, setCurrentView] = useState<VIEW>(VIEW.overview);
  const { planet, error, isLoading } = usePlanet(planetName);

  if (error) return <span className="text-white text-3xl my-4 text-center block">{error.message}</span>;

  useEffect(() => {
    if (!planetName || !isOfTypePlanet(planetName)) navigate("/mercury");
  }, [planetName]);

  if (isLoading || !planet)
    return <span className="text-white text-3xl my-4 text-center block">Loading...</span>;

  return (
    <main className="pb-11 max-w-[90rem] mx-auto xl:mt-32 xl:mx-[165px]">
      <div className="grid md:grid-cols-2 md:gap-x-20 md:mx-10 xl:mx-0 xl:grid-cols-[auto_350px] xl:gap-y-10">
        <Controls currentView={currentView} setCurrentView={setCurrentView} />
        <PlanetImage currentView={currentView} images={planet?.images} />
        <Content currentView={currentView} planet={planet} />
      </div>
      <Parameters
        revolution={planet.revolution}
        radius={planet.radius}
        rotation={planet.rotation}
        temperature={planet.temperature}
      />
    </main>
  );
}
