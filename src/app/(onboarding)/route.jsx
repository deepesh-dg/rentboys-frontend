import { lazy } from "react";

const MembershipPlan = lazy(() => import("./membership-plan/page"));
const CreateProfile = lazy(() => import("./create-profile/page"));

/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const onboardingRoutes = [
    {
        path: "membership-plan",
        element: <MembershipPlan />,
    },
    {
        path: "create-profile",
        element: <CreateProfile />,
    },
];

export default onboardingRoutes;
