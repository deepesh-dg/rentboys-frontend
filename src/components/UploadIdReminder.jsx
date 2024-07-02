import { AccountStatus, UserTypeId } from "@/constants";
import { useAuth } from "@/state";
import React from "react";

export default function UploadIdReminder() {
    const { user } = useAuth();
    // const { isUploadIsReminderClosed } = useMetadata();

    if (
        !user ||
        user.user_role_id !== UserTypeId.ADVERTISER ||
        user.isApproved === AccountStatus.APPROVED ||
        user.step_one !== 0
        // || isUploadIsReminderClosed
    )
        return null;

    return <div>UploadIdReminder</div>;
}
