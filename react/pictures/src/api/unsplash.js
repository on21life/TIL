import axios from 'axios';

const agent = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {Authorization: "Client-ID c133ed13e3ae118d4f88c4d798b8e8767c17cfdf4cef23c3767af4e8bdb0bfc5"},
});

export default agent;
