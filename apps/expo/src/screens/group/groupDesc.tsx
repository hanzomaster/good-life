import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "../../root";
import { RootStackParamList } from "../../types/navigation";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Tab = createBottomTabNavigator<RootStackParamList>();

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const GroupDesc = ({ setVisible }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  let offset = 0;
  return (
    // <SafeAreaView className="absolute inset-0 bg-[#FFF4ED]">
    <View className="border-t border-t-[#C4C4C4]/50">
      <ScrollView
        className="relative top-0 mt-8 "
        scrollEventThrottle={16}
        onScroll={(e) => {
          const currentOffset = e.nativeEvent.contentOffset.y;
          const direction = currentOffset > offset ? "down" : "up";
          offset = currentOffset;
          direction === "down" ? setVisible(false) : null;
          (currentOffset < 0 || currentOffset === 0) && direction === "down"
            ? setVisible(true)
            : null;
          //   // console.log(direction);
          // console.log("current: " + offset);
        }}
      >
        <View className="mb-4 px-7">
          <Text
            className="relative h-fit w-full flex-wrap text-justify text-[#5A2D22]"
            style={styles().textFont}
          >
            Self-love lập ra giúp mọi người trao đổi với nhau, cùng nhau học
            cách yêu thương bản thân mình, tìm được những người bạn mới, giúp
            cho cuộc sống nhiều màu sắc hơn. Self-love lập ra giúp mọi người
            trao đổi với nhau, cùng nhau học cách yêu thương bản thân mình, tìm
            được những người bạn mới, giúp cho cuộc sống nhiều màu sắc hơn.
            Self-love lập ra giúp mọi người trao đổi với nhau, cùng nhau học
            cách yêu thương bản thân mình, tìm được những người bạn mới, giúp
            cho cuộc sống nhiều màu sắc hơn. Self-love lập ra giúp mọi người
            trao đổi với nhau, cùng nhau học cách yêu thương bản thân mình, tìm
            được những người bạn mới, giúp cho cuộc sống nhiều màu sắc hơn.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

// <View className="">
//   <ScrollView
//     className="relative mt-5 h-96 w-full px-7"
//     showsVerticalScrollIndicator={false}
//   >
//     <Text
//       className="relative h-fit w-full flex-wrap text-justify text-[#5A2D22]"
//       style={styles().textFont}
//     >
//       Self-love lập ra giúp mọi người trao đổi với nhau, cùng nhau học cách
//       yêu thương bản thân mình, tìm được những người bạn mới, giúp cho cuộc
//       sống nhiều màu sắc hơn. Self-love lập ra giúp mọi người trao đổi với
//       nhau, cùng nhau học cách yêu thương bản thân mình, tìm được những
//       người bạn mới, giúp cho cuộc sống nhiều màu sắc hơn. Self-love lập ra
//       giúp mọi người trao đổi với nhau, cùng nhau học cách yêu thương bản
//       thân mình, tìm được những người bạn mới, giúp cho cuộc sống nhiều màu
//       sắc hơn. Self-love lập ra giúp mọi người trao đổi với nhau, cùng nhau
//       học cách yêu thương bản thân mình, tìm được những người bạn mới, giúp
//       cho cuộc sống nhiều màu sắc hơn. Self-love lập ra giúp mọi người trao
//       đổi với nhau, cùng nhau học cách yêu thương bản thân mình, tìm được
//       những người bạn mới, giúp cho cuộc sống nhiều màu sắc hơn. Self-love
//       lập ra giúp mọi người trao đổi với nhau, cùng nhau học cách yêu thương
//       bản thân mình, tìm được những người bạn mới, giúp cho cuộc sống nhiều
//       màu sắc hơn. Self-love lập ra giúp mọi người trao đổi với nhau, cùng
//       nhau học cách yêu thương bản thân mình, tìm được những người bạn mới,
//       giúp cho cuộc sống nhiều màu sắc hơn. Self-love lập ra giúp mọi người
//       trao đổi với nhau, cùng nhau học cách yêu thương bản thân mình, tìm
//       được những người bạn mới, giúp cho cuộc sống nhiều màu sắc hơn.
//       Self-love lập ra giúp mọi người trao đổi với nhau, cùng nhau học cách
//       yêu thương bản thân mình, tìm được những người bạn mới, giúp cho cuộc
//       sống nhiều màu sắc hơn. Self-love lập ra giúp mọi người trao đổi với
//       nhau, cùng nhau học cách yêu thương bản thân mình, tìm được những
//       người bạn mới, giúp cho cuộc sống nhiều màu sắc hơn. Self-love lập ra
//       giúp mọi người trao đổi với nhau, cùng nhau học cách yêu thương bản
//       thân mình, tìm được những người bạn mới, giúp cho cuộc sống nhiều màu
//       sắc hơn. Self-love lập ra giúp mọi người trao đổi với nhau, cùng nhau
//       học cách yêu thương bản thân mình, tìm được những người bạn mới, giúp
//       cho cuộc sống nhiều màu sắc hơn. Self-love lập ra giúp mọi người trao
//       đổi với nhau, cùng nhau học cách
//     </Text>
//   </ScrollView>
// </View>
