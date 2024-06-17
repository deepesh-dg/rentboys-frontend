import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import CustomLoader from "../lib/loader";
import { ReactIcon } from "@/components/icons";

export default function RootLayout() {
    console.log({ ReactIcon });
    return (
        <Suspense fallback={<CustomLoader />}>
            <div className="bg-dark">
                <Outlet />
            </div>
        </Suspense>
    );
}
