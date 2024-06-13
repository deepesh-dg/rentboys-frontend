import { useState } from 'react';

const SelectOption = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      {options.map((option, index) => (
        <div
          key={index}
          className={`option ${selectedOption === option ? 'selected' : ''}`}
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default SelectOption;
