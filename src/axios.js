import axios from 'axios';

export const makeRequest = axios.create({
    baseURL: "http://socialmediapablot.vercel.app/api/",
    withCredentials: true
})