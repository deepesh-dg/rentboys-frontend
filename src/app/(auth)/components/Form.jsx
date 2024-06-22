import React from 'react';

const Form = ({ title, description, children, className, maxWidth = "xl" }) => {
    // Determine the max width classes based on the prop
    const maxWidthClasses = {
        "xl": "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        "5xl": "max-w-5xl",
        "6xl": "max-w-6xl",
        "7xl": "max-w-7xl",
    };

    return (
        <div className={`z-1 flex w-full ${maxWidthClasses[maxWidth]} flex-col gap-y-6 px-4 md:px-16  py-12 items-center rounded-2xl border border-gray-300 bg-black/80  text-white shadow-sm ${className}`}>
            <div className='flex flex-col items-center'>
                <h1 className='font-fira-sans text-white font-normal text-2xl'>{title}</h1>
                {description && (
                    <p className='text-gray-200 text-center mt-2'>
                        {description}
                    </p>
                )}
                {title && <span className='w-10 h-1 my-2 inline-block bg-red-50'></span>}
            </div>
            {children}
        </div>

    );
};

export default Form;
