import { configureStore } from "@reduxjs/toolkit";
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

import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

import createRootReducer from "./rootSlice";

const persistConfig = {
  key: "carConfig",
  storage,
  blacklist: ["router"]
};

export const history = createBrowserHistory();

const withHistoryReducer = createRootReducer(history);
const persistedReducer = persistReducer(persistConfig, withHistoryReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(routerMiddleware(history)),
});

export const persistor = persistStore(store);
export default store;
