import { lazy } from "react";

const ChoosePlans = lazy(() => import("./choose-plans/page"));
const MembershipPlan = lazy(() => import("./membership-plan/page"))

/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const clientRoutes = [
    {
        path: "choose-plans",
        element: <ChoosePlans />,
    },
    {
        path: "membership-plans",
        element: <MembershipPlan />,
    },
];

export default clientRoutes;
