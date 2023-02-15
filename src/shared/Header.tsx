import React, { useState } from "react";
import { PLANET } from "../enum";
import Hamburger from "./Hamburger";
import Nav from "./Nav";
import NavItem from "./NavItem";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-6 py-4 md:py-8 md:px-8 border-b border-b-neutral-200 relative flex justify-between items-center md:flex-col md:justify-start xl:flex-row xl:py-0">
      <span className="uppercase font-antonio font-medium text-white text-[28px]">the planets</span>
      <Hamburger setIsOpen={setIsOpen} isOpen={isOpen} />
      <Nav isOpen={isOpen}>
        <ul className={`nav-items ${isOpen ? "nav-items_active" : ""}`}>
          <NavItem setIsOpen={setIsOpen} name={PLANET.mercury} color="accent-100" key={"mercury"} />
          <NavItem
            setIsOpen={setIsOpen}
            name={PLANET.venus}
            color="accent-200"
            key={"venus"}
            borderTop={true}
          />
          <NavItem
            setIsOpen={setIsOpen}
            name={PLANET.earth}
            color="accent-300"
            key={"earth"}
            borderTop={true}
          />
          <NavItem
            setIsOpen={setIsOpen}
            name={PLANET.mars}
            color="accent-400"
            key={"mars"}
            borderTop={true}
          />
          <NavItem
            setIsOpen={setIsOpen}
            name={PLANET.jupiter}
            color="accent-500"
            key={"jupiter"}
            borderTop={true}
          />
          <NavItem
            setIsOpen={setIsOpen}
            name={PLANET.saturn}
            color="accent-600"
            key={"saturn"}
            borderTop={true}
          />
          <NavItem
            setIsOpen={setIsOpen}
            name={PLANET.uranus}
            color="accent-700"
            key={"uranus"}
            borderTop={true}
          />
          <NavItem
            setIsOpen={setIsOpen}
            name={PLANET.neptune}
            color="accent-800"
            key={"neptune"}
            borderTop={true}
          />
        </ul>
      </Nav>
    </header>
  );
}
