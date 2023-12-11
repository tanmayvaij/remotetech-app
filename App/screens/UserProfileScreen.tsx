import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useAuth } from "../components/AuthProvider";
import { deleteItemAsync } from "expo-secure-store";
import { color, fontFamily } from "../theme";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";
import { useUserProfileQuery } from "../api/authApiSlice";
import { apiSlice } from "../api/apiSlice";
import { useDispatch } from "react-redux";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: color.white,
  },

  topCard: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: color.gray300,
  },
  userNameText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 20,
    paddingTop: 5,
  },

  miniCardContainer: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: color.gray300,
  },
  miniCardKey: {
    fontFamily: fontFamily.regular,
    color: color.gray600,
    fontSize: 16,
  },
  miniCardValue: {
    fontFamily: fontFamily.medium,
    fontSize: 16,
  },
  miniProfileCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 5,
  },

  imageStyle: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },

  settingContainer: {
    paddingVertical: 15,
    paddingHorizontal: 12,
  },
  settingCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  settingCardKey: {
    fontFamily: fontFamily.regular,
    color: color.gray600,
    fontSize: 16,
  },

  logoutHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 6,
    paddingVertical: 5,
  },
});

const UserProfileScreen = () => {
  const { setAuthState } = useAuth();

  const dispatch = useDispatch();

  const logOut = () => {
    deleteItemAsync("authToken");
    setAuthState({ authToken: "", isAuthenticated: false });
    dispatch(apiSlice.util.resetApiState());
  };

  const { data: userProfile } = useUserProfileQuery();

  return (
    <View style={styles.screen}>
      <View style={styles.logoutHeader}>
        <View />
        <CustomButton
          onPress={logOut}
          fullWidth={false}
          text="Log out"
          size="sm"
          icon={<MaterialIcons name="logout" size={12} color={color.white} />}
        />
      </View>

      <View style={styles.topCard}>
        <Image
          style={styles.imageStyle}
          source={require("../../assets/images/user.jpg")}
        />
        <Text style={styles.userNameText}>
          {userProfile?.firstName} {userProfile?.lastName}
        </Text>
      </View>

      <View style={styles.miniCardContainer}>
        <View style={styles.miniProfileCard}>
          <Text style={styles.miniCardKey}>Joined On </Text>
          <Text style={styles.miniCardValue}>{userProfile?.joinedOn}</Text>
        </View>
        <View style={styles.miniProfileCard}>
          <Text style={styles.miniCardKey}>Role</Text>
          <Text style={styles.miniCardValue}>{userProfile?.role}</Text>
        </View>
        <View style={styles.miniProfileCard}>
          <Text style={styles.miniCardKey}>Email</Text>
          <Text style={styles.miniCardValue}>{userProfile?.email}</Text>
        </View>
        <View style={styles.miniProfileCard}>
          <Text style={styles.miniCardKey}>Phone</Text>
          <Text style={styles.miniCardValue}>{userProfile?.phone}</Text>
        </View>
      </View>

      {/* <View style={styles.settingContainer}>
        <View style={styles.settingCard}>
          <Text style={styles.settingCardKey}>Dark Mode</Text>
          <CustomButton
            light
            onPress={() => {}}
            icon={<FontAwesome5 name="moon" size={12} color={color.blue600} />}
            size="sm"
            fullWidth={false}
          />
        </View>
      </View> */}
    </View>
  );
};

export default UserProfileScreen;
