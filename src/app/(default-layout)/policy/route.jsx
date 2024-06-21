import AboutLayout from "./layout";
import ContactUs from "./contact-us/page";
import CookiePolicy from "./cookie-policy/page";


/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const AboutLayout = [
    {
        path: "/about",
        element: < ContactUs />,
        // children: [
        //     {
        //         path: "/profile",
        //         element: <Profile />,
        //     },
        // ],
    },
    {
        path: "/cookie-policy",
        element: < CookiePolicy />,
    }
];

export default ProtectedRoutes;
