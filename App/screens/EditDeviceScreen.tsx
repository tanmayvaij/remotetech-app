import React from "react";
import DeviceForm from "../forms/DeviceForm";
import { useRoute } from "@react-navigation/native";
import { EditDeviceScreenRouteProps } from "../data";
import { useEditDeviceMutation } from "../api/deviceApiSlice";

interface DeviceFormFieldsProps {
  roomNumber: string;
  deviceName: string;
  ipAddress: string;
}

const EditDeviceScreen = () => {
  const {
    params: { _id, deviceName, ipAddress, roomNumber },
  } = useRoute<EditDeviceScreenRouteProps>();

  const [editDeviceMutation] = useEditDeviceMutation();

  const apiCallBack = async (formValues: DeviceFormFieldsProps) => {
    await editDeviceMutation({ ...formValues, _id });
  };

  return (
    <DeviceForm
      initialValues={{ deviceName, ipAddress, roomNumber }}
      apiCallBack={apiCallBack}
      formType="Edit"
    />
  );
};

export default EditDeviceScreen;
