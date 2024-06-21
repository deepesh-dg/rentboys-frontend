import AuthService from "./auth.service";
import CommonService from "./common.service";

const api = {
    auth: new AuthService(),
    common: new CommonService(),
};

export default api;
