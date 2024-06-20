import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import CustomLoader from "../lib/loader";
import { Provider } from "react-redux";
import Boot from "@/components/boot";
import store from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store";

export default function RootLayout() {
    return (
        <Suspense fallback={<CustomLoader />}>
            <Provider store={store}>
                <PersistGate loading={<CustomLoader />} persistor={persistor}>
                    <Boot />
                    <div className="bg-dark">
                        <Outlet />
                    </div>
                </PersistGate>
            </Provider>
        </Suspense>
    );
}
