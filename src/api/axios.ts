import axios, { InternalAxiosRequestConfig } from "axios";
import { baseUrl } from "./config";

const instance = axios.create({
  baseURL: baseUrl
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>) => {
    // const accessToken = JSON.parse(localStorage.getItem("userInfo"))?.token;
    // if (accessToken) {
    //   config.headers.Authorization = `Bearer ${accessToken}`;
    // }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
