import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
export const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <SafeAreaView className="absolute inset-0 content-end bg-[#FFF4ED] px-6">
      <View className="absolute">
        <Image source={require("../common/signin/Vector.png")} />
      </View>
      <View className=" mt-14 flex flex-row justify-between">
        <TouchableOpacity>
          <Image source={require("../assets/images/signin/Mask.png")} />
        </TouchableOpacity>
        <View className="flex flex-row ">
          <Text className="text-sm font-semibold text-[#A5A5A5]">
            Bạn chưa có tài khoản?
          </Text>
          <Text className="text-sm font-semibold text-[#ff835c]">{` Đăng ký?`}</Text>
        </View>
      </View>
      <View className="mt-24">
        <Text className="mb-10 text-xl font-bold text-[#5A2D22]">
          Đăng nhập
        </Text>
        <View className="flex flex-col gap-5">
          <View>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View className="flex flex-row items-center rounded-md bg-white px-5 py-1">
                  <Image
                    source={require("../assets/images/signin/Message.png")}
                  />
                  <TextInput
                    placeholder="Email"
                    className="px-3 py-2 text-inherit focus:outline-none"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                </View>
              )}
              name="email"
              rules={{ required: true }}
            />
            {errors.email && (
              <Text className="mt-2 text-[#ff835c]">
                This field is required
              </Text>
            )}
          </View>

          <View>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View className="flex flex-row items-center justify-between rounded-md bg-white px-5 py-1">
                  <View className="flex flex-row items-center">
                    <Image
                      source={require("../assets/images/signin/Frame.png")}
                    />
                    <TextInput
                      placeholder="Password"
                      className="px-3 py-2 text-inherit focus:outline-none"
                      secureTextEntry={!showPassword}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  </View>

                  <TouchableOpacity
                    onPress={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    <Image
                      source={require("../assets/images/signin/Group.png")}
                    />
                  </TouchableOpacity>
                </View>
              )}
              name="password"
              rules={{ required: true }}
            />
            {errors.password && (
              <Text className="mt-2 text-[#ff835c]">
                This field is required
              </Text>
            )}
          </View>

          <Text className="text-[#ff835c]">Quên mật khẩu</Text>
        </View>
        <TouchableOpacity
          className="mx-8 mt-10 rounded-full bg-[#FF8669] py-3"
          onPress={handleSubmit(onSubmit)}
        >
          <Text className="m-auto text-base text-white">Đăng nhập</Text>
        </TouchableOpacity>

        <View className="mt-8">
          <Image source={require("../assets/images/signin/Group_37198.png")} />
        </View>
      </View>
    </SafeAreaView>
  );
};
