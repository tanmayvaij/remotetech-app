import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { ApplianceControlScreenRouteProps } from "../data";
import CustomButton from "../components/CustomButton";
import { MaterialIcons } from "@expo/vector-icons";
import { color, fontFamily } from "../theme";
import { Foundation } from "@expo/vector-icons";
import DeviceInfoCard from "../components/DeviceInfoCard";
import axios from "axios";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: color.white,
  },
  card: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
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
  iconContainer: {
    paddingBottom: 20,
  },
});

const ApplianceControlScreen = () => {
  const {
    params: { _id, deviceName, ipAddress, roomNumber, socketNumber },
  } = useRoute<ApplianceControlScreenRouteProps>();

  const [applianceState, setApplianceState] = useState(false);

  const toggleAppliance = () => {
    // setApplianceState((state) => {
   
        axios
          .post(`http://${ipAddress}:5000/process_request`, {
            room_no: roomNumber,
            appliance_name: deviceName,
            command: applianceState ? "off" : "on",
            socket_no: socketNumber
          })
          .then((res) => {
            if (res.status) setApplianceState((prev) => !prev)
          })
          .catch((err) => {
            console.log(err);
            // return state
          });

      // return !state;
    // });
  };

  return (
    <View style={styles.screen}>
      <DeviceInfoCard
        _id={_id}
        deviceName={deviceName}
        ipAddress={ipAddress}
        roomNumber={roomNumber}
      />
      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <Foundation
            name="lightbulb"
            size={80}
            color={applianceState ? color.yellow400 : color.gray400}
          />
        </View>
        <CustomButton
          onPress={toggleAppliance}
          text={applianceState ? "Switch Off" : "Switch On"}
          icon={
            <MaterialIcons name="device-hub" size={24} color={color.white} />
          }
          fullWidth={false}
        />
      </View>
    </View>
  );
};

export default ApplianceControlScreen;
