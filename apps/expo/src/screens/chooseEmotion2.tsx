import { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
enum Emotion {
  HAPPY = "VUI VẺ",
  EXCITED = "TUYỆT VỜI",
  SAD = "BUỒN BÃ",
  TERRIBLE = "TỒI TỆ",
  NEUTRAL = "TẠM ỔN",
}
export const EmotionChoosing2 = () => {
  const [selectedPic, setSelectedPic] = useState(
    require("../assets/images/emotion/excitedlg.png"),
  );

  const [selectedEmotion, setSelectedEmotion] = useState(Emotion.EXCITED);

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
  return (
    <SafeAreaView className="absolute inset-0 grid grid-cols-2 grid-rows-2 space-x-5 bg-[#FFF4ED]">
      {data.map((item) => {
        return (
          <>
            <View className="h-1/2 rounded-2xl border-black">
              <Text>{item}</Text>
            </View>
          </>
        );
      })}
    </SafeAreaView>
  );
};
