import axios from './axios';

export const postBoard = (data) => {
  return axios.post(`/boards`, JSON.stringify(data))
} 