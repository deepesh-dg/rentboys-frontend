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
    USER_PROFILE: "user-profile",
});

export const acceptedImageTypes = Object.freeze([
    "image/jpeg",
    "image/jpg",
    "image/png",
]);

export const acceptedFileTypes = Object.freeze([
    ...acceptedImageTypes,
    "application/pdf",
]);

export const ReactQueryKeys = Object.freeze({
    CREATE_PROFILE_PAGE_CONTENT: "create-profile-page-content",
    TERMS_OF_SERVICE_PAGE_CONTENT: "terms-of-service-page-content",
    LEGAL_PAGE_CONTENT: "legal-page-content",
    PRIVACY_POLICY_PAGE_CONTENT: "privacy-policy-page-content",
    COOKIE_POLICY_CONTENT: "cookie-policy-page-content",
    DMCA_NOTICE_CONTENT: "dmca-notice-page-content",



    UPLOAD_ID_PAGE_CONTENT: "upload-id-page-content",
    MASTERS: "masters-data",
});
