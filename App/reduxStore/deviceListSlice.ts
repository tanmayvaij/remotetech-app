import { createSlice } from "@reduxjs/toolkit";

interface DeviceProps {
  roomNumber: string
  deviceName: string;
  ipAddress: string;
}

const initialState: DeviceProps[] = [];

const deviceListSlice = createSlice({
  name: "deviceList",
  initialState,
  reducers: {
    addDevice: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addDevice } = deviceListSlice.actions;

export default deviceListSlice.reducer;
