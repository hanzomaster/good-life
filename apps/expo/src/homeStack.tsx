import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { LandingPage2 } from "./screens/landingpage/landingpage2";
import { LandingPage3 } from "./screens/landingpage/landingpage3";
import { LandingPage4 } from "./screens/landingpage/landingpage4";

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="LandingPage2" component={LandingPage2} />
      <HomeStack.Screen name="LandingPage3" component={LandingPage3} />
      <HomeStack.Screen name="LandingPage4" component={LandingPage4} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
