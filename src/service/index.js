import Axios from "axios";
const defaultAxios = Axios.create({
  headers: {
    Range: "0-9",
    "Content-Type": "application/json",
    Prefer: "return=representation",
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InludHlvem54a3dhcXlsc3ZhZmh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjUzOTk1NDMsImV4cCI6MTk4MDk3NTU0M30.HLW-B4MYLvFDxZDAO97jIP3luaW0szfcVK-Cy3XWi8M",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InludHlvem54a3dhcXlsc3ZhZmh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjUzOTk1NDMsImV4cCI6MTk4MDk3NTU0M30.HLW-B4MYLvFDxZDAO97jIP3luaW0szfcVK-Cy3XWi8M",
  },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export function apiClient(method, url, options = {}) {
  const { data = {}, headers = {}, params = {}, ...rest } = options;
  return defaultAxios({
    url,
    data,
    method,
    params,
    headers,
    ...rest,
  });
}

export const apis = {
  get: (url, args) => apiClient("get", url, args),
  post: (url, args) => apiClient("post", url, args),
  put: (url, args) => apiClient("put", url, args),
  patch: (url, args) => apiClient("patch", url, args),
  delete: (url, args) => apiClient("delete", url, args),
};
