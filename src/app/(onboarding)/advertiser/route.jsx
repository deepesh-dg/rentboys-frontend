import { lazy } from "react";

const ProfileSetup = lazy(() => import("./profile-setup/page"));
const ChoosePlans = lazy(() => import("./choose-plans/page"));
const MembershipPlan = lazy(() => import("./membership-plan/page"))
/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const advertiserRoutes = [
    {
        path: "profile-setup",
        element: <ProfileSetup />,
    },
    {
        path: "choose-plans",
        element: <ChoosePlans />,
    },
    {
        path: "membership-plans",
        element: <MembershipPlan />,
    },
];

export default advertiserRoutes;
