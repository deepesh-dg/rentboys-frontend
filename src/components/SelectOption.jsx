import { Select } from '@headlessui/react'
import { classNames } from "@/lib";

const SelectOption = ({
    options,
    className,
    firstDisabledOption,
    ...props
}) => {
    return (
        <Select name="status" aria-label="Project status"
            className={classNames(
                "rb-select-input border border-solid border-gray-300 bg-black pl-4 pr-8 outline-none placeholder:opacity-80 focus:ring-1 focus:ring-red-50",
                className
            )}
            {...props}
        >
            {firstDisabledOption && (
                <option value="" disabled>
                    {firstDisabledOption}
                </option>
            )}
            {options?.map(option => (
                <option key={option.id} value={option.value}>
                    {option.label}
                </option>
            ))}
        </Select>
    )
}
export default SelectOption;
