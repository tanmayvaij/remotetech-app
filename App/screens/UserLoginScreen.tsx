import { View, Image, StyleSheet } from "react-native";
import React from "react";
import CustomTextInput from "../components/CustomTextInput";
import { FontAwesome } from "@expo/vector-icons";
import FormContainer from "../components/FormContainer";
import { color } from "../theme";
import { setItemAsync } from "expo-secure-store";
import { useAuth } from "../components/AuthProvider";
import { useUserLoginMutation } from "../api/authApiSlice";
import { useFormik } from "formik";
import { UserLoginFormValidator } from "../validators/UserLoginFormValidator";

const styles = StyleSheet.create({
  imageContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  imageStyle: {
    width: 200,
    height: 200,
  },
});

interface ApiResponseProps {
  message?: string;
  authToken?: string;
  status: boolean;
}

const UserLoginScreen = () => {
  const { setAuthState } = useAuth();

  const [userLoginMutation] = useUserLoginMutation();

  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    validationSchema: UserLoginFormValidator,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async () => {
      const {
        data: { status, authToken, message },
      } = (await userLoginMutation(values)) as { data: ApiResponseProps };

      if (status) {
        setItemAsync("authToken", authToken!);
        setAuthState({ authToken: authToken!, isAuthenticated: status });
      } else {
        console.log(message);
      }
    },
  });

  return (
    <FormContainer
      onPress={handleSubmit}
      icon={<FontAwesome name="sign-in" size={20} color={color.white} />}
      text="Login"
    >
      <View style={styles.imageContainerStyle}>
        <Image
          style={styles.imageStyle}
          source={require("../../assets/images/login.jpg")}
        />
      </View>
      <CustomTextInput
        placeholder="Email"
        labelText="Enter Your Email"
        inputMode="email"
        onChangeText={handleChange("email")}
        onBlur={handleBlur}
        errorMessage={errors.email}
        value={values.email}
      />
      <CustomTextInput
        placeholder="Password"
        labelText="Enter Your Password"
        inputMode="text"
        secureTextEntry
        onChangeText={handleChange("password")}
        onBlur={handleBlur}
        errorMessage={errors.password}
        value={values.password}
      />
    </FormContainer>
  );
};

export default UserLoginScreen;
