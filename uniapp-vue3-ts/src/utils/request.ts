/**
 * 用于封装 axios 请求, 添加拦截器等
 */
import axios, { AxiosInstance } from "axios";

const service: AxiosInstance = axios.create({
  baseURL: "http://192.168.2.9",
  withCredentials: true,
  proxy: {
    protocol: "http",
    host: "192.168.2.9",
    port: 80,
  },
});

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response.data;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export { service };
