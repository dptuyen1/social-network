import axios from 'axios';
import { Cookies } from 'react-cookie';

const SERVER = 'http://localhost:8080';

export const endpoints = {
    posts: '/api/posts',
    reactions: '/api/reactions',
    login: '/api/login',
    'current-user': '/api/current-user',
};

export const authApi = () => {
    return axios.create({
        baseURL: SERVER,
        headers: {
            Authorization: Cookies.load,
        },
    });
};

export default axios.create({
    baseURL: SERVER,
});
