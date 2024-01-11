import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MachineControlScreenRouteProps } from "../data";
import { useRoute } from "@react-navigation/native";
import { color } from "../theme";
import DeviceInfoCard from "../components/DeviceInfoCard";

const styles = StyleSheet.create({
  screen: {
    backgroundColor: color.white,
    flex: 1,
  },
});

const MachineControlScreen = () => {
  const {
    params: { _id, deviceName, ipAddress, roomNumber },
  } = useRoute<MachineControlScreenRouteProps>();

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

export default MachineControlScreen;
