import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserList, User } from "../../types/type";

const initialState: UserList = {
  userList: [],
  hasMore: true,
  isLoading: false,
  currentPage: 20,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUserData: (state, action: PayloadAction<number>) => {
      state.isLoading = true;
    },
    getUserDataSuccess: (state, action: PayloadAction<User[]>) => {
      let setHasMore;
      if (action.payload !== undefined) {
        setHasMore = action.payload.length !== 0 ? true : false;
      } else {
        setHasMore = false;
      }
      state.hasMore = setHasMore;
      state.isLoading = false;
      if (action.payload.length !== 0) {
        state.userList = [...state.userList, ...action.payload];
      }
    },
    getUserDataFailure: (state, { payload: error }) => {
      state.isLoading = false;
      state.hasMore = false;
    },
    setBlock: (state, action: PayloadAction<number>) => {
      state.userList[action.payload].isBlocked =
        !state.userList[action.payload].isBlocked;
    },
    setPage: (state) => {
      state.currentPage += 20;
    },
  },
});

export const {
  getUserData,
  getUserDataSuccess,
  getUserDataFailure,
  setBlock,
  setPage,
} = usersSlice.actions;

export default usersSlice.reducer;
