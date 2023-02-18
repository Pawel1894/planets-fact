import React from "react";
import useCurrentPlanet from "../hooks/useCurrentPlanet";
import { TImages } from "../types";
import { VIEW } from "./Planet";

type Props = {
  images: TImages;
  currentView: VIEW;
};

const styleVariants = {
  mercury: "h-[6.9375rem] md:h-[11.5rem] xl:h-[18.125rem]",
  venus: "h-[9.625rem] md:h-[15.8125rem] xl:h-[25rem]",
  earth: "h-[10.8125rem] md:h-[17.8125rem] xl:h-[28.125rem]",
  mars: "h-[8.0625rem] md:h-[13.3125rem] xl:h-[21rem]",
  jupiter: "h-[14rem] md:h-[23.0625rem] xl:h-[36.375rem]",
  saturn: "h-[16rem] md:h-[26.375rem] xl:h-[41.625rem]",
  uranus: "h-[11rem] md:h-[18.125rem] xl:h-[28.625rem]",
  neptune: "h-[10.8125rem] md:h-[17.8125rem] xl:h-[28.125rem]",
};

const marginVariants = {
  mercury: "my-24 md:my-[8.4375rem] xl:my-0",
  venus: "my-[4.625rem] md:my-28 xl:my-0",
  earth: "my-16 md:my-24 xl:my-0",
  mars: "my-[87px] md:my-[8.25rem] xl:my-0",
  jupiter: "my-10 md:my-14 xl:my-0",
  saturn: "my-6 md:my-7 xl:my-0",
  uranus: "my-16 md:my-20 xl:my-0",
  neptune: "my-16 md:my-20 xl:my-0",
};

export default function PlanetImage({ images, currentView }: Props) {
  const planet = useCurrentPlanet();

  return (
    <div
      className={`flex flex-col justify-center items-center md:col-span-2 xl:col-auto xl:row-span-2  ${
        planet ? marginVariants[planet] : "my-10 md:my-14 "
      }`}
    >
      {currentView === VIEW.overview ? (
        <img
          className={`${planet ? styleVariants[planet] : "h-[6.9375rem] md:h-[11.5rem] xl:h-[18.125rem]"}`}
          src={images.planet}
        />
      ) : null}
      {currentView === VIEW.surface ? (
        <>
          <img
            className={`${planet ? styleVariants[planet] : "h-[6.9375rem] md:h-[11.5rem] xl:h-[18.125rem]"}`}
            src={images.planet}
          />
          <img
            className="w-1/6 max-w-[10.1875rem] translate-y-full md:translate-y-3/4 absolute"
            src={images.geology}
          />
        </>
      ) : null}
      {currentView === VIEW.structure ? (
        <img
          className={`${planet ? styleVariants[planet] : "h-[6.9375rem] md:h-[11.5rem] xl:h-[18.125rem]"}`}
          src={images.internal}
        />
      ) : null}
    </div>
  );
}
