import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  isAuthentificated: false,
};

const changeIsAuthentification = createAction('CHANGE_IS_AUTH');

const checkAuthReducer = createReducer(initialState, {
  [changeIsAuthentification]: (state, action) => {
    state.isAuthentificated = action.payload;
  }
});

export { checkAuthReducer, changeIsAuthentification };