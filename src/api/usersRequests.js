import axios from './axios';

export const postInfoUser = (data) => {
  return axios.put(`/account/:id`,data)
};