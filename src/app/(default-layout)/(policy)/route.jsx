import PolicyLayout from "./layout";
import ContactUs from "./contact-us/page";

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
        ],
    },
];

export default PoliciesRoutes;
