import React from "react";
import {
    InputOTP as OTPInput,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";

export default function InputOTP({ ...props }) {
    return (
        <OTPInput maxLength={4} {...props}>
            <InputOTPGroup>
                <InputOTPSlot index={0} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
                <InputOTPSlot index={1} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
                <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
                <InputOTPSlot index={3} />
            </InputOTPGroup>
        </OTPInput>
    );
}
