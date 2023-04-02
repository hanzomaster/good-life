import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../root";
import { Controller, useForm } from "react-hook-form";
import { AuthScreenProps } from "../types/navigation";

export const ForgotPasswordScreen = (
  props: AuthScreenProps<"ForgotPassword">,
) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const windowHeight = useWindowDimensions().height;

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
    props.navigation.navigate("ChangePassword", { email: data.email });
  };
  return (
    <SafeAreaView
      className="absolute inset-0 content-end bg-[#FFF4ED]"
      style={[{ minHeight: Math.round(windowHeight) }]}
    >
      <View className="absolute top-0 left-0">
        <Image source={require("../assets/images/forgot/Vector.png")} />
      </View>
      <TouchableOpacity
        className=" absolute ml-6 mt-20"
        onPress={() => props.navigation.navigate("Login")}
      >
        <Image source={require("../assets/images/signin/Mask.png")} />
      </TouchableOpacity>
      <View className="mt-44 px-6">
        <Text className="text-xl text-[#5A2D22]" style={styles().textFontBold}>
          Quên mật khẩu
        </Text>
        <View className="mt-10">
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <View className="flex flex-row items-center justify-between rounded-md bg-white px-5 py-1">
                <View className="flex flex-row items-center">
                  <Image
                    source={require("../assets/images/forgot/Message.png")}
                  />
                  <TextInput
                    placeholder="Nhập địa chỉ Email của bạn"
                    className="w-full px-3 py-2 text-inherit focus:outline-none"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    style={styles().textFont}
                  />
                </View>
              </View>
            )}
            name="email"
            rules={{ required: true }}
          />
          {errors.email && (
            <Text className="mt-2 text-[#A5A5A5]" style={styles().textFont}>
              Vui lòng nhập vào trường này
            </Text>
          )}
        </View>

        <View className="mt-5 w-full">
          <Text className="text-sm text-[#a5a5a5]" style={styles().textFont}>
            Chúng tôi sẽ gửi cho bạn tin nhắn về email của bạn. Vui lòng kiểm
            tra email để thiết lập mật khẩu.
          </Text>
        </View>
      </View>
      <View className="absolute bottom-0">
        <Image source={require("../assets/images/forgot/Group_37206.png")} />
      </View>
      <TouchableOpacity
        className="absolute inset-x-0 bottom-24 items-center"
        onPress={handleSubmit(onSubmit)}
      >
        <Image source={require("../assets/images/forgot/Group_37056.png")} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
