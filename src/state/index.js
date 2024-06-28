import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    authReducer,
    loaderReducer,
    mastersReducer,
    signupScreenStepsReducer,
} from "./slices";
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
import session from "redux-persist/lib/storage/session";

const authPersistedReducer = persistReducer(
    {
        key: "auth",
        storage,
        version: "0.0.1",
    },
    authReducer
);

const signupScreenStepsPersistedReducer = persistReducer(
    {
        key: "signup-screen-steps",
        storage: session,
        version: "0.0.1",
    },
    signupScreenStepsReducer
);

const reducers = combineReducers({
    auth: authPersistedReducer,
    masters: mastersReducer,
    signupScreenSteps: signupScreenStepsPersistedReducer,
    loader: loaderReducer,
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
export * from "./hooks";
