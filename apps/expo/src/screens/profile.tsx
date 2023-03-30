import { Button, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenProps } from "../types/navigation";

const data = [
  {
    name: "Gần đây",
    image: require("../assets/images/profile/recent.png"),
  },
  {
    name: "Yêu thích",
    image: require("../assets/images/profile/heart.png"),
  },
  {
    name: "Đã lưu",
    image: require("../assets/images/profile/save.png"),
  },
  {
    name: "Nhóm",
    image: require("../assets/images/profile/group.png"),
  },
  {
    name: "Checkin",
    image: require("../assets/images/profile/checkin.png"),
  },
  {
    name: "Chặn",
    image: require("../assets/images/profile/block.png"),
  },
  {
    name: "Chính sách bảo mật",
    image: require("../assets/images/profile/security.png"),
  },
  {
    name: "Đăng xuất",
    image: require("../assets/images/profile/logout.png"),
  },
];
export const ProfileScreen = (props: ScreenProps<"Profile">) => {
  return (
    <SafeAreaView className="absolute inset-0 content-end bg-[#FFF4ED]">
      <View className=" absolute" style={{ alignItems: "center" }}>
        <Image
          className="h-auto object-cover"
          source={require("../assets/images/profile/header.png")}
        />
        <View className="absolute flex flex-row" style={{ marginTop: "25%" }}>
          <Image
            className="h-auto object-cover"
            source={require("../assets/images/profile/avatar.png")}
          />
          <View style={{ justifyContent: "center" }} className="ml-5">
            <Text className=" font-quicksand text-2xl text-[#FFFFFF] ">
              Kaylin
            </Text>
            <TouchableOpacity>
              <Text className=" font-quicksand text-sm text-[#FFFFFF] ">
                Xem và sửa thông tin của bạn!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="relative mt-60" style={{ left: "5%" }}>
        {data.map((item) => {
          return (
            <>
              <View className="mt-5" style={{ justifyContent: "center" }}>
                <TouchableOpacity className="flex flex-row ">
                  <Image
                    className="ml-5 mt-2 h-auto object-cover"
                    source={item.image}
                  />
                  <Text
                    className=" font-quicksand ml-10 text-lg text-[#5A2D22] "
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    height: 1,
                    width: "90%",
                    borderRadius: 10,
                    backgroundColor: "#CACACA",
                  }}
                ></View>
              </View>
            </>
          );
        })}
      </View>
    </SafeAreaView>
  );
};
