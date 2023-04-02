import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Image,
  useWindowDimensions,
  TextInput,
} from "react-native";
import { Controller, useForm } from "react-hook-form";
import { styles } from "../root";
import { AuthScreenProps } from "../types/navigation";
import { useSignUp } from "@clerk/clerk-expo";

export const VerifyEmailScreen = (props: AuthScreenProps<"VerifyEmail">) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const windowHeight = useWindowDimensions().height;

  const { isLoaded, setSession, signUp } = useSignUp();

  const onSubmit = async (data: any) => {
    if (!isLoaded) {
      return;
    }
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: data.code,
      });

      await setSession(completeSignUp.createdSessionId);
    } catch (err: any) {
      console.log("Error:> " + err?.status || "");
      console.log("Error:> " + err?.errors ? JSON.stringify(err.errors) : err);
    }
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
          Nhập mã xác nhận
        </Text>
        <View className="mt-10 w-full">
          <Text className="text-sm text-[#a5a5a5]" style={styles().textFont}>
            {`Vui long nhập mã xác nhận đã được gửi đến địa chỉ ${props.route.params.email} của bạn.`}
          </Text>
        </View>
        <View className="mt-5">
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <View className="flex flex-row items-center justify-between rounded-md bg-white px-5 py-1">
                <View className="flex flex-row items-center">
                  <Image
                    source={require("../assets/images/forgot/Message.png")}
                  />
                  <TextInput
                    placeholder="123456"
                    className="w-full px-3 py-2 text-inherit focus:outline-none"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    style={styles().textFont}
                  />
                </View>
              </View>
            )}
            name="code"
            rules={{ required: true }}
          />
          {errors.email && (
            <Text className="mt-2 text-[#A5A5A5]" style={styles().textFont}>
              Vui lòng nhập vào trường này
            </Text>
          )}
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
