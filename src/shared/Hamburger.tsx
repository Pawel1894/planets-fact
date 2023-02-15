import React, { SetStateAction, useState } from "react";

type Props = {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
};

export default function Hamburger({ setIsOpen, isOpen }: Props) {
  function toggleMenu() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <button className="md:hidden" onClick={toggleMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
        <g className={`${isOpen ? "fill-neutral-200" : "fill-white"}`} fillRule="evenodd">
          <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
        </g>
      </svg>
    </button>
  );
}
