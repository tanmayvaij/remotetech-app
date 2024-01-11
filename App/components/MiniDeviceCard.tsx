import { View, Text, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { color, fontFamily } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProps } from "../data";

interface MiniDeviceCardProps {
  deviceName?: string;
  _id?: string;
  ipAddress?: string;
  roomNumber?: string;
  deviceType?: string;
}

const styles = StyleSheet.create({
  miniCard: {
    borderWidth: StyleSheet.hairlineWidth,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
    borderColor: color.blue500,
    borderRadius: 10,
    width: 75,
    height: 75,
    // backgroundColor: color.blue600,
    backgroundColor: color.white,
    elevation: 3,
  },
  miniCardText: {
    fontFamily: fontFamily.semiBold,
    textAlign: "center",
    fontSize: 10,
    paddingTop: 4,
    // color: color.white,
    color: color.blue600,
  },
});

const MiniDeviceCard: React.FC<MiniDeviceCardProps> = ({
  deviceName,
  _id,
  ipAddress,
  roomNumber,
  deviceType,
}) => {
  enum deviceTypeNavigationMap {
    appliance = "APPLIANCE_CONTROL_SCREEN",
    machine = "MACHINE_CONTROL_SCREEN",
    camera = "CAMERA_CONTROL_SCREEN",
  }

  const navigation = useNavigation<HomeScreenNavigationProps>();

  return (
    <Pressable
      style={styles.miniCard}
      onPress={() => {
        navigation.navigate(deviceTypeNavigationMap[deviceType as string], {
          deviceName,
          _id,
          ipAddress,
          roomNumber,
        });
      }}
    >
      <Feather name="cloud-lightning" size={24} color={color.blue600} />
      <Text style={styles.miniCardText}>{deviceName}</Text>
    </Pressable>
  );
};

export default MiniDeviceCard;
