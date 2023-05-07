import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../root";

const noti = [
  {
    notification: "Kaylin đã đăng vào nhóm Self-love.",
    time: "30 phút",
  },
  {
    notification: "An đã đăng vào nhóm Self-love.",
    time: "1 giờ",
  },
  {
    notification: "Phuong đã đăng vào nhóm Self-love.",
    time: "1 giờ",
  },
];

export const Notification = () => {
  return (
    <SafeAreaView className="absolute inset-0 content-end bg-[#FFF4ED]">
      <View className="absolute top-0 left-0">
        <Image
          className="h-auto object-cover"
          source={require("../assets/images/notification/header.png")}
        />
        <View className="absolute top-10 flex flex-row p-1 align-baseline">
          <TouchableOpacity className=" ">
            <Image
              className="ml-5"
              source={require("../assets/images/notification/back.png")}
            />
          </TouchableOpacity>
          <Text
            className=" font-quicksand ml-8 text-2xl text-white "
            style={styles().textFontBold}
          >
            Thông báo
          </Text>
        </View>
      </View>

      <ScrollView className="absolute left-[5%] mt-40 w-[90%]">
        {noti.map((item) => {
          return (
            <TouchableOpacity className="mt-5">
              <View className=" flex flex-row">
                <Image
                  className="mt-1 items-baseline justify-between object-fill"
                  source={require("../assets/images/notification/leave.png")}
                />
                <View className="ml-5 flex flex-col">
                  <Text
                    className=" font-quicksand text-sm text-[#3C3C43] "
                    style={styles().textFont}
                  >
                    {item.time} trước
                  </Text>
                  <Text
                    className=" font-quicksand text-sm text-[#5A2D22] "
                    style={styles().textFontSemiBold}
                  >
                    {item.notification}
                  </Text>
                </View>
              </View>
              <View className="mt-4 h-0.5 bg-[#CCCCCC]"></View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View className="absolute inset-x-0 bottom-0 items-stretch">
        <Image
          className="h-auto w-auto scale-x-90 object-fill"
          source={require("../assets/images/notification/footer.png")}
        />
      </View>
    </SafeAreaView>
  );
};
