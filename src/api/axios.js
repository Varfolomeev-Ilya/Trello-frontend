import axios from 'axios';

  const token = localStorage.getItem('isAuthenticated');
  const JWT = JSON.parse(token);

  const instance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Content-Type': 'application/json', 
      Authorization: `Bearer ${JWT}`
    },
    setTimeout: 1000
  });

export default instance;
