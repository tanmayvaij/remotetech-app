import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { color } from "../theme";
import CustomButton from "../components/CustomButton";
import { FormContainerProps } from "../types";

const styles = StyleSheet.create({
  scrollViewStyle: {
    flex: 1,
    backgroundColor: color.white,
  },
  contentStyle: {
    paddingBottom: 100,
  },
  formButtonContainerStyle: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: color.white,
  },
});

const FormContainer: React.FC<FormContainerProps> = ({
  children,
  onPress,
  icon,
  light,
  text,
  disabled,
}) => {
  return (
    <>
      <ScrollView style={styles.scrollViewStyle}>
        <KeyboardAvoidingView style={styles.contentStyle}>
          {children}
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={styles.formButtonContainerStyle}>
        <CustomButton
          disabled={disabled}
          marginHorizontal={15}
          marginVertical={10}
          onPress={onPress}
          text={text}
          icon={icon}
          light={light}
        />
      </View>
    </>
  );
};

export default FormContainer;
