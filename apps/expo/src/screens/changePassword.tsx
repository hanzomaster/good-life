import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  TextInput,
} from "react-native";
import { AuthScreenProps } from "../types/navigation";
import { Controller, useForm } from "react-hook-form";
import { styles } from "../root";
import { Warning } from "postcss";

export const ChangePasswordScreen = (
  props: AuthScreenProps<"ChangePassword">,
) => {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const windowHeight = useWindowDimensions().height;

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data.password));
    props.navigation.navigate("Login");
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
          Đổi mật khẩu
        </Text>
        <Text
          className="mt-10 text-sm text-[#5A2D22]"
          style={styles().textFontSemiBold}
        >
          {`Bạn đang đăng nhập từ tài khoản Google với email ${props.route.params.email}`}
        </Text>
        <View className="mt-5">
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <View className="flex flex-row items-center justify-between rounded-md bg-white px-5 py-1">
                <View className="flex flex-row items-center">
                  <Image
                    source={require("../assets/images/signin/Frame.png")}
                  />
                  <TextInput
                    placeholder="Mật khẩu mới"
                    className="w-full px-3 py-2 text-inherit focus:outline-none"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    style={styles().textFont}
                    secureTextEntry={true}
                  />
                </View>
              </View>
            )}
            name="password"
            rules={{ required: true }}
          />
          {errors.password && errors.password.type === "required" && (
            <Text className="mt-2 text-[#A5A5A5]" style={styles().textFont}>
              Mật khẩu không được để trống
            </Text>
          )}
        </View>

        <View className="mt-5">
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <View className="flex flex-row items-center justify-between rounded-md bg-white px-5 py-1">
                <View className="flex flex-row items-center">
                  <Image
                    source={require("../assets/images/signin/Frame.png")}
                  />
                  <TextInput
                    placeholder="Nhập lại mật khẩu"
                    className="w-full px-3 py-2 text-inherit focus:outline-none"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    style={styles().textFont}
                    secureTextEntry={true}
                  />
                </View>
              </View>
            )}
            name="repeatPassword"
            rules={{
              required: true,
              validate: (value) => value === watch("password"),
            }}
          />
          {errors.repeatPassword &&
            errors.repeatPassword.type === "required" && (
              <Text className="mt-2 text-[#A5A5A5]" style={styles().textFont}>
                Vui lòng nhập vào trường này
              </Text>
            )}
          {errors.repeatPassword &&
            errors.repeatPassword.type === "validate" &&
            watch("password") !== "" && (
              <Text className="mt-2 text-[#A5A5A5]" style={styles().textFont}>
                Mật khẩu không khớp
              </Text>
            )}
        </View>
      </View>
      <View className="absolute bottom-0">
        <Image source={require("../assets/images/forgot/Group_37206.png")} />
      </View>
      <TouchableOpacity
        className=" inset-x-0 mx-20 mt-14 items-center rounded-full bg-[#FF835C] py-3"
        onPress={handleSubmit(onSubmit)}
      >
        <Text className="text-base text-white" style={styles().textFont}>
          Xong
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
