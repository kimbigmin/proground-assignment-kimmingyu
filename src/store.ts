import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./features/common/commonSlice";
import usersReducer from "./features/users/usersSlice";
import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import userSaga from "./features/users/saga";
import logger from "redux-logger";

function* rootSaga() {
  yield all([userSaga, logger]);
}

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    common: commonReducer,
    users: usersReducer,
  },
  middleware: [sagaMiddleware, logger],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
