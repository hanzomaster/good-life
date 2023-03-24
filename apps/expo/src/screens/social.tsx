import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenProps } from "../types/navigation";

export const SocialScreen = (props: ScreenProps<"Social">) => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>Social screen</Text>
      <Button
        title="Navigate"
        onPress={() => props.navigation.navigate("Home")}
      />
    </SafeAreaView>
  );
};
