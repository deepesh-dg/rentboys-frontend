import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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

    const handleSelect = (event) => {
        setSelectedValue(event.target.value);
        onChange(event);
    };

    return (
        <FormControl
            variant={variant}
            sx={{ ...sx, '& .MuiOutlinedInput-root': { color: 'white', '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' }, '&.Mui-focused fieldset': { borderColor: 'red' } } }}
            error={error}
            required={required}
            disabled={disabled}
            className={`p-1 ${className}`}
        >
            <InputLabel id="select-label" sx={{ color: 'white' }}>{label}</InputLabel>
            <Select
                labelId="select-label"
                value={selectedValue}
                onChange={handleSelect}
                multiple={multiple}
                placeholder={placeholder}
                sx={{
                    color: 'white',
                    '& .MuiSelect-icon': {
                        color: 'white',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'red',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                    },
                }}
                {...props}
            >
                {options.map((option) => (
                    <MenuItem key={option?.value} value={option?.value} sx={{ color: 'black' }}>
                        {option?.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default MuiDropdown;
