import axios from 'axios';

export const endpoints = {
    posts: '/posts',
};

export default axios.create({
    baseURL: 'http://localhost:8080/api',
});
