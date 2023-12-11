import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { color, fontFamily } from "../theme";
import { useUserProfileQuery } from "../api/authApiSlice";

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: color.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  welcomeHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  welcomeMessage: {
    fontSize: 20,
    fontFamily: fontFamily.bold,
  },
  userNameStyle: {
    color: color.blue700,
  },
  imageStyle: {
    width: 40,
    height: 40,
  },
});

const WelcomeCard = () => {
  const { data: userProfile } = useUserProfileQuery();

  return (
    <View style={styles.card}>
      <View style={styles.welcomeHeader}>
        <Text style={styles.welcomeMessage}>👋 Welcome, </Text>
        <Text style={[styles.welcomeMessage, styles.userNameStyle]}>
          {userProfile?.firstName} {userProfile?.lastName}
        </Text>
      </View>
      <Image
        source={require("../../assets/images/user.jpg")}
        style={styles.imageStyle}
      />
    </View>
  );
};

export default WelcomeCard;
