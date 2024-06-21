import { HTTP } from "@/lib";

export default class CommonService extends HTTP {
    getTermsAndConditions() {
        return this.get("/policies/terms-conditions");
    }

    getPrivacyPolicy() {
        return this.get("/policies/privacy-policy");
    }

    getCookiePolicy() {
        return this.get("/policies/cookie-policy");
    }

    getDMCANotice() {
        return this.get("/policies/dmca-notice");
    }

    getLegal() {
        return this.get("/policies/legal");
    }

    getMasters() {
        return this.get("/masters");
    }
}
