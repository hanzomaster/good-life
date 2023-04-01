import { useSignIn, useSignUp } from "@clerk/clerk-expo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";

import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import SignInWithOAuth from "../components/SignInWithOAuth";
import { AuthScreenProps, AuthStackParamList } from "../types/navigation";
import { Controller, useForm } from "react-hook-form";
import { styles } from "../root";
import { ForgotPasswordScreen } from "./forgotPassword";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const SignInSignUpScreen = () => {
  // return (
  //   <SafeAreaView className="bg-primary-background">
  //     <View className="h-full w-full p-4">
  //       <SignInWithOAuth />
  //     </View>
  //   </SafeAreaView>
  // );

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="Login" component={SignInScreen} />
      <Stack.Screen name="Register" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};

const SignInScreen = (props: AuthScreenProps<"Login">) => {
  const { isLoaded, setSession, signIn } = useSignIn();
  // const [emailAddress, setEmailAddress] = React.useState("");
  // const [password, setPassword] = React.useState("");
  // const onSignInPress = async () => {
  //   if (!isLoaded) {
  //     return;
  //   }

  //   try {
  //     const completeSignIn = await signIn.create({
  //       identifier: emailAddress,
  //       password,
  //     });

  //     await setSession(completeSignIn.createdSessionId);
  //   } catch (err: any) {
  //     console.log("Error:> " + err?.status || "");
  //     console.log("Error:> " + err?.errors ? JSON.stringify(err.errors) : err);
  //   }
  // };

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    alert(JSON.stringify(data));
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: data.email,
        password: data.password,
      });

      await setSession(completeSignIn.createdSessionId);
    } catch (err: any) {
      console.log("Error:> " + err?.status || "");
      console.log("Error:> " + err?.errors ? JSON.stringify(err.errors) : err);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <SafeAreaView className="absolute inset-0 content-end bg-[#FFF4ED] px-6">
      {/* <SignInWithOAuth />
      <View>
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Email..."
          placeholderTextColor="#000"
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
        />
      </View>

      <View>
        <TextInput
          value={password}
          placeholder="Password..."
          placeholderTextColor="#000"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity onPress={onSignInPress}>
        <Text>Sign in</Text>
      </TouchableOpacity>
      <View>
        <Text>Don't have an account?</Text>

        <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
          <Text>Sign up</Text>
        </TouchableOpacity>
      </View> */}

      <View className="absolute">
        <Image source={require("../assets/images/signin/Vector.png")} />
      </View>
      <View className=" mt-14 flex flex-row justify-between">
        <TouchableOpacity>
          <Image source={require("../assets/images/signin/Mask.png")} />
        </TouchableOpacity>
        <View className="flex flex-row ">
          <Text
            className="text-sm font-semibold text-[#A5A5A5]"
            style={styles().textFont}
          >
            Bạn chưa có tài khoản?
          </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Register")}
          >
            <Text
              className="text-sm font-semibold text-[#ff835c]"
              style={styles().textFont}
            >{` Đăng ký?`}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="mt-24">
        <Text
          className="mb-10 text-xl font-bold text-[#5A2D22]"
          style={styles().textFontBold}
        >
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
                    className="w-full px-3 py-2 text-inherit focus:outline-none"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles().textFont}
                  />
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
                      className="w-full px-3 py-2 text-inherit focus:outline-none"
                      secureTextEntry={!showPassword}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      style={styles().textFont}
                    />
                  </View>

                  <TouchableOpacity
                    onPress={() => {
                      setShowPassword(!showPassword);
                    }}
                    className="absolute right-0 mr-5"
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
              <Text className="mt-2 text-[#A5A5A5]" style={styles().textFont}>
                Vui lòng nhập vào trường này
              </Text>
            )}
          </View>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("ForgotPassword")}
          >
            <Text className="text-[#ff835c]" style={styles().textFont}>
              Quên mật khẩu
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          className="mx-8 mt-10 rounded-full bg-[#FF8669] py-3"
          onPress={handleSubmit(onSubmit)}
        >
          <Text
            className="m-auto text-base text-white"
            style={styles().textFont}
          >
            Đăng nhập
          </Text>
        </TouchableOpacity>

        <View className="my-8">
          <Image source={require("../assets/images/signin/Group_37198.png")} />
        </View>
        <SignInWithOAuth />
      </View>
    </SafeAreaView>
  );
};

