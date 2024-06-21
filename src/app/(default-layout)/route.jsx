import DefaultLayout from "./layout";
import Home from "./page";

import ProtectedRoutes from "./(protected)/route";
import PoliciesRoutes from "./(policy)/route";
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
            ...PoliciesRoutes,
            ...ProtectedRoutes,
        ],
    },
];

export default DefaultRoutes;
