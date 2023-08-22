import axios from 'axios';

export const endpoints = {
    posts: '/api/posts',
    reactions: '/api/reactions',
    login: '/api/login',
    current-user: '/api/current-user',
};

export default axios.create({
    baseURL: 'http://localhost:8080',
});
