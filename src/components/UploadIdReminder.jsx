import { AccountStatus, UserTypeId } from "@/constants";
import React from "react";
import Form from "./auth-screens/Form";
import { useAuth, useMetadata } from "@/state";
import Icons from "./icons/Component";
import { ClosecircleIcon } from "./icons/outline";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const allowedRoutes = [
    "/advertiser/profile-setup",
    "/advertiser/choose-plans",
    "/advertiser/membership-plans",
    "/client/choose-plans",
    "/client/membership-plans",
    "/login",
    "/signup",
];

const UploadIdReminder = () => {
    const { user } = useAuth();
    const { isUploadIsReminderClosedByUser, closeUploadIdModel } =
        useMetadata();

    const location = useLocation();
    const isRouteAllowed = allowedRoutes.includes(location.pathname);

    if (
        !user ||
        user.user_role_id !== UserTypeId.ADVERTISER ||
        user.isApproved === AccountStatus.APPROVED ||
        user.step_one !== 0 ||
        isUploadIsReminderClosedByUser ||
        isRouteAllowed
    )
        return null;

    return (
        <div className="fixed inset-0 z-50 flex h-full w-full items-center">
            <div className="mx-auto w-full max-w-3xl">
                <Form maxWidth="3xl" className="relative">
                    <Icons
                        icon={ClosecircleIcon}
                        className="absolute right-4 top-4 w-6 cursor-pointer"
                        onClick={closeUploadIdModel}
                    />
                    <h2 className="text-center text-2xl font-bold text-red-50">
                        Complete Your Profile for Better Visibility!
                    </h2>
                    <p className="text-center">
                        We noticed you left the 'Upload ID' . Completing all
                        fields will help you show up in search results and get
                        the most out of our website.
                    </p>
                    <Button href="/">Click here to Complete</Button>
                </Form>
            </div>
        </div>
    );
};
export default UploadIdReminder;
