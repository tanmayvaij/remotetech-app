import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import { color } from "../theme";

interface CustomActivityIndicatorProps {
  indicatorColor?: string;
  indicatorsize?: number;
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const CustomActivityIndicator: React.FC<CustomActivityIndicatorProps> = ({
  indicatorColor = color.blue700,
  indicatorsize = 36,
}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={indicatorColor} size={indicatorsize} />
    </View>
  );
};

export default CustomActivityIndicator;
