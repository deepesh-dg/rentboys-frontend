import { lazy } from "react";

const ChoosePlans = lazy(() => import("./choose-plans/page"));

/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const clientRoutes = [
    {
        path: "choose-plans",
        element: <ChoosePlans />,
    },
];

export default clientRoutes;
