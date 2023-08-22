import React, { FC } from "react";
import logos from "../components/Images/logo.png";

const ArcadeBowLogo: FC = () => (
  <div>
    <img src={logos} className="w-full h-full  cursor-pointer" alt="Logo" />
  </div>
);

export default ArcadeBowLogo;
