import { lazy } from "react";

const PolicyLayout = lazy(() => import("./layout"));
const TermsOfService = lazy(() => import("./terms-of-service/page"));
const PrivacyPolicy = lazy(() => import("./privacy-policy/page"));
const CookiePolicy = lazy(() => import("./cookie-policy/page"));
const DMCANotice = lazy(() => import("./DMCA-notice/page"));
const Legal = lazy(() => import("./legal/page"));
const ContactUs = lazy(() => import("./contact-us/page"));

/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const policiesRoutes = [
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
                path: "/dmca-notice",
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

export default policiesRoutes;
