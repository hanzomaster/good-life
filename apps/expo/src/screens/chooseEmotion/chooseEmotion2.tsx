import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../../root";

import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const EmotionChoosing2 = () => {
  const [selectedEmotion, setSelectedEmotion] = useState<string[]>([]);
  const navigation = useNavigation();
  const [value, onChangeText] = useState("");

  const data = [
    "Chán",
    "Mệt mỏi",
    "Stress",
    "Bị làm phiền",
    "Giận dữ",
    "Cô đơn",
    "Đau đớn",
    "Thất vọng",
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
          <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-[#FFFFFF]">
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
              Cảm xúc của bạn như thế nào?
            </Text>
          </View>
        </View>

        <View className="">
          <View className="mt-10" style={styles().itemsWrap}>
            {data.map((item) => {
              return (
                <>
                  <TouchableOpacity
                    key={item}
                    className={classNames(
                      selectedEmotion.includes(item)
                        ? "bg-[#7A9861]"
                        : "bg-[#FFFFFF]",
                      "inset-y-0 h-12 items-center justify-center rounded-xl",
                    )}
                    style={styles(2).singleItem}
                    onPress={() => {
                      if (selectedEmotion.includes(item)) {
                        setSelectedEmotion(
                          selectedEmotion.filter((i) => i !== item),
                        );
                      } else {
                        updateSelectedEmotion(item);
                      }
                    }}
                  >
                    <Text
                      className={classNames(
                        selectedEmotion.includes(item)
                          ? "text-[#FFFFFF]"
                          : "text-[#A5A5A5]",
                      )}
                      style={styles().textFontSemiBold}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                </>
              );
            })}
          </View>
        </View>

        <View className="inset-x-0 mx-6 mt-10 mb-20 h-auto justify-center rounded-lg border border-[#FF835C]/20">
          <View>
            <TextInput
              className="overflow-y-scroll p-2 text-[#5A2D22]"
              editable
              multiline
              numberOfLines={4}
              onChangeText={(text) => onChangeText(text)}
              value={value}
              placeholder="Chia sẻ về ngày hôm nay của bạn."
              style={Object.assign({ maxHeight: 80 }, styles().textFont)}
            />
          </View>
        </View>

        <View className="relative inset-x-0 items-center">
          <Image
            className="mb-4"
            source={require("../../assets/images/emotion/slider2.png")}
          />
          <TouchableOpacity
            className="h-14 w-14 items-center justify-center rounded-full bg-[#7A9861]"
            onPress={() => {
              navigation.navigate("EmotionChoosing" as never);
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
