import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Comment from "../../assets/svgs/things/comment";
import ReactHeart from "../../assets/svgs/things/reactHeart";
import { styles } from "../../root";
import { RootStackParamList } from "../../types/navigation";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Tab = createBottomTabNavigator<RootStackParamList>();

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const GroupPost = ({ setVisible, setOpenModal }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [showPostButton, setShowPostButton] = useState(true);
  let offset = 0;
  return (
    <>
      <FlatList
        className="relative top-0 max-h-fit bg-[#FFF4ED]"
        data={data}
        onScroll={(e) => {
          const currentOffset = e.nativeEvent.contentOffset.y;
          const direction = currentOffset > offset ? "down" : "up";
          offset = currentOffset;
          if (direction === "down") {
            setShowPostButton(false);
          }
          if (currentOffset < 0 || currentOffset === 0) {
            setShowPostButton(true);
          }
          direction === "down" ? setVisible(false) : null;
          currentOffset < 0 || currentOffset === 0 ? setVisible(true) : null;
          console.log(direction);
        }}
        renderItem={(item) => {
          return (
            <>
              <View className="mb-3 flex flex-col rounded-xl bg-[#FFFFFF] p-4 ">
                <View className="ml-4 flex h-14 flex-row space-x-2 ">
                  <View className="box-content h-12 w-12 overflow-hidden rounded-full bg-slate-50">
                    <Image
                      className="relative max-h-full max-w-full rounded-full"
                      source={require("../../assets/images/group/avatarTest.png")}
                    />
                  </View>
                  <View className="justify-center">
                    <Text
                      style={styles().textFontBold}
                      className="text-[#5A2D22]"
                    >
                      Nguyễn Nguyên + {item.item}
                    </Text>
                    <Text
                      style={styles().textFont}
                      className="text-base text-[#9B9B9B]"
                    >
                      4 giờ trước
                    </Text>
                  </View>
                </View>
                <View className="mx-4 mt-3">
                  <Text className="text-justify" style={styles().textFont}>
                    Chỉ cho đến khi bạn hiểu ra rằng mình là bất diệt, là vĩnh
                    hằng, là vô tận, bạn mới biết điều gì là thực sự quan trọng
                    ở đời này.
                  </Text>
                </View>
                <View className="ml-4 mt-2">
                  <TouchableOpacity>
                    <Text
                      style={styles().textFontBold}
                      className="text-[#FF835C]"
                    >
                      Đọc thêm
                    </Text>
                  </TouchableOpacity>
                </View>

                <View className="ml-4 mt-4 flex flex-row space-x-5">
                  <TouchableOpacity className="flex flex-row items-center space-x-1">
                    <ReactHeart color="#5A2D22" />
                    <Text
                      className="text-lg text-[#5A2D22]"
                      style={styles().textFont}
                    >
                      6
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex flex-row items-center space-x-1">
                    <Comment color="#5A2D22" />
                    <Text
                      className="text-lg text-[#5A2D22]"
                      style={styles().textFont}
                    >
                      6
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          );
        }}
      ></FlatList>

      <View
        className={
          showPostButton
            ? "absolute inset-x-0 z-10 mt-60 h-16 items-center   "
            : "hidden"
        }
      >
        <TouchableOpacity
          className="h-full w-2/3 items-center justify-center rounded-full bg-[#7A9861]"
          disabled={!showPostButton}
          onPress={() => {
            setOpenModal(true);
          }}
        >
          <Text className="text-[#FFFFFF]" style={styles().textFontSemiBold}>
            Đăng bài lên nhóm
          </Text>
        </TouchableOpacity>
      </View>
    </>
    // <View className="h-10 w-full bg-[#000000]"></View>
    /* <ScrollView
        className="top-0 -mt-4"
        // onScrollBeginDrag={() => {
        //   setVisible(false);
        // }}
        scrollEventThrottle={16}
        overScrollMode="never"
        pagingEnabled={true}
        onScrollEndDrag={(e) => {
          const currentOffset = e.nativeEvent.contentOffset.y;
          const direction = currentOffset > offset ? "down" : "up";
          offset = currentOffset;
          direction === "down" ? setVisible(false) : setVisible(true);
          console.log(direction);
        }}
        // onScrollToTop={() => {
        //   setVisible(true);
        // }}
        stickyHeaderHiddenOnScroll
      >
        <View className=" top-0 flex flex-col">
          {data.map((item) => {
            return (
              <>
                <View
                  key={item}
                  className="mb-3 flex flex-col rounded-xl bg-white p-4 "
                >
                  <View className="ml-4 flex h-fit flex-row space-x-2 ">
                    <View className="box-content h-12 w-12 overflow-hidden rounded-full bg-slate-50">
                      <Image
                        className="relative max-h-full max-w-full rounded-full"
                        source={require("../../assets/images/group/avatarTest.png")}
                      />
                    </View>
                    <View className="justify-center">
                      <Text
                        style={styles().textFontBold}
                        className="text-[#5A2D22]"
                      >
                        Nguyễn Nguyên
                      </Text>
                      <Text
                        style={styles().textFont}
                        className="text-base text-[#9B9B9B]"
                      >
                        4 giờ trước
                      </Text>
                    </View>
                  </View>
                  <View className="mx-4 mt-3">
                    <Text className="text-justify" style={styles().textFont}>
                      Chỉ cho đến khi bạn hiểu ra rằng mình là bất diệt, là vĩnh
                      hằng, là vô tận, bạn mới biết điều gì là thực sự quan
                      trọng ở đời này.
                    </Text>
                  </View>
                  <View className="ml-4 mt-2">
                    <TouchableOpacity>
                      <Text
                        style={styles().textFontBold}
                        className="text-[#FF835C]"
                      >
                        Đọc thêm
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View className="ml-4 mt-4 flex flex-row space-x-5">
                    <TouchableOpacity className="flex flex-row items-center space-x-1">
                      <Heart color="#5A2D22" />
                      <Text
                        className="text-lg text-[#5A2D22]"
                        style={styles().textFont}
                      >
                        6
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex flex-row items-center space-x-1">
                      <Message color="#5A2D22" />
                      <Text
                        className="text-lg text-[#5A2D22]"
                        style={styles().textFont}
                      >
                        6
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            );
          })}
        </View>
      </ScrollView> */
    /* </SafeAreaView> */
  );
};
