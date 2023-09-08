import axios from 'axios';

const SERVER = 'http://localhost:8080/';

export const endpoints = {
    posts: '/api/posts',
    comments: '/api/comments',
    reaction: '/api/reactions',
};

export default axios.create({
    baseURL: SERVER,
});
