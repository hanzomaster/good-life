import { useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenProps } from "../types/navigation";
import { styles } from "../root";
import Study from "../assets/svgs/things/study";

export const MindScreen = (props: ScreenProps<"Mind">) => {
  const [isPressed, setIsPressed] = useState(false);

  const suggest = [
    {
      name: "Gợi ý",
    },
    {
      name: "Thiền",
    },
    {
      name: "Mind lessons",
    },
    {
      name: "Q & A",
    },
    {
      name: "Tâm trí",
    },
    {
      name: "Healing",
    },
  ];

  const lists = [
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
  const [isActive, setIsActive] = useState("Gợi ý");

  return (
    <SafeAreaView className="absolute inset-0 content-end bg-[#FFF4ED]">
      <View className="absolute top-0 left-0">
        <Image
          source={require("../assets/images/mind/Group_36924.png")}
          className=""
        />
      </View>
      <View className="absolute inset-x-0 mt-16 items-center">
        <Text className=" text-2xl font-semibold text-white">Mind</Text>
      </View>
      <TouchableOpacity
        onPress={() => {}}
        className="absolute right-0 mt-20 mr-5"
      >
        <Image source={require("../assets/images/mind/Vector.png")} />
      </TouchableOpacity>

      <View className="absolute mt-40 h-full px-5">
        <View className="flex flex-row gap-10">
          <TouchableOpacity onPress={() => setIsPressed(!isPressed)}>
            <Text
              className={`${
                !isPressed ? "text-[#FF8669]" : "text-[#9B9B9BE0]/80"
              }
            mb-2 text-xl font-semibold`}
              style={styles().textFont}
            >
              Tâm trí
            </Text>
            {!isPressed && (
              <Image
                source={require("../assets/images/mind/Rectangle_1315.png")}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsPressed(!isPressed)}>
            <Text
              className={`${
                isPressed ? "text-[#FF8669]" : "text-[#9B9B9BE0]/80"
              }
            mb-2 text-xl font-semibold`}
              style={styles().textFont}
            >
              Âm nhạc
            </Text>
            {isPressed && (
              <Image
                source={require("../assets/images/mind/Rectangle_1315.png")}
              />
            )}
          </TouchableOpacity>
        </View>

        <View className="mt-5">
          <View
            className="flex w-full flex-row items-center border-2  border-[#FF835C33]/20 bg-[#FFF4ED] px-3 py-1"
            style={{
              borderRadius: 10,
            }}
          >
            <Image source={require("../assets/images/mind/Icon.png")} />
            <TextInput
              placeholder="Tìm kiếm"
              className="w-11/12 px-2 py-1 text-sm text-[#9B9B9B]"
            />
          </View>
        </View>

        <View className="mt-8 h-12">
          <ScrollView
            horizontal={true}
            className=""
            showsHorizontalScrollIndicator={false}
          >
            <View className="flex flex-row gap-3">
              {suggest.map((item) => (
                <TouchableOpacity
                  key={item.name}
                  onPress={() => setIsActive(item.name)}
                  className={`${
                    isActive === item.name ? "bg-[#7A9861]" : "bg-white "
                  }
            flex flex-row items-center rounded-lg px-4 text-sm font-semibold`}
                >
                  <Text
                    className={`${
                      isActive === item.name ? "text-white" : "text-[#9b9b9b]"
                    }`}
                    style={styles().textFont}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        <View className="mt-8 h-96">
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles().itemsWrap}>
              {lists.map((item) => (
                <View key={item.id} style={styles(2).singleItem}>
                  <TouchableOpacity>
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
    </SafeAreaView>
  );
};
