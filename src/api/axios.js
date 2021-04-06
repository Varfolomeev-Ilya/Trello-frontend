import axios from 'axios';
import * as config from '../utils/config'

const token = localStorage.getItem('isAuthenticated');
const JWT = JSON.parse(token);

const instance = axios.create({
  baseURL: config.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${JWT}`,
  },
  setTimeout: 1000
});

export default instance;
