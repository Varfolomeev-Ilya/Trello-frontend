import axios from './axios';

export const postInfoUser = (data) => {
  axios.patch(`/account`, JSON.stringify(data))
};