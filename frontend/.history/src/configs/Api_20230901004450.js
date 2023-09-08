import axios from 'axios';

const SERVER = 'http://localhost:8080/';

export const endpoints = {
    posts: '/api/posts',
    comments: (id) => `/api/posts/${id}/comments`,
    reactions: '/api/reactions',
    login: '/api/login',
    'current-user': '/api/login',
};

export default axios.create({
    baseURL: SERVER,
});
