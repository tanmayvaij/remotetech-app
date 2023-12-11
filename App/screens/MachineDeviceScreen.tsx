import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { color } from "../theme";
import DeviceActionCard from "../components/DeviceActionCard";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: color.white,
  },
});

const MachineDeviceScreen = () => {
  return (
    <View style={styles.screen}>
      <DeviceActionCard deviceType="machine" />
    </View>
  );
};

export default MachineDeviceScreen;
