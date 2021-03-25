import axios from 'axios';

const instance = axios.create ({
  baseURL : 'http://127.0.0.1:3000/',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
    'Accept': 'application/json, */*; q=0.01'
  },
});

export default instance;
