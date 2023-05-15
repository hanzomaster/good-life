import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../root";

const data = [
  "1. Cho bí đỏ, cà rốt, bông cải xanh và phô mai vào máy xay xay thật nhuyễn. ",
  "2. Đun nồi cháo thịt bò 10 phút rồi đổ hỗn hợp bí đỏ, cà rốt, bông cải xanh, phô mai vừa xay vào đảo đều.",
  "3. Đun cho nồi sôi 5 phút thì nêm nếm lại gia vị cho vừa ăn, tắt bếp. ",
];

export const InstructionPage = () => {
  return (
    <SafeAreaView className="inset-0 h-48 content-end bg-[#FFF4ED]">
      <ScrollView className=" relative inset-0">
        <View className="ml-5 mr-5 flex flex-col">
          {data.map((item) => {
            return (
              <Text
                key={item}
                className="mb-3 text-[#5A2D22]"
                style={styles().textFontSemiBold}
              >
                {item}
              </Text>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
