import React from "react";
import Icons from "@/components/icons/Component";

const Input = ({
    icon,
    type,
    placeholder,
    value,
    onChange,
    className,
    error,
    position = false,
    ...props
}) => {
    return (
        <div className="w-full">
            <div className="relative">
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    {...props}
                    className={`w-full border border-gray-300 bg-black py-4 text-base text-white outline-none placeholder:text-base placeholder:font-normal placeholder:text-white placeholder:opacity-80 focus:ring-1 focus:ring-red-50 ${icon && !position ? "pl-12" : "pl-4"} ${className}`}
                />
                {icon && (
                    <div
                        className={`absolute top-[50%] translate-y-[-50%] ${position ? "right-4" : "left-4"}`}
                    >
                        <Icons
                            src={icon}
                            className={`${position ? "w-8" : "w-6"}`}
                        />
                    </div>
                )}
            </div>
            {error && <div className="p-1 text-red-50">{error}</div>}
        </div>
    );
};

export default Input;