const SignUpScreen = (props: AuthScreenProps<"Register">) => {
  const { isLoaded, setSession, signUp } = useSignUp();
  // const [emailAddress, setEmailAddress] = React.useState("");
  // const [password, setPassword] = React.useState("");
  const [code, setCode] = React.useState("");
  // const onSignUpPress = async () => {
  //   if (!isLoaded) {
  //     return;
  //   }

  //   try {
  //     await signUp.create({
  //       emailAddress: emailAddress,
  //       password,
  //     });

  //     await signUp.prepareEmailAddressVerification({
  //       strategy: "email_code",
  //     });
  //   } catch (err: any) {
  //     console.log("Error:> " + err?.status || "");
  //     console.log("Error:> " + err?.errors ? JSON.stringify(err.errors) : err);
  //   }
  // };

  const onPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setSession(completeSignUp.createdSessionId);
    } catch (err: any) {
      console.log("Error:> " + err?.status || "");
      console.log("Error:> " + err?.errors ? JSON.stringify(err.errors) : err);
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
    watch,
  } = useForm();

  const onSubmit = async (data: any) => {
    alert(JSON.stringify(data));

    // if (!isLoaded) {
    //   return;
    // }

    // try {
    //   await signUp.create({
    //     emailAddress: data.email,
    //     password: data.password,
    //   });

    //   await signUp.prepareEmailAddressVerification({
    //     strategy: "email_code",
    //   });
    // } catch (err: any) {
    //   console.log("Error:> " + err?.status || "");
    //   console.log("Error:> " + err?.errors ? JSON.stringify(err.errors) : err);
    // }
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  return (
    // <>
    //   <View>
    //     <TextInput
    //       autoCapitalize="none"
    //       value={emailAddress}
    //       placeholder="Email..."
    //       placeholderTextColor="#000"
    //       onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
    //     />
    //   </View>

    //   <View>
    //     <TextInput
    //       value={password}
    //       placeholder="Password..."
    //       placeholderTextColor="#000"
    //       secureTextEntry={true}
    //       onChangeText={(password) => setPassword(password)}
    //     />
    //   </View>
    //   <TouchableOpacity onPress={onSignUpPress}>
    //     <Text>Sign up</Text>
    //   </TouchableOpacity>
    //   <View>
    //     <Text>Have an account?</Text>

    //     <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
    //       <Text>Sign in</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View>
    //     <View>
    //       <TextInput
    //         value={code}
    //         placeholder="Code..."
    //         placeholderTextColor="#000"
    //         onChangeText={(code) => setCode(code)}
    //       />
    //     </View>
    //     <TouchableOpacity onPress={onPress}>
    //       <Text>Verify Email</Text>
    //     </TouchableOpacity>
    //   </View>
    // </>

    <SafeAreaView className="absolute inset-0 content-end bg-[#FFF4ED] px-6">
      <View className="absolute">
        <Image source={require("../assets/images/signin/Vector.png")} />
      </View>
      <View className=" mt-14 flex flex-row justify-between">
        <TouchableOpacity>
          <Image source={require("../assets/images/signin/Mask.png")} />
        </TouchableOpacity>
        <View className="flex flex-row ">
          <Text
            className="text-sm font-semibold text-[#A5A5A5]"
            style={styles().textFont}
          >
            Bạn đã có tài khoản?
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text
              className="text-sm font-semibold text-[#ff835c]"
              style={styles().textFont}
            >{` Đăng nhập?`}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="mt-24">
        <Text
          className="mb-10 text-xl font-bold text-[#5A2D22]"
          style={styles().textFontBold}
        >
          Đăng ký
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
                    className="w-full px-3 py-2 text-inherit focus:outline-none"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles().textFont}
                  />
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
                      placeholder="Mật khẩu"
                      className="w-full px-3 py-2 text-inherit focus:outline-none"
                      secureTextEntry={!showPassword}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      style={styles().textFont}
                    />
                  </View>

                  <TouchableOpacity
                    onPress={() => {
                      setShowPassword(!showPassword);
                    }}
                    className="absolute right-0 mr-5"
                  >
                    <Image
                      source={require("../assets/images/signin/Group.png")}
                      className=""
                    />
                  </TouchableOpacity>
                </View>
              )}
              name="password"
              rules={{
                required: true,
                minLength: 8,
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message: "Mật khẩu phải có ít nhất 8 ký tự",
                },
              }}
            />
            {errors.password && (
              <Text className="mt-2 text-[#A5A5A5]" style={styles().textFont}>
                Vui lòng nhập vào trường này
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
                      placeholder="Nhập lại mật khẩu"
                      className="w-full px-3 py-2 text-inherit focus:outline-none"
                      secureTextEntry={!showRepeatPassword}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      style={styles().textFont}
                    />
                  </View>

                  <TouchableOpacity
                    onPress={() => {
                      setShowRepeatPassword(!showRepeatPassword);
                    }}
                    className="absolute right-0 mr-5"
                  >
                    <Image
                      source={require("../assets/images/signin/Group.png")}
                      className=""
                    />
                  </TouchableOpacity>
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
              errors.repeatPassword.type === "validate" && (
                <Text className="mt-2 text-[#A5A5A5]" style={styles().textFont}>
                  Mật khẩu không khớp
                </Text>
              )}
          </View>
        </View>
        <TouchableOpacity
          className="mx-8 mt-10 rounded-full bg-[#FF8669] py-3"
          onPress={handleSubmit(onSubmit)}
        >
          <Text
            className="m-auto text-base text-white"
            style={styles().textFont}
          >
            Đăng ký
          </Text>
        </TouchableOpacity>
      </View>

      <View className="inset-x-0 mt-20 flex flex-col">
        <View className="mt-10 flex flex-row justify-center">
          <TouchableOpacity>
            <Text
              className="text-sm text-[#BABABA] underline"
              style={styles().textFont}
            >
              Chính sách bảo mật
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mt-4 flex flex-row justify-center">
          <TouchableOpacity>
            <Text
              className="text-sm text-[#BABABA] underline"
              style={styles().textFont}
            >
              Điều khoản sử dụng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SignInSignUpScreen;
