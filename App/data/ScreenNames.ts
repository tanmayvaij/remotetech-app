import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamsList = {
  ONBOARDING_SCREEN: undefined;
  USER_REGISTER_SCREEN: undefined;
  USER_LOGIN_SCREEN: undefined;

  BOTTOM_TAB_NAVIGATOR: undefined;
  MATERIAL_TOP_NAVIGATOR: undefined;

  HOME_SCREEN: undefined;
  USER_PROFILE_SCREEN: undefined;

  ADD_DEVICE_SCREEN: undefined;
  EDIT_DEVICE_SCREEN: undefined;

  LIGHT_DEVICE_SCREEN: undefined;
  MACHINE_DEVICE_SCREEN: undefined;
  CAMERA_DEVICE_SCREEN: undefined;

  APPLIANCE_CONTROL_SCREEN: undefined;
  MACHINE_CONTROL_SCREEN: undefined;
  CAMERA_CONTROL_SCREEN: undefined;
};

export type OnBoardingScreenNavigationProps = StackNavigationProp<{
  USER_REGISTER_SCREEN: undefined;
  USER_LOGIN_SCREEN: undefined;
}>;

export type HomeScreenNavigationProps = StackNavigationProp<{
  MATERIAL_TOP_NAVIGATOR: undefined;
  APPLICANCE_CONTROL_SCREEN: {
    deviceName: string;
    ipAddress: string;
    roomNumber: string;
    _id: string;
  };
  MACHINE_CONTROL_SCREEN: {
    deviceName: string;
    ipAddress: string;
    roomNumber: string;
    _id: string;
  };
  CAMERA_CONTROL_SCREEN: {
    deviceName: string;
    ipAddress: string;
    roomNumber: string;
    _id: string;
  };
}>;

export type DeviceListScreenNavigationProps = StackNavigationProp<{
  ADD_DEVICE_SCREEN: {
    deviceType: string;
  };
  EDIT_DEVICE_SCREEN: {
    deviceName: string;
    ipAddress: string;
    roomNumber: string;
    _id: string;
    socketNumber: string
  };
  APPLICANCE_CONTROL_SCREEN: {
    deviceName: string;
    ipAddress: string;
    roomNumber: string;
    _id: string;
    socketNumber: string
  };
  MACHINE_CONTROL_SCREEN: {
    deviceName: string;
    ipAddress: string;
    roomNumber: string;
    _id: string;
  };
  CAMERA_CONTROL_SCREEN: {
    deviceName: string;
    ipAddress: string;
    roomNumber: string;
    _id: string;
  };
}>;

export type EditDeviceScreenRouteProps = RouteProp<{
  EDIT_DEVICE_SCREEN: {
    deviceName: string;
    ipAddress: string;
    roomNumber: string;
    _id: string;
    socketNumber: string
  };
}>;

export type AddDeviceScreenRouteProps = RouteProp<{
  ADD_DEVICE_SCREEN: {
    deviceType: string;
  };
}>;

export type ApplianceControlScreenRouteProps = RouteProp<{
  APPLIANCE_CONTROL_SCREEN: {
    deviceName: string;
    ipAddress: string;
    roomNumber: string;
    _id: string;
    socketNumber: string
  };
}>;

export type MachineControlScreenRouteProps = RouteProp<{
  MACHINE_CONTROL_SCREEN: {
    deviceName: string;
    ipAddress: string;
    roomNumber: string;
    _id: string;
  };
}>;

export type CameraControlScreenRouteProps = RouteProp<{
  CAMERA_CONTROL_SCREEN: {
    deviceName: string;
    ipAddress: string;
    roomNumber: string;
    _id: string;
  };
}>;
