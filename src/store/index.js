import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer, mastersReducer } from "./slices";
import {
    persistReducer,
    persistStore,
    REHYDRATE,
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
    key: "auth",
    storage,
    version: "0.0.1",
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

const reducers = combineReducers({
    auth: authPersistedReducer,
    masters: mastersReducer,
});

const store = configureStore({
    reducer: reducers,
    devTools: import.meta.env.NODE_ENV !== "production",
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);

export default store;
