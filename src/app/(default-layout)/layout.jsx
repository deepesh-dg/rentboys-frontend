import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./_components/header";
import Footer from "./_components/footer";

export default function Layout() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <div className="main flex-1" id="main">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
