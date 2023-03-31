import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Health = ({ color }: { color: string }) => (
  <Svg {...{ color }} width={24} height={24} fill="none">
    <Path
      d="M14.75 23.08a1.916 1.916 0 0 0 1.913-1.913v-4.504h4.504a1.915 1.915 0 0 0 1.913-1.913v-5.5a1.915 1.915 0 0 0-1.913-1.913h-4.504V2.833A1.915 1.915 0 0 0 14.75.92h-5.5a1.915 1.915 0 0 0-1.913 1.913v4.504H2.833A1.915 1.915 0 0 0 .92 9.25v5.5a1.915 1.915 0 0 0 1.913 1.913h4.504v4.504A1.915 1.915 0 0 0 9.25 23.08h5.5Zm-5.42-8.33v-.08H2.913V9.33H9.33V2.913h5.34V9.33h6.417v5.34H14.67v6.417H9.33V14.75Z"
      fill={color}
      strokeWidth={0.45}
    />
  </Svg>
);

export default Health;
