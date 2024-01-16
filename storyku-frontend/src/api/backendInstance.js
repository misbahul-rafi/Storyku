import axios from 'axios';

const baseURL = 'http://localhost:3000';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:5173';
const instance = axios.create({
    baseURL: baseURL,
});

export default instance;