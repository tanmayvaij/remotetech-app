import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { RootStackParamsList } from "../data";
import LightDeviceScreen from "../screens/LightDeviceScreen";
import MachineDeviceScreen from "../screens/MachineDeviceScreen";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { color } from "../theme";
import CarmeraDeviceScreen from "../screens/CarmeraDeviceScreen";

const Tab = createMaterialTopTabNavigator<RootStackParamsList>();

const MaterialTopNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="LIGHT_DEVICE_SCREEN"
        component={LightDeviceScreen}
        options={{
          tabBarLabel: "Appliances",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="lightbulb"
              size={20}
              color={focused ? color.blue600 : color.gray300}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MACHINE_DEVICE_SCREEN"
        component={MachineDeviceScreen}
        options={{
          tabBarLabel: "Machine",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="laptop"
              size={20}
              color={focused ? color.blue600 : color.gray300}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CAMERA_DEVICE_SCREEN"
        component={CarmeraDeviceScreen}
        options={{
          tabBarLabel: "Camera",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="video-camera"
              size={20}
              color={focused ? color.blue600 : color.gray300}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MaterialTopNavigator;
