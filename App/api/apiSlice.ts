import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypes } from "../data/queryTags";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_DEVELOPMENT_SERVER_URL,
    // baseUrl: process.env.EXPO_PUBLIC_PRODUCTION_SERVER_URL
  }),
  endpoints: (builder) => ({}),
  tagTypes,
});
