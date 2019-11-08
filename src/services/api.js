import axios from "axios";

import { isAuthenticated, getToken } from "./auth";

const api = axios.create({
  baseURL: "http://localhost:3333"
});

const getHistorico = axios.get({
  baseURL: "http://localhost:3333/historico"
})

api.interceptors.request.use(async config => {

  if (isAuthenticated()) {
    const { token } = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default api;
