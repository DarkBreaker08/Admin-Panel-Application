import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { successfullSubmitType } from "../../types";

const initialState: successfullSubmitType = {
  isAdminLogged: false,
};

const successfullSubmitSlice = createSlice({
  name: "isAdminLogged",
  initialState,
  reducers: {
    changeLoginStatus: (state, action: PayloadAction<boolean>) => {
      state.isAdminLogged = action.payload;
    },
  },
});

export const { changeLoginStatus } = successfullSubmitSlice.actions;
export const successfullSubmitReducer = successfullSubmitSlice.reducer;
