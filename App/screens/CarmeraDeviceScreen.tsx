import { View, StyleSheet } from "react-native";
import React from "react";
import { color } from "../theme";
import DeviceActionCard from "../components/DeviceActionCard";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: color.white,
  },
});

const CarmeraDeviceScreen = () => {
  return (
    <View style={styles.screen}>
      <DeviceActionCard deviceType="camera" />
    </View>
  );
};

export default CarmeraDeviceScreen;
