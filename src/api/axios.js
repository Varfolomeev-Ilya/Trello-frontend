import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:8080' ,
    'Content-Type': 'application/json', 
  },
  setTimeout: 1000
});

export default instance;
