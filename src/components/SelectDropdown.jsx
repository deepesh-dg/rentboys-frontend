import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { useState } from 'react'
import Icons from './icons/Component'
import { ArrowDownIcon } from './icons/outline'

const SelectDropDown = ({
    options = [],
    className,
    firstDisabledOption,
}) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    return (
        <div className={`relative w-full ${className}`}>
            <Listbox value={selectedOption} onChange={(value) => {
                const selected = options.find(option => option.value === value);
                setSelectedOption(selected);
            }}>
                <ListboxButton className="border bg-black border-gray-50 w-full p-4 placeholder:opacity-80 focus:ring-1 focus:ring-red-50 relative z-2">
                    <div className="flex justify-between items-center w-full">
                        <div className='shrink-0 overflow-hidden'>
                            {selectedOption?.label || firstDisabledOption}
                        </div>
                        <Icons icon={ArrowDownIcon} className='w-6 text-red-50' />
                    </div>
                </ListboxButton>
                <ListboxOptions className="absolute w-full px-4 mt-[64px] bg-black z-50 overflow-y-auto max-h-96 shrink-0 whitespace-nowrap">
                    {firstDisabledOption && (
                        <ListboxOption disabled>
                            <div className='px-1 text-gray-200'>{firstDisabledOption}</div>
                        </ListboxOption>
                    )}
                    {options.map(option => (
                        <ListboxOption key={option.id} value={option.value} className="focus:bg-gray-50 p-2 hover:bg-gray-50 ">
                            {option?.label}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </Listbox>
        </div>
    )
}

export default SelectDropDown;
