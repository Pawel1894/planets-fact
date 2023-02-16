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

  useEffect(() => {
    if (!planetName || !isOfTypePlanet(planetName)) navigate("/mercury");
  }, [planetName]);

  if (error) return <span className="text-white text-3xl my-4 text-center block">{error.message}</span>;

  if (planet)
    return (
      <>
        <div>
          <Controls currentView={currentView} setCurrentView={setCurrentView} />
          {isLoading || !planet ? (
            <span className="text-white text-3xl my-4 text-center block">Loading...</span>
          ) : (
            <>
              <PlanetImage currentView={currentView} images={planet?.images} />
              <Content />
            </>
          )}
        </div>
        <Parameters />
      </>
    );
}
