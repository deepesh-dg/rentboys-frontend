import { useState } from "react";

const Dropdown = ({ value, options, className, ...rest }) => {
    const [selectedValue, setSelectedValue] = useState(value);

    const handleSelect = event => {
        setSelectedValue(event.target.value);
    };

    return (
        <select
            value={selectedValue}
            onChange={handleSelect}
            className={className}
            {...rest}
        >
            {options.map(option => (
                <option key={option.id} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
