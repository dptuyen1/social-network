import axios from 'axios';
import cookie from 'react-cookies'

const SERVER = 'http://localhost:8080/';

export const endpoints = {
    posts: '/api/posts',
    comments: (id) => `/api/posts/${id}/comments`,
    reactions: '/api/reactions',
    login: '/api/login',
    'current-user': '/api/current-user',
};

export const authApi = () => {
    return axios.create({
        baseURL: SERVER,
        headers: {
            Authorization: 
        }
    });
};

export default axios.create({
    baseURL: SERVER,
});
