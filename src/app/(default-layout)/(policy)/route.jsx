import PolicyLayout from "./layout";
import ContactUs from "./contact-us/page";
import CookiePolicy from "./cookie-policy/page";
import DMCANotice from "./DMCA-notice/page";
import Legal from "./legal/page";
import PrivacyPolicy from "./privacy-policy/page";
import TermsOfService from "./terms-of-service/page";

/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const PoliciesRoutes = [
    {
        path: "/",
        element: <PolicyLayout />,
        children: [
            {
                path: "contact",
                element: <ContactUs />,
            },
            {
                path: "cookie-policy",
                element: <CookiePolicy />,
            },
            {
                path: "/DMCA-notice",
                element: <DMCANotice />,
            },
            {
                path: "legal",
                element: <Legal />,
            },
            {
                path: "privacy-policy",
                element: <PrivacyPolicy />,
            },
            {
                path: "terms-of-service",
                element: <TermsOfService />,
            },
        ],
    },
];

export default PoliciesRoutes;
