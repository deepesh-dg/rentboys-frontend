import React from "react";

const Textarea = ({
    value,
    placeholder,
    onChange,
    rows,
    className,
    ...rest
}) => {
    return (
        <textarea
            value={value}
            placeholder={placeholder}
            onChange={e => onChange(e.target.value)}
            rows={rows}
            className={`w-full border border-gray-300 bg-black text-white outline-none placeholder:text-white focus:ring-1 focus:ring-red-50 ${className}`}
            {...rest}
        />
    );
};

export default Textarea;
