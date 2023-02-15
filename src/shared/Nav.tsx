import { PLANET } from "../enum";
import NavItem from "./NavItem";

type Props = {
  isOpen: boolean;
  children: JSX.Element;
};

export default function Nav({ isOpen, children }: Props) {
  return <nav className={`nav ${isOpen ? "nav_active" : ""} `}>{children}</nav>;
}
