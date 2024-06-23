import AuthRoutes from "./(auth)/route";
import DefaultRoutes from "./(default-layout)/route";
import RootLayout from "./layout";
import NotFound from "./not-found";
import ErrorPage from "./error";
import Consent from "./consent";
import OnboardingRoutes from "./(onboarding)/route";

/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const RootRoute = [
    // Public Routes
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            ...DefaultRoutes,

            // Login, Signup Routes
            ...AuthRoutes,

            // Onboarding Routes
            ...OnboardingRoutes,
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
