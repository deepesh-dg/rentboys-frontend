import React from "react";
// import { useRouter } from "@/hooks/router";
import { useRoutes } from "react-router-dom";

const NavHeading = ({ children }) => {
    // const { pathname } = useRoutes();
    // console.log(pathname, "pathname");

    // const extraPathname = pathname
    //     .replace("/profile/settings", "")
    //     .replace("/profile/settings/", "");

    // const matchHref = props.href
    //     .replace("/profile/settings", "")
    //     .replace("/profile/settings/", "");

    // const active = extraPathname === matchHref;

    return <div>{children}</div>;
};

export default NavHeading;
