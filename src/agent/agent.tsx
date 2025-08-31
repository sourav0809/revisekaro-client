import axios from "axios";
import type { AxiosInstance } from "axios";
import Cookies from "js-cookie";
import { envConfig } from "@/config/envConfig";
import { cookieKeys } from "@/constant/keyConstants";

const api: AxiosInstance = axios.create({
  baseURL: envConfig.API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = Cookies.get(cookieKeys.AUTH_TOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
