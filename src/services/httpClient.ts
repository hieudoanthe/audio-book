import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { API } from "../config/api";
import { STORAGE_KEYS } from "../constants/storage";

// Simple token storage (can be replaced with cookies/secure storage later)
export const tokenStore = {
  get access() {
    if (typeof window === "undefined") return undefined;
    return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN) || undefined;
  },
  set access(token: string | undefined) {
    if (typeof window === "undefined") return;
    if (!token) localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    else localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
  },
  get refresh() {
    if (typeof window === "undefined") return undefined;
    return localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN) || undefined;
  },
  set refresh(token: string | undefined) {
    if (typeof window === "undefined") return;
    if (!token) localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
    else localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, token);
  },
};

// Create axios instance
const instance: AxiosInstance = axios.create({
  baseURL: API.baseURL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

// Request interceptor: attach Authorization header
instance.interceptors.request.use((config) => {
  const token = tokenStore.access;
  if (token) {
    config.headers = config.headers || {};
    (config.headers as Record<string, string>)[
      "Authorization"
    ] = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor: auto refresh on 401 once
let isRefreshing = false;
let pendingQueue: Array<(token?: string) => void> = [];

function processQueue(token?: string) {
  pendingQueue.forEach((cb) => cb(token));
  pendingQueue = [];
}

instance.interceptors.response.use(
  (res) => res,
  async (error: AxiosError) => {
    const original = error.config as
      | (AxiosRequestConfig & { _retry?: boolean })
      | undefined;

    if (error.response?.status === 401 && original && !original._retry) {
      original._retry = true;

      // If already refreshing, queue the request until refresh done
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          pendingQueue.push((newToken?: string) => {
            if (!newToken) return reject(error);
            original.headers = original.headers || {};
            (original.headers as Record<string, string>)[
              "Authorization"
            ] = `Bearer ${newToken}`;
            instance.request(original).then(resolve).catch(reject);
          });
        });
      }

      isRefreshing = true;
      try {
        const refreshToken = tokenStore.refresh;
        if (!refreshToken) throw error; // no refresh token -> fail
        const resp = await axios.post(
          `${API.baseURL}${API.auth.refresh}`,
          { refreshToken },
          { headers: { "Content-Type": "application/json" } }
        );
        const { accessToken, refreshToken: newRefresh } = resp.data as {
          accessToken: string;
          refreshToken?: string;
        };
        tokenStore.access = accessToken;
        if (newRefresh) tokenStore.refresh = newRefresh;

        // retry original + queued
        original.headers = original.headers || {};
        (original.headers as Record<string, string>)[
          "Authorization"
        ] = `Bearer ${accessToken}`;
        processQueue(accessToken);
        return instance.request(original);
      } catch (e) {
        tokenStore.access = undefined;
        tokenStore.refresh = undefined;
        processQueue(undefined);
        return Promise.reject(e);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

// Simple helpers
export const http = {
  get: <T = unknown>(url: string, config?: AxiosRequestConfig) =>
    instance.get<T>(url, config).then((r) => r.data),
  post: <T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ) => instance.post<T>(url, data, config).then((r) => r.data),
  put: <T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ) => instance.put<T>(url, data, config).then((r) => r.data),
  patch: <T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ) => instance.patch<T>(url, data, config).then((r) => r.data),
  delete: <T = unknown>(url: string, config?: AxiosRequestConfig) =>
    instance.delete<T>(url, config).then((r) => r.data),
  instance,
};
