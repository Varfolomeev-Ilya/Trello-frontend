import { createAction, createReducer } from '@reduxjs/toolkit';
import * as actionTypes from './constants/actionTypes';

const initialState = {
  allUsers: [],
  registeredUser: {},
};

const setUsers = createAction(actionTypes.SET_USERS);
const regUser = createAction(actionTypes.REG_USER);

const usersReducer = createReducer(initialState, {
  [setUsers]: (state, action) => {
    state.allUsers = action.payload;
  },
  [regUser]: (state, action) => {
    state.registeredUser = action.payload;
  },
});

export { usersReducer, setUsers, regUser };