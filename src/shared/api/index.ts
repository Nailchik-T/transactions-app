import axios from "axios";
export const BACKEND_URL = import.meta.env.VITE_API_URL;

export const apiClient = axios.create({
    baseURL: BACKEND_URL,
    headers: {
        "Content-Type": "application/json",
    },
});
