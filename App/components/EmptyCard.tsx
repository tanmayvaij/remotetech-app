import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { color, fontFamily } from "../theme";

const styles = StyleSheet.create({
  cardStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: StyleSheet.hairlineWidth,
    margin:10
  },
  textStyle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: color.blue300
  },
});

interface EmptyCardProps {
  text: string;
}

const EmptyCard: React.FC<EmptyCardProps> = ({ text }) => {
  return (
    <View style={styles.cardStyle}>
      <FontAwesome5 name="box-open" size={40} color={color.blue200} />
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
};

export default EmptyCard;
