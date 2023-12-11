import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome5, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { color, fontFamily } from "../theme";
import CustomButton from "./CustomButton";
import { DeviceCardProps } from "../types";
import { useNavigation } from "@react-navigation/native";
import { DeviceListScreenNavigationProps } from "../data";
import { useRemoveDeviceMutation } from "../api/deviceApiSlice";

const style = StyleSheet.create({
  cardStyle: {
    marginTop: 10,
    marginHorizontal: 16,
    borderRadius: 10,
    // backgroundColor: color.gray800,
    backgroundColor: color.white,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: color.gray400,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: color.gray400,
  },

  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "65%",
  },

  deviceName: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    marginLeft: 10,
    // color: color.white,
    flexShrink: 1,
  },

  tagContainer: { flexDirection: "row" },

  roomTagContainer: {
    flexDirection: "row",
    backgroundColor: color.blue600,
    paddingHorizontal: 16,
    paddingVertical: 3,
    borderBottomLeftRadius: 10,
    alignItems: "center",
  },
  roomNumber: {
    color: color.white,
    fontFamily: fontFamily.regular,
    marginLeft: 5,
    fontSize: 12,
  },

  netTagContainer: {
    flexDirection: "row",
    backgroundColor: color.gray800,
    paddingHorizontal: 16,
    paddingVertical: 3,
    alignItems: "center",
    borderTopRightRadius: 10
  },
  netNumber: {
    color: color.white,
    fontFamily: fontFamily.regular,
    marginLeft: 5,
    fontSize: 12,
  },

  buttonsGroup: {
    flexDirection: "row",
  },
});

const DeviceCard: React.FC<DeviceCardProps> = ({
  deviceName,
  ipAddress,
  roomNumber,
  _id,
  addedOn,
}) => {
  const navigation = useNavigation<DeviceListScreenNavigationProps>();

  const editDeviceCallBack = () => {
    navigation.navigate("EDIT_DEVICE_SCREEN", {
      deviceName,
      ipAddress,
      roomNumber,
      _id,
    });
  };

  const [removeDeviceMutation] = useRemoveDeviceMutation();

  const removeDeviceCallBack = async () => {
    await removeDeviceMutation(_id);
  };

  return (
    <View style={style.cardStyle}>
      <View style={style.header}>
        <View style={style.headerTitle}>
          <MaterialIcons name="devices-other" size={26} color={color.gray900} />
          <Text style={style.deviceName}>{deviceName}</Text>
        </View>
        <View style={style.buttonsGroup}>
          <CustomButton
            size="sm"
            onPress={() => {}}
            fullWidth={false}
            icon={
              <Ionicons name="game-controller" size={14} color={color.blue600} />
            }
            light
          />
          <CustomButton
            size="sm"
            onPress={editDeviceCallBack}
            fullWidth={false}
            icon={<FontAwesome5 name="edit" size={14} color={color.blue600} />}
            marginLeft={4}
            light
          />
          <CustomButton
            size="sm"
            onPress={removeDeviceCallBack}
            fullWidth={false}
            icon={<FontAwesome5 name="trash" size={14} color={color.blue600} />}
            marginLeft={4}
            light
          />
        </View>
      </View>

      <View style={{ marginVertical: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ fontFamily: fontFamily.regular, fontSize: 12 }}>Updated On</Text>
          <Text style={{ fontFamily: fontFamily.regular, fontSize: 12 }}>{addedOn}</Text>
        </View>
      </View>

      <View style={style.tagContainer}>
        <View style={style.roomTagContainer}>
          <MaterialIcons name="meeting-room" size={20} color={color.white} />
          <Text style={style.roomNumber}>{roomNumber}</Text>
        </View>
        <View style={style.netTagContainer}>
          <FontAwesome5 name="globe" size={15} color={color.white} />
          <Text style={style.netNumber}>{ipAddress}</Text>
        </View>
      </View>
    </View>
  );
};

export default DeviceCard;
