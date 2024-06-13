import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import CustomLoader from "../lib/loader";

export default function LayoutOne() {
  return (
    <div className="bg-[#191919] h-full">
      <Suspense fallback={<CustomLoader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
