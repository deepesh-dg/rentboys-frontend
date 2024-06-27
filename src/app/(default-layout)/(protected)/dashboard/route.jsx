import { lazy } from "react";

const DashboardLayout = lazy(() => import("./layout"));
const Dashboard = lazy(() => import("./page"));

/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const dashboardRoutes = [
    {
        path: "",
        element: <DashboardLayout />,
        children: [
            {
                path: "",
                element: <Dashboard />,
            },
        ],
    },
];

export default dashboardRoutes;
