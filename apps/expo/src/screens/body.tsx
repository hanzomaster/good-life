import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenProps } from "../types/navigation";

export const BodyScreen = (props: ScreenProps<"Body">) => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>Body screen</Text>
      <Button
        title="Navigate"
        onPress={() => props.navigation.navigate("Home")}
      />
    </SafeAreaView>
  );
};
