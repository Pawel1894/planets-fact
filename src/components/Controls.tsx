import React from "react";
import useCurrentPlanet from "../hooks/useCurrentPlanet";
import usePlanet from "../hooks/usePlanet";
import { VIEW } from "./Planet";

type Props = {
  currentView: VIEW;
  setCurrentView: React.Dispatch<React.SetStateAction<VIEW>>;
};

const styleVariants = {
  mercury: "before:bg-accent-100",
  venus: "before:bg-accent-200",
  earth: "before:bg-accent-300",
  mars: "before:bg-accent-400",
  jupiter: "before:bg-accent-500",
  saturn: "before:bg-accent-600",
  uranus: "before:bg-accent-700",
  neptune: "before:bg-accent-800",
};

export default function Controls({ currentView, setCurrentView }: Props) {
  const planet = useCurrentPlanet();

  if (!planet) return null;

  return (
    <div className="px-6 flex justify-between border-b border-b-neutral-200">
      <button
        className={`control-btn ${
          currentView === VIEW.overview ? `control-btn_active ${styleVariants[planet]}` : ""
        }`}
        onClick={() => setCurrentView(VIEW.overview)}
      >
        overview
      </button>
      <button
        className={`control-btn ${
          currentView === VIEW.structure ? `control-btn_active ${styleVariants[planet]}` : ""
        }`}
        onClick={() => setCurrentView(VIEW.structure)}
      >
        structure
      </button>
      <button
        className={`control-btn ${
          currentView === VIEW.surface ? `control-btn_active ${styleVariants[planet]}` : ""
        }`}
        onClick={() => setCurrentView(VIEW.surface)}
      >
        surface
      </button>
    </div>
  );
}
