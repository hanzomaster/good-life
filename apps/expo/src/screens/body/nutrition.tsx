import {
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../root";
import { ScreenProps } from "../../types/navigation";

export const Nutrition = () => {
  return (
    <SafeAreaView className="absolute inset-0 content-end bg-[#FFF4ED]">
      <View className=" absolute top-0 left-0">
        <Image
          className="h-auto object-cover"
          source={require("../../assets/images/nutrition/header.png")}
        />
        <TouchableOpacity className="absolute top-20 right-10 p-1">
          <Image source={require("../../assets/images/physique/expand.png")} />
        </TouchableOpacity>
      </View>
      <View className="absolute inset-x-5 mt-40 ml-auto mr-auto flex flex-row">
        <TouchableOpacity>
          <Text className=" font-quicksand text-2xl text-[#9B9B9BE0] ">
            Thể chất
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className=" font-quicksand ml-10 text-2xl text-[#FF8669] ">
            Dinh dưỡng
          </Text>
          <View className=" absolute inset-x-10 mt-0">
            <Image
              className="mt-10 h-auto object-cover"
              source={require("../../assets/images/nutrition/tab.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View className="mt-10">
        <View
          className="ml-5 mr-5 mt-40 flex flex-row items-center border-2  border-[#FF835C33]/20 bg-[#FFF4ED] px-3 py-1"
          style={{
            borderRadius: 10,
          }}
        >
          <Image source={require("../../assets/images/nutrition/Icon.png")} />
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
            width: "20%",
            borderRadius: 10,
            backgroundColor: "#FFFFFF",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text className=" font-quicksand text-sm text-[#A5A5A5] ">
            Món chính
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
            Bữa sáng
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
            Ăn nhẹ
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
                  source={require("../../assets/images/nutrition/img1.png")}
                />
              </View>

              <View className="mt-2">
                <Text
                  className="text-base text-[#5A2D22]"
                  style={styles.textFont}
                >
                  Súp bí đỏ
                </Text>
                <View className=" flex flex-row items-baseline space-x-1">
                  <Image
                    source={require("../../assets/images/home/heart.png")}
                  />
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
                  source={require("../../assets/images/nutrition/img2.png")}
                />
              </View>

              <View className="mt-2">
                <Text
                  className="text-base text-[#5A2D22]"
                  style={styles.textFont}
                >
                  Sinh tố dâu
                </Text>
                <View className=" flex flex-row items-baseline space-x-1">
                  <Image
                    source={require("../../assets/images/home/heart.png")}
                  />
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
                  source={require("../../assets/images/nutrition/img3.png")}
                />
              </View>

              <View className="mt-2">
                <Text
                  className="text-base text-[#5A2D22]"
                  style={styles.textFont}
                >
                  Bánh plan
                </Text>
                <View className=" flex flex-row items-baseline space-x-1">
                  <Image
                    source={require("../../assets/images/home/heart.png")}
                  />
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
                  source={require("../../assets/images/nutrition/img4.png")}
                />
              </View>

              <View className="mt-2">
                <Text
                  className="text-base text-[#5A2D22]"
                  style={styles.textFont}
                >
                  Cốm
                </Text>
                <View className=" flex flex-row items-baseline space-x-1">
                  <Image
                    source={require("../../assets/images/home/heart.png")}
                  />
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
