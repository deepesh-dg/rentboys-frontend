import React, { useId, useRef } from "react";
import { range } from "@/utils";
import { classNames } from "@/lib";

/**
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props
 * @returns
 */
function OTP({ onChange, ...props }) {
    return (
        <input
            type="number"
            className="inline-block h-16 w-16 border border-white/40 bg-transparent text-center text-2xl outline-none focus:border-red-50"
            onChange={e => {
                const length = e.target.value.length;

                if (onChange) onChange(e.target.value[length - 1] || "");
            }}
            {...props}
        />
    );
}

export default function InputOTP({
    maxLength = 4,
    value = "",
    onChange,
    className,
}) {
    const splittedValue = value.split("");
    const [values, setValues] = React.useState(
        splittedValue.length > maxLength
            ? splittedValue.slice(0, maxLength)
            : [
                  ...splittedValue,
                  ...range(splittedValue.length, maxLength).map(() => ""),
              ]
    );
    const id = useId();

    const handleChange = (index, char) => {
        setValues(prevValues => {
            const newValues = [...prevValues];
            newValues[index] = char;
            if (onChange) onChange(newValues.join(""));

            return newValues;
        });
    };

    return (
        <div className={classNames("flex justify-between gap-4", className)}>
            {range(0, maxLength).map((index, i, array) => {
                const prevInput = document.getElementById(
                    id + "-" + (index - 1)
                );
                const nextInput = document.getElementById(
                    id + "-" + (index + 1)
                );
                return (
                    <OTP
                        id={id + "-" + index}
                        key={index}
                        value={values[index] || ""}
                        className="h-16 w-16 border border-white/40 bg-transparent text-center text-2xl outline-none focus:border-red-50"
                        onChange={value => {
                            handleChange(index, value);
                            if (value) nextInput?.focus();
                            if (
                                !value &&
                                (values.slice(index + 1).every(v => v === "") ||
                                    index === array.length - 1)
                            )
                                prevInput?.focus();
                        }}
                    />
                );
            })}
        </div>
    );
}
