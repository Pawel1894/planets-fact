import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
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
  const location = useLocation();
  const planetName = location.pathname.split("/")[1];
  const [currentView, setCurrentView] = useState<VIEW>(VIEW.overview);
  const { planet, error, isLoading } = usePlanet(planetName);

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
