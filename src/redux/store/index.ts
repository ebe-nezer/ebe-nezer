import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const reducer = combineReducers({});

const persistConfig = {
  key: "root", // Root key for your persisted data (you can choose any string)
  storage,
  whitelist: ["auth", "skills"], // Only persist the 'user' slice
};

const persisterReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persisterReducer,

  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV === "production") {
      return getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      });
    }
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger);
  },
});

// Create the persistor and export it
export const persister = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
