import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { color, fontFamily } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { DeviceListScreenNavigationProps } from "../data";
import CustomButton from "../components/CustomButton";
import DevicesDisplayCard from "../components/DevicesDisplayCard";
import { MaterialIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  headerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    // borderWidth: StyleSheet.hairlineWidth,
    // elevation: 3,
    paddingHorizontal: 10,
    backgroundColor: color.gray800,
  },
  headerTextStyle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 20,
  },
});

interface DeviceActionCardProps {
    deviceType: string;
}

const DeviceActionCard: React.FC<DeviceActionCardProps> = ({ deviceType }) => {
  const navigation = useNavigation<DeviceListScreenNavigationProps>();

  return (
    <View style={styles.card}>
      <View style={styles.headerStyle}>
        <CustomButton
          onPress={() =>
            navigation.navigate("ADD_DEVICE_SCREEN", {
              deviceType,
            })
          }
          text="Add Device"
          icon={
            <MaterialIcons name="device-hub" size={16} color={color.white} />
          }
          size="sm"
        />
      </View>
      <DevicesDisplayCard deviceType={deviceType} />
    </View>
  );
};

export default DeviceActionCard;
