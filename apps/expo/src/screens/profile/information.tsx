import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../root";
import { ScreenProps } from "../../types/navigation";

const data = [
  {
    name: "Email",
    data: "pthanhgranden@gmail.com",
  },
  {
    name: "Loại tài khoản",
    data: "Thành viên dùng thử",
  },
  {
    name: "Tên",
    data: "Kaylin",
  },
  {
    name: "Điện thoại",
    data: "0123456789",
  },
  {
    name: "Giới tính",
    data: "Nữ",
  },
  {
    name: "Ngày sinh",
    data: "Ngày 11 tháng 1 năm 2000",
  },
  {
    name: "Địa chỉ",
    data: "Hà Nội",
  },
];
export const Information = () => {
  return (
    <SafeAreaView className="absolute inset-0 content-end bg-[#FFF4ED]">
      <View className=" absolute">
        <Image
          className="h-auto object-cover"
          source={require("../../assets/images/profile/information/header.png")}
        />
        <View className="absolute top-14 flex flex-row p-1 align-baseline">
          <TouchableOpacity className=" ">
            <Image
              className="ml-5"
              source={require("../../assets/images/profile/information/back.png")}
            />
          </TouchableOpacity>
          <Text
            className=" font-quicksand ml-3 text-2xl text-white "
            style={styles().textFontBold}
          >
            Thông tin của tôi
          </Text>
        </View>
        <TouchableOpacity className="absolute top-14 right-10">
          <Text
            className=" font-quicksand left-3 text-2xl text-white "
            style={styles().textFontBold}
          >
            Sửa
          </Text>
        </TouchableOpacity>

        <View className="absolute ml-[30%] mt-[35%]">
          <View className="box-content h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-slate-50">
            <Image
              className="relative  object-cover"
              source={require("../../assets/images/profile/information/img.png")}
            />
          </View>
        </View>
      </View>

      <ScrollView
        className="inset-x-0 -z-10"
        showsVerticalScrollIndicator={false}
      >
        <View className="relative mt-72" style={styles().itemsWrap}>
          {data.map((item) => {
            return (
              <>
                <View
                  className="mt-6 justify-center"
                  style={styles(1).singleItem}
                >
                  <View className="flex flex-row items-baseline space-x-6">
                    <Text
                      className=" font-quicksand ml-0 text-sm text-[#5A2D22] "
                      style={styles().textFontBold}
                    >
                      {item.name}
                    </Text>

                    <Text
                      className=" font-quicksand absolute left-28 text-sm text-[#5A2D22] "
                      style={styles().textFont}
                    >
                      {item.data}
                    </Text>
                  </View>
                  <View className="h-0.5 bg-[#CACACA]"></View>
                </View>
              </>
            );
          })}
        </View>
        <View className=" relative mt-6 ml-7">
          <TouchableOpacity>
            <Text
              className=" font-quicksand text-lg text-[#FF835C] "
              style={styles().textFontSemiBold}
            >
              Đổi mật khẩu
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
