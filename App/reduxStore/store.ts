import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import deviceListReducer from "./deviceListSlice";
import userProfileReducer from "./userProfileSlice";
import { apiSlice } from "../api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    deviceList: deviceListReducer,
    userProfile: userProfileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
