import { RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Mind } from "../screens/mind";
import { Song } from "../screens/music";

export type RootStackParamList = {
  MindDetail: {
    mind: {
      id: number;
      name: string;
      description?: string;
      image: any;
      heart: number;
      date: string;
      time: number;
    };
  };
  Root: undefined;
  Home: undefined;
  Body: undefined;
  BodyInf: undefined;
  Nutrition: undefined;
  NutritionPage: undefined;
  Mind: undefined;
  Music: undefined;
  MusicPlayer: {
    list: Array<Song>;
    resumeSong: () => void;
    pauseSong: () => void;
    nextSong: (index: number) => void;
    previousSong: (index: number) => void;
  };
  MindDetail: {
    mind: Mind;
  };
  Social: undefined;
  Profile: undefined;
  LandingPage1: undefined;
  LandingPage2: undefined;
  LandingPage3: undefined;
  LandingPage4: undefined;
  EmotionChoosing: undefined;
  EmotionChoosing1: undefined;
  EmotionChoosing2: undefined;
  GroupLib: undefined;
  GroupChat: undefined;
  GroupDesc: undefined;
  GroupPost: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  ChangePassword: {
    email: string;
  };
  VerifyEmail: {
    email: string;
  };
};

export type AuthScreenProps<T extends keyof AuthStackParamList> = {
  navigation: NativeStackNavigationProp<AuthStackParamList, T>;
  route: RouteProp<AuthStackParamList, T>;
};

export type ScreenProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};
