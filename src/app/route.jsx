import authRoutes from "./(auth)/route";
import DefaultRoutes from "./(default-layout)/route";
import RootLayout from "./layout";
import ErrorPage from "./error";
import Consent from "./consent";
import onboardingRoutes from "./(onboarding)/route";
import { AuthRoutes, ProtectedRoutes } from "@/hoc";
import { lazy } from "react";
import { Provider } from "react-redux";
import store from "@/state";

const NotFound = lazy(() => import("./not-found"));

/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const RootRoute = [
    // Public Routes
    {
        path: "/",
        element: (
            <Provider store={store}>
                <RootLayout />
            </Provider>
        ),
        errorElement: <ErrorPage />,
        children: [
            ...DefaultRoutes,

            // Login, Signup Routes
            {
                path: "",
                element: <AuthRoutes />,
                children: authRoutes,
            },

            // Onboarding Routes
            {
                path: "",
                element: <ProtectedRoutes redirectTo="/signup" />,
                children: onboardingRoutes,
            },
        ],
    },
    {
        path: "/consent",
        element: <Consent />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
];

export default RootRoute;
