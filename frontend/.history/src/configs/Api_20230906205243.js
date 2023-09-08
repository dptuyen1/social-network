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
    'edit-comment': (id) => `/api/comments/${id}/edit`,
    'get-post': (id) => `api/posts/${id}`,
    'edit-post': (id) => `/api/posts/${id}/edit`,
    register: '/api/register',
    'existed-user': (username) => `/api/existed-user/${username}`,
    'auth-user': 'api/auth-user',
    'change-password': (username) => `/api/${username}/change-password`,
    'posts-of-user': (id) => `/api/posts/user/${id}`,
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
