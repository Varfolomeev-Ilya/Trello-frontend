import { createAction, createReducer } from '@reduxjs/toolkit';
import * as actionTypes from './constants/actionTypes';

const initialState = {
  authUser: false,
};

const setAuthUser = createAction(actionTypes.SET_AUTH_USER);

const checkAuthReducer = createReducer(initialState, {
  [setAuthUser]: (state, action) => {
    state.authUser = action.payload;
  },
});

export { checkAuthReducer, setAuthUser };