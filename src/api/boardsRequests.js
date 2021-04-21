import axios from './axios';

export const postBoard = async (data) => {
  return await axios.post(`/boards`, data)
}

export const deleteBoard = async (boardId) => {
  return await axios.delete(`/boards`, {
    data: { boardId }
  })
}

export const updateBoard = async (data) => {
  return await axios.patch('/boards', data)
}

export const getBoards = async (userId) => {
  const response =  await axios.get('/boards',{
    params: {userId}
  });
  return response;
}

export const setColumnsPosition = async (data) => {
  return await axios.patch('/boards/column', data)
}