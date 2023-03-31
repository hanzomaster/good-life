import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Sleep = ({ color }: { color: string }) => (
  <Svg {...{ color }} width={24} height={24} fill="none">
    <Path
      d="M8.294 2a10.418 10.418 0 0 0-.502 3.203c0 5.758 4.668 10.426 10.426 10.426 1.468 0 2.865-.304 4.132-.852C20.999 18.97 17.066 22 12.426 22 6.668 22 2 17.332 2 11.574 2 7.284 4.59 3.6 8.294 2Z"
      fill={color}
      strokeWidth={2.2}
      strokeLinejoin="round"
    />
    <Path
      d="M16.862 3.465h5.41L16.48 8.1h5.792"
      fill={color}
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Sleep;
