import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { EmotionChoosing } from "./screens/chooseEmotion/chooseEmotion";
import { EmotionChoosing1 } from "./screens/chooseEmotion/chooseEmotion1";
import { EmotionChoosing2 } from "./screens/chooseEmotion/chooseEmotion2";
import { RootStackParamList } from "./types/navigation";
import { MusicScreen } from "./screens/music";

const HomeStack = createNativeStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="EmotionChoosing" component={EmotionChoosing} />
      <HomeStack.Screen name="EmotionChoosing1" component={EmotionChoosing1} />
      <HomeStack.Screen name="EmotionChoosing2" component={EmotionChoosing2} />
      <HomeStack.Screen name="Music" component={MusicScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
