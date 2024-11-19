import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toke: null,
  userDetails: null,
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.toke = action.payload.toke;
      state.userDetails = action.payload.userDetails;

      if (typeof window !== "undefined") {
        localStorage.setItem("Authorization", action.payload.toke);
        localStorage.setItem(
          "userDetails",
          JSON.stringify(action.payload.userDetails)
        );
      }
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
