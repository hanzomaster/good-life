import { StatusBar } from "expo-status-bar";

import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TRPCProvider } from "./utils/trpc";

import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import {
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
  useFonts,
} from "@expo-google-fonts/quicksand";
import Constants from "expo-constants";

import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme, Provider } from "react-native-paper";
import Root from "./root";
import { GroupPage } from "./screens/group/groupPage";
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
  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig?.extra?.CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <SignedIn>
        <TRPCProvider>
          <SafeAreaProvider>
            <Provider theme={theme}>
              <NavigationContainer>
                <Root />
              </NavigationContainer>
              {/* <GroupPage /> */}
            </Provider>
            <StatusBar hidden={false} networkActivityIndicatorVisible={true} />
          </SafeAreaProvider>
        </TRPCProvider>
      </SignedIn>
      <SignedOut>
        <SafeAreaProvider>
          <Provider theme={theme}>
            <NavigationContainer>
              <GroupPage />
            </NavigationContainer>
          </Provider>
          <StatusBar hidden={false} networkActivityIndicatorVisible={true} />
        </SafeAreaProvider>
      </SignedOut>
    </ClerkProvider>
  );
};
