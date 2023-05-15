import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../root";

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

export const Nutrition = ({ navigate }: any) => {
  const [selectedSuggest, setSelectedSuggest] = useState<string[]>([]);
  const updateSelectedSuggest = (item: string) => {
    const copyArray = [...selectedSuggest];
    copyArray.push(item);
    setSelectedSuggest(copyArray);
  };
  return (
    <SafeAreaView className="absolute inset-0 h-[80%] content-end bg-[#FFF4ED]">
      <View className="mt-0">
        <View className=" ml-5 mr-5 mt-0 flex flex-row items-center rounded-lg  border-2 border-[#FF835C33]/20 bg-[#FFF4ED] px-3 py-1">
          <Image source={require("../../assets/images/nutrition/Icon.png")} />
          <TextInput
            placeholder="Tìm kiếm"
            className="px-2 py-1 text-sm text-[#9B9B9B]"
          />
        </View>
      </View>
      <View className=" mt-2 justify-center align-middle">
        <ScrollView
          horizontal
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
            {food.map((item) => {
              return (
                <TouchableOpacity
                  key={item.name}
                  className=""
                  style={styles(2).singleItem}
                  onPress={() => {
                    navigate();
                  }}
                >
                  <View className="relative box-content w-40">
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
