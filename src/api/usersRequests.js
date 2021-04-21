import axios from './axios';

export const postInfoUser = (data) => {
  return axios.patch(`user/account` , JSON.stringify(data))
};