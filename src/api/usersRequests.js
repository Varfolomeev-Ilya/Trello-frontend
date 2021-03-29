import axios from './axios';

export const postInfoUser = (data) => {
  axios.put(`/account`, JSON.stringify(data))
    .then((response) => {
      alert(response.data.message)
    })
    .catch((error) => {
      alert(error.response.data.message)
    })
};