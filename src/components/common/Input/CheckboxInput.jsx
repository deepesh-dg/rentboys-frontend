import React from "react";
import { CheckIcon } from "@/components/icons/outline";
import Icons from "@/components/icons/Component";

const CheckboxInput = ({ checked, onChange, className, label, ...props }) => {
    return (
        <div class="p-6">
            <input
                type="checkbox"
                id="terms_conditions"
                class="peer hidden"
                defaultChecked
            />
            <label
                for="terms_conditions"
                class="flex cursor-pointer items-center"
            >
                <div class="flex h-4 w-4 items-center justify-center rounded-sm border border-red-50 peer-checked:bg-red-50">
                    <Icons
                        src={CheckIcon}
                        className="hiddn relative z-50 w-3 text-red-50 peer-checked:block"
                    />
                </div>
                <span class="ml-2 hidden peer-checked:block">
                    I agree to the terms and conditions
                </span>
            </label>
        </div>
    );
};

export default CheckboxInput;
