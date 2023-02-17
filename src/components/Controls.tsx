import React from "react";
import useCurrentPlanet from "../hooks/useCurrentPlanet";
import usePlanet from "../hooks/usePlanet";
import { VIEW } from "./Planet";

type Props = {
  currentView: VIEW;
  setCurrentView: React.Dispatch<React.SetStateAction<VIEW>>;
};

const styleVariants = {
  mercury: "before:bg-accent-100 md:bg-accent-100",
  venus: "before:bg-accent-200 md:bg-accent-200",
  earth: "before:bg-accent-300 md:bg-accent-300",
  mars: "before:bg-accent-400 md:bg-accent-400",
  jupiter: "before:bg-accent-500 md:bg-accent-500",
  saturn: "before:bg-accent-600 md:bg-accent-600",
  uranus: "before:bg-accent-700 md:bg-accent-700",
  neptune: "before:bg-accent-800 md:bg-accent-800",
};

export default function Controls({ currentView, setCurrentView }: Props) {
  const planet = useCurrentPlanet();

  return (
    <div
      className={`px-6 md:px-0 flex justify-between border-b border-b-neutral-200 md:row-start-2 md:col-start-2 md:border-b-[transparent]
      md:flex-col md:gap-4 md:justify-start`}
    >
      <button
        className={`relative pb-5 pt-6 uppercase text-xs font-bold text-neutral-400 md:before:hidden md:text-left border border-neutral-200 md:py-3 md:px-5 
        md:flex md:flex-row md:gap-[0.875rem]
        ${
          currentView === VIEW.overview
            ? `before:absolute before:-bottom-[1px] before:left-0 before:w-full before:h-1  text-white ${
                planet ? styleVariants[planet] : "bg-accent-100"
              }`
            : ""
        }`}
        onClick={() => setCurrentView(VIEW.overview)}
      >
        <span className="hidden md:block text-neutral-500">01</span>
        <span>overview</span>
      </button>
      <button
        className={`relative pb-5 pt-6 uppercase text-xs font-bold text-neutral-400 md:before:hidden md:text-left border border-neutral-200 md:py-3 md:px-5 
        md:flex md:flex-row md:gap-[0.875rem]
        ${
          currentView === VIEW.structure
            ? `before:absolute before:-bottom-[1px] before:left-0 before:w-full before:h-1  text-white ${
                planet ? styleVariants[planet] : "bg-accent-100"
              }`
            : ""
        }`}
        onClick={() => setCurrentView(VIEW.structure)}
      >
        <span className="hidden md:block text-neutral-500">02</span>
        <span>structure</span>
      </button>
      <button
        className={`relative pb-5 pt-6 uppercase text-xs font-bold text-neutral-400 md:before:hidden md:text-left border border-neutral-200 md:py-3 md:px-5 
        md:flex md:flex-row md:gap-[0.875rem]
        ${
          currentView === VIEW.surface
            ? `before:absolute before:-bottom-[1px] before:left-0 before:w-full before:h-1 md:before:hidden text-white ${
                planet ? styleVariants[planet] : "bg-accent-100"
              }`
            : ""
        }`}
        onClick={() => setCurrentView(VIEW.surface)}
      >
        <span className="hidden md:block text-neutral-500">03</span>
        <span>surface</span>
      </button>
    </div>
  );
}
