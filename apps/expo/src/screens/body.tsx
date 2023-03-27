import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../root";
import { ScreenProps } from "../types/navigation";

export const BodyScreen = (props: ScreenProps<"Body">) => {
  return (
    <SafeAreaView
      className="absolute"
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <ScrollView>
        <View>
          <TouchableOpacity className=" absolute inset-x-0 mx-2 mt-10">
            <View className="inset-x-0 flex w-full flex-row space-x-3">
              <View className="box-content rounded-2xl bg-white object-fill">
                <Image
                  className="m-2"
                  source={require("../assets/images/home/neutral.png")}
                />
              </View>
              <View className="inset-0flex-col relative flex  w-full justify-between">
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  DAILY CHECK IN
                </Text>
                <Text
                  className="text-[#FFFFFF]"
                  style={styles.textFontSemiBold}
                >
                  Hôm nay bạn cảm thấy thế nào?
                </Text>
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  Tạm ổn &#8226; 2 ngày trước
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity className=" inset-x-0 mx-2 mt-10">
            <View className="inset-x-0 flex w-full flex-row space-x-3">
              <View className="box-content rounded-2xl bg-white object-fill">
                <Image
                  className="m-2"
                  source={require("../assets/images/home/neutral.png")}
                />
              </View>
              <View className="inset-0flex-col relative flex  w-full justify-between">
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  DAILY CHECK IN
                </Text>
                <Text
                  className="text-[#FFFFFF]"
                  style={styles.textFontSemiBold}
                >
                  Hôm nay bạn cảm thấy thế nào?
                </Text>
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  Tạm ổn &#8226; 2 ngày trước
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity className=" inset-x-0 mx-2 mt-10">
            <View className="inset-x-0 flex w-full flex-row space-x-3">
              <View className="box-content rounded-2xl bg-white object-fill">
                <Image
                  className="m-2"
                  source={require("../assets/images/home/neutral.png")}
                />
              </View>
              <View className="inset-0flex-col relative flex  w-full justify-between">
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  DAILY CHECK IN
                </Text>
                <Text
                  className="text-[#FFFFFF]"
                  style={styles.textFontSemiBold}
                >
                  Hôm nay bạn cảm thấy thế nào?
                </Text>
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  Tạm ổn &#8226; 2 ngày trước
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity className=" inset-x-0 mx-2 mt-10">
            <View className="inset-x-0 flex w-full flex-row space-x-3">
              <View className="box-content rounded-2xl bg-white object-fill">
                <Image
                  className="m-2"
                  source={require("../assets/images/home/neutral.png")}
                />
              </View>
              <View className="inset-0flex-col relative flex  w-full justify-between">
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  DAILY CHECK IN
                </Text>
                <Text
                  className="text-[#FFFFFF]"
                  style={styles.textFontSemiBold}
                >
                  Hôm nay bạn cảm thấy thế nào?
                </Text>
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  Tạm ổn &#8226; 2 ngày trước
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity className=" inset-x-0 mx-2 mt-10">
            <View className="inset-x-0 flex w-full flex-row space-x-3">
              <View className="box-content rounded-2xl bg-white object-fill">
                <Image
                  className="m-2"
                  source={require("../assets/images/home/neutral.png")}
                />
              </View>
              <View className="inset-0flex-col relative flex  w-full justify-between">
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  DAILY CHECK IN
                </Text>
                <Text
                  className="text-[#FFFFFF]"
                  style={styles.textFontSemiBold}
                >
                  Hôm nay bạn cảm thấy thế nào?
                </Text>
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  Tạm ổn &#8226; 2 ngày trước
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity className=" inset-x-0 mx-2 mt-10">
            <View className="inset-x-0 flex w-full flex-row space-x-3">
              <View className="box-content rounded-2xl bg-white object-fill">
                <Image
                  className="m-2"
                  source={require("../assets/images/home/neutral.png")}
                />
              </View>
              <View className="inset-0flex-col relative flex  w-full justify-between">
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  DAILY CHECK IN
                </Text>
                <Text
                  className="text-[#FFFFFF]"
                  style={styles.textFontSemiBold}
                >
                  Hôm nay bạn cảm thấy thế nào?
                </Text>
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  Tạm ổn &#8226; 2 ngày trước
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity className=" inset-x-0 mx-2 mt-10">
            <View className="inset-x-0 flex w-full flex-row space-x-3">
              <View className="box-content rounded-2xl bg-white object-fill">
                <Image
                  className="m-2"
                  source={require("../assets/images/home/neutral.png")}
                />
              </View>
              <View className="inset-0flex-col relative flex  w-full justify-between">
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  DAILY CHECK IN
                </Text>
                <Text
                  className="text-[#FFFFFF]"
                  style={styles.textFontSemiBold}
                >
                  Hôm nay bạn cảm thấy thế nào?
                </Text>
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  Tạm ổn &#8226; 2 ngày trước
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity className=" inset-x-0 mx-2 mt-10">
            <View className="inset-x-0 flex w-full flex-row space-x-3">
              <View className="box-content rounded-2xl bg-white object-fill">
                <Image
                  className="m-2"
                  source={require("../assets/images/home/neutral.png")}
                />
              </View>
              <View className="inset-0flex-col relative flex  w-full justify-between">
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  DAILY CHECK IN
                </Text>
                <Text
                  className="text-[#FFFFFF]"
                  style={styles.textFontSemiBold}
                >
                  Hôm nay bạn cảm thấy thế nào?
                </Text>
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  Tạm ổn &#8226; 2 ngày trước
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity className=" inset-x-0 mx-2 mt-10">
            <View className="inset-x-0 flex w-full flex-row space-x-3">
              <View className="box-content rounded-2xl bg-white object-fill">
                <Image
                  className="m-2"
                  source={require("../assets/images/home/neutral.png")}
                />
              </View>
              <View className="inset-0flex-col relative flex  w-full justify-between">
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  DAILY CHECK IN
                </Text>
                <Text
                  className="text-[#FFFFFF]"
                  style={styles.textFontSemiBold}
                >
                  Hôm nay bạn cảm thấy thế nào?
                </Text>
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  Tạm ổn &#8226; 2 ngày trước
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity className=" inset-x-0 mx-2 mt-10">
            <View className="inset-x-0 flex w-full flex-row space-x-3">
              <View className="box-content rounded-2xl bg-white object-fill">
                <Image
                  className="m-2"
                  source={require("../assets/images/home/neutral.png")}
                />
              </View>
              <View className="inset-0flex-col relative flex  w-full justify-between">
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  DAILY CHECK IN
                </Text>
                <Text
                  className="text-[#FFFFFF]"
                  style={styles.textFontSemiBold}
                >
                  Hôm nay bạn cảm thấy thế nào?
                </Text>
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  Tạm ổn &#8226; 2 ngày trước
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity className=" inset-x-0 mx-2 mt-10">
            <View className="inset-x-0 flex w-full flex-row space-x-3">
              <View className="box-content rounded-2xl bg-white object-fill">
                <Image
                  className="m-2"
                  source={require("../assets/images/home/neutral.png")}
                />
              </View>
              <View className="inset-0flex-col relative flex  w-full justify-between">
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  DAILY CHECK IN
                </Text>
                <Text
                  className="text-[#FFFFFF]"
                  style={styles.textFontSemiBold}
                >
                  Hôm nay bạn cảm thấy thế nào?
                </Text>
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  Tạm ổn &#8226; 2 ngày trước
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity className=" inset-x-0 mx-2 mt-10">
            <View className="inset-x-0 flex w-full flex-row space-x-3">
              <View className="box-content rounded-2xl bg-white object-fill">
                <Image
                  className="m-2"
                  source={require("../assets/images/home/neutral.png")}
                />
              </View>
              <View className="inset-0flex-col relative flex  w-full justify-between">
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  DAILY CHECK IN
                </Text>
                <Text
                  className="text-[#FFFFFF]"
                  style={styles.textFontSemiBold}
                >
                  Hôm nay bạn cảm thấy thế nào?
                </Text>
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  Tạm ổn &#8226; 2 ngày trước
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity className=" inset-x-0 mx-2 mt-10">
            <View className="inset-x-0 flex w-full flex-row space-x-3">
              <View className="box-content rounded-2xl bg-white object-fill">
                <Image
                  className="m-2"
                  source={require("../assets/images/home/neutral.png")}
                />
              </View>
              <View className="inset-0flex-col relative flex  w-full justify-between">
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  DAILY CHECK IN
                </Text>
                <Text
                  className="text-[#FFFFFF]"
                  style={styles.textFontSemiBold}
                >
                  Hôm nay bạn cảm thấy thế nào?
                </Text>
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  Tạm ổn &#8226; 2 ngày trước
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity className=" inset-x-0 mx-2 mt-10">
            <View className="inset-x-0 flex w-full flex-row space-x-3">
              <View className="box-content rounded-2xl bg-white object-fill">
                <Image
                  className="m-2"
                  source={require("../assets/images/home/neutral.png")}
                />
              </View>
              <View className="inset-0flex-col relative flex  w-full justify-between">
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  DAILY CHECK IN
                </Text>
                <Text
                  className="text-[#FFFFFF]"
                  style={styles.textFontSemiBold}
                >
                  Hôm nay bạn cảm thấy thế nào?
                </Text>
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  Tạm ổn &#8226; 2 ngày trước
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity className=" inset-x-0 mx-2 mt-10">
            <View className="inset-x-0 flex w-full flex-row space-x-3">
              <View className="box-content rounded-2xl bg-white object-fill">
                <Image
                  className="m-2"
                  source={require("../assets/images/home/neutral.png")}
                />
              </View>
              <View className="inset-0flex-col relative flex  w-full justify-between">
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  DAILY CHECK IN
                </Text>
                <Text
                  className="text-[#FFFFFF]"
                  style={styles.textFontSemiBold}
                >
                  Hôm nay bạn cảm thấy thế nào?
                </Text>
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  Tạm ổn &#8226; 2 ngày trước
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity className=" inset-x-0 mx-2 mt-10">
            <View className="inset-x-0 flex w-full flex-row space-x-3">
              <View className="box-content rounded-2xl bg-white object-fill">
                <Image
                  className="m-2"
                  source={require("../assets/images/home/neutral.png")}
                />
              </View>
              <View className="inset-0flex-col relative flex  w-full justify-between">
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  DAILY CHECK IN
                </Text>
                <Text
                  className="text-[#FFFFFF]"
                  style={styles.textFontSemiBold}
                >
                  Hôm nay bạn cảm thấy thế nào?
                </Text>
                <Text className="text-[#DED5C6]" style={styles.textFont}>
                  Tạm ổn &#8226; 2 ngày trước
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
