import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
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
import { MusicStackParamList, ScreenProps } from "../types/navigation";
import { MindTab } from "./mind/mind";
import MusicScreen from "./music";

export type Mind = {
  id: number;
  name: string;
  image: any;
  time: number;
  heart: number;
  date: string;
  description: string;
};
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
          style={[styles().textFontSemiBold, { fontSize: 18 }]}
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

const MusicStack = createNativeStackNavigator<MusicStackParamList>();

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
export const MindScreen = (props: ScreenProps<"Mind">) => {
  const [isPressed, setIsPressed] = useState(false);

  const suggestList: Array<Mind> = [
    {
      id: 1,
      name: "Thiền về tình yêu",
      image: require("../assets/images/mind/Rectangle_1245.png"),
      time: 21,
      heart: 22,
      date: "11.02.2023",
      description:
        " Bài thiền sẽ giúp bạn mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần, giúp bạn giải tỏa căng thẳng, làm dịu cơn đau, cải thiện các vấn đề về tim và huyết áp bạn sẽ biết cách xoa dịu, điều tiết nguồn khí trong cơ thể nhằm giảm bớt nhiều vấn đề sức khỏe, từ đó giúp bạn giải tỏa căng thẳng, lo lắng, mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần. Ngoài ra, còn giúp bạn giữ trạng thái cân bằng trong cơ thể, giúp bạn làm chủ bản thân trong các tình huống.",
    },
    {
      id: 2,
      name: "Thiền về tâm hồn",
      image: require("../assets/images/mind/Rectangle_1245.png"),
      time: 21,
      heart: 2,
      date: "11.02.2023",
      description:
        " Bài thiền sẽ giúp bạn mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần, giúp bạn giải tỏa căng thẳng, làm dịu cơn đau, cải thiện các vấn đề về tim và huyết áp bạn sẽ biết cách xoa dịu, điều tiết nguồn khí trong cơ thể nhằm giảm bớt nhiều vấn đề sức khỏe, từ đó giúp bạn giải tỏa căng thẳng, lo lắng, mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần. Ngoài ra, còn giúp bạn giữ trạng thái cân bằng trong cơ thể, giúp bạn làm chủ bản thân trong các tình huống.",
    },
    {
      id: 3,
      name: "Thiền về cuộc sống",
      image: require("../assets/images/mind/Rectangle_1245.png"),
      time: 21,
      heart: 2,
      date: "11.02.2023",
      description:
        " Bài thiền sẽ giúp bạn mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần, giúp bạn giải tỏa căng thẳng, làm dịu cơn đau, cải thiện các vấn đề về tim và huyết áp bạn sẽ biết cách xoa dịu, điều tiết nguồn khí trong cơ thể nhằm giảm bớt nhiều vấn đề sức khỏe, từ đó giúp bạn giải tỏa căng thẳng, lo lắng, mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần. Ngoài ra, còn giúp bạn giữ trạng thái cân bằng trong cơ thể, giúp bạn làm chủ bản thân trong các tình huống.",
    },
    {
      id: 4,
      name: "Thiền về tình yêu",
      image: require("../assets/images/mind/Rectangle_1245.png"),
      time: 21,
      heart: 2,
      date: "11.02.2023",
      description:
        " Bài thiền sẽ giúp bạn mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần, giúp bạn giải tỏa căng thẳng, làm dịu cơn đau, cải thiện các vấn đề về tim và huyết áp bạn sẽ biết cách xoa dịu, điều tiết nguồn khí trong cơ thể nhằm giảm bớt nhiều vấn đề sức khỏe, từ đó giúp bạn giải tỏa căng thẳng, lo lắng, mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần. Ngoài ra, còn giúp bạn giữ trạng thái cân bằng trong cơ thể, giúp bạn làm chủ bản thân trong các tình huống.",
    },
    {
      id: 5,
      name: "Thiền về tình yêu",
      image: require("../assets/images/mind/Rectangle_1245.png"),
      time: 21,
      heart: 2,
      date: "11.02.2023",
      description:
        " Bài thiền sẽ giúp bạn mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần, giúp bạn giải tỏa căng thẳng, làm dịu cơn đau, cải thiện các vấn đề về tim và huyết áp bạn sẽ biết cách xoa dịu, điều tiết nguồn khí trong cơ thể nhằm giảm bớt nhiều vấn đề sức khỏe, từ đó giúp bạn giải tỏa căng thẳng, lo lắng, mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần. Ngoài ra, còn giúp bạn giữ trạng thái cân bằng trong cơ thể, giúp bạn làm chủ bản thân trong các tình huống.",
    },
    {
      id: 6,
      name: "Thiền về tình yêu",
      image: require("../assets/images/mind/Rectangle_1245.png"),
      time: 21,
      heart: 2,
      date: "11.02.2023",
      description:
        " Bài thiền sẽ giúp bạn mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần, giúp bạn giải tỏa căng thẳng, làm dịu cơn đau, cải thiện các vấn đề về tim và huyết áp bạn sẽ biết cách xoa dịu, điều tiết nguồn khí trong cơ thể nhằm giảm bớt nhiều vấn đề sức khỏe, từ đó giúp bạn giải tỏa căng thẳng, lo lắng, mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần. Ngoài ra, còn giúp bạn giữ trạng thái cân bằng trong cơ thể, giúp bạn làm chủ bản thân trong các tình huống.",
    },
  ];

  const suggests = [
    {
      name: "Gợi ý",
      list: suggestList,
    },
    {
      name: "Thiền",
      list: suggestList,
    },
    {
      name: "Mind lessons",
      list: suggestList,
    },
    {
      name: "Q & A",
      list: suggestList,
    },
    {
      name: "Tâm trí",
      list: suggestList,
    },
    {
      name: "Healing",
      list: suggestList,
    },
  ];

  const [isActive, setIsActive] = useState("Gợi ý");
  const [list, setList] = useState<Array<Mind>>(suggestList);

  useEffect(() => {
    const suggest = suggests.find((item) => item.name === isActive);
    setList(suggest?.list || []);
  }, [isActive]);

  const FirstRoute = () => <MindTab navigate={mindDetailNavigate} />;
  const navigate = (
    list: any,
    resumeSong: any,
    pauseSong: any,
    nextSong: any,
    previousSong: any,
  ) => {
    // debugger;
    props.navigation.navigate("MusicPlayer", {
      // song: selectedSong,
      list: list,
      resumeSong: resumeSong,
      pauseSong: pauseSong,
      nextSong: nextSong,
      previousSong: previousSong,
    });
    // props.navigation.navigate("GroupIntro");
  };
  const mindDetailNavigate = (item: any) => {
    props.navigation.navigate("MindDetail", {
      mind: item,
    });
  };
  const SecondRoute = () => <MusicScreen navigateFn={navigate} />;
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Tâm trí" },
    { key: "second", title: "Âm nhạc" },
  ]);

  const layout = useWindowDimensions();

  const animatedDown = new Animated.Value(90);
  return (
    <SafeAreaView className="absolute inset-0 content-end bg-[#FFF4ED]">
      <View className="absolute top-0 left-0">
        <Image
          source={require("../assets/images/mind/header.png")}
          className=""
        />
      </View>
      <View className="absolute inset-x-0 mt-16 items-center">
        <Text
          className=" font-quicksand text-2xl text-white"
          style={styles().textFontSemiBold}
        >
          Tâm trí
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {}}
        className="absolute right-0 mt-20 mr-5"
      >
        <Image source={require("../assets/images/mind/Vector.png")} />
      </TouchableOpacity>
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
