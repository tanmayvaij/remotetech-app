import { createSlice } from "@reduxjs/toolkit";

interface UserProfileProps {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
}

const initialState: UserProfileProps = {
    _id: "", email: "", firstName: "", lastName: ""
}

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state = action.payload
      return state
    },
  },
});

export const { setUserProfile } = userProfileSlice.actions;

export default userProfileSlice.reducer;
