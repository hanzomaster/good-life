import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../../root";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ScreenProps } from "../../types/navigation";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const data = [1, 2, 3, 4, 5];
export const Suggest = (props: ScreenProps<"Suggest">) => {
  return (
    <SafeAreaView className="absolute inset-0 bg-[#FFF4ED]">
      <KeyboardAwareScrollView>
        <View className=" relative top-0 right-0 items-end p-0">
          <Image
            className="h-auto object-fill"
            source={require("../../assets/images/emotion/topright.png")}
          />
        </View>
        <View className="absolute inset-x-0 z-10 mx-7 mt-10 items-end">
          <TouchableOpacity
            className="h-10 w-10 items-center justify-center rounded-full bg-[#FFFFFF]"
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          >
            <Image
              className=""
              source={require("../../assets/images/emotion/exit.png")}
            />
          </TouchableOpacity>
        </View>
        <View className="inset-x-0 -mt-7 items-center justify-center">
          <View className="relative flex w-1/2 flex-col items-center justify-center">
            <Image
              className="mb-2"
              source={require("../../assets/images/emotion/slider4.png")}
            />
            <Text
              className="text-center text-lg text-[#5A2D22]"
              style={styles().textFontBold}
            >
              Hôm nay, hãy thử làm những bài sau nhé !
            </Text>
          </View>
        </View>
        <View>
          <View className="inset-x-0 mx-3 mt-2 flex flex-row items-baseline justify-between">
            <Text
              className="text-lg text-[#5A2D22]"
              style={styles().textFontSemiBold}
            >
              Thể chất
            </Text>
            <Text className="text-sm text-[#FF835C]" style={styles().textFont}>
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
              {data.map((item) => (
                <TouchableOpacity className="">
                  <View className="relative box-content">
                    <Image
                      className="h-40 w-40 rounded-lg object-fill"
                      source={require("../../assets/images/home/testnewcontentpic.png")}
                    />
                    <View className="absolute bottom-2 left-4 rounded-2xl bg-slate-900/40 bg-opacity-10 p-1 ">
                      <Text className="text-white" style={styles().textFont}>
                        21 phút
                      </Text>
                    </View>
                  </View>

                  <View className="mt-2">
                    <Text
                      className="text-base text-[#5A2D22]"
                      style={styles().textFontSemiBold}
                    >
                      Thiền buổi tối
                    </Text>
                    <View className=" flex flex-row items-baseline space-x-1">
                      <Image
                        source={require("../../assets/images/home/heart.png")}
                      />
                      <Text className="text-xs text-[#B2B2B2]">
                        22 &#8226; 11.02.2023{" "}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
        <View>
          <View className="inset-x-0 mx-3 mt-1 flex flex-row items-baseline justify-between">
            <Text
              className="text-lg text-[#5A2D22]"
              style={styles().textFontSemiBold}
            >
              Dinh dưỡng
            </Text>
            <Text className="text-sm text-[#FF835C]" style={styles().textFont}>
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
              {data.map((item) => (
                <TouchableOpacity className="">
                  <View className="relative box-content">
                    <Image
                      className="h-40 w-40 rounded-lg object-fill"
                      source={require("../../assets/images/home/testnewcontentpic.png")}
                    />
                    <View className="absolute bottom-2 left-4 rounded-2xl bg-slate-900/40 bg-opacity-10 p-1 ">
                      <Text className="text-white" style={styles().textFont}>
                        21 phút
                      </Text>
                    </View>
                  </View>

                  <View className="mt-2">
                    <Text
                      className="text-base text-[#5A2D22]"
                      style={styles().textFontSemiBold}
                    >
                      Thiền buổi tối
                    </Text>
                    <View className=" flex flex-row items-baseline space-x-1">
                      <Image
                        source={require("../../assets/images/home/heart.png")}
                      />
                      <Text className="text-xs text-[#B2B2B2]">
                        22 &#8226; 11.02.2023{" "}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
        <View>
          <View className="inset-x-0 mx-3 mt-2 flex flex-row items-baseline justify-between">
            <Text
              className="text-lg text-[#5A2D22]"
              style={styles().textFontSemiBold}
            >
              Tâm trí
            </Text>
            <Text className="text-sm text-[#FF835C]" style={styles().textFont}>
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
              {data.map((item) => (
                <TouchableOpacity className="">
                  <View className="relative box-content">
                    <Image
                      className="h-40 w-40 rounded-lg object-fill"
                      source={require("../../assets/images/home/testnewcontentpic.png")}
                    />
                    <View className="absolute bottom-2 left-4 rounded-2xl bg-slate-900/40 bg-opacity-10 p-1 ">
                      <Text className="text-white" style={styles().textFont}>
                        21 phút
                      </Text>
                    </View>
                  </View>

                  <View className="mt-2">
                    <Text
                      className="text-base text-[#5A2D22]"
                      style={styles().textFontSemiBold}
                    >
                      Thiền buổi tối
                    </Text>
                    <View className=" flex flex-row items-baseline space-x-1">
                      <Image
                        source={require("../../assets/images/home/heart.png")}
                      />
                      <Text className="text-xs text-[#B2B2B2]">
                        22 &#8226; 11.02.2023{" "}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
        <View>
          <View className="inset-x-0 mx-3 mt-2 flex flex-row items-baseline justify-between">
            <Text
              className="text-lg text-[#5A2D22]"
              style={styles().textFontSemiBold}
            >
              Âm nhạc
            </Text>
            <Text className="text-sm text-[#FF835C]" style={styles().textFont}>
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
              {data.map((item) => (
                <TouchableOpacity className="">
                  <View className="relative box-content">
                    <Image
                      className="h-40 w-40 rounded-lg object-fill"
                      source={require("../../assets/images/home/testnewcontentpic.png")}
                    />
                    <View className="absolute bottom-2 left-4 rounded-2xl bg-slate-900/40 bg-opacity-10 p-1 ">
                      <Text className="text-white" style={styles().textFont}>
                        21 phút
                      </Text>
                    </View>
                  </View>

                  <View className="mt-2">
                    <Text
                      className="text-base text-[#5A2D22]"
                      style={styles().textFontSemiBold}
                    >
                      Thiền buổi tối
                    </Text>
                    <View className=" flex flex-row items-baseline space-x-1">
                      <Image
                        source={require("../../assets/images/home/heart.png")}
                      />
                      <Text className="text-xs text-[#B2B2B2]">
                        22 &#8226; 11.02.2023{" "}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
