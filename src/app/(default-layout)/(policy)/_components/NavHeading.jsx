import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavHeading({ name, href }) {
    const location = useLocation();
    const isActive = location.pathname === href;

    return (
        <Link to={href} key={href}>
            <li
                className={`px-4 ${isActive ? "border-l-2 border-red-50 text-red-50" : ""}`}
            >
                {name}
            </li>
        </Link>
    );
}

export default NavHeading;
