// lib/axios.js

import { COOKIE_TOKEN, COOKIE_REFRESH_TOKEN } from "@/contants";
import { axiosPost } from "@/helpers/api";
import {
    clearRefreshToken,
    clearToken,
    getCurrentToken,
    getRefreshToken,
    setCurrentToken,
} from "@/helpers/cookie";
import axios, { AxiosInstance, AxiosResponse } from "axios";
export interface ApiResponse<T = any> {
    message: string;
    success: boolean;
    data: T | any;
}

const instance: AxiosInstance = axios.create({
    baseURL: "/", // Set your base URL
    headers: {
        "Content-Type": "application/json",
    },
});

interface Error {
    response: { data: { message: string }; statusText: string };
}

instance.interceptors.request.use(async config => {
    const token = await getCurrentToken(COOKIE_TOKEN);
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
});

instance.interceptors.response.use(
    (response: AxiosResponse<ApiResponse<any>>): any => {
        const data = response.data.data || response.data || response;
        let success =
            response.data.success ||
            (200 <= response.status && response.status < 300);
        let message = response.data.message || response.statusText;

        return {
            data: {
                success,
                message,
                data,
            },
        };
    },
    async error => {
        return Promise.reject(error);
    }
);

export default instance;
