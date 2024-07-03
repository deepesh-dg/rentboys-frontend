import { lazy } from "react";

const ProfileSetup = lazy(() => import("./profile-setup/page"));
const ChoosePlans = lazy(() => import("./choose-plans/page"));
const MembershipPlan = lazy(() => import("./membership-plan/page"));
const UploadId = lazy(() => import("./upload-id/page"));

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
    {
        path: "upload-id",
        element: <UploadId />,
    },
];

export default advertiserRoutes;
