import { Image, SafeAreaView, View } from "react-native";

export const LandingPage1 = () => {
  return (
    <SafeAreaView className="absolute inset-0 content-end bg-[#FFF4ED]">
      <View className=" relative top-0 left-auto p-0">
        <Image
          className="h-auto w-3/4 object-cover"
          source={require("../common/landingpage1/componentlandind1.png")}
        />
      </View>

      <View className="relative right-0 flex-1 items-end">
        <Image
          className="object-fit h-auto w-auto"
          source={require("../common/landingpage1/componentlanding2.png")}
        />
      </View>

      <View className="relative items-center justify-center">
        <Image
          className="object-fit  h-auto w-auto items-center"
          source={require("../common/landingpage1/logo.png")}
        />
      </View>
      <View className=" relative inset-x-0 bottom-0 items-stretch">
        <Image
          className="h-fit w-fit object-cover"
          source={require("../common/landingpage1/flower.png")}
        />
      </View>
    </SafeAreaView>
  );
};
