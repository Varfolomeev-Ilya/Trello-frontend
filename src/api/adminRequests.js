import axios from './axios';

export const getAllUsers = (data) => {
  return axios.get(`/admin`, data)
};

export const getOneUser = (data) => {
  return axios.get(`/admin`, data)
};