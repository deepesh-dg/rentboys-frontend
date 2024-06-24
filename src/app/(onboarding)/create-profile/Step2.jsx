import React, { useState } from 'react';
import Textarea from '@/components/TextArea';
import MuiDropdown from '@/components/MuiDropdown';
// import CustomDropDown from "@/components/CustomDropdown"
import Input from '@/components/common/Input/Input';

const Step2 = () => {
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const options = [
        { id: 1, value: "option1", label: "Option 1" },
        { id: 2, value: "option2", label: "Option 2" },
        { id: 3, value: "option3", label: "Option 3" },
    ];

    // const handleDropdownChange = (event) => {
    //     setSelectedValue(event.target.value);
    // };


    const option = ["Option 1", "Option 2", "Option 3", "Option 4"];

    return (
        <div className="container flex-grow py-6 text-white">
            <Textarea
                rows={4}
                placeholder="Description*"
                className="p-4 "
            />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 mt-6'>
                <MuiDropdown
                    options={options}
                    value={selectedValue}
                    onChange={handleChange}
                    label="Age"
                    className="text-white bg-black outline-none border-none"
                />
                <Input type="number" placeholder="Height" />
                <Input type="number" placeholder="Weight" />
                <Input type="number" placeholder="Cock Size" />

                <MuiDropdown
                    options={options}
                    value={selectedValue}
                    onChange={handleChange}
                    label="Sexual Orientation"
                    className="text-white bg-black outline-none border-none"
                />
                <MuiDropdown
                    options={options}
                    value={selectedValue}
                    onChange={handleChange}
                    label="Position"
                    className="text-white bg-black outline-none border-none"
                />
                <MuiDropdown
                    options={options}
                    value={selectedValue}
                    onChange={handleChange}
                    label="Foreskin"
                    className="text-white bg-black outline-none border-none"
                />
                <MuiDropdown
                    options={options}
                    value={selectedValue}
                    onChange={handleChange}
                    label="Safe/BB"
                    className="text-white bg-black outline-none border-none"
                />
                <MuiDropdown
                    options={options}
                    value={selectedValue}
                    onChange={handleChange}
                    label="Body Hair"
                    className="text-white bg-black outline-none border-none"
                />
                <MuiDropdown
                    options={options}
                    value={selectedValue}
                    onChange={handleChange}
                    label="Hair Color"
                    className="text-white bg-black outline-none border-none"
                />
                <MuiDropdown
                    options={options}
                    value={selectedValue}
                    onChange={handleChange}
                    label="Eyes Color"
                    className="text-white bg-black outline-none border-none"
                />
                <MuiDropdown
                    options={options}
                    value={selectedValue}
                    onChange={handleChange}
                    label="Style"
                    className="text-white bg-black outline-none border-none"
                />


            </div>

            {/* <CustomDropDown
                    value={selectedValue}
                    options={options}
                    onChange={handleDropdownChange}
                /> */}

        </div>
    );
};

export default Step2;
