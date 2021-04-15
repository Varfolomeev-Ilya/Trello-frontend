import axios from './axios';

export const getColumns = async (boardId) => {
    const response = await axios.get('/column', {
        params: {boardId}
    })
    return response;
}

export const updateNameColumn = async (data) => {
   return await axios.patch('/column',data)
}

export const postColumn = async (data) => {
    return await axios.post('/column', data)
}

export const deleteColumn = async (columnId) => {
    return await axios.delete('/column', {
        data: {columnId}
    })
}

export const updateColumns = async (data) => {
    return await axios.put('/column', data)
}