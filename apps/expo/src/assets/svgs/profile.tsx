import Svg, { Path } from "react-native-svg";

export const ProfileIcon = ({ color }: { color: string }) => (
  <Svg {...{ color }} width={18} height={22} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 10c2.762 0 5-2.238 5-5s-2.238-5-5-5-5 2.238-5 5 2.238 5 5 5Zm0-8c1.658 0 3 1.342 3 3s-1.342 3-3 3-3-1.342-3-3 1.342-3 3-3Zm9 17a1 1 0 1 1-2 0v-2c0-1.46-3.844-3-7-3s-7 1.54-7 3v2a1 1 0 1 1-2 0v-2c0-3.065 4.831-5 9-5s9 1.935 9 5v2Z"
      fill={color}
    />
  </Svg>
);
