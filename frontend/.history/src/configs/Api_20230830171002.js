import axios from 'axios';

const SERVER = 'http://localhost:8080/';

export default axios.create({
    baseURL: SERVER,
});
