import axios from './axios';


export const postImage = ({formData}) => {
  return axios.post(`/account`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
};

