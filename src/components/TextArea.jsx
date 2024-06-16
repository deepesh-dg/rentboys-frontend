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
            className={`p-2 ${className}`}
            {...rest}
        />
    );
};

export default Textarea;
