import axios from './axios';

export const postImage = (file) => {
  axios.post(`/account`,file)
    .then((response) => {
      alert(response.data.message)
    })
    .catch((error) => {
      alert(error.response.data.message)
    })
};

