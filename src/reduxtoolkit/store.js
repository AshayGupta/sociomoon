import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use local storage
import counterReducer from "./reducers/counterSlice";

// Persist Config
const persistConfig = {
  key: "root",
  storage: storage,
};

// Combine Reducers
const rootReducer = combineReducers({
  counter: counterReducer,
});

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for redux-persist
    }),
});

// Persistor
export const persistor = persistStore(store);
export default store;
