import axios from './axios';


export const postImage = (data)  => {
  return axios.post(`/account`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
};

