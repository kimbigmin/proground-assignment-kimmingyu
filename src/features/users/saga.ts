import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { getUserDataSuccess, getUserDataFailure } from "./usersSlice";
import { User } from "../../types/type";
import { PayloadAction } from "@reduxjs/toolkit";

const REQUEST_URL =
  "https://mxl2ywa4zhlvwjymvb5gnc247a0qfndn.lambda-url.ap-northeast-2.on.aws";

axios.defaults.baseURL = REQUEST_URL;

const getUsers = async (page: number) => {
  const response = await axios.get(`/?limit=${20}&offset=${page}`);
  const refinedData = response.data.map((user: User) => {
    return { ...user, isBlocked: false };
  });
  return refinedData;
};

export function* getUsersList(action: PayloadAction<number>) {
  const params = action.payload;
  try {
    const response: User[] = yield call(getUsers, params);

    yield put(getUserDataSuccess(response));
  } catch (err) {
    yield put(getUserDataFailure);
  }
}

function* userSaga() {
  yield takeLatest("users/getUserData", getUsersList);
}

export default userSaga;
