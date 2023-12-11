import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamsList } from "../data";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import { color } from "../theme";
import UserProfileScreen from "../screens/UserProfileScreen";
import MaterialTopNavigator from "./MaterialTopNavigator";

const BottomTabNavigator = () => {
  const BottomTab = createBottomTabNavigator<RootStackParamsList>();

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="HOME_SCREEN"
        component={HomeScreen}
        options={{
          title: "Home",
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={26}
              color={focused ? color.blue700 : color.gray300}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="MATERIAL_TOP_NAVIGATOR"
        component={MaterialTopNavigator}
        options={{
          title: "Devices",
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="laptop-house"
              size={26}
              color={focused ? color.blue700 : color.gray300}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="USER_PROFILE_SCREEN"
        component={UserProfileScreen}
        options={{
          title: "Profile",
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user"
              size={26}
              color={focused ? color.blue700 : color.gray300}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
