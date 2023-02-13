import React, { useState } from "react";
import Hamburger from "./Hamburger";
import Nav from "./Nav";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-6 py-4 border-b border-b-neutral-200 relative flex justify-between items-center">
      <span className="uppercase font-antonio font-medium text-white text-[28px]">the planets</span>
      <Hamburger setIsOpen={setIsOpen} isOpen={isOpen} />
      <Nav isOpen={isOpen} />
    </header>
  );
}
