import { HTTPWithAuth } from "@/lib";

export default class AuthService extends HTTPWithAuth {
    /**
     *
     * @param {string} username
     * @param {string} password
     */
    login(username, password) {
        return this.post("/login", { username, password });
    }

    /**
     *
     * @param {string} email
     */
    forgotPassword(email) {
        return this.post("/forgot-password/otp-send", { email });
    }

    /**
     *
     * @param {string} email
     */
    forgotPasswordOtpResend(email) {
        return this.post("/forgot-password/otp-resend", { email });
    }

    /**
     *
     * @param {string} email
     * @param {string | number} otp
     */
    forgotPasswordOtpMatch(email, otp) {
        return this.post("/forgot-password/otp-match", { email, otp });
    }

    /**
     *
     * @param {string} token
     * @param {string} password
     * @param {string} confirm_password
     */
    resetPassword(token, password, confirm_password) {
        return this.post(`/reset-password/${token}`, {
            password,
            confirm_password,
        });
    }

    /**
     *
     * @param {{email: string; username: string; password: string; terms_conditions: "0" | "1"}} data
     */
    signup(data) {
        return this.post("/signup", data);
    }

    emailVerifyOtpSend(data) {
        return this.post("/email-verify/otp-send", data);
    }

    emailVerifyOtpResend(data) {
        return this.post("/email-verify/otp-resend", data);
    }

    emailVerifyOtpMatch(data) {
        return this.post("/email-verify/otp-match", data);
    }

    selectUserType(data) {
        return this.post("/signup/user-type", data);
    }

    selectLocation(data) {
        return this.post("/signup/location", data);
    }

    phoneVerifyOtpSend(data) {
        return this.post("/phone-verify/otp-send", data);
    }

    phoneVerifyOtpResend(data) {
        return this.post("/phone-verify/otp-resend", data);
    }

    phoneVerifyOtpMatch(data) {
        return this.post("/phone-verify/otp-match", data);
    }

    changePassword(old_password, new_password, confirm_password) {
        return this.post("/change-password", {
            old_password,
            new_password,
            confirm_password,
        });
    }

    deleteAccount() {
        return this.get("/delete-account");
    }
}
