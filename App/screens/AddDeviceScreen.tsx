import React from "react";
import DeviceForm from "../forms/DeviceForm";
import { useAddDeviceMutation } from "../api/deviceApiSlice";
import { useUserProfileQuery } from "../api/authApiSlice";
import { useRoute } from "@react-navigation/native";
import { AddDeviceScreenRouteProps } from "../data";

interface DeviceFormFieldsProps {
  roomNumber: string;
  deviceName: string;
  ipAddress: string;
}

const AddDeviceScreen = () => {
  const {
    params: { deviceType },
  } = useRoute<AddDeviceScreenRouteProps>();

  const [addDeviceMutation] = useAddDeviceMutation();
  const { data: userProfile } = useUserProfileQuery();

  const apiCallBack = async (formValues: DeviceFormFieldsProps) => {
    await addDeviceMutation({ ...formValues, addedBy: userProfile?._id!, deviceType });
  };

  return <DeviceForm apiCallBack={apiCallBack} />;
};

export default AddDeviceScreen;
