import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import CustomLoader from "../lib/loader";

export default function RootLayout() {
    return (
        <Suspense fallback={<CustomLoader />}>
            <div className="bg-dark">
                <Outlet />
            </div>
        </Suspense>
    );
}
