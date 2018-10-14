import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import { authReducer } from "./reducers/auth";
import storage from "redux-persist/lib/storage";

const allReducers = combineReducers({
  authReducer
});

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const peristor = persistStore(store);
