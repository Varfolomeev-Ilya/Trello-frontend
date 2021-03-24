import instance from './axios';

export const postImage = (data) => {
  return instance.post(`sign-in`,data)
};

