import ProtectedLayout from "./layout";
import DashboardRoutes from "./dashboard/route";

/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const ProtectedRoutes = [
    {
        path: "/",
        element: <ProtectedLayout />,
        children: [
            {
                path: "/dashboard",
                children: DashboardRoutes,
            },
        ],
    },
];

export default ProtectedRoutes;
