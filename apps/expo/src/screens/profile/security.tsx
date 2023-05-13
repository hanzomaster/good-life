import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../root";

import React from "react";
import { ProfileScreenProps } from "../../types/navigation";

export const Security = (props: ProfileScreenProps<"Security">) => {
  return (
    <SafeAreaView className="absolute inset-0 content-end bg-[#FFF4ED]">
      <ScrollView>
        <View className=" absolute top-5 left-0 flex flex-row">
          <TouchableOpacity
            className="absolute left-5 p-1"
            onPress={() => props.navigation.pop()}
          >
            <Image
              className=""
              source={require("../../assets/images/profile/security/back.png")}
            />
          </TouchableOpacity>
          <Text
            className="font-quicksand absolute mt-1 ml-20 text-2xl text-[#5A2D22] "
            style={styles().textFontBold}
          >
            Bảo mật
          </Text>
        </View>

        <View className=" mt-20">
          <Text
            className="font-quicksand absolute ml-5 text-lg text-[#5A2D22] "
            style={styles().textFontBold}
          >
            Các điều khoản
          </Text>
          <Image
            className="mt-10 ml-5"
            source={require("../../assets/images/profile/security/tab.png")}
          />
        </View>

        <View className="mt-50  left-[5%]  w-[90%]">
          <Text
            className="font-quicksand mt-5 text-sm text-[#5A2D22] "
            style={styles().textFont}
          >
            Chào mừng bạn đến với The Good Life (TGL). Việc bạn sử dùng website
            này đồng nghĩa với bạn đồng ý những Quy định và Điều kiện sử dụng
            này. TGL có quyền thay đổi, chỉnh sửa, bổ sung hoặc lược bỏ bất kỳ
            điều khoản nào của Quy định và Điều kiện sử dụng có hiệu lực ngày
            khi được đăng trên trang web mà không cần thông báo trước.
          </Text>

          <Text
            className="font-quicksand mt-2 text-sm text-[#5A2D22] "
            style={styles().textFontSemiBold}
          >
            1.Hướng dẫn sử dụng
          </Text>

          <View className="mt-2 flex flex-row">
            <Image
              className="mt-2"
              source={require("../../assets/images/profile/security/icon.png")}
            />
            <Text
              className="font-quicksand text-sm text-[#5A2D22] "
              style={styles().textFont}
            >
              Người truy cập trang web phải đủ từ 18 tuổi và không mất năng lực
              hành vi dân sự.
            </Text>
          </View>

          <View className="mt-2 flex flex-row">
            <Image
              className="mt-2"
              source={require("../../assets/images/profile/security/icon.png")}
            />
            <Text
              className="font-quicksand text-sm text-[#5A2D22] "
              style={styles().textFont}
            >
              Chúng tôi cấp giấy phép sử dụng để bạn có thể mua sắm trên trang
              web trong khuôn khổ Quy định và Điều kiện sử dụng đã đề ra.
            </Text>
          </View>

          <View className="mt-2 flex flex-row">
            <Image
              className="mt-2"
              source={require("../../assets/images/profile/security/icon.png")}
            />
            <Text
              className="font-quicksand text-sm text-[#5A2D22] "
              style={styles().textFont}
            >
              Nghiêm cấm sử dụng bất kỳ phần nào của trang web này với mục đích
              thương mại hoặc nhân danh bất kỳ đối tác thứ ba nào nếu không được
              chứng tôi cho phép trước bằng văn bản.
            </Text>
          </View>

          <Text
            className="font-quicksand mt-5 text-sm text-[#5A2D22] "
            style={styles().textFontSemiBold}
          >
            2.Quy định về bảo mật
          </Text>

          <Text
            className="font-quicksand mt-2 text-sm text-[#5A2D22] "
            style={styles().textFont}
          >
            TGL sẽ không sử dụng thông tin cá nhân của bạn trên website này nếu
            không được phép. Nếu bạn đồng ý cung cấp thông tin cá nhân, số điện
            thoại, bạn sẽ được bảo vệ. Thông tin của bạn sẽ được sử dụng với mục
            đích liên lạc với bạn để cập nhật thông báo mới nhất của TGL.
          </Text>

          <Text
            className="font-quicksand mt-2 text-sm text-[#5A2D22] "
            style={styles().textFont}
          >
            Thông tin của bạn sẽ không được gửi cho bất kỳ ai sử dụng ngoài TGL,
            ngoại trừ những mở rộng cần thiết để bạn có thể tham gia vào trang
            web(Những nhà cung cấp dịch vụ, đối tác, quảng cáo,...)và yêu cầu
            cung cấp bới pháp luật.
          </Text>
        </View>

        <View className=" mt-20">
          <Image
            className=""
            source={require("../../assets/images/profile/security/footer.png")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
