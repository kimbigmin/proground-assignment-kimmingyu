import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./features/common/commonSlice";
import usersReducer from "./features/users/usersSlice";
import createSagaMiddleware from "redux-saga";
import userSaga from "./features/users/saga";
import logger from "redux-logger";
import { combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "primary",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  common: commonReducer,
  users: usersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(sagaMiddleware)
      .concat(logger),
});

sagaMiddleware.run(userSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
