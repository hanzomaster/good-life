import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Finance = ({ color }: { color: string }) => (
  <Svg {...{ color }} width={24} height={21} fill="none">
    <Path
      d="M19.8 0H3.3C1.48 0 0 1.496 0 3.333v13.334C0 18.504 1.48 20 3.3 20h16.5c1.213 0 2.2-.997 2.2-2.222V2.222C22 .997 21.013 0 19.8 0ZM3.3 17.778c-.607 0-1.1-.5-1.1-1.111V3.333c0-.612.493-1.11 1.1-1.11h16.5v3.333h-6.6c-1.213 0-2.2.996-2.2 2.222v4.444c0 1.226.987 2.222 2.2 2.222h6.601v3.334H3.3Zm16.5-10v4.444h-6.6V7.778h6.6Z"
      fill={color}
    />
  </Svg>
);

export default Finance;
