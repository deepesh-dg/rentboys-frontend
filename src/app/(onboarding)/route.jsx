import { lazy } from "react";

const MembershipPlan = lazy(() => import("./membership-plan/page"));
const CreateProfile = lazy(() => import("./create-profile/page"));
const ClientMembershipPlan = lazy(
    () => import("./client-membership-plan/page")
);
const AdvertiserMembershipPlan = lazy(
    () => import("./advertiser-membership-plan/page")
);

/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const onboardingRoutes = [
    {
        path: "client-membership-plan",
        element: <ClientMembershipPlan />,
    },
    {
        path: "advertiser-membership-plan",
        element: <AdvertiserMembershipPlan />,
    },
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
