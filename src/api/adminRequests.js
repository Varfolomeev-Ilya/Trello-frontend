import axios from './axios';

export const getAllUsers = (data) => {
  return axios.get(`/admin`,data)
};