import React from "react";
import { TImages } from "../types";
import { VIEW } from "./Planet";

type Props = {
  images: TImages;
  currentView: VIEW;
};

export default function PlanetImage({ images, currentView }: Props) {
  return (
    <div className="flex flex-col justify-center items-center my-24">
      {currentView === VIEW.overview ? <img className="w-1/3 max-w-[290px]" src={images.planet} /> : null}
      {currentView === VIEW.surface ? (
        <>
          <img className="w-1/3 max-w-[290px]" src={images.planet} />
          <img className="w-1/6 max-w-[148px] translate-y-full absolute" src={images.geology} />
        </>
      ) : null}
      {currentView === VIEW.structure ? <img className="w-1/3 max-w-[290px]" src={images.internal} /> : null}
    </div>
  );
}
