import { useSignIn, useSignUp } from "@clerk/clerk-expo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Text, TextInput, TouchableOpacity, View } from "react-native";
import SignInWithOAuth from "../components/SignInWithOAuth";
import { AuthScreenProps, AuthStackParamList } from "../types/navigation";

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
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={SignInScreen} />
      <Stack.Screen name="Register" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

const SignInScreen = (props: AuthScreenProps<"Login">) => {
  const { isLoaded, setSession, signIn } = useSignIn();
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });

      await setSession(completeSignIn.createdSessionId);
    } catch (err: any) {
      console.log("Error:> " + err?.status || "");
      console.log("Error:> " + err?.errors ? JSON.stringify(err.errors) : err);
    }
  };

  return (
    <>
      <SignInWithOAuth />
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
      </View>
    </>
  );
};

const SignUpScreen = (props: AuthScreenProps<"Register">) => {
  const { isLoaded, setSession, signUp } = useSignUp();
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [code, setCode] = React.useState("");
  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress: emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });
    } catch (err: any) {
      console.log("Error:> " + err?.status || "");
      console.log("Error:> " + err?.errors ? JSON.stringify(err.errors) : err);
    }
  };

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
  return (
    <>
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
      <TouchableOpacity onPress={onSignUpPress}>
        <Text>Sign up</Text>
      </TouchableOpacity>
      <View>
        <Text>Have an account?</Text>

        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
          <Text>Sign in</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View>
          <TextInput
            value={code}
            placeholder="Code..."
            placeholderTextColor="#000"
            onChangeText={(code) => setCode(code)}
          />
        </View>
        <TouchableOpacity onPress={onPress}>
          <Text>Verify Email</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default SignInSignUpScreen;
