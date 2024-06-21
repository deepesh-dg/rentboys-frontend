import DefaultLayout from "./layout";
import Home from "./page";
import About from "./about/page";

import ProtectedRoutes from "./(protected)/route";
/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const DefaultRoutes = [
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            ...ProtectedRoutes,
        ],
    },
];

export default DefaultRoutes;