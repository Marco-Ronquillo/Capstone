import axios from 'axios';

const api = axios.create({
    baseURL: "https://your-secure-api.com",
    headers: { "Content-Type": "application/json" }
});

export default api;