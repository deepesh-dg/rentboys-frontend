import React, { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/common/Input/HeadlessInput";
import {
    PasswordIcon,
    EyeClosedIcon,
    EyeOpenIcon,
} from "@/components/icons/outline";
import Form from "@/components/auth-screens/Form";
import Icons from "@/components/icons/Component";
import { useForm, useGlobalLoader } from "@/hooks";
import api from "@/services";

const ChangePassword = ({ close }) => {
    const [viewOldPwd, setViewOldPwd] = useState(false);
    const [viewPwd, setViewPwd] = useState(false);
    const [viewConfirmPwd, setViewConfirmPwd] = useState(false);
    const { formData, formIds, setFormData, handleSubmit, formErrors, loader } =
        useForm({
            old_password: "",
            new_password: "",
            confirm_password: "",
        });

    useGlobalLoader(loader);

    const submit = handleSubmit(
        async data => {
            const response = await api.auth.changePassword(
                data.old_password,
                data.new_password,
                data.confirm_password
            );

            if (!response.status) throw response;

            close();
        },
        data => {
            const errors = {};

            if (!data.old_password)
                errors.old_password = ["Old password is required"];
            if (!data.new_password)
                errors.new_password = ["New password is required"];
            if (data.confirm_password !== data.new_password)
                errors.confirm_password = ["Passwords do not match"];

            if (Object.keys(errors).length) throw { errors };
        }
    );

    return (
        <Form
            onSubmit={submit}
            title="Reset Password"
            maxWidth="xl"
            error={formErrors.form}
        >
            <div className="relative w-full">
                <Input
                    icon={PasswordIcon}
                    type={viewOldPwd ? "text" : "password"}
                    placeholder="New Password"
                    id={formIds.password}
                    error={formErrors.old_password}
                    value={formData.old_password}
                    onChange={e =>
                        setFormData(prev => {
                            prev.old_password = e.target.value;
                        })
                    }
                />
                <button
                    type="button"
                    className="absolute right-4 top-7 translate-y-[-50%]"
                    onClick={() => setViewOldPwd(prev => !prev)}
                >
                    <Icons
                        src={viewOldPwd ? EyeOpenIcon : EyeClosedIcon}
                        className="w-5"
                    />
                </button>
            </div>
            <div className="relative w-full">
                <Input
                    icon={PasswordIcon}
                    type={viewPwd ? "text" : "password"}
                    placeholder="New Password"
                    id={formIds.new_password}
                    error={formErrors.new_password}
                    value={formData.new_password}
                    onChange={e =>
                        setFormData(prev => {
                            prev.new_password = e.target.value;
                        })
                    }
                />
                <button
                    type="button"
                    className="absolute right-4 top-7 translate-y-[-50%]"
                    onClick={() => setViewPwd(prev => !prev)}
                >
                    <Icons
                        src={viewPwd ? EyeOpenIcon : EyeClosedIcon}
                        className="w-5"
                    />
                </button>
            </div>
            <div className="relative w-full">
                <Input
                    icon={PasswordIcon}
                    type={viewConfirmPwd ? "text" : "password"}
                    placeholder="Confirm Password"
                    id={formIds.confirm_password}
                    error={formErrors.confirm_password}
                    value={formData.confirm_password}
                    onChange={e =>
                        setFormData(prev => {
                            prev.confirm_password = e.target.value;
                        })
                    }
                />
                <button
                    type="button"
                    className="absolute right-4 top-7 translate-y-[-50%]"
                    onClick={() => setViewConfirmPwd(prev => !prev)}
                >
                    <Icons
                        src={viewConfirmPwd ? EyeOpenIcon : EyeClosedIcon}
                        className="w-5"
                    />
                </button>
            </div>
            <Button
                children="Submit"
                type="submit"
                size="md"
                theme="red"
                className="w-full rounded-xl text-xl font-bold uppercase"
            />
        </Form>
    );
};

export default ChangePassword;
