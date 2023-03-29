import {
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../root";
import { ScreenProps } from "../../types/navigation";
import React, { useState } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const food = [
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

const suggest = [
  {
    name: "Gợi ý",
  },
  {
    name: "Món chính",
  },
  {
    name: "Bữa sáng",
  },
  {
    name: "Ăn nhẹ",
  },
];

export const Nutrition = () => {
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
          source={require("../../assets/images/nutrition/header.png")}
        />
        <TouchableOpacity className="absolute top-20 right-10 p-1">
          <Image source={require("../../assets/images/physique/expand.png")} />
        </TouchableOpacity>
      </View>
      <View className="absolute inset-x-5 mt-40 ml-auto mr-auto flex flex-row">
        <TouchableOpacity>
          <Text className=" font-quicksand text-2xl text-[#9B9B9BE0] ">
            Thể chất
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className=" font-quicksand ml-10 text-2xl text-[#FF8669] ">
            Dinh dưỡng
          </Text>
          <View className=" absolute inset-x-10 mt-0">
            <Image
              className="mt-10 h-auto object-cover"
              source={require("../../assets/images/nutrition/tab.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View className="mt-10">
        <View
          className="ml-5 mr-5 mt-40 flex flex-row items-center border-2  border-[#FF835C33]/20 bg-[#FFF4ED] px-3 py-1"
          style={{
            borderRadius: 10,
          }}
        >
          <Image source={require("../../assets/images/nutrition/Icon.png")} />
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
            {food.map((item) => {
              return (
                <>
                  <TouchableOpacity className="" style={styles(2).singleItem}>
                    <View className="relative box-content">
                      <Image
                        className="h-40 w-40 rounded-lg object-fill"
                        source={item.image}
                      />
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
