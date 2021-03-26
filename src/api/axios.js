import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:8080',
        'Content-Type': 'application/json',
  },
  setTimeout: 1000
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return config;
  }
  config.headers['x-access-token'] = token;
  return config;
});

export default instance;
