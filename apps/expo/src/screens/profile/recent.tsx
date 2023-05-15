import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../root";
import { ProfileScreenProps } from "../../types/navigation";

import React from "react";

const video = [
  {
    name: "Nhạc du dương",
    image: require("../../assets/images/profile/recent/img1.png"),
    time: 21,
    heart: 2,
    date: "11.02.2023",
  },
  {
    name: "Pilates xx",
    image: require("../../assets/images/profile/recent/img2.png"),
    time: 21,
    heart: 20,
    date: "11.02.2023",
  },
  {
    name: "Thiền buổi sáng",
    image: require("../../assets/images/profile/recent/img3.png"),
    time: 21,
    heart: 10,
    date: "11.02.2023",
  },
  {
    name: "Thiền buổi chiều",
    image: require("../../assets/images/profile/recent/img4.png"),
    time: 20,
    heart: 52,
    date: "11.02.2023",
  },
  {
    name: "Nhạc du dương",
    image: require("../../assets/images/profile/recent/img5.png"),
    time: 21,
    heart: 2,
    date: "11.02.2023",
  },
  {
    name: "Pilates xx",
    image: require("../../assets/images/profile/recent/img6.png"),
    time: 21,
    heart: 20,
    date: "11.02.2023",
  },
];

export const Recent = (props: ProfileScreenProps<"Recent">) => {
  return (
    <SafeAreaView className="absolute inset-0 content-end bg-[#FFF4ED]">
      <View className="absolute top-0 left-0">
        <Image
          className="h-auto object-cover"
          source={require("../../assets/images/profile/recent/header.png")}
        />
        <View className="absolute top-10 flex flex-row p-1 align-baseline">
          <TouchableOpacity className="" onPress={() => props.navigation.pop()}>
            <Image
              className="ml-5"
              source={require("../../assets/images/profile/recent/back.png")}
            />
          </TouchableOpacity>
          <Text
            className=" font-quicksand ml-8 text-2xl text-white "
            style={styles().textFontBold}
          >
            Gần đây
          </Text>
        </View>
      </View>

      <ScrollView className="mt-44" showsVerticalScrollIndicator={false}>
        <View
          className=""
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <View
            className=" relative ml-1 items-center"
            style={styles().itemsWrap}
          >
            {video.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  className=""
                  style={styles(2).singleItem}
                >
                  <View className="relative box-content w-40">
                    <Image
                      className="h-40 w-40 rounded-lg object-fill"
                      source={item.image}
                    />
                    <View className="absolute bottom-2 left-2 rounded-2xl bg-slate-900/40 bg-opacity-10 p-1 ">
                      <Text className="text-white" style={styles().textFont}>
                        {item.time} phút
                      </Text>
                    </View>
                    <View className="absolute bottom-2 right-2 rounded-2xl">
                      <Image
                        className="h-6 w-6 object-fill"
                        source={require("../../assets/images/profile/recent/back.png")}
                      />
                    </View>
                  </View>

                  <View className="mt-2">
                    <Text
                      className="text-base text-[#5A2D22]"
                      style={styles().textFont}
                    >
                      {item.name}
                    </Text>
                    <View className=" flex flex-row items-baseline space-x-1">
                      <Image
                        source={require("../../assets/images/home/heart.png")}
                      />
                      <Text className="text-xs text-[#DED5C6]">
                        {item.heart} &#8226; {item.date}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
