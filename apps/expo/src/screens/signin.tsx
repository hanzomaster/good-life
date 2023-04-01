import { useSignIn, useSignUp } from "@clerk/clerk-expo";
import React from "react";

import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SignInWithOAuth from "../components/SignInWithOAuth";

export const SignInSignUpScreen = () => {
  // return (
  //   <SafeAreaView className="bg-primary-background">
  //     <View className="h-full w-full p-4">
  //       <SignInWithOAuth />
  //     </View>
  //   </SafeAreaView>
  // );
  const signUp = useSignUp();
  const signIn = useSignIn();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [code, setCode] = React.useState("");

  const onSignUpPress = async () => {
    if (!signUp.isLoaded) {
      return;
    }

    try {
      await signUp.signUp.create({
        emailAddress,
        password,
      });

      await signUp.signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });
    } catch (err: any) {
      // log("Error:> " + (err.errors ? err.errors[0].message : err));
      console.log(err.errors ? err.errors[0].message : err);
    }
  };
  const onSignInPress = async () => {
    if (!signIn.isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.signIn.create({
        identifier: emailAddress,
        password,
      });

      await signIn.setSession(completeSignIn.createdSessionId);
    } catch (err: any) {
      console.log("Error:> " + err?.status || "");
      console.log("Error:> " + err?.errors ? JSON.stringify(err.errors) : err);
    }
  };
  const onPress = async () => {
    if (!signUp.isLoaded) {
      return;
    }

    try {
      const completeSignUp =
        await signUp.signUp.attemptEmailAddressVerification({
          code,
        });

      await signUp.setSession(completeSignUp.createdSessionId);
    } catch (err: any) {
      console.log("Error:> " + err?.status || "");
      console.log("Error:> " + err?.errors ? JSON.stringify(err.errors) : err);
    }
  };

  return (
    <SafeAreaView>
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

      <TouchableOpacity onPress={onSignUpPress}>
        <Text>Sign up</Text>
      </TouchableOpacity>
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
      <TouchableOpacity onPress={onSignInPress}>
        <Text>Sign in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
