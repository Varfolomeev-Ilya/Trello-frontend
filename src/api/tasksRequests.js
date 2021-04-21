import axios from './axios';

export const postTask = async (data) => {
  return  await axios.post('/tasks', data);
};

export const deleteTask = async (taskDelId) => {
  return await axios.delete('/tasks', {
    data: { taskDelId },
  })
};

export const updateTask = async (data) => {
  return await axios.patch('/tasks', data);
};

export const movingTasks = async (data) => {
  return await axios.patch('/tasks/column', data);
}