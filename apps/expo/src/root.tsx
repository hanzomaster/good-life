import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dimensions, StyleSheet, View } from "react-native";
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
  ProfileStackNavigator,
  SocialScreen,
} from "./screens";
import { RootStackParamList } from "./types/navigation";

const Tab = createBottomTabNavigator<RootStackParamList>();

// Gap stuff
const { width } = Dimensions.get("window");
const gap = 12;
const itemPerRow = 2;
const totalGapSize = (itemPerRow - 1) * gap;
const windowWidth = width;
const childWidth =
  (windowWidth - (itemPerRow - 1) * gap - gap * 4) / itemPerRow;

export const styles = (props?: any) =>
  StyleSheet.create({
    textFont: {
      fontFamily: "Quicksand_500Medium",
    },
    textFontBold: {
      fontFamily: "Quicksand_700Bold",
    },
    textFontSemiBold: {
      fontFamily: "Quicksand_600SemiBold",
    },

    itemsWrap: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      marginVertical: -(gap / 2),
      marginHorizontal: -(gap / 2),
    },
    singleItem: {
      marginHorizontal: gap / 2,
      marginVertical: gap / 2,

      minWidth: (windowWidth - (itemPerRow - 1) * gap - gap * 4) / props,
      maxWidth: (windowWidth - (itemPerRow - 1) * gap - gap * 4) / props,
    },

    singleItemCloser: {
      marginHorizontal: 0,
      marginVertical: 0,

      minWidth: (windowWidth - (itemPerRow - 1) * gap - gap * 4) / props,
      maxWidth: (windowWidth - (itemPerRow - 1) * gap - gap * 4) / props,
    },

    GridHorizontal: {
      marginHorizontal: 0,
      marginVertical: 0,

      // minWidth: (windowWidth - (itemPerRow - 1) * gap - gap * 4) / 3,
      // maxWidth: (windowWidth - (itemPerRow - 1) * gap - gap * 4) / 3,
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
          tabBarLabel: "Trang chủ",
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
          tabBarLabel: "Kết nối",
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
        component={ProfileStackNavigator}
        options={{
          tabBarAccessibilityLabel: "Profile",
          tabBarLabel: "Hồ sơ",
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
