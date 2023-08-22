import { FC } from "react";
import ArcadeBowLogoSvg from "../ArcadeBowLogo";

const ArcadeBowLogo: FC = () => (
  <div className="w-24 h-8 lg:w-19 lg:h-6 cursor-pointer">
    <span
      className="fill-[#f9f9f9] min-w-fit
    w-[5.3rem] lg:w-auto
    h-7 lg:h-auto
    hover:fill-[#eb0029]"
    >
      <ArcadeBowLogoSvg />
    </span>
  </div>
);

export default ArcadeBowLogo;
