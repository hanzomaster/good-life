import * as React from "react";
import {
  Animated,
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { styles } from "../../root";
import { IngredientPage } from "./ingredient";
import { InstructionPage } from "./instruction";
import { ReviewsPage } from "./reviews";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenProps } from "../../types/navigation";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const renderTabBar = (props: any) => {
  const layout = useWindowDimensions();
  return (
    <TabBar
      {...props}
      renderLabel={({ route, focused }) => (
        <Text
          className={classNames(focused ? "text-[#5A2D22]" : "text-[#9B9B9B]")}
          style={styles().textFontSemiBold}
        >
          {route.title}
        </Text>
      )}
      indicatorStyle={{
        backgroundColor: "#FF835C",
        maxWidth: "100%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
      style={{
        backgroundColor: "#FFF4ED",
        width: layout.width,
        justifyContent: "space-between",
        alignSelf: "center",
        borderBottomColor: "#9B9B9B",
        borderBottomWidth: 1,
        height: 45,
        shadowColor: "white",
      }}
      labelStyle={Object.assign(
        { color: "#5A2D22" },
        styles().textFontSemiBold,
      )}
    />
  );
};

export const NutritionPage = (props: ScreenProps<"NutritionPage">) => {
  const layout = useWindowDimensions();

  const animated = new Animated.Value(0);
  const animatedDown = new Animated.Value(90);
  const duration = 100;

  let vis = true;

  const setAnimate = (visi: boolean) => {
    if (visi !== null) vis = visi;
    if (vis) {
      Animated.timing(animated, {
        toValue: 0,
        duration: duration,
        useNativeDriver: true,
      }).start();
      Animated.timing(animatedDown, {
        toValue: -50,
        duration: duration,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animated, {
        toValue: -255,
        duration: duration,
        useNativeDriver: true,
      }).start();
      Animated.timing(animatedDown, {
        toValue: -190,
        duration: duration,
        useNativeDriver: true,
      }).start();
    }
  };

  const FirstRoute = () => <IngredientPage />;
  const SecondRoute = () => <InstructionPage />;
  const ThirdRoute = () => <ReviewsPage />;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Nguyên liệu" },
    { key: "second", title: "Hướng dẫn" },
    { key: "third", title: "Reviews" },
  ]);

  return (
    <SafeAreaView className="absolute inset-0 content-end bg-[#FFF4ED]">
      <Animated.View
        className="h-fit "
        style={{ transform: [{ translateY: animated }] }}
      >
        <View className="">
          <View className="h-45 box-content w-full overflow-hidden bg-slate-50">
            <Image
              className=" relative max-h-full max-w-full"
              source={require("../../assets/images/nutrition/imgheader.png")}
            />
          </View>

          <View className="absolute inset-x-4 mt-14 justify-between ">
            <TouchableOpacity className="h-9 w-9 items-center justify-center rounded-xl bg-[#000]/25">
              <Image
                source={require("../../assets/images/nutrition/back.png")}
              />
            </TouchableOpacity>
          </View>

          <View className="absolute right-5 mt-14 flex flex-col justify-between">
            <TouchableOpacity className="h-9 w-9 items-center justify-center rounded-xl bg-[#000]/25">
              <Image
                source={require("../../assets/images/nutrition/lovefood.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity className="mt-3 h-9 w-9 items-center justify-center rounded-xl bg-[#000]/25">
              <Image
                source={require("../../assets/images/nutrition/highlight.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity className="mt-3 h-9 w-9 items-center justify-center rounded-xl bg-[#000]/25">
              <Image
                source={require("../../assets/images/nutrition/sharefood.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View className="absolute left-[5%] mt-80 h-[45%] w-[90%] justify-center rounded-xl bg-white">
          <View className="ml-5">
            <Text
              className=" font-quicksand  text-2xl text-[#5A2D22] "
              style={styles().textFontBold}
            >
              Súp bí đỏ
            </Text>
            <View className=" mt-1 flex flex-row items-baseline space-x-1">
              <Image source={require("../../assets/images/home/heart.png")} />
              <Text className="text-sm text-[#DED5C6]">
                20 &#8226; 11.02.2023
              </Text>
            </View>
          </View>
          <View className="left-[7%] mt-3 h-0.5 w-[86%] bg-[#C4C4C4]"></View>
          <View className=" mt-6 flex flex-row justify-center space-x-14">
            <View
              className="flex flex-col items-baseline align-middle"
              style={{ alignItems: "center" }}
            >
              <Image
                className=" relative"
                source={require("../../assets/images/nutrition/time.png")}
              />
              <Text
                className="text-[#5A2D22]"
                style={styles().textFontSemiBold}
              >
                15 phút
              </Text>
            </View>
            <View
              className="flex flex-col items-baseline"
              style={{ alignItems: "center" }}
            >
              <Image
                className=" relative"
                source={require("../../assets/images/nutrition/ingredient.png")}
              />
              <Text
                className="text-[#5A2D22]"
                style={styles().textFontSemiBold}
              >
                5 nguyên liệu
              </Text>
            </View>
            <View
              className="flex flex-col items-baseline"
              style={{ alignItems: "center" }}
            >
              <Image
                className=" relative"
                source={require("../../assets/images/nutrition/level.png")}
              />
              <Text
                className="text-[#5A2D22]"
                style={styles().textFontSemiBold}
              >
                Dễ làm
              </Text>
            </View>
          </View>
        </View>
      </Animated.View>
      <Animated.View
        className=""
        style={[
          { minHeight: "95%" },
          { flex: 1 },
          { transform: [{ translateY: animatedDown }] },
        ]}
      >
        <TabView
          renderTabBar={renderTabBar}
          style={{ height: "100%" }}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width, height: layout.height }}
          lazy={true}
        />
      </Animated.View>
    </SafeAreaView>
  );
};
