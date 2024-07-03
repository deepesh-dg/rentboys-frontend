import clientRoutes from "./client/route";
import advertiserRoutes from "./advertiser/route";
import { ProtectedRoutes } from "@/hoc";
import { UserTypeId } from "@/constants";

/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const onboardingRoutes = [
    {
        path: "client",
        element: <ProtectedRoutes allowedRoleIds={[UserTypeId.CLIENT]} />,
        children: clientRoutes,
    },
    {
        path: "advertiser",
        element: <ProtectedRoutes allowedRoleIds={[UserTypeId.ADVERTISER]} />,
        children: advertiserRoutes,
    },
];

export default onboardingRoutes;
