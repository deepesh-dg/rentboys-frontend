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
                    className={`text-base w-full bg-black border border-gray-300 py-4 text-white outline-none placeholder:text-white placeholder:text-base placeholder:font-normal focus:ring-1 focus:ring-red-50 ${icon ? "pl-12" : "pl-4"} ${className}`}
                />
                {icon && icon ? (
                    <div className="absolute left-4 top-[50%] translate-y-[-50%]">
                        <Icons src={icon} className="w-6" />
                    </div>
                ) : null}
            </div>
            {error && <div className="p-1 text-red-50">{error}</div>}
        </div>
    );
};

export default Input;
