import { useState } from "react";
import { Image, Text, TouchableOpacity, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenProps } from "../types/navigation";

export const MindScreen = (props: ScreenProps<"Mind">) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <SafeAreaView className="absolute inset-0 bg-[#FFF4ED]">
      <View className="absolute">
        <Image
          source={require("../assets/images/mind/Group_36924.png")}
          className=""
        />
      </View>
      <View className="absolute inset-x-0 mt-16 items-center">
        <Text className=" text-2xl font-semibold text-white">Mind</Text>
      </View>
      <View className="absolute right-0 mt-20 mr-5">
        <Image source={require("../assets/images/mind/Vector.png")} />
      </View>

      <View className="absolute mt-44 px-5 ">
        <View className="flex flex-row gap-10">
          <TouchableOpacity onPress={() => setIsPressed(!isPressed)}>
            <Text
              className={`${
                !isPressed ? "text-[#FF8669]" : "text-[#9B9B9BE0]/80"
              }
            mb-2 text-xl font-semibold`}
            >
              Tâm trí
            </Text>
            {!isPressed && (
              <Image
                source={require("../assets/images/mind/Rectangle_1315.png")}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsPressed(!isPressed)}>
            <Text
              className={`${
                isPressed ? "text-[#FF8669]" : "text-[#9B9B9BE0]/80"
              }
            mb-2 text-xl font-semibold`}
            >
              Âm nhạc
            </Text>
            {isPressed && (
              <Image
                source={require("../assets/images/mind/Rectangle_1315.png")}
              />
            )}
          </TouchableOpacity>
        </View>

        <View className="flex flex-row items-center rounded-xl border-2  border-[#FF835C33]/20 bg-white px-3 py-1">
          <Image source={require("../assets/images/mind/Icon.png")} />
          <TextInput
            placeholder="Tìm kiếm"
            className="px-2 py-1 text-sm text-[#9B9B9B]"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
