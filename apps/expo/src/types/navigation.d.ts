import { RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Body: undefined;
  Mind: undefined;
  Social: undefined;
  Profile: undefined;
  LandingPage1: undefined;
  LandingPage2: undefined;
  LandingPage3: undefined;
  LandingPage4: undefined;
  EmotionChoosing: undefined;
  EmotionChoosing1: undefined;
  EmotionChoosing2: undefined;
};

export type ScreenProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};
