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
import { GroupChat } from "./groupChat";
import { GroupDesc } from "./groupDesc";
import { GroupLib } from "./groupLib";
import { GroupPost } from "./groupPost";

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
        backgroundColor: "white",
        width: (layout.width * 6) / 7,
        justifyContent: "space-between",
        alignSelf: "center",
        borderBottomColor: "white",
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

export const GroupPage = () => {
  const layout = useWindowDimensions();

  const animated = new Animated.Value(-10);
  const animatedDown = new Animated.Value(-50);
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

  const FirstRoute = () => <GroupPost setVisible={setAnimate} />;
  const SecondRoute = () => <GroupLib />;
  const ThirdRoute = () => <GroupChat />;
  const ForthRoute = () => <GroupDesc />;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    forth: ForthRoute,
  });
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Bài đăng" },
    { key: "second", title: "Thư viện" },
    { key: "third", title: "Chat" },
    { key: "forth", title: "Mô tả" },
  ]);
  // const animatedValue = new Animated.Value(0);
  // const headerMaxHeight = 150;
  // const headerMinHeight = 10;
  // const AnimatedBgColor = animatedValue.interpolate({
  //   inputRange: [0, headerMaxHeight - headerMinHeight],
  //   outputRange: ["blue", "red"],
  //   extrapolate: "clamp",
  // });

  // const AnimatedHeaderHeight = animatedValue.interpolate({
  //   inputRange: [0, headerMaxHeight - headerMinHeight],
  //   outputRange: [headerMaxHeight, headerMinHeight],
  //   extrapolate: "clamp",
  // });

  return (
    <>
      <Animated.View
        className="h-fit"
        style={{ transform: [{ translateY: animated }] }}
      >
        <View className="">
          <Image
            className=" top-0 "
            source={require("../../assets/images/group/groupPost/top.png")}
          />
          <View className="absolute inset-x-0 mt-10 flex flex-row items-center justify-center space-x-4">
            <View className="box-content h-10 w-10 overflow-hidden rounded-xl bg-slate-50">
              <Image
                className="relative max-h-full max-w-full rounded-lg"
                source={require("../../assets/images/group/avatarTest.png")}
              />
            </View>
            <Text
              className=" text-center text-xl text-white"
              style={styles().textFontSemiBold}
            >
              Self-love
            </Text>
          </View>

          <View className="absolute inset-x-4 mt-14 flex flex-row justify-between ">
            <TouchableOpacity className="h-9 w-9 items-center justify-center rounded-xl bg-[#000]/25">
              <Image
                source={require("../../assets/images/group/arrowleft.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity className="h-10 w-10 items-center justify-center">
              <Image
                source={require("../../assets/images/group/groupPost/other.png")}
              />
            </TouchableOpacity>
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
    </>
  );
};
