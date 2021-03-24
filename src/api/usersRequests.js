import instance from './axios';

export const getRequest = () => {
  return instance.get(`home`)
};