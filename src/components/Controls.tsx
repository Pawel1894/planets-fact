import React from "react";
import useCurrentPlanet from "../hooks/useCurrentPlanet";
import ControlBtn from "./ControlBtn";
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
      className={`px-6 md:px-0 flex justify-between border-b border-b-neutral-200 md:row-start-2
       md:col-start-2 md:border-b-[transparent]
      md:flex-col md:gap-4 md:justify-start`}
    >
      <ControlBtn
        btnViewType={VIEW.overview}
        currentView={currentView}
        planet={planet}
        setCurrentView={setCurrentView}
      >
        <>
          <span className="hidden md:block text-neutral-500 tracking-widest">01</span>
          <span>overview</span>
        </>
      </ControlBtn>
      <ControlBtn
        btnViewType={VIEW.structure}
        currentView={currentView}
        planet={planet}
        setCurrentView={setCurrentView}
      >
        <>
          <span className="hidden md:block text-neutral-500 tracking-widest">02</span>
          <span>
            <span className="hidden md:inline-block">internal</span> structure
          </span>
        </>
      </ControlBtn>
      <ControlBtn
        btnViewType={VIEW.surface}
        currentView={currentView}
        planet={planet}
        setCurrentView={setCurrentView}
      >
        <>
          <span className="hidden md:block text-neutral-500 tracking-widest">03</span>
          <span>
            surface <span className="hidden md:inline-block">geology</span>
          </span>
        </>
      </ControlBtn>
    </div>
  );
}
