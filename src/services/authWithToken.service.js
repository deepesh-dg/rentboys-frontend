import { HTTPWithAuth } from "@/lib";

export default class AuthWithTokenService extends HTTPWithAuth {
    getProfile() {
        return this.get("/profile");
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
