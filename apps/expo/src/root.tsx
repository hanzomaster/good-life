import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import {
  BodyScreen,
  HomeScreen,
  MindScreen,
  ProfileScreen,
  SocialScreen,
} from "./screens";
import { BodyIcon, HomeIcon, MindIcon, ProfileIcon, SocialIcon } from "./svgs";
import { RootStackParamList } from "./types/navigation";

const Tab = createMaterialBottomTabNavigator<RootStackParamList>();

const Root = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Body"
        screenOptions={({ route }) => ({
          tabBarBadge: route.name === "Mind" ? 3 : undefined,
          headerShown: true,
        })}
        shifting={true}
        activeColor="#FF835C"
        inactiveColor="#CBB8B1"
        compact={false}
        keyboardHidesNavigationBar={true}
        sceneAnimationEnabled={true}
        sceneAnimationType="shifting"
        barStyle={{ backgroundColor: "#FFF4ED" }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
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
    </NavigationContainer>
  );
};

export default Root;
