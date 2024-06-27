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
            <label for="terms_conditions" class="flex items-center cursor-pointer">
                <div class="w-4 h-4 border border-red-50 rounded-sm peer-checked:bg-red-50 flex items-center justify-center">
                    <Icons src={CheckIcon} className="w-3 text-red-50 peer-checked:block hiddn relative z-50" />
                </div>
                <span class="ml-2 peer-checked:block hidden">I agree to the terms and conditions</span>
            </label>
        </div>

    );
};

export default CheckboxInput;
