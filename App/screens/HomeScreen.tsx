import { View, Text, StyleSheet } from "react-native";
import React from "react";
import WelcomeCard from "../components/WelcomeCard";
import { color } from "../theme";
import Top4Devices from "../components/Top4Devices";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: color.white,
  },
});

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <WelcomeCard />
      <Top4Devices />
    </View>
  );
};

export default HomeScreen;
