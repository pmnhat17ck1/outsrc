import { AxiosResponse } from "axios";
import instance, { ApiResponse } from "@/libs/axios";

export const axiosGet = async (
  url: string,
  queryParams?: Record<string, string>,
  customHeaders?: Record<string, string>
): Promise<ApiResponse> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response: AxiosResponse = await instance.get(url, {
      params: queryParams,
      headers: customHeaders,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const axiosPut = async (
  url: string,
  data?: any,
  queryParams?: Record<string, string>,
  customHeaders?: Record<string, string>
): Promise<ApiResponse> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response: AxiosResponse = await instance.put(url, data, {
      params: queryParams,
      headers: customHeaders,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const axiosPatch = async (
  url: string,
  data?: any,
  queryParams?: Record<string, string>,
  customHeaders?: Record<string, string>
): Promise<ApiResponse> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response: AxiosResponse = await instance.patch(url, data, {
      params: queryParams,
      headers: customHeaders,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const axiosPost = async (
  url: string,
  data?: any,
  queryParams?: Record<string, string>,
  customHeaders?: Record<string, string>
): Promise<ApiResponse> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response: AxiosResponse = await instance.post(url, data, {
      params: queryParams,
      headers: customHeaders,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const axiosDelete = async (
  url: string,
  queryParams?: Record<string, string>,
  customHeaders?: Record<string, string>
): Promise<ApiResponse> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response: AxiosResponse = await instance.delete(url, {
      params: queryParams,
      headers: customHeaders,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
