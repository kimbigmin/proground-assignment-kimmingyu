import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
  image: string;
  serialNumber: string;
  price: string;
}

interface UserList {
  userList: User[];
  hasMore: boolean;
  isLoading: boolean;
}

const initialState: UserList = {
  userList: [],
  hasMore: true,
  isLoading: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUserData: (state) => {
      state.isLoading = true;
    },
    getUserDataSuccess: (state, action: PayloadAction<any>) => {
      let setHasMore;
      if (action.payload !== undefined) {
        setHasMore = action.payload.length !== 0 ? true : false;
      } else {
        setHasMore = false;
      }
      state.hasMore = setHasMore;
      state.isLoading = false;
      if (action.payload.length !== 0) {
        const newState = state.userList.push(...action.payload) as any;
        state.userList = newState;
      }
    },
    getUserDataFailure: (state, { payload: error }) => {
      state.isLoading = false;
      state.hasMore = false;
    },
  },
});

export const { getUserData, getUserDataSuccess, getUserDataFailure } =
  usersSlice.actions;

export default usersSlice.reducer;
