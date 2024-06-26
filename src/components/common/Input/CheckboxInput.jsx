import React from "react";
import classNames from "classnames";

const CheckboxInput = ({
    checked,
    onChange,
    className,
    label,
    ...props
}) => {
    return (
        <div className="relative flex items-center">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                {...props}
                className={classNames(
                    "h-5 w-5 border border-red-500 bg-transparent checked:bg-transparent checked:border-red-500 checked:text-red-500 focus:ring-1",
                    className
                )}
            />
            {label && <span className="ml-2 text-white">{label}</span>}
        </div>
    );
};

export default CheckboxInput;
