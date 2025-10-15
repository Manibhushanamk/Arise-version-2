import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production' 
        ? 'https://arise-version-2.onrender.com' 
        : '/'
});

export default instance;