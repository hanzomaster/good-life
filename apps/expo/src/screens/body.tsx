import {
  Animated,
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { styles } from "../root";
import { ScreenProps } from "../types/navigation";

import React from "react";
import { Nutrition } from "./body/nutrition";
import { Physique } from "./body/physique";

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
          className={classNames(focused ? "text-[#FF835C]" : "text-[#9B9B9B]")}
          style={[styles().textFontSemiBold, { fontSize: 15 }]}
        >
          {route.title}
        </Text>
      )}
      indicatorStyle={{
        backgroundColor: "#7A9861",
        maxWidth: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: 1,
      }}
      style={{
        marginTop: 2,
        backgroundColor: "#FFF4ED",
        width: layout.width * 0.6,
        justifyContent: "space-between",
        alignSelf: "flex-start",
        borderBottomColor: "#FFF4ED",
        borderBottomWidth: 1,
        height: 40,
        shadowColor: "white",
      }}
      labelStyle={Object.assign(
        { color: "#000000" },
        styles().textFontSemiBold,
      )}
    />
  );
};

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
export const BodyScreen = (props: ScreenProps<"Body">) => {
  const FirstRoute = () => <Physique />;
  const SecondRoute = () => <Nutrition />;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Thể chất" },
    { key: "second", title: "Dinh dưỡng" },
  ]);

  const layout = useWindowDimensions();

  const animatedDown = new Animated.Value(90);

  return (
    <SafeAreaView className="absolute inset-0 w-full content-end bg-[#FFF4ED]">
      <View className=" absolute inset-x-0 ml-0 ">
        <Image
          className="relative h-auto max-w-full object-cover"
          source={require("../assets/images/physique/header.png")}
        />
        <View className="absolute inset-x-0 mt-16 items-center">
          <Text
            className="font-quicksand text-2xl text-white"
            style={styles().textFontSemiBold}
          >
            Body
          </Text>
        </View>
        <TouchableOpacity
          className="absolute top-20 right-10 p-1"
          onPress={() => {
            props.navigation.navigate("BodyInf");
          }}
        >
          <Image source={require("../assets/images/physique/expand.png")} />
        </TouchableOpacity>
      </View>

      <Animated.View
        className="mt-10"
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
