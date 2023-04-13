import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../root";

const data = [
  "500 gram bí ngô đã xắt vỏ",
  "5l sữa tươi không đường",
  "50 gram bơ thực vật",
  "500 gram hạt bí tách vỏ",
  "30 gram đường không béo",
];

export const IngredientPage = () => {
  return (
    <SafeAreaView className="absolute inset-0 content-end bg-[#FFF4ED]">
      <ScrollView className="">
        <View className="ml-5 flex flex-col">
          {data.map((item) => {
            return (
              <Text
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
