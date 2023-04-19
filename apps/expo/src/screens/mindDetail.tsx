import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../root";
import { ScreenProps } from "../types/navigation";

const options = [
  {
    name: "Yêu thích",
    image: require("../assets/images/mindDetail/Heart.png"),
  },
  {
    name: "Bình luận",
    image: require("../assets/images/mindDetail/Chat.png"),
  },
  {
    name: "Lưu",
    image: require("../assets/images/mindDetail/bookmark.png"),
  },
  {
    name: "Chia sẻ",
    image: require("../assets/images/mindDetail/Share.png"),
  },
];
const comments = [
  {
    username: "Julie Nguyen",
    avatar: require("../assets/images/music/Avatar.png"),
    content: "Cảm ơn bạn đã chia sẻ",
  },
  {
    username: "Julie Nguyen",
    avatar: require("../assets/images/music/Avatar.png"),
    content: "Thật tuyệt vời",
  },
  {
    username: "Julie Nguyen",
    avatar: require("../assets/images/music/Avatar.png"),
    content: "Thật tuyệt vời",
  },
  {
    username: "Julie Nguyen",
    avatar: require("../assets/images/music/Avatar.png"),
    content: "Thật tuyệt vời",
  },
];

const list = [
  {
    id: 1,
    name: "Thiền về tình yêu",
    image: require("../assets/images/mind/Rectangle_1245.png"),
    time: 21,
    heart: 22,
    date: "11.02.2023",
  },
  {
    id: 2,
    name: "Thiền về tình yêu",
    image: require("../assets/images/mind/Rectangle_1245.png"),
    time: 21,
    heart: 2,
    date: "11.02.2023",
  },
  {
    id: 3,
    name: "Thiền về tình yêu",
    image: require("../assets/images/mind/Rectangle_1245.png"),
    time: 21,
    heart: 2,
    date: "11.02.2023",
  },
  {
    id: 4,
    name: "Thiền về tình yêu",
    image: require("../assets/images/mind/Rectangle_1245.png"),
    time: 21,
    heart: 2,
    date: "11.02.2023",
  },
  {
    id: 5,
    name: "Thiền về tình yêu",
    image: require("../assets/images/mind/Rectangle_1245.png"),
    time: 21,
    heart: 2,
    date: "11.02.2023",
  },
  {
    id: 6,
    name: "Thiền về tình yêu",
    image: require("../assets/images/mind/Rectangle_1245.png"),
    time: 21,
    heart: 2,
    date: "11.02.2023",
  },
];

