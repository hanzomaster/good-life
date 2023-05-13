import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../root";
import { ProfileScreenProps } from "../../types/navigation";

import React, { useState } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const video = [
  {
    name: "Pilates xx",
    image: require("../../assets/images/profile/love/img1.png"),
    time: 21,
    heart: 2,
    date: "11.02.2023",
  },
  {
    name: "Giãn cơ 20 phút",
    image: require("../../assets/images/profile/love/img2.png"),
    time: 21,
    heart: 20,
    date: "11.02.2023",
  },
  {
    name: "Chạy",
    image: require("../../assets/images/profile/love/img3.png"),
    time: 21,
    heart: 10,
    date: "11.02.2023",
  },
  {
    name: "Giảm mỡ",
    image: require("../../assets/images/profile/love/img4.png"),
    time: 20,
    heart: 52,
    date: "11.02.2023",
  },
  {
    name: "Thể lực",
    image: require("../../assets/images/profile/love/img5.png"),
    time: 21,
    heart: 2,
    date: "11.02.2023",
  },
  {
    name: "Pilates xx",
    image: require("../../assets/images/profile/love/img6.png"),
    time: 21,
    heart: 20,
    date: "11.02.2023",
  },
];

const suggest = [
  {
    name: "Thể chất",
  },
  {
    name: "Dinh dưỡng",
  },
  {
    name: "Tâm trí",
  },
  {
    name: "Âm nhạc",
  },
];

export const Love = (props: ProfileScreenProps<"Love">) => {
  const [selectedSuggest, setSelectedSuggest] = useState<string[]>([]);
  const updateSelectedSuggest = (item: string) => {
    const copyArray = [...selectedSuggest];
    copyArray.push(item);
    setSelectedSuggest(copyArray);
  };
  return (
    <SafeAreaView className="absolute inset-0 content-end bg-[#FFF4ED]">
      <View className=" absolute top-0 left-0">
        <Image
          className="h-auto object-cover"
          source={require("../../assets/images/profile/love/header.png")}
        />
        <TouchableOpacity
          className="absolute top-14 left-5 p-1"
          onPress={() => props.navigation.pop()}
        >
          <Image
            className=""
            source={require("../../assets/images/profile/love/back.png")}
          />
        </TouchableOpacity>
      </View>

      <View className=" mt-32 justify-center align-middle">
        <ScrollView
          className=""
          alwaysBounceHorizontal
          alwaysBounceVertical={false}
          automaticallyAdjustContentInsets={false}
          directionalLockEnabled
          showsHorizontalScrollIndicator={false}
        >
          <View className="relative ml-5 mt-4 flex h-fit flex-row space-x-6 ">
            {suggest.map((item) => {
              return (
                <View className="h-[1/9] w-fit" key={item.name}>
                  <TouchableOpacity
                    className={classNames(
                      selectedSuggest.includes(item.name)
                        ? "bg-[#7A9861]"
                        : "bg-[#FFFFFF]",
                      "h-10 w-20 items-center justify-center rounded-xl",
                    )}
                    onPress={() => {
                      if (selectedSuggest.includes(item.name)) {
                        setSelectedSuggest(
                          selectedSuggest.filter((i) => i !== item.name),
                        );
                      } else {
                        updateSelectedSuggest(item.name);
                      }
                    }}
                  >
                    <Text
                      className={classNames(
                        selectedSuggest.includes(item.name)
                          ? "text-[#FFFFFF]"
                          : "text-[#A5A5A5]",
                      )}
                      style={styles().textFontSemiBold}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>

      <ScrollView className=" mt-5">
        <View
          className=" mt-0"
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
            {video.map((item) => {
              return (
                <TouchableOpacity
                  key={item.name}
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
                        source={require("../../assets/images/profile/love/play.png")}
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
