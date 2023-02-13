import React from "react";
import IconChevron from "../assets/icon-chevron.svg";

type Props = {
  name: string;
  color:
    | "accent-100"
    | "accent-200"
    | "accent-300"
    | "accent-400"
    | "accent-500"
    | "accent-600"
    | "accent-700"
    | "accent-800";
  borderTop?: boolean;
};

const hoverVariants = {
  "accent-100": "xl:hover:border-t-accent-100",
  "accent-200": "xl:hover:border-t-accent-200",
  "accent-300": "xl:hover:border-t-accent-300",
  "accent-400": "xl:hover:border-t-accent-400",
  "accent-500": "xl:hover:border-t-accent-500",
  "accent-600": "xl:hover:border-t-accent-600",
  "accent-700": "xl:hover:border-t-accent-700",
  "accent-800": "xl:hover:border-t-accent-800",
};

const bgVariants = {
  "accent-100": "bg-accent-100",
  "accent-200": "bg-accent-200",
  "accent-300": "bg-accent-300",
  "accent-400": "bg-accent-400",
  "accent-500": "bg-accent-500",
  "accent-600": "bg-accent-600",
  "accent-700": "bg-accent-700",
  "accent-800": "bg-accent-800",
};

export default function NavItem({ name, color, borderTop }: Props) {
  return (
    <li
      className={`flex py-5 uppercase text-white font-bold md:py-0 ${
        borderTop && "border-t border-t-neutral-200"
      } md:border-t-0 xl:border-t-4 xl:border-t-[transparent] ${hoverVariants[color]} xl:py-6`}
    >
      <button className="flex items-center justify-between w-full">
        <div className="flex items-center gap-6">
          <span className={`md:hidden h-5 w-5 rounded-full ${bgVariants[color]}`} aria-hidden={true}></span>
          <span className="uppercase">{name}</span>
        </div>
        <img className="md:hidden" src={IconChevron} aria-hidden={true} alt="" />
      </button>
    </li>
  );
}
