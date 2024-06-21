import { lazy } from "react";

const AuthLayout = lazy(() => import("./layout"));
const Login = lazy(() => import("./login/page"));
const Signup = lazy(() => import("./signup/page"));
const OTPVerification = lazy(() => import("./otp-verification/page"));
const User = lazy(() => import("./user/page"));
const Location = lazy(() => import("./location/page"));
const MemberPlan = lazy(() => import("./membership-plan/page"));
const ForgetPassword = lazy(() => import("./forget-password/page"));
const ResetPassword = lazy(() => import("./reset-password/page"));
const UploadId = lazy(() => import("./uploadId/page"));


/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const AuthRoutes = [
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/otp-verification",
                element: <OTPVerification />,
            },
            {
                path: "/user",
                element: <User />,
            },
            {
                path: "/location",
                element: <Location />,
            },
            {
                path: "/membership-plan",
                element: <MemberPlan />,
            },
            {
                path: "/forget-password",
                element: <ForgetPassword />,
            },
            {
                path: "/reset-password",
                element: <ResetPassword />,
            },
            {
                path: "/uploadid",
                element: <UploadId />,
            },
        ],
    },
];

export default AuthRoutes;
