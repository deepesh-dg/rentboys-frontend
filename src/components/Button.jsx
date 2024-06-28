import React from "react";
import { Link } from "react-router-dom";

const Button = ({
    children,
    onClick,
    theme = "red",
    variant = "default",
    size = "md",
    href,
    target,
    className = "",
    ...rest
}) => {
    const themes = {
        red: {
            variants: {
                default: "bg-red-100 hover:bg-red-50",
                colored: "bg-red-50 text-white hover:bg-red-100",
                outlined: "border border-red-50 bg-transparent",
                text: "border border-red-50 bg-transparent ",
            },
        },
        white: {
            variants: {
                default: "bg-white text-black",
                colored: "bg-white text-black",
                outlined: "border border-white bg-transparent",
                text: "border bg-none border-white bg-transparent ",
            },
        },
    };

    const sizes = {
        xs: "px-0 py-2",
        sm: "px-4 py-2",
        md: "px-6 py-4",
    };

    const buttonClass = `${themes[theme].variants[variant]} ${sizes[size]} ${className} duration-200`;

    if (href) {
        return (
            <Link
                to={href}
                target={target === "_blank" ? "_blank" : undefined}
                className={buttonClass.trim()}
                {...rest}
            >
                {children}
            </Link>
        );
    } else {
        return (
            <button
                type="button"
                onClick={onClick}
                className={buttonClass.trim()}
                {...rest}
            >
                {children}
            </button>
        );
    }
};

export default Button;
