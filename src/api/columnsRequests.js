import axios from './axios';

export const getColumns = async (boardId) => {
    const response = await axios.get('/columns', {
        params: {boardId}
    })
    return response;
}

export const updateNameColumn = async (data) => {
   return await axios.patch('/columns',data)
}

export const postColumn = async (data) => {
    return await axios.post('/columns', data)
}

export const deleteColumn = async (columnId) => {
    return await axios.delete('/columns', {
        data: {columnId}
    })
}

export const updateColumns = async (data) => {
    return await axios.put('/columns', data)

};

export const taskColumnPosition = async (data) => {
    return await axios.patch('/columns/tasks', data)
};