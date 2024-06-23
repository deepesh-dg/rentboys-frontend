import { HTTP } from "@/lib";
import axios from "axios";
import { FileUploadTypes } from "@/constants";

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

    getDMCANotice() {
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

    /**
     *
     * @param {string} query
     */
    async getGeoLocations(query) {
        try {
            const response = await axios.get(
                "https://nominatim.openstreetmap.org/search",
                {
                    params: {
                        q: query,
                        format: "json",
                        addressdetails: 1,
                    },
                }
            );

            return {
                status: true,
                data: response.data,
                statusCode: response.status,
            };
        } catch (error) {
            return {
                status: false,
                message: error.message,
                statusCode: error.response?.status,
            };
        }
    }

    /**
     *
     * @param {typeof FileUploadTypes[keyof typeof FileUploadTypes]} type
     * @param {File} file
     */
    uploadFile(type, file) {
        const formData = new FormData();

        formData.append("type", type);
        formData.append("file", file);

        return this.post(`/file-upload`, formData);
    }
}
