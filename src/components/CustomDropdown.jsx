import React, { useEffect, useState } from "react";

const Dropdown = ({ value, options, className, onChange, ...rest }) => {
    const [selectedValue, setSelectedValue] = useState(value);

    useEffect(() => {
        setSelectedValue(value);
    }, [value]);

    const handleSelect = (event) => {
        setSelectedValue(event.target.value);
        if (onChange) {
            onChange(event);
        }
    };

    return (
        <div className="relative">
            <select
                value={selectedValue}
                onChange={handleSelect}
                className={`block appearance-none w-full px-4 py-4 rounded-lg bg-black text-white border-none outline-none ${className}`}
                {...rest}
            >
                {options.map((option) => (
                    <option key={option.id} value={option.value} className="hover:bg-red-500">
                        {option.label}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2">
                <svg
                    className="w-5 h-5 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Dropdown;
