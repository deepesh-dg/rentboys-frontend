import MembershipPlan from "./membership-plan/page";
import OnboardingLayout from "./layout";

/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const OnboardingRoutes = [
    {
        path: "/",
        element: <OnboardingLayout />,
        children: [
            {
                path: "/membership-plans",
                element: <MembershipPlan />,
            },
        ],
    },
];

export default OnboardingRoutes;
