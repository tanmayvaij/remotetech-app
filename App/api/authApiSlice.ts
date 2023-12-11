import { getItemAsync } from "expo-secure-store";
import { apiSlice } from "./apiSlice";

let authToken: string;
getItemAsync("authToken").then((token) => {
  authToken = token!;
});

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userRegistration: builder.mutation<
      { status: boolean; message?: string; authToken?: string },
      { firstName: string; lastName: string; email: string; password: string }
    >({
      query: (data) => ({
        url: "/auth/user-register",
        method: "POST",
        body: data,
      }),
    }),

    userLogin: builder.mutation<
      { status: boolean; message?: string; authToken?: string },
      { email: string; password: string }
    >({
      query: (data) => ({
        url: "/auth/user-login",
        method: "POST",
        body: data,
      }),
    }),

    userProfile: builder.query<
      { email: string; lastName: string; firstName: string; _id: string, joinedOn: string, role: string, phone: string },
      void
    >({
      query: () => ({
        url: "/auth/user-profile",
        method: "GET",
        headers: {
          authToken,
        },
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useUserProfileQuery,
  useUserRegistrationMutation,
  useUserLoginMutation,
} = authApiSlice;
