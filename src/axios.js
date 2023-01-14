import axios from 'axios';

export const makeRequest = axios.create({
    baseURL: "https://socialbackend-production.up.railway.app/api/",
    withCredentials: true
})