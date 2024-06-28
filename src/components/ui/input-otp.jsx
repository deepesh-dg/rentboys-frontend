import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { classNames } from "@/lib";

const InputOTP = React.forwardRef(
    ({ className, containerClassName, ...props }, ref) => (
        <OTPInput
            ref={ref}
            containerClassName={classNames(
                "flex items-center gap-2 has-[:disabled]:opacity-50 w-full justify-between",
                containerClassName
            )}
            className={classNames("disabled:cursor-not-allowed", className)}
            {...props}
        />
    )
);

const InputOTPGroup = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={classNames("relative z-1 flex items-center", className)}
        {...props}
    />
));

const InputOTPSlot = React.forwardRef(({ index, className, ...props }, ref) => {
    const inputOTPContext = React.useContext(OTPInputContext);
    const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

    return (
        <div
            ref={ref}
            className={classNames(
                "border-input relative flex h-16 w-16 items-center justify-center border-y border-r border-solid text-sm transition-all first:border-l",
                isActive ? "border-red-50" : "border-gray-300",
                className
            )}
            {...props}
        >
            {char}
            {hasFakeCaret && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="bg-foreground h-4 w-px animate-caret-blink duration-1000" />
                </div>
            )}
        </div>
    );
});

const InputOTPSeparator = React.forwardRef(({ ...props }, ref) => (
    <div ref={ref} role="separator" {...props}></div>
));

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
