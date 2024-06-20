import HTTP from "./HTTP";
import store from "@/store";

export default class HTTPWithAuth extends HTTP {
    constructor(baseURL) {
        super(baseURL);
        const { token } = store.getState().auth;

        if (token) {
            this._http.interceptors.request.use(request => {
                request.headers.Authorization = `Bearer ${token}`;

                return request;
            });
        }
    }
}
