import { FC } from "react";
import ArcadeBowLogo from "./ArcadeBowLogo";
import NavLinks from "./NavLinks";
import LearnNowButton from "./LearnNowButton";
import SideMenuToggler from "./SideMenuToggler";

const Header: FC = () => (
  <header className="flex fixed w-full top-0 left-0 h-20 items-center px-4 lg:px-9 bg-dark font-markpro z-50 border-b-2 border-gray-700/40">
    <ArcadeBowLogo />
    <NavLinks />
    <div className="flex flex-row items-center ml-auto">
      <LearnNowButton />
      <SideMenuToggler />
    </div>
  </header>
);

export default Header;
