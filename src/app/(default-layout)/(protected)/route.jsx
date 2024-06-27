import { Outlet } from "react-router-dom";
import dashboardRoutes from "./dashboard/route";

/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const protectedRoutes = [
    {
        path: "dashboard",
        element: <Outlet />,
        children: dashboardRoutes,
    },
];

export default protectedRoutes;
