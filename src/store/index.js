import { configureStore } from "@reduxjs/toolkit";
import { authReducer, mastersReducer } from "./slices";

const store = configureStore({
    reducer: {
        auth: authReducer,
        masters: mastersReducer,
    },
});

export default store;
