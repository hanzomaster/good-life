import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { styles } from "../../root";
import { RootStackParamList } from "../../types/navigation";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Tab = createBottomTabNavigator<RootStackParamList>();

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const GroupLib = ({ setVisible }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  let offset = 0;
  return (
    // <SafeAreaView className="absolute inset-0 bg-[#FFF4ED]">
    <View>
      <FlatList
        className="relative top-0"
        data={data}
        onScroll={(e) => {
          const currentOffset = e.nativeEvent.contentOffset.y;
          const direction = currentOffset > offset ? "down" : "up";
          offset = currentOffset;
          direction === "down" ? setVisible(false) : null;
          currentOffset < 0 || currentOffset === 0 ? setVisible(true) : null;
          //   // console.log(direction);
          // console.log("current: " + offset);
        }}
        renderItem={(item) => {
          return (
            <>
              <View className="mb-1 flex flex-col rounded-xl bg-white p-4 ">
                <View className="ml-4 flex h-fit flex-row space-x-2 ">
                  <View className="box-content h-16 w-16 overflow-hidden rounded-xl bg-slate-50">
                    <Image
                      className="relative max-h-full max-w-full rounded-xl"
                      source={require("../../assets/images/group/musicAva.png")}
                    />
                  </View>
                  <View className="justify-center">
                    <View className="flex flex-row items-baseline">
                      <Image
                        source={require("../../assets/images/home/heart.png")}
                      />
                      <Text
                        className="text-xs text-[#B2B2B2]"
                        style={styles().textFont}
                      >
                        {" "}
                        65 &#8226; 11.02.2023
                      </Text>
                    </View>
                    <Text
                      style={styles().textFontBold}
                      className="text-[#5A2D22]"
                    >
                      Ngủ ngon - Nhạc không lời + {item.item}
                    </Text>
                    <Text
                      style={styles().textFont}
                      className="text-xs text-[#9B9B9B]"
                    >
                      04 giờ trước
                    </Text>
                  </View>
                </View>
              </View>
            </>
          );
        }}
      ></FlatList>
    </View>
  );
};
