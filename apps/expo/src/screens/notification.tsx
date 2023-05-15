import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../root";
import { ScreenProps } from "../types/navigation";

const noti = [
  {
    notification: "Nguyen đã đăng vào nhóm Self-love.",
    time: "1 giờ",
  },
  {
    notification: "An đã đăng vào nhóm Self-love.",
    time: "1 giờ",
  },
  {
    notification: "Phuong đã thích bài viết của bạn.",
    time: "1 giờ",
  },
  {
    notification: "Trang đã đăng vào nhóm Self-love.",
    time: "3 giờ",
  },
  {
    notification: "An đã đăng vào nhóm Self-love.",
    time: "5 giờ",
  },
  {
    notification: "Phuong đã thích bài viết của bạn.",
    time: "8 giờ",
  },
  {
    notification: "Nguyen đã đăng vào nhóm Self-love.",
    time: "1 ngày",
  },
  {
    notification: "An đã đăng vào nhóm Self-love.",
    time: "2 ngày",
  },
  {
    notification: "Phuong đã đăng vào nhóm Self-love.",
    time: "3 ngày",
  },
  {
    notification: "Trang đã đăng vào nhóm Self-love.",
    time: "3 ngày",
  },
  {
    notification: "Bạn đã tham gia nhóm Self-love.",
    time: "3 ngày",
  },
];

export const NotificationPage = (props: ScreenProps<"Notification">) => {
  return (
    <SafeAreaView className="absolute inset-0 content-end bg-[#FFF4ED]">
      <View className="absolute top-0 left-0">
        <Image
          className="h-auto object-cover"
          source={require("../assets/images/notification/header.png")}
        />
        <View className="absolute top-10 flex flex-row p-1 align-baseline">
          <TouchableOpacity
            className=" "
            onPress={() => props.navigation.pop()}
          >
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

      <ScrollView className=" relative  z-10 mt-32">
        <View className="left-[5%] w-[90%]">
          {noti.map((item, index) => {
            return (
              <TouchableOpacity key={index} className="mt-5">
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
        </View>
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
