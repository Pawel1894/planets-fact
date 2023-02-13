import React from "react";
import IconChevron from "../assets/icon-chevron.svg";

type Props = {
  name: string;
  color: string;
  borderTop?: boolean;
};

export default function NavItem({ name, color, borderTop }: Props) {
  return (
    <li
      className={`flex py-5 uppercase text-white font-bold md:py-0 ${
        borderTop && "border-t border-t-neutral-200"
      } md:border-t-0`}
    >
      <button className="flex items-center justify-between w-full">
        <div className="flex items-center gap-6">
          <span className={`md:hidden h-5 w-5 rounded-full ${color}`} aria-hidden={true}></span>
          <span className="uppercase">{name}</span>
        </div>
        <img className="md:hidden" src={IconChevron} aria-hidden={true} alt="" />
      </button>
    </li>
  );
}
