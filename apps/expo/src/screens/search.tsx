import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../root";

const for_you = [
  {
    name: "Thiền buổi sáng",
    image: require("../assets/images/home/testpic.png"),
    time: 21,
    heart: 2,
    date: "11.02.2023",
  },
  {
    name: "Thiền buổi sáng",
    image: require("../assets/images/home/testpic.png"),
    time: 21,
    heart: 2,
    date: "11.02.2023",
  },
  {
    name: "Thiền buổi sáng",
    image: require("../assets/images/home/testpic.png"),
    time: 21,
    heart: 2,
    date: "11.02.2023",
  },
];

const newVid = [
  {
    name: "Thiền buổi tối",
    image: require("../assets/images/home/testnewcontentpic.png"),
    time: 21,
    heart: 2,
    date: "11.02.2023",
  },
  {
    name: "Thiền buổi tối",
    image: require("../assets/images/home/testnewcontentpic.png"),
    time: 21,
    heart: 2,
    date: "11.02.2023",
  },
  {
    name: "Thiền buổi tối",
    image: require("../assets/images/home/testnewcontentpic.png"),
    time: 21,
    heart: 2,
    date: "11.02.2023",
  },
];

export const Search = () => {
  return (
    <SafeAreaView className="absolute inset-0 content-end bg-[#FFF4ED]">
      <View className="absolute top-0 left-0">
        <Image
          className="h-auto object-cover"
          source={require("../assets/images/search/header.png")}
        />
        <View className="absolute top-10 flex flex-row p-1 align-baseline">
          <TouchableOpacity className=" ">
            <Image
              className="ml-5"
              source={require("../assets/images/search/back.png")}
            />
          </TouchableOpacity>
          <Text
            className=" font-quicksand ml-8 text-2xl text-white "
            style={styles().textFontBold}
          >
            Tìm kiếm
          </Text>
        </View>
      </View>
      <View className=" mt-32">
        <View className=" ml-3 mr-3 flex flex-row items-center rounded-lg bg-[#FFFFFF] px-3 py-1">
          <Image source={require("../assets/images/search/Icon.png")} />
          <TextInput
            placeholder="Tìm kiếm"
            className="px-2 py-1 text-sm text-[#9B9B9B]"
          />
        </View>
      </View>

      <View>
        <View className="inset-x-0 mx-3 mt-5 flex flex-row items-baseline justify-between">
          <Text
            className="text-lg text-[#6D463C]"
            style={styles().textFontSemiBold}
          >
            Dành cho bạn
          </Text>
          <TouchableOpacity>
            <Text className="text-sm text-[#FF835C]" style={styles().textFont}>
              Xem thêm
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        className=" mt-5"
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <ScrollView
          horizontal
          className="flex h-fit"
          alwaysBounceHorizontal
          alwaysBounceVertical={false}
        >
          <View className=" relative ml-3 flex w-4/5 flex-row space-x-6">
            {for_you.map((item) => {
              return (
                <TouchableOpacity className="">
                  <View className="relative box-content">
                    <Image
                      className=" rounded-lg object-fill"
                      source={item.image}
                    />
                    <View className="absolute bottom-2 left-4 rounded-2xl bg-slate-900/40 bg-opacity-10 p-1 ">
                      <Text className="text-white" style={styles().textFont}>
                        {item.time} phút
                      </Text>
                    </View>
                    <View className="absolute bottom-2 right-2 rounded-2xl">
                      <Image
                        className="h-6 w-6 object-fill"
                        source={require("../assets/images/physique/play.png")}
                      />
                    </View>
                  </View>

                  <View className="mt-2">
                    <Text
                      className="text-base text-[#6D463C]"
                      style={styles().textFontSemiBold}
                    >
                      {item.name}
                    </Text>
                    <View className=" flex flex-row items-baseline space-x-1">
                      <Image
                        source={require("../assets/images/home/heart.png")}
                      />
                      <Text className="text-xs text-[#9B9B9B]">
                        {item.heart} &#8226; {item.date}{" "}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>

      <View className="mt-5">
        <View className="inset-x-0 mx-3 flex flex-row items-baseline justify-between">
          <Text
            className="text-lg text-[#6D463C]"
            style={styles().textFontSemiBold}
          >
            Nội dung mới
          </Text>
          <TouchableOpacity>
            <Text className="text-sm text-[#FF835C]" style={styles().textFont}>
              Xem thêm
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        className=" mt-5"
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <ScrollView
          horizontal
          className="flex h-fit"
          alwaysBounceHorizontal
          alwaysBounceVertical={false}
        >
          <View className=" relative ml-3 flex flex-row space-x-6">
            {newVid.map((item) => {
              return (
                <TouchableOpacity className="">
                  <View className="relative box-content">
                    <Image
                      className="h-40 w-40 rounded-lg object-fill"
                      source={item.image}
                    />
                    <View className="absolute bottom-2 left-4 rounded-2xl bg-slate-900/40 bg-opacity-10 p-1 ">
                      <Text className="text-white" style={styles().textFont}>
                        {item.time} phút
                      </Text>
                    </View>
                    <View className="absolute bottom-2 right-2 rounded-2xl">
                      <Image
                        className="h-6 w-6 object-fill"
                        source={require("../assets/images/physique/play.png")}
                      />
                    </View>
                  </View>

                  <View className="mt-2">
                    <Text
                      className="text-base text-[#6D463C]"
                      style={styles().textFontSemiBold}
                    >
                      {item.name}
                    </Text>
                    <View className=" flex flex-row items-baseline space-x-1">
                      <Image
                        source={require("../assets/images/home/heart.png")}
                      />
                      <Text className="text-xs text-[#9B9B9B]">
                        {item.heart} &#8226; {item.date}{" "}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
