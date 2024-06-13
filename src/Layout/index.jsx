import { Outlet } from "react-router-dom";
// import Header from "../layouts/Header";
import { Suspense } from "react";
import CustomLoader from "../lib/loader";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="bg-[#191919] h-full">
    <Header />
      <Suspense fallback={<CustomLoader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
}
