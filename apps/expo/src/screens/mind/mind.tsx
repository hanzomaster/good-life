import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../root";

export type Mind = {
  id: number;
  name: string;
  image: any;
  time: number;
  heart: number;
  date: string;
  description: string;
};
export const MindTab = ({ navigate }: any) => {
  const [isPressed, setIsPressed] = useState(false);

  const suggestList: Array<Mind> = [
    {
      id: 1,
      name: "Thiền về tình yêu",
      image: require("../../assets/images/mind/Rectangle_1245.png"),
      time: 21,
      heart: 22,
      date: "11.02.2023",
      description:
        " Bài thiền sẽ giúp bạn mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần, giúp bạn giải tỏa căng thẳng, làm dịu cơn đau, cải thiện các vấn đề về tim và huyết áp bạn sẽ biết cách xoa dịu, điều tiết nguồn khí trong cơ thể nhằm giảm bớt nhiều vấn đề sức khỏe, từ đó giúp bạn giải tỏa căng thẳng, lo lắng, mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần. Ngoài ra, còn giúp bạn giữ trạng thái cân bằng trong cơ thể, giúp bạn làm chủ bản thân trong các tình huống.",
    },
    {
      id: 2,
      name: "Thiền về tâm hồn",
      image: require("../../assets/images/mind/Rectangle_1245.png"),
      time: 21,
      heart: 2,
      date: "11.02.2023",
      description:
        " Bài thiền sẽ giúp bạn mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần, giúp bạn giải tỏa căng thẳng, làm dịu cơn đau, cải thiện các vấn đề về tim và huyết áp bạn sẽ biết cách xoa dịu, điều tiết nguồn khí trong cơ thể nhằm giảm bớt nhiều vấn đề sức khỏe, từ đó giúp bạn giải tỏa căng thẳng, lo lắng, mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần. Ngoài ra, còn giúp bạn giữ trạng thái cân bằng trong cơ thể, giúp bạn làm chủ bản thân trong các tình huống.",
    },
    {
      id: 3,
      name: "Thiền về cuộc sống",
      image: require("../../assets/images/mind/Rectangle_1245.png"),
      time: 21,
      heart: 2,
      date: "11.02.2023",
      description:
        " Bài thiền sẽ giúp bạn mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần, giúp bạn giải tỏa căng thẳng, làm dịu cơn đau, cải thiện các vấn đề về tim và huyết áp bạn sẽ biết cách xoa dịu, điều tiết nguồn khí trong cơ thể nhằm giảm bớt nhiều vấn đề sức khỏe, từ đó giúp bạn giải tỏa căng thẳng, lo lắng, mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần. Ngoài ra, còn giúp bạn giữ trạng thái cân bằng trong cơ thể, giúp bạn làm chủ bản thân trong các tình huống.",
    },
    {
      id: 4,
      name: "Thiền về tình yêu",
      image: require("../../assets/images/mind/Rectangle_1245.png"),
      time: 21,
      heart: 2,
      date: "11.02.2023",
      description:
        " Bài thiền sẽ giúp bạn mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần, giúp bạn giải tỏa căng thẳng, làm dịu cơn đau, cải thiện các vấn đề về tim và huyết áp bạn sẽ biết cách xoa dịu, điều tiết nguồn khí trong cơ thể nhằm giảm bớt nhiều vấn đề sức khỏe, từ đó giúp bạn giải tỏa căng thẳng, lo lắng, mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần. Ngoài ra, còn giúp bạn giữ trạng thái cân bằng trong cơ thể, giúp bạn làm chủ bản thân trong các tình huống.",
    },
    {
      id: 5,
      name: "Thiền về tình yêu",
      image: require("../../assets/images/mind/Rectangle_1245.png"),
      time: 21,
      heart: 2,
      date: "11.02.2023",
      description:
        " Bài thiền sẽ giúp bạn mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần, giúp bạn giải tỏa căng thẳng, làm dịu cơn đau, cải thiện các vấn đề về tim và huyết áp bạn sẽ biết cách xoa dịu, điều tiết nguồn khí trong cơ thể nhằm giảm bớt nhiều vấn đề sức khỏe, từ đó giúp bạn giải tỏa căng thẳng, lo lắng, mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần. Ngoài ra, còn giúp bạn giữ trạng thái cân bằng trong cơ thể, giúp bạn làm chủ bản thân trong các tình huống.",
    },
    {
      id: 6,
      name: "Thiền về tình yêu",
      image: require("../../assets/images/mind/Rectangle_1245.png"),
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

  return (
    <SafeAreaView className="absolute inset-0 content-end bg-[#FFF4ED]">
      <View className="absolute h-full px-5">
        <View className="mt-5">
          <View
            className="flex w-full flex-row items-center border-2  border-[#FF835C33]/20 bg-[#FFF4ED] px-3 py-1"
            style={{
              borderRadius: 10,
            }}
          >
            <Image source={require("../../assets/images/mind/Icon.png")} />
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
              {suggests.map((item) => (
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

        <View className="mt-8">
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles().itemsWrap}>
              {list.map((item) => (
                <View key={item.id} style={styles(2).singleItem}>
                  <TouchableOpacity onPress={() => navigate(item)}>
                    <View className="">
                      <Image
                        source={item.image}
                        className="h-40 w-40 rounded-lg object-cover"
                      />
                      <View className="absolute bottom-2 left-2 right-6 flex flex-row items-center justify-between">
                        <Text className="text-xs text-white">{`${item.time} phút`}</Text>
                        <Image
                          source={require("../../assets/images/mind/Group_36586.png")}
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
                          source={require("../../assets/images/mind/Heart.png")}
                        />
                        <Text
                          className="text-xs text-[#B2B2B2]"
                          style={styles().textFont}
                        >{`${item.heart}`}</Text>
                        <Image
                          source={require("../../assets/images/mind/Ellipse_206.png")}
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
          <View className="bottom-0 h-20 w-full"></View>
        </View>
      </View>
    </SafeAreaView>
  );
};
