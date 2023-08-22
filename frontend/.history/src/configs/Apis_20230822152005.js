import axios from 'axios';

export const endpoints = {
    posts: '/api/posts',
    reactions: '/api/reactions',
    login: '/api/login',
};

export default axios.create({
    baseURL: 'http://localhost:8080',
});
