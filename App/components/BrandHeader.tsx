import { View, Image, StyleSheet } from "react-native";
import { spacing, color } from "../theme";
import React from "react";

const styles = StyleSheet.create({
  brandingContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: spacing.sp20,
    borderBottomRightRadius: spacing.sp20,
    backgroundColor: color.blue500,
  },
  brandingImageStyle: {
    width: spacing.sp22,
    height: spacing.sp22,
  },
});

const BrandHeader = () => {
  return (
    <View style={styles.brandingContainerStyle}>
      <Image
        style={styles.brandingImageStyle}
        source={require("../../assets/images/iconWithTextWhite.png")}
      />
    </View>
  );
};

export default BrandHeader;
