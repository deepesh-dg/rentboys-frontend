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
        <div className="w-full">
            <div className="relative">
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onchange}
                    {...props}
                    className={`text-md w-full border border-[#303030] bg-black py-4 text-white outline-none placeholder:text-white focus:ring-1 focus:ring-red-50 ${icon ? "pl-12" : "pl-4"} ${className}`}
                />
                {icon && icon ? (
                    <div className="absolute left-4 top-[50%] translate-y-[-50%]">
                        <Icons src={icon} className="w-6" />
                    </div>
                ) : null}
            </div>
            {error && <div className="text-red-50">{error}</div>}
        </div>
    );
};

export default Input;
<Input
    id={formIds.password}
    value={data.password}
    error={errors.password}
    icon={PasswordIcon}
    type="password"
    placeholder="Password"
    onChange={e =>
        setData(prev => {
            prev.password = e.target.value;
        })
    }
/>