import axios from 'axios';

export const endpoints = {
    posts: '/api/posts',
};

export default axios.create({
    baseURL: 'http://localhost:8080',
});
