import React from "react";
import DeviceForm from "../forms/DeviceForm";
import { useAddDeviceMutation } from "../api/deviceApiSlice";
import { useUserProfileQuery } from "../api/authApiSlice";
import { useRoute } from "@react-navigation/native";
import { AddDeviceScreenRouteProps } from "../data";
import { useAuth } from "../components/AuthProvider";

interface DeviceFormFieldsProps {
  roomNumber: string;
  deviceName: string;
  ipAddress: string;
}

const AddDeviceScreen = () => {
  const {
    params: { deviceType },
  } = useRoute<AddDeviceScreenRouteProps>();

  const {authToken} = useAuth()

  const [addDeviceMutation] = useAddDeviceMutation();
  const { data: userProfile } = useUserProfileQuery(authToken);

  const apiCallBack = async (formValues: DeviceFormFieldsProps) => {
    await addDeviceMutation({ ...formValues, addedBy: userProfile?._id!, deviceType });
  };

  return <DeviceForm apiCallBack={apiCallBack} />;
};

export default AddDeviceScreen;
