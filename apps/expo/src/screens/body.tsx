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
import { ScreenProps } from "../types/navigation";

export const BodyScreen = (props: ScreenProps<"Body">) => {
  return (
    <SafeAreaView className="absolute inset-0 content-end bg-[#FFF4ED]">
      <View className=" absolute top-0 left-0">
        <Image
          className="h-auto object-cover"
          source={require("../assets/images/physique/header.png")}
        />
        <TouchableOpacity
          className="absolute top-20 right-10 p-1"
          onPress={() => {}}
        >
          <Image source={require("../assets/images/physique/expand.png")} />
        </TouchableOpacity>
      </View>
      <View className="absolute inset-x-5 mt-40 ml-auto mr-auto flex flex-row">
        <TouchableOpacity>
          <Text className=" font-quicksand text-2xl text-[#FF8669] ">
            Thể chất
          </Text>
          <View className=" absolute inset-x-0 mt-0">
            <Image
              className="mt-10 h-auto object-cover"
              source={require("../assets/images/physique/tab.png")}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text className=" font-quicksand ml-10  text-2xl text-[#9B9B9BE0] ">
            Dinh dưỡng
          </Text>
        </TouchableOpacity>
      </View>

      <View className="mt-10">
        <View
          className="ml-5 mr-5 mt-40 flex flex-row items-center border-2  border-[#FF835C33]/20 bg-[#FFF4ED] px-3 py-1"
          style={{
            borderRadius: 10,
          }}
        >
          <Image source={require("../assets/images/physique/Icon.png")} />
          <TextInput
            placeholder="Tìm kiếm"
            className="px-2 py-1 text-sm text-[#9B9B9B]"
          />
        </View>
      </View>
      <View className="inset-x-5 mt-10 flex flex-row">
        <TouchableOpacity
          style={{
            height: 40,
            width: "15%",
            borderRadius: 10,
            backgroundColor: "#7A9861",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text className=" font-quicksand text-sm text-white ">Gợi ý</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="ml-5"
          style={{
            height: 40,
            width: "15%",
            borderRadius: 10,
            backgroundColor: "#FFFFFF",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text className=" font-quicksand text-sm text-[#A5A5A5] ">Yoga</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="ml-5"
          style={{
            height: 40,
            width: "15%",
            borderRadius: 10,
            backgroundColor: "#FFFFFF",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text className=" font-quicksand text-sm text-[#A5A5A5] ">Cadio</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="ml-5"
          style={{
            height: 40,
            width: "20%",
            borderRadius: 10,
            backgroundColor: "#FFFFFF",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text className=" font-quicksand text-sm text-[#A5A5A5] ">
            Pilates
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="ml-5"
          style={{
            height: 40,
            width: "20%",
            borderRadius: 10,
            backgroundColor: "#FFFFFF",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text className=" font-quicksand text-sm text-[#A5A5A5] ">
            Giãn cơ
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView className=" mt-10">
        <View
          className=" mt-0"
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <View className=" relative flex flex-row space-x-6">
            <TouchableOpacity className="">
              <View className="relative box-content">
                <Image
                  className="h-40 w-40 rounded-lg object-fill"
                  source={require("../assets/images/physique/img1.png")}
                />
                <View className="absolute bottom-2 left-2 rounded-2xl bg-slate-900/40 bg-opacity-10 p-1 ">
                  <Text className="text-white" style={styles().textFont}>
                    21 phút
                  </Text>
                </View>
                <View className="absolute bottom-2 right-2 rounded-2xl p-1 ">
                  <Image
                    className="h-6 w-6 object-fill"
                    source={require("../assets/images/physique/play.png")}
                  />
                </View>
              </View>

              <View className="mt-2">
                <Text
                  className="text-base text-[#5A2D22]"
                  style={styles().textFont}
                >
                  Pilates xx
                </Text>
                <View className=" flex flex-row items-baseline space-x-1">
                  <Image source={require("../assets/images/home/heart.png")} />
                  <Text className="text-xs text-[#DED5C6]">
                    22 &#8226; 11.02.2023{" "}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="">
              <View className="relative box-content">
                <Image
                  className="relative h-40 w-40 rounded-lg object-fill"
                  source={require("../assets/images/physique/img2.png")}
                />
                <View className="absolute bottom-2 left-2 rounded-2xl bg-slate-900/40 bg-opacity-10 p-1 ">
                  <Text className="text-white" style={styles().textFont}>
                    21 phút
                  </Text>
                </View>
                <View className="absolute bottom-2 right-2 rounded-2xl p-1 ">
                  <Image
                    className="h-6 w-6 object-fill"
                    source={require("../assets/images/physique/play.png")}
                  />
                </View>
              </View>

              <View className="mt-2">
                <Text
                  className="text-base text-[#5A2D22]"
                  style={styles().textFont}
                >
                  Giãn cơ 20 phút
                </Text>
                <View className=" flex flex-row items-baseline space-x-1">
                  <Image source={require("../assets/images/home/heart.png")} />
                  <Text className="text-xs text-[#DED5C6]">
                    22 &#8226; 11.02.2023{" "}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View
          className=" mt-10"
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <View className=" relative flex flex-row space-x-6">
            <TouchableOpacity className="">
              <View className="relative box-content">
                <Image
                  className="h-40 w-40 rounded-lg object-fill"
                  source={require("../assets/images/physique/img3.png")}
                />
                <View className="absolute bottom-2 left-2 rounded-2xl bg-slate-900/40 bg-opacity-10 p-1 ">
                  <Text className="text-white" style={styles().textFont}>
                    21 phút
                  </Text>
                </View>
                <View className="absolute bottom-2 right-2 rounded-2xl p-1 ">
                  <Image
                    className="h-6 w-6 object-fill"
                    source={require("../assets/images/physique/play.png")}
                  />
                </View>
              </View>

              <View className="mt-2">
                <Text
                  className="text-base text-[#5A2D22]"
                  style={styles().textFont}
                >
                  Chạy
                </Text>
                <View className=" flex flex-row items-baseline space-x-1">
                  <Image source={require("../assets/images/home/heart.png")} />
                  <Text className="text-xs text-[#DED5C6]">
                    22 &#8226; 11.02.2023{" "}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="">
              <View className="relative box-content">
                <Image
                  className="relative h-40 w-40 rounded-lg object-fill"
                  source={require("../assets/images/physique/img4.png")}
                />
                <View className="absolute bottom-2 left-2 rounded-2xl bg-slate-900/40 bg-opacity-10 p-1 ">
                  <Text className="text-white" style={styles().textFont}>
                    21 phút
                  </Text>
                </View>
                <View className="absolute bottom-2 right-2 rounded-2xl p-1 ">
                  <Image
                    className="h-6 w-6 object-fill"
                    source={require("../assets/images/physique/play.png")}
                  />
                </View>
              </View>

              <View className="mt-2">
                <Text
                  className="text-base text-[#5A2D22]"
                  style={styles().textFont}
                >
                  Tập cơ tay
                </Text>
                <View className=" flex flex-row items-baseline space-x-1">
                  <Image source={require("../assets/images/home/heart.png")} />
                  <Text className="text-xs text-[#DED5C6]">
                    22 &#8226; 11.02.2023{" "}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
