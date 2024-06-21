import classNames from "classnames";
import { LinkProps } from "next/link";
import React from "react";
import Icons from "@/components/icons/Component";
import { Button } from "@/components/common";
import { useRouter } from "@/hooks/router";


const NavHeading = ({ children }) => {
    const { pathname } = useRouter();

    const extraPathname = pathname
        .replace("/profile/settings", "")
        .replace("/profile/settings/", "");

    const matchHref = props.href.replace("/profile/settings", "").replace("/profile/settings/", "");

    const active = extraPathname === matchHref;

    return (
        <div>
            {children.name}
        </div>
    );
};

export default NavHeading;
