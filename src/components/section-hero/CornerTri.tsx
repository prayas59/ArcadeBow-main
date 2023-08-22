import { FC } from "react";

const CornerTri: FC = () => (
  <>
  <span
    className="absolute border-solid bottom-0 left-0 border-l-white border-t-[transparent] z-10
border-t-[5vw] lg:border-t-[5%]
border-l-[5vw] lg:border-l-[5%]"
  ></span>
  <span
    className="absolute border-solid bottom-0 right-0 border-l-white border-t-[transparent] z-10
border-t-[5vw] lg:border-t-[5%]
border-r-[5vw] lg:border-r-[5%]"
  ></span>
  </>
);

export default CornerTri;
