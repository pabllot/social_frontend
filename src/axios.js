import axios from 'axios';

export const makeRequest = axios.create({
    baseURL: "http://socialmedia-backend-steel.vercel.app/api/",
    withCredentials: true
})