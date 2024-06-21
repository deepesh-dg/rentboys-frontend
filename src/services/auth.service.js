import { HTTP } from "@/lib";

export default class AuthService extends HTTP {
    /**
     *
     * @param {string} username
     * @param {string} password
     * @returns {Promise<>}
     */
    login(username, password) {
        return this.post("/login", { username, password });
    }

    /**
     *
     * @param {string} username
     * @param {string} password
     * @returns {Promise<>}
     */
    register(username, password) {
        return this.post("/register", { username, password });
    }

    /**
     *
     * @param {string} email
     * @returns {Promise<>}
     */
    forgotPassword(email) {
        return this.post("/forgot-password/otp-send", { email });
    }

    /**
     *
     * @param {string} email
     * @returns {Promise<>}
     */
    forgotPasswordOtpResend(email) {
        return this.post("/forgot-password/otp-resend", { email });
    }

    /**
     *
     * @param {string} email
     * @param {string | number} otp
     * @returns {Promise<>}
     */
    forgotPasswordOtpMatch(email, otp) {
        return this.post("/forgot-password/otp-match", { email, otp });
    }

    /**
     *
     * @param {string} token
     * @param {string} password
     * @param {string} confirm_password
     * @returns {Promise<>}
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
     * @returns {Promise<>}
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
     * @returns {Promise<>}
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
     * @returns {Promise<>}
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
     * @returns {Promise<>}
     */
    emailVerifyOtpSend(email) {
        return this.post("/email-verify/otp-send", { email });
    }

    /**
     *
     * @param {string} email
     * @returns {Promise<>}
     */
    emailVerifyOtpResend(email) {
        return this.post("/email-verify/otp-resend", { email });
    }

    /**
     *
     * @param {string} email
     * @param {string | number} otp
     * @returns {Promise<>}
     */
    emailVerifyOtpMatch(email, otp) {
        return this.post("/email-verify/otp-match", { email, otp });
    }
}
