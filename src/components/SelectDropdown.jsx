import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";
import Icons from "./icons/Component";
import { ArrowDownIcon } from "./icons/outline";

const SelectDropDown = ({ options = [], className, firstDisabledOption }) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    return (
        <div className={`relative w-full ${className}`}>
            <Listbox
                value={selectedOption}
                onChange={value => {
                    const selected = options.find(
                        option => option.value === value
                    );
                    setSelectedOption(selected);
                }}
            >
                <ListboxButton className="relative z-2 w-full border border-gray-50 bg-black p-4 placeholder:opacity-80 focus:ring-1 focus:ring-red-50">
                    <div className="flex w-full items-center justify-between">
                        <div className="shrink-0 overflow-hidden">
                            {selectedOption?.label || firstDisabledOption}
                        </div>
                        <Icons
                            icon={ArrowDownIcon}
                            className="w-6 text-red-50"
                        />
                    </div>
                </ListboxButton>
                <ListboxOptions className="absolute z-50 mt-[64px] max-h-96 w-full shrink-0 overflow-y-auto whitespace-nowrap bg-black px-4">
                    {firstDisabledOption && (
                        <ListboxOption disabled>
                            <div className="px-1 text-gray-200">
                                {firstDisabledOption}
                            </div>
                        </ListboxOption>
                    )}
                    {options.map(option => (
                        <ListboxOption
                            key={option.id}
                            value={option.value}
                            className="p-2 hover:bg-gray-50 focus:bg-gray-50"
                        >
                            {option?.label}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </Listbox>
        </div>
    );
};

export default SelectDropDown;
