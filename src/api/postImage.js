import axios from './axios';


export const postImage = (data)  => {
  return axios.post(`user/account`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
};

