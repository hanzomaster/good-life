import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenProps } from "../types/navigation";
import { styles } from "../root";
import React, { useState } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const video = [
  {
    name: "Pilates xx",
    image: require("../assets/images/physique/img1.png"),
    time: 21,
    heart: 2,
    date: "11.02.2023",
  },
  {
    name: "Giãn cơ 20 phút",
    image: require("../assets/images/physique/img2.png"),
    time: 21,
    heart: 20,
    date: "11.02.2023",
  },
  {
    name: "Chạy",
    image: require("../assets/images/physique/img3.png"),
    time: 21,
    heart: 10,
    date: "11.02.2023",
  },
  {
    name: "Tập cơ tay",
    image: require("../assets/images/physique/img4.png"),
    time: 20,
    heart: 52,
    date: "11.02.2023",
  },
];

const suggest = [
  {
    name: "Gợi ý",
  },
  {
    name: "Yoga",
  },
  {
    name: "Cadio",
  },
  {
    name: "Pilates",
  },
  {
    name: "Giãn cơ",
  },
];

export const BodyScreen = (props: ScreenProps<"Body">) => {
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
          source={require("../assets/images/physique/header.png")}
        />
        <TouchableOpacity
          className="absolute top-20 right-10 p-1"
          onPress={() => {}}
        >
          <Image source={require("../assets/images/physique/expand.png")} />
        </TouchableOpacity>
      </View>
      <View className="absolute inset-x-5 mt-40 ml-auto mr-auto flex flex-row">
        <TouchableOpacity>
          <Text className=" font-quicksand text-2xl text-[#FF8669] ">
            Thể chất
          </Text>
          <View className=" absolute inset-x-0 mt-0">
            <Image
              className="mt-10 h-auto object-cover"
              source={require("../assets/images/physique/tab.png")}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text className=" font-quicksand ml-10  text-2xl text-[#9B9B9BE0] ">
            Dinh dưỡng
          </Text>
        </TouchableOpacity>
      </View>

      <View className="mt-10">
        <View
          className="ml-5 mr-5 mt-40 flex flex-row items-center border-2  border-[#FF835C33]/20 bg-[#FFF4ED] px-3 py-1"
          style={{
            borderRadius: 10,
          }}
        >
          <Image source={require("../assets/images/physique/Icon.png")} />
          <TextInput
            placeholder="Tìm kiếm"
            className="px-2 py-1 text-sm text-[#9B9B9B]"
          />
        </View>
      </View>
      <View className="inset-x-5 mt-5 flex flex-row">
        {suggest.map((item) => {
          return (
            <>
              <TouchableOpacity
                key={item.name}
                className={classNames(
                  selectedSuggest.includes(item.name)
                    ? "bg-[#7A9861]"
                    : "bg-[#FFFFFF]",
                  "mr-5",
                )}
                style={{
                  height: 40,
                  width: "20%",
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            </>
          );
        })}
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
          <View className=" relative" style={styles().itemsWrap}>
            {video.map((item) => {
              return (
                <>
                  <TouchableOpacity
                    key={item.name}
                    className=""
                    style={styles(2).singleItem}
                  >
                    <View className="relative box-content">
                      <Image
                        className="h-40 w-40 rounded-lg object-fill"
                        source={item.image}
                      />
                      <View className="absolute bottom-2 left-2 rounded-2xl bg-slate-900/40 bg-opacity-10 p-1 ">
                        <Text className="text-white" style={styles().textFont}>
                          {item.time} phút
                        </Text>
                      </View>
                      <View className="absolute bottom-2 right-2 rounded-2xl p-1 ">
                        <Image
                          className="h-6 w-6 object-fill"
                          source={require("../assets/images/physique/play.png")}
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
                          source={require("../assets/images/home/heart.png")}
                        />
                        <Text className="text-xs text-[#DED5C6]">
                          {item.heart} &#8226; {item.date}{" "}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
