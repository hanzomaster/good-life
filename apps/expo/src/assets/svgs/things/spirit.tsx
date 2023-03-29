import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Spirit = ({ color }: { color: string }) => (
  <Svg {...{ color }} width={24} height={29} fill="none">
    <Path
      d="M3.203 14a9 9 0 1 0 15.594 0L11.001 2l-7.8 12h.002ZM11.002 2v25.5M11.002 15.5l5.316-5.316M11.002 23.45l8.337-8.337"
      stroke={color}
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Spirit;
