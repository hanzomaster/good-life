import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../../root";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Eat from "../../assets/svgs/things/eat";
import Finance from "../../assets/svgs/things/finance";
import Friend from "../../assets/svgs/things/friend";
import Health from "../../assets/svgs/things/health";
import Heart from "../../assets/svgs/things/heart";
import Kiss from "../../assets/svgs/things/kiss";
import Sleep from "../../assets/svgs/things/sleep";
import Spirit from "../../assets/svgs/things/spirit";
import Study from "../../assets/svgs/things/study";
import Training from "../../assets/svgs/things/training";
import Travel from "../../assets/svgs/things/travel";
import Work from "../../assets/svgs/things/work";
import { ScreenProps } from "../../types/navigation";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function checkIndex(item: any, array: any) {
  if (array.indexOf(item) === 1) {
    return classNames(
      "inset-y-0 h-20 items-center justify-center border-r border-l border-[#A5A5A5]/20",
    );
  } else if (array.indexOf(item) === 10) {
    return classNames(
      "inset-y-0 h-20 items-center justify-center border-r border-l border-[#A5A5A5]/20",
    );
  } else if (array.indexOf(item) === 6 || array.indexOf(item) === 8) {
    return classNames(
      "inset-y-0 h-20 items-center justify-center border-t border-b border-[#A5A5A5]/20",
    );
  } else if (array.indexOf(item) === 7) {
    return classNames(
      "inset-y-0 h-20 items-center justify-center border border-[#A5A5A5]/20",
    );
  } else if (array.indexOf(item) === 4) {
    return classNames(
      "inset-y-0 h-20 items-center justify-center border-t border-r border-l border-[#A5A5A5]/20",
    );
  } else if (array.indexOf(item) === 3 || array.indexOf(item) === 5) {
    return classNames(
      "inset-y-0 h-20 items-center justify-center border-t border-[#A5A5A5]/20",
    );
  } else {
    return classNames("inset-y-0 h-20 items-center justify-center");
  }
}

export const EmotionChoosing1 = (props: ScreenProps<"EmotionChoosing1">) => {
  const [selectedEmotion, setSelectedEmotion] = useState<string[]>([]);

  const [value, onChangeText] = useState("");

  const data = [
    {
      name: "heart",
      svgTag: (colorSel: string) => <Heart color={colorSel} />,
      text: "Gia đình",
    },
    {
      name: "kiss",
      svgTag: (colorSel: string) => <Kiss color={colorSel} />,
      text: "Tình yêu",
    },
    {
      name: "friend",
      svgTag: (colorSel: string) => <Friend color={colorSel} />,
      text: "Bạn bè",
    },
    {
      name: "sleep",
      svgTag: (colorSel: string) => <Sleep color={colorSel} />,
      text: "Giấc ngủ",
    },
    {
      name: "eat",
      svgTag: (colorSel: string) => <Eat color={colorSel} />,
      text: "Ăn uống",
    },
    {
      name: "spirit",
      svgTag: (colorSel: string) => <Spirit color={colorSel} />,
      text: "Tâm linh",
    },
    {
      name: "study",
      svgTag: (colorSel: string) => <Study color={colorSel} />,
      text: "Học hành",
    },

    {
      name: "finance",
      svgTag: (colorSel: string) => <Finance color={colorSel} />,
      text: "Tài chính",
    },
    {
      name: "health",
      svgTag: (colorSel: string) => <Health color={colorSel} />,
      text: "Sức khỏe",
    },
    {
      name: "training",
      svgTag: (colorSel: string) => <Training color={colorSel} />,
      text: "Tập luyện",
    },
    {
      name: "travel",
      svgTag: (colorSel: string) => <Travel color={colorSel} />,
      text: "Du lịch",
    },
    {
      name: "work",
      svgTag: (colorSel: string) => <Work color={colorSel} />,
      text: "Công việc",
    },
  ];

  const updateSelectedEmotion = (item: string) => {
    const copyArray = [...selectedEmotion];
    copyArray.push(item);
    setSelectedEmotion(copyArray);
  };
  return (
    <SafeAreaView className="absolute inset-0 bg-[#FFF4ED]">
      <KeyboardAwareScrollView>
        <View className=" relative top-0 right-0 items-end p-0">
          <Image
            className="h-auto object-fill"
            source={require("../../assets/images/emotion/topright.png")}
          />
        </View>

        <View className="absolute inset-x-0 z-10 mx-7 mt-16 items-end">
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

        <View className="inset-x-0 -mt-5 items-center justify-center">
          <View className="relative w-1/2">
            <Text
              className="text-center text-lg text-[#5A2D22]"
              style={styles().textFontBold}
            >
              Điều gì khiến bạn cảm thấy rất tệ?
            </Text>
          </View>
        </View>

        <View className="">
          <View className="mt-10" style={styles().itemsWrap}>
            {data.map((item) => {
              return (
                <>
                  <TouchableOpacity
                    key={item.name}
                    className={checkIndex(item, data)}
                    style={styles(3).singleItemCloser}
                    onPress={() => {
                      if (selectedEmotion.includes(item.name)) {
                        setSelectedEmotion(
                          selectedEmotion.filter((i) => i !== item.name),
                        );
                      } else {
                        updateSelectedEmotion(item.name);
                      }
                    }}
                  >
                    {!selectedEmotion.includes(item.name)
                      ? item.svgTag("#A5A5A5")
                      : item.svgTag("#FF835C")}
                    <Text
                      className={classNames(
                        !selectedEmotion.includes(item.name)
                          ? "text-[#A5A5A5]"
                          : "text-[#FF835C]",
                        "mt-2",
                      )}
                      style={styles().textFontSemiBold}
                    >
                      {item.text}
                    </Text>
                  </TouchableOpacity>
                </>
              );
            })}
          </View>
        </View>

        <View className="inset-x-0 mt-20 items-center">
          <Image
            className="mb-3"
            source={require("../../assets/images/emotion/slider1.png")}
          />
          <TouchableOpacity
            className="h-14 w-14 items-center justify-center rounded-full bg-[#7A9861]"
            onPress={() => {
              props.navigation.navigate("EmotionChoosing2");
            }}
          >
            <Image source={require("../../assets/images/emotion/arrow.png")} />
          </TouchableOpacity>
        </View>
        <View className="absolute -z-10">
          <Image source={require("../../assets/images/emotion/center.png")} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
