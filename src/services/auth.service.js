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
}
