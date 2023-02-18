import React from "react";
import IconSource from "../assets/icon-source.svg";

type Props = {
  content: string;
  source: string;
};

export default function Description({ content, source }: Props) {
  return (
    <div>
      <p className="leading-5 mt-4 md:mt-6 text-[11px] xl:text-sm">{content}</p>
      <a
        className="text-neutral-500 mt-6 flex justify-center items-center text-[11px] md:justify-start"
        href={source}
      >
        Source&nbsp;:&nbsp;<span className="bg-none font-bold underline"> Wikipedia</span>
        <img className="ml-1" src={IconSource} alt="source icon" aria-hidden="false" />
      </a>
    </div>
  );
}
