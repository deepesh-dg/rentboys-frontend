import React from "react";
import { Link } from "react-router-dom";

const Button = ({
    label,
    onClick,
    variant = "default",
    size = "md",
    href,
    target,
    className = "",
    loading = false,
    ...rest
}) => {
    const variants = {
        default: "bg-red-100 hover:bg-red-50",
        colored: "bg-red-50 hover:bg-red-100",
        outlined: "border border-white bg-transparent",
        text: "border border-red-50 bg-transparent ",
    };

    const sizes = {
        xs: "px-0 py-2 text-lg font-bold",
        sm: "px-4 py-2 text-md font-bold rounded-xl",
        md: "px-6 py-4 text-base font-bold rounded-2xl",
    };

    const buttonClass = `flex whitespace-nowrap justify-center text-white font-bold ${variants[variant]} ${sizes[size]} ${className}`;

    const content = loading ? <div className="loader">Loading...</div> : label;

    if (href) {
        return (
            <Link
                to={href}
                target={target === "_blank" ? "_blank" : undefined}
                className={buttonClass.trim()}
                {...rest}
            >
                <button type="button" onClick={onClick} disabled={loading}>
                    {content}
                </button>
            </Link>
        );
    } else {
        return (
            <button
                type="button"
                onClick={onClick}
                className={buttonClass.trim()}
                disabled={loading}
                {...rest}
            >
                {content}
            </button>
        );
    }
};

export default Button;
