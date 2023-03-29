import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../root";
import { ScreenProps } from "../types/navigation";

export const BodyScreen = (props: ScreenProps<"Body">) => {
  return (
    <SafeAreaView
      className=""
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <ScrollView
        className="flex h-fit bg-black"
        alwaysBounceHorizontal
        alwaysBounceVertical={true}
      >
        <View className=" relative flex flex-row space-x-3">
          <View className="">
            <Image
              className=""
              source={require("../assets/images/home/testpic.png")}
            />
            <View>
              <Text className="" style={styles().textFontSemiBold}>
                Thiền buổi sáng
              </Text>
              <View className=" flex flex-row">
                <Image source={require("../assets/images/home/heart.png")} />
                <Text>22 &#8226; 11.02.2023 </Text>
              </View>
            </View>
          </View>

          <View className="">
            <Image
              className=""
              source={require("../assets/images/home/testpic.png")}
            />
            <View>
              <Text className="" style={styles().textFontSemiBold}>
                Thiền buổi sáng
              </Text>
              <View className=" flex flex-row">
                <Image source={require("../assets/images/home/heart.png")} />
                <Text>22 &#8226; 11.02.2023 </Text>
              </View>
            </View>
          </View>

          <View className="">
            <Image
              className=""
              source={require("../assets/images/home/testpic.png")}
            />
            <View>
              <Text className="" style={styles().textFontSemiBold}>
                Thiền buổi sáng
              </Text>
              <View className=" flex flex-row">
                <Image source={require("../assets/images/home/heart.png")} />
                <Text>22 &#8226; 11.02.2023 </Text>
              </View>
            </View>
          </View>

          <View className="">
            <Image
              className=""
              source={require("../assets/images/home/testpic.png")}
            />
            <View>
              <Text className="" style={styles().textFontSemiBold}>
                Thiền buổi sáng
              </Text>
              <View className="flex flex-row">
                <Image source={require("../assets/images/home/heart.png")} />
                <Text>22 &#8226; 11.02.2023 </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
