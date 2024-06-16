import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootRoute from "./app/route";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={createBrowserRouter(RootRoute)} />
    </React.StrictMode>
);
