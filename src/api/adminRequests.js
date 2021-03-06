import axios from './axios';

export const getAllUsers = async (roleId) => {
  return await axios.get(`/admin`, {
    params: roleId,
  })
};

export const updateUser = async (data) => {
  return await axios.patch(`/admin/user`, data )
};

export const deleteUser = async (id) => {
  return await axios.delete(`/admin/user-delete`, {
    params: id,
  })
}
