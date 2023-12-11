import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { color, fontFamily } from "../theme";
import { CustomTextInputProps } from "../types";

const styles = StyleSheet.create({
  inputComponentStyle: {
    marginTop: 15,
    marginHorizontal: 20,
  },
  textInputStyle: {
    backgroundColor: color.white,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: color.gray400,
    marginTop: 5,
  },
  labelStyle: {
    fontFamily: fontFamily.bold,
  },
  errorMessage: {
    color: color.red500,
    fontFamily: fontFamily.regular,
    fontSize: 12,
  },
});

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  labelText,
  placeholder,
  inputMode,
  secureTextEntry,
  value,
  onChangeText,
  onChange,
  onBlur,
  errorMessage,
}) => {
  return (
    <View style={styles.inputComponentStyle}>
      {labelText && <Text style={styles.labelStyle}>{labelText}</Text>}
      <TextInput
        style={styles.textInputStyle}
        inputMode={inputMode}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

export default CustomTextInput;
