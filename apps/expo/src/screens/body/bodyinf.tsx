import {
  Image,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export const BodyPage = () => {
  return (
    <SafeAreaView className="absolute inset-0 content-end bg-[#7A9861]">
      <View className=" absolute top-0 left-0">
        <Image
          className="h-auto object-contain"
          source={require("../../assets/images/body/body_page_header.png")}
        />
        <TouchableOpacity className="absolute top-20 left-5 p-1">
          <Image source={require("../../assets/images/body/back.png")} />
        </TouchableOpacity>
      </View>

      <View className="absolute inset-x-0 mt-40 ml-auto mr-auto flex h-2/3 flex-col ">
        <View className=" relative inset-x-0 mx-auto mt-10 w-full items-center">
          <View className="absolute items-center justify-center">
            <Image
              className="object-fit w-auto items-center"
              source={require("../../assets/images/body/logo.png")}
            />

            <Text className=" font-quicksand flex-wrap text-justify text-lg text-[#FFFF] ">
              Một trải nghiệm studio ngay tại nhà
            </Text>
          </View>

          <View className=" relative inset-x-0 mx-auto mt-10 w-3/4 items-center">
            <Image
              className=" relative mt-20 h-fit w-fit "
              source={require("../../assets/images/body/center_image_body_page.png")}
            />

            <Text className=" font-quicksand mt-10 h-auto flex-wrap text-justify text-sm text-[#FFFF] ">
              Bạn có thể tập luyện bất cứ đâu, bất cứ lúc nào theo các lớp tập
              thú vị và hiệu quả của TGL. Mỗi tuần, TGL sẽ ra mắt 4 lớp tập mới
              hoàn toàn, thân thiện cho người mới bắt đầu, áp dụng kỹ thuật và
              phương pháp khoa học, để tạo dáng và săn gọn cơ thể người phụ nữ
              một cách thích thú, an toàn, lâu dài. Hãy tập với TGL 4-7
              ngày/tuần để có kết quả tốt nhất
            </Text>
          </View>
        </View>
      </View>

      <View className=" absolute inset-x-0 bottom-0 items-stretch">
        <Image
          className="h-fit w-fit object-cover"
          source={require("../../assets/images/body/body_page_footer.png")}
        />
      </View>
    </SafeAreaView>
  );
};
