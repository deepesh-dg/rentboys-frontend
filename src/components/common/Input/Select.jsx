import { classNames } from "@/lib";
import React from "react";

/**
 *
 * @param {{
 * options: {id: string, value: string, label: string}[],
 * className?: string,
 * firstDisabledOption?: string,
 * [x: string]: any,
 * } & React.SelectHTMLAttributes<HTMLSelectElement>} props
 * @returns
 */
export default function Select({
    options,
    className,
    firstDisabledOption,
    ...props
}) {
    return (
        <select
            className={classNames(
                "rb-select-input border border-solid border-white/30 bg-black pl-4 pr-8 outline-none",
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
        </select>
    );
}
