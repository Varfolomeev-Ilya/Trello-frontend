import axios from './axios';

export const postImage = () => {
  axios.post(`/account`)
    .then((response) => {
      alert(response.data.message)
    })
    .catch((error) => {
      alert(error.response.data.message)
    })
};

