import DashboardLayout from "./layout";
import Dashboard from "./page";

/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const DashboardRoutes = [
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

export default DashboardRoutes;
