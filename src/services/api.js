import axios from "axios";

const api = axios.create({
  baseURL: "http://172.31.32.76:3333",
});

export default api;
