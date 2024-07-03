import { AccountStatus, UserTypeId } from "@/constants";
import React from "react";
import Form from "./auth-screens/Form";
import { useAuth, useMetadata } from "@/state";
import Icons from "./icons/Component";
import { ClosecircleIcon } from "./icons/outline";
import { Link } from "react-router-dom";

const UploadIdReminder = () => {
    const { user } = useAuth();
    const { isUploadIsReminderClosed, openUploadIdModal, closeUploadIdModal } = useMetadata();

    if (
        !user ||
        user.user_role_id !== UserTypeId.ADVERTISER ||
        user.isApproved === AccountStatus.APPROVED ||
        user.step_one !== 0
        // || isUploadIsReminderClosed
    )
        return null;

    return (
        <div className="w-full max-w-3xl mx-auto">
            <button onClick={openUploadIdModal} className="border text-white px-4 py-2 rounded-md">Open Model</button>
            {isUploadIsReminderClosed && (
                <Form
                    maxWidth="3xl"
                    className="relative"
                >
                    <Icons icon={ClosecircleIcon} className="w-6 absolute top-4 right-4 cursor-pointer" onClick={closeUploadIdModal} />
                    <h2 className="text-2xl text-center font-bold text-red-50">Complete Your Profile for Better Visibility!</h2>
                    <p className="text-center">
                        We noticed you left the 'Upload ID'  . Completing all fields will help you show up in search results and get the most out of our website.
                    </p>
                    <Link to="">
                        <span className="text-red-50 font-sm underline">
                            Click here to Complete
                        </span>
                    </Link>
                </Form>
            )}
        </div>
    )
}
export default UploadIdReminder
