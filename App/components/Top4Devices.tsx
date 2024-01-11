import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGetAllDevicesQuery } from "../api/deviceApiSlice";
import { FontAwesome } from "@expo/vector-icons";
import CustomActivityIndicator from "./CustomActivityIndicator";
import { color, fontFamily } from "../theme";
import MiniDeviceCard from "./MiniDeviceCard";
import CustomButton from "./CustomButton";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProps } from "../data";

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 12,
    borderRadius: 10,
    backgroundColor: color.white,
    elevation: 3,
  },
  card: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    backgroundColor: color.sky50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  headerText: {
    fontFamily: fontFamily.semiBold,
  },
});

const Top4Devices = () => {
  const { data, isLoading, isFetching } = useGetAllDevicesQuery(undefined);

  const navigation = useNavigation<HomeScreenNavigationProps>();

  if (isLoading || isFetching) return <CustomActivityIndicator />;

  return data?.length === 0 ? null : (
    <View style={styles.cardContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Recently Added Devices</Text>
        <CustomButton
          fullWidth={false}
          light
          size="sm"
          onPress={() => {
            navigation.navigate("MATERIAL_TOP_NAVIGATOR");
          }}
          text="View All"
          icon={
            <FontAwesome name="arrow-right" size={10} color={color.blue600} />
          }
        />
      </View>
      <View style={styles.card}>
        {data?.slice(0, 4).map((item) => (
          <MiniDeviceCard
            key={item._id}
            deviceName={item.deviceName}
            _id={item._id}
            deviceType={item.deviceType}
            ipAddress={item.ipAddress}
            roomNumber={item.roomNumber}
          />
        ))}
      </View>
    </View>
  );
};

export default Top4Devices;
