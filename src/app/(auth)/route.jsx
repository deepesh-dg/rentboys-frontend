import { lazy } from "react";
const LoginLayout = lazy(() => import("./login/layout"));
const AuthLayout = lazy(() => import("./layout"));
const Login = lazy(() => import("./login/page"));
const Signup = lazy(() => import("./signup/page"));
const ForgotPassword = lazy(() => import("./forgot-password/page"));

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
                element: <LoginLayout />,
                children: [
                    {
                        path: "",
                        element: <Login />
                    }
                ]
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/forgot-password",
                element: <ForgotPassword />,
            },
        ],
    },
];

export default AuthRoutes;
