import axios from 'axios';
import cookie from 'react-cookies';

const SERVER = 'http://localhost:8080/';

export const endpoints = {
    posts: '/api/posts',
    comments: (id) => `/api/posts/${id}/comments`,
    reactions: '/api/reactions',
    login: '/api/login',
    'current-user': '/api/current-user',
    'add-comment': '/api/comments/add',
    'lock-unlock': (id) => `/api/posts/${id}/lock-or-unlock`,
    'delete-post': (id) => `/api/posts/${id}/delete`,
    'add-details': 'api/details/add',
    'delete-comment': (id) => `/api/comments/${id}/delete`,
    'add-post': '/api/posts/add',
    'get-comment': (id) => `api/comments/${id}`,
};

export const authApi = () => {
    return axios.create({
        baseURL: SERVER,
        headers: {
            Authorization: cookie.load('token'),
        },
    });
};

export default axios.create({
    baseURL: SERVER,
});
