import instance from './axios';

/**
 * @param {{
 *  email: string;
 *  password: string;
 *  statuscode: string;
 *  message: {}
 * }} data
 */

export const signIn = (data) => {
  return instance.post(`sign-in`,data);
};

export const signUp = (data) => {
  return instance.post(`sign-up`,data);
};


