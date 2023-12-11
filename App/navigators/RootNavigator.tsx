import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import UserRegisterScreen from "../screens/UserRegisterScreen";
import UserLoginScreen from "../screens/UserLoginScreen";
import { useAuth } from "../components/AuthProvider";
import { RootStackParamsList } from "../data";
import BottomTabNavigator from "./BottomTabNavigator";
import AddDeviceScreen from "../screens/AddDeviceScreen";
import EditDeviceScreen from "../screens/EditDeviceScreen";

const RootNavigator = () => {
  const { isAuthenticated } = useAuth();

  const Stack = createNativeStackNavigator<RootStackParamsList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: "fade",
        }}
      >
        {!isAuthenticated ? (
          <Stack.Group>
            <Stack.Screen
              options={{ headerShown: false }}
              name="ONBOARDING_SCREEN"
              component={OnBoardingScreen}
            />
            <Stack.Screen
              options={{
                headerTitle: "Register",
                headerTitleAlign: "center",
              }}
              name="USER_REGISTER_SCREEN"
              component={UserRegisterScreen}
            />
            <Stack.Screen
              options={{
                headerTitle: "Login",
                headerTitleAlign: "center",
              }}
              name="USER_LOGIN_SCREEN"
              component={UserLoginScreen}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen
              component={BottomTabNavigator}
              name="BOTTOM_TAB_NAVIGATOR"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ADD_DEVICE_SCREEN"
              component={AddDeviceScreen}
              options={{
                headerTitleAlign: "center",
                headerTitle: "Add Device",
              }}
            />
            <Stack.Screen
              name="EDIT_DEVICE_SCREEN"
              component={EditDeviceScreen}
              options={{
                headerTitleAlign: "center",
                headerTitle: "Edit Device",
              }}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
