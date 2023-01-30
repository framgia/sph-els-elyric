import axios from "axios";

const token = localStorage.getItem("token");
const admin_token = localStorage.getItem("admin_token");

export const userInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
export const adminInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/admin",
  headers: {
    Authorization: `Bearer ${admin_token}`,
  },
});
