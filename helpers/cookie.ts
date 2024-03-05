import Cookies from "js-cookie";
import { expiredTime } from "@/utils";
import { COOKIE_REFRESH_TOKEN, COOKIE_TOKEN } from "@/contants";
import CryptoJS from "crypto-js";

export const setCookie = (
    name: string,
    value: string,
    expires: string | number = "7d"
) => {
    Cookies.set(name, value, { expires: expiredTime(expires), path: "/" });
};

export const getCookie = (name: string) => {
    return Cookies.get(name);
};

export const setCurrentToken = async (token: string, isEncrypt = false) => {
    const encodedToken = isEncrypt ? encodeURIComponent(token) : token;
    const encryptedToken = isEncrypt
        ? CryptoJS.AES.encrypt(
              encodedToken,
              process.env.NEXT_PUBLIC_TOKEN_CLIENT || "secret key"
          ).toString()
        : encodedToken;
    await Cookies.set(COOKIE_TOKEN, encryptedToken, {
        expires: expiredTime("1h"),
    });
};

export const getCurrentToken = async (name: string, isEncrypt = false) => {
    const encryptedData = await getCookie(name);
    return isEncrypt && encryptedData
        ? decodeURIComponent(encryptedData)
        : encryptedData;
};

export const getRefreshToken = async (name: string, isEncrypt = false) => {
    const encryptedData = await getCookie(name);
    return isEncrypt && encryptedData
        ? decodeURIComponent(encryptedData)
        : encryptedData;
};

export const setRefreshToken = async (
    refreshToken: string,
    isEncrypt = false
) => {
    const encodedRefreshToken = isEncrypt
        ? encodeURIComponent(refreshToken)
        : refreshToken;
    const encryptedRefreshToken = isEncrypt
        ? CryptoJS.AES.encrypt(
              encodedRefreshToken,
              process.env.NEXT_PUBLIC_TOKEN_CLIENT || "secret key"
          ).toString()
        : encodedRefreshToken;
    await Cookies.set(COOKIE_REFRESH_TOKEN, encryptedRefreshToken, {
        expires: expiredTime("30d"),
    });
};

export const clearToken = async () => {
    Cookies.remove(COOKIE_TOKEN);
    localStorage.removeItem("appState");
};

export const clearRefreshToken = async () => {
    Cookies.remove(COOKIE_REFRESH_TOKEN);
    localStorage.removeItem("appState");
};

export const removeCookie = (name: string) => {
    Cookies.remove(name, { path: "/" });
};

export const decryptCookieValue = (encryptedValue?: string) => {
    return (
        encryptedValue &&
        CryptoJS.AES.decrypt(
            encryptedValue,
            process.env.NEXT_PUBLIC_TOKEN_CLIENT || "secret key"
        ).toString()
    );
};
