import { FlatList, View } from "react-native";
import React from "react";
import EmptyCard from "./EmptyCard";
import DeviceCard from "./DeviceCard";
import CustomActivityIndicator from "./CustomActivityIndicator";
import { useGetDevicesByTypeQuery } from "../api/deviceApiSlice";

interface DevicesDisplayCardProps {
  deviceType: string;
}

const DevicesDisplayCard: React.FC<DevicesDisplayCardProps> = ({
  deviceType,
}) => {
  const { data, isLoading, isFetching } = useGetDevicesByTypeQuery(deviceType);

  if (isLoading || isFetching) return <CustomActivityIndicator />;

  return data?.length === 0 ? (
    <EmptyCard text={`no ${deviceType} added`} />
  ) : (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <DeviceCard
              addedOn={item.addedOn}
              _id={item._id}
              deviceName={item.deviceName}
              ipAddress={item.ipAddress}
              roomNumber={item.roomNumber}
            />
          );
        }}
      />
    </View>
  );
};

export default DevicesDisplayCard;
