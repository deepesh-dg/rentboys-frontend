import ProtectedLayout from "./layout";
import Profile from "./profile/page";

/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const ProtectedRoutes = [
    {
        path: "/",
        element: <ProtectedLayout />,
        children: [
            {
                path: "/profile",
                element: <Profile />,
            },
        ],
    },
];

export default ProtectedRoutes;
