import React from "react";

const Form = ({
    title,
    description,
    children,
    error,
    className,
    maxWidth = "xl",
    ...props
}) => {
    // Determine the max width classes based on the prop
    const maxWidthClasses = {
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        "5xl": "max-w-5xl",
        "6xl": "max-w-6xl",
        "7xl": "max-w-7xl",
    };

    return (
        <form
            className={`z-1 flex w-full ${maxWidthClasses[maxWidth]} flex-col items-center gap-y-6 rounded-2xl border border-gray-300 bg-black/70 px-4 py-12 text-white shadow-sm md:px-16 ${className}`}
            {...props}
        >
            <div className="flex flex-col items-center">
                <h1 className="font-fira-sans text-2xl font-normal text-white">
                    {title}
                </h1>
                {description && (
                    <p className="mt-2 text-center text-gray-200">
                        {description}
                    </p>
                )}
                {title && (
                    <span className="my-2 inline-block h-1 w-10 bg-red-50"></span>
                )}
            </div>
            {error && <div className="text-center text-red-50">{error}</div>}
            {children}
        </form>
    );
};

export default Form;
