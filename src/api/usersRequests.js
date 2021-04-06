import axios from './axios';

export const postInfoUser = (data) => {
  return axios.patch(`/account` , JSON.stringify(data))
};