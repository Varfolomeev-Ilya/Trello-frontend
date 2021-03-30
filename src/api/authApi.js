import axios from './axios';

export const postRegisterUser = (data) => {
  return axios.post(`/sign-up`, JSON.stringify(data))
};

export const postLoginUser = (data) => {
  return axios.post('/sign-in', JSON.stringify(data))
};  
