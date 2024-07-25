import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8006/api'
});

export default instance;