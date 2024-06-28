import { lazy } from "react";

const MembershipPlan = lazy(() => import("./membership-plan/page"));
const CreateProfile = lazy(() => import("./create-profile/page"));
const AdvertiserMembershipPlan = lazy(() => import("./advertiser-membership-plan/page"));


/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const onboardingRoutes = [
    {
        path: "membership-plan",
        element: <MembershipPlan />,
    },
    {
        path: "advertiser-membership-plan",
        element: <AdvertiserMembershipPlan />,
    },
    {
        path: "create-profile",
        element: <CreateProfile />,
    },
];

export default onboardingRoutes;
