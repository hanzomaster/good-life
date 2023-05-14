import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../root";

const comments = [
  {
    name: "Julie Nguyen",
    image: require("../../assets/images/nutrition/avatar.png"),
    comment: "Yummy, thanks all ! memmm",
    time: "2 giờ",
  },
  {
    name: "Phuong Nguyen",
    image: require("../../assets/images/nutrition/avatar.png"),
    comment: "Ngon quá! Tôi sẽ làm thử",
    time: "2 ngày",
  },
];

export const ReviewsPage = () => {
  return (
    <SafeAreaView className="absolute inset-0 h-60 content-end bg-[#FFF4ED]">
      <ScrollView className="">
        <View className=" ml-5 mr-5 mt-0 flex flex-row items-center rounded-lg  border-2 border-[#FF835C33]/20 bg-[#FFF4ED] px-3 py-1">
          <Image source={require("../../assets/images/physique/Icon.png")} />
          <TextInput
            placeholder="Tìm kiếm"
            className="px-2 py-1 text-sm text-[#9B9B9B]"
          />
        </View>
        <View className=" mt-0">
          {comments.map((item) => {
            return (
              <View className=" mt-5 ml-[5%] w-[90%] rounded-lg bg-white">
                <View className="mt-3 ml-[5%] flex w-[90%] flex-row">
                  <Image source={item.image} />
                  <View className="ml-4">
                    <Text
                      className=" font-quicksand text-lg text-[#5A2D22] "
                      style={styles().textFontSemiBold}
                    >
                      {item.name}
                    </Text>
                    <Text
                      className=" font-quicksand text-sm text-[#3C3C43] "
                      style={styles().textFont}
                    >
                      {item.time} trước
                    </Text>
                    <Text
                      className=" font-quicksand mt-3 text-sm text-[#5A2D22] "
                      style={styles().textFont}
                    >
                      {item.comment}
                    </Text>
                    <TouchableOpacity>
                      <Text
                        className=" font-quicksand mb-3 mt-3 text-sm text-[#FF835C] "
                        style={styles().textFontSemiBold}
                      >
                        Trả lời
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
