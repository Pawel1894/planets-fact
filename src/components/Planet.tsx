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
  const { planet, error, isLoading } = usePlanet(location.pathname.split("/")[0]);

  if (isLoading) return <span>Loading</span>;

  if (error) return <span>{error ? error : ""}</span>;

  return (
    <>
      <div>
        <Controls />
        <PlanetImage />
        <Content />
      </div>
      <Parameters />
    </>
  );
}
