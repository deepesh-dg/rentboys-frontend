import DefaultLayout from "./layout";
import Home from "./page";

import protectedRoutes from "./(protected)/route";
import policiesRoutes from "./(policy)/route";
import { ProtectedRoutes } from "@/hoc";

/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const defaultRoutes = [
    {
        path: "",
        element: <DefaultLayout />,
        children: [
            {
                path: "",
                element: <Home />,
            },

            ...policiesRoutes,

            {
                path: "",
                element: <ProtectedRoutes />,
                children: protectedRoutes,
            },
        ],
    },
];

export default defaultRoutes;
