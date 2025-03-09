import { configureStore } from "@reduxjs/toolkit";
import { successfullSubmitReducer } from "./slices/successfullSubmitSlice";

export const store = configureStore({
  devTools: import.meta.env.DEV,
  reducer: {
    loginStatus: successfullSubmitReducer,
  },
});