export const MindDetailScreen = (props: ScreenProps<"MindDetail">) => {
  const mind = props.route.params.mind;
  return (
    <SafeAreaView className="absolute inset-0 content-end bg-[#FFF4ED]">
      <Text>Mind Detail</Text>
      <Image
        source={require("../assets/images/mindDetail/Group_36894.png")}
        className="absolute inset-x-0 top-0"
      />
      <TouchableOpacity onPress={() => props.navigation.navigate("Mind")}>
        <Image
          source={require("../assets/images/mindDetail/Group_36629.png")}
          className="absolute top-4 left-4"
        />
      </TouchableOpacity>
      <View className="absolute inset-x-0 top-80 h-1/2 px-6">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text
              className="text-lg text-[#5A2D22]"
              style={styles().textFontSemiBold}
            >
              {mind.name}
            </Text>
            <View className="ml-1 mt-2 flex flex-row items-center gap-2">
              <Image
                source={require("../assets/images/mindDetail/Vector.png")}
              />
              <Text
                className="text-base text-[#b2b2b2]"
                style={styles().textFontSemiBold}
              >
                {mind.heart}
              </Text>
              <Image
                source={require("../assets/images/mindDetail/Ellipse_208.png")}
              />
              <Text
                className="font-base text-[#b2b2b2]"
                style={styles().textFontSemiBold}
              >
                {mind.date}
              </Text>
              <Image
                source={require("../assets/images/mindDetail/Ellipse_208.png")}
              />
              <Text
                className="font-base text-[#b2b2b2]"
                style={styles().textFontSemiBold}
              >
                {`${mind.time} phút`}
              </Text>
            </View>
            <TouchableOpacity className="mt-5 rounded-lg bg-[#7A9861] py-2">
              <View className="m-auto flex flex-row items-center">
                <Image
                  source={require("../assets/images/mindDetail/Frame.png")}
                />
                <Text
                  className="text-lg text-white"
                  style={styles().textFontBold}
                >
                  Play
                </Text>
              </View>
            </TouchableOpacity>

            <View className="mt-5 flex flex-row justify-around">
              {options.map((option) => (
                <TouchableOpacity
                  key={option.name}
                  className="flex h-20 w-20 flex-col items-center justify-center rounded-lg bg-white p-2"
                >
                  <Image source={option.image} />
                  <Text
                    className="text-xs text-[#97776D]"
                    style={styles().textFontSemiBold}
                  >
                    {option.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text
              className="mt-5 text-sm text-[#5A2D22]"
              style={styles().textFont}
            >
              {mind.description}
            </Text>
            <View className="mt-5">
              <View className="flex flex-row justify-between">
                <Text
                  className="text-base text-[#5A2D22]"
                  style={styles().textFontSemiBold}
                >
                  Bình luận
                </Text>
                <TouchableOpacity>
                  <Text
                    className="text-sm text-[#FF835C]"
                    style={styles().textFontSemiBold}
                  >
                    Xem thêm
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="mt-5 h-24">
                <ScrollView
                  horizontal={true}
                  className=""
                  showsHorizontalScrollIndicator={false}
                >
                  <View className="flex flex-row gap-3">
                    {comments.map((comment, index) => (
                      <View
                        key={index}
                        className="w-80 rounded-md bg-white p-2"
                      >
                        <View className="flex flex-row items-center gap-2 ">
                          <Image
                            source={comment.avatar}
                            className="h-10 w-10 rounded-full"
                          />
                          <View>
                            <Text
                              className="text-sm text-[#5a2d22]"
                              style={styles().textFontSemiBold}
                            >
                              {comment.username}
                            </Text>
                            <Text
                              className="text-sm text-[#3C3C43]"
                              style={styles().textFont}
                            >
                              2 giờ trước
                            </Text>
                          </View>
                        </View>
                        <Text
                          className="mt-2 text-sm text-[#5a2d22]"
                          style={styles().textFont}
                        >
                          {comment.content}
                        </Text>
                      </View>
                    ))}
                  </View>
                </ScrollView>
              </View>
            </View>
            <View className="mt-5 flex flex-row justify-between">
              <Text
                className="text-base text-[#5A2D22]"
                style={styles().textFontSemiBold}
              >
                Liên quan
              </Text>
              <TouchableOpacity>
                <Text
                  className="text-sm text-[#FF835C]"
                  style={styles().textFontSemiBold}
                >
                  Xem thêm
                </Text>
              </TouchableOpacity>
            </View>

            <View className="mt-5 h-52">
              <ScrollView
                horizontal={true}
                className=""
                showsHorizontalScrollIndicator={false}
              >
                <View className="flex flex-row gap-3">
                  {list.map((item) => (
                    <View key={item.id}>
                      <TouchableOpacity
                        onPress={() =>
                          props.navigation.navigate("MindDetail", {
                            mind: item,
                          })
                        }
                      >
                        <View className="">
                          <Image
                            source={item.image}
                            className="h-40 w-40 rounded-lg object-cover"
                          />
                          <View className="absolute bottom-2 left-2 right-6 flex flex-row items-center justify-between">
                            <Text className="text-xs text-white">{`${item.time} phút`}</Text>
                            <Image
                              source={require("../assets/images/mind/Group_36586.png")}
                              className=""
                            />
                          </View>
                        </View>
                        <View className="mt-2">
                          <Text
                            className="text-[#5A2D22]"
                            style={styles().textFontBold}
                          >
                            {item.name}
                          </Text>
                          <View className="flex flex-row items-center gap-2">
                            <Image
                              source={require("../assets/images/mind/Heart.png")}
                            />
                            <Text
                              className="text-xs text-[#B2B2B2]"
                              style={styles().textFont}
                            >{`${item.heart}`}</Text>
                            <Image
                              source={require("../assets/images/mind/Ellipse_206.png")}
                            />
                            <Text
                              className="text-xs text-[#B2B2B2]"
                              style={styles().textFont}
                            >
                              {item.date}
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
