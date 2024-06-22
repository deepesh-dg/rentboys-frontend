import HTTP from "./HTTP";
import store from "@/state";

export default class HTTPWithAuth extends HTTP {
    constructor(baseURL) {
        super(baseURL);
        if (this.token) {
            this._http.interceptors.request.use(request => {
                request.headers.Authorization = `Bearer ${this.token}`;

                return request;
            });
        }
    }

    get token() {
        const { token } = store.getState().auth;

        return token;
    }
}
