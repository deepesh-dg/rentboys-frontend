import React, { useState } from 'react';
import Input from '@/components/common/Input/Input';
import MuiDropdown from '@/components/MuiDropdown';

const Step3 = () => {
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const options = [
        { id: 1, value: "option1", label: "Option 1" },
        { id: 2, value: "option2", label: "Option 2" },
        { id: 3, value: "option3", label: "Option 3" },
    ];

    return (
        <div className="container flex-grow">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6'>
                <MuiDropdown
                    options={options}
                    value={selectedValue}
                    onChange={handleChange}
                    label="Body"
                    className="text-white bg-black outline-none border-none"
                />
                <MuiDropdown
                    options={options}
                    value={selectedValue}
                    onChange={handleChange}
                    label="Race"
                    className="text-white bg-black outline-none border-none"
                />
                <MuiDropdown
                    options={options}
                    value={selectedValue}
                    onChange={handleChange}
                    label="Tattoos"
                    className="text-white bg-black outline-none border-none"
                />
                <MuiDropdown
                    options={options}
                    value={selectedValue}
                    onChange={handleChange}
                    label="Piercing"
                    className="text-white bg-black outline-none border-none"
                />
                <MuiDropdown
                    options={options}
                    value={selectedValue}
                    onChange={handleChange}
                    label="Smoking"
                    className="text-white bg-black outline-none border-none"
                />


            </div>
            <h2 className='text-xl font-bold text-white mt-6'>Services Offering</h2>
            <div className='grid gap-4 md:grid-cols-3 pb-6'>
                <div className='space-y-2'>
                    <p>On Call</p>
                    <Input placeholder="price" />
                </div>
                <div className='space-y-2'>
                    <p>Off Call</p>
                    <Input placeholder="price" />
                </div>
                <div className='space-y-2'>
                    <p>Overnight</p>
                    <Input placeholder="price" />
                </div>
            </div>
        </div>
    );
};

export default Step3;
