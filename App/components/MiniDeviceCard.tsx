import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { color, fontFamily } from "../theme";

interface MiniDeviceCardProps {
  deviceName: string;
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
    color: color.blue600
  },
});

const MiniDeviceCard: React.FC<MiniDeviceCardProps> = ({ deviceName }) => {
  return (
    <View style={styles.miniCard}>
      <Feather name="cloud-lightning" size={24} color={color.blue600} />
      <Text style={styles.miniCardText}>{deviceName}</Text>
    </View>
  );
};

export default MiniDeviceCard;
