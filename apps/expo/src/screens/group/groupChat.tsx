import { useState } from "react";
import { Image, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "../../root";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const data = [1, 2, 3, 4, 5, 7, 9, 65, 34, , 55, 44];

export const GroupChat = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <KeyboardAwareScrollView>
      <View>
        <View className="mb-3 flex flex-col rounded-xl bg-[#FFFFFF] p-3 ">
          <View className="inset-x-0 ml-2 flex h-auto flex-row space-x-2 ">
            <View className="box-content h-9 w-9 overflow-hidden rounded-full bg-slate-50">
              <Image
                className="relative max-h-full max-w-full rounded-full"
                source={require("../../assets/images/group/avatarTest.png")}
              />
            </View>
            <View className="">
              <View className="flex w-36 flex-row items-baseline justify-between space-x-4">
                <Text
                  style={styles().textFontBold}
                  className="text-sm text-[#5A2D22]"
                >
                  Nguyễn Nguyên
                </Text>
                <Text
                  style={styles().textFont}
                  className="text-xs text-[#9B9B9B]"
                >
                  4 giờ trước
                </Text>
              </View>
              <View className=" mt-3 mr-10 ">
                <Text
                  className="relative flex-wrap text-justify text-[#5A2D22]"
                  style={styles().textFont}
                >
                  Chỉ cho đến khi bạn hiểu ra rằng mình là bất diệt, là vĩnh
                  hằng, là vô tận, bạn mới biết điều gì là thực sự quan trọng ở
                  đời này.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
