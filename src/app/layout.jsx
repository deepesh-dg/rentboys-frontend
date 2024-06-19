import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import CustomLoader from "../lib/loader";
import { Provider } from "react-redux";
import Boot from "@/components/boot";
import store from "@/store";

export default function RootLayout() {
    return (
        <Suspense fallback={<CustomLoader />}>
            <Provider store={store}>
                <Boot />
                <div className="bg-dark">
                    <Outlet />
                </div>
            </Provider>
        </Suspense>
    );
}
