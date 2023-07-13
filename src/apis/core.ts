import axios from 'axios';
import { getGitHubToken } from '../utils/auth';
export const BASE_URL = 'https://api.github.com/';


const instance = (url : string) =>{
    return axios.create({
        baseURL : url,
        headers: { 
        'Content-Type': 'application/json' ,
        Authorization: `Bearer ${getGitHubToken()}`
    },
    })
}

export const api=instance(BASE_URL);