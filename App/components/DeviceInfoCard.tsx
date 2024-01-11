import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { color, fontFamily } from "../theme";

const styles = StyleSheet.create({
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoText: {
    fontFamily: fontFamily.semiBold,
    color: color.blue600,
  },
  infoCard: {
    padding: 10,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: color.gray400,
    borderRadius: 10,
  },
  value: {
    fontSize: 12,
    color: color.gray500,
    fontFamily: fontFamily.regular,
  },
});

interface DeviceInfoCardProps {
  _id: string;
  deviceName: string;
  ipAddress: string;
  roomNumber: string;
}

const DeviceInfoCard: React.FC<DeviceInfoCardProps> = ({
  _id,
  deviceName,
  ipAddress,
  roomNumber,
}) => {
  return (
    <View style={styles.infoCard}>
      <View style={styles.info}>
        <Text style={styles.infoText}>Device ID</Text>
        <Text style={[styles.infoText, styles.value]}>{_id}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoText}>Device Name</Text>
        <Text style={[styles.infoText, styles.value]}>{deviceName}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoText}>IP Address</Text>
        <Text style={[styles.infoText, styles.value]}>{ipAddress}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoText}>Room Number</Text>
        <Text style={[styles.infoText, styles.value]}>{roomNumber}</Text>
      </View>
    </View>
  );
};

export default DeviceInfoCard;
