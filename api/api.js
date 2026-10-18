import axios from "axios";

const api = axios.create({
  baseURL: "https://api-contatos-auth-04-09-25.onrender.com",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;