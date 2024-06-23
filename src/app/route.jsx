import AuthRoutes from "./(auth)/route";
import DefaultRoutes from "./(default-layout)/route";
import RootLayout from "./layout";
import NotFound from "./not-found";
import ErrorPage from "./error";
import Consent from "./consent";
import CreateProfile from "./create-profile/page"


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
        ],
    },
    {
        path: "/consent",
        element: <Consent />,
    },
    {
        path: "/create-profile",
        element: <CreateProfile />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
];

export default RootRoute;
