import { FC } from "react";
import image from './Images/LearnMaths.png'
const ValorantLogo: FC<{ width?: number, height?: number, fill?: string }> = ({ width, height, fill = '#ece8e1' }) => (
      <img src={image}           className=""

alt="Logo" />
)
export default ValorantLogo   