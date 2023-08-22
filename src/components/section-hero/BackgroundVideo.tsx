import { FC } from "react";
import logos from "../Images/cover.jpeg";

const BackgroundVideo: FC = () => (
  <div className="absolute top-0 left-0 object-cover w-full h-full z-0">
    <img src={logos} className="w-full h-full object-cover" alt="Logo" />
  </div>
);

export default BackgroundVideo;
