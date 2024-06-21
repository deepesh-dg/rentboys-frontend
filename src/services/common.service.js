import { HTTP } from "@/lib";

export default class CommonService extends HTTP {
    getTermsAndConditions() {
        return this.get("/policies/terms-conditions");
    }

    getPrivacyPolicy() {
        return this.get("/policies/privecy-policy");
    }

    getCookiesPolicy() {
        return this.get("/policies/cookies-policy");
    }

    getDMCANotes() {
        return this.get("/policies/dmca-notes");
    }

    getLegal() {
        return this.get("/policies/legal");
    }

    getIdProofPageContent() {
        return this.get("/page-content/id-proof");
    }

    getCreateProfilePageContent() {
        return this.get("/page-content/create-profile");
    }

    getMasters() {
        return this.get("/masters");
    }
}
