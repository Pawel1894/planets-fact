import React from "react";
import NavItem from "./NavItem";

type Props = {
  isOpen: boolean;
};

export default function Nav({ isOpen }: Props) {
  return (
    <nav
      className={`${
        !isOpen && window.innerWidth < 768 ? "hidden" : "flex"
      }  absolute w-full left-0 top-[75px] h-[calc(100vh-75px)] bg-neutral-100 z-10
      md:static md:h-auto xl:w-auto xl:ml-auto `}
    >
      <ul className="w-full mt-8 px-6 md:flex md:gap-x-8 justify-center md:px-0 xl:justify-end xl:mt-0">
        <NavItem name="mercury" color="accent-100" key={"mercury"} />
        <NavItem name="venus" color="accent-200" key={"venus"} borderTop={true} />
        <NavItem name="earth" color="accent-300" key={"earth"} borderTop={true} />
        <NavItem name="mars" color="accent-400" key={"mars"} borderTop={true} />
        <NavItem name="jupiter" color="accent-500" key={"jupiter"} borderTop={true} />
        <NavItem name="saturn" color="accent-600" key={"saturn"} borderTop={true} />
        <NavItem name="uranus" color="accent-700" key={"uranus"} borderTop={true} />
        <NavItem name="neptune" color="accent-800" key={"neptune"} borderTop={true} />
      </ul>
    </nav>
  );
}
