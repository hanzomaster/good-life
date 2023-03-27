import { useNavigation } from "@react-navigation/native";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export const LandingPage3 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="absolute inset-0 content-end bg-[#7A9861]">
      <View className=" relative top-0 left-auto p-0">
        <Image
          className=" h-40 w-1/2 object-scale-down"
          source={require("../../common/landingpage3/topleft.png")}
        />
      </View>

      <View className="relative right-0 flex-1 items-end">
        <Image
          className="object-fit h-auto w-auto scale-[.8]"
          source={require("../../common/landingpage3/centerright.png")}
        />
      </View>

      <View className="absolute inset-x-0 mt-28 ml-auto mr-auto flex h-3/5 flex-col items-center justify-between align-baseline">
        <View className=" relative inset-x-0 mx-auto w-full items-center">
          <Text className=" font-quicksand h-auto w-2/3 flex-wrap text-center text-3xl text-[#FFFF] ">
            BODY
          </Text>
        </View>

        <Text className=" font-quicksand h-auto w-2/3 flex-wrap text-justify text-2xl text-[#FFFF] ">
          Cung cấp những bài tập rèn luyện thể chất và phương pháp ăn uống đủ
          dinh dưỡng cho cơ thể.
        </Text>

        <Image
          className=" relative h-fit w-fit scale-[.8]"
          source={require("../../common/landingpage3/center.png")}
        />
      </View>

      <View className="inset-x-0 mb-0 items-center ">
        <Image
          className=" absolute mt-40 h-fit w-fit"
          source={require("../../common/landingpage3/slider.png")}
        />
        <TouchableOpacity
          className="absolute z-10 mt-44 h-14 w-14 items-center justify-center rounded-full bg-[#FF835C]"
          onPress={() => {
            navigation.navigate("LandingPage4" as never);
          }}
        >
          <Image
            className=" relative h-fit w-fit "
            source={require("../../common/landingpage3/arrow.png")}
          />
        </TouchableOpacity>
        <View>
          <Image
            className="h-auto w-auto scale-x-90 object-fill"
            source={require("../../common/landingpage3/bottom.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
