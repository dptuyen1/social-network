import axios from 'axios';

const SERVER = 'http://localhost:8080'

export const endpoints = {
    posts: '/api/posts',
    reactions: '/api/reactions',
    login: '/api/login',
    'current-user': '/api/current-user',
};

export const authApi = () => {
    return axios.create({
        baseURL: ""
    })
}

export default axios.create({
    baseURL: ,
});
