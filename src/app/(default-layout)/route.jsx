import DefaultLayout from "./layout";
import Home from "./page";
import ProtectedRoutes from "./(protected)/route";
import Login from "./login";
import Signup from "./signup";
import Location from "./location";
import MembershipPlan from "./membershipPlan";
import OtpVarification from "./otpVarification";
import UserRole from "./userRole"
/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const DefaultRoutes = [
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/location",
                element: <Location />,
            },
            {
                path: "/membership-plan",
                element: <MembershipPlan />,
            },
            {
                path: "/otp-varification",
                element: <OtpVarification />,
            },
            {
                path: "/user-role",
                element: <UserRole />,
            },
            ...ProtectedRoutes,
        ],
    },
];

export default DefaultRoutes;
