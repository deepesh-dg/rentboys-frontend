import axios from "axios";

export default class HTTP {
    /** @type {import('axios').AxiosInstance} */
    _http;

    /**
     * @param {string} baseURL
     */
    constructor(baseURL = import.meta.env.VITE_API_URL) {
        this.baseURL = baseURL;
        this._http = axios.create({
            baseURL: this.baseURL,
        });
    }

    /**
     * @template T
     * @param {string} path
     * @param {import('axios').AxiosRequestConfig} config
     */
    async get(path, config) {
        /**
         * @type {{
         *     statusCode: number;
         *     status: boolean;
         *     data: T | null;
         *     message: string;
         *     body: string;
         *     errors: { [key: string]: string[] } | null;
         * }}
         */
        const result = {
            statusCode: 500,
            status: false,
            data: null,
            message: "Internal Server Error",
            body: "",
            errors: null,
        };

        try {
            const response = await this._http.get(path, config);

            if (!response.data.status) throw response.data;

            result.statusCode = response.status;
            result.status = true;
            result.data = response.data.data;
            result.message = response.data.message;
            result.body = response.data.body;
        } catch (error) {
            result.statusCode = error.response?.status ?? 500;
            result.status = false;
            result.data = null;
            result.message = error.message;
            result.body = error.response?.data ?? "";
            result.errors = error.response?.data?.errors ?? null;
        }

        return result;
    }

    /**
     * @template D
     * @template T
     * @param {string} path
     * @param {D} data
     * @param {import('axios').AxiosRequestConfig} config
     */
    async post(path, data, config) {
        /**
         * @type {{
         *     statusCode: number;
         *     status: boolean;
         *     data: T | null;
         *     message: string;
         *     body: string;
         *     errors: { [key: string]: string[] } | null;
         * }}
         */
        const result = {
            statusCode: 500,
            status: false,
            data: null,
            message: "Internal Server Error",
            body: "",
            errors: null,
        };

        try {
            const response = await this._http.post(path, data, config);

            if (!response.data.status) throw response.data;

            result.statusCode = response.status;
            result.status = true;
            result.data = response.data.data;
            result.message = response.data.message;
            result.body = response.data.body;
        } catch (error) {
            result.statusCode = error.response?.status ?? 500;
            result.status = false;
            result.data = null;
            result.message = error.message;
            result.body = error.response?.data ?? "";
            result.errors = error.response?.data?.errors ?? null;
        }

        return result;
    }

    /**
     * @template D
     * @template T
     * @param {string} path
     * @param {D} data
     * @param {import('axios').AxiosRequestConfig} config
     */
    async put(path, data, config) {
        /**
         * @type {{
         *     statusCode: number;
         *     status: boolean;
         *     data: T | null;
         *     message: string;
         *     body: string;
         *     errors: { [key: string]: string[] } | null;
         * }}
         */
        const result = {
            statusCode: 500,
            status: false,
            data: null,
            message: "Internal Server Error",
            body: "",
            errors: null,
        };

        try {
            const response = await this._http.put(path, data, config);

            if (!response.data.status) throw response.data;

            result.statusCode = response.status;
            result.status = true;
            result.data = response.data.data;
            result.message = response.data.message;
            result.body = response.data.body;
        } catch (error) {
            result.statusCode = error.response?.status ?? 500;
            result.status = false;
            result.data = null;
            result.message = error.message;
            result.body = error.response?.data ?? "";
            result.errors = error.response?.data?.errors ?? null;
        }

        return result;
    }

    /**
     * @template T
     * @param {string} path
     * @param {import('axios').AxiosRequestConfig} config
     */
    async delete(path, config) {
        /**
         * @type {{
         *     statusCode: number;
         *     status: boolean;
         *     data: T | null;
         *     message: string;
         *     body: string;
         *     errors: { [key: string]: string[] } | null;
         * }}
         */
        const result = {
            statusCode: 500,
            status: false,
            data: null,
            message: "Internal Server Error",
            body: "",
            errors: null,
        };

        try {
            const response = await this._http.delete(path, config);

            if (!response.data.status) throw response.data;

            result.statusCode = response.status;
            result.status = true;
            result.data = response.data.data;
            result.message = response.data.message;
            result.body = response.data.body;
        } catch (error) {
            result.statusCode = error.response?.status ?? 500;
            result.status = false;
            result.data = null;
            result.message = error.message;
            result.body = error.response?.data ?? "";
            result.errors = error.response?.data?.errors ?? null;
        }

        return result;
    }
}
