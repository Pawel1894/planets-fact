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

  return (
    <div className="px-6 flex justify-between border-b border-b-neutral-200 md:row-start-2 md:col-start-2">
      <button
        className={`relative pb-5 pt-6 uppercase text-xs font-bold text-neutral-400 ${
          currentView === VIEW.overview
            ? `before:absolute before:-bottom-[1px] before:left-0 before:w-full before:h-1 text-white ${
                planet ? styleVariants[planet] : "bg-accent-100"
              }`
            : ""
        }`}
        onClick={() => setCurrentView(VIEW.overview)}
      >
        overview
      </button>
      <button
        className={`relative pb-5 pt-6 uppercase text-xs font-bold text-neutral-400 ${
          currentView === VIEW.structure
            ? `before:absolute before:-bottom-[1px] before:left-0 before:w-full before:h-1 text-white ${
                planet ? styleVariants[planet] : "bg-accent-100"
              }`
            : ""
        }`}
        onClick={() => setCurrentView(VIEW.structure)}
      >
        structure
      </button>
      <button
        className={`relative pb-5 pt-6 uppercase text-xs font-bold text-neutral-400 ${
          currentView === VIEW.surface
            ? `before:absolute before:-bottom-[1px] before:left-0 before:w-full before:h-1 text-white ${
                planet ? styleVariants[planet] : "bg-accent-100"
              }`
            : ""
        }`}
        onClick={() => setCurrentView(VIEW.surface)}
      >
        surface
      </button>
    </div>
  );
}
