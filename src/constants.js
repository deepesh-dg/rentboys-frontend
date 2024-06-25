export const SignupScreenSteps = Object.freeze({
    SIGNUP: "SIGNUP",
    VERIFY_EMAIL: "VERIFY_EMAIL",
    CHOOSE_USER_TYPE: "CHOOSE_USER_TYPE",
    SELECT_LOCATION: "SELECT_LOCATION",

    // ONLY FOR ADVERTISER TYPE USER
    UPLOAD_ID: "UPLOAD_ID",
    PHONE_NUMBER: "PHONE_NUMBER",
    VERIFY_PHONE: "VERIFY_PHONE",
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
