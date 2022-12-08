import axios from "axios";

export const apiCall = {
  // todo: use axios interceptors to handle requests
  baseUrl: import.meta.env.VITE_APP_API_URL || "http://localhost:3000",
  get: async (endpoint: string) => {
    const response = await axios.get(`${apiCall.baseUrl}${endpoint}`);
    return response;
  },
  post: async (endpoint: string, data?: Record<string, string>) => {
    const response = await axios.post(`${apiCall.baseUrl}${endpoint}`, data);
    return response;
  },
  put: async (endpoint: string) => {
    const response = await axios.put(`${apiCall.baseUrl}${endpoint}`);
    return response;
  },
  delete: async (endpoint: string) => {
    const response = await axios.delete(`${apiCall.baseUrl}${endpoint}`);
    return response;
  },
};
