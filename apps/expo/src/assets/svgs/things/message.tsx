import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Message = ({ color }: { color: string }) => (
  <Svg {...{ color }} width={24} height={23} viewBox="0 0 24 23">
    <Path
      d="M7.97 17.215c0-.013.002-.026.003-.038l-.002.038zm.002-.193l.001.004v-.004h-.001zm.053 2.186c3.571-2.832 4.01-3.055 5.058-3.145 4.736-.406 8.25-3.401 8.25-6.858C21.333 5.455 17.22 2.3 12 2.3S2.667 5.457 2.667 9.205c0 2.177 1.566 4.332 4.072 5.7 1.044.57 1.277 1.285 1.254 2.045a2.528 2.528 0 01-.012.172c.03.38.043 1.058.044 2.087v-.002zm5.32-.855c-.246.02-2.166 1.467-5.76 4.34-.19.153-.43.254-.686.291a1.53 1.53 0 01-.76-.082 1.3 1.3 0 01-.58-.428 1.037 1.037 0 01-.214-.634c.027-2.716.015-4.265-.032-4.646-.024-.2.043-.322 0-.345C2.277 15.194 0 12.39 0 9.206 0 4.122 5.373 0 12 0s12 4.122 12 9.205c0 4.734-4.66 8.635-10.653 9.148h-.002z"
      fill={color}
    />
  </Svg>
);

export default Message;
