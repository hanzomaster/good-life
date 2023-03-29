import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Friend = ({ color }: { color: string }) => (
  <Svg {...{ color }} width={24} height={21} fill="none">
    <Path
      d="M8.05 9.333c.91 0 1.8-.273 2.556-.786A4.652 4.652 0 0 0 12.3 6.453a4.73 4.73 0 0 0 .262-2.697 4.688 4.688 0 0 0-1.26-2.39A4.58 4.58 0 0 0 8.948.09 4.539 4.539 0 0 0 6.29.355a4.615 4.615 0 0 0-2.065 1.719 4.715 4.715 0 0 0-.775 2.593c0 1.237.485 2.424 1.347 3.3A4.567 4.567 0 0 0 8.05 9.332Zm0-7c.455 0 .9.137 1.278.394.378.256.673.62.847 1.047a2.364 2.364 0 0 1-.499 2.543 2.27 2.27 0 0 1-2.507.506 2.308 2.308 0 0 1-1.031-.86 2.357 2.357 0 0 1 .286-2.946 2.284 2.284 0 0 1 1.626-.684Zm9.2 9.334c.682 0 1.35-.206 1.917-.59a3.49 3.49 0 0 0 1.27-1.57c.261-.64.33-1.344.197-2.023a3.516 3.516 0 0 0-.945-1.792 3.435 3.435 0 0 0-1.766-.958 3.404 3.404 0 0 0-1.993.2c-.63.264-1.17.713-1.549 1.288a3.536 3.536 0 0 0 .43 4.42 3.425 3.425 0 0 0 2.439 1.025Zm0-4.667c.227 0 .45.068.639.197.189.128.336.31.424.523a1.182 1.182 0 0 1-.25 1.272 1.135 1.135 0 0 1-1.253.253 1.154 1.154 0 0 1-.516-.43 1.178 1.178 0 0 1 .143-1.473c.215-.22.508-.342.813-.342Zm0 5.833a5.698 5.698 0 0 0-3.519 1.225 8.015 8.015 0 0 0-4.12-2.225 7.944 7.944 0 0 0-4.644.467 8.076 8.076 0 0 0-3.608 3.004A8.25 8.25 0 0 0 0 19.834c0 .309.121.605.337.824a1.142 1.142 0 0 0 1.626 0c.216-.219.337-.515.337-.825 0-1.547.606-3.03 1.684-4.124A5.709 5.709 0 0 1 8.05 14a5.71 5.71 0 0 1 4.066 1.709 5.877 5.877 0 0 1 1.684 4.124c0 .31.121.607.337.825a1.142 1.142 0 0 0 1.626 0c.216-.219.337-.515.337-.825a8.142 8.142 0 0 0-.989-3.908 3.408 3.408 0 0 1 3.64-.405 3.467 3.467 0 0 1 1.42 1.29c.345.556.528 1.2.529 1.857 0 .31.121.606.337.825a1.142 1.142 0 0 0 1.626 0c.216-.22.337-.516.337-.825 0-1.547-.606-3.031-1.684-4.125a5.709 5.709 0 0 0-4.066-1.709Z"
      fill={color}
      strokeWidth={0.45}
    />
  </Svg>
);

export default Friend;