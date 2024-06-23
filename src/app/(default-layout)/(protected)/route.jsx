import ProtectedLayout from "./layout";
import UserDashboard from "./dashboard/page";

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
                element: <UserDashboard />,
            },
        ],
    },

];

export default ProtectedRoutes;
