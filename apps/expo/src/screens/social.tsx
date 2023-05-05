import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../root";
import { ScreenProps } from "../types/navigation";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const SocialScreen = (props: ScreenProps<"Social">) => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView className="absolute inset-0 bg-[#FFF4ED]">
      <View className="absolute top-0">
        <Image
          className="top-0"
          source={require("../assets/images/group/groupList/top.png")}
        />
        <View className="absolute inset-x-4 mt-10 flex flex-row items-baseline justify-between">
          <Text
            className="text-2xl text-white"
            style={styles().textFontSemiBold}
          >
            The good life
          </Text>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/group/groupList/noti.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View className=" relative inset-x-0 mx-4 mt-[30%] flex flex-col justify-between">
        <Text
          className="text-xl text-[#FF8669]"
          style={styles().textFontSemiBold}
        >
          {" "}
          Nhóm
        </Text>

        <Image
          className="h-auto object-cover"
          source={require("../assets/images/group/groupList/groupline.png")}
        />
      </View>

      <ScrollView>
        <View className="inset-x-0 mx-4 mt-2 flex flex-row items-baseline justify-between ">
          <Text
            className="text-base text-[#5A2D22]"
            style={styles().textFontBold}
          >
            Nhóm của tôi
          </Text>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/group/groupList/next.png")}
            />
          </TouchableOpacity>
        </View>

        <View
          className=" mt-2"
          style={{
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <ScrollView
            className=""
            alwaysBounceHorizontal
            alwaysBounceVertical={false}
            automaticallyAdjustContentInsets={false}
            directionalLockEnabled
            showsHorizontalScrollIndicator={false}
          >
            <View
              className=" relative ml-5 flex h-72 flex-col flex-wrap "
              style={{ marginHorizontal: 12 / 2, marginVertical: 12 / 2 }}
            >
              <View className="mr-5 mb-5 h-[1/9] w-72">
                <TouchableOpacity className="flex flex-row justify-start space-x-3">
                  <View className="h-[74] w-[74] items-center justify-center overflow-hidden rounded-xl bg-slate-400 ">
                    <Text className="text-3xl">+</Text>
                  </View>
                  <View className="flex flex-col items-start justify-center">
                    <Text
                      className="text-[#5A2D22]"
                      style={styles().textFontBold}
                    >
                      Tạo nhóm mới
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              {data.map((item) => {
                return (
                  <View className="mr-5 mb-5 h-[1/9] w-72" key={item}>
                    <TouchableOpacity className="flex flex-row justify-start space-x-3">
                      <View className="overflow-hidden rounded-xl">
                        <Image
                          source={require("../assets/images/group/groupList/avatar.png")}
                        />
                      </View>
                      <View className="flex flex-col items-start justify-center">
                        <Text
                          className="text-[#5A2D22]"
                          style={styles().textFontBold}
                        >
                          Chia sẻ nhạc hay
                        </Text>
                        <Text
                          className="text-sm text-[#9B9B9B]"
                          style={styles().textFont}
                        >
                          1651 thành viên
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>

        <View className="inset-x-0 mx-4 flex flex-row items-baseline justify-between ">
          <Text
            className="text-base text-[#5A2D22]"
            style={styles().textFontBold}
          >
            Nhóm khác
          </Text>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/group/groupList/next.png")}
            />
          </TouchableOpacity>
        </View>

        <View
          className=" mt-2"
          style={{
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <ScrollView
            className=""
            alwaysBounceHorizontal
            alwaysBounceVertical={false}
            automaticallyAdjustContentInsets={false}
            directionalLockEnabled
            showsHorizontalScrollIndicator={false}
          >
            <View
              className=" relative ml-5 flex h-72 flex-col flex-wrap "
              style={{ marginHorizontal: 12 / 2, marginVertical: 12 / 2 }}
            >
              {data.map((item) => {
                return (
                  <View className="mr-5 mb-5 h-[1/9] w-72" key={item}>
                    <TouchableOpacity className="flex flex-row justify-start space-x-3">
                      <View className="rounded-3xl">
                        <Image
                          source={require("../assets/images/group/groupList/avatar.png")}
                        />
                      </View>
                      <View className="flex flex-col items-start justify-center">
                        <Text
                          className="text-[#5A2D22]"
                          style={styles().textFontBold}
                        >
                          Chia sẻ nhạc hay
                        </Text>
                        <Text
                          className="text-sm text-[#9B9B9B]"
                          style={styles().textFont}
                        >
                          1651 thành viên
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
