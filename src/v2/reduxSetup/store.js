import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import createRootReducer from './reducer';

const persistConfig = {
    key: 'carConfig',
    storage
};

const withHistoryReducer = createRootReducer(history);
const persistedReducer = persistReducer(persistConfig, withHistoryReducer);
const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(routerMiddleware(history))
});

export const history = createBrowserHistory();
export const persistor = persistStore(store);

export default store;
