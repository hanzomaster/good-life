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
const physique = [
  {
    name: "Pilates xx",
    image: require("../../assets/images/physique/img1.png"),
    time: 21,
    heart: 2,
    date: "11.02.2023",
  },
  {
    name: "Giãn cơ 20 phút",
    image: require("../../assets/images/physique/img2.png"),
    time: 21,
    heart: 20,
    date: "11.02.2023",
  },
  {
    name: "Chạy",
    image: require("../../assets/images/physique/img3.png"),
    time: 21,
    heart: 10,
    date: "11.02.2023",
  },
  {
    name: "Tập cơ tay",
    image: require("../../assets/images/physique/img4.png"),
    time: 20,
    heart: 52,
    date: "11.02.2023",
  },
];

const nutrition = [
  {
    name: "Súp bí đỏ",
    image: require("../../assets/images/nutrition/img1.png"),
    heart: 2,
    date: "11.02.2023",
  },
  {
    name: "Sinh tố dâu",
    image: require("../../assets/images/nutrition/img2.png"),
    heart: 20,
    date: "11.02.2023",
  },
  {
    name: "Bánh plan",
    image: require("../../assets/images/nutrition/img4.png"),
    heart: 10,
    date: "11.02.2023",
  },
  {
    name: "Cốm",
    image: require("../../assets/images/nutrition/img3.png"),
    heart: 52,
    date: "11.02.2023",
  },
];

const mind = [
  {
    name: "Thiền về tình yêu",
    image: require("../../assets/images/mind/Rectangle_1245.png"),
    time: 21,
    heart: 22,
    date: "11.02.2023",
  },
  {
    name: "Thiền về tâm hồn",
    image: require("../../assets/images/mind/img1.png"),
    time: 21,
    heart: 2,
    date: "11.02.2023",
  },
  {
    name: "Thiền về cuộc sống",
    image: require("../../assets/images/mind/img2.png"),
    time: 21,
    heart: 2,
    date: "11.02.2023",
  },
  {
    name: "Thiền tĩnh tâm",
    image: require("../../assets/images/mind/img3.png"),
    time: 21,
    heart: 2,
    date: "11.02.2023",
  },
];

const music = [
  {
    name: "Morning Chill",
    image: require("../../assets/images/music/img1.png"),
    time: 2,
    heart: 12,
    date: "11.04.2023",
  },
  {
    name: "Trending songs",
    image: require("../../assets/images/music/img2.png"),
    time: 3,
    heart: 10,
    date: "01.02.2023",
  },
  {
    name: "Nhạc hay",
    image: require("../../assets/images/music/img3.png"),
    time: 8,
    heart: 26,
    date: "11.02.2023",
  },
  {
    name: "Nhạc tĩnh tâm",
    image: require("../../assets/images/music/img4.png"),
    time: 5,
    heart: 36,
    date: "30.03.2023",
  },
];

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
              {physique.map((item) => (
                <TouchableOpacity className="" key={item.name}>
                  <View className="relative box-content">
                    <Image
                      className="h-40 w-40 rounded-lg object-fill"
                      source={item.image}
                    />
                    <View className="absolute bottom-2 left-4 rounded-2xl bg-slate-900/40 bg-opacity-10 p-1 ">
                      <Text className="text-white" style={styles().textFont}>
                        {item.time} phút
                      </Text>
                    </View>
                  </View>

                  <View className="mt-2">
                    <Text
                      className="text-base text-[#5A2D22]"
                      style={styles().textFontSemiBold}
                    >
                      {item.name}
                    </Text>
                    <View className=" flex flex-row items-baseline space-x-1">
                      <Image
                        source={require("../../assets/images/home/heart.png")}
                      />
                      <Text className="text-xs text-[#B2B2B2]">
                        {item.heart} &#8226; {item.date}{" "}
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
              {nutrition.map((item) => (
                <TouchableOpacity className="" key={item.name}>
                  <View className="relative box-content">
                    <Image
                      className="h-40 w-40 rounded-lg object-fill"
                      source={item.image}
                    />
                  </View>

                  <View className="mt-2">
                    <Text
                      className="text-base text-[#5A2D22]"
                      style={styles().textFontSemiBold}
                    >
                      {item.name}
                    </Text>
                    <View className=" flex flex-row items-baseline space-x-1">
                      <Image
                        source={require("../../assets/images/home/heart.png")}
                      />
                      <Text className="text-xs text-[#B2B2B2]">
                        {item.heart} &#8226; {item.date}{" "}
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
              {mind.map((item) => (
                <TouchableOpacity className="" key={item.name}>
                  <View className="relative box-content">
                    <Image
                      className="h-40 w-40 rounded-lg object-fill"
                      source={item.image}
                    />
                    <View className="absolute bottom-2 left-4 rounded-2xl bg-slate-900/40 bg-opacity-10 p-1 ">
                      <Text className="text-white" style={styles().textFont}>
                        {item.time} phút
                      </Text>
                    </View>
                  </View>

                  <View className="mt-2">
                    <Text
                      className="text-base text-[#5A2D22]"
                      style={styles().textFontSemiBold}
                    >
                      {item.name}
                    </Text>
                    <View className=" flex flex-row items-baseline space-x-1">
                      <Image
                        source={require("../../assets/images/home/heart.png")}
                      />
                      <Text className="text-xs text-[#B2B2B2]">
                        {item.heart} &#8226; {item.date}{" "}
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
              {music.map((item) => (
                <TouchableOpacity className="" key={item.name}>
                  <View className="relative box-content">
                    <Image
                      className="h-40 w-40 rounded-lg object-fill"
                      source={item.image}
                    />
                    <View className="absolute bottom-2 left-4 rounded-2xl bg-slate-900/40 bg-opacity-10 p-1 ">
                      <Text className="text-white" style={styles().textFont}>
                        {item.time} phút
                      </Text>
                    </View>
                  </View>

                  <View className="mt-2">
                    <Text
                      className="text-base text-[#5A2D22]"
                      style={styles().textFontSemiBold}
                    >
                      {item.name}
                    </Text>
                    <View className=" flex flex-row items-baseline space-x-1">
                      <Image
                        source={require("../../assets/images/home/heart.png")}
                      />
                      <Text className="text-xs text-[#B2B2B2]">
                        {item.heart} &#8226; {item.date}{" "}
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
