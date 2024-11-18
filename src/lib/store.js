import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/lib/features/counterSlice";
import userReducer from "@/lib/features/userSlice";
import { apiSlice } from "./features/apiSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counterSlice: counterReducer,
      userSlice: userReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });
};
