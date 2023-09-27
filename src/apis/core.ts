import axios from 'axios';
import { getGitHubToken } from '../utils/auth';
export const BASE_URL = 'https://api.github.com/';


const config = {
    baseURL : BASE_URL,
    headers: { 
        'Content-Type': 'application/json'
    },
}
export const api=axios.create(config)

api.interceptors.request.use((config) => {
    const token = getGitHubToken;
    if (typeof token === 'string') {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});