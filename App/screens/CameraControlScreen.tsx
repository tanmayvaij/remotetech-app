import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { color } from "../theme";
import { CameraControlScreenRouteProps } from "../data";
import DeviceInfoCard from "../components/DeviceInfoCard";
import { useRoute } from "@react-navigation/native";

const styles = StyleSheet.create({
  screen: {
    backgroundColor: color.white,
    flex: 1,
  },
});

const CameraControlScreen = () => {
  const {
    params: { _id, deviceName, ipAddress, roomNumber },
  } = useRoute<CameraControlScreenRouteProps>();

  return (
    <View style={styles.screen}>
      <DeviceInfoCard
        _id={_id}
        deviceName={deviceName}
        ipAddress={ipAddress}
        roomNumber={roomNumber}
      />
    </View>
  );
};

export default CameraControlScreen;
