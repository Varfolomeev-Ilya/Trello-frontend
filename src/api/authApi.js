import instance from './axios';
// import axios from 'axios';

/**
 * @param {{
 *  email: string;
 *  password: string;
 *  statuscode: string;
 *  message: {}
 * }} data
 */
// function axiosTest() {
//   const promise = instance.post(`sign-in`);
//   const dataPromise = promise.then((response) => response.data)
//   return dataPromise
// }
// axiosTest()
//   .then(data =>{
//     response.json({ message: 'yes', data})
// })
// .catch(err=> console.log(err))

// export const signIn = () => {
//   instance.post(`sign-in`)
//   .then((response) => {
//     console.log(response)
//   }).catch(console.log('d'))   
//   axiosTest()
// } 

// export const signIn = () => {
//   return instance.post(`sign-in`).then(response => response.data)
// }
  

// export const signIn = (response) => {
//   instance.post(`sign-in`,response.data)
//   .then(()=> console.log('123'))
//   .catch(err=> {
//     console.log(err)
//   })
// }

export const signIn = () => {
instance.post(`sign-in`, {
  params: {
    email: '',
    password: ''
  }
})
.then(function (response) {
  return console.log(response);
})
.catch(function (error) {
  console.log(error);
})
.then(function () {
}); 
}