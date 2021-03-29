import axios from './axios';

export const postRegisterUser = (data) => {
  axios.post(`/sign-up`, JSON.stringify(data))
    .then((response) => {
      alert(response.data.message)
    })
    .catch((error) => {
      alert(error.response.data.message)
    })
};

export const postLoginUser = (data) => {
  axios.post('/sign-in', JSON.stringify(data))
    .then((response) => {
      localStorage.setItem('isAuthenticated', JSON.stringify(response.data.tokens.refreshToken),
      );
      alert(JSON.stringify(response.data.message))
    })
};
