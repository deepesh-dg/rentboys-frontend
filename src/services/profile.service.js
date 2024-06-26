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
}
