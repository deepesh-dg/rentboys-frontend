import React from 'react';

const Button = ({ label, onClick, variant = "default", size = "md", className = "", ...rest }) => {
    const variants = {
        "default": "bg-red-100 hover:bg-red-50",
        "colored": "bg-red-50 hover:bg-red-100",
        "outlined": "border border-red-50 bg-transparent",
        "text": "bg-transparent",
    };

    // Define size classes
    const sizes = {
        "sm": "px-4 py-2 text-sm font-medium mx-2",
        "md": "px-20 py-4 text-xl uppercase",
    };

    // Combine variant and size classes
    const buttonClass = `w-full rounded-lg text-white font-bold ${variants[variant]} ${sizes[size]} ${className}`;

    return (
        <button
            type="button"
            onClick={onClick}
            className={buttonClass.trim()}
            {...rest}
        >
            {label}
        </button>
    );
};

export default Button;
