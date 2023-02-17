import React from "react";
import { TPlanet } from "../types";
import { VIEW } from "./Planet";
import IconSource from "../assets/icon-source.svg";
interface Props {
  planet: TPlanet;
  currentView: VIEW;
}

export default function Content({ planet, currentView }: Props) {
  function renderDescription() {
    switch (currentView) {
      case VIEW.overview:
        return (
          <>
            <p className="leading-5 mt-4 text-xs">{planet.overview.content}</p>
            <a
              className="text-neutral-500 mt-8 flex justify-center items-center text-xs"
              href={planet.overview.source}
            >
              Source&nbsp;:&nbsp;<span className="bg-none font-bold underline"> Wikipedia</span>
              <img className="ml-1" src={IconSource} alt="source icon" aria-hidden="false" />
            </a>
          </>
        );

      case VIEW.structure:
        return (
          <>
            <p className="leading-5 mt-4 text-xs">{planet.structure.content}</p>
            <a
              className="text-neutral-500 mt-8 flex justify-center items-center text-xs"
              href={planet.structure.source}
            >
              Source&nbsp;:&nbsp;<span className="bg-none font-bold underline"> Wikipedia</span>
              <img className="ml-1" src={IconSource} alt="source icon" aria-hidden="false" />
            </a>
          </>
        );
      case VIEW.surface:
        return (
          <>
            <p className="leading-5 mt-4 text-xs">{planet.geology.content}</p>
            <a
              className="text-neutral-500 mt-8 flex justify-center items-center text-xs"
              href={planet.geology.source}
            >
              Source&nbsp;:&nbsp;<span className="bg-none font-bold underline"> Wikipedia</span>
              <img className="ml-1" src={IconSource} alt="source icon" aria-hidden="false" />
            </a>
          </>
        );

      default:
        return null;
    }
  }

  return (
    <div className="px-6 text-center text-white">
      <h1 className="text-white font-antonio text-[2.5rem]">{planet.name}</h1>
      {renderDescription()}
    </div>
  );
}
