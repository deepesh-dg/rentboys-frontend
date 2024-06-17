"use client";

import React from "react";
import { ReactSVG } from "react-svg";
import classNames from "classnames";

/**
 *
 * @param {{ className?: string, icon: string, ref?: React.Ref<HTMLDivElement> } & import('react-svg').Props} props
 * @returns {JSX.Element}
 */
export default function Icons({ icon, ref, className, ...props }) {
    return (
        <ReactSVG
            src={icon}
            className={classNames("[&>*]:w-full", className)}
            {...props}
        />
    );
}
