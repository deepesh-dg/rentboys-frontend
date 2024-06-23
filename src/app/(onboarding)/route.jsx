import MembershipPlan from "./membership-plan/page";
import OnboardingLayout from "./layout";
import CreateProfile from "./create-profile/page";

/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const OnboardingRoutes = [
    {
        path: "/",
        element: <OnboardingLayout />,
        children: [
            {
                path: "membership-plans",
                element: <MembershipPlan />,
            },
            {
                path: "create-profile",
                element: <CreateProfile />,
            },
        ],
    },
];

export default OnboardingRoutes;
