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
  return await axios.patch('/board', data)
}

export const getBoards = async (data) => {
  const response =  await axios.get('/boards',data);
  return response;
}

export const columnsBoardPosition = async (data) => {
  return await axios.patch('/board-column', data)
}