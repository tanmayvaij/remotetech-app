import React from "react";
import { color } from "../theme";
import CustomTextInput from "../components/CustomTextInput";
import { FontAwesome } from "@expo/vector-icons";
import FormContainer from "../components/FormContainer";
import { StyleSheet, View, Image } from "react-native";
import { useAuth } from "../components/AuthProvider";
import { setItemAsync } from "expo-secure-store";
import { useUserRegistrationMutation } from "../api/authApiSlice";
import { useFormik } from "formik";
import { UserRegistrationFormValidator } from "../validators/UserRegisistrationFormValidator";

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
  message: string;
  authToken: string;
  status: boolean;
}

const UserRegisterScreen = () => {
  const { setAuthState } = useAuth();

  const [userRegistrationMutation] = useUserRegistrationMutation();

  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    validationSchema: UserRegistrationFormValidator,
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
    },
    onSubmit: async () => {

      const {
        data: { status, message, authToken },
      } = (await userRegistrationMutation(values)) as {
        data: ApiResponseProps;
      };

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
      icon={
        <FontAwesome name="pencil-square-o" size={20} color={color.white} />
      }
      text="Register"
    >
      <View style={styles.imageContainerStyle}>
        <Image
          style={styles.imageStyle}
          source={require("../../assets/images/register.jpg")}
        />
      </View>
      <CustomTextInput
        placeholder="First Name"
        labelText="Enter Your First Name"
        inputMode="text"
        value={values.firstName}
        onChangeText={handleChange("firstName")}
        onBlur={handleBlur}
        errorMessage={errors.firstName}
      />
      <CustomTextInput
        placeholder="Last Name"
        labelText="Enter Your Last Name"
        inputMode="text"
        value={values.lastName}
        onChangeText={handleChange("lastName")}
        onBlur={handleBlur}
        errorMessage={errors.lastName}
      />
      <CustomTextInput
        placeholder="Email"
        labelText="Enter Your Email"
        inputMode="email"
        value={values.email}
        onChangeText={handleChange("email")}
        onBlur={handleBlur}
        errorMessage={errors.email}
      />
      <CustomTextInput
        placeholder="Phone Number"
        labelText="Enter Your Phone Number"
        inputMode="text"
        value={values.phone}
        onChangeText={handleChange("phone")}
        onBlur={handleBlur}
        errorMessage={errors.phone}
      />
      <CustomTextInput
        placeholder="Passwsord"
        labelText="Enter Your Password"
        inputMode="text"
        value={values.password}
        onChangeText={handleChange("password")}
        onBlur={handleBlur}
        errorMessage={errors.password}
        secureTextEntry
      />
    </FormContainer>
  );
};

export default UserRegisterScreen;
