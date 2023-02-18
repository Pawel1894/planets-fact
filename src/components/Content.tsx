import React from "react";
import { TPlanet } from "../types";
import Description from "./Description";
import { VIEW } from "./Planet";
interface Props {
  planet: TPlanet;
  currentView: VIEW;
}

export default function Content({ planet, currentView }: Props) {
  function renderDescription() {
    switch (currentView) {
      case VIEW.overview:
        return <Description source={planet.overview.source} content={planet.overview.content} />;
      case VIEW.structure:
        return <Description source={planet.structure.source} content={planet.structure.content} />;
      case VIEW.surface:
        return <Description source={planet.geology.source} content={planet.geology.content} />;

      default:
        return null;
    }
  }

  return (
    <div className="px-6 md:px-0 text-center text-white md:text-left xl:mt-auto">
      <h1 className="text-white font-antonio uppercase text-[2.5rem] md:text-5xl xl:text-[5rem]">
        {planet.name}
      </h1>
      {renderDescription()}
    </div>
  );
}
