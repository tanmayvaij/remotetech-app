import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { color, fontFamily } from "../theme";
import { CustomButtonProps } from "../types";
import CustomActivityIndicator from "./CustomActivityIndicator";

const styles = StyleSheet.create({
  buttonContainerStyle: {
    marginHorizontal: 10,
    marginVertical: 20,
  },

  buttonStyle: {
    backgroundColor: color.blue600,

    paddingHorizontal: 10,
    paddingVertical: 12,

    borderRadius: 10,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    elevation: 3,
  },
  lightButtonStyle: {
    backgroundColor: color.white,
    borderWidth: 1,
    borderColor: color.blue500,
  },

  disabledButtonStyle: {
    backgroundColor: color.blue300,
    elevation: 0,
  },

  buttonTextStyle: {
    color: "white",
    fontWeight: "600",
    fontSize: 15,
    fontFamily: fontFamily.medium,
  },
  lightButtonTextStyle: {
    color: color.blue500,
  },

  pressedButtonStyle: {
    backgroundColor: color.blue700,
    elevation: 0,
  },
  lightPressedButtonStyle: {
    elevation: 0,
  },
});

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  text,
  icon,
  light,
  marginBottom,
  marginHorizontal,
  marginTop,
  marginVertical,
  marginLeft,
  marginRight,
  fullWidth = true,
  disabled,
  size,
  isLoading,
}) => {
  return (
    <View
      style={[
        styles.buttonContainerStyle,
        {
          marginVertical,
          marginHorizontal,
          marginTop,
          marginBottom,
          marginLeft,
          marginRight,
        },
        fullWidth && { flex: 1 },
      ]}
    >
      <Pressable
        disabled={disabled}
        onPress={onPress}
        style={({ pressed }) => [
          styles.buttonStyle,
          light && styles.lightButtonStyle,
          pressed &&
            (light
              ? styles.lightPressedButtonStyle
              : styles.pressedButtonStyle),
          disabled && styles.disabledButtonStyle,
          size === "sm" && { paddingVertical: 8 },
        ]}
      >
        {isLoading ? (
          <CustomActivityIndicator
            indicatorColor={color.white}
            indicatorsize={20}
          />
        ) : (
          <View style={{ flexDirection: "row" }}>
            {text && (
              <Text
                style={[
                  styles.buttonTextStyle,
                  light && styles.lightButtonTextStyle,
                  size === "sm" && { fontSize: 10 },
                ]}
              >
                {text}
              </Text>
            )}
            {text && icon && (
              <View style={{ marginLeft: size === "sm" ? 5 : 10 }} />
            )}
            {icon && icon}
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default CustomButton;
