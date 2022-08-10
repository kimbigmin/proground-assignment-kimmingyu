import axios from "axios";
import { call, put, takeEvery, take } from "redux-saga/effects";
import {
  getUserDataSuccess,
  getUserDataFailure,
  getUserData,
} from "./usersSlice";

interface User {
  image: string;
  serialNumber: string;
  price: string;
}

const REQUEST_URL =
  "https://mxl2ywa4zhlvwjymvb5gnc247a0qfndn.lambda-url.ap-northeast-2.on.aws";

const getUsers = async (page: number) => {
  const response = await axios.get(`${REQUEST_URL}/?limit=${10}offset=${page}`);
  return response.data;
};

export function* getUsersList(action: { type: string; payload: number }) {
  const params = action.payload;
  try {
    const response: User[] = yield call(getUsers, params);
    yield put(getUserDataSuccess(response));
  } catch (err) {
    yield put(getUserDataFailure);
  }
}

function* userSaga() {
  yield takeEvery("users/getUserData", getUsersList);
}

export default userSaga;
