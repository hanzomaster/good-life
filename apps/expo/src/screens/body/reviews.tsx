import { Text, ScrollView, View, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const ReviewsPage = () => {
  return (
    <SafeAreaView className="absolute inset-0 h-48 content-end bg-[#FFF4ED]">
      <ScrollView className="">
        <View className=" ml-5 mr-5 mt-0 flex flex-row items-center rounded-lg  border-2 border-[#FF835C33]/20 bg-[#FFF4ED] px-3 py-1">
          <Image source={require("../../assets/images/physique/Icon.png")} />
          <TextInput
            placeholder="Tìm kiếm"
            className="px-2 py-1 text-sm text-[#9B9B9B]"
          />
        </View>
        <View className="absolute left-[5%] mt-80 h-40 w-[90%] justify-center rounded-xl bg-white"></View>
      </ScrollView>
    </SafeAreaView>
  );
};
