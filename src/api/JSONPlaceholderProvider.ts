import axios from 'axios';

export const JSONPlaceholderProvider = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})
