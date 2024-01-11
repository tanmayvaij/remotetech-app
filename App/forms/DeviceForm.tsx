import React, { useState } from "react";
import FormContainer from "../components/FormContainer";
import CustomTextInput from "../components/CustomTextInput";
import { useNavigation } from "@react-navigation/native";

interface DeviceFormFieldsProps {
  roomNumber: string;
  deviceName: string;
  ipAddress: string;
  socketNumber: string
}

interface DeviceFormProps {
  initialValues?: DeviceFormFieldsProps;
  apiCallBack: (formValues: DeviceFormFieldsProps) => void;
  formType?: "Edit";
}

const DeviceForm: React.FC<DeviceFormProps> = ({
  initialValues,
  apiCallBack,
  formType,
}) => {
  const navigation = useNavigation();

  const [formValues, setFormValues] = useState<DeviceFormFieldsProps>({
    roomNumber: initialValues ? initialValues.roomNumber : "",
    deviceName: initialValues ? initialValues.deviceName : "",
    ipAddress: initialValues ? initialValues.ipAddress : "",
    socketNumber: initialValues ? initialValues.socketNumber : "",
  });

  const onSubmit = () => {
    apiCallBack(formValues);
    navigation.goBack();
  };

  const handleInputChange = (
    field: keyof DeviceFormFieldsProps,
    text: string
  ) => {
    setFormValues((prev) => ({ ...prev, [field]: text }));
  };

  return (
    <FormContainer
      disabled={
        formValues.roomNumber.trim() === "" ||
        formValues.deviceName.trim() === "" ||
        formValues.ipAddress.trim() === ""
      }
      text={formType || "Add"}
      onPress={onSubmit}
    >
      <CustomTextInput
        placeholder="Room Number"
        labelText="Enter Room Number"
        inputMode="text"
        value={formValues.roomNumber}
        onChangeText={(text) => handleInputChange("roomNumber", text)}
      />
      <CustomTextInput
        placeholder="Device Name"
        labelText="Enter Device Name"
        inputMode="text"
        value={formValues.deviceName}
        onChangeText={(text) => handleInputChange("deviceName", text)}
      />
      <CustomTextInput
        placeholder="IP Address"
        labelText="Enter IP Address"
        inputMode="text"
        value={formValues.ipAddress}
        onChangeText={(text) => handleInputChange("ipAddress", text)}
      />
      <CustomTextInput
        placeholder="Socket Number"
        labelText="Enter Socket Number"
        inputMode="decimal"
        value={formValues.socketNumber}
        onChangeText={(text) => handleInputChange("socketNumber", text)}
      />
    </FormContainer>
  );
};

export default DeviceForm;
