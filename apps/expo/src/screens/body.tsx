import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Animated,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../root";
import { ScreenProps } from "../types/navigation";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

import React from "react";
import { Physique } from "./body/physique";
import { Nutrition } from "./body/nutrition";

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
          style={[styles().textFontSemiBold, { fontSize: 25 }]}
        >
          {route.title}
        </Text>
      )}
      indicatorStyle={{
        backgroundColor: "#7A9861",
        maxWidth: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: 3,
      }}
      style={{
        backgroundColor: "#FFF4ED",
        width: layout.width,
        justifyContent: "space-between",
        alignSelf: "center",
        borderBottomColor: "#FFF4ED",
        borderBottomWidth: 1,
        height: 55,
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
