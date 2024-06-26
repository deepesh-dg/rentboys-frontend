import AuthService from "./auth.service";
import CommonService from "./common.service";
import ProfileService from "./profile.service";

const api = {
    auth: new AuthService(),
    common: new CommonService(),
    profile: new ProfileService(),
};

export default api;
