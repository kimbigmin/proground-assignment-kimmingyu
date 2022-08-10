import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CommonState {
  currentPage: string;
}

const initialState: CommonState = {
  currentPage: "home",
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    pageChange: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { pageChange } = commonSlice.actions;

export default commonSlice.reducer;
