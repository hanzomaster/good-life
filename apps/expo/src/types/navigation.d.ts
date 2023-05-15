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
  EmotionChoosing: undefined;
  EmotionChoosing1: undefined;
  EmotionChoosing2: undefined;
  Suggest: undefined;
  GroupLib: undefined;
  GroupChat: undefined;
  GroupDesc: undefined;
  GroupPost: undefined;
  GroupIntro: undefined;
  GroupPage: undefined;
  Notification: undefined;
  Search: undefined;
  HomeStack: undefined;
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

export type ProfileStackParamList = {
  Profile: undefined;
  CheckIn: undefined;
  Infomation: undefined;
  Love: undefined;
  Recent: undefined;
  Save: undefined;
  Security: undefined;
};

export type SignOutStackParamList = {
  SignIn: undefined;
  LandingPage2: undefined;
  LandingPage3: undefined;
  LandingPage4: undefined;
};

export type MusicStackParamList = {
  Music: undefined;
  MusicPlayer: {
    list: Array<Song>;
    resumeSong: () => void;
    pauseSong: () => void;
    nextSong: (index: number) => void;
    previousSong: (index: number) => void;
  };
};

export type MusicScreenProps<T extends keyof MusicStackParamList> = {
  navigation: NativeStackNavigationProp<MusicStackParamList, T>;
  route: RouteProp<MusicStackParamList, T>;
};

export type SignOutScreenProps<T extends keyof SignOutStackParamList> = {
  navigation: NativeStackNavigationProp<SignOutStackParamList, T>;
  route: RouteProp<SignOutStackParamList, T>;
};

export type ProfileScreenProps<T extends keyof ProfileStackParamList> = {
  navigation: NativeStackNavigationProp<ProfileStackParamList, T>;
  route: RouteProp<ProfileStackParamList, T>;
};

export type AuthScreenProps<T extends keyof AuthStackParamList> = {
  navigation: NativeStackNavigationProp<AuthStackParamList, T>;
  route: RouteProp<AuthStackParamList, T>;
};

export type ScreenProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};
