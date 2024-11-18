import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toke: localStorage.getItem("Authorization") || null,
  userDetails: localStorage.getItem("userDetails")
    ? JSON.parse(localStorage.getItem("userDetails"))
    : null,
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.toke = action.payload.toke;
      state.userDetails = action.payload.userDetails;
      localStorage.setItem("Authorization", action.payload.toke);
      localStorage.setItem(
        "userDetails",
        JSON.stringify(action.payload.userDetails)
      );
    },
    clearUser: (state) => {
      state.toke = null;
      state.userDetails = null;
      localStorage.removeItem("Authorization");
      localStorage.removeItem("userDetails");
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
