import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    authReducer,
    loaderReducer,
    loginFormReducer,
    signupFormReducer,
    profileFormReducer,
    mastersReducer,
    signupScreenStepsReducer,
    metadataReducer,
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
// import inactivityMiddleware from "./middlewares/inactivity";

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

const loginFormPersistedReducer = persistReducer(
    {
        key: "login-form",
        storage: session,
        version: "0.0.1",
    },
    loginFormReducer
);

const signupFormPersistedReducer = persistReducer(
    {
        key: "signup-form",
        storage: session,
        version: "0.0.1",
    },
    signupFormReducer
);

const profileFormPersistedReducer = persistReducer(
    {
        key: "profile-form",
        storage: session,
        version: "0.0.1",
    },
    profileFormReducer
);
const metadataReducerPersistedReducer = persistReducer(
    {
        key: "metadata",
        storage,
        version: "0.0.1",
    },
    metadataReducer
);

const reducers = combineReducers({
    auth: authPersistedReducer,
    masters: mastersReducer,
    signupScreenSteps: signupScreenStepsPersistedReducer,
    loader: loaderReducer,
    loginForm: loginFormPersistedReducer,
    signupForm: signupFormPersistedReducer,
    profileForm: profileFormPersistedReducer,
    metadata: metadataReducerPersistedReducer,
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
    // .concat(inactivityMiddleware),
});

export const persistor = persistStore(store);

export default store;
export * from "./hooks";
