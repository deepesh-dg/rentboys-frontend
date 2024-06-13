import {useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return value;
}

export default function RangeSlider({label, options, className}) {
  const [value, setValue] = useState(options);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={`p-1 ${className}`}>
        {label && <div className="label">{label}</div>}
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        orientation='horizontal'
      />
    </Box>
  );
}
