import { HTTP } from "@/lib";

export default class AuthService extends HTTP {
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
     * @param {string} username
     * @param {string} password
     */
    register(username, password) {
        return this.post("/register", { username, password });
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
     * @param {string} phone_code
     * @param {string | number} phone_number
     */
    phoneVerifyOtpSend(phone_code, phone_number) {
        return this.post("/phone-verify/otp-send", {
            phone_code,
            phone_number,
        });
    }

    /**
     *
     * @param {string} phone_code
     * @param {string | number} phone_number
     */
    phoneVerifyOtpResend(phone_code, phone_number) {
        return this.post("/phone-verify/otp-resend", {
            phone_code,
            phone_number,
        });
    }

    /**
     *
     * @param {string} phone_code
     * @param {string | number} phone_number
     * @param {string} otp
     */
    phoneVerifyOtpMatch(phone_code, phone_number, otp) {
        return this.post("/phone-verify/otp-match", {
            phone_code,
            phone_number,
            otp,
        });
    }

    /**
     *
     * @param {string} email
     */
    emailVerifyOtpSend(email) {
        return this.post("/email-verify/otp-send", { email });
    }

    /**
     *
     * @param {string} email
     */
    emailVerifyOtpResend(email) {
        return this.post("/email-verify/otp-resend", { email });
    }

    /**
     *
     * @param {string} email
     * @param {string | number} otp
     */
    emailVerifyOtpMatch(email, otp) {
        return this.post("/email-verify/otp-match", { email, otp });
    }
}
