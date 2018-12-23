import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-kitchen-a67ed.firebaseio.com/'
});

export default instance;