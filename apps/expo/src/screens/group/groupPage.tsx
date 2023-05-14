import * as React from "react";
import { useState } from "react";
import {
  Alert,
  Animated,
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { styles } from "../../root";
import { ScreenProps } from "../../types/navigation";
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
const data = [1, 2, 3, 4, 5];
export const GroupPage = (props: ScreenProps<"GroupPage">) => {
  const [modalVisible, setModalVisible] = useState(false);
  const layout = useWindowDimensions();
  const [value, onChangeText] = useState("");

  const animated = new Animated.Value(-10);
  const animatedDown = new Animated.Value(0);
  const duration = 100;

  let vis = true;
  let checkFirstTime = true;

  const setAnimate = (visi: boolean) => {
    if (visi !== null) {
      vis = visi;
      checkFirstTime = false;
    }
    if (vis) {
      Animated.timing(animated, {
        toValue: 0,
        duration: duration,
        useNativeDriver: true,
      }).start();
      Animated.timing(animatedDown, {
        toValue: 0,
        duration: duration,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animated, {
        toValue: -400,
        duration: duration,
        useNativeDriver: true,
      }).start();
      Animated.timing(animatedDown, {
        toValue: -320,
        duration: duration,
        useNativeDriver: true,
      }).start();
    }
  };

  const FirstRoute = () => (
    <GroupPost setVisible={setAnimate} setOpenModal={setModalVisible} />
  );
  const SecondRoute = () => <GroupLib setVisible={setAnimate} />;
  const ThirdRoute = () => <GroupChat />;
  const ForthRoute = () => <GroupDesc setVisible={setAnimate} />;

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
    <View className="h-full bg-[#FFFFFF]">
      <Animated.View
        className="h-fit"
        style={{ transform: [{ translateY: animated }] }}
      >
        <View className="relative top-0 -mt-14 h-1/2">
          <Image
            className=" top-0"
            source={require("../../assets/images/group/top.png")}
          />
        </View>

        <TouchableOpacity
          className="absolute mt-12 ml-5 h-10 w-10 items-center justify-center rounded-xl bg-[#000]/25"
          onPress={() => props.navigation.navigate("Social")}
        >
          <Image source={require("../../assets/images/group/arrowleft.png")} />
        </TouchableOpacity>

        <View className="absolute inset-x-0 mt-20 items-center">
          <Image
            className=" h-24 w-24 object-cover"
            source={require("../../assets/images/group/avatarTest.png")}
          />
          <Text
            className="mt-4 text-center text-xl text-white"
            style={styles().textFontSemiBold}
          >
            Self-love
          </Text>
          <Text
            className="mt-1 text-center text-base text-white"
            style={styles().textFont}
          >
            Nhóm kín &#8226; 111 thành viên
          </Text>
          <View className="mt-2 flex w-3/5 flex-row justify-around space-x-1 ">
            {data.map((item) => {
              if (item === 5) {
                return (
                  <View
                    key={item}
                    className="h-9 w-9 items-center justify-center rounded-full bg-slate-50"
                  >
                    <Text>5+</Text>
                  </View>
                );
              } else
                return (
                  <View
                    key={item}
                    className="box-content h-9 w-9 items-center justify-center rounded-full bg-slate-50"
                  >
                    <Image
                      className="relative max-h-full max-w-full rounded-full"
                      source={require("../../assets/images/group/avatarTest.png")}
                    />
                  </View>
                );
            })}
          </View>
        </View>
      </Animated.View>
      <Animated.View
        className={checkFirstTime ? "mt-[50]" : ""}
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
      <Modal
        className=" rounded-xl bg-white"
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View className="bg-black/75">
          <View className="mt-[50%] h-full rounded-2xl bg-white">
            <View className="inset-x-0 mx-4 mt-3 flex flex-row items-center justify-between">
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text className="text-[#9B9B9B]" style={styles().textFont}>
                  Hủy
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={value === ""}
                className={classNames(
                  value === "" ? "bg-[#C4C4C4]" : "bg-[#FF835C]",
                  "rounded-2xl p-3",
                )}
              >
                <Text className="text-white" style={styles().textFont}>
                  Đăng
                </Text>
              </TouchableOpacity>
            </View>
            <KeyboardAwareScrollView>
              <View className="ml-4 mt-4 box-border h-10 w-10 items-baseline overflow-hidden rounded-full bg-slate-600">
                <Image
                  className="relative max-h-full max-w-full items-center justify-center rounded-full"
                  source={require("../../assets/images/group/avatarTest.png")}
                />
              </View>

              <View className="inset-x-0 mx-4 mt-4 h-24 rounded-lg">
                <View>
                  <TextInput
                    className="overflow-y-scroll p-2 text-base text-[#5A2D22]"
                    editable
                    multiline
                    numberOfLines={5}
                    onChangeText={(text) => onChangeText(text)}
                    value={value}
                    placeholder="Bạn đang nghĩ gì ?"
                    style={Object.assign({ maxHeight: 100 }, styles().textFont)}
                  />
                </View>
              </View>
            </KeyboardAwareScrollView>

            <View className="inset-x-0 mt-[15%] items-center">
              <TouchableOpacity className=" h-14 w-2/3 items-center justify-center rounded-full bg-[#7A9861]">
                <View className="flex flex-row items-center justify-between space-x-4">
                  <Text
                    className="ml-3 text-lg text-white"
                    style={styles().textFontSemiBold}
                  >
                    Khám phá thôi nào
                  </Text>

                  <Image
                    source={require("../../assets/images/emotion/arrow.png")}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
{
  /* <View className="">
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
</View> */
}
