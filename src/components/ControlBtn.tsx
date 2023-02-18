import React from "react";
import { TPlanet, TypePlanet } from "../types";
import { VIEW } from "./Planet";

type Props = {
  currentView: VIEW;
  btnViewType: VIEW;
  planet: TypePlanet | undefined;
  setCurrentView: React.Dispatch<React.SetStateAction<VIEW>>;
  children: JSX.Element;
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

export default function ControlBtn({ currentView, btnViewType, planet, setCurrentView, children }: Props) {
  return (
    <button
      className={`relative hover:bg-neutral-200 pb-5 pt-6 uppercase text-xs font-bold text-neutral-400 
      md:before:hidden md:text-left md:border md:border-neutral-200 md:pt-3 md:pb-[11px] md:px-5 md:flex md:flex-row md:gap-[0.875rem]
      xl:leading-6
  ${
    currentView === btnViewType
      ? `before:absolute before:-bottom-[1px] before:left-0 before:w-full before:h-1 md:before:hidden text-white 
      ${planet ? styleVariants[planet] : "bg-accent-100"}`
      : ""
  }`}
      onClick={() => setCurrentView(btnViewType)}
    >
      {children}
    </button>
  );
}
