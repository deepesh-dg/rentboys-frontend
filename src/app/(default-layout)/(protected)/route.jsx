import { Outlet } from "react-router-dom";
import dashboardRoutes from "./dashboard/route";
import Logout from "./logout/page";

/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const protectedRoutes = [
    {
        path: "dashboard",
        element: <Outlet />,
        children: dashboardRoutes,
    },
    {
        path: "logout",
        element: <Logout />,
    },
];

export default protectedRoutes;
