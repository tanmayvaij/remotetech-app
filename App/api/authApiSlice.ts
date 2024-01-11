import { getItemAsync } from "expo-secure-store";
import { apiSlice } from "./apiSlice";
import { QUERY_TAGS } from "../data/queryTags";

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
      invalidatesTags: [QUERY_TAGS.userProfile],
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
      invalidatesTags: [QUERY_TAGS.userProfile],
    }),

    userProfile: builder.query<
      {
        email: string;
        lastName: string;
        firstName: string;
        _id: string;
        joinedOn: string;
        role: string;
        phone: string;
      },
      string
    >({
      query: (authToken) => ({
        url: "/auth/user-profile",
        method: "GET",
        headers: {
          authToken,
        },
      }),
      providesTags: [QUERY_TAGS.userProfile],
    }),
  }),

  overrideExisting: true,
});

export const {
  useUserProfileQuery,
  useUserRegistrationMutation,
  useUserLoginMutation,
} = authApiSlice;
