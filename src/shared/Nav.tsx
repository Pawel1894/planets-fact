import { PLANET } from "../enum";
import NavItem from "./NavItem";

type Props = {
  isOpen: boolean;
  children: JSX.Element;
};

export default function Nav({ isOpen, children }: Props) {
  return (
    <nav
      className={`md:flex absolute w-full left-0 top-[75px] bg-neutral-100 z-10 md:visible md:static md:h-auto xl:w-auto xl:ml-auto flex  transition-all duration-300 
      ${isOpen ? "visible h-[calc(100vh-75px)] duration-500" : "invisible h-0"}`}
    >
      {children}
    </nav>
  );
}
