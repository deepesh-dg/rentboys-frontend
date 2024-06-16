import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";

const MuiDropdown = ({
    options = [],
    value,
    onChange,
    label,
    variant = "outlined",
    multiple = false,
    disabled = false,
    error = false,
    required = false,
    placeholder,
    sx,
    className,
    ...props
}) => {
    const [selectedValue, setSelectedValue] = useState(value);

    useEffect(() => {
        setSelectedValue(value);
    }, [value]);

    const handleSelect = event => {
        setSelectedValue(event.target.value);
        onChange(event);
    };

    return (
        <FormControl
            variant={variant}
            sx={sx}
            error={error}
            required={required}
            disabled={disabled}
            className={`p-1 ${className}`}
        >
            <InputLabel id="select-label">{label}</InputLabel>
            <Select
                value={selectedValue}
                onChange={handleSelect}
                multiple={multiple}
                placeholder={placeholder}
                {...props}
            >
                {options.map(option => (
                    <MenuItem key={option?.value} value={option?.value}>
                        {option?.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default MuiDropdown;
