import * as Yup from "yup";

export const UserRegistrationFormValidator = Yup.object({
  firstName: Yup.string().required("first name is required"),
  lastName: Yup.string().required("last name is required"),
  email: Yup.string().email().required("email is required"),
  phone: Yup
    .string()
    .matches(/^\d{10}$/, "phone number must be a 10-digit number")
    .required("phone number is required"),
  password: Yup.string().min(6).required("password min length should be 6"),
});
