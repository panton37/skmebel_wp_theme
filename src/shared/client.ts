import axios from "axios";

const client = axios.create({
    baseURL: '/wp-json'
});

export default client;