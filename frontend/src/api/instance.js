import axios from "axios";

export const userInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
});
export const adminInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/admin",
});
