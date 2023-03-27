import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import {
  BodyIcon,
  HomeIcon,
  MindIcon,
  ProfileIcon,
  SocialIcon,
} from "./assets/svgs";
import {
  BodyScreen,
  HomeScreen,
  MindScreen,
  ProfileScreen,
  SocialScreen,
} from "./screens";
import { RootStackParamList } from "./types/navigation";

const Tab = createBottomTabNavigator<RootStackParamList>();

export const styles = StyleSheet.create({
  textFont: {
    fontFamily: "Quicksand_500Medium",
  },
  textFontBold: {
    fontFamily: "Quicksand_700Bold",
    fontWeight: "bold",
  },
  textFontSemiBold: {
    fontFamily: "Quicksand_600SemiBold",
    fontWeight: "bold",
  },
});

const Root = () => {
  return (
    <Tab.Navigator
      initialRouteName="Body"
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: "#FF835C",
        tabBarInactiveTintColor: "#CBB8B1",
        tabBarInactiveBackgroundColor: "#FFF4ED",
        tabBarActiveBackgroundColor: "#FFF4ED",
        tabBarLabelStyle: {
          fontFamily: "Quicksand_500Medium",
          fontWeight: "normal",
          fontSize: 11,
          lineHeight: 21,
        },
        tabBarStyle: {
          height: 60,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarAccessibilityLabel: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <View className="border-t-primary-orange border-t-2 pt-1">
                <HomeIcon color={color} />
              </View>
            ) : (
              <HomeIcon color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Body"
        component={BodyScreen}
        options={{
          tabBarAccessibilityLabel: "Body",
          tabBarLabel: "Body",
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <View className="border-t-primary-orange border-t-2 pt-1">
                <BodyIcon color={color} />
              </View>
            ) : (
              <BodyIcon color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Mind"
        component={MindScreen}
        options={{
          tabBarAccessibilityLabel: "Mind",
          tabBarLabel: "Mind",
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <View className="border-t-primary-orange border-t-2 pt-1">
                <MindIcon color={color} />
              </View>
            ) : (
              <MindIcon color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Social"
        component={SocialScreen}
        options={{
          tabBarAccessibilityLabel: "Social",
          tabBarLabel: "Social",
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <View className="border-t-primary-orange border-t-2 pt-1">
                <SocialIcon color={color} />
              </View>
            ) : (
              <SocialIcon color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarAccessibilityLabel: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <View className="border-t-primary-orange border-t-2 pt-1">
                <ProfileIcon color={color} />
              </View>
            ) : (
              <ProfileIcon color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Root;
