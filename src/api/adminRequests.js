import axios from './axios';

export const getAllUsers = (data) => {
  axios.get(`/admin`,data)
    .then((response) => {
      alert(JSON.stringify(response.data.allUsers))
    })
    .catch((error) => {
      alert(error.response.data.message)
    })
};