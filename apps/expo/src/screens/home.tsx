import React from "react";

import { useAuth } from "@clerk/clerk-expo";
import {
  Button,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "../root";
import { ScreenProps } from "../types/navigation";

const SignOut = () => {
  const { signOut } = useAuth();
  return (
    <View className="rounded-lg border-2 border-gray-500 p-4">
      <Button
        title="Sign Out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const HomeScreen = (props: ScreenProps<"Home">) => {
  return (
    <SafeAreaView className="inset-0 h-full w-full overflow-y-scroll bg-[#FFF4ED]">
      <ScrollView>
        <View className="inset-x-0 mt-5 flex flex-row justify-between px-4">
          <Text
            className="text text-2xl text-[#5A2D22]"
            style={styles().textFont}
          >
            The good life
          </Text>
          <View className="flex flex-row">
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Notification")}
            >
              <Image
                className=""
                source={require("../assets/images/home/noti.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                className="ml-5"
                source={require("../assets/images/home/message.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Search")}
            >
              <Image
                className="ml-5"
                source={require("../assets/images/home/search.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View className="inset-x-0 mt-9 flex flex-col items-center justify-between">
          <Image
            className=""
            source={require("../assets/images/home/center.png")}
          />
          <View className="inset-x-0 items-center">
            <Text
              className="text-2xl text-[#5A2D22]"
              style={styles().textFontSemiBold}
            >
              Chào bạn
            </Text>
            <Text className="text-md text-[#5A2D22]" style={styles().textFont}>
              Hãy đồng hành cùng với TGL mỗi ngày nhé !
            </Text>
          </View>
        </View>
        <View className="bottom-0 right-0 left-0 -z-10 ">
          <Image
            className="-mt-20"
            source={require("../assets/images/home/flowerCtr.png")}
          />
          <Image
            className=" absolute mt-5 h-fit"
            source={require("../assets/images/home/bottom.png")}
          />

          <View className="relative -mt-28">
            <Text
              className=" relative pl-4 text-lg text-white"
              style={styles().textFontSemiBold}
            >
              Thứ 2, ngày 1 tháng 12{" "}
            </Text>
            <TouchableOpacity
              className=" inset-x-0 z-10 mx-3 mt-10"
              onPress={() => {
                props.navigation.navigate("HomeStack");
              }}
            >
              <View className="inset-x-0 flex w-full flex-row space-x-3">
                <View className="box-content rounded-2xl bg-white object-fill">
                  <Image
                    className="m-2 "
                    source={require("../assets/images/home/neutral.png")}
                  />
                </View>
                <View className="relative inset-0 flex w-full  flex-col justify-between">
                  <Text className="text-[#DED5C6]" style={styles().textFont}>
                    DAILY CHECK IN
                  </Text>
                  <Text
                    className="text-[#FFFFFF]"
                    style={styles().textFontSemiBold}
                  >
                    Hôm nay bạn cảm thấy thế nào?
                  </Text>
                  <Text className="text-[#DED5C6]" style={styles().textFont}>
                    Tạm ổn &#8226; 2 ngày trước
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <View>
              <TouchableOpacity className=" inset-x-0 mx-3 mt-10">
                <View className="inset-x-0 flex w-full flex-row space-x-3">
                  <View className="box-content rounded-2xl bg-white object-fill">
                    <Image
                      className="m-2"
                      source={require("../assets/images/home/coffee.png")}
                    />
                  </View>
                  <View className="inset-0flex-col relative flex  w-full justify-between">
                    <Text className="text-[#DED5C6]" style={styles().textFont}>
                      SUGGESTED
                    </Text>
                    <Text
                      className="text-[#FFFFFF]"
                      style={styles().textFontSemiBold}
                    >
                      Gần đây
                    </Text>
                    <Text className="text-[#DED5C6]" style={styles().textFont}>
                      Thiền buổi sáng
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          className="mx-2 mt-9"
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: "#C4C4C4" }} />
        </View>

        <View>
          <View className="inset-x-0 mx-3 mt-5 flex flex-row items-baseline justify-between">
            <Text
              className="text-lg text-white"
              style={styles().textFontSemiBold}
            >
              Dành cho bạn
            </Text>
            <Text className="text-sm text-white" style={styles().textFont}>
              Xem thêm
            </Text>
          </View>
        </View>
        <View
          className=" mt-2"
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ScrollView
            horizontal
            className="flex h-fit pb-2"
            alwaysBounceHorizontal
            alwaysBounceVertical={false}
          >
            <View className=" relative ml-3 flex w-4/5 flex-row space-x-6">
              <TouchableOpacity className="">
                <View className="relative box-content">
                  <Image
                    className="rounded-lg object-fill"
                    source={require("../assets/images/home/testpic.png")}
                  />
                  <View className="absolute bottom-2 left-4 rounded-2xl bg-slate-900/40 bg-opacity-10 p-1 ">
                    <Text className="text-white" style={styles().textFont}>
                      21 phút
                    </Text>
                  </View>
                </View>

                <View className="mt-2">
                  <Text
                    className="text-base text-white"
                    style={styles().textFontSemiBold}
                  >
                    Thiền buổi sáng
                  </Text>
                  <View className=" flex flex-row items-baseline space-x-1">
                    <Image
                      source={require("../assets/images/home/heart.png")}
                    />
                    <Text className="text-xs text-[#DED5C6]">
                      22 &#8226; 11.02.2023{" "}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity className="">
                <View className="relative box-content">
                  <Image
                    className="rounded-lg object-fill"
                    source={require("../assets/images/home/testpic.png")}
                  />
                  <View className="absolute bottom-2 left-4 rounded-2xl bg-slate-900/40 bg-opacity-10 p-1 ">
                    <Text className="text-white" style={styles().textFont}>
                      21 phút
                    </Text>
                  </View>
                </View>

                <View className="mt-2">
                  <Text
                    className="text-base text-white"
                    style={styles().textFontSemiBold}
                  >
                    Thiền buổi sáng
                  </Text>
                  <View className=" flex flex-row items-baseline space-x-1">
                    <Image
                      source={require("../assets/images/home/heart.png")}
                    />
                    <Text className="text-xs text-[#DED5C6]">
                      22 &#8226; 11.02.2023{" "}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="">
                <View className="relative box-content">
                  <Image
                    className="rounded-lg object-fill"
                    source={require("../assets/images/home/testpic.png")}
                  />
                  <View className="absolute bottom-2 left-4 rounded-2xl bg-slate-900/40 bg-opacity-10 p-1 ">
                    <Text className="text-white" style={styles().textFont}>
                      21 phút
                    </Text>
                  </View>
                </View>

                <View className="mt-2">
                  <Text
                    className="text-base text-white"
                    style={styles().textFontSemiBold}
                  >
                    Thiền buổi sáng
                  </Text>
                  <View className=" flex flex-row items-baseline space-x-1">
                    <Image
                      source={require("../assets/images/home/heart.png")}
                    />
                    <Text className="text-xs text-[#DED5C6]">
                      22 &#8226; 11.02.2023{" "}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        <View>
          <View className="inset-x-0 mx-3 mt-5 flex flex-row items-baseline justify-between">
            <Text
              className="text-lg text-white"
              style={styles().textFontSemiBold}
            >
              Nội dung mới
            </Text>
            <Text className="text-sm text-white" style={styles().textFont}>
              Xem thêm
            </Text>
          </View>
        </View>

        <View
          className=" mt-2 mb-5"
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <ScrollView
            horizontal
            className="flex h-fit pb-2"
            alwaysBounceHorizontal
            alwaysBounceVertical={false}
          >
            <View className=" relative ml-3 flex flex-row space-x-6">
              <TouchableOpacity className="">
                <View className="relative box-content">
                  <Image
                    className="h-40 w-40 rounded-lg object-fill"
                    source={require("../assets/images/home/testnewcontentpic.png")}
                  />
                  <View className="absolute bottom-2 left-4 rounded-2xl bg-slate-900/40 bg-opacity-10 p-1 ">
                    <Text className="text-white" style={styles().textFont}>
                      21 phút
                    </Text>
                  </View>
                </View>

                <View className="mt-2">
                  <Text
                    className="text-base text-white"
                    style={styles().textFontSemiBold}
                  >
                    Thiền buổi tối
                  </Text>
                  <View className=" flex flex-row items-baseline space-x-1">
                    <Image
                      source={require("../assets/images/home/heart.png")}
                    />
                    <Text className="text-xs text-[#DED5C6]">
                      22 &#8226; 11.02.2023{" "}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity className="">
                <View className="relative box-content">
                  <Image
                    className="relative h-40 w-40 rounded-lg object-fill"
                    source={require("../assets/images/home/testpic.png")}
                  />
                  <View className="absolute bottom-2 left-4 rounded-2xl bg-slate-900/40 bg-opacity-10 p-1 ">
                    <Text className="text-white" style={styles().textFont}>
                      21 phút
                    </Text>
                  </View>
                </View>

                <View className="mt-2">
                  <Text
                    className="text-base text-white"
                    style={styles().textFontSemiBold}
                  >
                    Thiền buổi tối
                  </Text>
                  <View className=" flex flex-row items-baseline space-x-1">
                    <Image
                      source={require("../assets/images/home/heart.png")}
                    />
                    <Text className="text-xs text-[#DED5C6]">
                      22 &#8226; 11.02.2023{" "}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="">
                <View className="relative box-content">
                  <Image
                    className="relative h-40 w-40 rounded-lg object-fill"
                    source={require("../assets/images/home/testpic.png")}
                  />
                  <View className="absolute bottom-2 left-4 rounded-2xl bg-slate-900/40 bg-opacity-10 p-1 ">
                    <Text className="text-white" style={styles().textFont}>
                      21 phút
                    </Text>
                  </View>
                </View>

                <View className="mt-2">
                  <Text
                    className="text-base text-white"
                    style={styles().textFontSemiBold}
                  >
                    Thiền buổi tối
                  </Text>
                  <View className=" flex flex-row items-baseline space-x-1">
                    <Image
                      source={require("../assets/images/home/heart.png")}
                    />
                    <Text className="text-xs text-[#DED5C6]">
                      22 &#8226; 11.02.2023{" "}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
