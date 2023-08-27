import { StatusBar } from "expo-status-bar";

import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import {
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
  useFonts,
} from "@expo-google-fonts/quicksand";
import Constants from "expo-constants";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultTheme, Provider } from "react-native-paper";
import { AudioStatusProvider } from "./context/audio";
import HomeStackNavigator from "./homeStack";
import Root from "./root";
import { LandingPage2, LandingPage3, LandingPage4 } from "./screens";
import { BodyPage } from "./screens/body/bodyinf";
import { NutritionPage } from "./screens/body/nutritionpage";
import { GroupIntroduce } from "./screens/group/groupIntro";
import { GroupPage } from "./screens/group/groupPage";
import { MindDetailScreen } from "./screens/mindDetail";
import MusicScreen from "./screens/music";
import { MusicPlayerScreen } from "./screens/musicPlayer";
import { NotificationPage } from "./screens/notification";
import { Search } from "./screens/search";
import SignInSignUpScreen from "./screens/signin";
import { RootStackParamList, SignOutStackParamList } from "./types/navigation";
import { tokenCache } from "./utils/cache";

// Remove background color from the bottom navigation bar when focus
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: "transparent",
  },
};

export const App = () => {
  const [loaded] = useFonts({
    Quicksand_500Medium,
    Quicksand_700Bold,
    Quicksand_600SemiBold,
  });
  if (!loaded) {
    return null;
  }

  const Stack = createNativeStackNavigator<RootStackParamList>();
  const SignOutStack = createNativeStackNavigator<SignOutStackParamList>();

  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig?.extra?.CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      {/* <AudioProvider> */}
      <SignedIn>
        <SafeAreaProvider>
          <Provider theme={theme}>
            <AudioStatusProvider>
              <NavigationContainer>
                <Stack.Navigator
                  screenOptions={{
                    headerShown: false,
                  }}
                >
                  <Stack.Screen name="Root" component={Root} />
                  {/* <Stack.Screen name="GroupChat" component={GroupChat} /> */}
                  <Stack.Screen name="BodyInf" component={BodyPage} />

                  <Stack.Screen
                    name="NutritionPage"
                    component={NutritionPage}
                  />

                  <Stack.Screen name="Music" component={MusicScreen} />

                  <Stack.Screen
                    name="MusicPlayer"
                    component={MusicPlayerScreen}
                  />
                  <Stack.Screen
                    name="MindDetail"
                    component={MindDetailScreen}
                  />
                  <Stack.Screen name="GroupIntro" component={GroupIntroduce} />
                  <Stack.Screen name="GroupPage" component={GroupPage} />
                  <Stack.Screen
                    name="Notification"
                    component={NotificationPage}
                  />
                  <Stack.Screen
                    name="HomeStack"
                    component={HomeStackNavigator}
                  />
                  <Stack.Screen name="Search" component={Search} />
                </Stack.Navigator>
              </NavigationContainer>
              {/* <GroupPage /> */}
            </AudioStatusProvider>
          </Provider>
          <StatusBar hidden={false} networkActivityIndicatorVisible={true} />
        </SafeAreaProvider>
      </SignedIn>
      <SignedOut>
        <SafeAreaProvider>
          <Provider theme={theme}>
            <NavigationContainer>
              <SignOutStack.Navigator
                screenOptions={{
                  headerShown: false,
                  animation: "slide_from_right",
                }}
                initialRouteName="LandingPage2"
              >
                <SignOutStack.Screen
                  name="SignIn"
                  component={SignInSignUpScreen}
                />
                <SignOutStack.Screen
                  name="LandingPage2"
                  component={LandingPage2}
                />
                <SignOutStack.Screen
                  name="LandingPage3"
                  component={LandingPage3}
                />
                <SignOutStack.Screen
                  name="LandingPage4"
                  component={LandingPage4}
                />
              </SignOutStack.Navigator>
            </NavigationContainer>
          </Provider>
          <StatusBar hidden={false} networkActivityIndicatorVisible={true} />
        </SafeAreaProvider>
      </SignedOut>
      {/* </AudioProvider> */}
    </ClerkProvider>
  );
};
