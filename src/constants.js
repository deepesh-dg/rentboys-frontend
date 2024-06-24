export const LoginScreenSteps = Object.freeze({
    LOGIN: "LOGIN",
    FORGOT_PASSWORD: "FORGOT_PASSWORD",
    FORGOT_PASSWORD_OTP: "FORGOT_PASSWORD_OTP",
    RESET_PASSWORD: "RESET_PASSWORD",
});

export const SignupScreenSteps = Object.freeze({
    SIGNUP: "SIGNUP",
    VERIFY_EMAIL: "VERIFY_EMAIL",
    CHOOSE_USER_TYPE: "CHOOSE_USER_TYPE",
    SELECT_LOCATION: "SELECT_LOCATION",

    // ONLY FOR ADVERTISER TYPE USER
    UPLOAD_ID: "UPLOAD_ID",
    PHONE_NUMBER: "PHONE_NUMBER",
    VERIFY_PHONE: "VERIFY_PHONE",
    // UPLOAD_PROFILE_PHOTO: "UPLOAD_PROFILE_PHOTO",
    // CREATE_PROFILE_1: "CREATE_PROFILE_1",
    // CREATE_PROFILE_2: "CREATE_PROFILE_2",

    // // COMMON
    // MEMBERSSIP_PLAN_CTA: "MEMBERSIP_PLAN_CTA",
    // SELECT_MEMBERSIP_PLAN: "SELECT_MEMBERSIP_PLAN",
});

export const UserType = Object.freeze({
    ADVERTISER: "advertiser",
    CLIENT: "client",
});

export const FileUploadTypes = Object.freeze({
    USER_DOC: "user-doc",
});

export const acceptedImageTypes = Object.freeze([
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
]);
