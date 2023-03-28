import { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../root";

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
export const EmotionChoosing = () => {
  const [selectedPic, setSelectedPic] = useState(
    require("../assets/images/emotion/excitedlg.png"),
  );

  const [selectedEmotion, setSelectedEmotion] = useState(Emotion.EXCITED);

  return (
    <SafeAreaView className="absolute inset-0 content-end bg-[#FFF4ED]">
      <View className=" relative top-0 left-auto p-0">
        <Image
          className=""
          source={require("../assets/images/emotion/topleft.png")}
        />
      </View>
      <View className=" inset-x-0 -mt-12 items-center justify-center">
        <Text
          className="w-3/4 flex-wrap  text-center text-base text-[#5A2D22]"
          style={styles.textFontSemiBold}
        >
          Chào bạn! Hôm nay bạn cảm thấy như thế nào?
        </Text>
      </View>
      <View className="inset-x-0 mt-6 items-center justify-center ">
        <Image
          className=""
          source={
            selectedPic
              ? selectedPic
              : require("../assets/images/emotion/excitedlg.png")
          }
        />
        <View className="inset-x-0 mt-7 box-content flex flex-row space-x-6 rounded-full bg-white p-3">
          <TouchableOpacity
            onPress={() => {
              setSelectedPic(
                require("../assets/images/emotion/terriblelg.png"),
              );
              setSelectedEmotion(Emotion.TERRIBLE);
            }}
          >
            <Image
              className={classNames(
                selectedEmotion === Emotion.TERRIBLE
                  ? "scale-125 shadow-black drop-shadow-2xl"
                  : "",
              )}
              source={require("../assets/images/emotion/terrible.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedPic(require("../assets/images/emotion/sadlg.png"));
              setSelectedEmotion(Emotion.SAD);
            }}
          >
            <Image
              className={classNames(
                selectedEmotion === Emotion.SAD ? "scale-125" : "",
              )}
              source={require("../assets/images/emotion/sad.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedPic(require("../assets/images/emotion/neutrallg.png"));
              setSelectedEmotion(Emotion.NEUTRAL);
            }}
          >
            <Image
              className={classNames(
                selectedEmotion === Emotion.NEUTRAL ? "scale-125" : "",
              )}
              source={require("../assets/images/emotion/neutral.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedPic(require("../assets/images/emotion/happylg.png"));
              setSelectedEmotion(Emotion.HAPPY);
            }}
          >
            <Image
              className={classNames(
                selectedEmotion === Emotion.HAPPY ? "scale-125" : "",
              )}
              source={require("../assets/images/emotion/happy.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedPic(require("../assets/images/emotion/excitedlg.png"));
              setSelectedEmotion(Emotion.EXCITED);
            }}
          >
            <Image
              className={classNames(
                selectedEmotion === Emotion.EXCITED ? "scale-125" : "",
              )}
              source={require("../assets/images/emotion/excited.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View className="inset-x-0 mt-16 flex h-20 flex-col items-center justify-center space-x-3 ">
        <View className="mb-3">
          <Image source={require("../assets/images/emotion/slider.png")} />
        </View>
        <TouchableOpacity className=" h-5/6 w-2/3 items-center justify-center rounded-full bg-[#7A9861]">
          <View className="flex flex-row items-center justify-between space-x-4">
            <Text
              className="ml-3 text-xl text-white"
              style={styles.textFontSemiBold}
            >
              {selectedEmotion}
            </Text>

            <Image source={require("../assets/images/emotion/arrow.png")} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
