import { createAction, createReducer } from '@reduxjs/toolkit';
import * as actionTypes from './constants/actionTypes';

const initialState = {
  allusers: [],
  registereduser: {},
};

const setUsers = createAction(actionTypes.SET_USERS);
const regUser = createAction(actionTypes.REG_USER)

const usersReducer = createReducer(initialState, {
  [setUsers]: (state, action) => {
    state.allUsers = action.payload;
  },
  [regUser]: (state, action) => {
    state.registereduser = action.payload;
  },
  
});

export { usersReducer, setUsers, regUser };