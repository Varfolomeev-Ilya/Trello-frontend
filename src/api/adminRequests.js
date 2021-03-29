import axios from './axios';

export const getAllUsers = () => {
  axios.get(`/admin`)
    .then((response) => {
      alert(JSON.stringify(response.data.allUsers))
    })
    .catch((error) => {
      alert(error.response.data.message)
    })
};