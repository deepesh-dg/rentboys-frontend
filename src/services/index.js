import AuthService from "./auth.service";
import AuthWithTokenService from "./authWithToken.service";
import CommonService from "./common.service";

const api = {
    auth: new AuthService(),
    authWithToken: new AuthWithTokenService(),
    common: new CommonService(),
};

export default api;
