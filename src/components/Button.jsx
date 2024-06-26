// import React from "react";
// import { Link } from "react-router-dom";

// const Button = ({
//     label,
//     onClick,
//     variant = "default",
//     size = "md",
//     href,
//     target,
//     className = "",
//     ...rest
// }) => {
//     const variants = {
//         default: "bg-red-100 hover:bg-red-50",
//         colored: "bg-red-50 hover:bg-red-100",
//         outlined: "border border-red-50 bg-transparent",
//         text: "bg-transparent",
//     };

//     const sizes = {
//         "xs": "px-0 py-2 text-lg font-bold",
//         "sm": "px-4 py-2 text-sm font-medium w-full",
//         "md": "px-20 py-4 text-xl uppercase",
//     };

//     const buttonClass = `flex whitespace-nowrap justify-center rounded-lg text-white font-bold ${variants[variant]} ${sizes[size]} ${className}`;

//     if (href) {
//         return (
//             <Link to={href} target={target === "_blank" ? "_blank" : undefined}
//                 className={buttonClass.trim()}
//                 {...rest}>
//                 <button
//                     type="button"
//                     disabled={loading}
//                     onClick={onClick}>
//                     {label}
//                 </button>
//             </Link>
//         );
//     } else {
//         return (
//             <button
//                 type="button"
//                 onClick={onClick}
//                 disabled={loading}
//                 className={buttonClass.trim()}
//                 {...rest}
//             >
//                 {label}
//             </button>
//         );
//     }
// };

// export default Button;

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
        outlined: "border border-red-50 bg-transparent",
        text: "bg-transparent",
    };

    const sizes = {
        "xs": "px-0 py-2 text-lg font-bold",
        "sm": "px-4 py-2 text-sm font-medium w-full",
        "md": "px-20 py-4 text-xl uppercase",
    };

    const buttonClass = `flex whitespace-nowrap justify-center rounded-lg text-white font-bold ${variants[variant]} ${sizes[size]} ${className}`;

    const content = loading ? (
        <div className="loader">Loading...</div>
    ) : (
        label
    );

    if (href) {
        return (
            <Link to={href} target={target === "_blank" ? "_blank" : undefined}
                className={buttonClass.trim()}
                {...rest}>
                <button
                    type="button"
                    onClick={onClick}
                    disabled={loading}
                >
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
