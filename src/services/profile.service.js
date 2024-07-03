import { HTTPWithAuth } from "@/lib";

export default class ProfileService extends HTTPWithAuth {
    /**
     * @param {File} file
     */
    uploadProfilePhoto(file) {
        const formdata = new FormData();

        formdata.append("file", file);

        return this.post("/profile-photo", file);
    }

    profileSetup(data) {
        return this.post("/advertiser/profile-setup", data);
    }

    /**
     *
     * @param {string} id_proof_path
     */
    updateIdProof(id_proof_path) {
        return this.post("/update/id-proof", { id_proof_path });
    }
}
