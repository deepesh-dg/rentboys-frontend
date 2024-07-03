import HTTP from "./HTTP";

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
        const token = JSON.parse(
            JSON.parse(window.localStorage.getItem("persist:auth") || null)
                ?.token || null
        );
        return token;
    }
}
