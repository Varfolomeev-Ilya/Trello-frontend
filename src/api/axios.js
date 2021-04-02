import axios from 'axios';

  const token = localStorage.getItem('isAuthenticated');
  const upToken = JSON.parse(token);

  const instance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Content-Type': 'application/json', 
      Authorization: `Bearer ${upToken}`
    },
    setTimeout: 1000
  });

export default instance;
