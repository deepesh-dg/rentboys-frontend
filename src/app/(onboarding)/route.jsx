import { Outlet } from "react-router-dom";
import clientRoutes from "./client/route";
import advertiserRoutes from "./advertiser/route";

/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const onboardingRoutes = [
    {
        path: "client",
        element: <Outlet />,
        children: clientRoutes,
    },
    {
        path: "advertiser",
        element: <Outlet />,
        children: advertiserRoutes,
    },
];

export default onboardingRoutes;
