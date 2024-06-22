import React from "react";
import Icons from "@/components/icons/Component";

const Input = ({
    icon,
    type,
    placeholder,
    value,
    onchange,
    className,
    error,
    ...props
}) => {
    return (
        <div className="relative w-full">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onchange}
                {...props}
                className={`text-md w-full border border-[#303030] bg-black py-4 pl-12 text-white outline-none placeholder:text-white focus:ring-1 focus:ring-red-50 ${className}`}
            />
            <div className="absolute left-4 top-[50%] translate-y-[-50%]">
                <Icons src={icon} className="w-6" />
            </div>
            {error && <div className="text-red-50">{error}</div>}
        </div>
    );
};

export default Input;
